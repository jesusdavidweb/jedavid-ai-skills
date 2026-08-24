# Deep Skill Package Standard

Deep skills use progressive disclosure: `SKILL.md` remains the routing and operating layer, while specialized knowledge, deterministic helpers, and reusable output structures live beside it.

## Layout

```text
<skill>/
├── SKILL.md
├── references/   # knowledge loaded only when relevant
├── scripts/      # deterministic helpers; safe/read-only by default
└── assets/       # templates, schemas, fixtures, report structures
```

A deep skill does not need every directory. Add a resource only when it materially improves repeatability or correctness.

## SKILL.md responsibilities

`SKILL.md` must remain concise and must:

1. state when the skill should activate;
2. define the core workflow and safety boundaries;
3. route the agent to named references conditionally;
4. explain available scripts and whether they mutate state;
5. define objective completion criteria.

Do not duplicate full reference content inside `SKILL.md`.

## References

References contain domain knowledge that is expensive, volatile, or only relevant to one branch of a workflow. Prefer official primary sources. Each reference should include a `Sources` section when it encodes behavior likely to change.

The parent skill must say when each reference should be loaded. Avoid orphan reference files.

## Scripts

Scripts should make deterministic inspection or transformation repeatable. Defaults:

- read-only unless mutation is the explicit purpose;
- no embedded credentials;
- no hidden network calls;
- clear usage and exit codes;
- portable dependencies where practical;
- output suitable for both humans and agents.

A diagnostic script must not silently remediate production systems.

## Assets

Assets are reusable templates, schemas, fixtures, examples, or report structures. They are not extra prose references.

## Size guidance

Keep `SKILL.md` focused. If specialized details can be loaded conditionally, move them into `references/`. Large scripts or reusable tools that become products in their own right belong in `jedavid-web-tools` rather than this repository.

## Evaluation

Deep skills should have an entry in `evals/`. Evaluation cases test discovery, routing, negative activation, and safety expectations rather than testing model-specific prose.
