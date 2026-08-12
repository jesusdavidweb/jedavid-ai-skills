---
name: wordpress-security-performance
description: Use when hardening or optimizing WordPress/WooCommerce across permissions, exposure, authentication, updates, caching, PHP, database, cron, assets, and Core Web Vitals.
---
# WordPress Security and Performance
## Workflow
1. Baseline before tuning: response timing, cache hit behavior, PHP workers, DB load, CWV and error rate.
2. Patch core/plugins/themes and remove truly unused components after compatibility review.
3. Harden filesystem permissions, disable execution in upload-like writable directories where architecture permits, block exposed backups/config/logs, and protect admin/auth surfaces without breaking APIs/cron.
4. Tune page/object/opcode caching with correct WooCommerce exclusions.
5. Diagnose autoload bloat, cron/Action Scheduler backlog, slow queries, oversized logs and heavy plugins.
6. Optimize images/fonts/JS/CSS based on measured bottlenecks, not blanket minification.
7. Verify checkout, account, REST, webhooks and admin after cache/security changes.