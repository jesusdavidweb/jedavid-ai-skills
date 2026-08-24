# HPOS Compatibility

HPOS is stable and enabled by default for new stores since WooCommerce 8.2. Use `wc_get_order()`, `wc_get_orders()` and `WC_Order` CRUD methods; do not assume orders live in `wp_posts`/`wp_postmeta`. Test HPOS explicitly and legacy storage when claiming compatibility. Core HPOS tables include `_wc_orders`, `_wc_order_addresses`, `_wc_order_operational_data` and `_wc_orders_meta`.

## Sources
- https://developer.woocommerce.com/docs/features/orders/high-performance-order-storage/
- https://developer.woocommerce.com/docs/features/orders/
