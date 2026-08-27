---
name: postfix-billionmail
description: "Use for Postfix and BillionMail operations: SMTP routing, queues, containerized mail stacks, TLS, SASL, DKIM/Rspamd interaction, logs, transport maps and host-vs-container diagnosis. Prefer smtp-production-debugging for destination-specific production reachability incidents."
---
# Postfix and BillionMail

## Workflow
1. Determine the active SMTP stack from listening sockets and container mappings before reading configuration. Do not assume a dormant host Postfix package is authoritative.
2. Inspect the active container/runtime and mounts to discover effective configuration, persistent configuration, spool and mail-log paths. Treat observed mounts as evidence; do not hard-code paths from another installation.
3. Capture `postconf -n` or the effective equivalent from the active instance before proposing changes.
4. Trace messages by queue ID through Postfix and filtering/signing components. Separate unique queue IDs from retry attempts.
5. Inspect current queue state and oldest deferred items before flush/requeue/delete operations.
6. Inspect `relayhost`, `transport_maps`, sender-dependent transports, `myhostname`, `mydestination`, networks, SASL, TLS, DNS dependencies and `inet_protocols` where relevant.
7. Inspect Rspamd/DKIM signing configuration for selector/domain duplication and verify corresponding DNS.
8. For containerized BillionMail, inspect persistent host mounts before relying on host `journalctl`; authoritative mail logs may live in a mounted container log directory instead of the host journal.
9. Make durable changes in BillionMail's persistent/generated configuration source, not only inside the running container. Verify behavior after reload and, when safe, after container recreation.
10. For destination-specific timeout/refusal clusters, hand off classification and control testing to `smtp-production-debugging`. For deterministic alternate routing, use `postfix-selective-relay`.

## Diagnostic principles
- A deferred queue entry is not automatically a new failed message; retries can generate many log lines for one queue ID.
- A TCP timeout before SMTP banner is technically different from an SMTP `4xx`/`5xx` response.
- Successful delivery to one provider does not prove reachability to every destination.
- A transient failure against one MX/IP can still end in successful delivery through another MX; inspect final queue outcome.
- If IPv6 is enabled for outbound SMTP, verify equivalent PTR, SPF, identity and deliverability assumptions before treating IPv4 evidence as complete.

## Guardrails
Never purge queues globally during diagnosis. Back up persistent config before edits and verify container recreation persistence. Never expose SMTP credentials, message bodies, recipient PII or private customer incident data in reusable reports.
