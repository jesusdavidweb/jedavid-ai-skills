---
name: testing-strategy
description: Use when adding, restructuring, or evaluating automated tests for web applications, APIs, WordPress plugins, integrations, or infrastructure-sensitive code.
---
# Testing Strategy
## Workflow
1. Identify critical behaviors, invariants, trust boundaries and historically fragile paths.
2. Use unit tests for pure logic, integration tests for boundaries, and end-to-end tests only for high-value user journeys.
3. Prefer deterministic fixtures and fake external services over brittle timing/network dependencies.
4. Test failure paths, retries, duplicate events, authorization and invalid input, not only happy paths.
5. Keep tests behavior-oriented and avoid coupling to implementation details.
6. Add regression tests for every fixed bug when practical.
7. Track slow/flaky tests and quarantine only with an explicit repair path.
## Output
Coverage priorities, test layers, missing cases and exact commands used for verification.