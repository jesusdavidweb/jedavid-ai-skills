---
name: smtp-production-debugging
description: Use for production outbound SMTP incidents involving timeouts, deferred queues, inconsistent destination reachability, repeated retries, connection refusals, provider-specific failures, or unclear network-vs-SMTP root cause. Prefer email-deliverability for spam placement, authentication and reputation-only work; prefer postfix-selective-relay when the failure is already proven and alternate routing is the task.
---
# SMTP Production Debugging

## Objective
Diagnose outbound SMTP incidents by evidence layer and unique message outcome. Do not infer failure rate from raw error-line counts.

## Workflow
1. Identify the active MTA, runtime/container, effective configuration, persistent log source and current queue before changing anything.
2. Define an analysis window and correlate events by Postfix queue ID. Separate unique messages from delivery attempts/retries.
3. Classify each failure at the earliest proven layer: DNS resolution, TCP connectivity, SMTP session/banner, temporary SMTP policy, permanent SMTP policy/recipient, or sender authentication/reputation/content.
4. Group persistent failures by recipient domain, MX hostname and MX IP. Distinguish isolated/transient MX failure from a repeated destination cluster.
5. Build controls from the same source host/IP and time window: unrelated healthy MXes and, when possible, another MX in the same provider family.
6. For pre-banner failures, resolve MX/A/AAAA and perform spaced TCP probes. Capture whether the result is connected/banner, timeout, refusal or explicit network error. Do not send mail during a connectivity probe unless the task requires a controlled delivery test.
7. Use TCP traceroute/MTR only as supporting path evidence. Do not treat ICMP failure or intermediate-hop probe loss as proof of end-to-end forwarding loss.
8. Test local/provider hypotheses against persistence and controls. A documented rate limit is not automatically the cause of a TCP handshake timeout.
9. Preserve confirmed facts, strong hypotheses and unproven hypotheses separately. State what additional telemetry would be required for claims outside the host's visibility.
10. Recommend the smallest reversible remediation, then verify queue behavior and final delivery independently.

## Classification
- DNS lookup failure → DNS/routing dependency.
- TCP timeout before SMTP banner → reachability, filtering, blackholing, destination availability or pre-banner tarpitting candidate.
- TCP connection refused → destination/intermediary actively rejected the connection or service is unavailable.
- `421` / `450` / `451` → temporary SMTP-layer response; inspect exact text and retry semantics.
- `550` / `552` / `554` → permanent recipient/policy/content response; TCP and SMTP negotiation succeeded far enough to receive policy.
- `250` → peer accepted responsibility at that SMTP stage; it does not by itself prove final inbox delivery.

## Measurement rules
Report at minimum:
- unique queue IDs;
- final `sent`, `deferred`, and `bounced` outcomes;
- attempts/retries separately from unique messages;
- failures grouped by recipient domain/MX/IP;
- oldest deferred age;
- temporary vs permanent SMTP responses.

Never use `grep timeout | wc -l` or equivalent raw-line counts as the delivery-failure KPI.

## Guardrails
- Start read-only. Queue flush, requeue, deletion, transport changes and service restarts require explicit justification.
- Never expose recipient addresses, message bodies, SMTP credentials, API keys or customer-identifying data in reports or repository artifacts.
- Redact public IPs, domains, queue IDs and provider support transcripts when turning a private incident into reusable documentation unless they are intentionally public test fixtures.
- Do not claim source-IP blocking, upstream null-routing or destination firewall policy without evidence available at that layer.

## Related skills
- `postfix-billionmail` — effective Postfix/BillionMail runtime, queues, containers and persistent configuration.
- `email-deliverability` — SPF/DKIM/DMARC, sender identity, reputation, spam placement and provider policy.
- `postfix-selective-relay` — deterministic alternate transport after destination-specific failure is established.
- `mail-delivery-observability` — ongoing queue/outcome/MX monitoring after incident resolution.
