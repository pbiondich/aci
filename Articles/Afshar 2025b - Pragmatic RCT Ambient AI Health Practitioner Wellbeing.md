# Article Review

---

## Article Title
A Pragmatic Randomized Controlled Trial of Ambient Artificial Intelligence to Improve Health Practitioner Well-Being

## Author(s)
Afshar, Majid; Ryan Baumann, Mary; Resnik, Felice; Hintzke, Josie; Gravel Sullivan, Anne; Wills, Graham; Lemmon, Kayla; Dambach, Jason; Mrotek, Leigh Ann; Quinn, Mariah; Abramson, Kirsten; Kleinschmidt, Peter; Brazelton, Thomas B.; Leaf, Margaret A.; Twedt, Heidi; Kunstman, David; Patterson, Brian; Liao, Frank; Rasmussen, Stacy; Burnside, Elizabeth S.; Goswami, Cherodeep; Gordon, Joel

## DOI
[10.1056/AIoa2500945](https://doi.org/10.1056/AIoa2500945)

## Journal / Source
NEJM AI | Vol. 2, No. 12 | Published: November 26, 2025 | Received: August 20, 2025; Accepted: September 28, 2025

## Ambient Product(s) Evaluated
**Abridge AI, Inc.** — HIPAA-compliant ambient AI documentation platform integrated with Epic via private APIs and FHIR R4 APIs. EHR-embedded, documentation-only (no diagnostic/therapeutic decision support). Deployed version: generally available release as of October 10, 2024.

## Clinical Setting
Ambulatory clinics — UW Health (University of Wisconsin) across Wisconsin and Illinois. Eight specialties. Academic health system. Trial period: August 21, 2024–March 27, 2025. 66 health care practitioners (attending physicians + advanced practice providers).

## Evidence Level
RCT (stepped-wedge, individually randomized pragmatic trial — 24 weeks)

## Data Source(s)
- EHR audit-log data (time on notes, WoW, same-day closure)
- Survey/self-report (Stanford PFI at baseline, 6, 12, 18, 24 weeks)
- Claims/billing (ICD-10 diagnostic coding compliance by certified coders)
- Simulation/automated (PDSQI-9 note quality via LLM-as-judge, validated against physician ratings)

## Article Summary
The most methodologically rigorous trial of ambient AI documentation in the corpus to date. A 24-week stepped-wedge individually randomized pragmatic RCT at UW Health (Wisconsin + Illinois), enrolling 66 health care practitioners across 8 specialties using Abridge AI integrated with Epic. 71,487 total notes authored; 27,092 (38%) generated using ambient AI. Coprimary outcomes: Stanford PFI work exhaustion/interpersonal disengagement (−0.44 points; p<0.001, **significant**) and professional fulfillment (+0.14 points; p=0.04, **nonsignificant by pre-specified alpha of 0.025**). Secondary: documentation time −0.36 hours/day (significant); WoW −0.50 hours/day (significant but sensitive to extreme outliers); billing code compliance improved (p<0.001); PDSQI-9 scores 3.97–4.99/5.0 (high quality); no software performance drift detected.

## Hypothesis
Ambient AI will improve health care practitioners' well-being, yielding higher fulfillment scores and lower work exhaustion/interpersonal disengagement (burnout) scores.

## Study Measures

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Work Exhaustion / Interpersonal Disengagement (PFI) | Stanford PFI 10-item composite; 1–5 scale (higher=worse). Corresponds to burnout. Collected at baseline, 6, 12, 18, 24 weeks. Coprimary outcome. | US, [[II - Individual Impact]] |
| Professional Fulfillment (PFI) | Stanford PFI 6-item subscale; 1–5 scale (higher=better). Coprimary outcome. | US, [[II - Individual Impact]] |
| Time on notes (EHR audit log) | Hours/day spent on notes, normalized to 8-hour workday; from EHR audit-log data. | [[II - Individual Impact]] |
| Work Outside Work (WoW) | Hours/day documenting outside scheduled hours, normalized to 8-hour workday; EHR audit-log. | [[II - Individual Impact]] |
| Same-day / pre-next-visit closure | Proportion of encounters closed same day or before next patient visit; EHR audit-log. | [[II - Individual Impact]] |
| Diagnostic billing compliance | ICD-10 code alignment with documentation; reviewed by certified coders using standardized rubric. Partial credit for insufficient specificity; zero for billing-validity errors. | IQ, [[OI - Organizational Impact]] |
| PDSQI-9 note quality | Provider Documentation Summarization Quality Instrument 9 (adapted); 5-point scale per domain; LLM-as-judge implementation validated against physician ratings. Unedited AI notes evaluated pre-practitioner review. | IQ |
| Task load | Practitioner-reported secondary measure | US |
| Meaningfulness of work | Practitioner-reported secondary measure | US |
| Trust in AI | Practitioner-reported secondary measure | US, U |

---

## Key Findings

### Coprimary Outcomes
- **Work exhaustion/interpersonal disengagement:** −0.44 points (95% CI: −0.62 to −0.25; **p<0.001**) ✅ **SIGNIFICANT**
- **Professional fulfillment:** +0.14 points (95% CI: 0.004 to 0.28; p=0.04) — technically significant at 0.04 but **pre-specified alpha was 0.025 per coprimary** (Bonferroni for 2 primary outcomes). Therefore declared **nonsignificant by pre-specified threshold.**

### Secondary Outcomes (EHR Audit-Log)
- **Time on notes:** −0.36 hours/day (95% CI: −0.55 to −0.17) ✅ **SIGNIFICANT** — ~21 minutes/day
- **Work outside work (WoW):** −0.50 hours/day (95% CI: −0.90 to −0.09) — **significant in primary analysis** but sensitive to extreme values; no longer significant after removing top 3% of daily observations. ⚠️ **Interpret cautiously**
- **Same-day closure:** Not stated as significant in abstract

### Billing and Quality
- **Diagnostic billing compliance:** Improved with ambient AI use (**p<0.001**) — certified coder review showed better ICD-10 alignment with documentation
- **PDSQI-9 note quality:** Mean scores **3.97–4.99 across domains** on 5-point scale — high quality; no domain fell below 3.97
- **No drift in software performance** detected across 24 weeks

### Utilization
- 71,487 total notes; 27,092 (38%) ambient AI-generated
- 3 practitioners discontinued (1 never initiated; 2 due to note template incompatibility in their specialty)
- Full data publicly available: https://git.doit.wisc.edu/smph-public/LearningHealthSystem/ambientlistening

## D&M Analysis

- **US (User Satisfaction):** Burnout/work exhaustion reduced significantly. Professional fulfillment improved but below pre-specified significance threshold. This is the most rigorous burnout reduction finding in the corpus (only paper with RCT design and pre-specified primary outcome).
- **NB (Net Benefits):** −21 min/day documentation time (objective, not self-report). WoW reduction directionally significant but fragile (sensitive to outliers). Billing compliance improvement = net organizational benefit.
- **IQ (Information Quality):** PDSQI-9 scores of 3.97–4.99/5 = high quality across domains. Billing compliance improvement = indirect IQ validation (documentation complete enough for accurate coding). **First corpus paper to show both quality and compliance together in an RCT.**
- **U (Use/Adoption):** 38% of total notes used ambient AI across all practitioners. Stepped-wedge design means all 66 eventually used the tool.

## Methodological Strengths

1. **Stepped-wedge randomized design** — gold standard for pragmatic trials in systems where intervention can't be withheld permanently. Controls for time trends and intrapractitioner correlation.
2. **Pre-specified outcomes and statistical analysis plan** — posted publicly (GitHub) before data lock. No selective reporting risk.
3. **24 weeks** — longest trial duration in corpus. Most previous studies 4–12 weeks.
4. **EHR audit-log for time measures** — objective data, not self-report. 
5. **Billing compliance by certified coders** — independent expert review, not AI-assessed.
6. **PDSQI-9 note quality** — validated instrument on unedited AI notes before practitioner review.
7. **Multi-state, 8 specialties** — broader generalizability than single-site single-specialty studies.
8. **Sample size calculation** — based on historical PFI data, powered at 85% (d=0.44 minimum clinically important difference).
9. **Intention-to-treat analysis** with pre-specified linear mixed models.
10. **Publicly available data and code** — fully reproducible.

## Limitations

- **Single health system** (UW Health) — replication needed
- **WoW finding fragile** — sensitive to top 3% of daily observations; may reflect outlier physicians with extreme documentation habits
- **Professional fulfillment null** — ambient AI reduces exhaustion more than it increases fulfillment. These are dissociable constructs; burnout prevention ≠ fulfillment enhancement
- **Eligibility required "willingness to adopt"** — self-selected towards motivated practitioners
- **Apple device required** — platform constraint; excluded practitioners without Apple mobile

## Corpus Context

- **Second RCT in corpus** (after Lukac 2025, medRxiv). Lukac's primary outcome was documentation efficiency; Afshar's is practitioner well-being — complementary.
- **Most rigorous burnout finding in corpus:** −0.44 PFI work exhaustion in an RCT. Compare to Shah 2024 (−1.94 PFI-WE, but d=0.86, QI not RCT, selection bias). The RCT estimate is smaller — consistent with selection bias inflating QI study results.
- **Billing compliance improvement** echoes Boyter/KLAS 2025 (HCC capture) and Holmgren 2026 (RVU increase). Three independent papers now show coding/billing improvements with ambient AI.
- **PDSQI-9 scores** (3.97–4.99) are the highest IQ scores in corpus. Palm 2025 (Suki authors evaluating Suki) had lower PDQI scores and higher hallucination rates. Abridge appears to perform well on quality in this RCT context.
- **Note:** This is a **separate paper** from Afshar 2025a (DOI: aidbp2401267, "Novel Playbook") which described the trial design/PTOps framework. This paper (AIoa2500945) reports the **actual RCT results**.

---

*Reviewed by Iris | Source: NEJM AI 2025 | DOI: 10.1056/AIoa2500945 | Template v2.0 | Full text reviewed ✅ (PDF provided by Paul)*
*📍 Most methodologically rigorous paper in corpus. Stepped-wedge RCT, 24 weeks, pre-specified outcomes, public data/code. The RCT effect size for burnout (−0.44 PFI) is smaller than QI study estimates — expected given selection bias in non-randomized studies.*
*📍 Professional fulfillment null finding (p=0.04 missed pre-specified 0.025 threshold) is important: ambient AI reduces exhaustion but doesn't increase fulfillment. These are different dimensions of well-being that respond differently to the intervention.*
*📍 WoW finding is fragile — sensitive to extreme outliers. After-hours improvement cannot be considered robust from this trial alone, consistent with the broader "after-hours null" pattern in corpus.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
