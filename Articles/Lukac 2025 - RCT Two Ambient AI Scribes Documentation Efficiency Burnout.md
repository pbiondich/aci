# Article Review

---

## Article Title
A Randomized-Clinical Trial of Two Ambient Artificial Intelligence Scribes: Measuring Documentation Efficiency and Physician Burnout

## Author(s)
Lukac, Paul J.; Turner, William; Vangala, Sitaram; Chin, Aaron T.; Khalili, Joshua; Shih, Ya-Chen Tina; Sarkisian, Catherine; Cheng, Eric M.; Mafi, John N.

## DOI
[10.1101/2025.07.10.25331333](https://doi.org/10.1101/2025.07.10.25331333)

## Journal / Source
medRxiv preprint (NOT peer-reviewed). Posted July 11, 2025. UCLA Health / David Geffen School of Medicine. Trial registered: ClinicalTrials.gov NCT06792890. License: CC-BY-NC-ND 4.0.

## Ambient Product(s) Evaluated
**Microsoft DAX** and **Nabla** — parallel three-arm RCT comparing both against a usual-care control. DAX used in 33.5% of 24,696 visits; Nabla used in 29.5% of 23,653 visits. No industry funding or competing interests declared.

## Clinical Setting
Large academic health system in California (UCLA Health). 313 outpatient physicians recruited via leadership referrals and department-wide emails; 238 qualified across 14 specialties. Randomized 1:1:1 (covariate-constrained, balancing time-in-note, baseline burnout, and clinic days/week) to DAX, Nabla, or usual-care control. Intervention period: November 4, 2024 – January 3, 2025 (2 months). IRB determined study did not constitute human subjects research (UCLA IRB-24-5425).

## Evidence Level
**RCT** (parallel three-arm pragmatic randomized-clinical trial) — ⭐ **First RCT of ambient AI scribes in the corpus.**

## Data Source(s)
EHR data (time-in-note from EHR telemetry) | Survey (Mini-Z 2.0 burnout, 4-item Task Load index, Professional Fulfillment Index – Work Exhaustion) | Safety/accuracy survey (Likert)

## Article Summary
This is the first randomized-clinical trial of ambient AI scribes, comparing Microsoft DAX and Nabla against a usual-care control across 238 outpatient physicians at UCLA over two months. Primary outcome was change in log time-in-note per EHR telemetry. Key findings: **Nabla reduced time-in-note by 9.5%** (95% CI: −17.2%, −1.8%; p=.02) versus control and by 7.8% versus DAX (p=.05). **DAX showed no significant change** versus control (−1.7%, p=.66). However, for burnout-related outcomes, **any scribe use** was associated with improvements: Mini-Z total increased +2.76 points (p<.001), task load decreased −35.8 points (p=.01), and work exhaustion decreased −0.27 (p=.01) — with no significant difference between DAX and Nabla on these outcomes. One Grade 1 (mild) adverse event was reported. Clinically significant inaccuracies were noted "occasionally" on a 5-point Likert scale (DAX 2.7, Nabla 2.8; p=.68 — not significantly different). Authors conclude that performance was "remarkably similar" across the two platforms, that Nabla had a modest efficiency advantage, and that physician vigilance for inaccuracies remains essential.

## Hypothesis
Explicit: to test the effectiveness of two AI scribes (DAX and Nabla) in reducing time spent writing notes and associated burnout in a randomized-clinical trial.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Time-in-Note (primary outcome, % change) | Log-transformed time per note from EHR telemetry. Nabla: −9.5% vs control (p=.02), −7.8% vs DAX (p=.05). DAX: −1.7% vs control (p=.66, NS). Dose-response expected but not reported by use quartile here. | [[NB - Net Benefits]] |
| Scribe Utilization Rate | DAX used in 33.5% of 24,696 visits; Nabla in 29.5% of 23,653 visits. Both ~30% utilization. Low adoption rate context for any time-savings interpretation. | [[U - Use]] |
| Mini-Z 2.0 Total Score (10–50, higher = better) | Validated burnout instrument. Both scribes combined: +2.76 [+1.41, +4.10], p<.001. No significant difference between DAX and Nabla. | [[US - User Satisfaction]] |
| Task Load Index (4-item, 0–400, lower = better) | Perceived workload scale. Any scribe: −35.8 [−63.7, −7.9], p=.01. Significant reduction. | [[US - User Satisfaction]] |
| Professional Fulfillment Index — Work Exhaustion (0–4, lower = better) | Validated work exhaustion subscale. Any scribe: −0.27 [−0.48, −0.07], p=.01. | [[US - User Satisfaction]] |
| Clinically Significant Inaccuracies (Likert 1–5) | Frequency of clinically significant inaccuracies rated by physicians (1=never, 5=always). DAX 2.7 [2.4–3.0], Nabla 2.8 [2.6–3.0]; p=.68. Both in the "occasionally" range. No significant difference between tools. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Adverse Events | One Grade 1 (mild) adverse event reported across entire study period. No serious events. | [[IQ - Information Quality]], [[NB - Net Benefits]] |

---
*Reviewed by Iris | Source: medRxiv preprint July 2025 | DOI: 10.1101/2025.07.10.25331333 | Template v2.0 | Full text reviewed ✅*
*⚠️ PREPRINT: Not peer-reviewed. Registered RCT (NCT06792890).*
*📍 First RCT in corpus — highest evidence level of any study reviewed so far. Landmark methodological contribution.*
*📍 DAX vs Nabla: Nabla wins on efficiency (−9.5% time-in-note); both equivalent on burnout/task load outcomes. "Remarkably similar performance" quote from authors. First head-to-head vendor comparison in the corpus.*
*📍 ~30% utilization rate for both tools during the 2-month period — low absolute adoption even among RCT arm clinicians. Efficiency benefit with Nabla at 30% utilization may understate potential at higher adoption.*
*📍 Inaccuracies "occasionally" for both tools (Likert ~2.7–2.8 on a 5-point scale). Consistent with Palm 2025 hallucination finding and reinforces need for physician review.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
