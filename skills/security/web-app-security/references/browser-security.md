# Browser Security: XSS and CSRF

For XSS, prioritize context-appropriate output encoding, safe templating, avoidance of dangerous DOM sinks and a restrictive CSP as defense-in-depth. Do not replace output encoding with CSP.

For cookie-authenticated state changes, ensure CSRF defenses match the architecture: framework anti-CSRF tokens, SameSite strategy and origin/request validation where applicable. APIs using non-cookie bearer credentials have a different CSRF threat model.

## Sources
- https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
