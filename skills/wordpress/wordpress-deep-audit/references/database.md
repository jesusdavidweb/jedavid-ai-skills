# WordPress Database Inspection

Prioritize measurable problems: total table size, rapidly growing tables, autoloaded option payload, stale transients, Action Scheduler backlog, plugin-owned logs, and expensive query patterns.

Never delete a plugin table or option until ownership and runtime usage are established. Use WP APIs/WP-CLI for serialized options and search-replace operations. For direct SQL cleanup, take a backup and prefer transaction-scoped changes where practical.

Autoload review should consider aggregate bytes and request-path relevance, not only row count. Large logs and scheduled-action tables should be diagnosed by producer and retention policy before purging.

## Sources
- WordPress Database API: https://developer.wordpress.org/apis/database/
- WP-CLI db commands: https://developer.wordpress.org/cli/commands/db/
