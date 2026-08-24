---
name: testing-strategy
description: Use when defining or reviewing unit, integration, contract, end-to-end and regression testing for a repository, feature, API or production bug, including CI scope and test reliability.
---
# Testing Strategy

## Workflow
1. Identify critical behavior, trust boundaries and costly failure modes.
2. Put deterministic domain logic under fast focused tests.
3. Test real integration contracts where mocks would hide failure modes.
4. Reserve E2E tests for important user/business flows and cross-system behavior.
5. Add regression coverage for reproduced bugs when practical.
6. Keep tests isolated, deterministic and explicit about fixtures/time/network.
7. Run focused tests first, then broader CI/build validation.

## Conditional references
- Choosing test layers → `references/test-layers.md`.
- Integration/contract cases → `references/integration-contracts.md`.

## Asset
Use `assets/test-plan.md` for feature/release planning.
