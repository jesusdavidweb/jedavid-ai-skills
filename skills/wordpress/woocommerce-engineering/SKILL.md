---
name: woocommerce-engineering
description: Use for WooCommerce debugging or extension development involving checkout, carts, orders, payments, customer data, emails, HPOS, hooks, REST APIs, sessions, or custom gateways.
---
# WooCommerce Engineering
## Workflow
1. Determine WooCommerce version, HPOS state, checkout implementation, cache layers and relevant extensions.
2. Use WooCommerce CRUD APIs instead of direct post/meta assumptions when supported.
3. Respect order lifecycle and payment state transitions; make callbacks/webhooks idempotent.
4. Validate/sanitize input, escape output, enforce nonces/capabilities for privileged actions.
5. Never trust client-provided price, payment success, order ownership or redirect state.
6. Keep gateway/API secrets server-side.
7. Test guest/authenticated flows, coupons/tax/shipping where relevant, duplicate callbacks, failed payments and emails.
8. Verify compatibility with HPOS and current Woo hooks/APIs.
## Output
Root cause/design, changed hooks/classes, compatibility notes, tests and rollback.