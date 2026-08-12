---
name: vps-nginx-cloudpanel
description: Use for Linux VPS, Nginx, PHP-FPM and CloudPanel audits, security hardening, virtual-host debugging, permissions, services, TLS, reverse proxying, and production operations.
---
# VPS, Nginx and CloudPanel
## Workflow
1. Inventory OS, exposed ports, firewall, SSH, users, systemd services, containers, disk/memory and listening sockets.
2. Determine which service actually owns each port; distinguish host daemons from containerized replacements.
3. For Nginx, inspect effective configuration (`nginx -T`) and included files, not only one vhost file.
4. Validate server_name, document root, upstream/FPM socket, TLS, redirects, headers, caching and deny rules.
5. Back up the exact active config before edits; run syntax test before reload.
6. Review file ownership/permissions and least privilege without applying invalid directory modes.
7. In CloudPanel, respect generated configuration boundaries and understand what the panel may overwrite.
## Verification
Socket ownership, config syntax, HTTP/TLS response, logs, application behavior and reboot persistence where relevant.