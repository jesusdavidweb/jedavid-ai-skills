---
name: postfix-selective-relay
description: Use when Postfix should deliver normally by direct SMTP but route specific proven-problematic recipient domains through an authenticated SMTP relay. Covers transport maps, relay authentication, persistence, sender authentication impact and safe verification. Do not use as a generic retry-after-any-error mechanism.
---
# Postfix Selective Relay

## Objective
Keep direct SMTP delivery as the default while routing a narrowly defined set of recipient destinations through an alternate authenticated transport.

## Workflow
1. Require evidence for each destination being routed: persistent destination-specific failure, repeated retries, or an explicit business routing requirement.
2. Inspect the effective Postfix configuration and its persistent source before proposing edits. In containerized/control-panel stacks, identify generated vs durable configuration.
3. Inspect existing `transport_maps`, `relayhost`, SASL, TLS and sender-dependent routing so the change composes with current behavior.
4. Design a destination transport map where only explicitly listed domains use the relay. Leave the default transport unchanged.
5. Configure relay authentication using the provider's current documented submission host/port and secret mechanism. Never put credentials in Git, shell examples, logs or skill assets.
6. Rebuild/validate map databases as required by the active Postfix map type and verify effective configuration before reload/restart.
7. Send controlled tests to a routed destination and a direct-delivery control destination.
8. Confirm from Postfix logs that the intended relay handled the routed message and that the control remained direct.
9. Treat relay SMTP `250` as successful handoff to the relay, not proof of final recipient delivery. Verify downstream delivery separately when possible.
10. Monitor direct vs relay outcomes and expand the destination map only when evidence supports it.

## Destination routing vs fallback
Prefer deterministic destination-based routing for known failures.

Do not treat a generic fallback relay as equivalent to "try direct, then relay after any error." Failure semantics differ:
- TCP/DNS reachability failures may justify alternate routing after careful design.
- `4xx` responses are temporary SMTP policy and may have provider-specific retry semantics.
- `5xx` invalid-recipient or policy failures should not automatically be resent through another provider.
- indiscriminate fallback can create unnecessary relay traffic, policy bypass attempts, loops or duplicate-delivery risk.

## Sender authentication checks
Changing the outbound transport changes delivery infrastructure. Re-check:
- SPF authorization without creating multiple SPF records;
- relay DKIM configuration/selectors;
- DMARC alignment;
- accepted sender identities;
- envelope/header domain behavior;
- TLS and authenticated submission requirements.

## Conditional references
- Destination transport-map design and persistence → `references/transport-maps.md`.

## Available scripts
- `scripts/validate-transport-map.sh` — read-only map inspection and optional `postmap -q` lookup.

## Guardrails
- Back up persistent Postfix configuration before edits.
- Never globally set a relayhost when the requirement is selective routing unless the user explicitly chooses that architecture.
- Never route a permanent recipient failure through another relay merely to evade the rejection.
- Never expose SMTP credentials or customer recipient/domain data.
- Verify persistence across container recreation or control-panel regeneration.

## Related skills
- `smtp-production-debugging` — prove and classify the incident first.
- `postfix-billionmail` — runtime/configuration mechanics for Postfix and BillionMail.
- `email-deliverability` — SPF/DKIM/DMARC and reputation implications of the alternate route.
