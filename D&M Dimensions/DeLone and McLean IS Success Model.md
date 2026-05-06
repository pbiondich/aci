# DeLone and McLean IS Success Model

## Overview
The DeLone & McLean IS Success Model (updated 2003) is a validated framework for evaluating information systems across six interdependent dimensions. It is used in this literature review as the organizing taxonomy for ambient AI evaluation measures.

**Reference:** DeLone, W.H., and McLean, E.R. (2003). "The DeLone and McLean Model of Information Systems Success: A Ten-Year Update," *Journal of Management Information Systems* (19:4), pp. 9–30.

## The Six Dimensions

| Dimension                    | Code | Core Question                                              | CMs | Papers |
| ---------------------------- | ---- | ---------------------------------------------------------- | --- | ------ |
| [[SQ - System Quality]]      | SQ   | Does the *tool itself* work reliably and accurately?       | 2   | 14     |
| [[IQ - Information Quality]] | IQ   | Is the *output* (the note) accurate, complete, and useful? | 5   | 31     |
| [[SerQ - Service Quality]]   | SerQ | Is the *vendor/deployment experience* effective?           | 1   | 8      |
| [[U - Use]]                  | U    | Do people actually *use* it, and how much?                 | 2   | 13     |
| [[US - User Satisfaction]]   | US   | How do people *feel* about it?                             | 5   | 35     |
| [[NB - Net Benefits]]        | NB   | What *downstream outcomes* does it produce?                | 10  | 41     |

**Total canonical measures: 25 | Derived bottom-up from 494 raw measure rows across 54 papers**

## Causal Logic
The model proposes a causal flow:
> **Quality dimensions** (SQ + IQ + SerQ) → **Use & User Satisfaction** (U + US) → **Net Benefits** (NB) → *(feeds back into Use and Satisfaction)*

## Evidence Distribution Across Dimensions (54 papers)

| Dimension | Evidence Level | Key Gap |
|---|---|---|
| **NB** | Strong — 41 papers | Patient safety and patient experience almost unmeasured |
| **US** | Strong — 35 papers | Selection bias inflates most estimates; only 1 RCT |
| **IQ** | Moderate — 31 papers | Highly heterogeneous methods; omission dominance consistent |
| **U** | Moderate — 13 papers | Heavy/light user split universal; dose-response confirmed |
| **SQ** | Weak — 14 papers | Commercial ASR data entirely absent from literature |
| **SerQ** | Weak — 8 papers | Almost entirely qualitative; no validated implementation instruments |

## Key Observation (54 papers, updated 2026-03-25)
- **NB and US** are measured in nearly every study — documentation time and burnout are the dominant outcomes
- **IQ** is common but heterogeneous — PDQI-9 used inconsistently; omission dominance is the most consistent finding
- **U** is measured in ~half of studies; dose-response and adoption heterogeneity are universal
- **SQ** is almost entirely absent from clinical studies — commercial products don't publish technical performance data
- **SerQ** is barely present — implementation science is catching up (Afshar 2025a, PHTI 2025)
- **Patient outcomes (NB)** are the most critical gap: patient experience, patient safety, and patient volume are vastly understudied

---
*D&M Dimensions | Suki Literature Review Vault | Created 2026-03-25, updated 2026-04-15*
*Canonical measures derived 2026-03-25 from full 54-paper corpus analysis*

*Licensed under [CC BY-SA 4.0](../LICENSE) — [github.com/pbiondich/aci](https://github.com/pbiondich/aci)*
