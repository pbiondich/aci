# SQ — System Quality

Part of the [[DeLone and McLean IS Success Model]]

## Definition
System Quality assesses the **technical performance of the ambient AI tool itself** — upstream of the output note. It asks: does the machine work reliably, accurately, and consistently?

## What Belongs Here
- Transcription accuracy (Word Error Rate, Medical Term Recall, Speaker Diarization)
- System reliability, uptime, latency
- Benchmark dataset availability and reproducibility
- Specialty/domain coverage of the evaluation pipeline
- LLM-as-evaluator correlation with human raters
- Study design rigor and methodological validity

## What Does NOT Belong Here
- Quality of the generated note (→ [[IQ - Information Quality]])
- Provider experience with the system (→ [[US - User Satisfaction]])

## Canonical Measures in this Dimension (2)
- [[CM-24 Transcription and ASR Accuracy]] (3 papers)
- [[CM-25 Evaluation Methodology Quality]] (14 papers)

## ⚠️ Evidence Gap
SQ is the most evidence-sparse dimension in the corpus. Commercial ambient AI products (DAX, Abridge, Suki, Ambience) do not publish transcription accuracy, WER, or diarization performance data — a documented pattern of industry opacity since van Buchem 2021. Only 3 papers formally measure ASR accuracy. CM-25 (Evaluation Methodology Quality) is a meta-measure assessing research rigor rather than a direct clinical outcome.

## Papers in this Dimension (24)
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT]]
- [[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report]]
- [[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe]]
- [[Falcetta 2023 - Automatic Documentation Professional Health Interactions Systematic Review]]
- [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP]]
- [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review]]
- [[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation]]
- [[Pearlman 2025 - AI Scribe EHR Efficiency]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]
- [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools]]
- [[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda]]
- [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools]]
- [[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic]]
- [[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative]]
- [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden]]
- [[Guo 2026 - Evaluating Ambient AI Documentation UCI Health Mixed Methods]]
- [[Lukac 2025 - RCT Two Ambient AI Scribes Documentation Efficiency Burnout]]
- [[Shah 2024 - Ambient AI Scribes Physician Burnout Usability Documentation Burden]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Wojda 2025 - HCI of Ambient AI Qualitative Study]]
- [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability]]

---
*D&M Dimensions | Suki Literature Review Vault | Created 2026-03-25, updated 2026-04-15*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
