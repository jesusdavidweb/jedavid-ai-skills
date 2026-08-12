---
name: wordpress-incident-debugging
description: Use for WordPress 5xx errors, fatal errors, blank pages, broken admin/frontend, plugin conflicts, cache regressions, PHP issues, or deployment failures.
---
# WordPress Incident Debugging
## Workflow
1. Identify which layer returns the failure: CDN, Nginx/Apache, PHP-FPM, WordPress, database, plugin/theme, external API.
2. Correlate timestamps across relevant logs.
3. Reproduce on the narrowest URL/action possible.
4. Use WP-CLI to inspect state; avoid browser-only diagnosis.
5. Test plugin/theme/cache hypotheses reversibly and one at a time.
6. Confirm PHP version/extensions/memory/timeouts and upstream connectivity.
7. Fix root cause, restore normal debug settings, and verify frontend/admin/cron/checkout as applicable.
## Guardrails
Do not mass-disable plugins on production unless outage severity justifies it and rollback is immediate.