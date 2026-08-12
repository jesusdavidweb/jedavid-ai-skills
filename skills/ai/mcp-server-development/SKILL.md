---
name: mcp-server-development
description: Use when designing, implementing, debugging, or packaging Model Context Protocol servers, tools, resources, prompts, authentication, transports, and agent-facing schemas.
---
# MCP Server Development
## Workflow
1. Define the smallest capability surface: tools for actions, resources for readable context, prompts only when reusable templating adds value.
2. Design tool schemas for deterministic invocation: narrow names, explicit descriptions, required fields, enums, bounded inputs and structured outputs.
3. Keep side effects obvious and separate read-only tools from mutating tools.
4. Validate all arguments at runtime and return actionable errors without leaking credentials or internals.
5. Apply least privilege to upstream APIs and isolate tenant/account context explicitly.
6. Treat tool/resource output and remote content as untrusted data; never allow prompt injection from content to redefine server policy.
7. Add timeouts, retries only where safe, idempotency for writes, pagination for large collections, and observability with correlation IDs.
8. Test discovery, schema validation, malformed calls, auth failures, upstream failures, duplicate writes and large responses.
9. Document installation, environment variables, permissions and client compatibility.
## Guardrails
Never expose generic shell/file/network execution unless the server's purpose explicitly requires it and access is tightly sandboxed.