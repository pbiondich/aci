# Article Review

---

## Article Title
Assessing the quality of AI-generated clinical notes: validated evaluation of a large language model ambient scribe

## Author(s)
Palm, Erin; Manikantan, Astrit; Mahal, Herprit; Belwadi Subramanya, Srikanth; Pepin, Mark E.

## DOI
[10.3389/frai.2025.1691499](https://doi.org/10.3389/frai.2025.1691499)

## Journal / Source
Frontiers in Artificial Intelligence | Section: Medicine and Public Health | Vol. 8 | October 21, 2025. Open Access.

## Ambient Product(s) Evaluated
**Suki** — explicitly named. "Suki is an ambient clinical documentation system that summarizes audio-recorded medical interactions into structured clinical notes." Both proprietary and fine-tuned third-party LLMs are used. All authors are Suki AI employees (Redwood City, CA) or affiliated with Stanford/Santa Clara Valley Medical Center. ⚠️ **Industry-authored study** — Suki employees evaluated Suki's own product.

## Clinical Setting
97 de-identified audio recordings of outpatient clinical encounters across 5 specialties: general medicine (20), pediatrics (20), OB/gyn (17), orthopedics (20), adult cardiology (20). Audio pulled from Suki's production database (October 2024). All encounters anonymized by Suki operations team. No clinical sites named. Two blinded specialty reviewers evaluated each encounter's AI ("Ambient") note vs. physician-authored ("Gold") note.

## Evidence Level
Observational (cross-sectional note quality evaluation — prospective generation, blinded comparative review)

## Data Source(s)
AI-generated notes (Suki Ambient) | Physician-authored reference notes (Gold notes, written from same audio/transcript) | Blinded expert review using modified PDQI-9 (11 criteria, 1–5 Likert + binary hallucination detection)

## Article Summary
This industry study from Suki AI compared the quality of Suki-generated "Ambient" clinical notes to blinded physician-authored "Gold" notes across 97 encounters in 5 specialties, using a modified PDQI-9 instrument (8 original PDQI-9 items minus "Up to date" + "Appropriate for specialty" + "Fair" + binary "Hallucination"). 388 total note evaluations. Key results from Table 4: Gold notes scored modestly higher overall (4.25 vs. 4.20, p=0.04). Gold notes were superior on Accurate (p=0.05), Succinct (p<0.001), and Internally Consistent (p=0.004). Ambient notes were superior on Thorough (p<0.001) and Organized (p=0.03). Hallucinations: present in 31% of Ambient notes vs. 20% of Gold notes (p=0.01). Despite these deficits, reviewers overall *preferred* Ambient notes 47% vs. 39% for Gold (14% equal preference). Interrater agreement was high overall (RWG>0.7) except cardiology (moderate agreement for 6/11 criteria). OB/Gyn and pediatrics tended to favor Gold; general medicine, orthopedics, and cardiology tended to favor Ambient.

## Hypothesis
Explicit: to compare quality of LLM-generated Ambient notes with physician-authored reference notes across five clinical specialties using PDQI-9 as validation framework.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| PDQI-9 Accuracy | Note is free of incorrect information. Gold 4.13 vs. Ambient 3.98 (−0.15, p=0.05). Gold significantly better. | [[IQ - Information Quality]] |
| PDQI-9 Thoroughness | Note is complete and documents all issues of importance. Ambient 4.22 vs. Gold 3.80 (+0.43, p<0.001). Ambient significantly better — more complete. | [[IQ - Information Quality]] |
| PDQI-9 Usefulness | Note is relevant and provides valuable information. No significant difference (4.05 vs. 4.03, p=0.80). | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| PDQI-9 Organization | Note is well-formed and structured. Ambient 4.19 vs. Gold 4.01 (+0.18, p=0.03). Ambient significantly better organized. | [[IQ - Information Quality]] |
| PDQI-9 Comprehensibility | Note is clear without ambiguity. No significant difference (4.26 vs. 4.19, p=0.38). | [[IQ - Information Quality]] |
| PDQI-9 Succinctness | Note is brief and without redundancy. Gold 4.40 vs. Ambient 3.72 (−0.67, p<0.001). Gold vastly better — Ambient notes are verbose/redundant. Largest quality gap. | [[IQ - Information Quality]] |
| PDQI-9 Synthesis | Note reflects author's clinical understanding. No significant difference (4.22 vs. 4.09, p=0.07). | [[IQ - Information Quality]] |
| PDQI-9 Internal Consistency | No part contradicts any other. Gold 4.47 vs. Ambient 4.31 (−0.16, p=0.004). Gold significantly better. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| PDQI-9 Appropriate for Specialty | Language/content typical for specialty. No significant difference (4.38 vs. 4.29, p=0.24). | [[IQ - Information Quality]], [[SQ - System Quality]] |
| PDQI-9 Fairness | Note does not display bias. No significant difference (4.82 vs. 4.83, p=0.70). Both near-ceiling. | [[IQ - Information Quality]] |
| Hallucination Rate | Binary detection: inaccuracies due to hallucinated content. Ambient 31% vs. Gold 20% (p=0.01). Ambient significantly more hallucinations. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Overall PDQI Score | Mean across all 10 scored criteria. Gold 4.25 vs. Ambient 4.20 (p=0.04). Statistically significant but clinically small difference. | [[IQ - Information Quality]] |
| Overall Note Preference | Single-question: which note do you prefer? Ambient preferred 47%, Gold 39%, equal 14%. Despite lower aggregate PDQI score, reviewers preferred Ambient overall. | [[US - User Satisfaction]], [[IQ - Information Quality]] |
| Interrater Agreement (RWG) | Within-group agreement across specialties. High (>0.7) in gen med, OB/gyn, ortho. Moderate in peds and cardiology. Hallucination binary had RWG=0.94. | (methodological) |

---
*Reviewed by Iris | Source: Frontiers in Artificial Intelligence 2025 | DOI: 10.3389/frai.2025.1691499 | Template v2.0 | Full text reviewed ✅*
*📍 Industry provenance: All 5 authors are Suki AI employees or Suki-affiliated. Suki is evaluating its own product. Interpret findings with appropriate skepticism — though the modified PDQI-9 methodology is sound and the study is transparent about the industry authorship.*
*📍 Direct relevance to Regenstrief/Suki project: This is a Suki internal quality validation study. The methodology (modified PDQI-9 across 5 specialties, blinded review, hallucination detection) could inform or directly feed into the evaluation framework we're building.*
*📍 Key paradox: Ambient notes are more thorough and better organized, but also less succinct, less accurate, and more likely to hallucinate. Yet reviewers still prefer them overall. This "verbosity paradox" is important for the evaluation framework.*
*📍 Hallucination in 31% of Ambient notes is a significant safety signal — highest rate of any paper in our corpus that directly measured hallucination.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
