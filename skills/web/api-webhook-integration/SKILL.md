---
name: api-webhook-integration
description: Use when designing or debugging inbound/outbound webhooks, API event consumers, n8n handoffs or event synchronization where signatures, duplicate delivery, retries, ordering, acknowledgements and idempotency matter.
---
# API and Webhook Integration
## Workflow
1. Define source of truth, event contract, authentication, delivery identifier and failure semantics.
2. Validate event type and payload schema; preserve raw body when signature schemes require exact bytes.
3. Verify signatures before trusting payload data and add replay/timestamp controls according to provider semantics.
4. Make processing idempotent using stable provider/business identifiers and database uniqueness where possible.
5. Acknowledge quickly and queue slow work. Never assume providers share the same timeout/retry policy.
6. Design for duplicates, redelivery, out-of-order events and partial downstream failure.
7. Log correlation/delivery IDs and outcomes without sensitive payload leakage.
8. Keep critical validation/auth outside n8n when n8n is only orchestration.
## Conditional references
- Signatures and replay → `references/security.md`.
- Idempotency/order → `references/idempotency.md`.
- Provider delivery/retry differences → `references/provider-behavior.md`.
## Available scripts
- `scripts/verify-hmac.py` — offline HMAC verification helper for fixtures/debugging.
## Asset
Use `assets/handler-checklist.md` during implementation review.
