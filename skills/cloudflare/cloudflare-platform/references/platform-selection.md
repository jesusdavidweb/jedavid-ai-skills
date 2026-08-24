# Cloudflare Platform Selection

Choose by semantics:

- **D1**: relational SQL data and ad-hoc querying; current docs describe it as a read-heavy web-app fit.
- **KV**: globally distributed, read-heavy configuration/cache where eventual-consistency characteristics are acceptable.
- **R2**: unstructured object/blob storage, S3-compatible API and strong per-object consistency.
- **Durable Objects**: globally unique coordinated state, transactional storage, WebSocket/stateful workloads and serialization of writes.
- **Queues**: asynchronous buffering with at-least-once delivery; consumers must be idempotent.
- **Hyperdrive**: connection pooling/acceleration for existing Postgres/MySQL.
- **Workflows**: durable multi-step/long-running processes rather than simple message buffering.

Do not pick KV for coordination or R2 as a relational database merely because they are simple to provision.

## Sources
- https://developers.cloudflare.com/workers/platform/storage-options/
- https://developers.cloudflare.com/workers/
- https://developers.cloudflare.com/r2/how-r2-works/
