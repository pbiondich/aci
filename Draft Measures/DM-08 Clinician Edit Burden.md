# DM-08 Clinician Edit Burden

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[NB - Net Benefits]]

## Definition
The amount of clinician time and effort required to review, correct, and finalize an AI-generated note before signing — including additions, deletions, and restructuring. Distinct from documentation time (CM-04), which measures total time from note initiation to signature. Edit burden isolates the post-generation review phase and captures whether the AI draft actually reduces net effort or merely shifts it.

## Hypothesized Stakeholder(s)
- **CMIO** — a tool that generates notes quickly but requires extensive editing hasn't solved the problem; edit burden is the true measure of clinical workflow impact
- **CPO** — if edit burden is high, clinician frustration may offset burnout benefits

## Rationale
Several studies in the corpus report documentation time reductions, but few separate generation time from editing time. A tool that produces a draft in 10 seconds but requires 8 minutes of editing has a different value proposition than one that produces a near-final draft. Clinician reports of "I spend all my time fixing the AI's mistakes" suggest edit burden may be substantial for some products or specialties, but this isn't systematically measured.

## Relationship to Existing Canonical Measures
- [[CM-04 Documentation Time]] — CM-04 includes editing time but doesn't isolate it; a tool could reduce total time while still having high edit burden
- [[CM-09 Note Accuracy]] — accuracy is a predictor of edit burden; more accurate notes require less editing
- [[CM-08 Note Completeness]] — incomplete notes require additions, contributing to edit burden
- [[CM-15 User Satisfaction]] — edit burden likely mediates the relationship between note quality and satisfaction

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Edit distance analysis | Character-level or section-level diff between AI-generated draft and signed final note | EHR audit logs |
| Time-in-editing telemetry | EHR-measured time spent in the note after AI generation and before signature | EHR telemetry |
| Clinician self-report | Survey or diary measure of perceived editing effort per note | Survey |
| Edit type categorization | Classification of edits as additions, deletions, corrections, or restructuring | Chart audit |

## Key Questions for Validation
- Do you currently have visibility into how much clinicians edit AI-generated notes before signing?
- Is edit burden a concern your clinicians have raised?
- Would a high edit burden change your assessment of a tool that otherwise shows time savings?
- Does edit burden vary by specialty, clinician experience, or encounter type in your experience?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
