---
name: typescript-web-stack
description: Use for TypeScript web engineering with Astro, Svelte/SvelteKit, Next.js, Node.js, API-driven architecture, component design, performance, and production-quality implementation.
---
# TypeScript Web Stack
## Workflow
1. Follow the repository's package manager, framework version, rendering model and conventions.
2. Keep domain logic framework-light and typed at boundaries.
3. Validate runtime input; TypeScript types alone are not validation.
4. Prefer server rendering/static generation when it reduces client JavaScript and fits product requirements.
5. Keep client components/islands narrowly scoped to interactivity.
6. Avoid unnecessary dependencies and large client bundles.
7. Design APIs with explicit schemas, errors and observability.
8. Run format/lint/typecheck/tests/build defined by the repository.
## Framework notes
Astro: minimize hydration. SvelteKit: respect server/client module boundaries. Next.js: verify current caching/rendering semantics for the installed version rather than relying on stale assumptions.