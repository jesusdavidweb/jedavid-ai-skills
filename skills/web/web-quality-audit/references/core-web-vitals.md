# Core Web Vitals

Current good thresholds at the 75th percentile: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1. Poor thresholds: LCP > 4s, INP > 500ms, CLS > 0.25. Prefer field data (CrUX/RUM) for actual user experience; Lighthouse/devtools are diagnostic. Diagnose LCP through TTFB/resource discovery/render blocking, INP through main-thread/event work, and CLS through unsized/late layout changes.

## Sources
- https://web.dev/articles/vitals
