---
name: ai-agent-handoff
description: Use when transferring a complex task between Codex, Claude Code, OpenCode, MiniMax, or another coding agent without losing constraints, evidence, decisions, or progress.
---
# AI Agent Handoff
## Workflow
Capture: objective; repository/environment; current state; verified evidence; decisions already made; constraints; files/components involved; attempted approaches and results; exact remaining tasks; acceptance criteria; validation commands; safety/rollback requirements.
## Rules
Separate facts from hypotheses. Include exact errors and relevant paths, not conversational history. Never include credentials. Make the handoff executable without requiring the next agent to rediscover known facts, while instructing it to verify state before mutation.