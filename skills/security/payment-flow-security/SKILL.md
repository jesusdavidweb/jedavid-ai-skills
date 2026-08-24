---
name: payment-flow-security
description: Use when designing or reviewing payment links, checkout sessions, gateway callbacks, payment webhooks, order completion, refunds or downstream fulfillment where money/state transitions must remain server-authoritative and replay-safe.
---
# Payment Flow Security

## Workflow
1. Model payment/order states and define the authoritative system for each transition.
2. Keep amount, currency, product/order identity and authorization server-controlled.
3. Bind gateway attempts to a server-side order and use opaque scoped identifiers externally.
4. Verify provider signatures on raw payloads and apply replay/timestamp controls.
5. Make state transitions idempotent and transactional where possible.
6. Treat browser redirects only as UX; confirm payment server-side.
7. Test delayed, duplicated, reordered and contradictory events.

## Conditional references
- State machines/invariants → `references/state-machine.md`.
- Webhook verification → `references/webhook-verification.md`.

## Asset
Use `assets/payment-threat-model.md` before launch or migration.
