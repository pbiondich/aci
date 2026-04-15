# CM-21 Coding Accuracy ICD-10 HCC and EM

**D&M Dimension:** [[IQ - Information Quality]] | [[NB - Net Benefits]]

## Definition
The accuracy and completeness of diagnostic and billing codes generated or supported by ambient AI documentation — ICD-10 diagnosis codes, HCC (Hierarchical Condition Category) capture for risk adjustment, and E/M (Evaluation & Management) coding level. Bridges IQ (note quality sufficient for accurate coding) and NB (coding accuracy drives revenue and population health metrics).

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| ICD-10 coding compliance (certified coder review) | Expert coders assess code-documentation alignment; standardized rubric | Claims / expert review |
| HCC capture rate | Average HCCs per encounter; ICD-10 → HCC v28 mapping; normalized | Claims / EHR |
| E/M level change (weighted average) | CPT E/M levels 1–5; normalized for case mix; pre vs. post | Claims |
| Real-time ICD-10 accuracy monitoring | Tracking coding accuracy over implementation period | EHR telemetry |
| Claim denial rate | % of encounters with payer denial | Claims |

## Aliases Used in Literature
- ICD-10 Coding Accuracy ([[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations|Afshar 2025]], [[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]]: p<0.001 improvement)
- Diagnostic Billing Compliance ([[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing|Afshar 2025b]])
- HCC Capture per Encounter ([[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report|Boyter 2025]]) *(⚠️ the dollar value of HCC capture (+$9,685/year) is a revenue/financial impact — that financial quantity belongs in CM-20; the capture rate itself may remain here as a coding accuracy metric)*
- E/M Coding Level ([[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report|Boyter 2025]]) *(⚠️ the dollar value of E/M level change (+$1,907/year) is a revenue/financial impact — belongs in CM-20; the coding level itself may remain here)*
- Claim Denial Rate ([[Holmgren 2026 - Ambient AI Scribes Physician Financial Productivity|Holmgren 2026]]: null — no increase in denials)
- Coding Accuracy ([[Peterson Health Technology Institute 2025 - Adoption AI Healthcare Delivery Systems|Peterson Health Technology Institute 2025]], [[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations|Afshar 2025]])
- Coding Improvement *(⚠️ verify source)*

## ⚠️ Key Note
**Coding improvement is one of the most consistent findings** — appearing in Afshar 2025b (RCT, p<0.001), Boyter/KLAS 2025, and Holmgren 2026. Critically, Holmgren 2026 shows NO increase in denial rate, suggesting coding improvement is legitimate (better documentation of existing complexity, not upcoding). However, PHTI 2025 flags the population-level cost concern regardless.

## Papers Measuring This (6)
- [[Afshar 2025 - Novel Playbook for Pragmatic Trial Operations]]
- [[Afshar 2025b - Pragmatic RCT Ambient AI Health Practitioner Wellbeing]]
- [[Boyter 2025 - Ambience Healthcare ROI Validations KLAS Report]]
- [[Holmgren 2026 - Ambient AI Scribes Physician Financial Productivity]]
- [[Peterson Health Technology Institute 2025 - Adoption AI Healthcare Delivery Systems]]
- [[Billings 2025b - Practicing Value-Based Care with AI]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*
