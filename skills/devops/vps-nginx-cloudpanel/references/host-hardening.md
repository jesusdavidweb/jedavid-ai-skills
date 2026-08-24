# Host Hardening

Map every listening socket to an expected service; expose only required ports. Prefer key-based SSH, maintain OS/runtime packages, use least privilege for application users and avoid recursive permission changes without ownership context. Separate host daemons from containerized replacements. Protect backups, env files and panel endpoints. Determine which Nginx files CloudPanel owns before editing them.
