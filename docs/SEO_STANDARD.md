# WellMax SEO Standard

## Fixed production identity

- Production base: `https://site-solutions-pro.github.io/wellmax/`.
- Active production source must not contain `/pepeducation/`.
- Canonicals, Open Graph URLs, hreflang URLs, sitemap URLs, and structured-data URLs must use the production base.
- URL or redirect migrations require an explicit human-approved plan.

## Publication-ready contract

Every publication-ready indexable page requires:

- One unique, descriptive `<title>`.
- One unique meta description.
- One `<h1>`.
- One self-referencing canonical.
- Correct HTML locale.
- Reciprocal hreflang for every equivalent translation that exists, plus `x-default` where the identity uses it.
- Open Graph metadata and Twitter Card metadata appropriate to the page.
- Appropriate JSON-LD that matches visible content.
- Descriptive internal links and a breadcrumb where the page contract requires it.
- A sitemap entry that maps to the repository file.
- A page category.
- Evidence and review status for scientific content.

Do not add misleading schema, duplicate metadata, unsupported claims, keyword stuffing, or rich-result markup unsupported by visible content.

## Canonical mapping

Canonical path and repository file must represent the same public identity:

```text
index.html                    -> /wellmax/
pt/index.html                 -> /wellmax/pt/
es/index.html                 -> /wellmax/es/
peptides/example.html         -> /wellmax/peptides/example.html
pt/peptides/example.html      -> /wellmax/pt/peptides/example.html
```

Canonical changes are metadata migrations even when files do not move. Review them as public URL changes.

## Sitemap and robots

- Every public indexable HTML file appears exactly once in `sitemap.xml`.
- Every sitemap URL maps to an existing public HTML file.
- Non-public shells must have an explicit indexing decision; do not silently omit a public page.
- `robots.txt` advertises `https://site-solutions-pro.github.io/wellmax/sitemap.xml` exactly once.
- Sitemap changes must be reviewed with filesystem and canonical changes together.

## Internal links

- All internal destinations, fragments, scripts, styles, and images must resolve under the GitHub Pages repository base.
- Avoid orphan pages.
- Use descriptive labels rather than generic “click here” text.
- Preserve locale when an equivalent localized destination exists.
- Language switchers may cross locale boundaries and should preserve identity.

## Hreflang

- Hreflang is identity-based, not homepage-based.
- Include only translations that exist and are intended to be indexable.
- Each listed translation must reference itself and reciprocate the relationship.
- Use `en`, `pt-BR`, and `es` consistently.
- Each localized page remains self-canonical; do not canonicalize translations to English.

## Structured data

- JSON-LD must parse as JSON.
- Entity type, name, URL, dates, authorship, and claims must match visible content.
- Do not use medical or review schema to imply qualifications, recommendations, or ratings not present on the page.
- Removal of existing JSON-LD requires a valid replacement or documented reason.

## CI contract

CI must validate:

- Production-base correctness.
- Canonical presence and mapping for strict pages.
- Sitemap-to-filesystem and filesystem-to-sitemap parity.
- Robots sitemap correctness.
- Stale PepEducation production URLs.
- Internal links, fragments, and assets.
- Hreflang integrity where translations are declared.
- One H1, one title, and required metadata on strict pages.

Strict pages are new pages, substantially modified pages, and explicitly publication-ready pages. Untouched legacy or `SHELL` pages are not failed solely for missing future metadata. CI should add targeted regression checks rather than broad exemptions.

## SEO handoff

Report affected URLs, canonical changes, metadata changes, sitemap state, hreflang relationships, internal-link coverage, structured-data validation, and any intentional indexing decision.
