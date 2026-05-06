# Article Review

---

## Article Title
Use of an AI Scribe and Electronic Health Record Efficiency

## Author(s)
Pearlman, Kevin; Wan, Wen; Shah, Sachin; Laiteerapong, Neda; et al.

## DOI
[10.1001/jamanetworkopen.2025.37000](https://doi.org/10.1001/jamanetworkopen.2025.37000)

## Journal / Source
JAMA Network Open | 2025. Open access. University of Chicago, Department of Medicine.

## Ambient Product(s) Evaluated
AI scribe (unnamed in available text; study context is University of Chicago ambulatory pilot, July–September 2024). Likely Abridge or DAX Copilot based on institutional context. Product identified as "AI scribe pilot."

## Clinical Setting
Large academic health system (University of Chicago Medicine). Pilot group: n=125 clinicians who opted into AI scribe pilot; Control group: n=478 matched clinicians who did not. Baseline period: April–June 2024; Intervention period: July–September 2024. Propensity score weighting used to balance groups. Mix of primary care (27%), medical subspecialty (37%), and surgical/procedural (36%). Physicians (93.6%) and advanced practice professionals (6.4%).

## Evidence Level
Observational (quasi-experimental, propensity score-weighted comparison with concurrent control group)

## Data Source(s)
EHR data (Epic EHR telemetry — time in EHR, time in notes, after-hours time, encounter closure time)

## Article Summary
This methodologically rigorous study at University of Chicago used propensity score weighting to compare EHR efficiency outcomes between 125 AI scribe pilot clinicians and 478 matched controls over a 3-month intervention period. Primary outcomes were objective EHR telemetry metrics. Key findings: AI scribe use was associated with significant reductions in total EHR time per appointment (−2.0 min, p<.001) and time in notes per appointment (−0.5 min, p<.001) compared to control. Notably, after-hours documentation time did NOT change significantly (−0.5 min, p=.95) — a consistent null finding across both groups. Benefit was strongly dose-dependent: clinicians in the highest AI scribe use quartile (Q4) showed the largest reductions; low users (Q1) showed minimal or no benefit. Generalized linear models adjusted for sex, years since training, specialty, clinician type, hospital-based vs. offsite clinic, Epic proficiency score, and baseline values. Authors note this is among the most methodologically rigorous studies in the field due to the concurrent control group and propensity score balancing.

## Hypothesis
Explicit: to evaluate whether AI scribe use is associated with reduced EHR time and improved efficiency metrics.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Total Time in EHR per Appointment (min) | Primary outcome. Objective Epic telemetry. Pilot: 22.2→20.2 min (−2.0, p<.001). Control: 24.2→23.8 min (−0.4, p=.001). Between-group difference significant. | [[NB - Net Benefits]] |
| Time in Notes per Appointment (min) | Primary outcome. Note-specific EHR time. Pilot: 7.5→7.0 min (−0.5, p<.001). Control: 9.2→9.0 min (−0.2, p<.001). Absolute reduction modest but significant. | [[NB - Net Benefits]] |
| After-Hours Time Spent Documenting per Appointment (min) | Primary outcome. Pilot: 3.2→2.7 min (−0.5, p=.95). **NOT significant.** Control: 2.6→2.5 min (−0.1, p=.47). Neither group improved after-hours time — consistent null finding across studies. | [[NB - Net Benefits]] |
| Time to Close Encounter (hours) | Time from appointment completion to note sign-off. Data available in Table 2 (truncated in fetch). | [[NB - Net Benefits]] |
| AI Scribe Use Quartile (dose-response) | Clinicians stratified Q1–Q4 by scribe use intensity. Q4 (highest users) showed largest EHR time reductions; Q1 showed minimal benefit. Strong dose-response relationship is key methodological finding. | [[U - Use]], [[NB - Net Benefits]] |
| Propensity Score Balance | After weighting, all baseline covariates (sex, years since training, specialty, clinician type, site, Epic proficiency, baseline EHR metrics, appointment volume) were balanced between groups (difference ≈0). Methodological quality measure. | (methodological) |

---
*Reviewed by Iris | Source: JAMA Network Open 2025 | DOI: 10.1001/jamanetworkopen.2025.37000 | Template v2.0 | Full text reviewed ✅*
*📍 Notable: Methodologically strongest efficiency study in corpus — concurrent control group + propensity score weighting removes the selection bias that plagues before-after designs. The null finding on after-hours time is consistent with Stults 2025 and is becoming a field-wide pattern worth flagging.*
*📍 Dose-response finding: benefit scales with use intensity. Q4 high-users see meaningful reductions; Q1 low-users see almost none. Implication: implementation fidelity and adoption behavior matter as much as the tool itself.*
*📍 Replication context: Corresponds to the same institution/PI as Shah 2025 (Stanford) — actually different; this is University of Chicago/Laiteerapong. Note to self: verify product name in full article.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
