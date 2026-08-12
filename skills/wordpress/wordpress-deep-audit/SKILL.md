---
name: wordpress-deep-audit
description: Use for full WordPress/WooCommerce audits covering application, database, cron, plugins/themes, PHP, Nginx, caching, security, performance, logs, filesystem and operational health.
---
# WordPress Deep Audit
## Workflow
1. Identify actual docroot, runtime user, PHP/FPM version, web server, cache layers and container/host boundaries.
2. Record WP/core/plugin/theme versions and active/must-use/drop-in components.
3. Inspect `wp-config.php` safely: constants and architecture, never secret values.
4. Inspect Site Health, cron, Action Scheduler, autoloaded options, transients, large/log tables and orphaned plugin data.
5. Review PHP/FPM/Nginx/WordPress logs and quantify recurring errors.
6. Review filesystem ownership/permissions, writable executable areas, exposed backups/archives and unexpected files.
7. Inspect object/page/CDN caching and WooCommerce exclusions.
8. Rank findings; propose checkpoints before cleanup or config changes.
## Guardrails
Audit first. Never delete tables/files/options solely because they look unused; prove ownership and take backups.