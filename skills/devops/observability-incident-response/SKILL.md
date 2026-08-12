---
name: observability-incident-response
description: Use when adding logs/metrics/traces, diagnosing production incidents, building health checks, or improving operational visibility for applications and infrastructure.
---
# Observability and Incident Response
## Workflow
1. Define service-level symptoms and user impact before collecting arbitrary telemetry.
2. Use structured logs with timestamps, severity, service, request/correlation IDs and actionable context.
3. Track golden signals relevant to the service: latency, traffic, errors and saturation, plus domain-specific metrics.
4. Keep health/readiness checks cheap and meaningful; distinguish process-up from dependency-ready.
5. Redact secrets, credentials, payment data and unnecessary personal data.
6. During incidents, preserve evidence and build a timeline before changing multiple variables.
7. After mitigation, identify root cause, contributing factors, detection gaps and prevention work.
## Output
Impact, timeline, evidence, root cause, mitigation, verification and follow-up actions.