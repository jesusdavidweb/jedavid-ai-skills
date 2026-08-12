---
name: github-delivery
description: Use for Git/GitHub delivery: branch preparation, intentional commits, pull requests, review feedback, CI failures, and safe merge readiness.
---
# GitHub Delivery
## Workflow
1. Inspect status, branch, remote, diff and repository instructions.
2. Keep changes scoped; do not include unrelated working-tree edits.
3. Run repository quality gates before commit.
4. Use descriptive commits and push a non-protected feature/fix branch unless instructed otherwise.
5. Create a PR explaining problem, solution, verification, risks and screenshots/evidence when relevant.
6. For review feedback, classify actionable vs discussion-only comments and resolve only after verification.
7. For CI, inspect the failing job/log before changing code.
## Guardrails
Never force-push or merge without explicit scope. Never commit secrets.