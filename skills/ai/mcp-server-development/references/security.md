# MCP Security and Trust

Treat tool descriptions/content from untrusted servers as untrusted input. Preserve clear user control over data sharing and side effects. Apply least privilege to upstream APIs and isolate tenants/accounts explicitly.

Tools can represent arbitrary code execution: make read vs write behavior obvious, validate inputs, bound outputs, apply timeouts, and require appropriate confirmation at the host/client boundary. Do not let retrieved resources or tool output redefine trusted policy.

## Sources
- https://modelcontextprotocol.io/specification/2025-06-18/index
- https://modelcontextprotocol.io/specification/2025-06-18/server/tools
