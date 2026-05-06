# CM-08 Note Completeness and Omission Rate

**D&M Dimension:** [[IQ - Information Quality]]

## Definition
Whether clinically relevant information is captured in the AI-generated note — measured as omission rates, completeness scores, or presence of expected data elements. The most common error type in simulation studies. Represents the 'completeness' component of note quality.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Omission rate (%) | % of expected data elements absent from the note | Simulation / Human rater |
| Error categorization — omissions | Structured count of missing elements vs. reference | Simulation / Human rater |
| [PDSQI-9](https://pubmed.ncbi.nlm.nih.gov/40323321/) / [PDQI-9](https://pubmed.ncbi.nlm.nih.gov/18436914/) Thoroughness domain | Validated subscale measuring note completeness | Human rater / LLM-as-judge |
| Clinical note error rate (% key elements) | % of key clinical elements correctly captured | Simulation |
| New medication capture | Whether new medications mentioned in encounter appear in note | EHR audit |

## Aliases Used in Literature
- Omissions ([[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]], [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools|Arko 2025]], [[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report|Biro 2025]], [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]], [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP|Foo 2025]])
- Error Subtype — Omissions ([[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools|Arko 2025]])
- Omission Errors (%) ([[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]]: 86%; [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools|Arko 2025]]: 71%; [[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report|Biro 2025]]; [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]]; [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP|Foo 2025]])
- Errors of Omission / Addition / Incorrect Data ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- Thoroughness (PDQI domain) ([[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP|Foo 2025]])
- Completeness ([[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review|Suhail 2026]], [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- Missing/unclear Information ([[Karavassilis 2025 - Ambient Voice Technology Same Day Emergency Care SDEC|Karavassilis 2025]])
- History Items Included ([[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT|Baker 2023]])
- Overall Error Rate (%) ([[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools|Arko 2025]])
- Clinical Note Error Rate ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- New Medication Capture ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])

## ⚠️ Key Note
**Most consistent IQ finding in corpus:** Omissions are the dominant error type in ALL 5 simulation studies (71–86% of errors). More clinically dangerous than hallucinations at scale because missing information is harder to detect than wrong information. Patient doesn't complain about what's not in the note.

## Papers Measuring This (11)
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools]]
- [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT]]
- [[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic]]
- [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP]]
- [[Karavassilis 2025 - Ambient Voice Technology Same Day Emergency Care SDEC]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]
- [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
