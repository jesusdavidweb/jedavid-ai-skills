# WP-CLI Recovery

Useful read-only commands include `wp core version`, `wp core verify-checksums`, `wp plugin status`, `wp theme status`, `wp cron event list`, `wp db check`, and `wp option get siteurl`/`home`.

When bootstrap fails, `--skip-plugins` and/or `--skip-themes` can help isolate application code. Capture active state before changing it. Do not print secrets from `wp-config.php`; inspect architecture and constant names instead.

## Sources
- https://developer.wordpress.org/cli/commands/
