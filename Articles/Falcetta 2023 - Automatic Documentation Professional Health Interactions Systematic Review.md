# Article Review

---

## Article Title
Automatic documentation of professional health interactions: A systematic review

## Author(s)
Falcetta, Frederico Soares; de Almeida, Fernando Kude; Lemos, Janaína Conceição Sutil; Goldim, José Roberto; da Costa, Cristiano André

## DOI
[10.1016/j.artmed.2023.102487](https://doi.org/10.1016/j.artmed.2023.102487)

## Journal / Source
Artificial Intelligence in Medicine | Vol. 137 | March 2023 | 102487. Elsevier. Systematic review. Brazilian research group (Unisinos, Hospital Fêmina, Hospital de Clínicas de Porto Alegre).

## Ambient Product(s) Evaluated
N/A — systematic review. The review searched for intelligent solutions for automatic speech recognition (ASR) with simultaneous structured documentation during a medical interview. Excluded speech-to-text-only technologies. 1995 titles screened → 8 studies included. Most used neural networks, medical lexicon, and structured text output. No commercially available products at time of publication (2023). Limited real-life experience reported. None prospectively validated in large-scale clinical studies.

## Clinical Setting
Systematic review — not a primary study. Included studies from multiple countries (no geographic restriction). Focused on clinical (doctor-patient) interactions, not radiology reports or other non-interactive documentation. The review highlights the complexity of medical vocabulary, context understanding, non-linear conversation flow, and room noise as major technical challenges.

## Evidence Level
Systematic Review

## Data Source(s)
Ovid MEDLINE, Embase, Web of Science, Cochrane, PubMed Central (2014–2022). PRISMA-like methodology. Included only original research on systems that transcribe speech in natural and structured fashion simultaneously with the doctor-patient interaction.

## Article Summary
This Brazilian systematic review is one of the most comprehensive methodological syntheses in the corpus. 1,995 titles screened → 8 primary studies met inclusion criteria (real-time ASR + structured documentation during medical interview). Key conclusions: (1) No commercially available product existed at time of publication (2023); (2) None had large-scale prospective validation or real-world testing; (3) Intelligent models primarily consisted of ASR + NLP + medical lexicon + structured output; (4) Major technical challenges include medical vocabulary complexity, context understanding, non-linear conversation flow, room noise, and speaker variability; (5) Ethical, legal, and privacy concerns are major barriers. The review is explicitly cautious — "clinical data on the usability and benefits of such applications is almost non-existent" and "future work in this area is necessary." This paper directly informs the Regenstrief/Suki evaluation framework by identifying the methodological gaps that must be addressed.

## Hypothesis
To establish the current model and technology status for the automatic transcribing of healthcare professionals’ patient interactions.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Number of Studies Meeting Criteria | 1,995 titles → 8 included studies. Extremely low yield highlights the nascent state of the field. | (methodological) |
| Real-World Clinical Validation | None of the 8 included studies had large-scale prospective validation or real-world testing. All were early technical demonstrations. | (methodological) |
| Commercial Availability | None of the included studies had a commercially available product at time of publication (2023). | [[SerQ - Service Quality]] |
| Technical Challenges Identified | Medical vocabulary complexity, context understanding, non-linear conversation flow, room noise, speaker variability, data privacy, legal liability. | [[SQ - System Quality]] |
| Ethical/Legal Concerns | Privacy, data storage, liability for AI-generated errors, consent for recording. Major barriers identified. | [[SerQ - Service Quality]], [[NB - Net Benefits]] |
| Model Types | Neural networks most used (ASR + NLP + medical lexicon + structured output). Reinforcement learning, supervised learning, convolutional neural networks mentioned. | [[SQ - System Quality]] |

---
*Reviewed by Iris | Source: Artificial Intelligence in Medicine 2023 | DOI: 10.1016/j.artmed.2023.102487 | Template v2.0 | Full text reviewed ✅*
*📍 One of the most important methodological papers in the corpus. Systematic review establishing that as of 2023, the field had almost no real-world clinical validation. This sets the baseline for interpreting later papers (2024–2026).*
*📍 Key caution: "clinical data on the usability and benefits of such applications is almost non-existent." This paper is explicitly skeptical of premature adoption — echoes Kanaparthy 2025 rapid review and contrasts with the more optimistic tone of many vendor-affiliated studies.*
*📍 Technical challenges section is the most comprehensive list of barriers in the corpus: medical vocabulary, context understanding, non-linear conversation, room noise, speaker variability, privacy, and legal liability.*
*📍 Brazilian research group (Unisinos + Hospital Fêmina + Hospital de Clínicas de Porto Alegre) — adds geographic diversity to the predominantly US/Australian corpus.*
*📍 Timeline context: Published January 2023 — before most commercial ambient AI scribe rollouts. This is a pre-commercial baseline review.*
*📍 Directly relevant to Regenstrief/Suki project: The authors conclude "future work in this area is necessary and needed" — this paper justifies the need for the Regenstrief/Suki literature review and evaluation framework.*
*📍 This paper is a strong argument for rigorous evaluation before widespread deployment — a position that aligns with the Regenstrief Institute's academic and evidence-based approach.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
