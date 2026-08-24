# Provider Delivery Behavior

Provider retry behavior is not universal.

**GitHub:** recommends a 2xx response within 10 seconds. Failed deliveries are not automatically redelivered; GitHub supports explicit redelivery and preserves `X-GitHub-Delivery` for the same delivery.

**Stripe:** webhook endpoints can receive duplicate events; Stripe recommends recording processed event IDs and processing asynchronously. Signature verification should use Stripe's official verification flow/raw payload.

Always read the specific provider's current timeout, retry, signing and redelivery documentation before encoding constants.

## Sources
- https://docs.github.com/en/webhooks/using-webhooks/best-practices-for-using-webhooks
- https://docs.github.com/en/webhooks/using-webhooks/handling-failed-webhook-deliveries
- https://docs.stripe.com/webhooks
