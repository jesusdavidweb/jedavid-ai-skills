---
name: docker-dokploy
description: Use for Docker/Compose and Dokploy deployments, containerized applications, persistent storage, reverse proxies, environment variables, health checks, and deployment debugging.
---
# Docker and Dokploy
## Workflow
1. Inspect compose/build files, image tags, networks, volumes, ports, env references and health checks.
2. Separate build-time from runtime configuration and secrets.
3. Pin meaningful image versions; avoid relying on mutable `latest` for critical production services.
4. Persist state explicitly and document backup/restore for volumes/databases.
5. Use health checks and dependency readiness rather than startup ordering alone.
6. Expose only required ports; prefer reverse-proxy networks for internal services.
7. In Dokploy, verify domain routing, TLS, environment, deployment logs and container health before changing application code.
8. After deploy, test external URL plus internal dependency connectivity.