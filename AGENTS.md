# PepEducation Agent Operating Manual

## Mission and scope

PepEducation is an evidence-based scientific education platform. Keep every contribution accurate, neutral, accessible, and educational. This file applies to the entire repository and is the permanent operating manual for all AI coding agents working here.

## Non-negotiable safety boundaries

- Never provide dosing instructions, treatment protocols, sourcing advice, or self-medication guidance.
- Do not present educational content as medical advice or imply that an experimental molecule is safe or effective for personal use.
- Clearly distinguish among:
  - **Human evidence:** findings from human observational studies or clinical trials, with the population, study phase, endpoints, and important limitations identified.
  - **Preclinical evidence:** findings from animal, cell, or other laboratory models that cannot be assumed to apply to humans.
  - **Theoretical mechanisms:** hypotheses or mechanistic interpretations that have not established clinical outcomes.
- State uncertainty, limitations, regulatory status, and meaningful safety signals plainly. Do not overstate findings or use promotional language.
- Encourage consultation with a qualified health professional when medical context is necessary, without turning content into individualized guidance.

## Editorial and evidence standards

- Use original writing only. Do not copy, closely paraphrase, or assemble text from source material.
- Prefer primary scientific references, such as peer-reviewed original research and clinical trial records, and official regulatory sources. Use high-quality reviews only to provide context or locate primary evidence.
- Verify that each citation supports the nearby claim. Preserve authors, title, journal or issuing body, year, and a stable DOI, PubMed, trial-registry, or official-source URL where available.
- Separate established facts from interpretation and label evidence by study type. Avoid extrapolating preclinical results into human benefit.
- Use precise, plain language. Define specialist terms, expand abbreviations on first use, and distinguish surrogate endpoints from clinical outcomes.
- Check publication dates, trial status, approval status, warnings, and other time-sensitive claims against current primary or official sources before publishing.

## Required molecule-page structure

Every molecule page must include all of the following, presented with clear headings or equivalent page components:

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
15. JSON-LD Schema

The evidence, safety, clinical-development, and regulatory statements must follow the safety and editorial standards above. JSON-LD must match visible page content and must not make unsupported medical claims.

## Site integration

- Update `sitemap.xml` whenever a page is added, using the canonical public URL and accurate metadata.
- Update the homepage and related-molecule links when applicable so new content is discoverable and the internal-link graph remains coherent.
- Check navigation, canonical URLs, relative asset paths, internal links, SEO metadata, structured data, and social metadata after page changes.
- Optimize SEO and performance continuously, but never at the expense of accuracy, accessibility, privacy, or usability. Prefer semantic HTML and lightweight native features over unnecessary dependencies.

## Accessibility and responsive design

- Preserve or improve keyboard access, visible focus, semantic heading order, landmarks, form labels, alternative text, and sufficient color contrast.
- Do not rely on color alone to communicate meaning. Respect reduced-motion preferences where animation is used.
- Test changed interfaces at narrow mobile and wide desktop widths. Prevent overflow, clipped content, unusably small controls, and layout shifts.

## Change discipline

- Keep changes small, focused, and consistent with the existing design and code conventions.
- Never break existing pages. Inspect affected routes and shared assets before editing, and test relevant existing behavior afterward.
- Do not mix unrelated cleanup or broad refactors into a focused content or feature change.
- Do not commit generated artifacts, temporary files, dependencies, or credentials unless the project explicitly requires them.
- Do not run `git push` manually. Prepare a local commit and use the Codex interface workflow to create the pull request.

## Required completion checks

Before considering work complete:

1. Review the complete diff and confirm every changed line is in scope.
2. Validate every changed HTML file with an available standards-based HTML validator and resolve actionable errors.
3. Validate changed JSON-LD as parseable JSON and confirm it agrees with visible content.
4. Validate `sitemap.xml` and any other changed XML.
5. Check changed internal links and local asset references.
6. Run the repository's available tests, linters, and build checks relevant to the change.
7. For perceptible web changes, inspect the rendered result at mobile and desktop sizes and capture a screenshot when required by the task environment.
8. Report the exact validation commands and their results, including any environment limitations.
