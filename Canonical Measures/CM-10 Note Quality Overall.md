# CM-10 Note Quality Overall

**D&M Dimension:** [[IQ - Information Quality]]

## Definition
Aggregate quality rating of the AI-generated clinical note using a validated multi-dimensional instrument. Instruments include the PDQI-9/PDSQI-9 (which assess accuracy, thoroughness, usefulness, organization, comprehensibility, succinctness, synthesis, and consistency as a composite), the SAIL score, and global quality ratings. Distinct from individual error-type measures (CM-08, CM-09).

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| PDQI-9 (Physician Documentation Quality Instrument) | Validated 9-item instrument; 5-point Likert per item; max 45; originally for human notes | Human rater |
| PDSQI-9 (Provider Documentation Summarization QI) | Adapted PDQI-9 for AI-generated summaries; includes LLM-as-judge implementation validated against physician ratings | LLM-as-judge / Human rater |
| SAIL Score | Standards-based AI documentation quality assessment | Human rater |
| Global rating (1–5) | Single-item overall quality assessment | Human rater |
| Documentation quality — SOAP sections | PDQI applied by section (Subjective, Plan) | Human rater |
| Discharge summary / progress note PDQI | PDQI applied to specific note types | Human rater |

## Aliases Used in Literature
- PDQI-9 Score ([[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP|Foo 2025]], [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT|Baker 2023]], [[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]])
- PDSQI-9 ([[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]]: 3.97–4.99/5.0)
- Overall PDQI Score ([[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation|Palm 2025]])
- Documentation Quality *(corpus-wide — see papers list)*
- Note Quality *(corpus-wide — see papers list)*
- Progress Note PDQI-9 ([[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic|Bracken 2025]])
- Discharge Summary PDQI-9 ([[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic|Bracken 2025]])
- Documentation Quality — SOAP_S / SOAP_P ([[Karavassilis 2025 - Ambient Voice Technology Same Day Emergency Care SDEC|Karavassilis 2025]])
- Global Rating ([[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT|Baker 2023]])
- Efficiency Score (PDQI-9/min) ([[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic|Bracken 2025]])
- Appropriate for Specialty ([[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability|van Buchem 2024]])

## ⚠️ Key Note
PDQI-9 was designed for human-authored notes and has been adapted for AI assessment; the LLM-as-judge implementation (Afshar 2025b) is validated against physician ratings. Scores of 3.97–4.99/5.0 (Afshar 2025b) represent the highest in corpus. Scale interpretation: 26.2 = 'terrible or bad', 36.6 = 'good or excellent' (Kernberg 2023 mean: 29.7, closer to terrible). The PDQI is a composite — see CM-08 and CM-09 for component error types.

## Papers Measuring This (17)
- [[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing]]
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools]]
- [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT]]
- [[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic]]
- [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden]]
- [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP]]
- [[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings]]
- [[Omon 2025 - Generative AI Rehabilitation Clinical Documentation]]
- [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation]]
- [[Peterson Health Technology Institute 2025 - Adoption AI Healthcare Delivery Systems]]
- [[Shah 2025 - Physician Perspectives Ambient AI Scribes]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Tierney 2024 - Ambient Artificial Intelligence Scribes Alleviate Burden Clinical Documentation]]
- [[Wojda 2025 - HCI of Ambient AI Qualitative Study]]
- [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability]]
- [[Balloch 2024 - Ambient Artificial Intelligence Tool Improve Quality Clinical Documentation]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*
