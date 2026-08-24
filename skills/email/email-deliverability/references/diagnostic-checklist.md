# Email Deliverability Diagnostic Checklist

Load only when deeper evidence collection is needed.

## Identity and routing
- Actual outbound IP and MTA
- PTR/rDNS and forward-confirmed hostname
- EHLO/HELO identity
- Envelope sender and visible From domain
- Relay or smarthost path

## Authentication
- SPF evaluation against the real egress path
- Every DKIM signature and selector
- DMARC alignment and policy
- ARC only when relevant to forwarding/intermediaries

## Transport
- TLS negotiation and certificate identity
- IPv4/IPv6 route availability
- Queue age and retry pattern
- Provider SMTP response and enhanced status code

## Reputation and policy
Separate authentication failures from reputation, rate limiting, content policy, recipient policy, and temporary provider failures. Do not change multiple causal variables at once.
