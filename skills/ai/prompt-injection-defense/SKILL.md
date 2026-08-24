---
name: prompt-injection-defense
description: Use when an AI agent or LLM application consumes untrusted user/retrieved content, uses tools or connected data, and needs defenses against direct/indirect prompt injection, data exfiltration, instruction hijacking or unsafe tool execution.
---
# Prompt Injection Defense

## Workflow
1. Map trusted instructions, untrusted data, model output and tool/action boundaries.
2. Keep retrieved/user content classified as data; never let it redefine trusted policy.
3. Limit tool permissions and enforce authorization outside the model.
4. Validate tool arguments and sensitive outputs at execution boundaries.
5. Add confirmation/policy gates for high-impact ambiguous actions.
6. Test direct, indirect, encoded, persistent and tool-mediated injection.

## Conditional references
- Trust boundaries → `references/trust-boundaries.md`.
- Tool safety → `references/tool-safety.md`.

## Asset
Use `assets/agent-threat-model.md` for a concrete workflow.
