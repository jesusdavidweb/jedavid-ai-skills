---
name: postfix-billionmail
description: "Use for Postfix and BillionMail operations: SMTP routing, queues, containerized mail stacks, TLS, SASL, DKIM/Rspamd interaction, logs, transport maps and host-vs-container diagnosis."
---
# Postfix and BillionMail
## Workflow
1. Determine the active SMTP stack from listening sockets/container mappings before reading configuration.
2. Capture `postconf -n` or effective equivalent from the active instance and identify config/log paths.
3. Trace a message by queue ID through Postfix and filtering/signing components.
4. Inspect relayhost/transports, myhostname/mydestination, networks, SASL, TLS and DNS dependencies.
5. Inspect Rspamd signing configuration for selector/domain duplication and verify corresponding DNS.
6. Use queue inspection before flush/requeue/delete operations.
7. For BillionMail, treat container config and persistent mounted config as authoritative over dormant host packages.
## Guardrails
Never purge queues globally during diagnosis. Back up persistent config before edits and verify container recreation persistence.
