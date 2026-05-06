# Article Review

---

## Article Title
The digital scribe in clinical practice: a scoping review and research agenda

## Author(s)
van Buchem, Marloes M.; Candel, Boris G.J.M.; Haan, Jeroen; Engelen, Laurens; Leeuw, Adriaan W.; van Gils, Mark; de Bruijne, Marleen C.; Moorman, P.W.

## DOI
[10.1038/s41746-021-00432-5](https://doi.org/10.1038/s41746-021-00432-5)

## Journal / Source
npj Digital Medicine | Vol. 4 | Article 32 | 2021 (published online March 2021)

## Ambient Product(s) Evaluated
No commercial ambient AI products evaluated directly. 20 academic studies on digital scribe systems reviewed. Only DeepScribe provided unpublished performance data when contacted; Robin Healthcare, Nuance, Amazon, Saykara, Sopris Health did not respond. Babylonian Health (Google), Nuance mentioned as major commercial players.

## Clinical Setting
Scoping review — no single clinical setting. Studies spanned general (unspecified), primary care, home hemodialysis, orthopedic, cardiology, family medicine, internal medicine, telemedicine.

## Evidence Level
Scoping/Systematic Review

## Data Source(s)
Literature review (Medline, Web of Science, ACL, Arxiv); industry outreach

## Article Summary
This is a scoping review (PRISMA-ScR) of digital scribe technology through December 2020. Of 2,348 articles screened, 20 were included. 3 focused on ASR for clinical conversations; 17 used manual transcripts for NLP tasks (entity extraction, classification, summarization). Only 2 of 20 studies examined clinical validity/usability; none investigated clinical utility. Companies actively developing digital scribes do not publish performance data — only DeepScribe responded to outreach. The paper identifies a critical gap: the field is stuck at technical validity, far from clinical deployment readiness.

## Hypothesis
Not explicitly stated. Research questions: (1) What methods are used to develop digital scribes? (2) How accurate are these methods? (3) Have these been evaluated in clinical practice?

## Study Measures

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| ASR accuracy | Accuracy of automatic speech recognition on clinical conversations (word error rate) | SQ |
| NLP task performance | Entity extraction, classification, summarization accuracy on clinical transcripts | SQ, IQ |
| Clinical validity/usability | Did any studies evaluate the tool with actual clinicians in clinical practice? | IQ, US |
| Clinical utility | Did any studies assess patient or clinical outcomes in real-world use? | NB |
| Industry transparency | Whether commercial companies provided performance data when requested | SerQ |

---

## Key Findings

- **20 studies included** from 2,348 screened. Only 2 assessed clinical validity/usability. **Zero** assessed clinical utility.
- **15/20 studies** were performed by or in collaboration with a company — but companies still don't publish performance data.
- Of 6 companies contacted (Robin Healthcare, DeepScribe, Saykara, Sopris Health, Amazon, Nuance), only **DeepScribe** provided data.
- Most promising NLP approaches use **context-sensitive word embeddings + attention-based neural networks** (i.e., early transformer models).
- Key conclusion: field is stuck at **technical validity** phase; clinical validity, usability, and clinical utility remain almost entirely unstudied as of 2020.
- Research agenda: more transparent reporting, iterative study from technical → clinical validity, investigation of clinical utility.

## Notable Findings for D&M Analysis

- **SQ (System Quality):** Technical validity is where the field is concentrated. 17 NLP studies on manual transcripts. 3 ASR studies. But technical performance doesn't translate to real-world clinical validity.
- **IQ (Information Quality):** Barely studied at clinical validity level. Most studies only test technical task performance, not whether notes produced are clinically accurate or useful.
- **SerQ (Service Quality):** Companies don't publish data. Only 1/6 companies responded to information requests. Industry opacity is a major concern.
- **U (Use):** No real-world utilization data in any included study.
- **US (User Satisfaction):** Almost entirely absent.
- **NB (Net Benefits):** Entirely absent — no clinical outcome studies at this time.

## Corpus Context

- **Pre-commercial context:** This paper is from early 2021, before DAX Copilot, Abridge, Suki, and Ambience became widely deployed. It documents the *starting point* — the research frontier at the moment commercial deployment was beginning.
- **Companion paper:** Same first author (van Buchem) published van Buchem 2024 in JMIR AI — which is the *practice-facing* evaluation framework paper. Together they bracket 2021–2024.
- **Historical significance:** First major scoping review of digital scribes as a field. The 2021 research agenda it proposes is essentially what the 2022–2026 papers in this corpus are trying to address.

---

*Reviewed by Iris | Source: npj Digital Medicine 2021 | DOI: 10.1038/s41746-021-00432-5 | Template v2.0 | Full text reviewed ✅*
*📍 Key signal: As of end of 2020, the field had 0 clinical utility studies and only 2 clinical validity/usability studies out of 20. This paper establishes the baseline — almost all papers in this corpus post-date it and are filling the gaps it identified.*
*📍 Industry opacity: Companies developing digital scribes did not publish performance data and largely refused to provide it when asked. This pattern from 2021 has continued — most vendor claims in the corpus are self-reported or from sponsored studies.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
