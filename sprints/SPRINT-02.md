# Sprint 2 — Platform Experience

## Status

In progress.

## Objective

Transform the public experience from a peptide-focused collection of pages into a premium evidence-based health-intelligence platform, while preserving all current public URLs and the static GitHub Pages architecture.

## Scope

### 1. Homepage v2

Rebuild the homepage around platform value and services.

Required sections:

- Hero with platform-level positioning.
- Research Library.
- AI Health Advisor preview.
- Biomarker Intelligence.
- Premium Reports.
- Clinical Research Tracker.
- Personalized Learning.
- Research categories.
- How the platform works.
- Membership conversion section.
- Updated footer.

The homepage must not lead with individual peptide cards. Scientific content may appear as secondary examples or featured insights.

### 2. Research Library

Create a dedicated library landing page with:

- Search.
- Category filters.
- Evidence-oriented content cards.
- Clear distinction between available and future categories.
- Discovery links to every existing molecule profile.
- Membership CTA.

Initial categories:

- Peptides and research molecules.
- Biomarkers.
- Longevity.
- Metabolism.
- Performance and recovery.
- Neuroscience.
- Nutrition.
- Supplements.
- Hormones.
- Skin and hair.

### 3. Membership

Create a membership landing page that presents future access tiers without implementing payments or authentication.

Initial tiers:

- Explorer.
- Professional.
- Enterprise.

The page must not claim that unavailable features are already operational. Clearly label planned capabilities.

### 4. Navigation and footer

Prepare navigation for:

- Home.
- Research Library.
- Biomarkers.
- Health Hub.
- AI Advisor.
- Membership.
- About.

Unavailable destinations should use honest planned-state patterns rather than broken links or fake controls.

Footer groups:

- Platform.
- Research.
- Resources.
- Membership.
- Legal.

### 5. Public preview and conversion model

Existing scientific pages remain fully accessible during this sprint. Add a future-ready preview and conversion pattern without hiding or deleting current content.

The pattern should support future transitions from:

- Public overview.
- Evidence snapshot.
- Scientific perspective.
- Full premium analysis.

Current implementation must not create fake authentication or access control.

### 6. Editorial refresh

Review existing molecule pages for unnecessarily defensive or discouraging language.

Preserve evidence boundaries while replacing legalistic phrasing with balanced scientific language, following `docs/EDITORIAL_STYLE.md`.

Do not weaken:

- Regulatory status.
- Study limitations.
- Safety reporting.
- Evidence classification.
- Educational boundaries.

### 7. Shared patterns

Standardize or introduce reusable patterns using the existing static architecture:

- Header and navigation.
- Hero.
- Service card.
- Category card.
- Evidence badge.
- Scientific Perspective.
- Timeline.
- Membership CTA.
- FAQ.
- References.
- Footer.

Avoid premature framework migration.

### 8. SEO and discovery

- Add unique metadata for all new pages.
- Add canonical URLs.
- Add Open Graph and Twitter metadata.
- Add appropriate JSON-LD.
- Update `sitemap.xml`.
- Update internal links.
- Ensure no orphan pages.
- Preserve all existing canonical URLs.

### 9. Accessibility and performance

- Mobile-first layout.
- Semantic HTML.
- Keyboard-accessible navigation and controls.
- Visible focus states.
- Correct button types.
- Reduced-motion support.
- Readable contrast and touch targets.
- No unnecessary JavaScript dependency.
- No oversized or decorative media that harms performance.

## Deliverables

- Updated `index.html`.
- New Research Library page.
- New Membership page.
- Shared CSS and JavaScript updates where necessary.
- Updated scientific pages for editorial tone and consistent navigation where required.
- Updated sitemap and internal discovery.
- Validation evidence in the PR.

## Out of scope

- Final MaxWellness public rename.
- Authentication.
- Subscription billing.
- Real premium content enforcement.
- Production AI integration.
- Wearable integrations.
- Framework migration.

## Definition of done

- [ ] Homepage communicates platform value within the first viewport.
- [ ] Homepage service highlights are not centered on individual peptides.
- [ ] Research Library is functional and exposes every existing molecule profile.
- [ ] Membership page clearly differentiates present and planned capabilities.
- [ ] Navigation and footer are consistent and accessible.
- [ ] Existing public URLs remain valid.
- [ ] Editorial language is balanced, accurate, and engaging.
- [ ] New pages have complete SEO and structured data.
- [ ] Sitemap and internal links are updated.
- [ ] HTML, JSON-LD, links, fragments, assets, and sitemap validate.
- [ ] Mobile and desktop behavior are reviewed.
- [ ] No unrelated changes are included.

## PR strategy

Use one implementation branch for Sprint 2. Small focused commits are encouraged. Open one PR when the sprint deliverables are complete and validated.