# DM-02 Coding and Billing Accuracy Impact

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[NB - Net Benefits]]

## Definition
The effect of AI-generated clinical documentation on downstream coding accuracy, claim denial rates, and coding specificity. Measures whether ambient-generated notes produce cleaner claims and more accurate E&M level coding compared to clinician-authored notes.

## Hypothesized Stakeholder(s)
- **CFO** — claim denials and coding accuracy directly affect revenue cycle performance
- **CMIO** — coding accuracy reflects documentation quality and has compliance implications

## Rationale
ACI tools generate the clinical narrative that coders use to assign billing codes. If AI-generated notes are more complete, coding may improve. If they contain hallucinated or templated content, coding may become less accurate or trigger audits. No study in the corpus directly measures the revenue cycle impact of ACI-generated documentation, despite this being a primary financial justification cited by vendors.

## Relationship to Existing Canonical Measures
- [[CM-08 Note Completeness]] — complete notes support accurate coding, but completeness alone doesn't guarantee coding accuracy
- [[CM-09 Note Accuracy]] — accurate clinical content is necessary but not sufficient for correct billing codes
- [[CM-20 Financial Productivity and Revenue Impact]] — RVU changes may partly reflect coding changes, but CM-20 doesn't isolate the coding mechanism

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Claim denial rate comparison | Pre/post denial rates for ACI-documented vs. traditionally documented encounters | Revenue cycle data |
| Coding specificity audit | Blinded coder review of AI-generated vs. clinician-authored notes for coding accuracy | Chart audit |
| E&M level distribution shift | Changes in E&M code level distribution after ACI adoption | Billing data |
| Coding query rate | Frequency of coder queries back to clinicians for clarification | Coding department logs |

## Key Questions for Validation
- Have you observed any changes in coding accuracy or claim denial rates since adopting ACI?
- Do your coders report differences in the quality of AI-generated notes for coding purposes?
- Would coding accuracy data influence your decision to continue or switch ACI products?
- Is there concern about audit risk from AI-generated documentation?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
