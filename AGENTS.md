# PepEducation Agent Operating Manual
## 1. Mission
PepEducation is an evidence-based scientific education platform covering:

- Peptides.
- Metabolism.
- Longevity.
- Neuroscience.
- Performance.
- Health.
- Evidence-based biohacking.

PepEducation provides education, not medical diagnosis, prescribing, or treatment services.
Never present the platform as a substitute for qualified medical care.

Core goals are:

- Scientific accuracy.
- Original content.
- Discoverability.
- Accessibility.
- Performance.
- Scalable architecture.
- Multilingual readiness.
## 2. Current Architecture
The production stack is:

- HTML5 for page structure and content.
- Modern CSS in `assets/styles.css` for presentation and responsive layout.
- JavaScript ES6 in `assets/app.js` for progressive interaction.
- GitHub Pages for static hosting and deployment.

Repository structure:

- `index.html` is the homepage and primary discovery surface.
- `peptides/` contains public molecule profiles.
- `assets/` contains shared CSS and JavaScript.
- `sitemap.xml` enumerates indexable public URLs.
- `robots.txt` defines crawler access and advertises the sitemap.
- `.github/` contains repository automation and collaboration configuration.
- `ROADMAP.md` governs project priorities and sequencing.

Preserve this stack unless maintainers explicitly approve a migration.
Do not invent directories, frameworks, build systems, or architectural layers that do not exist.
Any approved migration must preserve:

- Public URLs.
- SEO metadata.
- Canonical URLs.
- Structured data.
- Published content.
- Required redirects.
- Sitemap coverage.
## 3. Decision Priority
When requirements conflict, apply this order:

1. Safety.
2. Scientific accuracy.
3. Regulatory accuracy.
4. Accessibility.
5. Backward compatibility.
6. SEO and discoverability.
7. Performance.
8. Visual consistency.
9. Delivery speed.

Document any unresolved conflict and request maintainer direction before taking an irreversible action.
## 4. Repository Rules
Always:

- Inspect the repository, applicable instructions, and working tree before editing.
- Make the smallest valid change that satisfies the task.
- Preserve working pages and existing behavior outside the requested scope.
- Preserve public and canonical URLs unless a change is explicitly approved.
- Preserve valid metadata and structured data.
- Update affected internal links when pages move or change.
- Update `sitemap.xml` whenever public URL coverage changes.
- Update homepage or category discovery when a public page should be discoverable there.
- Validate every modified file with applicable checks.
- Inspect the complete diff before committing.
- Report incomplete validation and environmental limitations honestly.

Never:

- Delete valid content without explicit, documented justification.
- Rename, move, or remove a public URL casually.
- Remove metadata, schema, or canonical tags without a valid replacement.
- Weaken educational, safety, or regulatory language.
- Invent references or unsupported facts.
- Claim a check ran or passed when it did not.
- Modify unrelated files or perform opportunistic refactors.
- Push directly to `main`.
- Disable or bypass quality rules to conceal failures.
## 5. Scientific Standards
Scientific content must use:

- Original writing rather than copied or lightly paraphrased source text.
- Verifiable primary scientific references for scientific claims.
- Official sources for regulatory claims.
- A visible date for regulatory verification and scientific review.
- Explicit separation of human, animal, in vitro, mechanistic, and theoretical evidence.
- Clear separation between observed outcomes and proposed mechanisms.
- Explicit limitations, uncertainty, population boundaries, and study-design constraints.
- Careful language for investigational, experimental, or unapproved compounds.

Prefer, in descending relevance:

- Peer-reviewed primary studies.
- PubMed-indexed literature.
- ClinicalTrials.gov and other official trial registries.
- FDA, EMA, WHO, and corresponding official national regulators.
- Official product labels for approved medicines.

Do not treat retailer, clinic, reseller, influencer, forum, testimonial, or promotional content as scientific evidence.
Secondary reviews may orient research but must not replace verification of pivotal primary claims.

Never fabricate or guess:

- Citations, DOI values, or PMID values.
- Trial identifiers or phases.
- Regulatory status or approved indications.
- Statistics, denominators, endpoints, or effect sizes.
- Adverse-event rates.
- Approval, completion, or publication timelines.

