# WellMax QA Standard

<!-- Agent System synchronization with the current production baseline was verified on 2026-08-26. -->

## Independence

The QA Agent is conceptually independent from the implementation role. A builder may report local checks but cannot declare its own work production-ready. QA must inspect the diff and reproduce risk-relevant checks as a separate pass.

The required flow is:

`BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE`

Scientific and UX review are added when their domains change.

## QA inputs

- Approved task and acceptance criteria.
- Applicable `AGENTS.md` files and standards.
- Base SHA, head SHA or working-tree diff.
- Complete changed-file and affected-URL list.
- Builder test results and known limitations.
- CI workflow and current result when available.

## Risk classification

- `CRITICAL`: unsafe content, unauthorized merge/main mutation, broken production root, fabricated evidence, or broad data loss.
- `HIGH`: broken published paths, incorrect regulatory claim, widespread locale failure, sitemap/robots failure, or inaccessible core journey.
- `MEDIUM`: isolated metadata, internal-link, layout, translation, or maintainability defect with a bounded impact.
- `LOW`: non-blocking clarity, consistency, or documentation improvement.

Critical and high findings block handoff. Medium findings block when they violate acceptance criteria or publication contracts. Low findings may be documented for later work.

## Baseline validation matrix

### Every change

- Confirm expected branch and base.
- Inspect `git status`, full diff, and changed-file list.
- Run `git diff --check`.
- Confirm no unrelated files or silent content rewrites.
- Run existing relevant tests.

### HTML or public-page change

- HTML5 doctype where strict.
- One title, one H1, one canonical for strict pages.
- Correct locale and production base.
- Meta description and page-category/review status for publication-ready content.
- Links, fragments, assets, and JSON-LD.
- Sitemap/file parity.
- Hreflang and same-locale routing when affected.

### JavaScript change

- Syntax check for every changed JavaScript file.
- No-JavaScript fallback where relevant.
- Root and nested repository-base paths.
- Keyboard, focus, and control-state behavior.
- Negative cases and missing-target behavior.

### CSS or visible UX change

- Narrow and wide viewports.
- Keyboard focus and contrast.
- Reduced motion.
- Overflow, touch targets, and readable hierarchy.
- Screenshot evidence when tooling permits.

### Scientific change

- Evidence-class separation.
- Claim/source verification.
- Review and regulatory dates.
- Safety-policy scan.
- Qualified human-review requirement.

### Workflow or YAML change

- YAML parse/syntax validation.
- Trigger and event behavior.
- Least-privilege permissions.
- Stable action pinning under repository policy.
- Safe interpolation and no hidden failures.
- Local equivalent of new logic plus hosted CI.

## Strictness and legacy pages

Strict publication checks apply to:

- New public pages.
- Substantially modified public pages.
- Pages explicitly marked publication-ready.

Untouched legacy, `SHELL`, or explicitly incomplete pages do not fail solely because a future field is missing. Regression checks should target changed behavior. A change to a legacy page must not remove existing metadata, worsen links, or misrepresent its state.

Until a machine-readable page manifest is approved, treat a page as substantially modified when the task changes its scientific meaning, user journey, page identity, core structure, metadata strategy, or publication state. Cosmetic or isolated-link changes receive targeted checks plus preservation assertions.

## Required CI coverage

Quality CI must cover:

- JavaScript syntax.
- Generated repository-base navigation.
- Sitemap URL to repository file.
- Public HTML file to sitemap.
- Robots sitemap URL.
- Stale PepEducation production URLs.
- Broken local links, fragments, and assets.
- JSON-LD parsing.
- Title, H1, canonical, locale, and metadata for strict pages.
- Hreflang reciprocity where applicable.
- Targeted regressions added by feature work.

Do not create broad allowlists that hide new defects. Historical/migration documentation may contain retired URLs only when clearly non-production and explicitly excluded.

## Failure handling

1. Reproduce the failure.
2. Determine product defect versus external infrastructure failure.
3. Report exact file, URL, assertion, and impact.
4. Return product defects to the builder.
5. Rerun the failed check and relevant regression suite.
6. Keep the PR blocked until required checks pass.

Do not convert failures into warnings or disable checks to obtain green CI.

## QA output

```yaml
qa_result: PASS | FAIL | BLOCKED
base_sha: value
head_sha: value
changed_files_verified: []
tests:
  - name: value
    result: PASS | FAIL | NOT_RUN | N/A
findings:
  - severity: CRITICAL | HIGH | MEDIUM | LOW
    file_or_url: value
    cause: value
    impact: value
    required_action: value
limitations: []
handoff: SEO_I18N | BUILDER | SUPERVISOR | HUMAN
```

QA `PASS` means acceptance criteria and required checks passed. It is not permission to merge.
