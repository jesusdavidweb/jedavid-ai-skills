import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const evalDir = join(root, 'evals');
const skillsDir = join(root, 'skills');
const errors: string[] = [];
let caseCount = 0;

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(path));
    else out.push(path);
  }
  return out;
}

const skillFiles = (await walk(skillsDir)).filter((p) => p.endsWith('/SKILL.md'));
const skillNames = new Set<string>();
const deepSkills = new Set<string>();
for (const file of skillFiles) {
  const text = await readFile(file, 'utf8');
  const name = text.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  if (!name) continue;
  skillNames.add(name);
  const dir = file.slice(0, -'/SKILL.md'.length);
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    if (entries.some((e) => e.isDirectory() && ['references','scripts','assets'].includes(e.name))) deepSkills.add(name);
  } catch {}
}

const evalNames = new Set<string>();
for (const filename of await readdir(evalDir)) {
  if (!filename.endsWith('.json')) continue;
  const data = JSON.parse(await readFile(join(evalDir, filename), 'utf8'));
  const expectedName = filename.replace(/\.json$/, '');
  if (!data.skill || data.skill !== expectedName) errors.push(`${filename}: skill must match filename`);
  if (!skillNames.has(data.skill)) errors.push(`${filename}: unknown skill ${data.skill}`);
  if (!Array.isArray(data.cases) || data.cases.length < 2) { errors.push(`${filename}: requires at least 2 cases`); continue; }
  evalNames.add(data.skill);
  caseCount += data.cases.length;
  let positives = 0, negatives = 0;
  for (const [i, c] of data.cases.entries()) {
    if (typeof c.prompt !== 'string' || typeof c.shouldActivate !== 'boolean') errors.push(`${filename} case ${i}: missing prompt/shouldActivate`);
    if (c.shouldActivate === true) positives++; else if (c.shouldActivate === false) negatives++;
    if (Array.isArray(c.alsoConsider)) for (const other of c.alsoConsider) if (!skillNames.has(other)) errors.push(`${filename} case ${i}: unknown alsoConsider ${other}`);
  }
  if (!positives || !negatives) errors.push(`${filename}: requires positive and negative activation cases`);
}

for (const skill of deepSkills) if (!evalNames.has(skill)) errors.push(`deep skill missing eval fixture: ${skill}`);

if (errors.length) { console.error(errors.map((e) => `- ${e}`).join('\n')); process.exit(1); }
console.log(`Eval validation passed (${evalNames.size} skills, ${caseCount} cases, ${deepSkills.size} deep skills covered).`);
