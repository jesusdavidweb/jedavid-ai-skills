---
name: mail-delivery-observability
description: Use to design monitoring, reports and alerts for Postfix/outbound mail delivery using unique queue outcomes, retries, queue age, MX/provider grouping, SMTP response classes and direct-vs-relay paths. Avoid raw log-line counts as delivery KPIs.
---
# Mail Delivery Observability

## Objective
Measure mail delivery health using message-level outcomes and destination patterns instead of noisy retry log volume.

## Workflow
1. Identify authoritative mail logs, queue state and log rotation boundaries.
2. Correlate records by queue ID and define the observation window explicitly.
3. Separate unique messages from attempts/retries.
4. Calculate final/current outcomes: sent, deferred, bounced and unresolved where applicable.
5. Group failures by recipient domain, MX hostname/IP and normalized provider family when mapping is evidence-based.
6. Separate network/pre-banner failures from SMTP `4xx` and `5xx` responses.
7. Measure queue age and retry persistence so a small stuck cohort cannot masquerade as broad failure volume.
8. If multiple outbound transports exist, report direct vs relay volume and outcomes separately.
9. Alert on persistent patterns and changes in unique-message rates, not isolated retry lines.
10. Preserve enough timestamp/queue/MX evidence to support incident escalation without retaining unnecessary message content or recipient PII.

## Minimum metrics
- unique outbound queue IDs;
- sent count/rate;
- deferred count/rate;
- bounced count/rate;
- unresolved/current queue count;
- retry attempts per unique queue ID;
- oldest deferred queue age;
- TCP timeout/refusal count by unique queue ID and MX;
- SMTP `4xx` by provider/MX;
- SMTP `5xx` by provider/MX;
- direct vs relay message count and success rate when applicable.

## Alert patterns
Prefer alerts such as:
- same MX failing repeatedly across multiple unique queue IDs;
- oldest deferred message exceeds an operational threshold;
- unique deferred rate increases materially from baseline;
- major provider `4xx` rate spikes;
- relay acceptance failures appear;
- direct-to-relay routing volume changes unexpectedly.

Avoid alerts based only on:
- total `Connection timed out` lines;
- ICMP loss;
- one transient MX/IP failure when alternate MX delivery succeeds;
- a single SMTP rejection without considering response semantics.

## Conditional references
- Message-level metrics, dimensions and alert semantics → `references/metrics.md`.

## Asset
Use `assets/monitoring-dashboard.md` as a privacy-safe dashboard/report baseline.

## Privacy
Operational telemetry should normally retain queue ID, timestamp, outcome, MX/provider, response class and latency/age. Hash or redact recipient addresses where exact addresses are not required. Do not store message bodies, credentials or private customer incident transcripts in dashboards or reusable fixtures.

## Related skills
- `smtp-production-debugging` — incident diagnosis.
- `postfix-billionmail` — queue/log/runtime inspection.
- `postfix-selective-relay` — alternate transport metrics.
- `email-deliverability` — provider policy/reputation analysis.
