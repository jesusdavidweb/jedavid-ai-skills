---
name: payment-flow-security
description: Use when building or reviewing checkout/payment integrations, payment links, gateway callbacks, redirects, order completion, or payment webhooks.
---
# Payment Flow Security
## Workflow
1. Keep amount, currency, product/order identity and authorization server-controlled.
2. Sign or tokenize payment links and enforce expiration/scope where appropriate.
3. Validate all external input and bind payment attempts to a server-side order/session.
4. Verify gateway webhook/callback signatures and use idempotency for every state transition.
5. Treat browser redirects as UX signals only; never mark paid from a success URL alone.
6. Show completion/thank-you state only after server-side verified approved/paid status.
7. Emit downstream completion notifications exactly once logically, with retry-safe idempotency.
8. Keep credentials in environment/secret stores and redact sensitive logs.
## Verification
Tampered amount/order, expired token, replayed callback, duplicate webhook, failed/late payment, forged redirect and dependency timeout.