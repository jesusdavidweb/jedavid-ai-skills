# Cloudflare Platform Selection Reference

Use platform primitives according to their consistency and lifecycle requirements rather than convenience alone.

- **Workers**: request/compute runtime and API boundaries.
- **Pages**: static/frontend delivery where the Pages workflow remains appropriate.
- **D1**: relational data with SQL semantics.
- **R2**: object/blob storage.
- **KV**: read-heavy distributed configuration/cache where eventual consistency is acceptable.
- **Queues**: asynchronous delivery and retry boundaries.
- **Durable Objects**: coordinated state, serialization and strongly consistent per-object workflows.

Before adopting a platform feature, verify current limits, pricing, regional behavior, compatibility dates and documented production constraints in official Cloudflare documentation.
