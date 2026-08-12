---
name: api-webhook-integration
description: Use when designing or debugging API-driven integrations, outbound webhooks, inbound webhook consumers, n8n flows, or event synchronization.
---
# API and Webhook Integration
## Workflow
1. Define source of truth, event contract, authentication, ownership and failure semantics.
2. Validate all external input against an explicit schema.
3. Verify webhook signatures on raw request bytes when required; enforce timestamp/replay protection.
4. Make consumers idempotent using stable event/business identifiers.
5. Return quickly and move slow/retriable work to queues where possible.
6. Use bounded retries with backoff and dead-letter/error visibility.
7. Log correlation IDs and outcomes without sensitive payload leakage.
8. For n8n, keep business-critical validation/auth in the application boundary rather than trusting workflow nodes alone.
## Verification
Test success, duplicate delivery, invalid signature, timeout, retry, out-of-order events and dependency failure.