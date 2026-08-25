# WellMax UX Standard

## Experience principles

WellMax should feel scientific, calm, credible, useful, and transparent. It must not resemble a supplement store, clinic funnel, or speculative treatment marketplace.

- Lead with user purpose and evidence context.
- Use semantic HTML before ARIA.
- Keep public discovery useful without fake gates.
- Label planned or incomplete experiences honestly.
- Preserve scientific meaning when simplifying presentation.
- Prefer progressive enhancement and native controls.

This standard supplements `docs/DESIGN_SYSTEM.md` and `docs/UX_GUIDELINES.md`. Those documents remain implementation references; this document defines agent handoff gates.

## Accessibility contract

- Target WCAG 2.2 AA where practical.
- Provide one clear H1 and logical heading order.
- Ensure full keyboard operation and visible focus.
- Use native links for navigation and buttons for actions.
- Provide descriptive labels and useful alt text; decorative images use empty alt text.
- Do not communicate status by color alone.
- Maintain readable typography, contrast, spacing, and approximately 44px touch targets.
- Respect reduced-motion preferences.
- Avoid keyboard traps, decorative ARIA, fake forms, and inert controls.

## Responsive contract

- Start with mobile constraints and verify narrow and wide viewports.
- Prevent horizontal overflow except intentional table/media containers.
- Stack primary actions when space is constrained.
- Keep navigation reachable and closable.
- Preserve readable line length and content hierarchy.
- Ensure tables have meaningful headers and accessible horizontal scrolling when needed.

## Navigation and locale continuity

- Stable primary navigation should lead to meaningful destinations.
- Breadcrumbs and related links preserve content context.
- Localized journeys stay in the same locale when equivalents exist.
- Language switchers preserve content identity where translations exist.
- No active-looking element may lead nowhere.

## Scientific usability

- Identify what the page is and why it matters near the top.
- Make evidence maturity visible in text, not color alone.
- Separate evidence classes, regulation, safety, and interpretation.
- Present limitations near the relevant claim.
- Avoid walls of disclaimer text and avoid hiding important safety context.
- Mark `SHELL`, incomplete, planned, or review-required states honestly.

## Performance and resilience

- Prefer shared CSS, small deferred JavaScript, and native platform features.
- Avoid unnecessary dependencies, oversized assets, and render-blocking additions.
- Navigation and primary content remain usable without JavaScript where practical.
- Cacheable shared assets and static deployability must be preserved.

## UX handoff evidence

For visible or interactive changes report:

- Affected journeys and viewports.
- Keyboard/focus results.
- Semantic and label review.
- Narrow/wide responsive results.
- Reduced-motion/no-JavaScript considerations.
- Screenshots when browser tooling is available.
- Explicit unperformed visual validation.

Material redesign, brand, or navigation-architecture changes require human approval.
