# D&M Mapping Guide
## How Measures Are Assigned to DeLone & McLean IS Success Model Dimensions

> ⚠️ **RULE: Full text required.** Article abstractions may NOT be completed without reading the full text of the paper. If full text is inaccessible, mark as `🚫 FULL TEXT UNAVAILABLE` and flag for Paul to provide the PDF.

This document defines the decision rules used when tagging study measures to D&M dimensions in article reviews. It exists to ensure consistency across all 56 papers and to make the mapping logic transparent and auditable.

---

## The Six Dimensions

| Code | Dimension | Core Question |
|---|---|---|
| **SQ** | System Quality | Does the *tool itself* work reliably and accurately? |
| **IQ** | Information Quality | Is the *output* (the note) accurate, complete, and useful? |
| **SerQ** | Service Quality | Is the *vendor/deployment experience* effective and supportive? |
| **U** | Use / Intention to Use | Do people actually *use* it, and how much? |
| **US** | User Satisfaction | How do people *feel* about it? |
| **NB** | Net Benefits | What *downstream outcomes* does it produce? |

---

## Decision Rules

### SQ — System Quality
Assign when the measure assesses the **technical performance of the tool itself** : upstream of the note.

✅ Assign SQ to:
- Transcription accuracy (e.g., Word Error Rate)
- Speaker diarization accuracy (who said what)
- System reliability, uptime, latency
- Medical Term Recall (MTR), clinical vocabulary capture in transcription
- Automated pipeline evaluation (LLM-as-evaluator agreement, benchmark availability)
- Specialty coverage in evaluation datasets (a proxy for breadth of technical validity)

❌ Do NOT assign SQ to:
- Note quality (that's IQ, the output, not the machine)
- Provider experience with the system (that's US or SerQ)

---

### IQ — Information Quality
Assign when the measure assesses the **quality, accuracy, or completeness of the generated clinical note** : the output artifact.

✅ Assign IQ to:
- Note accuracy / factual correctness (does the note reflect what was said?)
- Hallucination rate / fabricated content in notes
- Note completeness (are all clinically relevant elements captured?)
- ICD-10 / coding accuracy (quality of diagnostic coding in the note)
- Documentation quality instrument scores (e.g., PDQI-9)
- ROUGE / BERTScore (automated note similarity to reference)
- Fluency, clarity, readability of notes (human-rated)
- Word count / lexical diversity (as note structure proxies)
- Medication capture accuracy (e.g., new medication documentation)

❌ Do NOT assign IQ to:
- Time to create the note (that's NB)
- Provider satisfaction with the note (that's US, their feeling about it, not the note's objective quality)

---

### SerQ, Service Quality
Assign when the measure assesses the **vendor, implementation, or support experience** : the organizational and operational wrapper around the tool.

✅ Assign SerQ to:
- Patient consent compliance (governance/regulatory implementation responsibility)
- Onboarding and training quality
- EHR integration experience (FHIR, API, technical support responsiveness)
- Learning curve and workflow adaptation support
- Implementation barriers related to access, training, rollout
- Governance model effectiveness

❌ Do NOT assign SerQ to:
- Provider satisfaction with the product itself (that's US)
- Adoption rates (that's U)

---

### U — Use / Intention to Use
Assign when the measure captures **whether and how much the tool is actually used**.

✅ Assign U to:
- Utilization rate (% of eligible encounters using ambient AI)
- Voice memo / recording frequency
- Adoption stratification (high/medium/low user groups)
- Implementation intent / willingness to continue using
- Adoption behavior over time (uptake trends, attrition)

❌ Do NOT assign U to:
- Satisfaction with the tool (that's US)
- Why people don't use it / barriers (those are SerQ or US depending on nature)

---

### US — User Satisfaction
Assign when the measure captures **how people subjectively experience the tool** : their perceptions, feelings, and self-reported well-being.

✅ Assign US to:
- Burnout measures (validated instruments like MBI, single-item burnout)
- Provider well-being surveys
- Perceived documentation burden (self-reported, not clock time)
- NASA-TLX and other subjective workload instruments
- Provider satisfaction scores / Likert ratings
- Sentiment analysis of provider feedback
- Trust in AI / skepticism
- Specialty-specific satisfaction variation
- Patient engagement perceived from the provider's perspective

❌ Do NOT assign US to:
- Objective time savings (that's NB)
- Note quality ratings (that's IQ, unless it's the provider's *perception* of quality)

> **Note on perception vs. objective:** If a measure is a provider's *subjective rating* of note quality, that can be coded as both IQ (as a quality proxy) and US (as a satisfaction signal). When in doubt, ask: is this measuring the note, or the person's feeling?

---

### NB — Net Benefits
Assign when the measure captures **downstream outcomes** : the concrete value generated by using the system.

✅ Assign NB to:
- Objective documentation time (clock-measured time to complete notes)
- Work Outside Work / after-hours EHR time
- Documentation efficiency (time from encounter end to signed note)
- Note length (as output efficiency proxy)
- Revenue per encounter, coding accuracy (financial impact)
- Patient throughput / visit volume
- Clinical quality indicators (HEDIS capture, HCC documentation)
- ICD-10 accuracy (both IQ and NB, note quality + financial/compliance impact)
- Patient care outcomes (when present)

❌ Do NOT assign NB to:
- Provider feelings about time savings (that's US, perception)
- Note quality (that's IQ)

---

## Dual-Coding Rules

Some measures legitimately span two dimensions. When dual-coding, list both (e.g., `IQ, NB`). Common pairs:

| Measure | Why dual-coded |
|---|---|
| ICD-10 Coding Accuracy | IQ (note quality) + NB (compliance/revenue impact) |
| Work Outside Work (WOW) | NB (efficiency outcome) + US (well-being proxy) |
| NASA-TLX | US (subjective perception) + NB (workload reduction outcome) |
| Documentation Quality Scores | IQ (note quality), but if provider-rated, can add US |
| Patient Engagement | US (provider's felt experience) + NB (care quality outcome) |
| Willingness to Adopt | U (adoption intent) + US (satisfaction signal) |

---

## When to Flag Uncertainty

Add a note in the article if:
- The paper doesn't define how a measure was operationalized
- The same label (e.g., "documentation burden") is used for both subjective and objective data
- A vendor-provided metric lacks external validation

---
*Mapping guide version 1.0, Created 2026-03-24 by Iris*
*Review annually or when new D&M literature suggests refinements.*

*Licensed under [CC BY-SA 4.0](../LICENSE) — [github.com/pbiondich/aci](https://github.com/pbiondich/aci)*
