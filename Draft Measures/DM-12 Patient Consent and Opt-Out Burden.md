# DM-12 Patient Consent and Opt-Out Burden

**Status:** Draft: pending key informant validation
**D&M Dimension:** [[NB - Net Benefits]]

## Definition
The operational overhead of managing patient consent for ambient recording, including the workflow for obtaining consent, handling opt-outs, tracking consent status, and the impact of opt-out rates on clinician workflow when they must revert to manual documentation for declining patients.

## Hypothesized Stakeholder(s)
- **COO** : consent management is an operational process that requires staffing, workflow design, and monitoring
- **CMIO** : consent opt-outs create a dual-workflow environment that adds complexity and potential documentation quality variation

## Rationale
A few studies in the corpus report opt-out rates (e.g., Evans 2025 reports ~0.1%), but none measures the operational burden of managing the consent process itself. In practice, someone, usually a medical assistant or front desk staff, must explain the technology, obtain consent, and document the patient's decision. When patients opt out, the clinician must switch to manual documentation for that encounter. The operational cost of this dual-workflow is unmeasured.

## Relationship to Existing Canonical Measures
- [[CM-17 Patient Experience and Relationship Quality]]: consent concerns are related to patient experience but DM-12 focuses on the operational burden, not the patient's perception
- [[CM-13 Adoption Behavior and Utilization Rate]]: opt-out rates affect the denominator of utilization calculations

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Opt-out rate tracking | Percentage of patients declining ambient recording, tracked over time and by demographics | Consent management system |
| Consent workflow time | Time added to each encounter for the consent process | Time-motion study |
| Staff burden assessment | Impact on front desk or MA workflow from consent management | Staff survey + observation |
| Dual-workflow frequency | How often clinicians must switch between AI-assisted and manual documentation in a single session | EHR data + clinician report |

## Key Questions for Validation
- What is your patient opt-out rate, and has it changed over time?
- Who is responsible for obtaining consent, and how much time does it add?
- How disruptive is it when a clinician must switch to manual documentation mid-session due to an opt-out?
- Are there patient populations with notably higher opt-out rates?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
