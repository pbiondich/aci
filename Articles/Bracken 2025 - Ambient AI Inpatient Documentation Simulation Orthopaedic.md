# Article Review

---

## Article Title
Ambient AI reduces documentation time and enhances quality in a simulated inpatient setting

## Author(s)
Bracken, Aisling; Babu, Anita Rose; Whelehan, Seán; Merghani, Khalid; Sheehan, Eoin; Feeley, Iain

## DOI
[10.1016/j.surge.2025.10.008](https://doi.org/10.1016/j.surge.2025.10.008)

## Journal / Source
The Surgeon | Vol. 24, Issue 2 | April 2026 | pp. 119–125. Royal College of Surgeons of Edinburgh / Royal College of Surgeons in Ireland. Published by Elsevier Ltd. Received September 15, 2025; Accepted October 28, 2025. Irish study — RCSI / Midlands Regional Hospital Tullamore / University of Limerick.

## Ambient Product(s) Evaluated
**Heidi Health** (Melbourne, Australia) — a general-purpose ambient AI documentation platform compliant with GDPR, HIPAA, and NHS standards. A customized progress note and discharge summary template was configured for the orthopaedic service; orthopaedic terminology added to Heidi's "memory bank." This is one of very few papers in the corpus evaluating Heidi Health specifically.

## Clinical Setting
Simulation study — no real patients. Clinical skills and simulation laboratory at Midlands Regional Hospital Tullamore (Ireland). 7 postgraduate year-1 (PGY-1) junior doctors (interns) with orthopaedic ward experience. 15 mock inpatient cases simulating orthopaedic trauma, infection, and elective procedures (admission 1–7 days). Background noise deliberately introduced to replicate ward environment. 150 total clinical documents: 120 progress notes (60 manual retrospective, 60 AI real-time) + 30 discharge summaries (15 manual, 15 AI). Two independent blinded PDQI-9 reviewers; consensus resolution with third author.

## Evidence Level
Observational (simulation study — within-subjects comparison)

## Data Source(s)
Direct time measurement (seconds) | PDQI-9 note quality assessment (blinded) | NASA-TLX workload assessment (pre/post)

## Article Summary
This Irish simulation study is the **only paper in the corpus focusing on inpatient ward round documentation** (all other papers examine ambulatory/outpatient settings). 7 junior doctors participated in simulated orthopaedic ward rounds using Heidi Health ambient AI, generating 150 documents across progress notes and discharge summaries. Results: ambient AI reduced progress note time by **78.9%** (median 27s vs. 128s, p<.0001; large effect r=0.87) and discharge summary time by **75%** (median 114s vs. 459s, p<.0001). Time savings scaled with complexity — the more complex the case, the greater the absolute time saving. Documentation quality improved significantly: progress notes PDQI-9 median 43.5 vs. 41 (p=.002); discharge summaries 40 vs. 33 (p<.0001). Crucially, **no significant difference in accuracy** for either document type — quality gains were in thoroughness, currency, usefulness, comprehensibility, organization, internal consistency, and synthesis rather than accuracy. 55% of AI notes required no edits at all; 40% needed minor formatting fixes; only 3% (2/60) had clinically significant errors. NASA-TLX: all 6 domains improved, with largest gains in frustration (−79%) and effort (−81%).

## Hypothesis
Explicit: to examine the impact of an ambient AI scribe on documentation timing, quality, and workload in a simulated orthopaedic inpatient setting.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Progress Note Time (seconds) | AI: median 27s (IQR 18–39.75) vs. manual: 128s (IQR 112.3–168.8). Reduction 78.9% (p<.0001, r=0.87). By complexity: simple −82s, moderate −113s, complex −158s. 96.6% of AI notes reviewed in <60s. | [[NB - Net Benefits]] |
| Discharge Summary Time (seconds) | AI: median 113.9s (IQR 64.4–143.5) vs. manual: 458.7s (IQR 367.9–663.5). Median difference 356.6s (p<.0001, r=0.88). By complexity: simple −5min, moderate −5.5min, complex −12min. | [[NB - Net Benefits]] |
| Progress Note PDQI-9 Overall | AI: median 43.5 (IQR 41–45) vs. manual: 41 (IQR 38.25–43). p=.002, r=0.43. Significant difference only for simple encounters; moderate and complex encounters NS. | [[IQ - Information Quality]] |
| Progress Note PDQI-9 — Thoroughness | AI significantly better (p<.0001, r=0.62). | [[IQ - Information Quality]] |
| Progress Note PDQI-9 — Currency (Up to Date) | AI significantly better (p=.0046, r=0.42). | [[IQ - Information Quality]] |
| Progress Note PDQI-9 — Usefulness | AI significantly better (p=.0069, r=0.49). | [[IQ - Information Quality]] |
| Progress Note PDQI-9 — Accuracy | **No significant difference** (p=.705, r=0.07). AI did not compromise accuracy. | [[IQ - Information Quality]] |
| Discharge Summary PDQI-9 Overall | AI: median 40 (IQR 40–43) vs. manual: 33 (IQR 31–37). p<.0001. Larger gap than progress notes; widens with complexity. | [[IQ - Information Quality]] |
| Discharge Summary PDQI-9 — Comprehensibility, Org, Consistency, Synthesis | All 4 domains significantly better with AI (p=.001, .0001, .0039, .0005). | [[IQ - Information Quality]] |
| Discharge Summary PDQI-9 — Accuracy | **No significant difference** (p=.299). Consistent with progress notes. | [[IQ - Information Quality]] |
| Clinically Significant Errors in AI Notes | 2/60 progress notes (3%) had clinically significant errors. 55% required no edits. 40% minor formatting only. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| NASA-TLX — All Domains | All 6 domains improved pre→post ambient AI. Frustration: −79%. Effort: −81%. Largest workload relief of any paper in the corpus on NASA-TLX. | [[US - User Satisfaction]] |

---

## Complexity vs. Time Savings Summary (Progress Notes)

| Complexity | AI Mean Time | Manual Mean Time | Cohen's d |
|---|---|---|---|
| Simple (n=23) | 23.7s | 105.7s | 3.08 |
| Moderate (n=21) | 26.7s | 139.2s | 3.77 |
| Complex (n=16) | 41.2s | 199.1s | 2.67 |

---
*Reviewed by Iris | Source: The Surgeon 2025 | DOI: 10.1016/j.surge.2025.10.008 | Template v2.0 | Full text reviewed ✅*
*📍 Only inpatient/ward round paper in the entire corpus. Every other study is ambulatory/outpatient. This is a significant gap filler.*
*📍 Irish setting — adds geographic diversity (Republic of Ireland). NHS guidance and Ireland's Digital for Care framework both cited as policy context. Non-US, non-Australian perspective.*
*📍 Heidi Health — one of the few non-DAX/non-Abridge/non-Suki products evaluated in the corpus.*
*📍 Complexity scaling: The more complex the case, the greater the absolute time saving. AI advantage over manual documentation grows with complexity. Discharge summary for complex cases: AI in 2.4 min vs. manual 14.3 min.*
*📍 Accuracy unchanged at all complexity levels — one of the strongest safety findings in the corpus. The quality gains come from thoroughness, currency, and organization, not at the expense of accuracy.*
*📍 3% clinically significant error rate (2/60 notes) is reassuringly low but still present. Physician review essential.*
*📍 NASA-TLX frustration −79% and effort −81% are the largest workload reductions of any paper measuring NASA-TLX (compare: Omon 2025 found only temporal demand improved; Stults 2025 showed NASA-TLX improvements in an ambulatory setting).*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
