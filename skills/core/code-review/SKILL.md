---
name: code-review
description: Use for focused code, diff, pull-request, or implementation review covering correctness, security, regressions, maintainability, performance, and missing tests.
---
# Code Review
## Workflow
1. Understand intended behavior and surrounding contracts.
2. Review changed code in context, not only the diff.
3. Prioritize concrete defects: correctness, data loss, auth/security, race conditions, compatibility, performance.
4. Check validation, error handling, observability and tests.
5. Avoid style-only comments unless they affect maintainability.
6. Rank findings by severity and confidence; include file/line evidence and a minimal fix.
## Output
Findings first, then open questions, then concise change summary. If no material defects are found, say so and note residual testing gaps.