---
name: email-deliverability
description: Use when email is rejected, spam-foldered, delayed, missing, or inconsistently accepted, including SPF/DKIM/DMARC, rDNS, HELO, reputation, content, queues and provider-specific SMTP policy failures.
---
# Email Deliverability Audit
## Workflow
1. Capture the complete SMTP rejection/DSN and message authentication headers from a delivered sample when available.
2. Identify the actual outbound MTA/IP; do not assume host Postfix is active when a container or relay owns SMTP ports.
3. Validate PTR/rDNS, forward DNS, HELO/EHLO, TLS and envelope/header domains.
4. Evaluate SPF against the real egress path; remove obsolete senders only after proving they are unused.
5. Validate every DKIM signature and published selector; multiple signatures are acceptable only when intentionally valid.
6. Validate DMARC alignment/policy/reporting.
7. Inspect IP/domain reputation and sending patterns without treating reputation tools as definitive.
8. Classify rejection: authentication, reputation, recipient, content, rate, policy, routing or temporary failure.
9. Change one causal factor at a time and retest.
## Supporting reference
Use `references/diagnostic-checklist.md` when a full identity, routing, transport and policy review is required.
## Output
Evidence, likely root cause, DNS/MTA changes, verification and remaining provider-specific risk.
