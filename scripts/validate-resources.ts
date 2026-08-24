import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

const root = process.cwd();
const skillsRoot = join(root, 'skills');
const problems: string[] = [];
const referenced = new Set<string>();

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else out.push(p);
  }
  return out;
}

for (const file of (await walk(skillsRoot)).filter((p) => p.endsWith('/SKILL.md'))) {
  const text = await readFile(file, 'utf8');
  const lines = text.split(/\r?\n/).length;
  if (lines > 500) problems.push(`${relative(root,file)} exceeds 500 lines (${lines})`);
  for (const match of text.matchAll(/`((?:references|scripts|assets)\/[^`]+)`/g)) {
    const target = join(dirname(file), match[1]);
    referenced.add(target);
    try { await stat(target); } catch { problems.push(`${relative(root,file)} references missing ${match[1]}`); }
  }
}

for (const file of await walk(skillsRoot)) {
  if (!/(\/references\/|\/scripts\/|\/assets\/)/.test(file)) continue;
  if (!referenced.has(file)) problems.push(`orphan resource not referenced by SKILL.md: ${relative(root,file)}`);
  if (file.includes('/scripts/')) {
    const text = await readFile(file, 'utf8');
    if (/\.(?:sh|bash)$/.test(file) && !text.startsWith('#!')) problems.push(`shell script missing shebang: ${relative(root,file)}`);
    if (/AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|sk_live_[A-Za-z0-9]+/.test(text)) problems.push(`possible embedded secret: ${relative(root,file)}`);
  }
}

if (problems.length) { console.error(problems.map((x)=>`- ${x}`).join('\n')); process.exit(1); }
console.log(`Resource validation passed (${referenced.size} referenced resources).`);
