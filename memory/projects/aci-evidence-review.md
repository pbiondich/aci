# ACI Evidence Review

**Repo:** https://github.com/pbiondich/aci
**Live site:** https://pbiondich.github.io/aci/
<<<<<<< HEAD
**Current version:** v.18
=======
**Current version:** v.20
>>>>>>> 7a868b8 (Linkage validation: fix 25 missing CM links, update names and counts)
**Status:** Active

## What It Is
A systematic literature review of 54 studies evaluating Ambient Clinical Intelligence tools, organized using the DeLone & McLean IS Success Model. Includes an Obsidian vault (source of truth), a Word report, and an interactive single-page web application on GitHub Pages. Also includes 12 draft measures identified through stakeholder gap analysis, pending validation via key informant interviews.

## Architecture
- **Obsidian vault** — markdown files are the single source of truth
  - `Articles/*.md` — 54 study articles
  - `Canonical Measures/CM-*.md` — 25 canonical measures (directory renamed from `Measures/`)
  - `Draft Measures/DM-*.md` — 12 draft measures
  - `D&M Dimensions/*.md` — 6 D&M dimensions
  - `Templates/` — includes Article Review Template, D&M Mapping Guide, Draft Measure Template
- **Extraction script** — `scripts/extract-data.js` (Node.js) reads vault markdown, outputs JSON to `docs/data/`
  - Parses articles, canonical measures, dimensions, and draft measures
  - Handles wiki-link pipe syntax (`[[long title|short title]]`) for clean alias display
- **Web app** — `docs/index.html`, single HTML file, React 18.2.0 via CDN (production UMD), no build step
- **GitHub Action** — `.github/workflows/build-site.yml`, auto-regenerates JSON on push to main
  - Watches: `Articles/**`, `Canonical Measures/**`, `Draft Measures/**`, `D&M Dimensions/**`, `Templates/**`, `scripts/**`, `docs/index.html`
- **GitHub Pages** — serves from `/docs` folder on main branch, `.nojekyll` file present

## Key Design Decisions
- Zero build step: no Babel, no Recharts, no npm. Single HTML file + JSON data files + React CDN
- Pure CSS/HTML chart components (HBarChart, VBarChart, DonutChart) — no charting library
- Client-side markdown rendering via `mdToReact()` / `MdText` component (handles **bold**, *italic*, [[wikilinks]], [links](url))
- `cleanProduct()` normalizer for verbose product field text
- `extractSection()` uses string slicing (not regex \Z) to handle last-section-in-file
- Draft measures are visually distinct from canonical measures (orange left-border, amber warning banner)

## Webapp Tabs (in order)
1. Overview
2. Canonical Measures
3. Decision Guide
4. Draft Measures
5. Article Explorer
6. D&M Framework
7. Study Corpus
8. Level of Rigor

## Canonical Measure Detail Sections
1. Definition
2. Typical Findings
3. Methodological Concerns
4. Aliases Used in Literature (bulleted list)

## Draft Measure Detail Sections
1. Definition
2. Stakeholder Relevance
3. Rationale
4. Related Canonical Measures
5. Key Questions for Interviews
6. Example Measurement Methods

## Decision Guide
- Stakeholder role filter buttons: CMIO, CFO, COO, Chief People Officer, All Roles
- Defaults to CMIO view
- Filters both canonical measures and draft measures by selected role
- Canonical measures mapped to roles via `cmRoleMap`
- Draft measures mapped via stakeholder tags in the markdown
- Evidence strength indicators: green (10+ papers), yellow (5-9), red (<5)
- Two sections: "Literature-Derived Measures" and "Additional Draft Measures"
- Stakeholder colors: CMIO=#1565C0, CFO=#2E7D32, COO=#E65100, CPO=#6A1B9A

## Article Explorer
- Columns: Year (6%), Title (50%), Design (14%), Product (20%), Measures (10%)
- Title column wraps fully (no truncation)
- Product/Design columns truncate with ellipsis
- Responsive breakpoints at 900px and 600px
- Click row to open modal with full details
- Modal fields use MdText for markdown rendering

## Draft Measures (DM-01 through DM-12)
Proposed additional measures identified through stakeholder gap analysis brainstorming. Pending key informant validation with CFO, CMIO, CPO, COO.

| ID    | Name                                     | Stakeholders   |
| ----- | ---------------------------------------- | -------------- |
| DM-01 | Total Cost of Ownership                  | CFO, COO       |
| DM-02 | Malpractice and Liability Exposure       | CFO, CMIO, COO |
| DM-03 | Staff Turnover Cost Avoidance            | CPO, CFO       |
| DM-04 | Specialty-Specific Performance Variation | CMIO, COO      |
| DM-05 | Structured Data Integrity                | CMIO, COO      |
| DM-06 | Clinician Edit Burden                    | CMIO, CPO      |
| DM-07 | Equity of Impact Across Roles            | CPO, COO       |
| DM-08 | Onboarding and Training Burden           | CPO, COO, CMIO |
| DM-09 | System Reliability and Downtime          | COO, CMIO      |
| DM-10 | Scalability Evidence                     | COO, CFO       |
| DM-11 | Workflow Disruption During Rollout       | COO, CFO, CPO  |
| DM-12 | Patient Consent and Opt-Out Burden       | COO, CMIO      |

