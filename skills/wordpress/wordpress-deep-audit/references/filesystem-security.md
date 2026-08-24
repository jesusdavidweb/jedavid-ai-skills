# Filesystem and Exposure Review

Check ownership and writable paths against the actual runtime user. Flag public backups, SQL dumps, debug logs, archives and configuration copies. Treat executable files in upload/cache directories as suspicious according to site architecture.

Do not apply generic recursive permissions. Preserve deployment ownership, symlinks, container mounts and panel-managed files. Verify web-server deny rules against the effective configuration.

## Sources
- WordPress hardening: https://developer.wordpress.org/advanced-administration/security/hardening/
