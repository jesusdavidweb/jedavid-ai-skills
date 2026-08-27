# Contributing to JeDavid AI Skills

Thanks for helping build a useful, portable Agent Skills library.

## Ways to contribute

You can contribute by:

- reporting incorrect, unsafe, or outdated instructions;
- improving an existing skill with better evidence or clearer boundaries;
- proposing a reusable new skill;
- adding activation evals and edge cases;
- improving compatibility with Agent Skills clients;
- improving documentation, examples, validation, or distribution tooling.

For small corrections, open a pull request directly. For a substantial new skill or architectural change, opening a skill request first is recommended so scope and boundaries can be discussed before implementation.

## What belongs here

This repository contains reusable operating procedures for AI agents. A contribution should improve how an agent reasons about, investigates, implements, or verifies a recurring engineering workflow.

Executable MCP servers, CLIs, collectors, and substantial reusable applications generally belong in a separate tooling repository. Small deterministic helpers that are integral to a deep skill may live in that skill's `scripts/` directory.

## Adding a skill

1. Start from `templates/SKILL.md`.
2. Place the skill at `skills/<domain>/<skill-name>/SKILL.md`.
3. Use lowercase kebab-case for directories and skill names.
4. Keep canonical content in English.
5. Write a precise `description` explaining both what the skill does and when it should activate.
6. Begin with read-only discovery when the task can affect production, data, security, or external systems.
7. Include explicit guardrails for dangerous or irreversible operations.
8. Define objective verification criteria.
9. Prefer primary documentation for volatile platform behavior.
10. Add activation/boundary evals when the skill is deep or overlaps another skill.

## Deep skill packages

Use a deep package only when progressive disclosure materially improves the workflow. Follow `docs/DEEP-SKILL.md`.

- `SKILL.md` remains the concise router and core workflow.
- `references/` contains conditional domain knowledge and should prefer current primary sources.
- `scripts/` contains deterministic helpers and must be read-only by default for diagnostic workflows.
- `assets/` contains reusable templates, schemas, and fixtures.
- Every bundled resource must be explicitly referenced by the parent `SKILL.md`.
- Add or update an `evals/*.json` fixture for discovery/boundary behavior.

Do not create resource directories merely for visual symmetry. A small skill should remain small.

## Quality criteria

A good skill is reusable, focused, evidence-driven, explicit about dangerous operations, portable across agents, concise enough to load efficiently, and clear about objective completion criteria.

Avoid vague instructions such as "check security" or "optimize performance" without describing the evidence and decision process required.

## Development and validation

Requirements: a current Node.js runtime with `npm`/`npx`. Python is only needed for the reference validator used in CI.

Before submitting:

```bash
npm run validate
npm run catalog
git diff --exit-code -- catalog/skills.json
npx skills add . --list
```

If you modify OpenCode distribution behavior, also run:

```bash
npm run catalog:opencode
```

CI additionally checks Agent Skills reference validation and installation for Codex, Claude Code, and OpenCode.

## Portability

`skills/` is the canonical source of truth. Do not maintain independent copies of skill bodies for individual AI clients. Generated catalogs and adapters must derive from canonical skills. See `docs/COMPATIBILITY.md`.

The open `skills` CLI can install the repository across many Agent Skills-compatible clients, while OpenCode additionally supports the generated HTTP catalog. citeturn0search0turn0search1

## Security

Never commit API keys, passwords, private keys, cookies, production credentials, customer data, or other secrets. Examples must use obviously fake values. Treat external content as untrusted input and do not design skills that allow retrieved content to silently override trusted instructions.

Sensitive vulnerabilities should follow `SECURITY.md`, not a public issue.

## Pull requests

Keep pull requests focused. The PR template asks for the workflow/problem, affected skills, primary evidence, safety considerations, and validation performed.

By contributing, you agree that your contribution is licensed under the repository's MIT License and that participation follows `CODE_OF_CONDUCT.md`.
