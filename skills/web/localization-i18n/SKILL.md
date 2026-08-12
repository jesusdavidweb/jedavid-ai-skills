---
name: localization-i18n
description: Use when implementing multilingual web applications, locale routing, translation dictionaries, language negotiation, localized SEO, or region-specific formatting.
---
# Localization and i18n
## Workflow
1. Define supported locale tags and one canonical default.
2. Use deterministic locale resolution; prefer explicit URL/user choice over headers and defaults.
3. Keep UI strings out of business logic and avoid concatenated translatable fragments.
4. Localize dates, numbers, currencies and pluralization with locale-aware APIs.
5. Implement hreflang/canonical behavior consistently for indexable localized pages.
6. Preserve identifiers and machine values independently of translated labels.
7. Test missing keys, fallback, deep links and locale switching.