# Article Review

---

## Article Title
A Novel Playbook for Pragmatic Trial Operations to Monitor and Evaluate Ambient Artificial Intelligence in Clinical Practice

## Author(s)
Afshar, Majid; Resnik, Felice; Baumann, Mary Ryan; Hintzke, Josie; Lemmon, Kayla; Sullivan, Anne Gravel; Shah, Tina; Stordalen, Anthony; Oberst, Michael; Dambach, Jason; Mrotek, Leigh Ann; Quinn, Mariah; Abramson, Kirsten; Kleinschmidt, Peter; Brazelton, Tom; Twedt, Heidi; Kunstman, David; Wills, Graham; Long, John; Patterson, Brian W.; Liao, Frank J.; Rasmussen, Stacy; Burnside, Elizabeth; Goswami, Cherodeep; Gordon, Joel E.

## DOI
[10.1056/aidbp2401267](https://doi.org/10.1056/aidbp2401267)

## Journal / Source
NEJM AI | Vol. 2, Issue 9 | Published: August 28, 2025

## Ambient Product(s) Evaluated
[[Abridge]] (©Abridge AI, Inc.), integrated with [[Epic]] EHR via FHIR R4 APIs and Epic Haiku mobile application at University of Wisconsin Hospitals and Clinics.

## Clinical Setting
Multi-specialty outpatient care at University of Wisconsin Hospitals and Clinics (UW Health). 66 providers enrolled across 8 specialties. Providers required to treat ≥20 patients/week and use Epic Haiku.

## Evidence Level
Quality Improvement (implementation phase) + RCT protocol (trial design described; primary results pending)

## Data Source(s)
Product telemetry | EHR data | Survey/self-report | Mixed

## Article Summary
This paper presents the "PTOps Playbook" — a pragmatic trial operations framework for implementing and evaluating ambient AI in routine clinical care. The team ran an implementation phase at UW Health using Abridge integrated with Epic, establishing governance, technical workflows, and real-time monitoring dashboards. Key findings included a 65.4% weighted median utilization rate and a temporary drop in ICD-10 coding accuracy (79% → 35%) due to a note template change, which recovered after redesign and retraining. The paper also describes the design for a 24-week stepped-wedge RCT powered for provider well-being as the primary outcome.

## Hypothesis
Integrating ambient AI into clinical workflows using a bidirectional governance model and a real-time monitoring framework will yield high adoption within a defined operational timeline and achieve acceptable documentation accuracy and workflow efficiency.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Utilization Rate | Proportion of eligible clinical notes actually completed using the ambient AI system. Measured as weighted median across providers over time; captures real-world adoption behavior. | [[U - Use]] |
| Time in Notes | Time providers spend actively writing or editing notes within the EHR. Tracked via Epic metadata; assesses whether ambient AI reduces direct documentation effort. | [[II - Individual Impact]] |
| Work Outside Work (WOW) | Time spent on EHR documentation outside scheduled work hours. A proxy for after-hours administrative burden and indicator of potential burnout risk reduction. | [[II - Individual Impact]], [[US - User Satisfaction]] |
| ICD-10 Coding Accuracy | Accuracy of diagnostic codes in AI-generated notes, audited using an internally developed LLM validated against certified professional coders (Pearson's r=0.97). | [[IQ - Information Quality]], [[OI - Organizational Impact]] |
| Provider Well-Being | Primary RCT outcome; assessed via validated survey instruments. Designed to detect meaningful change in burnout and professional satisfaction across 66 providers. | [[US - User Satisfaction]] |
| Patient Consent Compliance | Rate at which providers obtained and documented required patient consent before ambient AI recording. Monitored in real time; ensures regulatory and ethical compliance. | [[SerQ - Service Quality]] |
| Documentation Efficiency | Time from end of patient encounter to note completion and signature. Tracks whether ambient AI accelerates the documentation cycle relative to standard practice. | [[II - Individual Impact]] |
| Provider Feedback / User Experience | Qualitative and survey-based assessments of provider satisfaction, usability concerns, and workflow friction. Collected via REDCap; drives iterative PDSA improvement cycles. | [[US - User Satisfaction]], [[SerQ - Service Quality]] |

---
*Reviewed by Iris | Source: NEJM AI 2025 | DOI: 10.1056/aidbp2401267 | Template v2.0*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
