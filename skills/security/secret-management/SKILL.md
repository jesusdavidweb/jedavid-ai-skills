---
name: secret-management
description: Use when configuring credentials, API keys, environment variables, CI/CD secrets, Cloudflare/Docker secrets, or investigating accidental secret exposure.
---
# Secret Management
## Workflow
1. Classify secrets and identify every runtime that needs them.
2. Store secrets in environment/platform secret stores; commit only documented variable names/examples.
3. Grant least privilege and scope tokens to required resources/actions.
4. Prevent secrets from appearing in URLs, client bundles, logs, screenshots and error output.
5. If exposure is suspected, rotate first, then remove from current files and history as required.
6. Document rotation and ownership without recording secret values.
7. Verify deployed runtime receives the secret while repository/build artifacts do not.