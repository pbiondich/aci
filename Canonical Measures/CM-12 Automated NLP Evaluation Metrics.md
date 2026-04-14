# CM-12 Automated NLP Evaluation Metrics

**D&M Dimension:** [[IQ - Information Quality]]

## Definition
METHODOLOGICAL MEASURE. Computational similarity metrics used to evaluate AI-generated notes against reference standards — including n-gram overlap (ROUGE), semantic similarity (BERTScore), and entity-level accuracy metrics. Not a clinical outcome; measures the evaluation approach's technical validity.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| ROUGE (1, 2, L) | N-gram overlap between AI note and reference text | Automated NLP |
| BERTScore / BLEURT | Semantic similarity using contextual embeddings | Automated NLP |
| F1 Score | Token-level precision/recall | Automated NLP |
| SAIL Score | Combined scoring metric | Automated NLP |
| Entity linking (LINK / CORRECT LINK) | Clinical entity recognition accuracy | Automated NLP |
| LLM-as-Evaluator agreement | Correlation between LLM judge and human ratings | Automated / Human |

## Aliases Used in Literature
- ROUGE Score ([[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review|Suhail 2026]], [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review|Gebauer 2025]], [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability|van Buchem 2024]])
- BERTScore ([[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review|Suhail 2026]], [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review|Gebauer 2025]], [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation|Moramarco 2022]], [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability|van Buchem 2024]], [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation|Wang 2021]])
- BLEURT ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- F1 Score ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]], [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation|Moramarco 2022]])
- Automatic Metric Correlation ([[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation|Moramarco 2022]])
- Automatic Metric Correlation with Human Judgment ([[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation|Moramarco 2022]])
- SAIL Score ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- NLP Task Performance ([[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda|van Buchem 2021]])
- LINK / CORRECT LINK ([[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation|Moramarco 2022]])
- LLM-as-Evaluator Agreement ([[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]], [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])

## ⚠️ Key Note
**METHODOLOGICAL CANONICAL.** These metrics do not measure clinical outcomes — they measure whether automated quality assessment agrees with human assessment. Critical finding from Moramarco 2022: Levenshtein distance performs as well as BERTScore on clinical notes. LLM-as-judge (Afshar 2025b) is validated against physician ratings. Automated metrics should be treated as research tools, not clinical quality measures.

## Papers Measuring This (7)
- [[Balloch 2024 - Ambient Artificial Intelligence Tool Improve Quality Clinical Documentation]]
- [[Castro 2025 - Psychiatric Documentation Treatment Primary Care AI Scribe]]
- [[Gebauer 2025 - Benchmarking Datasets Ambient Clinical Documentation Scoping Review]]
- [[Moramarco 2022 - Human Evaluation Automatic Metrics Consultation Note Generation]]
- [[Suhail 2026 - Metrics for Ambient Clinical Documentation Scoping Review]]
- [[Wang 2021 - Patient-Centered Digital Scribe Automatic Medical Documentation]]
- [[van Buchem 2024 - Digital Scribe Documentation Time Quality Usability]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25*
*Method: Bottom-up derivation from 426 raw measure rows across 54 papers*
