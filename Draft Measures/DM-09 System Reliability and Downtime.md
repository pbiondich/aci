# DM-09 System Reliability and Downtime

**Status:** Draft — pending key informant validation
**D&M Dimension:** [[SQ - System Quality]]

## Definition
The operational reliability of the ACI tool in production clinical environments — including uptime, failure modes, degradation behavior, recovery time, and the availability of fallback workflows when the system is unavailable. Measures whether the tool can be depended upon for continuous clinical operations.

## Hypothesized Stakeholder(s)
- **COO** — system reliability directly affects clinical operations; an unreliable tool disrupts patient flow and clinician workflow
- **CMIO** — downtime during clinical encounters creates patient safety and documentation quality risks

## Rationale
ACI tools operate in real-time during clinical encounters. When they fail, the clinician must either wait or revert to manual documentation mid-visit. No study in the corpus reports uptime metrics, failure rates, or the operational impact of system outages. For enterprise deployment, reliability is a non-negotiable operational requirement that isn't captured by any current canonical measure.

## Relationship to Existing Canonical Measures
- [[CM-24 System Quality]] — reliability is a component of system quality but not explicitly measured in the corpus
- [[CM-25 System Quality]] — technical performance measures don't include uptime or failure mode data

## Suggested Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| Uptime percentage | System availability over a defined period (e.g., 99.9% target) | System monitoring logs |
| Mean time to recovery | Average time from system failure to restored functionality | Incident management data |
| Failure mode catalog | Documentation of how the system fails (graceful degradation vs. total loss) and what clinicians experience | IT incident reports + clinician reports |
| Fallback workflow assessment | Whether a defined and practiced fallback workflow exists for system downtime | Operational documentation |

## Key Questions for Validation
- How often does your ACI tool experience downtime or degraded performance during clinical hours?
- What happens operationally when the tool goes down mid-clinic?
- Is there a defined fallback workflow, and do clinicians follow it?
- Would reliability data (uptime SLAs, MTTR) be part of your vendor evaluation criteria?

---
*Draft Measures | ACI Evidence Review | Proposed 2026-04-14*
*Method: Stakeholder gap analysis of canonical measures against executive decision-making needs*
*Status: Pending key informant validation*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
