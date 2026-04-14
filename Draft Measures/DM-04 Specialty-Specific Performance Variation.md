# DM-04 Specialty-Specific Performance Variation

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[SQ - System Quality]]

## Definition
The degree to which ACI tool performance (accuracy, completeness, usability, time savings) varies across clinical specialties — from straightforward primary care visits to complex subspecialty encounters involving specialized terminology, multi-system assessments, and procedural documentation.

## Hypothesized Stakeholder(s)
- **CMIO** — responsible for ensuring the tool works across the organization's full specialty mix; a tool that works for primary care but fails for cardiology or surgery is not enterprise-ready
- **COO** — rollout planning and resource allocation depend on knowing which specialties will succeed vs. struggle

## Rationale
The corpus includes studies across multiple specialties, but almost none directly compares performance across specialties within the same study. Most pilot studies focus on primary care or a single specialty. Executives deploying enterprise-wide need to know where the tool works well and where it doesn't, rather than extrapolating from a primary care pilot to orthopedic surgery.

## Relationship to Existing Canonical Measures
- [[CM-08 Note Completeness]] — completeness likely varies by specialty complexity but isn't measured that way
- [[CM-09 Note Accuracy]] — accuracy challenges differ by specialty (dermatology descriptions vs. psychiatric assessments vs. surgical operative notes)
- [[CM-24 System Quality]] — specialty-specific performance is a dimension of system quality not currently captured
- [[CM-04 Documentation Time]] — time savings may vary dramatically by encounter complexity and specialty

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Cross-specialty accuracy comparison | Standardized note quality assessment across 3+ specialties using the same tool | Chart audit |
| Specialty-stratified satisfaction survey | User satisfaction and perceived accuracy broken out by clinical specialty | Survey |
| Encounter complexity analysis | Performance metrics stratified by encounter complexity (e.g., number of diagnoses, visit type) | EHR data + chart audit |
| Specialty-specific failure mode analysis | Cataloging the types of errors most common in each specialty | Clinician reports + chart audit |

## Key Questions for Validation
- Which specialties in your organization have adopted ACI most readily, and which have resisted?
- Have you observed performance differences across specialties, and if so, what kinds?
- Would specialty-specific performance data change your rollout strategy or product selection?
- Are there specialties where you consider ACI documentation too risky to deploy?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
