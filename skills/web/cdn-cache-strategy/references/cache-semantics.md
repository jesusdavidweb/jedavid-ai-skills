# Cache Semantics

Versioned content-addressed assets can use long public immutable caching. Public HTML/APIs need bounded shared TTL and validators/revalidation as appropriate. Personalized/authenticated responses should generally not enter a shared cache; mutations/payment/webhook endpoints are non-cacheable. Use `Cache-Control`, `ETag`, `Last-Modified`, `Vary`, CDN rules and explicit purge intentionally. Avoid both high-cardinality cache keys and missing dimensions that change representation.
