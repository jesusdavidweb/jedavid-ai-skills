---
name: web-app-security
description: Use for practical web application security audits and implementation review covering auth, authorization, sessions, CSRF, injection, SSRF, XSS, uploads, secrets, APIs, dependencies and abuse cases.
---
# Web Application Security
## Workflow
1. Map trust boundaries, identities, privileged operations, sensitive data and external inputs.
2. Review authentication/session lifecycle and authorization at every server-side resource/action boundary.
3. Validate input by allowlisted schema; parameterize database access; contextually escape output.
4. Protect state-changing browser requests against CSRF where cookie auth is used.
5. Restrict SSRF-capable fetchers by scheme/host/IP policy; treat redirects and DNS rebinding carefully.
6. Validate uploads by content/size/storage/execution policy.
7. Review secrets, logs, error responses and dependency risk.
8. Test abuse cases and privilege transitions, not only happy paths.
## Output
Threat surface, evidence-backed findings by severity, exploit preconditions, remediation and verification.