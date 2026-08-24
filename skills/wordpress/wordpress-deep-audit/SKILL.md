---
name: wordpress-deep-audit
description: Use for broad evidence-based audits of WordPress or WooCommerce installations covering runtime, database, scheduled work, plugins/themes, PHP/web server, caching, security exposure, logs, filesystem and operational health. Prefer focused incident skills for one known failure.
---
# WordPress Deep Audit
## Workflow
1. Identify real docroot, runtime owner, PHP/FPM, web server, cache/CDN and host-vs-container boundaries.
2. Record WordPress, WooCommerce, plugin, theme, MU-plugin and drop-in state without changing it.
3. Inspect configuration architecture without printing secrets.
4. Quantify database size, autoloaded options, transient/log growth, cron and Action Scheduler health.
5. Review logs, filesystem exposure/permissions and cache behavior.
6. For WooCommerce, identify HPOS state and storage synchronization before drawing order-table conclusions.
7. Rank findings by evidence, production impact and reversibility.
## Conditional references
- Broad audit evidence map → `references/audit-checklist.md`.
- Database/autoload/log growth → `references/database.md`.
- Cron, Action Scheduler or WooCommerce background work → `references/scheduled-work.md`.
- Filesystem, backups, uploads and permissions → `references/filesystem-security.md`.
- WooCommerce/HPOS storage questions → `references/woocommerce-hpos.md`.
## Available scripts
- `scripts/collect-system-info.sh` — read-only WordPress/WooCommerce/runtime inventory.
- `scripts/inspect-database.sh` — read-only database sizing and autoload inspection via WP-CLI.
## Asset
Use `assets/audit-report.md` for a consistent final report.
## Guardrails
Audit first. Never delete tables, files, options, scheduled actions or caches because they merely look unused. Prove ownership and establish rollback before mutation.
