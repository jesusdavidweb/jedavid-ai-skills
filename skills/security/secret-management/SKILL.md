---
name: secret-management
description: Use when designing credential storage, API keys, environment variables, CI/CD secrets, container/cloud secrets, rotation or incident response for leaked tokens and private keys.
---
# Secret Management

## Workflow
1. Inventory secrets, owners, consumers, privilege and rotation capability.
2. Keep secrets out of source, images, client bundles, URLs and ordinary logs.
3. Prefer platform secret stores and workload identity over long-lived static credentials.
4. Grant least privilege and isolate secrets per environment/service.
5. Rotate immediately when exposure is credible and verify old credentials stop working.
6. Record metadata/ownership, never secret values.

## Conditional references
- Lifecycle/rotation → `references/lifecycle.md`.
- Containers/CI → `references/containers-ci.md`.

## Asset
Use `assets/rotation-runbook.md` for planned or emergency rotation.
