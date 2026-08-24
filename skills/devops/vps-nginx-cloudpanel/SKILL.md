---
name: vps-nginx-cloudpanel
description: Use for Linux VPS, Nginx, PHP-FPM and CloudPanel audits or debugging involving exposed services, virtual hosts, reverse proxies, TLS, permissions, sockets, systemd, firewalls and host-vs-container routing.
---
# VPS, Nginx and CloudPanel

## Workflow
1. Inventory OS, listening sockets, firewall, users, services, containers, disk and memory.
2. Determine which process owns each port before editing configuration.
3. Inspect effective Nginx configuration with `nginx -T` and included files.
4. Trace hostname → TLS/server block → proxy/FPM upstream → application.
5. Respect panel-generated configuration boundaries.
6. Back up active config, syntax-test, reload narrowly, and verify HTTP/TLS plus upstream health.

## Conditional references
- Nginx routing → `references/nginx-reverse-proxy.md`.
- Host hardening → `references/host-hardening.md`.

## Available scripts
- `scripts/collect-host-state.sh` — read-only host/service inventory.

## Asset
Use `assets/server-audit.md` for findings.
