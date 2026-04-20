# Article Review

---

## Article Title
Human Evaluation and Correlation with Automatic Metrics in Consultation Note Generation

## Author(s)
Moramarco, Francesco; Papadopoulos Korfiatis, Alex; Perera, Mark; Juric, Damir; Flann, Jack; Reiter, Ehud; Belz, Anya; Savkov, Aleksandar

## DOI
[10.48550/arXiv.2204.00447](https://doi.org/10.48550/arXiv.2204.00447)

## Journal / Source
arXiv preprint (cs.CL) | April 1, 2022. Published in proceedings of ACL 2022. Authors: Babylon Health (commercial digital health company, UK) + University of Aberdeen. Dataset released as open source: https://github.com/babylonhealth/primock57

## Ambient Product(s) Evaluated
N/A — NLP/ML evaluation methodology paper. Studies 10 fine-tuned neural summarization models (BART-based) generating the **Subjective section of SOAP notes** from consultation transcripts. Not a commercial ambient AI scribe evaluation — this is a foundational NLP research paper on how to evaluate consultation note generation systems.

## Clinical Setting
Simulation / research setting. 57 mock consultations from the PriMock57 dataset — enacted consultations using clinical case cards covering common primary care topics, ~10 minutes each. Audio transcribed via Google Speech-to-text. 5 practicing UK GPs (≥3 years experience) evaluated notes over 8 weeks (~30 working hours/evaluator). Produced by Babylon Health (commercial AI health company). Consultations span common primary care topics.

## Evidence Level
Simulation (NLP evaluation methodology study — human evaluation + automatic metric correlation)

## Data Source(s)
Human evaluation (5 GPs): (1) listen and take notes; (2) post-edit 5 notes per consultation; (3) classify errors (incorrect statements, omissions); (4) qualitative feedback | 18 automatic NLP metrics (ROUGE variants, BertScore, Levenshtein distance, others) | Post-editing time measurement

## Article Summary
This foundational NLP methodology paper from Babylon Health / University of Aberdeen addresses a critical gap: how to properly evaluate automatically generated clinical consultation notes. The study deployed 5 UK GPs to evaluate 285 notes (57 consultations × 5 notes each) across 4 tasks: listen/take notes, post-edit, classify errors, and qualitative feedback. Then correlated human judgments with 18 automatic quality metrics. Key findings: (1) **Omissions** are the most common and clinically significant error type — consistent with Biro 2025, Anderson 2025, Arko 2025, found independently in this earlier study; (2) **Levenshtein distance** (simple character-based edit distance) performs as well as or better than model-based metrics like BertScore for this task; (3) ROUGE and other automatic metrics correlate poorly with human clinical judgment; (4) Post-editing generated notes can be faster than writing from scratch but may be more cognitively intensive. All annotations open-sourced (PriMock57 dataset). This paper predates modern commercial ambient AI scribes but establishes the methodological foundation for how to evaluate them.

## Hypothesis
Explicit: to present a human evaluation study of consultation notes and establish which automatic metrics best correlate with human clinical judgment.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Post-Edit Time (minutes) | Time to correct an AI-generated note to factual accuracy. Key efficiency metric for real-world scribe use. Prior work (Moramarco 2021) showed post-editing faster but more cognitively intensive than writing from scratch. | [[NB - Net Benefits]], [[US - User Satisfaction]] |
| Incorrect Statements (error type) | Factual errors in generated notes vs. consultation audio — sentences containing one or more factual inaccuracies. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Omissions (error type) | Medical facts that should be in the note but were omitted by the model. Most common error type. Critical omissions flagged for medico-legal liability. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Critical Errors | Errors tagged as having essential clinical importance — those that would lead to medico-legal liability. Safety-weighted error classification. | [[IQ - Information Quality]] |
| Automatic Metric Correlation with Human Judgment | 18 metrics evaluated (ROUGE-1/2/L, BERTScore, Levenshtein, others). Key finding: Levenshtein distance (character edit distance) correlates as well as or better than BertScore with human judgments. ROUGE correlates poorly. | [[SQ - System Quality]], [[IQ - Information Quality]] |
| Qualitative Feedback (clinician-reported) | Issues with order of statements, repetition, and other structural concerns beyond factual errors. | [[IQ - Information Quality]] |

---
*Reviewed by Iris | Source: arXiv 2022 / ACL 2022 | DOI: 10.48550/arXiv.2204.00447 | Template v2.0 | Full text reviewed ✅*
*⚠️ NOTE: This is a 2022 ACL conference paper predating modern commercial ambient AI scribes (DAX Copilot, Abridge, Suki). It studies BART-based models on a small proprietary dataset, not deployed clinical tools. Treat as foundational NLP methodology, not as evidence on current ACI product performance.*
*📍 Methodological precursor: This paper independently establishes omissions as the dominant error type in consultation note generation — a finding confirmed 3 years later in Biro 2025, Anderson 2025, and Arko 2025 across completely independent research groups using different methodologies. Strong convergent validity for the omission-dominance finding.*
*📍 Automatic metric finding: Simple Levenshtein distance performs as well as BertScore for evaluating clinical note quality. This challenges the field's preference for complex embedding-based metrics and has direct implications for evaluation framework design.*
*📍 Babylon Health provenance: Babylon is a UK/US commercial digital health company. Not a traditional academic paper — product development context. Dataset (PriMock57) is open source and has been used by other researchers.*
*📍 This paper belongs in the corpus primarily as a methodological anchor for the NLP/evaluation framework literature, not as a clinical implementation study. It informs IQ measurement methodology more than it informs clinical practice.*
