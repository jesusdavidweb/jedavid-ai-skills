# PostgreSQL Idempotency

Prefer DB-enforced invariants: unique provider/event IDs, unique business keys for one-time effects, transactions for event receipt plus state transition when colocated, and explicit processed/failed state with retry metadata. Use `ON CONFLICT` only when its behavior matches domain semantics. Do not rely solely on in-memory dedupe. Separate raw event storage from normalized domain tables when replay/debugging value justifies it.
