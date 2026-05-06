# Article Review

---

## Article Title
Ambient artificial intelligence scribes: physician burnout and perspectives on usability and documentation burden

## Author(s)
Shah, Shreya J.; Devon-Sand, Anna; Ma, Stephen P.; Smith, Margaret; Jeong, Yejin; Crowell, Trevor; Delahaie, Clarissa; Hsia, Caroline; Lin, Steven; Shanafelt, Tait; Pfeffer, Michael A.; Sharp, Christopher; Garcia, Patricia

## DOI
[10.1093/jamia/ocae295](https://doi.org/10.1093/jamia/ocae295)

## Journal / Source
Journal of the American Medical Informatics Association (JAMIA) | Vol. 32, Issue 2 | Pages 375–380 | 2025 (published December 2024, PMID: 39657021; PMC: PMC11756571)

## Ambient Product(s) Evaluated
**Nuance DAX Copilot** — integrated with Epic EHR (Epic Haiku mobile app) at Stanford Health Care. The tool generated draft notes in 4 SmartSections: HPI, physical exam, results, and assessment and plan. Attestation SmartSection also included.

## Clinical Setting
Outpatient ambulatory — Stanford Health Care (academic medical center), both faculty and community practice networks. Primary care (66%) and ambulatory specialties (34%): cardiology, gastroenterology, rheumatology, neurology, ophthalmology, otolaryngology, geriatrics. October 2023–January 2024 (3-month pilot, 48 physicians).

## Evidence Level
Quality Improvement (prospective)

## Data Source(s)
Survey/self-report (pre/post paired survey); product telemetry (utilization data)

## Article Summary
One of the earliest published QI studies of a large-scale institutional ambient AI scribe implementation. 48 physicians at Stanford Health Care used DAX Copilot for 3 months. Paired pre/post survey (n=38) found large statistically significant reductions in physician task load (PTL: −24.42, p<.001) and burnout/work exhaustion (PFI-WE: −1.94 on 10-point scale, p<.001), and moderate improvement in usability (SUS: +10.92, p=.003). Post-survey (n=46): 98% found DAX easy to use; 65% reported improved documentation efficiency; 52% improved documentation quality; median perceived time savings 20 minutes per half day of clinic. This is the companion QI paper to Ma 2025 (JAMIA, ocae304) — together they form the full Stanford DAX pilot picture (quantitative outcomes + physician perspectives).

## Hypothesis
Not explicitly stated. Objective: evaluate physician perspectives on usability, perceived utility, and impact on physician burden and burnout following ambient AI scribe pilot implementation.

## Study Measures

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Physician Task Load (PTL) | 4-item adapted NASA TLX; 0–100 scale, lower = less cognitive burden | US, [[II - Individual Impact]] |
| Work Exhaustion (PFI-WE) | 4-item work exhaustion subscale of Stanford PFI; 0–10 scale, lower = less burnout | US, [[II - Individual Impact]] |
| System Usability Scale (SUS) | 10-item standardized usability instrument; 0–100 scale | US, SQ |
| UTAUT items | Adapted Unified Theory of Acceptance and Use of Technology scale (perceived utility, ease of use, peer interest, long-term intent) | U, US |
| Perceived time savings per half day | Self-reported time savings/additions; median and range captured | [[II - Individual Impact]] |
| Post-survey perceived improvements | Efficiency, documentation quality, ease of use (post-survey only) | US, IQ (indirect) |

---

## Key Findings

**Paired pre/post (n=38):**
- **PTL (burden):** Pre-pilot mean 68.98 → post-pilot 44.56 (−24.42; Cohen's d = 1.28; p<.001) — **large effect size**
- **Burnout (PFI-WE):** Pre-pilot 7.47 → post-pilot 5.53 (−1.94; Cohen's d = 0.86; p<.001) — **large-to-moderate effect size**
- **SUS usability:** Pre-pilot 58.09 (compared to current documentation tools) → post-pilot 69.01 for DAX (+10.92; Cohen's d = 0.69; p=.003) — **moderate effect size**

**Post-survey only (n=46):**
- 98% found DAX Copilot easy to use
- 65% reported improved efficiency with documentation tasks
- 52% reported improved quality of clinical documentation
- 65% reported using DAX Copilot often when completing documentation
- 80% reported colleagues were interested in using DAX
- 78% reported seeing themselves using DAX in long-term practice
- **Median perceived time savings: 20 minutes per half-day of clinic** (range: −90 to +90 min)

**UTAUT items:** Optimism about DAX utility and utilization was present pre-pilot and remained stable post-pilot. Ease-of-use perceptions improved significantly.

## Contextual Notes / Limitations

- **Selection bias:** Physicians who expressed interest in the tool were recruited — likely skewed toward more positive early adopters. This is explicitly flagged as a limitation.
- **Small n = 38 paired:** Adequate for hypothesis testing but limited for subgroup analysis.
- **No objective time data:** All time savings are self-reported. Compare to Ma 2025 (same Stanford pilot) which adds objective EHR telemetry data showing −6.89 min/day documentation time.
- **Rolling recruitment + license reallocation:** 2 licenses reassigned mid-pilot; unequal exposure time.
- **Documentation quality claim (52% improved):** Self-reported, not objectively validated with PDQI or reviewer assessment.
- **Community vs. faculty:** 61% community practice physicians — generalizability beyond academic medical center settings is meaningful.

## D&M Analysis

- **US (User Satisfaction):** Strong self-reported satisfaction signals on burnout, task load, usability, ease of use, and long-term intent. Large effect sizes on validated instruments.
- **NB (Net Benefits):** Burnout and task load reductions are the core net benefit claimed. Median 20 min/half-day time savings (self-report).
- **SQ (System Quality):** SUS improvement is moderate. 98% found it easy to use — favorable usability signals.
- **IQ (Information Quality):** 52% of physicians perceived improved documentation quality — but this is not objective. No note quality audit in this paper.
- **U (Use/Adoption):** 78% see long-term use; 80% report peer interest — signals for sustained adoption.

## Companion Papers

- **Ma 2025 (JAMIA, ocae304)** — same Stanford DAX pilot, quantitative utilization and objective EHR time data. Together form the complete Stanford QI picture.
- **Shah 2025 (JAMA Network Open, ocae1904)** — qualitative physician interview study from same Stanford DAX pilot. All three together = the most comprehensive single-site mixed-methods corpus entry.

---

*Reviewed by Iris | Source: JAMIA 2025 (published 2024) | DOI: 10.1093/jamia/ocae295 | PMC: 11756571 | Template v2.0 | Full text reviewed ✅ (via PMC open access)*
*📍 Note on CSV: CSV #38 lists this as "Shah 2024" (manuscript year) while journal issue is JAMIA 2025, Vol 32(2). Published online December 2024. All fine — same paper.*
*📍 CSV #37 "Stephen 2024" with DOI 10.1093/jamia/ocae304 = Ma 2025 (already abstracted). "Stephen P. Ma" is the full name — first name "Stephen." No separate paper needed.*
*📍 Large effect sizes (Cohen's d = 1.28 for task load) are notable — but selection bias in recruitment is a real confounder. Compare carefully with Prasad 2025 where <2yr virtual scribe use was strongly negatively associated with satisfaction, and with Olson 2025 burnout OR for more rigorous findings.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
