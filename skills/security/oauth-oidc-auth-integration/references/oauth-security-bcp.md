# OAuth Security Baseline

RFC 9700 is the OAuth 2.0 Security Best Current Practice. Public clients MUST use PKCE; confidential clients are also recommended to use it. Use S256, exact redirect URI matching, authorization-code flow rather than implicit token issuance, transaction-specific state/PKCE/nonce, and issuer-based defenses for multi-authorization-server mix-up. Protect refresh tokens with rotation or sender constraining where appropriate.

## Sources
- https://datatracker.ietf.org/doc/rfc9700/
- https://cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html
