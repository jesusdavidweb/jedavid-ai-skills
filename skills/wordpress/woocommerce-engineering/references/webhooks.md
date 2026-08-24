# WooCommerce Webhooks

WooCommerce webhooks are managed by `WC_Webhook` and normally delivered asynchronously. Verify `X-WC-Webhook-Signature` against the raw body using the configured secret. Keep receivers idempotent; record topic/resource and processing outcome; inspect disabled/paused state and delivery logs before changing order hooks.

## Sources
- https://developer.woocommerce.com/docs/apis/rest-api/v3/webhooks/
