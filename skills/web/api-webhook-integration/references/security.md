# Webhook Security

Use HTTPS and authenticate webhook deliveries using the provider-supported signature/secret mechanism. Verify against the exact raw bytes when required; parsing and re-serializing JSON before verification can invalidate signatures.

Keep secrets out of payload URLs and logs. Where timestamps are signed, enforce a bounded tolerance appropriate to the provider. A unique delivery/event ID can provide replay/duplicate protection but preserve provider redelivery semantics.

IP allowlisting is defense-in-depth only when the provider publishes maintainable ranges; do not replace cryptographic verification with IP checks.

## Sources
- GitHub: https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks
- Stripe: https://docs.stripe.com/webhooks
