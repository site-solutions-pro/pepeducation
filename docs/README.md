# WellMax Education — Technical Documentation

This directory is the source of truth for architecture, routing, internationalization, shared components, deployment and quality assurance.

## Mandatory documents

- `ARCHITECTURE.md` — platform structure and ownership boundaries.
- `ROUTING.md` — canonical URL matrix for EN, PT and ES.
- `I18N.md` — localization rules and parity requirements.
- `HEADER.md` — global header contract.
- `CATEGORIES.md` — official scientific categories and translations.
- `QA_CHECKLIST.md` — release validation checklist.
- `CHANGELOG.md` — implementation history and migrations.

## Non-negotiable rules

1. The global header is rendered by `assets/app.js` and styled by `assets/wellmax.css`.
2. Never create page-specific header variants.
3. Localized navigation must remain inside the active locale.
4. A language switch must preserve the equivalent page when it exists.
5. Every public release must validate mobile, desktop, internal links, locale parity and GitHub Pages deployment.
6. Scientific content must remain educational, evidence-classified and non-prescriptive.

## Update policy

Any pull request that changes routing, categories, components, localization, deployment or design behavior must update the corresponding document in this directory.