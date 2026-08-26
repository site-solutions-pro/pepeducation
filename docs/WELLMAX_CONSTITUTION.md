# WellMax Constitution

Version: 1.0

Status: governing

Repository: `site-solutions-pro/wellmax`

Production: `https://site-solutions-pro.github.io/wellmax/`

## Purpose

This constitution defines the durable safety, authority, publication, and release boundaries for human and agent work in WellMax. It does not authorize a website redesign, scientific rewrite, brand migration, URL migration, or medical-policy change.

## Constitutional priorities

When values conflict, apply this order:

1. Human safety.
2. Scientific accuracy.
3. Regulatory accuracy.
4. Accessibility.
5. Backward compatibility and published URL integrity.
6. SEO, discoverability, and locale integrity.
7. Performance and maintainability.
8. Visual consistency.
9. Delivery speed.

No delivery goal justifies fabricated evidence, unsafe guidance, broken production paths, hidden test failures, or unauthorized publication.

## Non-negotiable platform boundaries

- WellMax is educational and does not diagnose, prescribe, treat, or replace qualified care.
- Active production source uses the WellMax production base and never `/pepeducation/`.
- Published URLs, canonicals, redirects, sitemap entries, and locale identities are public contracts.
- The static HTML/CSS/JavaScript GitHub Pages architecture remains authoritative until humans approve a migration.
- Scientific evidence classes remain separate.
- Investigational and approved therapies remain clearly distinguished.
- A page may say evidence is unavailable; it may not invent evidence to appear complete.
- A builder cannot approve its own scientific accuracy or production readiness.
- Failed required CI is a blocker, not an inconvenience.

## Agent autonomy

Agents may inspect, research, branch, implement, test, repair branch failures, commit, push feature branches, open or update PRs, analyze CI, prepare releases, and report production smoke tests within an approved task.

Autonomy is bounded by task scope, repository instructions, test evidence, and reversible feature-branch work. Autonomy does not include authority to redefine policy.

## Reserved human powers

Explicit human approval is required to:

- Merge any PR into `main`.
- Push or force-push `main`, or rewrite shared history.
- Delete, rename, or relocate a published URL.
- Define or change redirects or canonical migration strategy.
- Change public URL structure, production host, or locale structure.
- Change medical, clinical-safety, or self-administration policy.
- Materially change a regulatory-status claim.
- Publish a new clinical recommendation or actionable protocol.
- Approve material scientific content or the agent's own scientific review.
- Override a required check or accept a known failing quality gate.

Approval must identify the action and scope. Approval for one migration, claim, or merge is not standing authorization for another.

## Publication states

Content identities use one of these operational states:

- `SHELL`: structural placeholder; not represented as a complete scientific profile.
- `PARTIAL`: meaningful content exists but required sections or review remain incomplete.
- `REVIEW_REQUIRED`: content is prepared but blocked on qualified review.
- `PUBLICATION_READY`: all applicable contracts and approvals are satisfied.
- `PUBLISHED`: merged and deployed; production smoke tests completed.

Translation coverage separately uses `COMPLETE`, `PARTIAL`, `SHELL`, `MISSING`, or `REVIEW_REQUIRED` as defined in `I18N_STANDARD.md`.

## Separation of duties

The minimum decision chain is:

`BUILD -> QA -> SEO/I18N -> SUPERVISOR -> HUMAN MERGE`

Scientific and UX reviews are inserted when their domains are affected. Review roles may be performed by the same software system in constrained environments, but they must be executed as distinct passes with independent criteria and outputs. No implementation pass may self-certify production readiness.

## Evidence and audit trail

A production-ready PR must preserve an auditable trail:

- Task scope and affected identities.
- Source and evidence record when scientific claims change.
- Exact files and public URLs affected.
- Test commands and observed results.
- CI run and conclusion.
- Independent review results.
- Human approvals required or received.
- Deployment and production-smoke status after merge.

Unknown, skipped, unavailable, and not-applicable checks must be stated explicitly.

## Legacy compatibility

Legacy and `SHELL` pages may remain incomplete while modernization is staged. New validation must not fail untouched legacy pages solely for missing future metadata. Strict contracts apply to new pages, substantially modified pages, and pages explicitly marked publication-ready. No change may reduce the quality or safety of a legacy page.

## Amendment rule

Changes to this constitution require an explicit governance task, a dedicated PR, passing CI, and human approval. An agent must not amend it incidentally while implementing a product feature.
