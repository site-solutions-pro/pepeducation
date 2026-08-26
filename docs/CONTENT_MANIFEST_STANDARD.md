# WellMax Content Manifest Standard

## Purpose and authority

`data/content-manifest.json` is the machine-readable inventory of public WellMax HTML content. It groups English, Portuguese (Brazil), and Spanish routes under one stable content identity so agents and maintainers can evaluate publication status, translation parity, discovery, review requirements, and backlog priority without inferring completeness from file existence.

The manifest records repository state; it does not approve content, change public URLs, or replace qualified scientific, regulatory, linguistic, SEO, or release review. `sitemap.xml` remains the indexable URL inventory and the filesystem remains the deployable source. CI requires all three sources to agree.

## Document shape

The root object contains:

- `version`: schema version.
- `generated_on`: inventory review date in `YYYY-MM-DD` format.
- `repository`: canonical GitHub owner/repository.
- `production_base`: canonical GitHub Pages base URL.
- `locales`: supported locale labels.
- `content_families`: array of content-family records.

Each content-family record contains all of these fields:

```json
{
  "id": "retatrutide",
  "type": "peptide",
  "slug": "retatrutide",
  "title": "Retatrutide",
  "routes": {
    "en": "/wellmax/peptides/retatrutide.html",
    "pt": "/wellmax/pt/peptides/retatrutide.html",
    "es": "/wellmax/es/peptides/retatrutide.html"
  },
  "status": {
    "en": "PARTIAL",
    "pt": "REVIEW_REQUIRED",
    "es": "SHELL"
  },
  "sitemap": { "en": true, "pt": true, "es": true },
  "linked": { "en": true, "pt": true, "es": false },
  "scientific_review": "REVIEW_REQUIRED",
  "seo_review": "REVIEW_REQUIRED",
  "i18n_review": "REVIEW_REQUIRED",
  "priority": "HIGH",
  "notes": "Human-readable inventory context."
}
```

`id` is unique and stable. `slug` is the current filename stem, except the homepage uses `home`. Routes are production pathnames and must begin with `/wellmax/`. Homepage routes end in `/`; other routes include their public `.html` path. A future absent locale may retain its locale key with a `null` route and `MISSING` status, but every non-null route must resolve to a repository HTML file.

## Controlled types

Allowed `type` values are:

- `home`
- `hub`
- `peptide`
- `supplement`
- `biomarker`
- `comparison`
- `research`
- `membership`
- `other`

Type describes content identity, not evidence strength or publication approval.

## Content status

Allowed locale status values are:

- `COMPLETE`: substantive content has the required structure and no obvious major content, metadata, translation, or contract gap. This is not scientific approval.
- `PARTIAL`: substantive content exists, but important sections, metadata, references, translation equivalence, or page-contract requirements remain incomplete.
- `SHELL`: a generic or generated placeholder without substantive identity-specific content.
- `MISSING`: the expected locale variant does not exist. The locale key remains present and its route may be `null`.
- `REVIEW_REQUIRED`: substantive content cannot safely receive a completeness classification until qualified human, scientific, safety, regulatory, or linguistic review resolves a blocker.

Agents must not infer `COMPLETE` merely from a file, sitemap entry, word count, or passing CI. When uncertain, use `PARTIAL` or `REVIEW_REQUIRED` and explain why in `notes`.

### Version 1 classification method

Version 1 applies conservative, repository-observable rules:

1. Pages rendered from `assets/i18n-page.js` are `SHELL` because they contain generic generated copy rather than substantive identity-specific content.
2. Substantive legacy pages with objective metadata, structure, reference, translation, or content-contract debt are `PARTIAL`.
3. The six pages documented in `docs/SAFETY_CONTENT_REVIEW.md` are `REVIEW_REQUIRED` in Portuguese pending qualified review.
4. A page is `COMPLETE` only when repository evidence supports the full v1 threshold without assuming scientific approval.
5. A locale is `MISSING` only when its expected file is absent; version 1 currently has no missing files.

Status describes the page variant. Family-level review fields independently describe required human review.

## Sitemap and discovery fields

`sitemap.en`, `sitemap.pt`, and `sitemap.es` are booleans derived from `sitemap.xml`. They do not grant publication approval; they record current indexability.

`linked.en`, `linked.pt`, and `linked.es` record whether the variant has a non-language inbound discovery route from public HTML or the shared primary navigation. Language-switcher links are intentionally excluded because translation reciprocity alone is not sufficient content discovery. CI recomputes this definition so the values cannot silently drift.

