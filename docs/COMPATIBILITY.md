# Agent Compatibility

This repository intentionally keeps each skill in a portable `skills/<domain>/<skill>/SKILL.md` form with YAML `name` and `description` metadata.

## Canonical source

`skills/` is the source of truth. Client-specific adapters should reference or generate from this directory rather than maintaining divergent copies.

## Target environments

The skills are designed to be usable with Codex, Claude Code, OpenCode, MiniMax and other coding agents that can load Markdown instructions or skill directories. Exact discovery/installation behavior is client-specific and may evolve.

## MCP integration

Skills may recommend capabilities from `jedavid-web-tools`, but they must remain understandable and useful when those tools are not installed. MCP manifests, server code and executable collectors belong in the tools repository.

## Compatibility rules

- Keep frontmatter minimal and portable: `name` and `description`.
- Use relative repository paths, not machine-specific absolute paths.
- Avoid assuming a proprietary tool name when a generic capability description works.
- Mark optional tool integrations explicitly.
- Do not embed credentials or account identifiers.
- Prefer deterministic shell/API verification that another agent can reproduce.
- Client adapters must not change the semantic content of the canonical skill.

## Validation

For every supported client, validate at minimum: repository import, skill discovery, loading one skill, invoking an optional MCP dependency, and graceful behavior when the MCP dependency is absent.