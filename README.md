# Evaluating Ambient Clinical Intelligence: A Structured Evidence Review

A systematic literature review of 54 studies evaluating Ambient Clinical Intelligence (ACI) tools, organized using the DeLone & McLean Information Systems Success Model. The review synthesizes 494 raw measure rows into 25 canonical measures across six evaluation dimensions, with an interactive web application for exploring the evidence.

**Live site:** [pbiondich.github.io/aci/v3](https://pbiondich.github.io/aci/v3/)

## Overview

ACI tools use artificial intelligence to listen to clinical encounters and automatically generate documentation. As adoption accelerates, the evidence base remains fragmented across heterogeneous study designs, inconsistent terminology, and varying outcome measures.

This project addresses that challenge by extracting and normalizing outcome measures from the published literature into a structured, navigable framework. The 25 canonical measures were derived bottom-up from the raw study data rather than imposed top-down, ensuring the taxonomy reflects what researchers actually measure.

The review also includes 12 draft measures identified through stakeholder gap analysis, representing constructs important to health system decision-makers (CFO, CMIO, COO, CPO) that lack sufficient coverage in the current literature. These are pending validation through key informant interviews.

## Methodology

The DeLone & McLean IS Success Model provides the organizing framework, with six dimensions:

- **System Quality (SQ)** : reliability, accuracy, and latency of the ACI tool
- **Information Quality (IQ)** : accuracy and completeness of generated notes
- **Service Quality (SerQ)** : support, onboarding, and integration
- **Use (U)** : adoption, utilization, and frequency of use
- **User Satisfaction (US)** : provider experience, perceived usefulness, burnout impact
- **Net Benefits (NB)** : efficiency gains, financial outcomes, patient safety

Each of the 54 articles was reviewed in full text and its outcome measures extracted, tagged with D&M dimensions, and clustered into canonical constructs. The derivation methodology, including a linkage validation process, is documented in `Templates/Canonical Measure Derivation Methodology.md`.

## Repository Structure

```
├── Articles/                        # 54 article review files (markdown)
├── Canonical Measures/              # 25 canonical measure definitions
├── Draft Measures/                  # 12 draft measures (pending validation)
├── D&M Dimensions/                  # 6 dimension overview files
├── Templates/                       # Article review template, methodology docs
├── scripts/
│   ├── extract-data.js              # Extracts vault markdown → JSON for webapp
│   └── link-article.js              # Validates article-to-measure linkage
├── docs/
│   ├── index.html                   # Classic webapp (single file, v1)
│   ├── v3/                          # Current webapp (multi-file JSX + Babel)
│   │   ├── index.html               # Shell: styles, fonts, Babel transpiler
│   │   ├── components.jsx           # Shared components and helpers
│   │   ├── tabs.jsx                 # Tab views (Overview through Rigor)
│   │   └── app.jsx                  # Root app, routing, data loading
│   └── data/                        # Generated JSON data files
│       ├── articles.json
│       ├── measures.json
│       ├── draft-measures.json
│       └── dimensions.json
└── .github/workflows/
    └── build-site.yml               # CI: auto-regenerates JSON on push
```

**Obsidian vault:** The markdown files in `Articles/`, `Canonical Measures/`, `Draft Measures/`, and `D&M Dimensions/` form an Obsidian vault and are the single source of truth. The webapp and JSON are derived from these files.

## Web Application

The interactive webapp at [pbiondich.github.io/aci/v3](https://pbiondich.github.io/aci/v3/) provides eight views:

1. **Overview** — key findings at a glance
2. **Canonical Measures** — detailed definitions, findings, and paper lists for all 25 measures
3. **Decision Guide** — stakeholder-filtered view (CMIO, CFO, COO, CPO) with evidence strength indicators
4. **Draft Measures** — proposed measures pending key informant validation
5. **Article Explorer** — searchable table of all 54 studies with detail modals
6. **D&M Framework** — dimension-level summaries and measure groupings
7. **Study Corpus** — corpus-wide statistics and distributions
8. **Level of Rigor** — tiered quality assessment (work in progress)

Tabs are shareable via URL hash (e.g., `pbiondich.github.io/aci/v3/#guide`).

### Architecture

The webapp uses a zero-build-step architecture: an HTML shell with separate JSX component files transpiled at load time by Babel Standalone, React 18.3.1 via CDN, and static JSON data files. No npm, no webpack, no local build tooling. The classic v1 single-file version remains available at [pbiondich.github.io/aci](https://pbiondich.github.io/aci/).

## Local Setup

**Prerequisites:** Node.js (for running scripts)

**Regenerate JSON from vault markdown:**
```bash
node scripts/extract-data.js
```

**Check article-to-measure linkage:**
```bash
node scripts/link-article.js --all
```

**Fix missing links automatically:**
```bash
node scripts/link-article.js --all --fix
```

**After adding a new article:**
```bash
node scripts/link-article.js --fix "Articles/<filename>.md"
node scripts/extract-data.js
```

## CI/CD

A GitHub Action (`.github/workflows/build-site.yml`) runs automatically on push to `main`. It fixes any missing article linkage, regenerates the JSON data files, and commits the changes. The site is served via GitHub Pages from the `/docs` folder.

## Contributing

This is an active research project. If you're interested in contributing article reviews, measure refinements, or technical improvements:

1. Article reviews should follow the template in `Templates/Article Review Template.md` and require full-text access (no abstract-only reviews)
2. After completing a review, run the linkage tool to ensure proper cross-referencing
3. The canonical measure taxonomy is documented in `Templates/Canonical Measure Derivation Methodology.md`

## Citation

If referencing this work, please cite as:

> Biondich, P. et al. (2026). Evaluating Ambient Clinical Intelligence: A Structured Evidence Review Using the DeLone & McLean IS Success Model. Available at: https://pbiondich.github.io/aci/v3/

## License

This work is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE).

You are free to:
- Share: copy and redistribute in any medium or format
- Adapt: remix, build on, and extend the work, including for commercial purposes

Under these conditions:
- Attribution: credit the authors and link to this repository
- ShareAlike: if you distribute a derivative, it must carry the same CC BY-SA 4.0 license

### Community norm

The canonical measures, article reviews, and evaluation framework here are meant to be a living resource for the ACI research community, not a finished product. If you use this work and extend it (new article reviews, refined measure definitions, additional draft measures, or a new evaluation dimension), contribute those additions back via a pull request or open an issue. The framework gets better when the people using it help keep it current.

There is no legal obligation to do so. But this project was built to grow. If your work builds on it, share what you added.
