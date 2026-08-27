# Selective Postfix Transport Maps

Use destination-based transport maps when only known recipient domains require an alternate relay.

Conceptual configuration (adapt map type/path to the active system):

```text
transport_maps = hash:/etc/postfix/transport
```

```text
example-problem.test    smtp:[relay.example.net]:587
.example-problem.test   smtp:[relay.example.net]:587
```

Then build the map with the map backend required by the installation, validate with `postmap -q`, and reload Postfix only after confirming the persistent source of configuration.

## Safety
- Keep default direct delivery unchanged unless a global relay is explicitly desired.
- Do not route arbitrary 5xx recipient/policy failures through a second provider.
- Store SASL credentials outside source control with restrictive permissions.
- Re-check SPF, relay DKIM and DMARC alignment after changing egress infrastructure.
- In managed/containerized stacks, edit the durable configuration source and verify container recreation persistence.
