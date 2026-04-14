# DM-05 Structured Data Integrity

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[IQ - Information Quality]]

## Definition
Whether AI-generated documentation correctly populates structured EHR data elements — including problem lists, medication lists, allergy lists, order entries, and billing codes — beyond the narrative note itself. A note that reads correctly but fails to update structured fields creates downstream clinical and operational risk.

## Hypothesized Stakeholder(s)
- **CMIO** — structured data integrity is foundational to clinical decision support, population health, and quality reporting
- **COO** — quality measure reporting (HEDIS, MIPS, etc.) depends on accurate structured data

## Rationale
The corpus focuses almost entirely on narrative note quality (completeness, accuracy, concordance). But the clinical note is only one output of the documentation process. If the ACI tool generates a narrative that mentions a new medication but doesn't trigger the corresponding structured medication list update, the downstream impact on CDS alerts, drug-drug interaction checking, and quality reporting could be significant. No study in the corpus measures this.

## Relationship to Existing Canonical Measures
- [[CM-08 Note Completeness]] — completeness of the narrative doesn't guarantee completeness of structured data
- [[CM-09 Note Accuracy]] — narrative accuracy and structured data accuracy are distinct failure modes
- [[CM-19 Clinical Patient Safety]] — structured data errors could propagate into CDS failures and safety events

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Structured field concordance audit | Comparison of narrative note content against structured data updates (problem list, med list, allergies) | EHR data audit |
| CDS alert integrity check | Whether CDS alerts fire appropriately based on AI-documented encounters | EHR system logs |
| Quality measure impact analysis | Whether quality measure capture rates change after ACI adoption | Quality reporting data |
| Order-note concordance | Whether orders placed during the encounter are reflected accurately in both the note and structured fields | EHR data audit |

## Key Questions for Validation
- Does your ACI tool update structured EHR fields, or only generate narrative text?
- Have you observed discrepancies between AI-generated notes and structured data elements?
- Would structured data integrity be a factor in your product evaluation criteria?
- Has ACI adoption affected your quality measure reporting accuracy?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
