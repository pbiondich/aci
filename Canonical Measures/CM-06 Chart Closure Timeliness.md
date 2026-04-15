# CM-06 Chart Closure Timeliness

**D&M Dimension:** [[NB - Net Benefits]]

## Definition
Whether and how quickly clinical notes are completed and signed — measured as same-day closure rates, time to chart closure, 24-hour deficiency rates, or completion before the next patient. Captures documentation *completion behavior* rather than time-per-note.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Same-day encounter closure rate (%) | % of encounters with notes signed on the same day as the visit | EHR telemetry |
| Time to chart closure (hours) | Hours from appointment to note signature | EHR telemetry |
| 24-hour CPT/documentation deficiency rate | % of encounters not closed within 24 hours (standard compliance metric) | EHR telemetry |
| Note completion before next patient | % of notes completed before the next scheduled encounter | EHR telemetry |
| Chart completion timing (survey) | Provider-reported chart closure behavior | Survey |

## Aliases Used in Literature
- Same-Day Encounter Closure ([[Guo 2026 - Evaluating Ambient AI Documentation UCI Health Mixed Methods|Guo 2026]], [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden|Duggan 2025]])
- Chart Closure Time ([[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report|Boyter 2025]]: −41%)
- Note Completion Before Next Patient ([[Albrecht 2025 - Ambient AI Clinical Documentation QI Survey|Albrecht 2025]])
- 24-Hour Documentation Deficiency Rate ([[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations|Afshar 2025]])
- 24-Hour CPT Submission Deficiency Rate ([[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations|Afshar 2025]])
- Time to Close Encounter ([[Pearlman 2025 - AI Scribe EHR Efficiency|Pearlman 2025]])
- Pre-Next-Visit Closure ([[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]])
- Chart Completion Timing ([[Stults 2025 - Evaluation Ambient AI Documentation Platform Clinicians|Stults 2025]])
- Same-Day / Pre-Next-Visit Closure ([[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]])

## ⚠️ Key Note
Chart closure is a distinct operational metric from raw documentation time — a note can be completed quickly but signed late. Boyter/KLAS 2025 found −41% in chart closure time (UAL data). Afshar 2025a used it as a real-time monitoring metric with a notable dip during template change.

**⚠️ Definition overlap with CM-04:** The "time to chart" portion of this measure overlaps with documentation time (CM-04). All "time to close" aliases need to be checked to ensure they are capturing completion behavior (signing/submitting), not note-writing time.

**⚠️ Time to Close Encounter (Pearlman 2025):** Verify that this measures note closure, not patient discharge or room turnover (i.e., not patient movement).

## Papers Measuring This (8)
- [[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing]]
- [[Albrecht 2025 - Ambient AI Clinical Documentation QI Survey]]
- [[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report]]
- [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden]]
- [[Guo 2026 - Evaluating Ambient AI Documentation UCI Health Mixed Methods]]
- [[Haberle 2024 - Impact Nuance DAX Ambient Listening AI Documentation]]
- [[Pearlman 2025 - AI Scribe EHR Efficiency]]
- [[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*
