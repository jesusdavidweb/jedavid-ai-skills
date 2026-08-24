---
name: docker-dokploy
description: Use for Docker/Compose and Dokploy production deployments, persistence, networks, secrets, health checks, domains/Traefik, build/runtime configuration, deployment failures and safe container updates.
---
# Docker and Dokploy

## Workflow
1. Inspect images/builds, Compose config, volumes, networks, ports/expose, environment, secrets and health checks.
2. Separate development mounts/config from production configuration.
3. Persist state intentionally and prove backup/restore coverage before replacing containers.
4. Use health/readiness checks rather than startup order alone.
5. In Dokploy, inspect preview/generated Compose, domain routing, Traefik behavior and deployment logs.
6. Redeploy narrowly and verify external routing plus internal dependency health.

## Conditional references
- Compose production → `references/compose-production.md`.
- Dokploy specifics → `references/dokploy.md`.

## Available scripts
- `scripts/inspect-compose.sh` — read-only Compose/container inspection.

## Asset
Use `assets/deployment-checklist.md` for production readiness.
