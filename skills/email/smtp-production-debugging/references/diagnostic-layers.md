# SMTP Diagnostic Layers

Diagnose the earliest layer with direct evidence. Later-layer explanations cannot cause an earlier-layer failure.

| Layer | Evidence | Typical interpretation |
|---|---|---|
| DNS | MX/A/AAAA lookup fails | resolver, authoritative DNS or destination publication issue |
| TCP | timeout/refusal before banner | reachability, filtering, unavailable listener, path issue or tarpitting candidate |
| SMTP session | banner/EHLO/TLS failure | SMTP service or negotiation problem |
| SMTP temporary | 4xx | throttling, greylisting, temporary policy/resource issue |
| SMTP permanent | 5xx | recipient, authentication, content or permanent policy rejection |
| post-acceptance | remote 250 but no inbox delivery | downstream filtering/delivery; investigate separately |

## Evidence discipline

Correlate Postfix events by queue ID. One deferred message may generate many connection attempts and log lines. Report unique messages and attempts separately.

Use controls from the same source host/IP and observation period. A healthy unrelated destination disproves a universal outbound failure but does not prove every destination path is healthy.

Traceroute/MTR is supporting evidence only. Intermediate nodes may suppress probes while forwarding production TCP normally.

Keep findings in three buckets: confirmed facts, evidence-supported hypotheses, and unproven hypotheses requiring upstream/destination telemetry.
