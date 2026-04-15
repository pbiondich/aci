# A Few Words About Canonical Measures

## Derivation Method
These 25 canonical measures were **derived bottom-up** from 494 raw measure rows extracted from Study Measures tables across 54 papers in the corpus. They were NOT pre-defined — they emerged from clustering synonymous and related measures into conceptually distinct constructs.

Prior to this derivation (2026-03-24), the vault contained 11 seeded measures that were imposed top-down from early in the project. Those have been replaced by this evidence-grounded set.

## The 25 Canonical Measures

### Domain: Clinician Well-Being (US)
| ID | Name | Papers |
|---|---|---|
| CM-01 | Clinician Burnout and Exhaustion | 16 |
| CM-02 | Cognitive and Task Load | 11 |
| CM-03 | Professional Fulfillment and Meaningfulness | 10 |

### Domain: Documentation Efficiency (NB)
| ID | Name | Papers |
|---|---|---|
| CM-04 | Documentation Time | 31 |
| CM-05 | After-Hours Documentation | 19 |
| CM-06 | Chart Closure Timeliness | 8 |
| CM-07 | Total EHR Time | 5 |

### Domain: Note Information Quality (IQ)
| ID | Name | Papers |
|---|---|---|
| CM-08 | Note Completeness and Omission Rate | 11 |
| CM-09 | Note Inaccuracy Rate | 14 |
| CM-10 | Note Quality Overall | 17 |
| CM-11 | Note Length and Verbosity | 11 |
| CM-12 | Automated NLP Evaluation Metrics *(methodological)* | 7 |

### Domain: Adoption & Use (U)
| ID | Name | Papers |
|---|---|---|
| CM-13 | Adoption Behavior and Utilization Rate | 13 |
| CM-14 | Adoption Intention and Long-Term Use | 6 |

### Domain: User Satisfaction (US)
| ID | Name | Papers |
|---|---|---|
| CM-15 | Provider Satisfaction and Usability | 21 |
| CM-16 | Provider Trust in AI | 6 |

### Domain: Patient Outcomes (NB)
| ID | Name | Papers |
|---|---|---|
| CM-17 | Patient Experience and Relationship Quality | 18 |
| CM-18 | Physician-Patient Interaction Quality | 12 |
| CM-19 | Clinical Patient Safety | 9 |

### Domain: Financial & Organizational (NB)
| ID | Name | Papers |
|---|---|---|
| CM-20 | Financial Productivity and Revenue Impact | 8 |
| CM-21 | Coding Accuracy ICD-10 HCC and EM | 6 |
| CM-22 | Patient Volume and Throughput | 7 |

### Domain: Implementation (SerQ)
| ID | Name | Papers |
|---|---|---|
| CM-23 | Implementation Barriers and Workflow Fit | 12 |

### Domain: System Quality (SQ)
| ID | Name | Papers |
|---|---|---|
| CM-24 | Transcription and ASR Accuracy | 3 |
| CM-25 | Evaluation Methodology Quality *(meta)* | 14 |

## Key Derivation Decisions

1. **Burnout splits into 3:** Burnout/Exhaustion (CM-01) + Cognitive Load (CM-02) + Professional Fulfillment (CM-03) — Afshar 2025b RCT proved these are dissociable
2. **Documentation time splits into 4:** Doc Time (CM-04) + After-Hours (CM-05) + Chart Closure (CM-06) + Total EHR Time (CM-07) — each has distinct null/significance patterns
3. **Note quality splits into 5:** Completeness/Omissions (CM-08) + Inaccuracy Rate (CM-09) + Overall Quality (CM-10) + Length (CM-11) + NLP Metrics (CM-12)
4. **Financial outcomes split into 3:** Financial Productivity/RVU (CM-20) + Coding Accuracy (CM-21) + Patient Volume (CM-22)
5. **Patient outcomes split into 3:** Patient Experience (CM-17) + Interaction Quality (CM-18) + Patient Safety (CM-19)

---
*Updated: 2026-04-15 | Derived from 494 raw measure rows, 54 papers*

**2026-04-15 update:** Paper counts refreshed after automated linkage validation (25 missing links fixed across 15 CMs). CM-09 renamed to "Note Inaccuracy Rate"; CM-10 renamed to "Note Quality Overall" (accommodates SAIL Score alongside PDQI-9).
