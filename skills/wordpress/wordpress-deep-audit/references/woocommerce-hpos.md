# WooCommerce HPOS Audit

High-Performance Order Storage is stable and enabled by default for new WooCommerce installations since 8.2. Do not assume orders live in `wp_posts`/`wp_postmeta`.

Use WooCommerce CRUD APIs for application reasoning and inspect HPOS status before database conclusions. Current CLI commands live under `wp wc hpos`; older `wp wc cot` aliases are deprecated. Useful read/verification commands include `wp wc hpos status`, `count_unmigrated` and `verify_data` where supported.

Before enabling/disabling HPOS, establish plugin compatibility and datastore synchronization. Changes belong to a dedicated migration/change plan, not an audit.

## Sources
- https://developer.woocommerce.com/docs/features/orders/high-performance-order-storage/
- https://developer.woocommerce.com/docs/features/orders/high-performance-order-storage/cli-tools/