## Version Convention
- Displayed in subtitle: `25 canonical measures derived from 494 raw measure rows across 54 papers | April 2026 | v.XX`
- HTML comment changelog at top of index.html
- Bump with every improvement

## Version History
- v.01 — Initial build (single-page React app with Recharts)
- v.02 — Added .nojekyll for GitHub Pages
- v.03 — Replaced Babel + Recharts with pure CSS/HTML charts (fixed blank page)
- v.04 — Renamed "Gold Standard" to "Best Relative Quality"
- v.05 — Fixed paper counts (parse from headings in extraction script)
- v.06 — Added GitHub Action for auto-regenerating JSON from markdown
- v.07 — Removed Silver/Bronze, now Moderate/Low tier labels
- v.08 — Cleaned up Product column (cleanProduct normalizer)
- v.09 — Reordered tabs
- v.10 — Added markdown rendering in Canonical Measures (mdToReact/MdText)
- v.11 — Applied markdown rendering to Article Explorer modal
- v.12 — Fixed extractSection regex bug (54/54 articles now have study measures)
- v.13 — Responsive Article Explorer table (dynamic column widths, mobile breakpoints)
- v.14 — Fixed title truncation (full titles wrap, removed 70-char limit)
- v.15 — Added "Aliases Used in Literature" section to canonical measure details
- v.16 — Data refresh: updated measure paper counts and concerns; corrected raw measure count 426→494; April 2026
- v.17 — Added Draft Measures tab and Decision Guide tab (stakeholder role filter: CFO/CMIO/CPO/COO)
- v.18 — Refined Draft Measures, reordered Decision Guide roles, renamed section headers, reordered detail sections
<<<<<<< HEAD
=======
- v.19 — URL hash routing for shareable tab links (e.g. #guide, #articles)
- v.20 — Added "Work in Progress" warning to Level of Rigor tab (scores are placeholder mockup, formal rubric planned)
>>>>>>> 7a868b8 (Linkage validation: fix 25 missing CM links, update names and counts)

## Key Files
| File | Purpose |
|------|---------|
| `docs/index.html` | Main web application (single file, all JS/CSS inline) |
| `scripts/extract-data.js` | Node.js extraction from vault markdown to JSON |
| `.github/workflows/build-site.yml` | CI: auto-regenerate JSON on push |
| `docs/data/articles.json` | 54 articles (~198KB) |
| `docs/data/measures.json` | 25 canonical measures (~28KB) |
| `docs/data/draft-measures.json` | 12 draft measures |
| `docs/data/dimensions.json` | 6 dimensions (~6KB) |
| `docs/.nojekyll` | Prevents Jekyll processing on GitHub Pages |
| `Templates/Draft Measure Template.md` | Template for new draft measures |
| `Evaluating Ambient Clinical Intelligence - Draft Report.docx` | Word document report |

## Future Considerations
- Individual Impact vs. Organizational Impact split of Net Benefits (1992 D&M model) — parked for later
- Key informant interviews to validate draft measures
- Potential "Vendor Claims vs. Evidence" view in Decision Guide
- Renumbering of DMs after list stabilizes post-interviews
<<<<<<< HEAD
=======
- Formal rigor scoring methodology — current scores are placeholder mockup values; need reproducible rubric (e.g. composite of study design, instrument validation, convergence, bias risk). Possible approach: compute composite from article-level data already in vault (study design, evidence level, paper count, convergence, validated instruments)
- Suki operational metrics mapping to canonical measures (see `Metrics for Suki - CM Mapped.xlsx` in workspace)

## URL Hash Routing
- Tabs are shareable via URL hash: `pbiondich.github.io/aci/#guide`, `#articles`, etc.
- Valid hashes: `#overview`, `#measures`, `#guide`, `#drafts`, `#articles`, `#framework`, `#corpus`, `#rigor`
- Reads hash on page load; updates hash on tab click; supports browser back/forward via `hashchange` listener
- Defaults to `#overview` if no hash or invalid hash

## Level of Rigor Tab
- Scores are **placeholder mockup values** (not validated)
- Amber "Work in Progress" banner displayed at top of tab
- Tier groupings: Best Relative Quality, Moderate, Needs Work / Low, Meta / Methodological
- Cross-Cutting Findings section at bottom (self-report/objective divergence, patient safety gap)
- Future: design formal scoring rubric

## Suki Operational Metrics Mapping
- Spreadsheet: `Metrics for Suki - CM Mapped.xlsx`
- Maps Suki EHR telemetry fields (across Epic, Cerner, Meditech, Athena) to canonical measures
- Strong direct matches (green): CM-04 (doc time), CM-05 (after-hours), CM-06 (chart closure), CM-07 (total EHR time), CM-20 (financial productivity), CM-21 (coding accuracy), CM-22 (patient volume)
- Indirect proxies (amber): `amendment_count` → CM-08, `total_signed_notes` → CM-13
- Removed: `ma_patient_count` (too weak an association with CM-21)
- Coverage gap: no Suki metrics map to note quality (CM-08–12), clinician wellbeing (CM-01–03), patient experience (CM-17–18), trust (CM-16), or safety (CM-19) — these require survey instruments or chart review, not EHR telemetry
>>>>>>> 7a868b8 (Linkage validation: fix 25 missing CM links, update names and counts)
