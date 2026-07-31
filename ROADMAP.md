# PepEducation Roadmap

## Purpose and decision rules

This roadmap sequences the evolution of PepEducation into a global, evidence-based education platform for peptides, metabolism, longevity, neuroscience, performance, health, and evidence-based biohacking. It communicates direction; each implementation still requires a scoped GitHub Issue, acceptance criteria, a task branch, validation, and a pull request.

Scientific integrity, user safety, accessibility, privacy, stable URLs, and maintainability take precedence over delivery speed. A roadmap item does not authorize unsupported health claims, collection of sensitive data, a framework migration, or a third-party integration. Those changes require explicit approval and documented risk, privacy, security, migration, and rollback plans.

## Current baseline

- Static GitHub Pages site using HTML5, modern CSS, and ES6 JavaScript.
- Homepage with audience adaptation, health foundations, molecule discovery, evidence levels, and tool concepts.
- Published page files for retatrutide, tirzepatide, semaglutide, BPC-157, and TB-500.
- Initial sitemap and automated Pages deployment.
- Immediate maintenance debt: reconcile homepage discovery and sitemap coverage with every existing public molecule profile; complete consistent metadata, breadcrumb, structured data, accessibility, and scientific-section audits.

## Phase 0 — Governance and quality foundation

- [x] Establish the permanent agent operating guide, contribution templates, ownership, quality workflow, and roadmap.
- [ ] Reconcile all existing public pages with homepage/category discovery and `sitemap.xml`.
- [ ] Audit existing molecule profiles against the molecule page contract without inventing unavailable evidence.
- [ ] Establish reusable page conventions for metadata, breadcrumbs, evidence labels, references, review dates, related content, and disclaimers.
- [ ] Document a stable URL/content model and lightweight content manifest that can survive a future framework migration.
- [ ] Add repeatable accessibility, performance, structured-data, metadata-uniqueness, and broken-link reporting.

## Phase 1 — Initial molecule library

Build or bring each profile to the repository standard in this exact priority order. Existing pages remain in the sequence until their completeness and scientific review are verified.

1. [ ] Retatrutide
2. [ ] Tirzepatide
3. [ ] Semaglutide
4. [ ] Survodutide
5. [ ] BPC-157
6. [ ] TB-500
7. [ ] GHK-Cu
8. [ ] AHK-Cu
9. [ ] KPV
10. [ ] SS-31
11. [ ] MOTS-c
12. [ ] ARA-290
13. [ ] Tesamorelin
14. [ ] CJC-1295
15. [ ] Ipamorelin

For every profile, require a source inventory, explicit evidence boundaries, dated regulatory verification, consistent related-molecule links, discovery placement, complete SEO/social metadata, appropriate JSON-LD, sitemap inclusion, accessibility review, and scientific review date.

## Phase 2 — Taxonomy and discovery foundations

Create durable category definitions, landing-page requirements, relationships, synonyms, and multilingual slugs/labels before scaling content. Avoid publishing empty or thin category pages.

- [ ] GLP-1
- [ ] GIP
- [ ] Glucagon
- [ ] Growth Hormone
- [ ] Healing
- [ ] Neuro
- [ ] Hair
- [ ] Skin
- [ ] Longevity
- [ ] Performance
- [ ] Body Composition
- [ ] Mitochondria
- [ ] Inflammation
- [ ] Supplements
- [ ] Laboratory Tests
- [ ] Nutrition
- [ ] Research Molecules

Then implement global scientific search, filters, synonyms, evidence-level facets, related-content rules, and an index that can scale beyond 500 molecule profiles and thousands of articles without making JavaScript a prerequisite for core navigation.

## Phase 3 — Editorial scale and multilingual publishing

- [ ] Define structured, portable content fields for molecules, articles, authorship/review, citations, regulatory snapshots, FAQs, taxonomy, translations, and redirects.
- [ ] Define editorial states: draft, scientific review, localization review, published, correction required, and archived.
- [ ] Establish citation verification, time-sensitive claim review cadence, correction history, and content freshness reporting.
- [ ] Introduce English, Portuguese, and Spanish URL, `hreflang`, canonical, translation, glossary, and reviewer conventions.
- [ ] Build article and `ScholarlyArticle` patterns only where visible authorship, dates, references, and required properties support them.
- [ ] Add automated checks for duplicate metadata, orphan pages, translation drift, missing review dates, and sitemap completeness.

## Phase 4 — Health and Laboratory Hubs

- [ ] Build a Health Hub for evidence-based foundations across sleep, exercise, nutrition, stress, metabolic health, neuroscience, longevity, and performance.
- [ ] Build a Laboratory Hub with test purpose, units, reference-range context, biological variability, limitations, and preparation context—without diagnosis or individualized interpretation.
- [ ] Design educational biomarker timelines that distinguish user-entered observations from medical conclusions.
- [ ] Connect hub content to categories, articles, molecules, evidence levels, and multilingual search.
- [ ] Complete clinical-safety, accessibility, privacy, and threat-model reviews before accepting any health or laboratory data.

## Phase 5 — Personalized education platform

- [ ] Define an educational AI Advisor with retrieval provenance, citations, uncertainty, refusal boundaries, escalation language, evaluation sets, and monitoring. It must not diagnose, prescribe, dose, or encourage self-medication.
- [ ] Design accounts and dashboards around data minimization, explicit consent, encryption, retention/deletion controls, export, regional requirements, and accessible recovery flows.
- [ ] Introduce premium capabilities only after core educational access, billing transparency, entitlement boundaries, privacy, accessibility, and cancellation/rollback behavior are approved.
- [ ] Establish analytics that avoid sensitive-data leakage and respect consent and regional privacy requirements.

## Phase 6 — Devices, integrations, and application surfaces

- [ ] Define a provider-neutral integration model, consent scopes, provenance, synchronization semantics, rate limits, deletion, failure handling, and disconnect behavior.
- [ ] Evaluate Oura, Garmin, WHOOP, and Fitbit integrations individually against current official APIs and terms.
- [ ] Evaluate Apple Health and Google Health Connect with explicit mobile architecture, platform permissions, privacy disclosures, and on-device/data-transfer boundaries.
- [ ] Deliver responsive web/tablet foundations before approving iOS and Android clients; share content contracts and design language without assuming identical interaction models.

## Framework migration readiness

Remain on the current static stack until an explicit migration decision is approved. Before selecting Next.js or another application framework, require:

- a measured scaling or product need that static delivery cannot reasonably meet;
- an inventory of every URL, canonical, redirect, metadata field, JSON-LD block, sitemap entry, asset, and indexed content item;
- portable structured content with stable identifiers and locale relationships;
- parity tests for rendered content, accessibility, internal links, structured data, performance, and GitHub Pages behavior or replacement hosting;
- an incremental rollout, monitoring, rollback, and cache strategy; and
- no loss of content, citations, URLs, SEO metadata, or structured data.

## Definition of roadmap progress

Mark an item complete only when its acceptance criteria are met, required reviews and automated checks pass, documentation and discovery are updated, and its pull request is merged. Link completion changes to the relevant issue or pull request. If work is blocked, record the blocker, owner, risk, and next decision instead of marking it complete.
