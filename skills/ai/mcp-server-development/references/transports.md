# MCP Transport and Lifecycle

The 2025-06-18 specification defines two standard transports: **stdio** and **Streamable HTTP**. MCP messages use JSON-RPC 2.0 and UTF-8. Clients and servers negotiate protocol version and capabilities during initialization.

For stdio, stdout is protocol traffic: diagnostic logs belong on stderr. For Streamable HTTP, account for sessions, protocol-version headers, reconnect/resumability behavior and origin/security controls described by the current spec.

## Sources
- https://modelcontextprotocol.io/specification/2025-06-18/basic/transports
- https://modelcontextprotocol.io/specification/2025-06-18/basic/lifecycle
