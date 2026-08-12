---
name: production-change
description: Use before modifying a live site, VPS, database, DNS, mail server, reverse proxy, container stack, or other production system.
---
# Safe Production Change
## Workflow
1. Establish current state, blast radius, dependencies and maintenance constraints.
2. Capture config/data backups appropriate to the change and record restoration commands.
3. Define pre-change checks, exact mutation, verification and rollback criteria.
4. Validate syntax/config before reload or restart.
5. Apply the narrowest change possible.
6. Verify service health, logs and user-visible behavior.
7. Roll back immediately if acceptance criteria fail.
## Guardrails
Never destroy the only copy of data/config. Avoid unrelated cleanup during an incident. Preserve permissions and ownership.