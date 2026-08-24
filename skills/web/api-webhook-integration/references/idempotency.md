# Idempotency and Event Ordering

Webhook delivery is commonly at-least-once in practice. Store a stable provider event/delivery ID with a uniqueness constraint and record processing outcome. If a provider may emit distinct events for the same business object/state, combine event semantics with business-state invariants rather than event ID alone.

Do not assume chronological delivery. State transitions should reject impossible regressions or derive current truth from the authoritative provider when ordering is ambiguous.

Separate receipt from processing: persist/queue enough information to retry downstream work without asking the provider to resend when possible.
