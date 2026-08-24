---
name: wordpress-incident-debugging
description: Use when a WordPress or WooCommerce site has 5xx errors, fatal errors, blank pages, broken admin/frontend behavior, plugin conflicts, cache regressions, PHP failures, or a production incident requiring root-cause isolation. Prefer wordpress-deep-audit for broad proactive audits.
---
# WordPress Incident Debugging

## Workflow
1. Establish symptom, affected URLs/actions, timeline, recent changes and blast radius.
2. Identify the failing layer: CDN/proxy, web server, PHP-FPM, WordPress, database, plugin/theme, cache, filesystem or external dependency.
3. Correlate timestamps across logs before clearing caches or restarting services.
4. Reproduce the narrowest failing request and test one hypothesis at a time.
5. Use WP-CLI and runtime inspection instead of browser-only diagnosis.
6. Apply the smallest reversible fix and verify relevant frontend, admin, cron and checkout paths.

## Conditional references
- Layer-by-layer triage → `references/layer-triage.md`.
- WP-CLI recovery and safe isolation → `references/wp-cli-recovery.md`.

## Available scripts
- `scripts/collect-wordpress-incident.sh` — read-only WordPress/PHP/runtime collection.

## Asset
Use `assets/incident-report.md` for timeline, root cause, fix and verification.
