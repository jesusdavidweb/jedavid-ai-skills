---
name: event-driven-data
description: Use for event-driven integrations, multi-system synchronization, n8n automation, PostgreSQL/Supabase data models, push-first architectures, queues, retries, and reconciliation.
---
# Event-Driven Data Systems
## Workflow
1. Define source of truth per entity and stable identifiers across systems.
2. Prefer push-first events for freshness; add scheduled reconciliation for missed/out-of-order events.
3. Store raw event identity/status sufficiently for idempotency and observability.
4. Model domain entities separately from provider-specific payloads.
5. Use database constraints to enforce uniqueness and invariants where possible.
6. Process asynchronously when upstream latency should not block the source transaction.
7. Implement retry/backoff/dead-letter strategy and make handlers idempotent.
8. For PostgreSQL/Supabase, design indexes from actual query patterns and use migrations for schema evolution.
9. Keep n8n as orchestration where useful, not as the sole guardian of critical security/data invariants.
## Verification
Duplicates, missing events, out-of-order delivery, partial failure, replay and reconciliation.