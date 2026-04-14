# DM-05 AI Hallucination and Confabulation Rate

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[IQ - Information Quality]]

## Definition
The frequency with which the ACI tool generates clinical content that was not discussed, observed, or present during the clinical encounter — including fabricated symptoms, medications, exam findings, history elements, or assessments. Distinct from note accuracy (CM-09) in that hallucination specifically refers to AI-generated content with no basis in the encounter, rather than misrepresentation of something that was discussed.

## Hypothesized Stakeholder(s)
- **CMIO** — hallucination is arguably the single largest clinical risk of AI-generated documentation; directly threatens patient safety and clinical trust
- **COO** — operational risk if hallucinated content propagates into problem lists, medication lists, or orders

## Rationale
Several studies in the corpus note anecdotally that AI tools sometimes generate content not discussed in the encounter, but no study systematically measures the rate, severity, or clinical consequence of hallucinations. This is a critical gap because hallucinated content that goes undetected by the signing clinician becomes part of the permanent medical record and can propagate through subsequent care decisions.

## Relationship to Existing Canonical Measures
- [[CM-09 Note Accuracy]] — accuracy encompasses hallucination but also includes omissions and mischaracterizations; hallucination is a specific failure mode that warrants separate measurement
- [[CM-19 Clinical Patient Safety]] — hallucinated content is a mechanism through which patient safety events could occur
- [[CM-08 Note Completeness]] — a note can be complete (nothing missing) while still containing hallucinated additions

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Encounter-note comparison audit | Blinded comparison of audio/video encounter recordings against AI-generated note content | Chart audit + encounter recordings |
| Clinician-flagged hallucination tracking | Structured reporting tool for clinicians to flag AI-generated content they did not discuss | Clinician reports |
| Hallucination rate per note section | Systematic assessment of fabrication rates by note section (HPI, ROS, exam, assessment) | Chart audit |
| Severity classification | Categorization of hallucinations by clinical consequence potential (benign vs. could affect care) | Expert review |

## Key Questions for Validation
- How often do your clinicians encounter hallucinated content in AI-generated notes?
- Is there a systematic process for detecting and reporting hallucinations, or is it ad hoc?
- Which note sections are most prone to hallucination in your experience?
- Would a validated hallucination rate metric influence your product evaluation or switching decision?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
