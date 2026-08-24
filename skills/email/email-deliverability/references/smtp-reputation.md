# SMTP Response and Reputation Triage

Preserve exact enhanced status codes and remote text. Distinguish 4xx temporary deferrals from 5xx permanent rejection and classify whether the message points to authentication, reputation, rate, recipient, content or routing.

Correlate provider behavior by recipient domain and time. A sudden cross-provider shift may indicate sending-pattern or reputation changes; a single-domain failure may be provider-specific. Never purge queues or radically change concurrency before measuring queue age, retry behavior and remote responses.

Reputation tools are signals, not authoritative explanations. Prefer provider postmaster telemetry and SMTP evidence.
