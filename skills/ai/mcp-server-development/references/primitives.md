# MCP Primitives

Current MCP distinguishes three server primitives by control model:

- **Tools** are model-controlled executable functions.
- **Resources** are application-controlled contextual data identified by URIs.
- **Prompts** are user-controlled templates/workflows intended for explicit selection.

Servers declare supported capabilities; clients discover lists and should handle pagination. Do not expose a mutating action as a passive resource merely to avoid tool confirmation semantics.

## Sources
- https://modelcontextprotocol.io/specification/2025-06-18/server/
- https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- https://modelcontextprotocol.io/specification/2025-06-18/server/resources
- https://modelcontextprotocol.io/specification/2025-06-18/server/prompts
