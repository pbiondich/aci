# ACI Evidence Review

**Repo:** https://github.com/pbiondich/aci
**Live site:** https://pbiondich.github.io/aci/
**Current version:** v.15
**Status:** Active

## What It Is
A systematic literature review of 54 studies evaluating Ambient Clinical Intelligence tools, organized using the DeLone & McLean IS Success Model. Includes an Obsidian vault (source of truth), a Word report, and an interactive single-page web application on GitHub Pages.

## Architecture
- **Obsidian vault** — markdown files are the single source of truth
  - `Articles/*.md` — 54 study articles
  - `Measures/CM-*.md` — 25 canonical measures
  - `D&M Dimensions/*.md` — 6 D&M dimensions
- **Extraction script** — `scripts/extract-data.js` (Node.js) reads vault markdown, outputs JSON to `docs/data/`
- **Web app** — `docs/index.html`, single HTML file, React 18.2.0 via CDN (production UMD), no build step
- **GitHub Action** — `.github/workflows/build-site.yml`, auto-regenerates JSON on push to main
- **GitHub Pages** — serves from `/docs` folder on main branch, `.nojekyll` file present

## Key Design Decisions
- Zero build step: no Babel, no Recharts, no npm. Single HTML file + JSON data files + React CDN
- Pure CSS/HTML chart components (HBarChart, VBarChart, DonutChart) — no charting library
- Client-side markdown rendering via `mdToReact()` / `MdText` component (handles **bold**, *italic*, [[wikilinks]], [links](url))
- `cleanProduct()` normalizer for verbose product field text
- `extractSection()` uses string slicing (not regex \Z) to handle last-section-in-file

## Webapp Tabs (in order)
1. Overview
2. Canonical Measures
3. Article Explorer
4. D&M Framework
5. Study Corpus
6. Level of Rigor

## Canonical Measure Detail Sections
1. Definition
2. Typical Findings
3. Methodological Concerns
4. Aliases Used in Literature (bulleted list)

## Article Explorer
- Columns: Year (6%), Title (50%), Design (14%), Product (20%), Measures (10%)
- Title column wraps fully (no truncation)
- Product/Design columns truncate with ellipsis
- Responsive breakpoints at 900px and 600px
- Click row to open modal with full details
- Modal fields use MdText for markdown rendering

## Rigor Tier Labels
- "Best Relative Quality" (NOT "Gold Standard")
- "Moderate" (NOT "Silver")
- "Low" (NOT "Bronze")
- "Critically Low"
- "Meta/Methodological"

## Version Convention
- Displayed in subtitle: `25 canonical measures derived from 494 raw measure rows across 54 papers | March 2026 | v.XX`
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

## Key Files
| File | Purpose |
|------|---------|
| `docs/index.html` | Main web application (single file, all JS/CSS inline) |
| `scripts/extract-data.js` | Node.js extraction from vault markdown to JSON |
| `.github/workflows/build-site.yml` | CI: auto-regenerate JSON on push |
| `docs/data/articles.json` | 54 articles (~198KB) |
| `docs/data/measures.json` | 25 measures (~28KB) |
| `docs/data/dimensions.json` | 6 dimensions (~6KB) |
| `docs/.nojekyll` | Prevents Jekyll processing on GitHub Pages |
| `Evaluating Ambient Clinical Intelligence - Draft Report.docx` | Word document report |
