# Payment State Machine

Define explicit states matching provider/business semantics. A client redirect cannot create a paid transition; duplicate events must not duplicate fulfillment; refunds reference verified paid transactions; older/conflicting events cannot silently regress terminal state. Downstream effects need their own durable idempotency markers. Prefer database uniqueness and durable event records over in-memory dedupe.
