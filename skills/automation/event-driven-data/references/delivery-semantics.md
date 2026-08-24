# Delivery Semantics

Assume external webhooks/queues can deliver at least once unless a stronger contract is explicitly guaranteed. Design for duplicate, delayed and out-of-order delivery, consumer crash after side effect but before acknowledgement, poison events and provider replay/backfill. Use immutable event IDs plus a business idempotency key when several provider events represent one logical action. DLQ is visibility, not reconciliation; periodically compare source-of-truth state with derived systems when missed events matter.
