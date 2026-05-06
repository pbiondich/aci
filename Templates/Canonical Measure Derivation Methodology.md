# Canonical Measure Derivation Methodology

## Overview

The 25 canonical measures (CM-01 through CM-25) were derived bottom-up from raw study measures extracted across 54 articles in the ACI Evidence Review corpus. This document describes the derivation process, the linkage validation approach, and known limitations.

## Step 1: Raw Measure Extraction

Each article in the `Articles/` directory contains a **Study Measures** table listing every outcome measure reported in the paper. These tables were populated during full-text article review using the Article Review Template. Each row captures the measure name, its reported value, statistical significance (where available), and the D&M dimension(s) it maps to.

**Result:** 494 raw measure rows across 54 articles.

## Step 2: Bottom-Up Clustering

Raw measures were grouped into canonical constructs based on conceptual similarity. For example, "Time in Notes per Appointment," "Documentation Time (seconds)," "Post-Edit Time," and "Notetaking Time Reduction" all describe the same underlying construct, the time spent producing clinical documentation, and were clustered into **CM-04 Documentation Time**.

Clustering was performed iteratively:
1. Initial grouping by conceptual similarity and D&M dimension
2. Review for overlap and splitting where constructs were too broad
3. Naming each cluster with a descriptive canonical measure title
4. Assigning a CM-XX identifier

**Result:** 25 canonical measures, each representing a distinct evaluative construct.

## Step 3: Canonical Measure Documentation

Each canonical measure was documented in a dedicated markdown file in `Canonical Measures/` with the following sections:

- **Definition** : what the measure captures and how it is distinct from related measures
- **Measurement Methods** : table of specific instruments, scales, and data sources used across the corpus
- **Aliases Used in Literature** : bulleted list of every name variant encountered, with article citations and reported values where available
- **Key Note** : interpretive commentary on the most important findings, methodological concerns, or cross-study patterns
- **Papers Measuring This** : complete list of articles in the corpus that measure this construct


## Known Limitations

1. **Clustering subjectivity:** The grouping of raw measures into canonical measures involved judgment calls. Different reviewers might draw boundaries differently (e.g., whether "Job Satisfaction" belongs in CM-03 Professional Fulfillment or CM-15 Provider Satisfaction).

2. **Alias completeness:** The keyword matching in Step 4 depends on the alias lists being comprehensive. New terminology in future articles may not match existing patterns.

3. **Qualitative vs. quantitative:** Some links involve qualitative mentions of a construct (e.g., physicians describing accuracy concerns in interviews) rather than quantitative measurement. These are included but represent weaker evidence.

4. **One-directional validation:** This process checks whether articles that measure a construct are listed in the CM. It does not check the reverse: whether articles listed in a CM actually measure that construct. A future reverse validation pass would strengthen confidence.

## Step 6: Automated Linkage Tooling

In an attempt to automate this process for new articles entering the corpus, two automated tools were built:

### `scripts/link-article.js`, Article Linkage Tool

Reads an article's Study Measures table and ensures the article is properly linked in all relevant Canonical Measure and D&M Dimension files.

```bash
# Check a single article (read-only):
node scripts/link-article.js "Articles/Author Year - Title.md"

# Fix a single article:
node scripts/link-article.js --fix "Articles/Author Year - Title.md"

# Check all 54 articles:
node scripts/link-article.js --all

# Fix all articles:
node scripts/link-article.js --all --fix
```

The tool uses regex pattern matching against a curated keyword index for each CM (defined in `CM_PATTERNS`) and checks D&M dimension tags from the Study Measures table columns. Known false positives are listed in a `SUPPRESS` array and are skipped automatically.

### `scripts/extract-data.js`, Build-Time Validation

The extraction script now runs `link-article.js --all` as a post-build validation step. If any gaps are detected, it prints a warning with instructions. This ensures gaps are caught during the CI build even if the reviewer forgets to run the linkage tool manually.

### D&M Dimension Linkage

The linkage tool handles both canonical measure and D&M dimension linkage in a single pass.

## Recommended Maintenance

- **When adding a new article:** After completing the article review, run:
  ```bash
  node scripts/link-article.js --fix "Articles/<filename>.md"
  node scripts/extract-data.js
  ```
  This will automatically link the article to all relevant CMs and dimensions, then regenerate the webapp JSON. See the Post-Review Linkage Checklist in the Article Review Template.

- **When adding a new canonical measure:** Add keyword patterns to the `CM_PATTERNS` object in `scripts/link-article.js`, then run `--all --fix` to retroactively link all articles.

- **When discovering a false positive:** Add the `[citation, cmId]` pair to the `SUPPRESS` array in `scripts/link-article.js`.

- **Periodic re-validation:** Run `node scripts/link-article.js --all` periodically (especially after adding multiple articles) to catch new gaps. The CI build will also flag these automatically.

---
*Templates | ACI Evidence Review Vault | Created 2026-04-15, updated with automated tooling 2026-04-15*
*Method: Documented from initial derivation process, April 2025 linkage validation, and automated tooling build*

*Licensed under [CC BY-SA 4.0](../LICENSE) — [github.com/pbiondich/aci](https://github.com/pbiondich/aci)*
