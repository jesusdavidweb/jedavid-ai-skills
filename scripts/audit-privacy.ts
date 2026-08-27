import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const ignoredDirs = new Set(['.git', 'node_modules', '.dist', 'dist', 'coverage']);
const textExtensions = new Set([
  '.md', '.json', '.jsonc', '.yml', '.yaml', '.ts', '.js', '.mjs', '.cjs',
  '.py', '.sh', '.bash', '.txt', '.toml', '.ini', '.cfg', '.conf', '.env',
]);
const explicitTextFiles = new Set(['LICENSE', 'Dockerfile', 'Makefile']);

type Finding = { file: string; line: number; kind: string; sample: string; severity: 'error' | 'warning' };
const findings: Finding[] = [];

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else if (textExtensions.has(extname(entry.name)) || explicitTextFiles.has(entry.name)) out.push(p);
  }
  return out;
}

function redact(value: string): string {
  if (value.length <= 8) return '[redacted]';
  return `${value.slice(0, 4)}…${value.slice(-3)}`;
}

function isDocumentationIPv4(ip: string): boolean {
  const [a, b, c] = ip.split('.').map(Number);
  if (a === 10 || a === 127 || a === 0) return true;
  if (a === 192 && b === 168) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 169 && b === 254) return true;
  if (a === 192 && b === 0 && c === 2) return true;       // TEST-NET-1
  if (a === 198 && b === 51 && c === 100) return true;    // TEST-NET-2
  if (a === 203 && b === 0 && c === 113) return true;     // TEST-NET-3
  return false;
}

const secretPatterns: Array<[string, RegExp]> = [
  ['private-key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['aws-access-key', /\bAKIA[0-9A-Z]{16}\b/g],
  ['github-token', /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}\b|\bgithub_pat_[A-Za-z0-9_]{20,}\b/g],
  ['stripe-live-secret', /\bsk_live_[A-Za-z0-9]{16,}\b/g],
  ['context7-key', /\bctx7sk-[A-Za-z0-9-]{20,}\b/g],
  ['slack-token', /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g],
  ['bearer-token', /\bBearer\s+[A-Za-z0-9._~+\/-]{20,}=*\b/g],
];

const placeholderValues = /^(?:example|placeholder|changeme|your[-_ ]|test|dummy|redacted|\$\{|\{env:|<)/i;

for (const file of await walk(root)) {
  if (file.endsWith('scripts/audit-privacy.ts')) continue; // avoid matching scanner signatures themselves
  const rel = relative(root, file);
  const text = await readFile(file, 'utf8');
  const lines = text.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('privacy-scan: allow')) continue;

    for (const [kind, pattern] of secretPatterns) {
      pattern.lastIndex = 0;
      const match = pattern.exec(line);
      if (match) findings.push({ file: rel, line: i + 1, kind, sample: redact(match[0]), severity: 'error' });
    }

    const assignment = line.match(/\b(?:password|passwd|api[_-]?key|secret|access[_-]?token|auth[_-]?token)\b\s*[:=]\s*["']([^"']{8,})["']/i);
    if (assignment && !placeholderValues.test(assignment[1])) {
      findings.push({ file: rel, line: i + 1, kind: 'literal-sensitive-assignment', sample: redact(assignment[1]), severity: 'error' });
    }

    for (const match of line.matchAll(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi)) {
      const email = match[0];
      if (!/@(?:example\.com|example\.org|example\.net)$/i.test(email)) {
        findings.push({ file: rel, line: i + 1, kind: 'email-address', sample: redact(email), severity: 'warning' });
      }
    }

    const homePath = line.match(/\/(?:Users|home)\/([^/\s"']+)\//);
    if (homePath && !/^(?:user|username|example|runner|home)$/i.test(homePath[1])) {
      findings.push({ file: rel, line: i + 1, kind: 'absolute-home-path', sample: `/…/${redact(homePath[1])}/`, severity: 'warning' });
    }

    for (const match of line.matchAll(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)) {
      const ip = match[0];
      const octets = ip.split('.').map(Number);
      if (octets.some((n) => n > 255) || isDocumentationIPv4(ip)) continue;
      findings.push({ file: rel, line: i + 1, kind: 'public-ipv4', sample: redact(ip), severity: 'warning' });
    }
  }
}

const errors = findings.filter((f) => f.severity === 'error');
const warnings = findings.filter((f) => f.severity === 'warning');

for (const finding of findings) {
  const prefix = finding.severity === 'error' ? 'ERROR' : 'WARN';
  console.log(`${prefix} ${finding.file}:${finding.line} ${finding.kind} ${finding.sample}`);
}

console.log(`Privacy audit complete: ${errors.length} error(s), ${warnings.length} warning(s).`);
if (errors.length) process.exit(1);
