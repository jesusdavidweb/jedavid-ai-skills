---
name: repo-audit
description: Use when entering an unfamiliar codebase, planning a major change, or needing an evidence-based map of repository architecture, dependencies, deployment, risks, and conventions.
---
# Repository Audit
## Workflow
1. Read README, AGENTS/instructions, manifests, lockfiles, CI, deployment and environment examples.
2. Map entry points, packages, routes, data stores, external APIs, auth, build pipeline and runtime.
3. Inspect recent architecture-significant files rather than sampling randomly.
4. Identify generated/vendor code and exclude it from conclusions.
5. Run existing lint/typecheck/test/build commands when safe.
6. Produce an architecture map, operational model, risks, unknowns and recommended next actions.
## Guardrails
Do not modify during discovery. Never infer secrets from examples. Mark assumptions explicitly.
## Output
Stack; architecture; data flow; deployment; quality gates; security/performance observations; prioritized risks; recommended plan.