# Agent Compatibility

This repository uses directory-based Agent Skills:

```text
skills/<domain>/<skill-id>/SKILL.md
```

Each canonical `SKILL.md` uses portable YAML frontmatter with a lowercase kebab-case `name` and a specific `description`. Repository-level licensing is MIT; optional per-skill `license`, `compatibility`, and `metadata` fields may be used when a skill genuinely needs them.

## Canonical source

`skills/` is the source of truth. Do not maintain duplicate skill bodies under `.claude`, `.agents`, `.opencode`, or client-specific directories inside this repository. Installation tooling should place or link the canonical skill into the correct client directory.

## Supported targets

| Environment | Status | Preferred installation |
| --- | --- | --- |
| OpenAI Codex | Supported by the open `skills` CLI | `npx skills add ... -a codex` |
| Claude Code | Supported by the open `skills` CLI | `npx skills add ... -a claude-code` |
| OpenCode | Native Agent Skills support and `skills` CLI target | `npx skills add ... -a opencode` |
| MiniMax Code | Agent Skills ecosystem supported; exact client path may evolve | generic `npx skills add ... -g` until a stable MiniMax-specific target is published |
| Other compatible agents | Usually portable | use the agent target exposed by `npx skills` |

## OpenCode discovery

OpenCode natively discovers skills from project/global `.opencode/skills`, `.claude/skills`, and `.agents/skills` sources, and can also load explicit local/HTTP skill sources. Directory-based skills are preferred because supporting `scripts/`, `references/`, and `assets/` can remain adjacent to `SKILL.md`.

## Portability rules

- `name` must be 1-64 characters, lowercase kebab-case, and match the skill directory.
- `description` must be present and remain below 1024 characters.
- Keep frontmatter small and cross-agent by default.
- Use relative paths inside a skill.
- Supporting resources belong inside the skill directory.
- Do not assume proprietary tool names when a generic capability description is enough.
- Mark optional tool integrations explicitly.
- Never embed credentials or account identifiers.
- Client adapters must not change canonical semantics.

## Automated validation

CI validates metadata and then asks the open `skills` CLI to discover the repository. It also performs a smoke installation of `repo-audit` for Codex, Claude Code, and OpenCode using `--copy`, avoiding symlink-specific false negatives.

Local checks:

```bash
npm run validate
npm run catalog
npx skills add . --list
```

See `docs/INSTALLATION.md` for install commands.
