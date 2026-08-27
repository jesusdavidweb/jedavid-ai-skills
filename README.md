<div align="center">

# JeDavid AI Skills

### Production-ready Agent Skills for modern engineering

**An open-source library of 45 reusable skills for Codex, Claude Code, OpenCode, MiniMax, Cursor and other Agent Skills-compatible coding agents.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](docs/COMPATIBILITY.md)
[![Skills](https://img.shields.io/badge/Skills-45-0ea5e9)](catalog/skills.json)
[![Deep Skills](https://img.shields.io/badge/Deep_Skills-21-8b5cf6)](docs/DEEP-SKILL.md)
[![Validate Agent Skills](https://github.com/jesusdavidweb/skills/actions/workflows/validate-skills.yml/badge.svg)](https://github.com/jesusdavidweb/skills/actions/workflows/validate-skills.yml)
[![OpenCode Catalog](https://github.com/jesusdavidweb/skills/actions/workflows/deploy-opencode-catalog.yml/badge.svg)](https://github.com/jesusdavidweb/skills/actions/workflows/deploy-opencode-catalog.yml)

[Quick start](#quick-start) · [OpenCode](#opencode-auto-updating-catalog) · [What is included?](#what-is-included) · [Contributing](CONTRIBUTING.md) · [Compatibility](docs/COMPATIBILITY.md)

</div>

---

## Why this exists

AI coding agents are good at generating code, but production engineering needs more than code generation. Agents need repeatable procedures for discovering the real state of a system, handling risky operations, choosing the right evidence, and verifying that a change actually worked.

**JeDavid AI Skills packages those procedures as portable Agent Skills.**

Instead of telling an agent how to audit WordPress, debug Cloudflare, investigate email deliverability, secure OAuth, review a payment flow, or build an MCP server every time, install the relevant skill and let the agent load that workflow when it is needed.

The library is designed around four principles:

- **Evidence before changes** — inspect the actual system instead of guessing.
- **Safe production work** — destructive and privileged operations require explicit guardrails and rollback thinking.
- **Progressive disclosure** — specialized references and scripts are loaded only when needed.
- **Portable by default** — canonical skills are not tied to one AI vendor or coding client.

## Quick start

You do not need to clone this repository. Use whichever JavaScript package runner you already have:

```bash
# npm
npx skills add jesusdavidweb/skills

# pnpm
pnpm dlx skills add jesusdavidweb/skills

# Bun
bunx skills add jesusdavidweb/skills

# Yarn
yarn dlx skills add jesusdavidweb/skills
```

Common operations use the same `skills` CLI arguments regardless of runner:

```bash
# See every available skill
npx skills add jesusdavidweb/skills --list

# Install a specific skill
npx skills add jesusdavidweb/skills --skill wordpress-deep-audit

# Install globally across supported/detected agents
npx skills add jesusdavidweb/skills --all -g

# Target a specific coding agent
npx skills add jesusdavidweb/skills --skill repo-audit -a codex
npx skills add jesusdavidweb/skills --skill repo-audit -a claude-code
npx skills add jesusdavidweb/skills --skill repo-audit -a opencode
```

The open `skills` CLI supports the shared Agent Skills ecosystem and many coding agents. See [`docs/INSTALLATION.md`](docs/INSTALLATION.md) for npm, pnpm, Bun and Yarn commands, global installation, updates, copy fallback, and client-specific notes.

## OpenCode: auto-updating catalog

OpenCode V2 users can skip manual installation and subscribe directly to the generated HTTP catalog.

Add once to `~/.config/opencode/opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://skills.jesusdavid.net/"
  ]
}
```

The catalog is generated from the same canonical skills and published at `skills.jesusdavid.net`. Each package has a deterministic content version, allowing compatible OpenCode versions to refresh changed skills instead of requiring a manual reinstall.

OpenCode V1 users should install through the `skills` CLI like any other supported agent.

## What is included?

The library covers recurring workflows across:

| Domain | Examples |
| --- | --- |
| AI & agents | MCP servers, prompt-injection defense, agent handoffs, skill authoring |
| Software engineering | repository audits, code review, debugging, testing, releases |
| Web | Core Web Vitals, technical SEO, LLM discoverability, APIs, webhooks, i18n |
| WordPress & WooCommerce | deep audits, incidents, HPOS, WP-CLI, security, performance, Bricks |
| Cloudflare | Workers, D1, R2, KV, Queues, Durable Objects, Access, DNS, security |
| Infrastructure | Docker, Dokploy, Linux VPS, Nginx, CloudPanel, observability, backups |
| Security | web-app security, OAuth/OIDC, payments, secrets, trust boundaries |
| Email | deliverability, SPF/DKIM/DMARC, SMTP, Postfix, BillionMail |
| Automation & data | event-driven systems, PostgreSQL/Supabase, n8n orchestration |
| Product & marketing | Figma design systems, UX audits, analytics, affiliate platforms |

Browse the machine-readable [`catalog/skills.json`](catalog/skills.json) or the [`skills/`](skills/) directory for the complete catalog.

## What makes a deep skill different?

Simple skills remain intentionally small. Complex workflows become **deep skill packages**:

```text
skill/
├── SKILL.md       # concise routing + core workflow
├── references/    # conditional, specialized knowledge
├── scripts/       # deterministic helpers; diagnostic scripts are read-only by default
└── assets/        # reusable reports, schemas, checklists, and templates
```

This keeps the initial context small while allowing an agent to load deeper material only when the task requires it.

There are currently **21 deep skills**, covering the highest-risk or highest-complexity areas such as application security, WordPress operations, Cloudflare architecture, email deliverability, MCP development, OAuth, payments, webhooks, infrastructure, and performance.

See [`docs/DEEP-SKILL.md`](docs/DEEP-SKILL.md).

## Works across agents

`skills/` is the canonical source of truth. The repository intentionally avoids maintaining divergent copies for individual clients.

The open `skills` CLI can distribute canonical Agent Skills to supported clients such as Codex, Claude Code, OpenCode, Cursor and many others. OpenCode V2 additionally has its native HTTP catalog distribution.

See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) for the compatibility model.

## Quality and validation

Every push and pull request validates:

- Agent Skills metadata and naming;
- YAML/frontmatter correctness;
- deep-package references, scripts, and assets;
- activation/boundary eval fixtures;
- reference Agent Skills validation;
- deterministic catalog generation;
- discovery through the open `skills` CLI;
- installation into Codex, Claude Code, and OpenCode.

The OpenCode deployment workflow separately builds and validates the HTTP catalog before publishing it.

## Contributing

Community contributions are welcome: new skills, better references, bug fixes, activation evals, compatibility improvements, and documentation are all useful.

Start with [`CONTRIBUTING.md`](CONTRIBUTING.md). New contributors can also use the repository's **Bug report** and **Skill request** issue templates.

Please follow [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md). Security-sensitive reports belong in [`SECURITY.md`](SECURITY.md), not public issues.

## Repository structure

```text
skills/
├── skills/                  # canonical Agent Skills
├── evals/                   # activation and boundary fixtures
├── catalog/                 # machine-readable canonical inventory
├── scripts/                 # repository validation and catalog generation
├── templates/               # starting point for new skills
├── docs/                    # installation, compatibility and deep-skill docs
└── .github/                 # CI, deployment, issue and PR templates
```

## License

Distributed under the **MIT License**. You can use, modify, and redistribute the skills subject to the license terms. See [`LICENSE`](LICENSE).

---

<div align="center">

Maintained by **Jesus David Web**. Built in public for engineers using AI agents on real systems.

If the library saves you time, a GitHub star helps other people discover it.

</div>
