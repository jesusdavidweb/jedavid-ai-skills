---
name: release-engineering
description: Use when preparing production releases, versioning packages/plugins, changelogs, migrations, deployment sequencing, rollback, or release automation.
---
# Release Engineering
## Workflow
1. Define release scope from verified commits and user-visible behavior.
2. Classify breaking, feature and fix changes; follow the project's versioning policy.
3. Verify dependency locks, generated artifacts, database/schema migrations and backward compatibility.
4. Run the complete release quality gate from a clean checkout/build environment.
5. Make migrations forward-safe where possible and document rollback limitations.
6. Produce concise changelog/release notes focused on behavior and operational impact.
7. Tag/release only after commit SHA and artifacts are verified.
8. Perform post-deploy smoke tests and monitor logs/health indicators.
## Guardrails
Never publish from an unclean working tree or silently regenerate artifacts with unverified tool versions.