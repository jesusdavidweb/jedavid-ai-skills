---
name: agent-plugin-packaging
description: Use when packaging reusable skills, MCP servers, plugins, or agent extensions for Codex, Claude Code, OpenCode, MiniMax, ChatGPT, or similar AI coding environments.
---
# Agent Plugin Packaging
## Workflow
1. Separate portable core logic from client-specific manifests/adapters.
2. Identify each target client's supported primitives: skills/instructions, MCP, commands, environment variables, permissions and installation layout.
3. Keep one canonical source of truth and generate or symlink adapters where practical instead of duplicating content.
4. Provide deterministic install/uninstall/update steps and a compatibility matrix.
5. Declare required permissions explicitly and use least privilege.
6. Ensure missing optional MCP/tool dependencies degrade gracefully.
7. Validate clean installation in every supported client and confirm skill/MCP discovery counts.
8. Version breaking manifest/schema changes and maintain migration notes.
## Output
Canonical layout, per-client adapters, permission requirements, verification steps and known limitations.