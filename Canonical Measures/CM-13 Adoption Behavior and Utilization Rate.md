# CM-13 Adoption Behavior and Utilization Rate

**D&M Dimension:** [[U - Use]]

## Definition
Actual, observed use of the ambient AI scribe — measured as % of encounters in which the tool is used, number of sessions, or paid adoption post-trial. Captures behavior (what people actually do), not intention (what they say they'll do).

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Utilization rate (% of encounters) | % of eligible encounters using ambient AI | EHR / product telemetry |
| Total uses / sessions | Aggregate ambient AI interactions over a period | Product telemetry |
| Adoption rate (% purchasing post-trial) | % of trial participants who became paying users | Operational |
| Active user count over time | Number of unique active users per period | Product telemetry |
| SmartSection utilization by type | Which note sections are populated with AI content | Product telemetry |
| Dose-response / quartile analysis | Users stratified by utilization intensity; outcome by dose | EHR telemetry |

## Aliases Used in Literature
- Utilization Rate ([[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford|Ma 2025]]: 55%)
- Adoption Rate ([[AAFP 2021 - Using AI Assistant Reduce Documentation Burden Family Medicine|AAFP 2021]]: 60% post-trial)
- Scribe Utilization Rate ([[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations|Afshar 2025]]: 65.4%)
- SmartSection Utilization ([[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford|Ma 2025]])
- Ambient Usage Level ([[You 2025 - Ambient Documentation Technology Documentation Burden Burnout|You 2025]])
- Use Volume Over Time ([[Tierney 2025 - Ambient AI Scribes Learnings 1 Year 2.5 Million Uses|Tierney 2025]]: 2.5M uses in 1 year)
- User Adoption Predictors ([[Tierney 2025 - Ambient AI Scribes Learnings 1 Year 2.5 Million Uses|Tierney 2025]])
- Days of Use as Moderator ([[Pearlman 2025 - AI Scribe EHR Efficiency|Pearlman 2025]])
- Utilization Stratification ([[Olson 2025 - Ambient AI Scribes Administrative Burden Burnout|Olson 2025]])
- Voice Memo Frequency ([[Omon 2025 - Generative AI Rehabilitation Clinical Documentation|Omon 2025]])
- AI Scribe Use Quartile ([[Pearlman 2025 - AI Scribe EHR Efficiency|Pearlman 2025]])
- Portion of Notes Manually Typed ([[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden|Duggan 2025]])

> **Removed alias:** *Vendor Transition* (Tierney 2025) — not a correct interpretation; vendor switching is not a measure of adoption behavior.

## ⚠️ Key Note
**Heavy-user/light-user heterogeneity is universal.** Every large deployment reports a bimodal distribution: heavy users who use ambient AI for nearly all encounters, and light/non-users. Dose-response is consistent: heavy users benefit most (Pearlman 2025, Omon 2025, Lukac 2025). Tierney 2025 found top-third of users account for disproportionate % of 2.5M total uses.

## Papers Measuring This (13)
- [[AAFP 2021 - Using AI Assistant Reduce Documentation Burden Family Medicine]]
- [[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations]]
- [[Albrecht 2025 - Ambient AI Clinical Documentation QI Survey]]
- [[Duggan 2025 - Clinician Experiences Ambient Scribe Documentation Burden]]
- [[Evans 2025 - AI Scribe Allied Health Private Practice Australia]]
- [[Guo 2025 - Ambient Listening EPIC Signal Data Physician Workload]]
- [[Lukac 2025 - RCT Two Ambient AI Scribes Documentation Efficiency Burnout]]
- [[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford]]
- [[Omon 2025 - Generative AI Rehabilitation Clinical Documentation]]
- [[Shah 2025 - Physician Perspectives Ambient AI Scribes]]
- [[Tierney 2025 - Ambient AI Scribes Learnings 1 Year 2.5 Million Uses]] (linear growth, top-third users drive 89% of 2.57M encounters, age not predictive, vendor-agnostic habits)
- [[You 2025 - Ambient Documentation Technology Documentation Burden Burnout]]
- [[Billings 2025b - Practicing Value-Based Care with AI]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
