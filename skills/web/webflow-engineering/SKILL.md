---
name: webflow-engineering
description: Use for Webflow development, CMS architecture, custom code, SEO, performance, third-party integrations, reusable components, and maintainable client handoff.
---
# Webflow Engineering
## Workflow
1. Audit site structure, classes, variables, components, CMS collections, references and custom code before changing layouts.
2. Prefer a consistent class system and reusable components over page-specific selector proliferation.
3. Model CMS data around reusable content entities and avoid duplicating fields across collections without reason.
4. Keep custom JavaScript small, deferred where possible and isolated from designer-generated DOM assumptions.
5. Validate SEO controls, canonicals, redirects, sitemap, structured data and localization behavior.
6. Optimize images, fonts, interactions and third-party embeds based on measured performance.
7. Document Editor-safe content boundaries and any custom-code dependencies for handoff.
## Verification
Responsive behavior, CMS templates, forms, redirects, SEO output, console errors and published-site performance.