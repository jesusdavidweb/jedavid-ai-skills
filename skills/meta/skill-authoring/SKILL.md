---
name: skill-authoring
description: Use when creating, reviewing, splitting, merging, or improving skills in this repository so they stay portable, discoverable, concise, safe, and operationally useful.
---
# Skill Authoring
## Design rules
1. A skill should represent one reusable operational capability with a clear trigger.
2. Put trigger quality in `description`; agents often decide whether to load a skill from metadata alone.
3. Prefer workflow and decision logic over encyclopedic reference material.
4. Include guardrails when actions can affect production, security, money, data, DNS, email, or external systems.
5. Define verification that proves success rather than ending at implementation.
6. Split a skill when two parts have materially different triggers, risks or workflows; merge overlapping skills when agents would consistently need both together.
7. Keep vendor-specific details only when they materially change procedure.
8. Avoid volatile limits/version claims unless the skill explicitly instructs agents to verify current official documentation.
9. Keep all content in English and make it agent-agnostic.
## Review checklist
Trigger is specific; workflow is ordered; mutations follow discovery; rollback exists when needed; verification is objective; no secrets/examples with credentials; no duplicated capability without routing guidance.