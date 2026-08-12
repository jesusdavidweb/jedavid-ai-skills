---
name: cdn-cache-strategy
description: Use when designing or debugging browser/CDN/reverse-proxy/application caching, Cloudflare cache behavior, stale content, cache poisoning risk, or WooCommerce/session exclusions.
---
# CDN and Cache Strategy
## Workflow
1. Map cache layers from browser through CDN/proxy/application/object cache and identify cache keys at each layer.
2. Classify content as public immutable, public revalidated, private/user-specific, or non-cacheable.
3. Define Cache-Control intentionally; use validators and immutable fingerprinted assets where appropriate.
4. Ensure cookies, auth headers, locale, query parameters and device variants only affect cache keys when semantically necessary.
5. Never cache personalized checkout/account/admin/API responses as shared public content.
6. Validate purge/invalidation behavior and version static assets rather than globally disabling caching.
7. Test HIT/MISS/BYPASS behavior with representative users and requests.
8. Review cache poisoning/deception risks and normalization rules.
## Output
Layer map, cache policy, incorrect behaviors, fixes and measured verification.