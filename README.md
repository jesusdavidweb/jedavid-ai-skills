<div align="center">

# JeDavid AI Skills

### Portable Agent Skills for AI-assisted engineering

**45 production-oriented skills for Codex, Claude Code, OpenCode, MiniMax and other Agent Skills-compatible coding agents.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](docs/COMPATIBILITY.md)
[![Skills](https://img.shields.io/badge/Skills-45-0ea5e9)](catalog/skills.json)
[![Deep Skills](https://img.shields.io/badge/Deep_Skills-21-8b5cf6)](docs/DEEP-SKILL.md)
[![Validate Agent Skills](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml/badge.svg)](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/validate-skills.yml)
[![OpenCode Catalog](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/deploy-opencode-catalog.yml/badge.svg)](https://github.com/jesusdavidweb/jedavid-ai-skills/actions/workflows/deploy-opencode-catalog.yml)

[Install](#install) · [OpenCode HTTP Catalog](#opencode-http-catalog) · [Catalog](#skill-catalog) · [Deep Skills](#deep-skill-packages) · [Compatibility](docs/COMPATIBILITY.md)

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

## OpenCode HTTP Catalog

For OpenCode V2, the recommended setup is the native auto-updating HTTP catalog. Add this once to `~/.config/opencode/opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://jesusdavidweb.github.io/jedavid-ai-skills/"
  ]
}
```

GitHub Actions generates the catalog directly from canonical `skills/` and publishes it with GitHub Pages. Each package receives a deterministic content-hash `version`, so OpenCode refreshes its cached remote copy whenever that skill changes.

No manual `npx skills update` is required for HTTP-catalog users.

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

## Skill catalog

The full machine-readable inventory is available at [`catalog/skills.json`](catalog/skills.json). Canonical skills are grouped under `skills/` by domain.

## Validation

Every push and pull request validates:

- canonical Agent Skills metadata;
- deep-package references, scripts and assets;
- activation eval fixtures;
- the reference `skills-ref` validator;
- deterministic catalog generation;
- discovery with the open `skills` CLI;
- installation for Codex, Claude Code and OpenCode.

The OpenCode deployment workflow additionally builds and validates the HTTP catalog before publishing it to GitHub Pages.

## Source of truth

`skills/` is the only canonical source. Generated catalogs and client-specific distribution layers must derive from it; do not maintain divergent skill bodies.

See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md), [`docs/DEEP-SKILL.md`](docs/DEEP-SKILL.md), and [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT. See [`LICENSE`](LICENSE).
