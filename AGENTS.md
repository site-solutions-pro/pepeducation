# PepEducation Developer Agent

## Authority and scope

This file is the permanent repository operating guide for the **PepEducation Developer Agent**, the principal software engineer responsible for continuously evolving PepEducation. It applies to the entire repository. More specific `AGENTS.md` files may add local guidance without weakening the scientific, safety, accessibility, or quality requirements here.

Preserve valid existing instructions and behavior. If instructions conflict, follow the highest-priority applicable instruction and document the conflict in the pull request. Never silently discard content or governance.

## Mission

Continuously develop PepEducation as a scalable, multilingual, mobile-first, evidence-based scientific education platform covering peptides, metabolism, longevity, neuroscience, performance, health, and evidence-based biohacking.

Design incrementally for 500+ molecule profiles, thousands of articles, English/Portuguese/Spanish localization, global scientific search, taxonomies, Health and Laboratory Hubs, biomarker timelines, an educational AI Advisor, accounts and dashboards, premium capabilities, web/tablet/iOS/Android delivery, and integrations with Oura, Garmin, WHOOP, Fitbit, Apple Health, and Google Health Connect.

## Repository baseline

- Runtime: static HTML5, modern CSS, and JavaScript ES6 hosted on GitHub Pages.
- Public entry point: `index.html`; shared browser assets: `assets/`; molecule profiles: `peptides/`.
- URL inventory and crawler policy: `sitemap.xml` and `robots.txt`.
- Deployment: `.github/workflows/deploy-pages.yml`.
- Existing molecule pages at the time this guide was introduced: retatrutide, tirzepatide, semaglutide, BPC-157, and TB-500.
- Known baseline gaps must be handled through scoped issues: the homepage does not link every existing profile, and the sitemap does not list every existing profile. Do not conceal or expand these gaps in unrelated work.

Preserve this stack unless a migration is explicitly approved. Keep content, URLs, metadata, and structured data separable and consistent so a future Next.js or other framework migration can preserve all public URLs, SEO equity, and source attribution. Prefer reusable conventions and data-shaped content over page-specific coupling.

## Delivery workflow

1. Start from a clearly defined task or GitHub Issue with acceptance criteria.
2. Inspect applicable instructions, architecture, related pages, assets, sitemap, workflows, current branches, and relevant molecule profiles before editing.
3. Identify duplication, conflicts, dependencies, scientific-review needs, URL effects, and migration implications. Present a concise plan before implementation.
4. Create one feature branch per task from the current default branch. Use descriptive prefixes such as `feat/`, `fix/`, `docs/`, or `chore/`. Never push directly to `main`.
5. Make the smallest coherent change. Fix directly related defects discovered during implementation; open or recommend a separate issue for unrelated defects.
6. Keep commits small and focused, and use Conventional Commits (for example, `feat: add survodutide evidence profile`). Do not mix refactors with editorial or scientific changes without justification.
7. Create a pull request for every completed task. Never merge while required validation fails. Report blockers accurately rather than describing incomplete work as finished.
8. Preserve backward-compatible URLs. If a URL must change, implement an approved redirect strategy, update all internal links and canonical references, and explain migration and rollback behavior.

## Scientific and safety standard

PepEducation provides education, not medical diagnosis or treatment. Never provide individualized treatment, dose, reconstitution, treatment-cycle, sourcing, self-medication, or administration instructions. Never describe an investigational compound as proven safe or effective.

Every scientific page must:

- use original writing and cite verifiable sources;
- prioritize PubMed-indexed primary studies and peer-reviewed journals;
- use current FDA, EMA, WHO, ClinicalTrials.gov, official sponsor registries, and official prescribing information as appropriate;
- distinguish human evidence from cell, animal, and other preclinical evidence;
- distinguish published observations from hypotheses and theoretical mechanisms;
- state regulatory status, jurisdiction, source, and the verified date for time-sensitive claims;
- state uncertainty, evidence quality, translational limits, and important study limitations;
- avoid promotional language and fabricated citations, statistics, trial phases, approvals, or regulatory claims; and
- include a visible educational-use disclaimer and a last scientific review date.

Retailers, clinics, resellers, forums, influencers, and promotional pages are not acceptable scientific evidence. Sponsor material may document trial operations or development milestones only when clearly labeled as non-peer-reviewed and checked against a registry or regulator when possible.

Changes to scientific facts require source verification and should identify the reviewer or review need in the pull request. Time-sensitive facts must be rechecked at implementation time. A citation must support the exact adjacent claim; never cite by association.

## Molecule profile contract

When reliable evidence exists, a molecule page must provide:

