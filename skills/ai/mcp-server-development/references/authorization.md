# MCP HTTP Authorization

Authorization is optional overall but the HTTP authorization specification defines an OAuth 2.1-based flow. Protected MCP servers act as resource servers.

Current requirements include Protected Resource Metadata (RFC 9728) for discovery and Resource Indicators (RFC 8707). Clients include the target `resource` in authorization/token requests; servers validate that presented tokens were issued for that MCP resource. Token passthrough to upstream services is unsafe and should not be used as an authorization shortcut.

STDIO servers should obtain credentials from their environment rather than applying the HTTP OAuth flow.

## Source
- https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
