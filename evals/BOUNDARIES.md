# Skill Activation Boundaries

Evals exist primarily to prevent broad descriptions from stealing work from a more specific neighboring skill.

Key boundaries:

| Broad / related | Prefer specific skill when... |
| --- | --- |
| `wordpress-deep-audit` | `wordpress-incident-debugging` for an active failure; `wordpress-security-performance` for targeted hardening/performance work |
| `web-quality-audit` | `seo-llm-discoverability` when crawl/index/search is the primary objective |
| `api-webhook-integration` | `payment-flow-security` for money/order transitions; `event-driven-data` for multi-system delivery/reconciliation architecture |
| `web-app-security` | `oauth-oidc-auth-integration`, `secret-management`, or `prompt-injection-defense` when those are the primary problem |
| `docker-dokploy` | `vps-nginx-cloudpanel` for host-native Nginx/PHP/CloudPanel problems |
| `bug-investigation` | a domain incident skill when the failing system is known and that skill has domain-specific triage |
| `testing-strategy` | `code-review` when the task is reviewing an implementation rather than planning/adding test coverage |

Each JSON fixture must contain at least one positive and one negative activation case. `scripts/validate-evals.ts` also verifies all deep skills have fixtures and all `alsoConsider` references point to real skills.
