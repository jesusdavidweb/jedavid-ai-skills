---
name: web-quality-audit
description: Use for broad website quality audits covering Core Web Vitals, frontend/network performance, responsive behavior, accessibility, browser errors and implementation quality. Prefer seo-llm-discoverability when indexing/search is the primary goal.
---
# Web Quality Audit

## Workflow
1. Define representative URLs, devices, auth state and scope.
2. Separate field performance data from lab diagnostics.
3. Measure network/render/JS/images/fonts/backend contribution to LCP, INP and CLS.
4. Inspect semantic HTML, keyboard/focus, names/labels, contrast and motion.
5. Test responsive layouts, console errors and core interactions.
6. Correlate symptoms to implementation causes and rank by user impact.

## Conditional references
- Core Web Vitals → `references/core-web-vitals.md`.
- Accessibility/frontend quality → `references/accessibility-performance.md`.

## Asset
Use `assets/audit-report.md` for measured findings.
