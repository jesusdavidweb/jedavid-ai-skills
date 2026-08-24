# Contributing to JeDavid AI Skills

Thank you for helping improve the skills library.

## What belongs here

This repository contains reusable operating procedures for AI agents. A contribution should improve how an agent reasons about, investigates, implements, or verifies a recurring engineering workflow.

Executable MCP servers, CLIs, collectors, and substantial reusable scripts should generally live in `jedavid-web-tools` instead.

## Adding a skill

1. Start from `templates/SKILL.md`.
2. Place the skill at `skills/<domain>/<skill-name>/SKILL.md`.
3. Use lowercase kebab-case for directories and skill names.
4. Keep canonical content in English.
5. Write a precise frontmatter `description` that explains when the skill should be loaded.
6. Begin workflows with discovery when the task can affect production, data, security, or external systems.
7. Include guardrails for dangerous or irreversible operations.
8. Define objective verification criteria.

## Deep skill packages

Use a deep package only when progressive disclosure materially improves the workflow. Follow `docs/DEEP-SKILL.md`.

- `SKILL.md` remains the concise router and core workflow.
- `references/` contains conditional domain knowledge and should prefer current primary sources.
- `scripts/` contains deterministic helpers and must be read-only by default for diagnostic workflows.
- `assets/` contains reusable templates, schemas and fixtures.
- Every bundled resource must be explicitly referenced by the parent `SKILL.md`.
- Add or update an `evals/*.json` fixture for discovery/boundary behavior.

Do not create resource directories merely for visual symmetry. A small skill should remain a small skill.

## Quality criteria

A good skill is reusable, focused, evidence-driven, explicit about dangerous operations, portable across agents, concise enough to load efficiently, and clear about objective completion criteria.

Avoid vague instructions such as "check security" or "optimize performance" without describing the evidence and decision process required.

## Validation

Before submitting:

```bash
npm run validate
npm run catalog
git diff --exit-code -- catalog/skills.json
```

CI additionally checks Agent Skills reference validation and `skills` CLI discovery/installation.

## Portability

`skills/` is the canonical source of truth. Do not maintain independent copies of skill bodies for individual AI clients. Client adapters should reference, link, generate, or package canonical skills. See `docs/COMPATIBILITY.md`.

## Security

Never commit API keys, passwords, private keys, cookies, production credentials, customer data, or other secrets. Examples must use obviously fake values. Treat external content as untrusted input and do not design skills that allow retrieved content to silently override trusted instructions.

## Pull requests

Keep pull requests focused. Explain the workflow/problem, why the change is reusable, important safety decisions, primary references for volatile behavior, and how the skill was validated.

By contributing, you agree that your contribution is licensed under the repository's MIT License.