## Review fields and approval boundary

Review fields use:

- `REVIEW_REQUIRED`
- `HUMAN_APPROVED`
- `N/A`

`scientific_review` is required for peptides, supplements, biomarkers, comparisons, and research content unless a qualified maintainer explicitly records `N/A`. `seo_review` and `i18n_review` track family-level readiness across the supported routes.

Agents may identify review needs and may set or retain `REVIEW_REQUIRED` or `N/A` when justified. Agents must never assign `HUMAN_APPROVED` to their own scientific, safety, regulatory, SEO, or translation work. Only an authorized human reviewer may set `HUMAN_APPROVED`, with reviewer identity, scope, and review date documented in the approved review system or pull request.

## Priority

Allowed priority values are:

- `CRITICAL`: active production, safety, URL, indexing, or integrity failure.
- `HIGH`: important scientific or discovery identity has a `SHELL` or `MISSING` locale, or a material review blocker.
- `MEDIUM`: substantive `PARTIAL` or `REVIEW_REQUIRED` work without an active production failure.
- `LOW`: already substantive, stable content requiring refinement only.

Priority is a backlog signal, not permission to bypass scientific review, URL approval, CI, or human merge gates.

## Content-page contract alignment

`docs/CONTENT_PAGE_CONTRACT.md` is the canonical publication and review contract for molecule, supplement, and biomarker pages. This standard does not duplicate or redefine its common or type-specific requirements.

Before promoting a molecule, supplement, or biomarker variant, evaluate the applicable canonical contract. `N/A`, `EVIDENCE_UNAVAILABLE`, and `REVIEW_REQUIRED` remain valid where the contract permits them; never invent content or overstate completeness to obtain a manifest status.

## Agent workflow

- The WellMax Supervisor reads the manifest before planning a large content mission and uses it to bound identities, locales, status, priority, and required reviews.
- The Scientific Content Agent reads `scientific_review`, status, type, and notes before editing scientific content. It may not approve its own scientific work.
- The SEO and i18n Agent reads routes, locale status, sitemap, discovery, `seo_review`, and `i18n_review` before changing metadata or translations.
- The QA Agent independently validates manifest integrity, filesystem and sitemap parity, locale routing, enums, shell classification, and discovery booleans.
- Every agent that creates, deletes, moves, translates, materially changes, or changes the readiness of a public page updates the manifest and regenerated status report in the same pull request.

The handoff remains `BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE`. Manifest status never replaces a human merge decision.

## Update procedure

1. Inspect the current filesystem, `sitemap.xml`, internal discovery links, page structure, and relevant review documents.
2. Preserve the existing family `id`; changing it requires explicit migration justification.
3. Update all EN/PT/ES route, status, sitemap, and linked fields affected by the change.
4. Update review fields only from documented evidence; never manufacture approval.
5. Recalculate priority and notes.
6. Regenerate `docs/CONTENT_STATUS_REPORT.md` from the manifest.
7. Run manifest validation, the existing Quality suite, and `git diff --check`.
8. Obtain independent QA and required human review before merge.

## CI invariants

Quality CI fails when:

- JSON cannot be parsed.
- Required root or family fields are missing.
- IDs or routes are duplicated.
- A type, status, review value, or priority is outside its enum.
- A non-null route escapes `/wellmax/`, violates its locale prefix, or maps to a missing HTML file.
- Filesystem HTML, sitemap URLs, and manifest routes are not exactly synchronized.
- Sitemap or linked booleans disagree with repository evidence.
- A generated shell is mislabeled or a `SHELL` status points to a substantive static page.
- The human-readable status report disagrees with manifest family, page, locale-status, review, priority, type, or top-backlog totals.
- An agent-authored manifest introduces `HUMAN_APPROVED` without separately authorized human evidence.

CI validates inventory integrity. It does not fail merely because a truthful status is `PARTIAL`, `SHELL`, `MISSING`, or `REVIEW_REQUIRED`.

## Known version 1 limitations

- Classification is a conservative repository audit, not a qualified scientific or linguistic review.
- Runtime primary-navigation links are included in discovery; language-switcher links are excluded.
- Existing pages do not yet expose a uniform machine-readable review date or reviewer identity.
- Version 1 records current page-family state but does not replace the field-level records defined by `docs/CONTENT_PAGE_CONTRACT.md`.
