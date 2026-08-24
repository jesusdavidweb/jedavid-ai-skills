# Layer Triage

Work outside-in and prove ownership of the failure: edge/CDN → reverse proxy → PHP-FPM → WordPress bootstrap → database → plugin/theme → cache → external dependency.

Capture status codes, cache/request IDs, effective vhost/upstream config, PHP errors, database connectivity/locks and dependency latency before mutation. Distinguish page, object, opcode and CDN caches. Prefer a narrow bypass or one verified component isolation over mass-disabling plugins.

## Sources
- https://developer.wordpress.org/advanced-administration/
- https://wp-cli.org/
