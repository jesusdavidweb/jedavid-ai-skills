# Secret Lifecycle

A managed secret needs secure generation, access-controlled storage, narrow distribution, bounded lifetime where practical, rotation, revocation and evidence that replaced credentials no longer work. For credible leakage, rotate/revoke before spending time cleaning Git history or logs, then remove exposure paths and review access/audit evidence. Prefer short-lived identity/token mechanisms when supported.

## Sources
- https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
