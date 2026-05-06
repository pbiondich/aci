# IQ — Information Quality

Part of the [[DeLone and McLean IS Success Model]]

## Definition
Information Quality assesses the **quality, accuracy, and completeness of the generated clinical note** — the output artifact of the ambient AI system. It asks: is the note good enough to use?

## What Belongs Here
- Note completeness (are all clinically relevant elements captured?)
- Note accuracy / factual correctness (hallucination rate, incorrect facts)
- Overall note quality scores (PDQI-9, PDSQI-9)
- Note length and verbosity (as proxy for thoroughness vs. over-generation)
- Automated text similarity metrics (ROUGE, BERTScore) — methodological
- Coding accuracy (ICD-10, HCC capture) — insofar as it reflects documentation completeness

## What Does NOT Belong Here
- Time to create the note (→ [[NB - Net Benefits]])
- Provider's *feeling* about note quality (→ [[US - User Satisfaction]])

## Canonical Measures in this Dimension (5)
- [[CM-08 Note Completeness and Omission Rate]] (11 papers)
- [[CM-09 Note Inaccuracy Rate]] (13 papers)
- [[CM-10 Note Quality Overall]] (17 papers)
- [[CM-11 Note Length and Verbosity]] (10 papers)
- [[CM-12 Automated NLP Evaluation Metrics]] (7 papers)

## ⚠️ Key Finding: Omission Dominance
Across all 5 simulation studies in the corpus (Arko 2025, Biro 2025, Anderson 2025, Foo 2025, Kernberg 2023), omissions are the dominant error type (71–86% of all errors). Hallucinations/additions are secondary. More clinically dangerous than hallucinations at scale because missing information is harder to detect. CM-12 (Automated NLP Metrics) is a methodological measure — ROUGE/BERTScore capture textual similarity, not clinical accuracy; Moramarco 2022 showed Levenshtein distance performs as well as BERTScore.

## Papers in this Dimension (38)
- [[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing]]
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Arko 2025 - Documenting Care AI Comparative Commercial Scribe Tools]]
- [[Baker 2023 - ChatGPT Ability Assist Clinical Documentation Orthopaedic RCT]]
- [[Balloch 2024 - Ambient Artificial Intelligence Tool Improve Quality Clinical Documentation]]
- [[Biro 2025 - Simulation Testing Ambient Digital Scribes Case Report]]
- [[Bracken 2025 - Ambient AI Inpatient Documentation Simulation Orthopaedic]]
- [[Bundy 2024 - Administrative Loads Physicians AI Documentation Qualitative]]
- [[Cao 2024 - Artificial Intelligence-Driven Digital Scribes Dermatology]]
- [[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe]]
- [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden]]
- [[Foo 2025 - Great Scribe-Off AI vs Human Documentation Simulated GP]]
- [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review]]
- [[Guo 2025 - Ambient Listening EPIC Signal Data Physician Workload]]
- [[Guo 2026 - Evaluating Ambient AI Documentation UCI Health Mixed Methods]]
- [[Kanaparthy 2025 - Real-World Evidence Digital Scribes Rapid Review]]
- [[Karavassilis 2025 - Ambient Voice Technology Same Day Emergency Care SDEC]]
- [[Kernberg 2023 - ChatGPT-4 Structured Medical Notes Audio Recordings]]
- [[Lukac 2025 - RCT Two Ambient AI Scribes Documentation Efficiency Burnout]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Omon 2025 - Generative AI Rehabilitation Clinical Documentation]]
- [[Palm 2025 - Quality AI Generated Clinical Notes PDQI Validation]]
- [[Peterson Health Technology Institute 2025 - Adoption AI Healthcare Delivery Systems]]
- [[Shah 2025 - Physician Perspectives Ambient AI Scribes]]
- [[Stults 2025 - Evaluation Ambient AI Documentation Platform Clinicians]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Tierney 2024 - Ambient Artificial Intelligence Scribes Alleviate Burden Clinical Documentation]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]
- [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools]]
- [[Wojda 2025 - HCI of Ambient AI Qualitative Study]]
- [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability]]
- [[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations]]
- [[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report]]
- [[Holmgren 2026 - Ambient AI Scribes Physician Financial Productivity]]
- [[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford]]
- [[Prasad 2025 - Clinician Perceptions Virtual Scribe Use Survey]]
- [[Shah 2024 - Ambient AI Scribes Physician Burnout Usability Documentation Burden]]
- [[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda]]

---
*D&M Dimensions | Suki Literature Review Vault | Created 2026-03-25, updated 2026-04-15*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
