---
name: wp-cli-database-ops
description: Use for WP-CLI maintenance, admin recovery, cron inspection, search-replace, database cleanup, plugin management, cache operations, and safe WordPress command-line changes.
---
# WP-CLI and Database Operations
## Workflow
1. Confirm docroot, environment and database target before any write.
2. Prefer read commands first: option/plugin/theme/user/cron/db queries.
3. Back up the database before bulk mutations or cleanup.
4. Use `wp search-replace --dry-run` before replacements and preserve serialized data via WP-CLI.
5. For cleanup, quantify rows/bytes and prove table/option ownership before deletion.
6. Use transactions where practical for direct SQL.
7. Re-run targeted queries and application checks after mutation.
## Guardrails
Never run global search-replace, arbitrary SQL deletion, user password changes, or cache flushes against an unverified environment.