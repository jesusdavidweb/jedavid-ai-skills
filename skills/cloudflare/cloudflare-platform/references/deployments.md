# Worker Versions and Deployments

Cloudflare Worker versions capture bundled code, static assets, bindings and compatibility settings. Deployments determine which versions serve traffic.

Important: state in attached storage such as KV, R2, Durable Objects and D1 is not versioned with Worker code. A code rollback therefore does not imply data rollback. Database/storage migrations need their own forward/backward compatibility plan.

For risky releases, separate schema/data changes from code rollout where possible and verify compatibility across both old and new Worker versions.

## Sources
- https://developers.cloudflare.com/workers/versions-and-deployments/
