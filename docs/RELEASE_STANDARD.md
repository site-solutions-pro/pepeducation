# WellMax Release Standard

## Standard release path

```text
main
  |
  v
feature/fix branch
  |
  v
implementation
  |
  v
local tests
  |
  v
focused commit
  |
  v
push feature branch
  |
  v
pull request
  |
  v
hosted CI
  |
  v
independent QA
  |
  v
SEO/i18n review when applicable
  |
  v
scientific/UX review when applicable
  |
  v
Supervisor readiness synthesis
  |
  v
HUMAN MERGE APPROVAL
  |
  v
merge
  |
  v
Pages deployment
  |
  v
production smoke tests
```

No direct-to-main development is permitted.

## Branch and commit rules

- Begin from the latest approved `origin/main` unless the task explicitly targets another base.
- Use one task-specific branch with a descriptive `feat/`, `fix/`, `docs/`, `ci/`, `test/`, `refactor/`, or `chore/` prefix.
- Preserve unrelated user work and do not rewrite shared history.
- Use focused Conventional Commit messages.
- Push only the task branch.
- Do not force push unless a maintainer explicitly approves that exact action.

## Pull request contract

Every PR describes:

- Objective and scope.
- Base and head identities.
- Files and public URLs affected.
- Implementation approach.
- Scientific, safety, regulatory, SEO, i18n, accessibility, and responsive impact.
- Exact local tests and results.
- Hosted CI status.
- Sitemap, internal-link, and public-URL status.
- Screenshots for perceptible UI changes.
- Known limitations and unperformed validation.
- Rollback approach.
- Human approvals required.

Update the existing task PR rather than creating parallel PRs for its fixes.

## Pre-merge gate

Before asking for human merge approval, confirm:

- PR head SHA matches the reviewed SHA.
- Base branch has not moved into a conflict.
- PR is mergeable and clean.
- Required CI is successful.
- Changed-file scope matches approval.
- No unresolved review threads remain.
- QA passed independently.
- SEO/i18n passed when applicable.
- Scientific and UX gates passed or are N/A.
- Reserved human decisions are explicit.

Only a human can authorize merge. The authorization should name the PR or exact head SHA and merge method where relevant.

## Merge rules

- Use the merge method specified by the maintainer or repository policy.
- Reconfirm head SHA and CI immediately before merging.
- Never merge failed or stale reviewed code.
- Never force push `main`.
- Do not modify unrelated branches during release.

## Deployment observation

After merge:

- Record the merge commit and new `main` SHA.
- Observe the GitHub Pages deployment workflow to a terminal result.
- Record the Pages deployment job/step conclusion.
- Treat a failed deployment as a product/release defect until proven otherwise.

## Production smoke tests

At minimum, validate against `https://site-solutions-pro.github.io/wellmax/`:

- Homepage HTTP success.
- Representative EN, PT-BR, and ES paths.
- Representative nested peptide, supplement, and biomarker paths affected by the release.
- `robots.txt` and `sitemap.xml`.
- Canonical and production-base correctness for affected pages.
- Critical CSS, JavaScript, and image assets.
- Navigation and language switching for affected routes.
- No new 404-producing internal path.

Scientific changes also require confirmation that the deployed content matches the human-approved revision.

## Rollback

Rollback is a human-approved production action. Prepare:

- Fault description and affected URLs.
- Last known-good main SHA.
- Candidate revert or forward-fix strategy.
- URL, redirect, sitemap, and cache implications.
- Validation plan.

Do not delete content or change redirects as an improvised rollback.

## Release report

```yaml
pr: number and URL
merge_method: value
merge_sha: value
main_sha: value
ci: status
deployment_workflow: status
pages_deployment: status
smoke_tests:
  result: PASS | FAIL | PARTIAL
  checks: []
limitations: []
rollback_reference: value
```
