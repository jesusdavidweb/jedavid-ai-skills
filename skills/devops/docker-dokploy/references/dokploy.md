# Dokploy Notes

Dokploy distinguishes Docker Compose and Stack. Native Domains is recommended for Compose and injects Traefik labels; Compose domain changes require redeployment. Prefer `expose` when only the proxy should reach a service. Dokploy documents `../files` for persistent bind mounts; named volumes support Volume Backups, while bind mounts do not. AutoDeploy reclones repositories, so repository-relative persistent mounts can disappear; use File Mounts where persistence is required. Full Dokploy backups cover `/etc/dokploy` and its PostgreSQL database via configured S3 storage.

## Sources
- https://docs.dokploy.com/docs/core/docker-compose
- https://docs.dokploy.com/docs/core/docker-compose/domains
- https://docs.dokploy.com/docs/core/backups
