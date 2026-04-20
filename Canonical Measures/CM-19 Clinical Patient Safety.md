# CM-19 Clinical Patient Safety

**D&M Dimension:** [[NB - Net Benefits]]

## Definition
Patient safety outcomes associated with ambient AI documentation — including documentation errors that affect clinical decisions, adverse events, harm scores, and gaps between documented symptoms and clinical action. The most concerning and least studied outcome dimension.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| [AHRQ Harm Score](https://journals.lww.com/journalpatientsafety/abstract/2015/03000/the_reliability_of_ahrq_common_format_harm_scales.8.aspx) | Validated harm classification for medical errors | EHR / expert review |
| Adverse events / patient safety events | Formal incident reporting or EHR-identified events | EHR / administrative |
| Likelihood of psychiatric intervention (aOR) | Association between AI scribe use and clinical action | EHR data (observational) |
| RDoC symptom documentation level | Neuropsychiatric symptom documentation completeness | EHR audit |
| [PHQ-9](https://pubmed.ncbi.nlm.nih.gov/11556941/) documentation | Whether depression screening documented in note | EHR audit |
| Patient safety survey items | Provider-reported safety concerns | Survey |

## Aliases Used in Literature
- AHRQ Harm Score ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- Patient Safety Events ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- Critical Errors ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- Likelihood of Psychiatric Intervention ([[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe|Castro 2025]]: aOR 0.83, p=.005) *(⚠️ this is quality of care, not patient safety — measures a clinical decision rate, not a harm event; candidate for reclassification)*
- RDoC Symptom Documentation Level ([[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe|Castro 2025]]) *(⚠️ quality of care / documentation completeness, not safety)*
- PHQ-9 Documentation ([[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe|Castro 2025]]) *(⚠️ quality of care / documentation completeness, not safety)*
- Patient Safety (survey) ([[Galloway 2024 - Impact Artificial Intelligence Based Solution Clinicians Clinical Documentation|Galloway 2024]], multiple)
- Clinically Significant Errors in AI Notes ([[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report|Biro 2025]], [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]]) *(⚠️ errors without demonstrated patient outcome = technical quality, not patient safety)*
- Negation Errors ([[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative|Bundy 2024]]) *(⚠️ technical quality / hallucination; belongs with CM-09 unless patient outcome is documented)*

## ⚠️ Key Note
**Castro 2025 is the landmark paper here:** More psychiatric symptom *documentation* but significantly *less* psychiatric *intervention* (aOR 0.83) with ambient scribe use — preprint only, but the only paper measuring what happens to patients clinically. This is a potential unintended consequence with serious safety implications. Only 9 papers touch this dimension, and most use simulated or survey data rather than real patient outcomes.

**⚠️ Scope narrowing needed:** True patient safety requires measured patient harm outcomes. Errors in documentation that do not demonstrate a downstream patient outcome are technical quality issues (→ CM-09 Note Inaccuracy Rate), not safety. Severity of error is not patient safety without evidence of patient harm. *Recommendation: only Suhail 2026 and Anderson 2025 clearly belong in this safety category as currently defined. All others should be examined for reclassification.*

## Papers Measuring This (9)
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic]]
- [[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe]]
- [[Guo 2026 - Evaluating Ambient AI Documentation UCI Health Mixed Methods]]
- [[Haberle 2024 - Impact Nuance DAX Ambient Listening AI Documentation]]
- [[Lukac 2025 - RCT Two Ambient AI Scribes Documentation Efficiency Burnout]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*
