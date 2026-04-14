# DM-10 Scalability Evidence

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[SQ - System Quality]]

## Definition
Evidence that ACI tool performance, reliability, and outcomes hold at enterprise scale — across hundreds of providers, multiple specialties, and multiple sites — rather than degrading as deployment expands beyond a pilot cohort. Distinct from system reliability (DM-09), which measures uptime; scalability measures whether outcomes observed in a small pilot generalize to full organizational deployment.

## Hypothesized Stakeholder(s)
- **COO** — responsible for enterprise rollout planning; needs to know if pilot results will hold at scale
- **CFO** — investment decisions based on pilot data require confidence that returns will scale proportionally

## Rationale
Most studies in the corpus are small — single site, tens of clinicians, weeks to months of follow-up. The few large-scale studies (e.g., Tierney 2025 with 2.5 million encounters) are exceptions. Executives making enterprise deployment decisions based on 30-clinician pilot results are extrapolating without evidence. Performance may degrade at scale due to infrastructure load, specialty variation, training quality dilution, or support resource constraints.

## Relationship to Existing Canonical Measures
- [[CM-13 Adoption Behavior and Utilization Rate]] — adoption rates in pilots may not predict enterprise-wide adoption
- [[CM-04 Documentation Time]] — time savings observed in a motivated pilot cohort may not generalize to less motivated later adopters
- [[CM-23 Implementation]] — implementation challenges multiply at scale

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Phased rollout outcome tracking | Key metrics measured at each deployment phase (pilot, expansion, enterprise) | EHR telemetry + survey |
| Outcome degradation analysis | Whether time savings, satisfaction, and quality metrics decline as deployment scales | Longitudinal EHR + survey data |
| Late adopter vs. early adopter comparison | Whether clinicians onboarded later achieve similar outcomes to pilot participants | EHR telemetry + survey |
| Multi-site consistency assessment | Whether outcomes are consistent across different sites within the same organization | Site-stratified analysis |

## Key Questions for Validation
- Have you observed differences in outcomes between your pilot cohort and later adopters?
- Did any metrics degrade as you scaled from pilot to broader deployment?
- What surprised you most about scaling beyond the initial pilot?
- Would published scalability evidence influence your product evaluation?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*
