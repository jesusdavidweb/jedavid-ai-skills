---
name: event-driven-data
description: Use for event-driven integrations, multi-system synchronization, queues, webhook-to-database flows, PostgreSQL/Supabase models, n8n orchestration, retries, idempotency, ordering and reconciliation.
---
# Event-Driven Data Systems

## Workflow
1. Define source of truth and stable identifiers for every entity.
2. Define delivery semantics and duplicate/retry/out-of-order meaning.
3. Make consumers idempotent with durable keys/constraints.
4. Separate domain state from provider payloads and retain enough event metadata for replay/audit.
5. Move retriable/slow work off synchronous request paths.
6. Define DLQ/error visibility and reconciliation for missed events.
7. Test duplicates, ordering, partial failures and replay.

## Conditional references
- Delivery/retries/reconciliation → `references/delivery-semantics.md`.
- PostgreSQL idempotency → `references/postgres-idempotency.md`.

## Asset
Use `assets/event-contract.md` to document events.
