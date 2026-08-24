---
name: wordpress-security-performance
description: Use when hardening or optimizing WordPress/WooCommerce across updates, filesystem exposure, authentication, caching, PHP, database, cron, assets and Core Web Vitals. Prefer wordpress-incident-debugging for an active outage.
---
# WordPress Security and Performance

## Workflow
1. Establish a baseline before changing cache, PHP, database or frontend behavior.
2. Inventory versions, active code, cache layers, writable paths, exposed files, cron/Action Scheduler state and large database consumers.
3. Apply least privilege while preserving updateability and required APIs.
4. Optimize measured bottlenecks instead of applying blanket changes.
5. Verify admin, REST, cron, account and WooCommerce dynamic paths.

## Conditional references
- Hardening → `references/hardening.md`.
- Performance → `references/performance.md`.

## Available scripts
- `scripts/collect-wp-health.sh` — read-only baseline.

## Asset
Use `assets/remediation-plan.md` to prioritize work.
