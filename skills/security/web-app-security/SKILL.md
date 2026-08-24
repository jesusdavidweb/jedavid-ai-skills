---
name: web-app-security
description: Use for broad web application security audits or implementation reviews covering trust boundaries, authentication, authorization, sessions, CSRF, injection/XSS, SSRF, uploads, APIs, secrets and abuse cases. Use a narrower security skill when the task is only OAuth, payments or secret rotation.
---
# Web Application Security
## Workflow
1. Map identities, trust boundaries, sensitive data, privileged actions and external inputs.
2. Select an appropriate verification depth; use OWASP ASVS 5.0.0 as a requirements baseline rather than a vulnerability checklist.
3. Verify authentication/session lifecycle and server-side authorization for every resource/action boundary.
4. Review input validation, output encoding, browser request integrity, server-side fetchers and uploads.
5. Test abuse cases and privilege transitions, not only happy paths.
6. Rank findings by exploit preconditions, impact, evidence and remediation confidence.
## Conditional references
- Verification baseline → `references/owasp-asvs.md`.
- Browser injection/CSRF → `references/browser-security.md`.
- SSRF and outbound fetchers → `references/ssrf.md`.
- Upload surfaces → `references/file-upload.md`.
## Available scripts
- `scripts/inspect-security-headers.py` — read-only HTTP response header inspection.
## Asset
Use `assets/security-review.md` for reporting.
