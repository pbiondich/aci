# Article Review

---

## Article Title
Impact of a Digital Scribe System on Clinical Documentation Time and Quality: Usability Study

## Author(s)
van Buchem, Marieke Meija; Kant, Ilse M. J.; King, Liza; Kazmaier, Jacqueline; Steyerberg, Ewout W.; Bauer, Martijn P.

## DOI
[10.2196/60020](https://doi.org/10.2196/60020)

## Journal / Source
JMIR AI | Vol. 3 | Published: September 23, 2024

## Ambient Product(s) Evaluated
**Autoscriber** (Autoscriber B.V., Eindhoven, Netherlands) — a commercially available Dutch-language digital scribe system using NLP for automated note generation from clinical consultations.

## Clinical Setting
Simulation-based usability study. Medical students with clinical experience (n=22) created 430 summaries of mock consultations. Three conditions: manual summarization, fully automated AI summaries, and automated summaries with manual editing. Leiden University Medical Center, Netherlands.

## Evidence Level
Simulation (controlled usability study using mock consultations with medical students; not real clinical deployment)

## Data Source(s)
Mixed (direct timing + validated quality instrument PDQI-9 + automated NLP metrics ROUGE/BERTScore + user survey)

## Article Summary
This Dutch usability study tested a digital scribe (Autoscriber) on 430 mock consultations with 22 medical students. Comparing manual, auto, and auto+edit conditions: automated summaries took slightly less time (186s vs 202s for editing, manual baseline) but scored worse on the PDQI-9 documentation quality instrument (median 25 vs 31). Auto summaries had higher word counts but lower lexical diversity. Student perceptions were mixed — ease of use and time-saving potential noted, but criticized for longer, more rigid structure. Study highlights that blanket automation may not improve quality without editing, and that benefit varies by individual.

## Hypothesis
Not explicitly stated. Implicit hypothesis: a digital scribe system will reduce documentation time without compromising quality.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Documentation Time | Time in seconds to complete clinical note summary across the three conditions (manual vs. auto vs. auto+edit). Direct timing measurement. | [[NB - Net Benefits]] |
| PDQI-9 (Physician Documentation Quality Instrument) | A validated 9-item instrument for rating clinical note quality across dimensions including accuracy, organization, and relevance. Blinded reassignment of notes for scoring. | [[IQ - Information Quality]] |
| Word Count | Number of words in the generated summary. Auto-generated notes had significantly higher word counts — potential indicator of note bloat. | [[IQ - Information Quality]] |
| Lexical Diversity | Measure of vocabulary variety in the note text. Lower in auto-generated notes, suggesting more formulaic/repetitive language. | [[IQ - Information Quality]] |
| ROUGE Score | Automated text overlap metric comparing AI-generated summaries to manual reference summaries. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| BERTScore | Semantic similarity metric using contextual embeddings to compare generated vs. reference summaries. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| User Satisfaction / Perceived Usefulness | Student-reported perceptions of the digital scribe's ease of use and utility, captured via post-study survey. | [[US - User Satisfaction]] |

---
*Reviewed by Iris | Source: JMIR AI 2024 | DOI: 10.2196/60020 | Template v2.0*
*📍 Notable: One of only two non-US papers in the corpus (Netherlands). Uses simulation rather than real clinical deployment. Applies PDQI-9 quality instrument — one of few validated quality measurement tools in the literature. Same first author (van Buchem) also authored the earlier 2021 scoping review on digital scribes (also in the corpus).*
