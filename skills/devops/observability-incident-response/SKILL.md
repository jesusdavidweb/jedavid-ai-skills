---
name: observability-incident-response
description: Use when designing logs, metrics, traces and alerts or responding to production incidents that require timeline reconstruction, correlation, impact assessment, mitigation and post-incident follow-up.
---
# Observability and Incident Response

## Workflow
1. Define user-visible symptom, severity, affected services and start time.
2. Preserve evidence and build a timeline from correlated logs/metrics/traces.
3. Separate mitigation from root-cause work; prefer reversible containment first.
4. Track hypotheses against evidence.
5. Verify recovery with user-facing signals and error/SLO metrics.
6. Document root cause, contributing factors, detection gaps and prevention work.

## Conditional references
- Telemetry design → `references/telemetry.md`.
- Incident lifecycle → `references/incident-lifecycle.md`.

## Asset
Use `assets/incident-template.md` during incidents and postmortems.