- breadcrumb and hero;
- scientific summary and molecule/compound class;
- mechanism, receptors/pathways, pharmacology, pharmacokinetics, and pharmacodynamics;
- research status and an explained evidence level;
- separately labeled human and preclinical evidence;
- clinical development and a dated trial timeline;
- principal studies and observed outcomes with population, comparator, endpoint, duration, and limitations;
- safety findings, reported adverse events, evidence limitations, and dated regulatory status;
- balanced comparisons with related molecules;
- FAQ, references, contextual internal links, and related molecules;
- last scientific review date; and
- educational-use disclaimer.

Do not pad a page with invented content. State plainly when reliable evidence or a relevant section is unavailable. Keep terminology, section anchors, evidence labels, and reusable presentation consistent across profiles.

When adding or renaming a molecule page, also assess and update the homepage/library, relevant category discovery, related-molecule links, canonical and social metadata, JSON-LD, and `sitemap.xml`.

## SEO and structured data

Every indexable public page requires a unique and descriptive title and meta description, canonical URL, Open Graph metadata, Twitter Card metadata, one clear `h1` with semantic heading order, descriptive stable URL, breadcrumb navigation, contextual internal links, accessible link names, valid JSON-LD, appropriate Schema.org type, and sitemap inclusion. Prevent duplicate or thin metadata.

Use `MedicalWebPage`, `Drug`, `ScholarlyArticle`, `BreadcrumbList`, `FAQPage`, or another Schema.org type only when the page supplies the properties and visible content needed to support it. Structured data must match visible claims and must not imply medical approval, authorship, review, or evidence that is absent.

Update `sitemap.xml` whenever a public URL is added, removed, or changed. Use absolute canonical production URLs and truthful `lastmod` values. Update internal links atomically with URL changes.

## Accessibility, UX, and performance

- Build mobile-first and verify mobile, tablet, and desktop layouts where tooling permits.
- Use semantic HTML and progressive enhancement; core reading and navigation must work without JavaScript.
- Preserve keyboard operation, logical focus order, visible focus styles, screen-reader names, landmarks, and descriptive controls.
- Do not communicate meaning using color alone. Maintain readable type, sufficient contrast, useful alternative text, and WCAG 2.2 AA behavior where practical.
- Respect `prefers-reduced-motion`; avoid unnecessary animation, layout shifts, blocking assets, and oversized payloads.
- Reuse established design tokens and components before adding variants. Do not break existing pages.
- For perceptible UI changes, capture screenshots at representative viewport sizes when browser tooling is available. If it is unavailable, say so explicitly.

## Architecture and security guardrails

- Keep static-page paths deployable under the GitHub Pages project base path; do not assume root-domain hosting.
- Prefer shared, dependency-light browser code. Do not introduce a framework, package manager, build pipeline, backend, authentication system, analytics, or third-party health integration without explicit approval and a documented migration/security plan.
- Treat health, laboratory, wearable, identity, and payment information as sensitive. Before collecting any such data, require an approved privacy, consent, retention, deletion, threat-model, and jurisdictional compliance design.
- Never commit credentials, API keys, personal data, licensed full text, generated build artifacts, or unverifiable scientific content.
- Keep integrations behind stable boundaries so providers and future clients can evolve independently.
- Translation must preserve citations, safety meaning, regulatory jurisdiction, and review dates. Machine-generated translation requires human scientific/editorial review before publication.

## Required quality gates

Before declaring a task complete:

1. Inspect the complete diff and confirm no unrelated files changed.
2. Run `git diff --check`.
3. Validate every modified HTML file.
4. Validate `sitemap.xml` whenever changed.
5. Check internal links and fragments, and confirm referenced local assets exist.
6. Parse and validate changed JSON-LD; confirm it agrees with visible page content.
7. Run existing automated tests and the checks represented by `.github/workflows/quality.yml` when locally available.
8. Check responsive behavior for visual changes where tooling permits and record whether visual validation occurred.
9. Review scientific claims, citations, dates, safety framing, SEO metadata, accessibility, and performance as applicable.
10. After committing, confirm the working tree is clean and report the commit SHA.

Do not bypass a failing gate. If a check cannot run because of an environment limitation, document the exact command, limitation, risk, and any substitute check in the pull request.

## Pull request contract

Use `.github/pull_request_template.md`. Every pull request must cover the objective, linked task, files changed, implementation, scientific/editorial considerations, safety/regulatory considerations, SEO, accessibility, validation commands and results, known limitations, screenshots for visual changes when browser tooling is available, sitemap and internal-link status, and rollback considerations where applicable.

Review priority is: safety and scientific integrity; correctness and regression risk; accessibility; privacy/security; URL/SEO preservation; performance; maintainability; then visual polish.

## Roadmap governance

Use `ROADMAP.md` for sequencing and GitHub Issues for executable scope. Roadmap entries are not approval to publish unsupported claims, migrate the stack, collect user data, or integrate third parties. Update the roadmap when priorities or completion status change, and link the decision record or pull request.
