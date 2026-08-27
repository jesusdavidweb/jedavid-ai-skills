import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SKILLS_DIR = path.join(ROOT, 'skills');
const OUT_DIR = path.join(ROOT, '.dist', 'opencode');

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

async function findSkills(): Promise<string[]> {
  return (await walk(SKILLS_DIR))
    .filter((file) => path.basename(file) === 'SKILL.md')
    .map((file) => path.dirname(file))
    .sort();
}

async function hashPackage(dir: string, files: string[]): Promise<string> {
  const hash = createHash('sha256');
  for (const relative of files) {
    hash.update(relative);
    hash.update('\0');
    hash.update(await readFile(path.join(dir, relative)));
    hash.update('\0');
  }
  return `sha256-${hash.digest('hex').slice(0, 20)}`;
}

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const index = { skills: [] as Array<{ name: string; version: string; files: string[] }> };

for (const skillDir of await findSkills()) {
  const name = path.basename(skillDir);
  const allFiles = (await walk(skillDir))
    .map((file) => path.relative(skillDir, file).split(path.sep).join('/'))
    .sort();

  const publishedFiles = allFiles.map((file) => file === 'SKILL.md' ? `${name}.md` : file);
  const targetDir = path.join(OUT_DIR, name);
  await mkdir(targetDir, { recursive: true });

  for (const relative of allFiles) {
    const targetRelative = relative === 'SKILL.md' ? `${name}.md` : relative;
    const target = path.join(targetDir, targetRelative);
    await mkdir(path.dirname(target), { recursive: true });
    await cp(path.join(skillDir, relative), target);
  }

  index.skills.push({
    name,
    version: await hashPackage(skillDir, allFiles),
    files: publishedFiles,
  });
}

await writeFile(path.join(OUT_DIR, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
console.log(`Generated OpenCode HTTP catalog with ${index.skills.length} skills at .dist/opencode`);
