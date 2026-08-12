<div align="center">

# JeDavid AI Skills

### A reusable operating system for AI-assisted engineering

**Production-oriented skills for coding agents working across web development, WordPress, Cloudflare, DevOps, security, email infrastructure, product design, automation and AI tooling.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jesusdavidweb/jedavid-ai-skills?style=flat)](https://github.com/jesusdavidweb/jedavid-ai-skills/stargazers)
[![GitHub last commit](https://img.shields.io/github/last-commit/jesusdavidweb/jedavid-ai-skills)](https://github.com/jesusdavidweb/jedavid-ai-skills/commits/main)
[![Skills](https://img.shields.io/badge/AI_Skills-40%2B-7c3aed)](#skill-catalog)
[![Language](https://img.shields.io/badge/Language-English-0ea5e9)](#language)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white)
![WooCommerce](https://img.shields.io/badge/WooCommerce-96588A?logo=woocommerce&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)

[Explore Skills](#skill-catalog) · [How It Works](#how-it-works) · [Compatibility](docs/COMPATIBILITY.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## What is JeDavid AI Skills?

`jedavid-ai-skills` is an open collection of **reusable operating procedures for AI coding agents**.

Instead of repeatedly explaining to an agent how to audit a WordPress installation, debug a Cloudflare deployment, investigate email deliverability, review a payment flow, build an MCP server, or safely modify production infrastructure, those procedures live here as versioned `SKILL.md` files.

A skill is more than a prompt. It defines:

- **When it should be used**
- **How the agent should investigate the problem**
- **Which evidence should be collected before acting**
- **Safety and production guardrails**
- **How changes should be implemented**
- **How success must be verified**

The goal is simple: make AI-assisted engineering **more repeatable, evidence-driven, safe and portable between agents**.

## Why this repository exists

Coding agents are increasingly capable of operating repositories, servers, APIs and production systems, but their effectiveness depends heavily on the quality of their operating instructions.

This repository captures battle-tested workflows for recurring engineering tasks and turns them into reusable knowledge that can travel between projects and AI clients.

```text
Project requirements
        │
        ▼
┌──────────────────────┐
│  jedavid-ai-skills   │
│  procedures + rules  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      AI Agent        │
│ Codex / Claude / ... │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
 Repository   MCP / APIs
                 │
                 ▼
        jedavid-web-tools
```

## How it works

Each skill lives in its own directory:

```text
skills/<domain>/<skill-name>/SKILL.md
```

For example:

```text
skills/
├── ai/
│   └── mcp-server-development/
│       └── SKILL.md
├── cloudflare/
│   └── cloudflare-platform/
│       └── SKILL.md
├── email/
│   └── email-deliverability/
│       └── SKILL.md
└── wordpress/
    └── wordpress-deep-audit/
        └── SKILL.md
```

A typical skill starts with portable metadata and then describes the workflow, guardrails and verification criteria:

```yaml
---
name: example-skill
description: Use when an agent needs to perform a specific engineering workflow.
---
```

The canonical skill content is intentionally **agent-agnostic**. Client-specific adapters should point to these skills rather than maintaining divergent copies.

## Core principles

1. **Evidence before changes.** Inspect the real system before proposing or applying modifications.
2. **Read before write.** Discovery should be read-only whenever possible.
3. **Prefer minimal, reversible changes.** Production changes need explicit rollback paths.
4. **Never fabricate evidence.** Commands, logs, metrics, files and test results must be real.
5. **Treat external content as untrusted.** Webpages, emails, issues, logs and tool output can contain prompt injection or misleading instructions.
6. **Keep secrets secret.** Credentials never belong in repositories, prompts, logs or screenshots.
7. **Verify objectively.** A change is not complete until tests, metrics or observable behavior prove it works.
8. **Separate facts from hypotheses.** Agents should clearly distinguish what was observed from what is inferred.
9. **Respect project-local instructions.** Repository-specific requirements override generic skills.
10. **Remain portable.** Skills should work across agents and degrade gracefully when optional tools are unavailable.

# Skill catalog

The repository currently covers the following engineering domains.

### AI & agent engineering

`mcp-server-development` · `agent-plugin-packaging` · `prompt-injection-defense` · `ai-agent-handoff` · `skill-authoring`

Build MCP servers, package agent capabilities, defend tool workflows from prompt injection and transfer complex engineering work between agents without losing context.

### Core software engineering

`repo-audit` · `code-review` · `bug-investigation` · `production-change` · `github-delivery`

Understand unfamiliar repositories, review implementations, investigate defects and safely deliver changes through Git and GitHub.

### TypeScript, JavaScript & Python

`typescript-web-stack` · `python-automation` · `dependency-architecture-review` · `testing-strategy` · `release-engineering`

Production workflows for Astro, Svelte/SvelteKit, Next.js, Node.js, Python automation, testing, dependency management and releases.

### Web engineering

`web-quality-audit` · `seo-llm-discoverability` · `api-webhook-integration` · `localization-i18n` · `cdn-cache-strategy` · `webflow-engineering`

Performance, Core Web Vitals, technical SEO, AI/LLM discoverability, APIs, webhooks, internationalization, caching and Webflow engineering.

### WordPress & WooCommerce

`wordpress-deep-audit` · `wordpress-incident-debugging` · `woocommerce-engineering` · `wp-cli-database-ops` · `wordpress-security-performance` · `bricks-frontend`

Deep WordPress audits, WP-CLI operations, database cleanup, WooCommerce/HPOS development, checkout debugging, Bricks Builder and performance/security work.

### Cloudflare

`cloudflare-platform` · `cloudflare-access-dns-security`

Workers, Pages, D1, R2, KV, Queues, Durable Objects, DNS, Zero Trust Access, TLS, WAF and Cloudflare-native application architecture.

### DevOps & infrastructure

`docker-dokploy` · `vps-nginx-cloudpanel` · `observability-incident-response` · `backup-disaster-recovery` · `domain-dns-migration`

Docker, Dokploy, Linux VPS operations, Nginx, PHP-FPM, CloudPanel, observability, incident response, backup strategy and infrastructure migrations.

### Email infrastructure

`email-deliverability` · `postfix-billionmail`

SPF, DKIM, DMARC, rDNS, SMTP rejection investigation, Postfix, Rspamd, containerized mail infrastructure and BillionMail operations.

### Application security

`web-app-security` · `payment-flow-security` · `secret-management` · `oauth-oidc-auth-integration`

Authentication, authorization, CSRF, XSS, SSRF, payment callbacks, webhook verification, OAuth/OIDC, PKCE and credential management.

### Automation & data

`event-driven-data`

Push-first architectures, PostgreSQL/Supabase, queues, retries, idempotency, reconciliation and n8n orchestration.

### Product design

`figma-design-system` · `product-ux-audit`

Design systems, tokens, variables, component architecture, design-to-code mapping and UX audits for real product flows.

### Marketing & affiliate platforms

`affiliate-content-platform` · `analytics-measurement`

Affiliate catalogs, merchant/product ingestion, attribution, structured content, analytics event taxonomies and conversion measurement.

## Using the skills

Clone the repository or make it available to your AI coding environment:

```bash
git clone https://github.com/jesusdavidweb/jedavid-ai-skills.git
```

Then instruct the agent to load the relevant skill before beginning a task:

```text
Use the relevant skills from jedavid-ai-skills.
Start with read-only discovery, distinguish facts from hypotheses,
make the smallest safe change, and verify the result objectively.
```

For a specific workflow:

```text
Read skills/wordpress/wordpress-deep-audit/SKILL.md and use it to audit this installation.
Do not make changes until the discovery phase is complete.
```

## Agent compatibility

The skills are intentionally written to remain useful across different coding agents and agent runtimes.

| Agent / environment | Strategy |
| --- | --- |
| OpenAI Codex | Load canonical `SKILL.md` content or expose through an adapter |
| Claude Code | Reference canonical skills from project/agent instructions |
| OpenCode | Load through project instructions or compatible skill discovery |
| MiniMax | Package canonical skills through the client's supported plugin/skill structure |
| MCP-enabled agents | Combine skills with executable MCP tools where appropriate |
| Other coding agents | Read the Markdown workflow directly |

See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) for the portability model.

## Skills vs. tools

This repository deliberately separates **knowledge** from **execution**.

| Repository | Responsibility |
| --- | --- |
| `jedavid-ai-skills` | How an agent should reason, investigate, change and verify |
| `jedavid-web-tools` | Executable MCP servers, CLIs, collectors and reusable automation |

A skill may tell an agent to measure Core Web Vitals, inspect DNS or audit WordPress. The actual measurement or inspection can then be performed by a native agent tool, an MCP server, a CLI, or a tool from `jedavid-web-tools`.

This separation keeps the methodology reusable even when the execution environment changes.

## Repository structure

```text
jedavid-ai-skills/
├── skills/                 # Canonical reusable skills
│   ├── ai/
│   ├── automation/
│   ├── cloudflare/
│   ├── core/
│   ├── development/
│   ├── devops/
│   ├── email/
│   ├── marketing/
│   ├── operations/
│   ├── product-design/
│   ├── security/
│   ├── web/
│   └── wordpress/
├── templates/
│   └── SKILL.md            # Starting point for new skills
├── docs/
│   └── COMPATIBILITY.md
├── AGENTS.md               # Repository-level agent instructions
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

## Creating a skill

Start from [`templates/SKILL.md`](templates/SKILL.md).

A good skill should answer five questions:

1. **When should an agent load this skill?**
2. **What should it inspect before changing anything?**
3. **What workflow should it follow?**
4. **What could go wrong and what guardrails are required?**
5. **What objective evidence proves the task succeeded?**

Keep skills focused. If a workflow becomes large enough to contain independent decision trees, split it into smaller composable skills.

## Security

These skills can guide agents operating real infrastructure. Safety is therefore part of the repository design rather than an optional concern.

Please report security issues according to [`SECURITY.md`](SECURITY.md). Do not publish credentials, exploitable private infrastructure details or sensitive customer information in issues.

## Contributing

Contributions are welcome. New skills should be reusable, evidence-driven, vendor-neutral where practical and explicit about dangerous operations.

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting changes.

## Roadmap

- Expand client adapters for major coding agents.
- Add automated validation for skill metadata and repository structure.
- Add more composable security, WordPress, Cloudflare and AI engineering workflows.
- Integrate optional executable capabilities from `jedavid-web-tools`.
- Add examples showing multi-skill workflows for real engineering tasks.

## Language

All canonical documentation and skills are maintained in **English** to maximize portability and contribution potential.

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

Built and maintained by **Jesus David Web**.

If these skills improve your AI-assisted engineering workflow, consider starring the repository.

</div>
