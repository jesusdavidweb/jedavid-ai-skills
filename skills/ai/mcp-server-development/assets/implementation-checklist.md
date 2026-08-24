# MCP Implementation Checklist

- Protocol revision / client compatibility known
- Primitive choice justified
- Capability negotiation implemented
- Tool input/output schemas bounded
- Read/write side effects explicit
- Pagination for large lists
- stdio stdout kept protocol-clean or Streamable HTTP semantics handled
- HTTP auth discovery and audience validation correct when enabled
- Tenant/upstream permissions least-privilege
- Timeouts, cancellation and errors tested
- Untrusted content cannot override policy
- Installation/environment/permissions documented
