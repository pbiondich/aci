# Article Review

---

## Article Title
Evaluating ambient artificial intelligence documentation: effects on work efficiency, documentation burden, and patient-centered care

## Author(s)
Guo, Yawen; Wang, Jiayuan; Hu, Di; Tam, Steven; Gilman, Charles; Chow, Emilie; Perret, Danielle; Pandita, Deepti; Zheng, Kai

## DOI
[10.1093/jamia/ocaf180](https://doi.org/10.1093/jamia/ocaf180)

## Journal / Source
Journal of the American Medical Informatics Association (JAMIA) | Vol. 33, No. 2 | 2026 | pp. 273–282. Published online October 16, 2025. University of California, Irvine (UCI Health). SQUIRE reporting guidelines. QI study exempt from IRB.

## Ambient Product(s) Evaluated
**DAX Copilot** (Nuance/Microsoft) and **Abridge** — both deployed at UCI Health and **pooled for analysis** (vendor-specific differences not assessed). Of 65 matched survey respondents: Abridge n=41 (63%), DAX Copilot n=24 (37%). This is the **full mixed-methods follow-up to Guo 2025** (Paper 2 in corpus, MEDINFO conference paper from the same UCI Health pilot — same team, same site, now with 167 EHR metric participants and 65 survey participants over a longer period).

## Clinical Setting
UCI Health (University of California, Irvine) — major academic health system in Southern California (Irvine, Newport Beach, Orange, Fountain Valley). QI pilot launched December 2023; data analyzed December 2023 through April 2025. 319 physicians enrolled. EHR metrics: 167 met inclusion criteria (≥4 weeks tool use, ≥10 notes). Surveys: 65 completed both pre- and post-implementation surveys (~4 months apart). Clinicians from primary care and specialty care; medical trainees included. Epic Haiku mobile app or web browser integration. DAX/Abridge both integrated with Epic.

## Evidence Level
Observational (prospective mixed-methods QI study — EHR telemetry + pre/post survey + thematic analysis)

## Data Source(s)
EHR data (Epic Signal — 5 metrics: note length, time per note, daily documentation time, time per appointment, same-day closure rate) | Survey (KLAS Arch Collaborative instrument — Likert + 0–10 scales + open-ended) | Qualitative (thematic analysis of open-ended survey responses)

## Article Summary
This mixed-methods QI study at UCI Health is the full follow-up to the MEDINFO conference paper (Guo 2025, Paper 2 in corpus) — significantly expanded with 167 EHR metric participants, 65 matched survey respondents, KLAS Arch Collaborative benchmarked survey, and qualitative thematic analysis. Both DAX Copilot and Abridge pooled (63% Abridge, 37% DAX). EHR metrics: note time decreased from 6.37→5.58 min/note (p<.001), daily doc time 55.97→49.13 min (p<.001), time per appointment 9.91→8.82 min (p<.001). Note length increased modestly (7522→7862 chars, p<.001). **Same-day encounter closure rate did not change significantly** (high baseline ~77%; only physicians with ≥40 encounters/week analyzed, n=26). Benefits stabilized after month 1 — no further improvement at months 2 or 3. Survey (Table 3, 23 questions): 65 matched respondents, 52% primary care, 48% specialty care. Significant improvements across patient safety/care, clinical efficiency, EHR training, and system usability domains. Key documentation burden results: mental demand 6.71→6.11 (p=.031), effort 6.75→6.02 (p=.014); temporal demand (p=.055) and chart completion timing (p=.429) NOT significant. Several significant DiD differences between primary and specialty care: primary care improved more on implementation/training support (DiD=+0.49, p=.035); specialty care improved more on system availability (DiD=−0.59, p=.047). Qualitative themes (Table 4): (1) positive perceptions — reduced burden, enhanced patient focus, improved efficiency; (2) limitations — need for specialty-specific customization, workflow disruptions, accuracy/editing burden; (3) future expectations — inbox management AI, chart summarization, billing automation.

## Hypothesis
Explicit: ambient AI will improve work efficiency, reduce physician workload, and help mitigate burnout.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| **Average Time per Note (min)** | Epic Signal. 6.37→5.58 min (p<.001). ~12% reduction; ~14% relative decrease overall. Immediate improvement then stable. | [[NB - Net Benefits]] |
| **Total Daily Documentation Time (min/day)** | Epic Signal. 55.97→49.13 min (p<.001). ~6.8 min/day saved. | [[NB - Net Benefits]] |
| **Time per Appointment (min)** | Epic Signal. 9.91→8.82 min (p<.001). Includes all note types within encounter. | [[NB - Net Benefits]] |
| **Note Length (characters)** | Epic Signal. 7522→7862 chars (p<.001). Modest but significant increase — consistent with Guo 2025 and other corpus papers. | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| **Same-Day Encounter Closure Rate** | Epic Signal. **No significant change.** Only analyzed for providers with ≥40 notes/week; limited to 12-month dataset. Consistent null finding. | [[NB - Net Benefits]] |
| **Undivided Attention to Patients (survey)** | KLAS survey: Pre 2.70 → Post 3.45 (p<.001). Physicians more focused on patients. | [[NB - Net Benefits]], [[US - User Satisfaction]] |
| **Patient-Centered Care Delivery (survey)** | Pre 3.68 → Post 4.40 (p<.001). | [[NB - Net Benefits]] |
| **High-Quality Care Perception (survey)** | Pre 3.98 → Post 4.54 (p<.001). | [[NB - Net Benefits]] |
| **Patient Safety (survey)** | Pre 3.72 → Post 4.03 (p=.027). | [[NB - Net Benefits]] |
| **Clinical Practice Effectiveness (survey)** | Pre 3.66 → Post 4.28 (p<.001). | [[NB - Net Benefits]], [[US - User Satisfaction]] |
| **Overall Efficiency (survey)** | Pre 3.42 → Post 4.31 (p<.001). Large perceptual shift. | [[NB - Net Benefits]] |
| **Cognitive Demand (survey)** | Reduced: p=.031. | [[US - User Satisfaction]], [[NB - Net Benefits]] |
| **Documentation Effort (survey)** | Reduced: p=.014. | [[US - User Satisfaction]], [[NB - Net Benefits]] |
| **Primary vs. Specialty Care (DiD)** | Most survey changes consistent across both groups. Only exception: alerts preventing care-delivery mistakes showed significant DiD (DiD=−0.70, p=.040). | (methodological) |
| **Temporal Demand (survey)** | 0–10 scale. 7.07→6.58, p=.055 — NOT significant. Pace of note writing did not improve significantly despite time savings. | [[US - User Satisfaction]] |
| **Chart Completion Timing (survey)** | % of charts completed during or right after visits. 53.6%→55.8%, p=.429 — NOT significant. Consistent with objective same-day closure null finding. | [[NB - Net Benefits]] |
| **Specialty-Specific Workflow Support (survey)** | Pre 3.75 → Post 4.23 (p=.003). Significant overall, but specialty care subgroup only trended (p=.107) while primary care significant (p=.003). | [[SerQ - Service Quality]], [[US - User Satisfaction]] |
| **EHR Training and Implementation (survey)** | Multiple items improved significantly. Initial training preparedness (p=.016), ease of learning (p<.001), ongoing training helpfulness (p=.046), org implementation support (p=.004), personal mastery (p=.005), specialty-specific training (p=.019). DiD significant for org support: primary care improved more (DiD=+0.49, p=.035). | [[SerQ - Service Quality]] |
| **System Usability (survey)** | System availability improved (p=.005); internal integration (p=.002); external integration (p=.010). System availability DiD: specialty care improved more (DiD=−0.59, p=.047). | [[SQ - System Quality]], [[SerQ - Service Quality]] |
| **Qualitative Themes (Table 4)** | (1) Positive: streamlined workflow, reduced mental fatigue, enhanced patient focus. (2) Limitations: need specialty-specific customization (neurology exam, psychiatry language, surgical workflows), workflow disruptions (phone vs. workstation, app switching), accuracy/editing burden. (3) Future expectations: AI for inbox management, chart summarization, billing, problem list optimization. | [[SerQ - Service Quality]], [[U - Use]] |

---
*Reviewed by Iris | Source: JAMIA 2026 | DOI: 10.1093/jamia/ocaf180 | Template v2.0 | Full text reviewed ✅ (10-page PDF confirmed)*
*📍 Direct companion to Guo 2025 (Paper 2 in corpus, MEDINFO conference paper). Same UCI Health pilot, same team (Yawen Guo, Kai Zheng), significantly expanded: 167 EHR participants vs. 42 in the conference paper, plus matched surveys using KLAS Arch Collaborative instrument, plus qualitative analysis. The full study to which MEDINFO was a preview.*
*📍 Both DAX Copilot and Abridge pooled — vendor differences not assessed. Same caveat as original Guo 2025 conference paper. Of matched survey respondents: 63% Abridge, 37% DAX.*
*📍 Benefit stabilization: Improvements appear in month 1 and then stabilize. Consistent with Evans 2025 (plateau at 6 weeks) and Guo 2025 MEDINFO (largest change at month 1). A consistent field-wide pattern.*
*📍 Same-day closure rate null: Another null finding on a WOW/workflow closure metric. Joins the consistent pattern of self-report vs. objective WOW divergence across the corpus.*
*📍 KLAS Arch Collaborative survey allows benchmarking against national/institutional data — methodological strength for the field that most one-off surveys don't have.*
*📍 Specialty vs. primary care: No significant difference in most survey outcomes (DiD not significant). Contrasts with Prasad 2025 (non-primary care benefited far more) — but Prasad used human scribes in a single academic health system, so the contexts differ.*
