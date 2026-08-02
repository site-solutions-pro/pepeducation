# Platform UX Guidelines

## Primary journeys

### Discover

Home → service or category → library/profile → related content.

### Compare

Home or library → comparisons → profiles → evidence and regulatory context.

### Understand biomarkers

Home → Biomarker Intelligence → marker category → future complete profile.

### Explore membership

Public content → membership CTA → transparent planned-tier page.

## Navigation

Primary navigation should remain stable:

- Research Library.
- Biomarkers.
- Health Hub.
- Comparisons.
- Membership.

Do not add a primary link until it leads to a meaningful destination. Planned products may appear as cards or sections with explicit status labels.

## Page hierarchy

Each landing page should contain:

1. Clear eyebrow and primary heading.
2. One-paragraph value explanation.
3. Primary discovery or action path.
4. Structured content grid or framework.
5. Cross-links to related platform areas.
6. Membership CTA where relevant.
7. Consistent footer and educational boundary.

## Search and filtering

- Search must work without submitting a fake form.
- Results update with an accessible count.
- Filters use real buttons and `aria-pressed`.
- Hidden cards are removed from visual flow.
- Filtering is enhancement; all content remains available as links without JavaScript.

## Planned states

Use one of these labels:

- Planned.
- In development.
- Full profile planned.
- Future roadmap.
- Not yet available.

Never use an active-looking control that does nothing.

## Membership conversion

Membership CTAs should explain added value rather than create artificial fear of missing out. Public discovery remains useful and indexable.

## Scientific usability

- Place the strongest evidence signal near the top.
- Explain evidence classes visibly.
- Keep regulatory status separate from scientific interpretation.
- Link comparison claims to detailed profiles.
- Avoid dense walls of disclaimer text.

## Accessibility

- One clear H1 per page.
- Logical heading order.
- Visible keyboard focus.
- Native links and buttons.
- Touch-friendly controls.
- Text alternatives for informative imagery.
- Reduced-motion support.
- Tables in horizontally scrollable containers.

## Mobile

- Primary actions stack vertically when space is constrained.
- Cards collapse to one column.
- Menu opens below the header and closes after navigation.
- Avoid tiny labels or side-by-side controls that compromise touch accuracy.

## Performance

- Use no framework or dependency for behavior already covered by native HTML, CSS and small JavaScript.
- Avoid background video and oversized hero imagery.
- Keep shared CSS and JavaScript cacheable.
- Prefer text and structured UI over decorative assets.