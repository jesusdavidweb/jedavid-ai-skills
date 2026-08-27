---
name: email-deliverability
description: Use when outbound email is rejected, throttled, delayed, spam-foldered or inconsistently accepted and diagnosis must cover sender identity, SPF/DKIM/DMARC, PTR/HELO, TLS, reputation, volume and provider-specific policy. Prefer smtp-production-debugging for pre-banner TCP timeouts, destination-specific reachability and retry clusters; prefer postfix-billionmail for local MTA/runtime failures.
---
# Email Deliverability

## Workflow
1. Capture the complete SMTP rejection/DSN and authentication headers from a delivered sample when available.
2. Identify the actual egress MTA/relay and public IP from sockets, containers, relay configuration and headers.
3. Classify the failure layer before changing authentication: a TCP timeout before SMTP banner is a reachability incident, while an SMTP policy response proves a session was established far enough to receive that response.
4. Verify forward/reverse DNS, HELO/EHLO, TLS, envelope/header domains and alignment.
5. Validate SPF, every DKIM signature/selector and DMARC policy/alignment. Never create multiple SPF policies for one hostname; merge authorized mechanisms into one valid policy.
6. Classify SMTP-level failures as authentication/identity, reputation, rate/throttling, content, recipient or provider policy using the exact response text.
7. Compare behavior with current provider requirements before changing infrastructure.
8. Change one causal variable at a time and retest. Treat relay acceptance (`250`) separately from final inbox placement.

## Routing boundaries
- DNS/TCP timeout or refusal before banner → `smtp-production-debugging`.
- Persistent failures clustered by destination MX/IP → `smtp-production-debugging`.
- Known problematic destination requiring an alternate Postfix transport → `postfix-selective-relay`.
- Local/container Postfix service, queue or config issue → `postfix-billionmail`.
- SPF/DKIM/DMARC, reputation, spam placement, provider bulk-sender policy → continue here.

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
Use `assets/deliverability-report.md` for final findings. Keep reusable reports free of recipient PII, credentials, private domains/IPs and customer incident transcripts unless explicitly required for a private deliverable.
