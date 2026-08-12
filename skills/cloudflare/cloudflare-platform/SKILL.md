---
name: cloudflare-platform
description: Use for architecture, deployment, debugging, or optimization on Cloudflare Workers, Pages, D1, R2, KV, Queues, Durable Objects, Workers AI, DNS, caching, and related services.
---
# Cloudflare Platform
## Workflow
1. Confirm account/project, runtime, compatibility date, bindings, routes/domains and deployment method.
2. Choose primitives by semantics: D1 relational data; R2 objects; KV read-heavy eventually consistent config/cache; Queues async delivery; Durable Objects strongly coordinated state.
3. Keep secrets in platform secret storage, never repository config.
4. Design for Workers runtime constraints and avoid Node assumptions unless compatibility support is verified.
5. Validate migrations/bindings in non-production before deploy.
6. Inspect deployment/runtime logs and actual HTTP behavior after release.
7. For full Cloudflare architectures, minimize unnecessary external infrastructure while keeping portability where valuable.
## Guardrails
Use current official Cloudflare docs for capabilities/limits that may change.