Verify time-sensitive scientific and regulatory statements against current sources on the review date.
## 6. Safety Rules
Never provide:

- Dosing or dose-escalation instructions.
- Reconstitution, preparation, storage, or injection instructions.
- Treatment cycles or stacks.
- Individualized treatment protocols.
- Product sourcing or purchasing instructions.
- Self-medication or self-administration guidance.
- Claims that investigational compounds are proven safe or effective.

Every molecule page must state its educational purpose and current regulatory status clearly.
Discuss risks in proportion to the evidence and distinguish absent data from evidence of no risk.
Direct readers to qualified professionals and official labels where medical decisions are implicated.
## 7. Evidence Classification
Classify and visibly separate:

- Human clinical evidence.
- Preclinical animal evidence.
- In vitro evidence.
- Mechanistic evidence.
- Theoretical or speculative interpretation.

Name the population, model, intervention, comparator, endpoint, and duration when material.
Do not generalize animal or in vitro findings into human outcomes.
Do not describe association as causation or a surrogate endpoint as clinical benefit.
Label sponsor announcements and conference abstracts as non-peer-reviewed when applicable.
## 8. Molecule Page Contract
Every molecule page must contain the following when reliable evidence exists:

- Breadcrumb and consistent navigation.
- Hero and educational overview.
- Compound class.
- Mechanism of action, receptors, and pathways.
- Pharmacology, pharmacokinetics, and pharmacodynamics.
- Research status and evidence level.
- Separate human and preclinical evidence.
- Clinical development status and timeline.
- Principal studies and observed outcomes.
- Safety findings and reported adverse events.
- Evidence limitations.
- Dated regulatory status.
- Evidence-based comparisons.
- FAQ.
- Verifiable references.
- Related molecules and contextual internal links.
- Last scientific review date.
- Educational disclaimer.
- Complete SEO metadata.
- Appropriate, valid JSON-LD.

Do not invent content to fill unavailable sections.
State clearly when reliable evidence, human data, pharmacology, or regulatory information is unavailable.
Do not imply completeness when a page is a preliminary profile.
## 9. Internal Linking and Discovery
For every new public page:

- Add the canonical URL to `sitemap.xml`.
- Add appropriate homepage or category discovery.
- Add relevant related-molecule links.
- Verify inbound and outbound internal links.
- Verify fragment identifiers and their targets.
- Verify every referenced local asset.
- Preserve navigation labels, destinations, and visual consistency.

Avoid orphan pages.
Use relative links consistently with the existing GitHub Pages subpath deployment.
When removing a page is explicitly approved, update links, sitemap coverage, and redirects together.
## 10. SEO Requirements
Every indexable public page must include:

- A unique, descriptive `<title>`.
- A unique meta description.
- One correct canonical URL.
- Open Graph metadata.
- Twitter Card metadata.
- A semantic heading hierarchy with one clear primary heading.
- A stable, descriptive URL.
- A breadcrumb.
- Contextual internal links.
- Appropriate JSON-LD that matches visible content.
- Sitemap inclusion.
- Descriptive, accessible link labels.

Use Schema.org types only when all applicable requirements are met.
Keep canonical hosts and paths consistent with the production GitHub Pages URL.
Avoid duplicate metadata, keyword stuffing, unsupported medical claims, misleading schema, and duplicate canonical URLs.
Do not add structured data solely to pursue rich results when the visible page does not support it.
## 11. Accessibility and UX
Require:

- Mobile-first, responsive design.
- Semantic HTML before ARIA.
- Full keyboard accessibility.
- Visible focus states.
- Descriptive form, control, and navigation labels.
- Correct button types and native control semantics.
- Logical heading order.
- Useful alt text for informative images and empty alt text for decorative images.
- No information conveyed by color alone.
- Reduced-motion support for nonessential animation.
- Readable typography, spacing, contrast, and touch targets.
- Progressive enhancement when JavaScript is unavailable.
- WCAG 2.2 AA conformance where practical.

Do not add fake forms, inert controls, keyboard traps, or decorative ARIA.
Test changed interactions at narrow and wide viewport sizes.
## 12. Performance
Prefer:

