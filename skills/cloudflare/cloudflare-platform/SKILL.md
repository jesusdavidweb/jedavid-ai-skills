---
name: cloudflare-platform
description: Use for architecture, deployment, debugging or optimization on Cloudflare Workers and developer-platform primitives including D1, KV, R2, Queues, Durable Objects, Workflows, Hyperdrive and bindings. Prefer cloudflare-access-dns-security for DNS/Zero Trust policy issues.
---
# Cloudflare Platform
## Workflow
1. Confirm project/runtime, compatibility date, bindings, routes, deployment method and environment.
2. Choose primitives by consistency, access pattern, object size, coordination and delivery semantics rather than familiarity.
3. Keep secrets in platform secret storage and minimize public bindings/routes.
4. Validate migrations/bindings before production deployment.
5. Treat Worker versions and storage state separately: Worker version rollback does not roll back D1/KV/R2/Durable Object state.
6. Inspect deployment and runtime logs plus actual HTTP behavior after release.
## Conditional references
- Storage/coordination choice → `references/platform-selection.md`.
- Bindings/configuration → `references/bindings.md`.
- Deployment/rollback reasoning → `references/deployments.md`.
## Available scripts
- `scripts/inspect-project.sh` — read-only local project/Wrangler inventory.
## Asset
Use `assets/architecture-checklist.md` for architecture reviews.
## Guardrails
Cloudflare capabilities and limits change quickly. Re-check current official docs for limits, pricing and beta/GA status before architecture decisions.
