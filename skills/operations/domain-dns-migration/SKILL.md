---
name: domain-dns-migration
description: Use when moving domains, DNS providers, hosting, email DNS, CDNs, reverse proxies, or application origins with minimal downtime and clear rollback.
---
# Domain and DNS Migration
## Workflow
1. Export and inventory current DNS records, TTLs, proxy states and dependencies before modification.
2. Identify web, email, verification, DKIM, SPF, DMARC, API and subdomain dependencies separately.
3. Lower TTL ahead of planned cutover when timing allows.
4. Prepare and test the new origin/service before changing authoritative traffic.
5. Change the smallest record set needed and preserve rollback values exactly.
6. Verify DNS from multiple resolvers plus HTTP/TLS, mail authentication and application behavior.
7. Keep the old service available until propagation and critical-path validation complete.
## Guardrails
Never rewrite SPF/DKIM/DMARC or delete unknown verification records during a web-only migration without proving they are obsolete.