# Article Review

---

## Article Title
Current evidence and future directions of metrics used to evaluate ambient clinical documentation: A scoping review

## Author(s)
Suhail, Dernas; Wong, Zhen Yu; Ubhi, Jeevan; Kungwengwe, Garikai; Faderani, Ryan; Mosahebi, Afshin

## DOI
[10.1016/j.ijmedinf.2025.106113](https://doi.org/10.1016/j.ijmedinf.2025.106113)

## Journal / Source
International Journal of Medical Informatics | Vol. 205 | January 2026 | Article 106113. Received 25 July 2025; Accepted 9 September 2025; Available online 10 September 2025.

## Ambient Product(s) Evaluated
N/A — scoping review of 11 primary studies. Products in included studies: Nuance Dragon Ambient Experience (DAX) used in 3 of 11 studies; Dragon Medical 11.0 in 2; other systems (ChatGPT-4, AWS Transcribe, Google Speech-to-Text, proprietary) in remainder.

## Clinical Setting
Scoping review — synthesizes 11 primary studies. Settings across included studies: USA (7), Australia (2), Germany (1). Mix of simulated consultations, inpatient, and outpatient settings. Medline and Embase search (4,949 articles identified → 11 included via PRISMA-ScR).

## Evidence Level
Scoping Review (PRISMA-ScR compliant)

## Data Source(s)
Synthesis of published primary literature (Medline + Embase)

## Article Summary
This peer-reviewed scoping review — the direct counterpart to the Gebauer 2025 preprint (which it explicitly cites and positions itself as the peer-reviewed alternative to) — synthesizes evaluation metrics from 11 primary studies on ambient clinical documentation (ACD). The 11 included studies span 6 comparative experimental studies, 2 mixed-methods observational studies, 1 cross-sectional study, 1 prospective experimental study, and 1 peer-matched cohort study. Four main evaluation themes were identified: (1) **model performance** (7/11 studies — F1, ROUGE, BERTScore, BLEURT, PDQI, custom entity-linking metrics), (2) **documentation efficiency** (3/11 — time per patient, out-of-hours documentation, words per minute, WRVU), (3) **clinician experience** (3/11 — OLBI burnout, Press Ganey Engagement, Mini-Z Survey, PROMIS sleep, FIM/AIM/IAM/IUS implementation measures), and (4) **patient experience** (1/11 — patient likelihood to recommend, opt-out rate, safety events). Significant heterogeneity in metrics across studies was the central finding. The review proposes the **Ambient Clinical Documentation Quality Instrument (ACDQI)** as a standardized scoring framework. Notably, the ACDQI as proposed is limited to model performance and documentation efficiency — clinician and patient experience domains are explicitly excluded from the scored instrument due to susceptibility to confounding, though their importance is acknowledged.

## Hypothesis
Not explicitly stated. Implicit objective: to synthesize the landscape of ACD evaluation metrics and propose a standardized framework (ACDQI) for future studies.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| **F1 Score** | Harmonic mean of precision and recall. Most common model performance metric in the corpus (used in 4/11 studies). Applied to information extraction component. | [[SQ - System Quality]], [[IQ - Information Quality]] |
| **ROUGE Score (ROUGE-1, ROUGE-2, ROUGE-L)** | Lexical overlap between machine-generated and reference notes. Easy to use but limited semantic understanding. Used in 2/11 studies. Part of ACDQI. | [[IQ - Information Quality]] |
| **BERTScore / BLEURT** | Contextual embedding-based metrics capturing semantic similarity. More computationally demanding than ROUGE but better aligned with clinical quality. Used in 1/11 study; recommended in ACDQI. Represents evolution beyond lexical metrics. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| **PDQI (Physician Documentation Quality Instrument)** | Validated instrument scoring note quality 9–45. Used in 1/11 study (Kernberg 2024 with ChatGPT-4). Part of ACDQI. | [[IQ - Information Quality]] |
| **LINK / CORRECT LINK (Entity Linking Annotations)** | Custom metrics for semantic entity-level accuracy between generated and reference notes. Resource-intensive, prone to subjectivity. Used in 1/11 study (Sezgin 2024). | [[IQ - Information Quality]], [[SQ - System Quality]] |
| **Errors of Omission / Addition / Incorrect Data** | Manual error classification in machine-generated notes (1/11 study). Directional measure of factual accuracy and completeness. | [[IQ - Information Quality]] |
| **Average Documentation Time per Patient (min)** | Primary efficiency metric — how long including proofing time. Included in ACDQI (scored: 10 × minutes, max 400 if ≤10 min; score = 0 if >10 min). Used in 2/11 studies. | [[NB - Net Benefits]] |
| **Out-of-Hours EHR Documentation Time** | Time spent documenting outside working hours. Used in 2/11 studies as a WOW/after-hours burden metric. | [[NB - Net Benefits]], [[US - User Satisfaction]] |
| **Words per Minute (documentation speed)** | Speed of clinical note production. One study found ACD 2.7× faster than typing and dictation for history; 2.2× faster for physical exam vs. typing; 3.1× faster vs. dictation. | [[NB - Net Benefits]] |
| **Work Relative Value Units (WRVU)** | Monthly/yearly productivity measure (US Medicare reimbursement framework). Used in 1/11 study (Haberle 2024) as a proxy for clinical value productivity. | [[NB - Net Benefits]] |
| **Oldenburg Burnout Inventory (OLBI)** | Validated burnout instrument (scored 16–64), two domains: exhaustion and disengagement. Used in 1/11 study (Owens 2024). High ACD use associated with significantly lower burnout scores. | [[US - User Satisfaction]] |
| **Press Ganey Workforce Engagement Score** | Validated clinician engagement measure (scored 1–5). Used in 1/11 study (Haberle 2024). | [[US - User Satisfaction]] |
| **Mini-Z Survey for Workplace Stress** | 10-part validated questionnaire measuring burnout, documentation efficiency perception, and job autonomy. Used in 1/11 study (Nguyen 2023). | [[US - User Satisfaction]] |
| **FIM / AIM / IAM / IUS (Implementation measures)** | Feasibility of Intervention Measure, Acceptability of Intervention Measure, Appropriateness of Intervention Measure (all scored 4–20), Implementation Usability Scale (0–100). Used in 1/11 study (Nguyen 2023). | [[SerQ - Service Quality]], [[U - Use]] |
| **PROMIS Sleep Disturbance (Short Form 4a)** | Patient Reported Outcomes Measurement Information System sleep measure. Used in 1/11 study to assess wellbeing impact of documentation burden relief. Unusual/novel outcome for ACD literature. | [[US - User Satisfaction]], [[NB - Net Benefits]] |
| **Patient Likelihood to Recommend** | Single-item patient satisfaction proxy. Used in 1/11 study (Haberle 2024). Broad measure, highly susceptible to confounders per authors. | [[NB - Net Benefits]] |
| **Patient Opt-Out Rate** | Number of patients declining ACD use in their consultation. Acceptability/consent proxy. Used in 1/11 study (Haberle 2024). | [[U - Use]], [[NB - Net Benefits]] |
| **Patient Safety Events** | Occurrence of safety events attributable to ACD use. Used in 1/11 study (Haberle 2024). No safety events reported in that study. | [[IQ - Information Quality]], [[NB - Net Benefits]] |

---

## ACDQI Framework (Table 2 from paper)

The **Ambient Clinical Documentation Quality Instrument (ACDQI)** as proposed:

| Section | Metric | Score Range |
|---|---|---|
| 1. Model Performance | ROUGE-1 | 0–100 |
| | ROUGE-2 | 0–100 |
| | ROUGE-L | 0–100 |
| | BLEURT | 0–100 |
| | PDQI (Physician Documentation Quality Instrument) | 9–45 |
| **Section 1 total** | | **9–445** |
| 2. Documentation Efficiency | Average documentation time per patient (incl. proofing): score = (10 − minutes taken) × 40. Score = 0 if >10 min. | 0–400 |
| **ACDQI total** | | **9–845** |

⚠️ **Note:** Clinician experience and patient experience domains are deliberately excluded from the ACDQI scoring instrument (deemed too susceptible to confounding for standardized measurement). Authors acknowledge this limitation and call for collaborative refinement before validation.

---
*Reviewed by Iris | Source: International Journal of Medical Informatics 2026 | DOI: 10.1016/j.ijmedinf.2025.106113 | Template v2.0 | Full text reviewed ✅*
*📍 Notable: Direct peer-reviewed counterpart to Gebauer 2025 preprint. Both synthesize ACD evaluation metrics; Suhail explicitly positions this paper as filling the gap left by Gebauer's unreviewed status. The two should be read as a pair.*
*📍 ACDQI limitation: The proposed instrument only scores model performance and documentation efficiency. The exclusion of clinician and patient experience from the scored framework is a deliberate methodological choice — not an oversight — but it creates a gap between what the field values (burnout, patient engagement) and what the ACDQI actually measures.*
*📍 UK provenance: All five authors are UK-based (NHS Wales, King's College London, UCL, Royal Free). The 11 included studies are primarily US and Australian. This is the only UK-authored primary contribution in our corpus.*
