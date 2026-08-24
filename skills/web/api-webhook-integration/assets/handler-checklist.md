# Webhook Handler Checklist

- Minimal subscribed event set
- Raw body retained where signing requires it
- Signature and timestamp/replay checks
- Explicit schema/event-type validation
- Stable delivery/event identifier
- Idempotent database/business transition
- Fast acknowledgement
- Async queue for slow work
- Retry/dead-letter visibility
- Out-of-order event strategy
- Correlation IDs and redacted logging
- Duplicate/invalid-signature/timeout/redelivery tests
