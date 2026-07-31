# PepEducation Agent Operating Manual

## Mission and scope

PepEducation is an evidence-based scientific education platform. Treat scientific accuracy, reader safety, transparency, accessibility, and source quality as product requirements. Write for education—not diagnosis, prescribing, or individualized medical decision-making.

These instructions apply to the entire repository. Keep every change small, focused, reviewable, and consistent with the existing static site. Never break an existing page while adding or updating content.

## Safety boundaries

- Never provide dosing instructions, treatment protocols, product sourcing, or self-medication guidance.
- Do not turn study methods, pharmacokinetic findings, or regulatory documents into actionable instructions for personal use.
- Do not imply that experimental, investigational, or unapproved molecules are safe or effective.
- Describe risks, limitations, contraindication themes, and regulatory status in neutral educational language. Encourage readers to consult an appropriately qualified healthcare professional when context requires it.
- Do not use disclaimers as a substitute for removing unsafe or prescriptive content.

## Evidence and editorial standards

- Clearly separate **human evidence**, **preclinical evidence** (including animal and in vitro findings), and **theoretical mechanisms**. Never present one category as another.
- State the study design, population or model, major limitations, and uncertainty needed to interpret a claim.
- Use original writing only. Synthesize sources in your own words; do not copy or closely paraphrase source text.
- Prefer primary scientific literature, clinical-trial registries, prescribing information, and official regulatory or public-health sources. Use secondary sources only when they add necessary context, and do not use them to inflate weak claims.
- Attach citations to the claims they support. Verify titles, authors or issuing bodies, publication details, links, and identifiers before completion.
- Use precise, non-promotional language. Avoid hype, promises, unsupported superlatives, and conclusions stronger than the cited evidence.
- Make approval, investigational, discontinued, and jurisdiction-specific statuses explicit and current. Do not treat trial registration as proof of efficacy or regulatory approval.

## Required molecule-page structure

Every molecule page must include all of the following, presented in a logical and accessible order:

1. Hero
2. Overview
3. Mechanism of Action
4. Pharmacology
5. Research Status
6. Clinical Development
7. Evidence Level
8. Safety
9. Timeline
10. FAQ
11. References
12. Related Molecules
13. Internal Links
14. SEO metadata
15. JSON-LD schema

Each section must be substantive and evidence-aligned. If evidence is unavailable, say so plainly rather than filling the gap with speculation. Label theoretical mechanisms as theoretical and distinguish observed outcomes from proposed explanations.

## Site integration and discoverability

- Update `sitemap.xml` whenever a page is added, moved, renamed, or removed.
- Update the homepage and related-molecule links whenever the new or changed content makes those links applicable.
- Check all new and modified internal links, navigation paths, canonical URLs, and referenced assets.
- Provide accurate, page-specific titles, meta descriptions, canonical metadata, social metadata where the site uses it, and valid JSON-LD. Structured data must match visible page content and must not make unsupported medical claims.
- Optimize SEO and performance continuously, but never at the expense of scientific accuracy, reader safety, accessibility, or clarity. Avoid unnecessary dependencies, scripts, layout shifts, and oversized assets.

## Accessibility and responsive design

- Preserve semantic heading order, landmarks, keyboard access, visible focus states, descriptive link text, form labels, text alternatives, sufficient color contrast, and reduced-motion behavior where relevant.
- Preserve responsive behavior at narrow, medium, and wide viewport sizes. Content must remain readable and usable without horizontal scrolling or clipped controls.
- Prefer progressive enhancement and resilient HTML/CSS over JavaScript-dependent presentation.

## Change workflow

1. Read the relevant pages, shared assets, repository instructions, and current Git diff before editing.
2. Make the smallest coherent change that satisfies the task. Follow existing design and content patterns unless the task explicitly requires changing them.
3. When adding or changing a molecule page, verify every required section above and complete all applicable homepage, related-link, sitemap, metadata, and schema updates in the same change.
4. Review scientific claims against primary or official sources and confirm that evidence categories and regulatory status are clearly labeled.
5. Inspect the change at responsive sizes when presentation is affected. Check keyboard and screen-reader semantics as applicable.
6. Validate every added or modified HTML document before completion. Also validate structured data and XML when they change, check internal links, and run all available repository checks.
7. Review the complete diff for accidental edits, unsafe guidance, unsupported claims, copied language, broken links, regressions, secrets, and generated artifacts.
8. Report the validations run and any limitations honestly. Do not claim a check passed unless it was actually run successfully.

## Completion standard

A change is complete only when it is scientifically responsible, original, accessible, responsive, internally connected, SEO-conscious, performant, and validated. Existing pages must continue to work. If a requested change conflicts with these standards, preserve safety and scientific integrity and clearly explain the conflict.
