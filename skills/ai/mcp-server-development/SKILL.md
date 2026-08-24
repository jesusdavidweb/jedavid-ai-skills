---
name: mcp-server-development
description: Use when designing, implementing, debugging or packaging Model Context Protocol servers including tools, resources, prompts, lifecycle/capabilities, stdio or Streamable HTTP transports, authorization and agent-facing schemas.
---
# MCP Server Development
## Workflow
1. Confirm target protocol revision/client compatibility before depending on optional features.
2. Choose primitives deliberately: tools for model-invoked actions, resources for application-managed context, prompts for user-selected templates.
3. Choose stdio for local process integration or Streamable HTTP for remote HTTP transport unless a client imposes different constraints.
4. Design narrow schemas, validate arguments at runtime, paginate large collections and make write semantics explicit/idempotent.
5. For HTTP authorization, follow MCP authorization discovery/resource-binding requirements and validate token audience; never pass upstream tokens through blindly.
6. Treat server/tool/resource content as untrusted and preserve user consent around actions/data access.
7. Test capability negotiation, malformed requests, auth failure, cancellation, pagination and side-effect retries.
## Conditional references
- Primitive choice and control model → `references/primitives.md`.
- Transport/lifecycle → `references/transports.md`.
- HTTP authorization → `references/authorization.md`.
- Security/trust boundaries → `references/security.md`.
## Asset
Use `assets/implementation-checklist.md` during review/handoff.
