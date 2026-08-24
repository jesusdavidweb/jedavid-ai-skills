import { readdir, readFile } from 'node:fs/promises';
import { basename, dirname, join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SKILLS_ROOT = join(ROOT, 'skills');
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(path));
    else if (entry.name === 'SKILL.md') out.push(path);
  }
  return out;
}

function parseFrontmatter(source: string): Record<string, string> {
  if (!source.startsWith('---\n')) return {};
  const end = source.indexOf('\n---\n', 4);
  if (end < 0) return {};
  const fm = source.slice(4, end);
  const result: Record<string, string> = {};
  for (const raw of fm.split('\n')) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const colon = raw.indexOf(':');
    if (colon < 1) continue;
    const key = raw.slice(0, colon).trim();
    let value = raw.slice(colon + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    result[key] = value;
  }
  return result;
}

const files = (await walk(SKILLS_ROOT)).sort();
const errors: string[] = [];
const warnings: string[] = [];
const names = new Map<string, string>();

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const fm = parseFrontmatter(source);
  const path = relative(ROOT, file).split(sep).join('/');
  const directoryName = basename(dirname(file));
  const name = fm.name;
  const description = fm.description;

  if (!name) errors.push(`${path}: missing frontmatter name`);
  if (!description) errors.push(`${path}: missing frontmatter description`);
  if (name && !NAME_RE.test(name)) errors.push(`${path}: invalid name '${name}'`);
  if (name && name.length > 64) errors.push(`${path}: name exceeds 64 characters`);
  if (description && description.length > 1024) errors.push(`${path}: description exceeds 1024 characters`);
  if (name && name !== directoryName) errors.push(`${path}: name '${name}' must match directory '${directoryName}'`);
  if (name && names.has(name)) errors.push(`${path}: duplicate skill name '${name}' also used by ${names.get(name)}`);
  if (name) names.set(name, path);

  if (fm.license && fm.license !== 'MIT') warnings.push(`${path}: repository license is MIT but frontmatter license is '${fm.license}'`);
  if (!source.includes('\n## Workflow')) warnings.push(`${path}: no explicit Workflow section`);
}

console.log(`Validated ${files.length} Agent Skills.`);
for (const warning of warnings) console.warn(`WARN  ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR ${error}`);
  process.exit(1);
}
console.log('Agent Skills metadata is valid.');
