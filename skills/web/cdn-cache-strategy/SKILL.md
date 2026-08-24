---
name: cdn-cache-strategy
description: Use when designing or debugging browser/CDN/reverse-proxy/application caching, cache keys, invalidation, personalized content, stale responses, redirects or cache-related correctness/performance regressions.
---
# CDN and Cache Strategy

## Workflow
1. Map every cache layer and identify authority for headers/keys.
2. Classify responses as public, private/personalized, immutable assets or non-cacheable mutations.
3. Define cache keys using only representation-changing dimensions.
4. Set TTL/revalidation/stale behavior intentionally and document invalidation.
5. Protect authenticated/cart/checkout/account content from shared-cache leakage.
6. Diagnose with headers and controlled bypass/purge instead of global clearing.
7. Verify HIT/MISS/revalidation behavior and correctness.

## Conditional references
- Cache semantics → `references/cache-semantics.md`.
- Debugging → `references/debugging.md`.

## Asset
Use `assets/cache-plan.md` to document policy.
