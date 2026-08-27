# Mail Delivery Metrics

Prefer message-level state over log-line volume.

## Core dimensions
- observation window;
- unique queue ID;
- final/current status: sent, deferred, bounced;
- attempt count;
- queue age;
- recipient domain in private telemetry, or privacy-preserving destination group in shared reports;
- MX hostname/provider family;
- failure layer: DNS, TCP, SMTP 4xx, SMTP 5xx;
- route: direct or relay.

## Useful alerts
Alert when patterns persist across unique messages or exceed a baseline: repeated failures to the same MX, increasing deferred-message rate, old queue age, provider 4xx spikes, relay authentication/acceptance failures, or unexpected route-volume changes.

Do not page solely on raw timeout-line count, one failed MX attempt that later succeeds through another MX, or intermediate traceroute loss.
