---
name: python-automation
description: Use for Python automation, data processing, maintenance scripts, CLI utilities, API clients, and operational tooling.
---
# Python Automation
## Workflow
1. Define inputs, outputs, failure modes and whether the operation must be idempotent.
2. Prefer standard library and small well-maintained dependencies.
3. Use type hints for public boundaries and structured configuration from environment/files.
4. Add dry-run for destructive/bulk operations.
5. Use timeouts, retries and explicit status handling for network calls.
6. Stream large data instead of loading it blindly into memory.
7. Log actionable context without secrets.
8. Add focused tests for parsing, transformation and dangerous edge cases.