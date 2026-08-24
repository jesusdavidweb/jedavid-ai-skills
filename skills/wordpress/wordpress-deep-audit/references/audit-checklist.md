# WordPress Audit Checklist

Collect evidence in this order: environment and docroot; versions/components; configuration architecture; database; cron/Action Scheduler; logs; filesystem; cache layers; WooCommerce order storage; external dependencies.

Prefer WP-CLI and server-side evidence over dashboard impressions. Record quantities (rows, bytes, error frequency, queue age) rather than adjectives such as “large” or “slow”.

For each finding record: evidence, likely cause, business impact, confidence, safest remediation, rollback, and verification.

## Sources
- WordPress Developer Resources: https://developer.wordpress.org/
- WP-CLI handbook: https://make.wordpress.org/cli/handbook/
- WooCommerce developer docs: https://developer.woocommerce.com/
