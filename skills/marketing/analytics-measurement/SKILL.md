---
name: analytics-measurement
description: Use when designing or auditing web/product analytics, conversion tracking, event taxonomies, funnels, attribution, consent-aware measurement, or marketing reporting.
---
# Analytics and Measurement
## Workflow
1. Start from business questions and decisions, not available tracking tools.
2. Define a stable event taxonomy with event name, trigger, properties, identity rules and owner.
3. Keep canonical business events server-side when possible; use client events for interaction context.
4. Avoid duplicate events across SPA navigation, retries, tag managers and server callbacks.
5. Separate acquisition attribution from product behavior and revenue truth.
6. Respect consent/privacy requirements and minimize personal data collection.
7. Validate events in raw/debug views before trusting dashboards.
8. Document metric formulas so conversion/revenue definitions remain consistent over time.
## Output
Measurement plan, event schema, implementation map, validation checklist and dashboard recommendations.