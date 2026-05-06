# Article Review Template

> ⚠️ **RULE: Full text required before abstraction.** Do NOT complete this template using abstract only. If full text is inaccessible (paywall, no PDF, no DOI), mark the article as `🚫 FULL TEXT UNAVAILABLE` and skip: do not guess or extrapolate from the abstract. Flag for Paul to provide the PDF directly.

---

## Article Title
*(Full title of the article)*

## Author(s)
*(Last, First; Last, First; ...)*

## DOI
*(e.g., 10.1000/xyz123)*

## Journal / Source
*(Journal name, volume, issue, year, or conference/report name for grey literature)*

## Ambient Product(s) Evaluated
*(Name the specific ACI/ambient listening tool(s) studied, e.g., Nuance DAX, Suki, Abridge, Ambience Healthcare, etc. Note "not specified" if unnamed.)*

## Clinical Setting
*(Describe the care environment, e.g., outpatient primary care, emergency department, inpatient, multi-specialty, rehabilitation, etc.)*

## Evidence Level
*(Select one: RCT | Observational | Quality Improvement | Qualitative | Simulation | Scoping/Systematic Review | Grey Literature)*

## Data Source(s)
*(Select all that apply: Product telemetry | EHR data | Survey/self-report | Claims/billing | Simulation | Mixed)*

## Article Summary
*(2–4 sentence narrative overview of what the study did, who was involved, and what it found.)*

## Hypothesis
*(State the study hypothesis if explicitly described. If not stated, write "Not explicitly stated.")*

## Study Measures

For each measure, provide a brief description (≤50 words) of what it is specifically trying to capture, and tag it with the relevant DeLone & McLean IS Success Model dimension(s).

**D&M Dimensions reference:**
- **SQ** = System Quality *(reliability, accuracy, latency of the tool)*
- **IQ** = Information Quality *(accuracy, completeness of generated notes)*
- **SerQ** = Service Quality *(support, onboarding, integration)*
- **U** = Use / Intention to Use *(adoption, utilization, frequency)*
- **US** = User Satisfaction *(provider experience, perceived usefulness, burnout)*
- **NB** = Net Benefits *(efficiency gains, financial, coding, patient outcomes)*

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| *(Measure name)* | *(≤50-word description of what this measure captures)* | *(SQ / IQ / SerQ / U / US / NB)* |
| *(Measure name)* | *(≤50-word description)* | *(D&M tag)* |
| *(Add rows as needed)* | | |

---

## Post-Review Linkage Checklist

After completing this review, run the linkage tool to ensure this article is properly connected to all relevant Canonical Measures and D&M Dimensions:

```bash
# Check for missing links (read-only):
node scripts/link-article.js "Articles/<filename>.md"

# Fix missing links automatically:
node scripts/link-article.js --fix "Articles/<filename>.md"

# Then regenerate the webapp JSON:
node scripts/extract-data.js
```

The linkage tool will:
1. Read the Study Measures table from this article
2. Pattern-match each measure against the 25 Canonical Measure alias indexes
3. Check which D&M Dimensions are tagged in the measures table
4. Add this article to any CM or Dimension paper list where it's missing

> See `Templates/Canonical Measure Derivation Methodology.md` for full methodology documentation.

---
*Template version: 3.0, Updated 2026-04-15*

*Licensed under [CC BY-SA 4.0](../LICENSE) — [github.com/pbiondich/aci](https://github.com/pbiondich/aci)*
