---
name: web-quality-audit
description: Use for comprehensive website audits spanning performance, Core Web Vitals, frontend quality, accessibility, responsive behavior, technical SEO, and implementation defects.
---
# Web Quality Audit
## Workflow
1. Establish representative URLs, devices, auth state and production/staging scope.
2. Collect objective performance evidence: CWV/Lighthouse or equivalent, network waterfall, asset weight, caching, render blocking, fonts/images, JS execution and backend latency.
3. Inspect semantic HTML, keyboard/focus, labels, contrast, reduced motion and major WCAG failures.
4. Inspect responsive layouts, interactions, console errors and cross-browser-sensitive code.
5. Inspect crawlability, canonicals, robots, sitemap, status codes, titles/descriptions, headings, structured data and internal links.
6. Correlate symptoms with code/server causes before recommending changes.
7. Rank by user/business impact and implementation effort.
## Output
Evidence table plus Critical/High/Medium/Low findings and prioritized remediation.