# CM-09 Note Inaccuracy Rate

**D&M Dimension:** [[IQ - Information Quality]]

*(Previously titled "Note Accuracy and Hallucination Rate" — renamed to match definition, which measures inaccuracy not accuracy)*

## Definition
The presence of clinically inaccurate or fabricated content in AI-generated notes — information that was not stated in the encounter or is factually wrong. Distinct from omissions (CM-08). Includes hallucinations (invented content) and incorrect facts (stated inaccurately).

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Hallucination rate (%) | % of notes containing at least one fabricated element | Simulation / Human rater |
| Addition errors (%) | % of error events classified as added content not in source | Simulation / Human rater |
| Incorrect facts (%) | % of error events where information stated but wrong | Simulation / Human rater |
| [PDSQI-9](https://pubmed.ncbi.nlm.nih.gov/40323321/) / [PDQI-9](https://pubmed.ncbi.nlm.nih.gov/18436914/) Accuracy domain | Validated subscale; includes falsification/fabrication criterion | Human rater / LLM-as-judge |
| Clinically significant inaccuracies | Likert scale; provider-rated accuracy of AI notes | Survey |
| Cross-replicate consistency | % of data elements correct across 3 model runs of same case | Simulation |

## Aliases Used in Literature
- Hallucination Rate ([[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT|Baker 2023]]: 36%; [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation|Palm 2025]]: 31%)
- Addition Errors (%) ([[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]]: 10.5%)
- Incorrect Facts (%) ([[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]]: 3.2%)
- Factuality / Hallucination Rate ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- Clinically Significant Inaccuracies ([[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report|Biro 2025]])
- Freedom from Hallucination (PDQI domain)
- Incorrect Information ([[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation|Palm 2025]])
- Negation Errors ([[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative|Bundy 2024]])
- Hallucinations / Errors (qualitative) ([[Shah 2025 - Physician Perspectives Ambient AI Scribes|Shah 2025]])
- Cross-replicate consistency ([[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings|Kernberg 2023]]: 53% consistent)
- Error Rate & Type ([[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report|Biro 2025]])

## ⚠️ Key Note
**Hallucinations are less common than omissions but more dangerous per-event.** Baker 2023 (36%) and Palm 2025 (31%) found highest rates. Kernberg 2023 found only 3.2% incorrect facts but 86% omissions — different definitions matter. Bundy 2024 identified negation errors ('did not' → 'did') as a specific high-risk subtype. Reproducibility failure (Kernberg): same case, different errors each run — clinicians can't predict where to check.

## Papers Measuring This (14)
- [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools]]
- [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT]]
- [[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report]]
- [[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative]]
- [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP]]
- [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review]]
- [[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings]]
- [[Lukac 2025 - RCT Two Ambient AI Scribes Documentation Efficiency Burnout]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]
- [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools]]
- [[Shah 2025 - Physician Perspectives Ambient AI Scribes]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
