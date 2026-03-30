# Article Review

---

## Article Title
Using ChatGPT-4 to Create Structured Medical Notes From Audio Recordings of Physician-Patient Encounters: Comparative Study

## Author(s)
Kernberg, Annessa; Gold, Jeffrey A.; Mohan, Vishnu

## DOI
[10.2196/54419](https://doi.org/10.2196/54419)

## Journal / Source
Journal of Medical Internet Research (JMIR) | Vol. 26 | e54419 | Published: April 22, 2024 (preprint November 2023)

## Ambient Product(s) Evaluated
ChatGPT-4 (OpenAI) — using transcripts of simulated encounters fed into ChatGPT-4 with a standard SOAP note prompt. Not a commercial ambient AI scribe product (proprietary tools like DAX Copilot were not tested). Explicitly notes that ChatGPT-4 is NOT HIPAA-compliant.

## Clinical Setting
Simulation — 14 simulated ambulatory patient-provider encounters using professional standardized patients. Range of specialties/diagnoses (gastroenteritis, DKA, ovarian cyst, pneumonia, breast mass, heart failure, polymyalgia rheumatica, etc.). Oregon Health & Sciences University (OHSU).

## Evidence Level
Simulation

## Data Source(s)
Simulation

## Article Summary
This OHSU study evaluated ChatGPT-4's ability to generate SOAP notes from professionally transcribed simulated patient-physician encounter transcripts. 14 cases × 3 replicates = 42 notes. Error categorization used a framework of omissions, incorrect facts, and additions. PDQI-9 assessed note quality. Key findings: omissions dominated errors at 86.3%; mean PDQI-9 = 29.7 (closer to "terrible" than "good"); only 53% of data elements consistently correct across all 3 replicates; accuracy inversely correlated with transcript length and information density.

## Hypothesis
Not explicitly stated. Aim: assess accuracy, quality, and reproducibility of ChatGPT-4-generated SOAP notes from transcript-based encounter records.

## Study Measures

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Error rate (total, per case) | Total errors per case, 5.7–64.7; mean 23.6 per case | IQ |
| Error type distribution | Omissions (86.3%), additions (10.5%), incorrect facts (3.2%) | IQ |
| Cross-replicate consistency | % of data elements correct in all 3, 2, 1, or 0 replicates | IQ, SQ |
| PDQI-9 score | Validated 9-item note quality instrument (max 45); mean = 29.7 | IQ |
| Accuracy by note section | % correct in HPI, Other, Objective, A&P | IQ |
| Transcript length correlation | Inverse correlation between transcript length and accuracy (p=.05) | SQ, IQ |

---

## Key Findings

- **Omissions dominate:** 86.3% of all errors were omissions — consistent with simulation findings from Biro 2025, Anderson 2025, Arko 2025, Foo 2025 (71–76% in those papers, this is even higher)
- **Reproducibility failure:** Only 52.9% of data elements reported correctly across all 3 replicates. Nearly 30% appeared in only 1 or 2 replicates. This is a critical reliability concern — the same model makes different errors on the same case each time.
- **PDQI-9 mean = 29.7:** On the validated PDQI-9 scale, 26.2 = "terrible or bad" and 36.6 = "good or excellent." A mean of 29.7 is closer to terrible.
- **Accuracy by section:** Objective section was highest (median 86.9%). HPI was lower (63.8%) and significantly different from Objective (p<.05). Assessment & Plan was lowest (66.9%).
- **Information density effect:** Accuracy inversely correlated with transcript length (p=.05) and number of scorable elements (p=.05). The more complex the case, the worse the model performs.
- **Not HIPAA-compliant:** Open AI platforms cannot be used clinically due to regulatory and privacy issues — authors explicitly flag this.

## Contextual / D&M Notes

- **IQ (Information Quality):** This is an IQ-focused paper. The core finding — that omissions dominate, accuracy is low, and reliability (cross-replicate consistency) is poor — is a significant IQ concern for any ambient AI documentation tool using LLMs.
- **SQ (System Quality):** The inverse correlation with complexity is a system quality concern — the tool degrades on exactly the use cases (complex patients) where documentation quality matters most.
- **Limitations:** Used transcripts only (eliminated ASR as a confounder). Used open ChatGPT-4, not specialized commercial tools. Commercial products (DAX, Abridge) use fine-tuned proprietary models and likely perform differently — but we can't verify because companies don't publish this data.
- **Contribution:** Methodology paper. Establishes a simulation-based evaluation framework that can be systematically applied to any documentation AI.

## Corpus Context

- **Simulation convergence:** Together with Biro 2025, Anderson 2025, Arko 2025, and Foo 2025, this is the 5th simulation study in the corpus. All five converge on omissions as the dominant error type.
- **Compare to Baker 2023:** Baker also used ChatGPT for an orthopaedic task. Baker found 36% hallucination rate using a different methodology. Kernberg 2023 finds 86% omissions, 3.2% incorrect facts. Different error categorization frameworks make direct comparison difficult.
- **Industry opacity echo:** Authors note they specifically couldn't test proprietary commercial systems like DAX Copilot due to access restrictions. This echoes van Buchem 2021.

---

*Reviewed by Iris | Source: JMIR 2024 | DOI: 10.2196/54419 | Template v2.0 | Full text reviewed ✅*
*📍 Key for synthesis: The 86% omission rate in this paper (using ChatGPT-4 on transcripts) is even higher than the 71–76% rates found in simulation studies of commercial products. Whether this reflects a ChatGPT-4 limitation or a methodological artifact (e.g., more detailed error scoring rubric) is unclear.*
*📍 Reproducibility is the standout finding: the model doesn't make the same errors twice. Clinicians can't learn to anticipate where errors will occur, making supervision harder.*
