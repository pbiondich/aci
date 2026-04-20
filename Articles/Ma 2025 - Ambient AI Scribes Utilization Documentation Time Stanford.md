# Article Review

---

## Article Title
Ambient artificial intelligence scribes: utilization and impact on documentation time

## Author(s)
Ma, Stephen P.; Liang, April S.; Shah, Shreya J.; Smith, Margaret; Jeong, Yejin; Devon-Sand, Anna; Crowell, Trevor; Delahaie, Clarissa; Hsia, Caroline; Lin, Steven; Shanafelt, Tait; Pfeffer, Michael A.; Sharp, Christopher; Garcia, Patricia

## DOI
[10.1093/jamia/ocae304](https://doi.org/10.1093/jamia/ocae304)

## Journal / Source
Journal of the American Medical Informatics Association (JAMIA) | Vol. 32, No. 2 | 2025 | pp. 381–385. Brief Communication. Published December 17, 2024. Stanford University School of Medicine / Stanford Health Care.

## Ambient Product(s) Evaluated
**DAX Copilot** (Nuance Communications / Microsoft Corporation). Fully autonomous, EHR-integrated LLM-powered version (not the earlier human-reviewed iteration). Integrated with Epic via SmartSections (HPI, PE, Results, A&P). Mobile app (iPhone) records encounter; LLM generates note draft sections. Versions 10.6.4–10.7 used during study.

## Clinical Setting
Stanford Health Care ambulatory settings. 50 physicians onboarded via convenience/purposive sampling; 45 included in analysis (3 relinquished license, 2 excluded for lack of encounters). 8 specialties: Primary Care (56%), Rheumatology (16%), Otolaryngology (9%), Cardiology (7%), Gastroenterology (7%), Geriatrics, Ophthalmology, Orthopedics. 62% female, majority ≥10 years post-training. Baseline period: May 28–July 29, 2023 (2 months). Pilot period: October 29, 2023–January 27, 2024 (3 months). ⭐ **This is the quantitative companion paper to Shah 2025 (JAMA Network Open)** — same Stanford DAX pilot, same institution, same time period.

## Evidence Level
Observational (prospective QI study — before/after with EHR telemetry)

## Data Source(s)
EHR data (Epic Signal telemetry — note time, daily documentation time, after-hours EHR time, total EHR time) | Utilization audit logs

## Article Summary
This prospective QI study at Stanford Health Care quantified utilization and time savings for DAX Copilot across 45 physicians from 8 specialties over 3 months. Utilization was robust: DAX used in 55.25% of 17,428 encounters, with median per-physician utilization of 52.5%. Notable SmartSection usage: HPI most used (39.7%), A&P second (14.8%), while Results (2.6%) and PE (1.6%) were rarely used. Time outcomes: median time per note decreased by **−0.57 min** (4.86→3.64 min, T=−5.19, p<.001). Daily documentation time: −6.89 min/day (p<.001). **After-hours EHR time: −5.17 min/day (p=.01)** — notably, this is one of the few papers finding a significant after-hours time reduction (in contrast to Pearlman 2025 and Stults 2025 which found null results). Total EHR time: −19.95 min/day (p<.001). Significant inter-user heterogeneity noted — some physicians used DAX for nearly all encounters, others minimally. Authors explicitly caveat that EHR time measures use a 5-second inactivity timer and don't normalize after-hours/total EHR time to encounter volume, likely underestimating impact.

## Hypothesis
Explicit: to quantify utilization and impact on documentation time of a large language model-powered ambient AI scribe.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Utilization Rate (% of encounters) | DAX used in 55.25% of 17,428 encounters. Median per-physician: 52.5% (IQR 17.86–80.97%). High individual heterogeneity — some near 100%, others near 0%. | [[U - Use]] |
| SmartSection Utilization by Type | HPI most used (median 39.7%), A&P second (14.8%), Results (2.6%), PE (1.6%). Physicians adopt AI-generated HPI and A&P far more than physical exam or results sections. | [[U - Use]], [[IQ - Information Quality]] |
| Time per Note (min) | Median change −0.57 min (IQR −1.3 to −0.13); baseline 4.86 min → pilot 3.64 min. T=−5.19, p<.001. Statistically significant but modest absolute reduction (~12%). | [[NB - Net Benefits]] |
| Daily Documentation Time (min/day) | Median change −6.89 min/day (IQR −22.37 to −0.65). T=−4.48, p<.001. | [[NB - Net Benefits]] |
| After-Hours EHR Time (min/day) | Median change −5.17 min/day (IQR −21.32 to 3.82). T=−2.65, p=.01. **Significant after-hours reduction** — contrasts with null findings in Pearlman 2025 and Stults 2025. Note: not normalized to encounter volume. | [[NB - Net Benefits]] |
| Total EHR Time (min/day) | Median change −19.95 min/day (IQR −39.34 to −3.64). T=−5.85, p<.001. Largest absolute time saving in the corpus. Note: same caveat about non-normalization to encounter volume. | [[NB - Net Benefits]] |
| License Relinquishment | 3 of 50 (6%) voluntarily returned their license citing low perceived utility. Used as a proxy for non-adoption/rejection. | [[U - Use]], [[US - User Satisfaction]] |

---
*Reviewed by Iris | Source: JAMIA 2025 | DOI: 10.1093/jamia/ocae304 | Template v2.0 | Full text reviewed ✅*
*📍 Companion paper to Shah 2025 (Paper 11 in corpus) — same Stanford DAX pilot, same institution, same time period. Ma 2025 = quantitative EHR metrics; Shah 2025 = qualitative physician perspectives via RE-AIM/PRISM. Together they form a full mixed-methods picture of the Stanford DAX deployment.*
*📍 After-hours time finding: This paper shows a significant reduction (p=.01) while Pearlman 2025 and Stults 2025 show null results. Key difference: Ma 2025 does NOT normalize after-hours time to encounter volume (a known limitation the authors acknowledge). If physicians saw more patients during the pilot period, the per-encounter after-hours time may actually be similar or unchanged. Treat this after-hours finding with caution.*
*📍 SmartSection pattern: HPI and A&P are adopted; PE and Results are not. This aligns with where LLM-generated content adds most value (narrative synthesis vs. structured data entry). Important for implementation design.*
*📍 Notable co-authors: Tait Shanafelt (Director of WellMD Center, Stanford's physician wellness program — major burnout researcher) and Christopher Sharp (CMIO, Stanford Medicine). High-pedigree institutional paper.*
*📍 Authors explicitly identify "user phenotypes" as the key future research question — some physicians benefit greatly, others not at all. This framing is consistent with Prasad 2025 (specialty as moderator) and Lukac 2025 (dose-response).*
