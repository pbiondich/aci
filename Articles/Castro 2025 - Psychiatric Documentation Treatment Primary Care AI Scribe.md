# Article Review

---

## Article Title
Changes in psychiatric documentation and treatment in primary care with artificial intelligence scribe use

## Author(s)
Castro, Victor M.; McCoy, Thomas H.; Verhaak, Pilar; Ramachandiran, Anudeepa K.; Perlis, Roy H.

## DOI
[10.1101/2025.05.14.25327620](https://doi.org/10.1101/2025.05.14.25327620)

## Journal / Source
medRxiv preprint (NOT peer-reviewed). Posted May 15, 2025. Center for Quantitative Health and Department of Psychiatry, Massachusetts General Hospital / Harvard Medical School. License: CC0 (Public Domain).

## Ambient Product(s) Evaluated
AI-driven ambient scribes (not named by product). Deployed at Mass General and Brigham and Women's Hospital systems February 2023 onward. Same institution as Prasad 2025 (MGB), likely same deployment (DAX-Nuance or similar based on MGB rollout timing).

## Clinical Setting
Massachusetts General and Brigham and Women's Hospital systems. Primary care annual visit notes, February 2023–February 2024. Case-control EHR study: **n=20,302 notes** matched 1:1 using sociodemographic and clinical features across 4 groups: (1) ambient scribe, (2) human scribe, (3) same period no scribe, (4) pre-deployment no scribe. GPT-4o (HIPAA-compliant) used to extract neuropsychiatric symptoms from notes. IRB approved with waiver of informed consent.

## Evidence Level
Observational (case-control EHR study)

## Data Source(s)
EHR data (clinical notes, NLP/LLM extraction of psychiatric symptoms and interventions) | Administrative data (diagnostic codes, prescriptions, referrals)

## Article Summary
This large case-control EHR study at MGH/BWH examined whether AI ambient scribe use changes how primary care physicians document and act on psychiatric symptoms in annual wellness visits. Using GPT-4o to extract Research Domain Criteria (RDoC) symptomatology from 20,302 matched notes, the study found a striking paradox: **ambient-scribed notes documented significantly more neuropsychiatric symptoms** in all 6 RDoC domains (p<.001 for all) compared to controls, yet **likelihood of a psychiatric intervention was significantly lower** among ambient-scribed visits (aOR 0.83 [0.72–0.95], p=.005). Human-scribed visits showed no such difference from unscribed (aOR 1.01 [0.87–1.17], p=NS). The interpretation: ambient scribes may be capturing more symptom language but this additional documentation is not translating to clinical action — and may even be displacing it. Authors call for further investigation into whether this represents a documentation artifact, a cognitive load effect, or a genuine change in clinical behavior that could affect patient outcomes. This is the **only paper in the corpus examining downstream patient-care outcomes** rather than clinician experience.

## Hypothesis
Explicit: to characterize differences in documentation and treatment of psychiatric symptoms in primary care outpatient notes generated using ambient scribes.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| **RDoC Symptom Documentation Level (6 domains)** | Estimated levels of Research Domain Criteria neuropsychiatric symptomatology extracted by GPT-4o from clinical notes. All 6 domains significantly higher in ambient-scribed notes (p<.001 for all). More symptoms documented. | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| **Likelihood of Psychiatric Intervention** | Logistic regression outcome: whether visit resulted in referral, new psychiatric diagnosis, or new antidepressant prescription. Ambient scribe: aOR 0.83 [0.72–0.95], p=.005 — significantly LESS likely. Human scribe: aOR 1.01 [0.87–1.17], p=NS. | [[NB - Net Benefits]] |
| **PHQ-9 Documentation** | 5.0% of ambient-scribed visits met criteria for moderate or greater depressive symptoms by PHQ-9. Used as baseline severity context. | [[IQ - Information Quality]] |
| **Demographic and Clinical Matching** | 1:1 matching on age, sex, sociodemographic factors, and clinical features across 4 groups. Ambient scribe group: mean age 48 (SD 14); 59% female. | (methodological) |
| **GPT-4o NLP Extraction (HIPAA-compliant)** | GPT-4o used to extract RDoC symptom levels from de-identified notes. Represents a novel outcome measure methodology — LLM-as-evaluator of clinical note content. Accuracy/validation of GPT-4o extraction not reported in abstract. | [[SQ - System Quality]], [[IQ - Information Quality]] |

---
*Reviewed by Iris | Source: medRxiv preprint May 2025 | DOI: 10.1101/2025.05.14.25327620 | Template v2.0 | Full text reviewed ✅*
*⚠️ PREPRINT: Not peer-reviewed. Publicly available under CC0 (public domain).*
*📍 Only paper in the entire corpus examining downstream patient-care outcomes. Everything else is about clinician experience/efficiency. This is a genuinely novel contribution — and a concerning one.*
*📍 The core paradox: Ambient scribes document MORE psychiatric symptoms but clinicians ACT on them LESS. Three possible explanations: (a) cognitive offloading — physicians trust the note more but engage less actively; (b) note inflation — more symptom language but less clinical salience; (c) visit dynamics — ambient recording changes how physicians interact with patients on sensitive topics. None are tested here.*
*📍 Roy Perlis is Editor-in-Chief of JAMA Artificial Intelligence and Associate Editor at JAMA Network Open — high-visibility author whose framing of this finding could significantly shape field discourse.*
*📍 Directly relevant to the Regenstrief/Suki project: patient experience and patient outcomes are the most underrepresented domain in the corpus (flagged in Suhail 2026 ACDQI, absent from virtually all primary studies). This paper is the first to crack that door open.*
*📍 Methodology note: GPT-4o used to extract psychiatric symptoms from EHR notes. This is an LLM-as-evaluator approach — same methodological direction as Wang 2025 (npj Digital Medicine). Validation of this extraction approach not reported in abstract.*
