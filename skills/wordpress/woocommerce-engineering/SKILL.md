---
name: woocommerce-engineering
description: Use for WooCommerce extension development or debugging involving orders, carts, checkout, Store API, Checkout Blocks, payment gateways, webhooks, emails, sessions, HPOS or custom order lifecycle behavior.
---
# WooCommerce Engineering

## Workflow
1. Establish WooCommerce version, HPOS state, checkout implementation and relevant extensions.
2. Use WooCommerce CRUD APIs and supported extension points instead of direct post/meta assumptions.
3. Treat cart, checkout, order and payment state as server-owned.
4. Make callbacks/webhooks and payment transitions idempotent.
5. Test guest/authenticated paths and storage/checkout modes covered by compatibility claims.

## Conditional references
- HPOS → `references/hpos.md`.
- Store API / Checkout Blocks → `references/store-api-checkout.md`.
- Woo webhooks → `references/webhooks.md`.

## Asset
Use `assets/compatibility-checklist.md` before shipping.
