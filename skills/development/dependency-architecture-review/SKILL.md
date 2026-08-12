---
name: dependency-architecture-review
description: Use when reviewing architecture, technical debt, dependencies, upgrades, scalability, or whether a project should adopt/remove a library or service.
---
# Dependency and Architecture Review
## Workflow
1. Map runtime/build dependencies and architectural boundaries.
2. Identify unsupported/EOL versions, duplicate responsibilities, risky transitive dependencies and lockfile drift.
3. Check actual usage before proposing removal.
4. Evaluate upgrades for API/runtime/build/deployment compatibility and migration cost.
5. Review coupling, state ownership, failure domains, data consistency and observability.
6. Prefer simpler architecture unless complexity solves a measured requirement.
7. Separate urgent security/correctness upgrades from optional modernization.
## Output
Current architecture, dependency risks, target state, migration sequence, rollback points and validation.