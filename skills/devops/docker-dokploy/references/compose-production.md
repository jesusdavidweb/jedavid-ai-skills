# Compose Production

Prefer immutable app code in images over development bind mounts. Use production overrides where appropriate. Define meaningful health checks; `depends_on: condition: service_healthy` can gate dependent startup. Persist state explicitly, use restart policies intentionally, and prefer Compose secrets over plain environment variables for sensitive values when applications support them.

## Sources
- https://docs.docker.com/compose/how-tos/production/
- https://docs.docker.com/compose/how-tos/startup-order/
- https://docs.docker.com/compose/how-tos/use-secrets/
