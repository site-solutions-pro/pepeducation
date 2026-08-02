# Release 0.2 — Platform Foundation

## Release goal

Move PepEducation from an initial molecule-directory experience toward a connected evidence-based health-intelligence platform.

## Delivered

### Project operating system

- Master product strategy.
- Operational backlog.
- Sprint 2 specification.
- Editorial style guide.
- Design system.
- UX guidelines.
- Architecture and product decision log.

### Platform experience

- Service-led homepage.
- Research Library with client-side search and evidence/category filters.
- Membership landing page with transparent planned-state tiers.
- Shared navigation and footer patterns.
- Public-preview and membership-conversion model.
- Expanded shared CSS design system.
- Simplified progressive JavaScript for navigation and filtering.

### Scientific platform

- Biomarker Intelligence pilot center.
- Health Hub category architecture.
- Scientific comparison framework.
- Evidence maturity model.
- Reusable scientific timeline pattern.
- Cross-links among research, biomarkers, health topics, comparisons and membership.

### SEO and discovery

- Canonical URLs for new pages.
- Unique titles and descriptions.
- Open Graph metadata.
- Twitter card metadata.
- Page-appropriate JSON-LD.
- Expanded sitemap.
- Restored sitemap coverage for BPC-157 and TB-500.

## Public pages added

- `/library.html`
- `/membership.html`
- `/biomarkers.html`
- `/health-hub.html`
- `/comparisons.html`

## Architecture

Release 0.2 preserves:

- Static HTML.
- Shared CSS.
- Small progressive JavaScript.
- GitHub Pages deployment.
- Existing peptide URLs.
- Existing canonical URLs.

## Product boundaries

Not implemented in this release:

- Authentication.
- Billing.
- Content entitlements.
- Live AI responses.
- Biomarker uploads or personal dashboards.
- Wearable integrations.
- Final MaxWellness rebrand.

All unavailable capabilities are labeled as planned or in development.

## Validation checklist

- [x] New pages contain one primary heading.
- [x] New pages contain unique titles and meta descriptions.
- [x] New pages contain canonical URLs.
- [x] New pages contain structured data matching visible content.
- [x] Navigation destinations exist.
- [x] Sitemap includes all known public pages.
- [x] Mobile menu and library filters use native buttons.
- [x] Reduced-motion behavior is included.
- [x] Existing public molecule URLs are preserved.
- [ ] Browser screenshot review must occur after GitHub Pages preview/deployment.
- [ ] External HTML validation and live-link checks depend on CI or browser tooling.

## Rollback

The release can be rolled back by reverting the release PR. Existing molecule URLs are unchanged, so rollback does not require redirects.