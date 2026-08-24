---
name: email-deliverability
description: Use when outbound email is rejected, throttled, delayed, spam-foldered or inconsistently accepted and diagnosis must cover sender identity, SPF/DKIM/DMARC, PTR/HELO, TLS, routing, reputation, volume and provider-specific policy. Prefer postfix-billionmail for a local MTA service failure.
---
# Email Deliverability
## Workflow
1. Capture complete SMTP rejection/DSN and authentication headers from a delivered sample when available.
2. Identify the actual egress MTA and public IP from sockets, containers/relay configuration and headers.
3. Verify forward/reverse DNS, HELO/EHLO, TLS, envelope/header domains and alignment.
4. Validate SPF, every DKIM signature/selector, and DMARC policy/alignment.
5. Classify failures as identity/authentication, routing, reputation, rate, content, recipient or provider policy.
6. Compare behavior with current provider requirements before changing infrastructure.
7. Change one causal variable at a time and retest.
## Conditional references
- Authentication and identity → `references/authentication.md`.
- Gmail/Google requirements → `references/gmail.md`.
- Yahoo/AOL requirements → `references/yahoo.md`.
- Outlook/Microsoft requirements → `references/microsoft.md`.
- SMTP classification and reputation → `references/smtp-reputation.md`.
## Available scripts
- `scripts/dns-audit.sh` — read-only DNS/PTR/authentication record collector.
- `scripts/smtp-tls-check.sh` — read-only STARTTLS handshake probe.
## Asset
Use `assets/deliverability-report.md` for final findings.
