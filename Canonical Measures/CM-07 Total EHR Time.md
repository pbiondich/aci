# CM-07 Total EHR Time

**D&M Dimension:** [[II - Individual Impact]]

## Definition
Total time spent in the EHR across all tasks — note-writing, inbox management, order entry, results review, messaging — normalized per scheduled workday. Broader than documentation time alone; captures the total EHR burden.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| EHR audit-log (total active time) | All keystrokes/clicks in EHR, normalized per 8-hour workday | EHR telemetry |
| Total time in EHR per appointment | All EHR tasks per visit, including non-documentation | EHR telemetry |

## Aliases Used in Literature
- Total EHR Time ([[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford|Ma 2025]]: −19.95 min/day)
- Total Time in EHR per Appointment ([[Pearlman 2025 - AI Scribe EHR Efficiency|Pearlman 2025]])
- Daily EHR Time *(⚠️ verify source)*
- Time in Documentation and EHR ([[Tierney 2024 - Ambient Artificial Intelligence Scribes Alleviate Burden Clinical Documentation|Tierney 2024]])

## ⚠️ Key Note
**Emerging measure — only 5 papers measure this explicitly.** Ma 2025 found −19.95 min/day total EHR time (largest effect in corpus) while only −6.89 min/day for documentation time specifically — suggesting ambient scribes reduce EHR burden beyond just note-writing, possibly by enabling faster note closure and less revisiting.

## Papers Measuring This (5)
- [[Cao 2024 - Artificial Intelligence-Driven Digital Scribes Dermatology]]
- [[Liu 2024 - AI Powered Clinical Documentation Clinicians EHR Experience]]
- [[Ma 2025 - Ambient AI Scribes Utilization Documentation Time Stanford]]
- [[Pearlman 2025 - AI Scribe EHR Efficiency]]
- [[Tierney 2024 - Ambient Artificial Intelligence Scribes Alleviate Burden Clinical Documentation]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
