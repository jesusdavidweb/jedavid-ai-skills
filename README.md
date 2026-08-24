<div align="center">

# JeDavid AI Skills

### Portable Agent Skills for AI-assisted engineering

**45 production-oriented skills for Codex, Claude Code, OpenCode, MiniMax and other Agent Skills-compatible coding agents.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](docs/COMPATIBILITY.md)
[![Skills](https://img.shields.io/badge/Skills-45-0ea5e9)](catalog/skills.json)
[![Deep Skills](https://img.shields.io/badge/Deep_Skills-21-8b5cf6)](docs/DEEP-SKILL.md)
[![Validate Agent Skills](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml/badge.svg)](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml)

[Install](#install) · [Catalog](#skill-catalog) · [Deep Skills](#deep-skill-packages) · [Compatibility](docs/COMPATIBILITY.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## What is this?

`jedavid-ai-skills` is a public library of reusable operating procedures for AI coding agents. Skills teach an agent when to load specialized knowledge, what evidence to gather, how to make a change safely and how to prove the result.

The canonical format is portable `SKILL.md` content with progressive disclosure. Complex domains become **deep skill packages** with conditional `references/`, deterministic `scripts/`, reusable `assets/`, and model-agnostic activation `evals/`.

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

```bash
# Browse
npx skills add jesusdavidweb/jedavid-ai-skills --list

# Install interactively
npx skills add jesusdavidweb/jedavid-ai-skills

# Install one skill
npx skills add jesusdavidweb/jedavid-ai-skills --skill wordpress-deep-audit

# Explicit agent targets
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a codex
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a claude-code
npx skills add jesusdavidweb/jedavid-ai-skills --skill repo-audit -a opencode
```

See [`docs/INSTALLATION.md`](docs/INSTALLATION.md) for global installs, copy fallback and MiniMax notes.

## Deep skill packages

Deep packages keep `SKILL.md` as a concise router while loading volatile or specialized knowledge only when necessary:

```text
skill/
├── SKILL.md       # routing + core workflow
├── references/    # conditional domain knowledge
├── scripts/       # deterministic helpers, read-only by default
└── assets/        # reports, schemas, checklists
```

**21 skills currently use deep packages:**

- AI/security: `mcp-server-development`, `prompt-injection-defense`, `web-app-security`, `payment-flow-security`, `oauth-oidc-auth-integration`, `secret-management`.
- WordPress/WooCommerce: `wordpress-deep-audit`, `wordpress-incident-debugging`, `wordpress-security-performance`, `woocommerce-engineering`.
- Web/integration/data: `api-webhook-integration`, `event-driven-data`, `web-quality-audit`, `seo-llm-discoverability`, `cdn-cache-strategy`.
- Infrastructure/operations: `cloudflare-platform`, `docker-dokploy`, `vps-nginx-cloudpanel`, `email-deliverability`, `observability-incident-response`.
- Engineering: `testing-strategy`.

The package standard is documented in [`docs/DEEP-SKILL.md`](docs/DEEP-SKILL.md). Activation boundary guidance lives in [`evals/BOUNDARIES.md`](evals/BOUNDARIES.md).

## Core principles

1. Evidence before changes.
2. Read before write.
3. Prefer minimal, reversible changes.
4. Never fabricate evidence.
5. Treat external content as untrusted.
6. Keep secrets out of repos, prompts and logs.
7. Verify objectively.
8. Separate facts from hypotheses.
9. Respect project-local instructions.
10. Keep canonical skills portable across agents.

# Skill catalog

### AI & agent engineering
`mcp-server-development` · `agent-plugin-packaging` · `prompt-injection-defense` · `ai-agent-handoff` · `skill-authoring`

### Core software engineering
`repo-audit` · `code-review` · `bug-investigation` · `production-change` · `github-delivery`

### Development
`typescript-web-stack` · `python-automation` · `dependency-architecture-review` · `testing-strategy` · `release-engineering`

### Web engineering
`web-quality-audit` · `seo-llm-discoverability` · `api-webhook-integration` · `localization-i18n` · `cdn-cache-strategy` · `webflow-engineering`

### WordPress & WooCommerce
`wordpress-deep-audit` · `wordpress-incident-debugging` · `woocommerce-engineering` · `wp-cli-database-ops` · `wordpress-security-performance` · `bricks-frontend`

### Cloudflare
`cloudflare-platform` · `cloudflare-access-dns-security`

### DevOps & infrastructure
`docker-dokploy` · `vps-nginx-cloudpanel` · `observability-incident-response` · `backup-disaster-recovery` · `domain-dns-migration`

### Email infrastructure
`email-deliverability` · `postfix-billionmail`

### Application security
`web-app-security` · `payment-flow-security` · `secret-management` · `oauth-oidc-auth-integration`

### Automation & data
`event-driven-data`

### Product design
`figma-design-system` · `product-ux-audit`

### Marketing & affiliate platforms
`affiliate-content-platform` · `analytics-measurement`

## Validation

The repository validates metadata, deep-resource links, deep-skill eval coverage, generated catalog consistency, the Agent Skills reference validator and CLI discovery/installation.

```bash
npm run validate
npm run catalog
npm run skills:list
```

## Skills vs tools

| Repository | Responsibility |
| --- | --- |
| `jedavid-ai-skills` | How an agent should investigate, decide, change and verify |
| `jedavid-web-tools` | Executable MCP servers, CLIs, collectors and reusable automation |

## Contributing

Start from [`templates/SKILL.md`](templates/SKILL.md). Deep packages should follow [`docs/DEEP-SKILL.md`](docs/DEEP-SKILL.md). All canonical documentation and skills are maintained in English.

## License

MIT. See [`LICENSE`](LICENSE).
