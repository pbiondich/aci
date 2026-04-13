# CM-22 Patient Volume and Throughput

**D&M Dimension:** [[NB - Net Benefits]]

## Definition
Changes in the number of patients seen per unit time or changes in patient flow through clinical environments — a downstream efficiency outcome of reduced documentation burden. Includes ED metrics (door-to-doc, length of stay) and outpatient productivity (encounters per week).

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Patients seen per hour | Encounter throughput | Operational / scheduling |
| Encounters per week | Ambulatory visit volume per physician per week | Claims / EHR |
| Door-to-doc / door-to-room time (min) | ED patient flow metric | Operational |
| Length of stay (admitted / discharged, min) | ED throughput metric | Operational |
| Ability to add patient | % reporting ability to see additional patients | Survey |

## Aliases Used in Literature
- Patients Seen per Hour ([[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity|Shuaib 2021]]: +39%) *(moved from CM-18)*
- Encounters per Week ([[Holmgren 2026 - Ambient AI Scribes Physician Financial Productivity|Holmgren 2026]]: +0.80/week)
- Door-to-Doc Time ([[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity|Shuaib 2021]])
- Door-to-Room Time ([[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity|Shuaib 2021]])
- Length of Stay — Admitted / Discharged ([[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity|Shuaib 2021]])
- Patients Through ([[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity|Shuaib 2021]]) *(⚠️ Shuaib's "Productivity (%)" label is misleading — this is patient throughput, not physician productivity in a financial/RVU sense)*
- Ability to Add Patient ([[Albrecht 2025 - Ambient AI Clinical Documentation QI Survey|Albrecht 2025]])
- I Feel Able to See More Patients ([[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden|Duggan 2025]]) *(moved from CM-18)*

## ⚠️ Key Note
Only 6 papers measure throughput, and the strongest data is from Shuaib 2021 (human scribe, ED) — a baseline comparator, not an ambient AI study. Holmgren 2026 found +0.80 encounters/week with ambient AI adoption (statistically significant). Note: increased patient volume may not be desirable if it increases workload without compensation.

## Papers Measuring This (6)
- [[Albrecht 2025 - Ambient AI Clinical Documentation QI Survey]]
- [[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report]]
- [[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative]]
- [[Haberle 2024 - Impact Nuance DAX Ambient Listening AI Documentation]]
- [[Holmgren 2026 - Ambient AI Scribes Physician Financial Productivity]]
- [[Shuaib 2021 - Scribe Program Patient Throughput Physician Productivity]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25*
*Method: Bottom-up derivation from 426 raw measure rows across 54 papers*
