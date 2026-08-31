# WellMax Three-Layer Content Validation

## Purpose

This document defines the operational validation system used by the WellMax autonomous production team. Creation and validation are separated by design: an agent that creates or edits content cannot approve its own work.

The n8n implementation is the execution layer. Repository governance remains authoritative for merge, scientific approval, URL changes, safety-policy changes, and release decisions.

## Operating team

### Supervisors

- **WellMax Supervisor - Quality Growth**: audits the current site and distributes quality/growth reviews.
- **WellMax Supervisor - Autonomous Production**: reads `data/content-manifest.json`, selects the next three eligible backlog tasks, and sends them to governed production and validation.

### Production and specialist agents

- **Content Production Agent**: creates or substantially improves governed educational content packages.
- **Content Quality Agent**: audits scientific depth, evidence structure, clarity, usefulness, and originality.
- **Technical SEO Agent**: audits indexability, canonical, hreflang, schema, headings, sitemap, and technical search integrity.
- **Internal Links Agent**: audits topic clusters, contextual linking, orphan risk, anchors, crawl depth, and locale continuity.
- **Visual Design Agent**: audits visual consistency, responsive behavior, accessibility, scientific visualization, and UX.
- **AI Visibility Agent**: audits entity clarity, answerability, citation-worthiness, GEO/AEO, and visibility in AI-mediated discovery.
- **Positioning Agent**: audits topical authority, differentiation, audience fit, and editorial positioning.

## Mandatory three-layer validation

Every newly created or substantially modified content package must pass all three independent layers.

### Layer 1 — Scientific Evidence

Checks:

- factual accuracy;
- evidence hierarchy;
- study phase, population, endpoints, comparator, and duration when material;
- limitations and uncertainty;
- regulatory-status accuracy;
- reference integrity;
- claim-to-evidence alignment;
- risk and safety framing;
- fabricated or unverifiable claims;
- actionable medical, dosing, reconstitution, injection, treatment, or self-administration guidance.

Output verdict:

- `PASS`
- `PASS_WITH_CHANGES`
- `BLOCK`

Layer 1 never sets `scientific_review` to `HUMAN_APPROVED`.

### Layer 2 — Editorial, SEO and i18n

Checks:

- clarity, organization, originality, and reader usefulness;
- search intent and semantic coverage;
- titles, headings, descriptions, and entity clarity;
- E-E-A-T signals and citation presentation;
- duplicate/thin content and keyword stuffing;
- internal-link opportunities;
- EN/PT-BR/ES content identity and terminology consistency;
- locale-preserving navigation;
- translation parity and unsupported localization drift.

Scientific disagreements are escalated back to Layer 1 rather than silently rewritten.

Output verdict:

- `PASS`
- `PASS_WITH_CHANGES`
- `BLOCK`

### Layer 3 — Technical, Visual and Publication QA

Checks:

- broken links, assets, and fragments;
- canonical/hreflang consistency;
- schema and JSON-LD validity;
- sitemap/filesystem expectations;
- locale routing and language-selector consistency;
- responsive/mobile regressions;
- accessibility and keyboard/focus risks;
- visual hierarchy and design-system consistency;
- charts/images and scientific-visualization appropriateness;
- performance and implementation regressions;
- repository governance and publication-readiness checks.

Layer 3 does not adjudicate scientific claims; disputed claims return to Layer 1.

Output verdict:

- `PASS`
- `PASS_WITH_CHANGES`
- `BLOCK`

## Deterministic release gate

The three validators feed a deterministic n8n Gate. The Gate does not use an LLM to override validator outcomes.

Rules:

- all three `PASS` -> `APPROVED`, `safeToRelease=true`;
- one or more `PASS_WITH_CHANGES` and no `BLOCK` -> `CHANGES_REQUIRED`, `safeToRelease=false`;
- any `BLOCK` or unparseable validator result -> `BLOCKED`, `safeToRelease=false`.

`APPROVED` means eligible to continue the repository release process. It does not bypass human merge approval, qualified scientific approval, safety gates, URL/redirect approval, or regulatory-claim approval.

## Autonomous production cycle

The autonomous production supervisor reads `data/content-manifest.json` and ranks eligible backlog items using:

1. priority (`CRITICAL` before `HIGH`, `MEDIUM`, `LOW`);
2. publication maturity (`SHELL`/`MISSING` before `PARTIAL`);
3. locale backlog, currently favoring ES, then PT-BR, then EN when other scores tie.

The initial batch size is three tasks per cycle.

Pages already classified as locale `REVIEW_REQUIRED` are excluded from unattended production selection and remain in the human-review queue.

The production cycle is:

```text
CONTENT MANIFEST
      |
      v
BACKLOG SELECTION
      |
      v
CONTENT PRODUCTION
      |
      +-------------------------------+
      |               |               |
      v               v               v
L1 SCIENCE      L2 EDITORIAL/SEO   L3 TECH/VISUAL
      |               |               |
      +---------------+---------------+
                      |
                      v
              DETERMINISTIC GATE
                      |
          +-----------+-----------+
          |           |           |
       APPROVED    CHANGES      BLOCKED
          |        REQUIRED         |
          v           |             |
   repository QA <----+-------------+
          |
          v
   SUPERVISOR SYNTHESIS
          |
          v
   HUMAN MERGE APPROVAL
```

## Current n8n workflow identities

- `WellMax Supervisor - Quality Growth`
- `WellMax Agent - Content Quality`
- `WellMax Agent - Technical SEO`
- `WellMax Agent - Internal Links`
- `WellMax Agent - Visual Design`
- `WellMax Agent - AI Visibility`
- `WellMax Agent - Positioning`
- `WellMax Agent - Content Production`
- `WellMax Validation L1 - Scientific Evidence`
- `WellMax Validation L2 - Editorial SEO i18n`
- `WellMax Validation L3 - Technical Visual QA`
- `WellMax Gate - 3-Layer Content Validation`
- `WellMax Pipeline - Create + 3-Layer Validate`
- `WellMax Supervisor - Autonomous Production`

## Execution safety

- No autonomous workflow may merge to `main`.
- No autonomous workflow may set `HUMAN_APPROVED` scientific state.
- No autonomous workflow may perform URL/redirect migrations or safety-policy changes.
- No autonomous workflow may silently downgrade a failed validator.
- Provider credentials belong in the configured gateway/credential store, not source control.
- OmniRoute is the intended primary model-consumption gateway once its provider/authentication configuration is complete.

## Activation rule

The production supervisor remains unpublished/inactive until the OmniRoute provider path is operational and an end-to-end test confirms:

1. model calls work through the intended provider gateway;
2. Content Manifest loading succeeds;
3. production output reaches all three validators;
4. deterministic gate behavior matches this document;
5. no publish/merge side effect occurs during testing.
