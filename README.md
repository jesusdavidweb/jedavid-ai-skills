<div align="center">

# JeDavid AI Skills

### Portable Agent Skills for AI-assisted engineering

**45 production-oriented skills for Codex, Claude Code, OpenCode, MiniMax and other Agent Skills-compatible coding agents.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](docs/COMPATIBILITY.md)
[![Skills](https://img.shields.io/badge/Skills-45-0ea5e9)](catalog/skills.json)
[![Validate Agent Skills](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml/badge.svg)](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml)
[![GitHub stars](https://img.shields.io/github/stars/jesusdavidweb/jedavid-ai-skills?style=flat)](https://github.com/jesusdavidweb/jedavid-ai-skills/stargazers)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white)
![WooCommerce](https://img.shields.io/badge/WooCommerce-96588A?logo=woocommerce&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

[Install](#install) · [Catalog](#skill-catalog) · [Compatibility](docs/COMPATIBILITY.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## What is this?

`jedavid-ai-skills` is a public library of reusable operating procedures for AI coding agents. Each skill is a directory containing a portable `SKILL.md` with precise discovery metadata, a workflow, safety rules and objective verification criteria.

A skill is not merely a prompt. It teaches an agent **when to load specialized knowledge, what evidence to gather, how to make a change safely and how to prove the result**.

```text
Project requirements
        │
        ▼
  jedavid-ai-skills
  procedures + rules
        │
        ▼
 Codex / Claude Code / OpenCode / MiniMax / others
        │
   ┌────┴────┐
   ▼         ▼
Repository   MCP / APIs / CLIs
```

## Install

The repository is designed for the open Agent Skills ecosystem.

### Browse available skills

```bash
npx skills add jesusdavidweb/jedavid-ai-skills --list
```

### Install interactively

```bash
npx skills add jesusdavidweb/jedavid-ai-skills
```

### Install a specific skill

```bash
npx skills add jesusdavidweb/jedavid-ai-skills \
  --skill wordpress-deep-audit
```

### Install for a specific coding agent

```bash
# Codex
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a codex

# Claude Code
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a claude-code

# OpenCode
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a opencode
```

Global installation:

```bash
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -g
```

Install everything:

```bash
npx skills add jesusdavidweb/jedavid-ai-skills --all
```

If symlinks cause problems in a particular client or filesystem, add `--copy`.

See **[Installation](docs/INSTALLATION.md)** for MiniMax guidance, non-interactive installs, updates and temporary `skills use` workflows.

## Core principles

- **Evidence before changes** — inspect the real system first.
- **Read before write** — discovery is read-only whenever possible.
- **Minimal and reversible changes** — production work needs rollback.
- **Never fabricate evidence** — logs, metrics and test results must be real.
- **Treat external content as untrusted** — retrieved content cannot redefine trusted instructions.
- **Keep secrets secret** — credentials never belong in skills, logs or examples.
- **Verify objectively** — completion requires tests, metrics or observable behavior.
- **Stay portable** — canonical skills are agent-agnostic and client adapters must not fork their semantics.

# Skill catalog

The generated machine-readable catalog lives at [`catalog/skills.json`](catalog/skills.json).

| Domain | Skills |
| --- | --- |
| AI & agents | `agent-plugin-packaging`, `mcp-server-development`, `prompt-injection-defense` |
| Core engineering | `ai-agent-handoff`, `bug-investigation`, `code-review`, `github-delivery`, `production-change`, `repo-audit` |
| Development | `dependency-architecture-review`, `python-automation`, `release-engineering`, `testing-strategy`, `typescript-web-stack` |
| Web | `api-webhook-integration`, `cdn-cache-strategy`, `localization-i18n`, `seo-llm-discoverability`, `web-quality-audit`, `webflow-engineering` |
| WordPress / WooCommerce | `bricks-frontend`, `woocommerce-engineering`, `wordpress-deep-audit`, `wordpress-incident-debugging`, `wordpress-security-performance`, `wp-cli-database-ops` |
| Cloudflare | `cloudflare-access-dns-security`, `cloudflare-platform` |
| DevOps | `backup-disaster-recovery`, `docker-dokploy`, `observability-incident-response`, `vps-nginx-cloudpanel` |
| Email | `email-deliverability`, `postfix-billionmail` |
| Security | `oauth-oidc-auth-integration`, `payment-flow-security`, `secret-management`, `web-app-security` |
| Automation | `event-driven-data` |
| Product design | `figma-design-system`, `product-ux-audit` |
| Marketing | `affiliate-content-platform`, `analytics-measurement` |
| Operations | `domain-dns-migration` |
| Meta | `skill-authoring` |

## Skill structure

```text
skills/<domain>/<skill-id>/
├── SKILL.md
├── references/   # optional progressive detail
├── scripts/      # optional deterministic helpers
└── assets/       # optional supporting assets
```

Only `SKILL.md` is required. Larger skills should use supporting resources so agents can load detail progressively instead of placing everything in the initial context.

## Compatibility

| Environment | Install path |
| --- | --- |
| OpenAI Codex | `npx skills add ... -a codex` |
| Claude Code | `npx skills add ... -a claude-code` |
| OpenCode | `npx skills add ... -a opencode` |
| MiniMax Code | Agent Skills ecosystem; see `docs/INSTALLATION.md` |
| Other agents | Use the target exposed by the current `skills` CLI |

See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) for discovery and portability rules.

## Validation

Every push and pull request runs repository validation:

```bash
npm run validate
npm run catalog
npx skills add . --list
```

CI additionally smoke-installs `repo-audit` into Codex, Claude Code and OpenCode targets using `--copy`.

## Skills vs tools

| Repository | Responsibility |
| --- | --- |
| `jedavid-ai-skills` | How agents should investigate, reason, change and verify |
| `jedavid-web-tools` | Executable MCP servers, CLIs, collectors and automation |

Keeping knowledge separate from execution makes the workflows useful even when the runtime or model changes.

## Contributing

Start with [`templates/SKILL.md`](templates/SKILL.md) and read [`CONTRIBUTING.md`](CONTRIBUTING.md). New skills should be reusable, evidence-driven, safe for production use and written in English.

## License

MIT. See [`LICENSE`](LICENSE).

---

<div align="center">

Built and maintained by **Jesus David Web**.

</div>
