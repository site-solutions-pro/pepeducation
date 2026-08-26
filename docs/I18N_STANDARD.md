# WellMax Internationalization Standard

## Locale model

WellMax supports three expected variants for each content identity:

```yaml
identity: category/slug
expected:
  EN:
    locale: en
    path: /wellmax/category/slug.html
    status: STATUS
  PT_BR:
    locale: pt-BR
    path: /wellmax/pt/category/slug.html
    status: STATUS
  ES:
    locale: es
    path: /wellmax/es/category/slug.html
    status: STATUS
```

Homepage and hub identities use their corresponding directory/index paths.

## Translation statuses

- `COMPLETE`: equivalent meaning, structure, metadata, references, and required review are complete.
- `PARTIAL`: meaningful localized content exists, but one or more material sections or metadata fields remain incomplete.
- `SHELL`: structural placeholder or generated shell; must not imply a complete profile.
- `MISSING`: no localized page exists.
- `REVIEW_REQUIRED`: translation exists but is blocked on linguistic, scientific, safety, or regulatory review.

Status describes the localized variant, not the scientific evidence level.

## Content identity

Equivalent pages must represent the same molecule, supplement, biomarker, hub, comparison, or research topic. Localized slugs may differ only through an explicit URL strategy; the current default is identity-preserving paths.

Translations preserve:

- Scientific meaning and evidence classes.
- Population and formulation boundaries.
- Citations and study identifiers.
- Safety and uncertainty.
- Scientific and regulatory review dates.
- Regulatory jurisdiction.
- Visible page category and publication state.

Do not silently add claims during translation.

## Locale routing

- English internal routes remain in `/wellmax/`.
- Portuguese internal routes remain in `/wellmax/pt/` when PT equivalents exist.
- Spanish internal routes remain in `/wellmax/es/` when ES equivalents exist.
- Apply locale preservation to navigation, CTAs, cards, breadcrumbs, related content, and footers.
- Language switchers are allowed to cross locales.
- When a translation exists, the switcher links to the equivalent identity, not the locale homepage.
- When a translation is missing, fallback behavior must be explicit and must not masquerade as a translation.

## Metadata and hreflang

- Each localized page is self-canonical.
- Titles and descriptions are localized, not mechanically copied.
- HTML `lang` matches the locale.
- Hreflang lists only existing intended translations.
- Relationships are reciprocal.
- `x-default` points to the approved default identity.
- Structured data uses the correct localized URL and visible localized name/description.

## Structural parity

`COMPLETE` variants should provide equivalent user journeys and material sections, although wording and culturally appropriate presentation may differ. Differences must not change evidence strength, safety meaning, or product availability.

`PARTIAL`, `SHELL`, and `REVIEW_REQUIRED` variants must be visibly and operationally tracked. Never present a shell as complete merely because its file exists.

## New identity workflow

1. Assign a stable content identity and category.
2. Define expected EN/PT-BR/ES paths.
3. Record the initial status for each locale.
4. Create only the variants authorized by scope.
5. Add same-locale discovery links.
6. Add reciprocal hreflang only for variants that exist and are intended for indexing.
7. Validate canonicals, metadata, sitemap, and switchers.
8. Obtain scientific and linguistic review as required.

## i18n QA checklist

- Identity matches across locales.
- Locale and canonical are correct.
- Title and description are localized.
- Same-locale internal navigation resolves.
- Switchers preserve identity where possible.
- Hreflang is reciprocal.
- Evidence classes, dates, citations, and safety boundaries are preserved.
- Translation status is accurate.
- No localized link points to a missing file.
