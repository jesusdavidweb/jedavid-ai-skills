# Cloudflare Bindings

Bindings are the runtime capability boundary between a Worker and Cloudflare resources. Prefer bindings over embedding credentials for D1, KV, R2, Durable Objects, Queues, Hyperdrive and similar platform services.

Review binding names, environment-specific resource IDs, preview/production separation and whether the Worker truly requires each capability. In Workers for Platforms, user Workers can only access resources explicitly attached through bindings, making binding scope part of tenant isolation.

## Sources
- https://developers.cloudflare.com/workers/runtime-apis/bindings/
- https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/bindings/
