Review the code I just wrote or modified. Check for:

1. TypeScript issues — any `any` types, missing types, type assertions that could be avoided
2. Rule violations — anything that breaks the conventions in CLAUDE.md
3. Performance regressions — new animation/GPU work that isn't gated behind IntersectionObserver
4. Hardcoded copy — text that should be in `app/lib/site.ts` instead
5. Accessibility — does the reduced-motion / no-WebGL fallback still work?
6. Ref vs state — is anything using useState that should be a ref?

Return a bullet list ordered by severity (critical → minor). For each issue, say exactly what file and line to fix and how.
