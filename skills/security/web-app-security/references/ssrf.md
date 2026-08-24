# SSRF Review

Treat any server-side URL fetcher as a trust boundary. Prefer explicit allowlists for scheme/host/port where the business case permits. Resolve and validate addresses carefully; consider redirects, alternate IP forms, IPv6, link-local/private ranges, DNS rebinding and cloud metadata endpoints.

Do not rely solely on string prefix checks. Network egress controls provide useful defense-in-depth.

## Source
- https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html
