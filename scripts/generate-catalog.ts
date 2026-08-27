import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const SKILLS_ROOT = join(ROOT, 'skills');

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

function frontmatterName(source: string): string {
  const end = source.indexOf('\n---\n', 4);
  if (!source.startsWith('---\n') || end < 0) return '';
  const line = source.slice(4, end).split('\n').find((row) => row.startsWith('name:'));
  return line ? line.slice(5).trim().replace(/^['"]|['"]$/g, '') : '';
}

const files = (await walk(SKILLS_ROOT)).sort();
const skills = [];
for (const file of files) {
  const source = await readFile(file, 'utf8');
  const path = relative(ROOT, file).split(sep).join('/');
  const parts = path.split('/');
  skills.push({
    name: frontmatterName(source) || basename(dirname(file)),
    category: parts[1],
    path,
  });
}

const catalog = {
  schemaVersion: 1,
  repository: 'jesusdavidweb/skills',
  license: 'MIT',
  skillCount: skills.length,
  skills,
};

await mkdir(join(ROOT, 'catalog'), { recursive: true });
await writeFile(join(ROOT, 'catalog', 'skills.json'), `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Generated catalog/skills.json with ${skills.length} skills.`);