- Minimal, deferred JavaScript.
- Reusable CSS and existing design tokens.
- Appropriately sized and compressed assets.
- Native lazy loading for below-the-fold media where appropriate.
- Efficient, semantic DOM structure.
- Progressive enhancement and native browser capabilities.

Avoid unnecessary dependencies, duplicate CSS, oversized images, and unjustified render-blocking assets.
Do not use JavaScript where native HTML or CSS provides equivalent accessible behavior.
Preserve static deployability unless a migration is explicitly approved.
## 13. Git Workflow
For every task:

1. Inspect the repository, instructions, branch, and status.
2. Create or use one task-specific branch; never work on `main`.
3. Implement the smallest coherent change.
4. Run applicable validation.
5. Inspect the full diff and changed-file list.
6. Commit with a focused Conventional Commit message.
7. Update the existing task PR or create exactly one dedicated PR.
8. Never push directly to `main`.

Allowed commit prefixes include `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, and `ci:`.
Keep commits small, reviewable, and limited to one concern.
Do not rewrite shared history unless maintainers explicitly request it.
## 14. Pull Request Standard
Every pull request must describe:

- Objective and scope.
- Files changed and implementation approach.
- Scientific considerations.
- Safety and regulatory considerations.
- SEO and discoverability impact.
- Accessibility and responsive-design impact.
- Exact tests and checks run.
- Known limitations and unperformed validation.
- Screenshots for perceptible UI changes.
- Sitemap and internal-link status.
- Rollback considerations.

Keep the PR limited to its stated objective.
Never merge with failing required checks.
## 15. Quality Gates
Before completing a task:

- Run `git diff --check`.
- Validate modified HTML.
- Validate YAML when YAML changes.
- Validate sitemap XML when `sitemap.xml` changes.
- Parse every modified JSON-LD block.
- Check affected internal links, fragments, and local assets.
- Run existing automated tests and relevant repository checks.
- Inspect the complete diff and changed-file list.
- Confirm no unrelated changes are present.
- Confirm the working tree is clean after commit.

Use the strongest available validation appropriate to the change.
If browser tooling is unavailable, state explicitly that visual validation was not performed.
Never convert a failed agent check into a warning unless an external environment limitation caused it.
## 16. GitHub Actions
Treat CI failures as product defects unless evidence demonstrates an infrastructure failure.
Do not suppress a failing rule merely to obtain a green build.

When workflows change:

- Preserve least-privilege permissions.
- Pin stable major action versions or immutable revisions as repository policy requires.
- Avoid insecure compatibility flags and untrusted script interpolation.
- Document new checks and their expected output.
- Match the workflow to the current static GitHub Pages architecture.
- Validate workflow syntax and event behavior.
## 17. Roadmap
`ROADMAP.md` is the single source of truth for prioritization and sequencing.
Do not duplicate the full roadmap in this manual, issues, or implementation notes.
If `ROADMAP.md` is unavailable or conflicts with an approved task, record the limitation and seek maintainer direction.
## 18. Forbidden Changes
The following are prohibited:

- Fabricated science, citations, or regulatory claims.
- Medical-treatment, self-medication, or product-sourcing guidance.
- Direct pushes to `main`.
- Unrelated refactors or scope expansion.
- Silent public URL or canonical URL changes.
- Removal of required sitemap coverage.
- Removal of canonical tags.
- Removal of JSON-LD without a valid replacement or documented justification.
- Disabling checks, rules, or tests to hide defects.
- Claims of success without command output, review evidence, or disclosed limitations.
## 19. Completion Checklist
Every completed task must confirm:

- [ ] Scope matches the request and no unrelated files changed.
- [ ] Safety rules were followed.
- [ ] Scientific claims are supported and evidence classes are distinct.
- [ ] Public and canonical URLs were preserved or explicitly approved.
- [ ] Metadata is complete for affected public pages.
- [ ] Structured data is appropriate and valid.
- [ ] Sitemap coverage is correct.
- [ ] Internal links, fragments, and local assets are correct.
- [ ] Accessibility and keyboard behavior were considered.
- [ ] Responsive behavior was considered.
- [ ] Applicable tests and quality gates were run.
- [ ] Failures, omissions, and limitations were reported honestly.
- [ ] The commit is focused and the PR is ready for review.
