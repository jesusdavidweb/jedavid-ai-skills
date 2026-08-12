---
name: bug-investigation
description: Use when diagnosing errors, regressions, broken behavior, production incidents, unexpected API responses, or intermittent failures.
---
# Bug Investigation
## Workflow
1. Capture exact symptom, expected behavior, scope and timeline.
2. Reproduce or gather logs/requests/state proving the failure.
3. Build hypotheses ranked by evidence; test one variable at a time.
4. Trace from boundary to root cause: client, edge, app, dependency, database, infrastructure.
5. Fix the root cause with the smallest safe change.
6. Add a regression test or deterministic verification where possible.
7. Verify adjacent behavior and document why the fix works.
## Guardrails
Do not shotgun-change configuration, disable security controls, or clear evidence before collecting it.