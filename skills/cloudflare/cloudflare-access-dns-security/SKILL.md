---
name: cloudflare-access-dns-security
description: Use for Cloudflare DNS, Zero Trust Access, TLS, WAF, proxying, cache/security configuration, and troubleshooting authentication or invalid-scope/access-policy failures.
---
# Cloudflare Access, DNS and Security
## Workflow
1. Identify zone/account ownership and distinguish account-level from zone-level resources/permissions.
2. Audit DNS records, proxy state, CNAME chains, mail records, origin reachability and SSL mode.
3. For Access, map application hostname/path, identity provider, policies, session settings and service tokens/OAuth scopes.
4. Diagnose `invalid_scope` and auth failures from the actual OAuth/API request and granted permissions; do not broaden scopes blindly.
5. Apply least privilege to API tokens and Access policies.
6. Verify origin is not unintentionally bypassable when Access is intended as the protection boundary.
7. Test authorized, unauthorized and expired-session paths after changes.
## Guardrails
DNS/email changes require explicit record-level rollback. Never expose origin credentials or tokens.