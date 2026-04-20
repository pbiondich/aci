# Article Review

---

## Article Title
Ambient Listening in Clinical Practice: Evaluating EPIC Signal Data Before and After Implementation and Its Impact on Physician Workload

## Author(s)
Guo, Yawen; Hu, Di; Wang, Jiayuan; Zheng, Kai; Perret, Danielle; Pandita, Deepti; Tam, Steven

## DOI
No DOI assigned (conference proceedings). IOS Press DOI: [10.3233/SHTI250921](https://doi.org/10.3233/SHTI250921). arXiv preprint: [10.48550/arXiv.2504.13879](https://doi.org/10.48550/arXiv.2504.13879)

## Journal / Source
MEDINFO 2025 — Proceedings of the 20th World Congress on Health and Biomedical Informatics (Healthcare Smart × Medicine Deep), pp. 653–657. IOS Press. Open Access (CC BY-NC 4.0).

## Ambient Product(s) Evaluated
DAX Copilot (Nuance Communications) and Abridge — both deployed at UCI Health in the same pilot. This analysis treats them collectively (no comparative analysis between tools in this paper).

## Clinical Setting
UCI Health (Orange, California) — multi-specialty outpatient settings including primary care and specialty care (gastroenterology, geriatrics, psychiatry, rheumatology, cardiology, sports medicine, etc.). 124 physicians enrolled; 68 met analysis inclusion criteria (≥4 weeks use, ≥10 notes); final analysis n=42 at 1-month, n=32 at 2-month, n=31 at 3-month post-implementation.

## Evidence Level
Observational (pre/post implementation — quantitative Epic Signal telemetry analysis)

## Data Source(s)
EHR data (Epic Signal telemetry — four objective documentation metrics)

## Article Summary
This exploratory QI study at UCI Health analyzed Epic Signal data to evaluate the impact of a dual-tool ambient listening pilot (DAX Copilot + Abridge) on physician documentation workload. Using paired two-sample t-tests with a 3-month pre-implementation baseline and up to 3 months of follow-up, four Epic Signal metrics were examined. Key findings: time spent writing a note decreased significantly (6.58 → 5.45 min/note, p<0.001), and total documentation time per provider per day fell from 63.99 to 53.33 min (p<0.001). Paradoxically, note length increased significantly — average characters per note rose by ~559 (p<0.05) and characters per appointment by ~1,021 (p<0.001). The largest changes occurred in month 1, consistent with a learning curve. Authors caution that note length increases may reflect verbose tool-embedded templates rather than clinical enrichment. Only 37% of enrolled physicians met inclusion criteria for analysis — differential adoption is flagged as a key area for future research.

## Hypothesis
Explicit: "We hypothesize that the use of the tool will affect note length and reduce clinician workload in terms of time spent on note-taking."

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Average Time per Note (min) | Mean time spent writing a single note, derived from Epic Signal. Decreased from 6.58 min (baseline) to 5.45 min at 3-month follow-up (T=-6.61, p<0.001). Sustained across all three months. | [[NB - Net Benefits]] |
| Average Documentation Time per Provider per Day (min) | Total daily time spent on note-writing per physician. Decreased from 63.99 min to 53.33 min at 3-month follow-up (T=-3.98, p<0.001). ~10.6 min/day saved. | [[NB - Net Benefits]] |
| Average Characters per Note | Character count of individual progress notes. Increased by ~559 chars baseline → 3-month (T=2.64, p<0.05). Authors flag potential template inflation. | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| Average Characters per Appointment | Total character count across all note types generated per encounter. Increased by ~1,021 chars (8,232 → 9,253, T=5.23, p<0.001). | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| Adoption / Inclusion Rate | 124 enrolled; only 42 (34%) met 3-month analysis criteria. Used as a proxy for differential adoption and sustainability of tool use. Not a primary outcome but analytically important. | [[U - Use]] |

---
*Reviewed by Iris | Source: MEDINFO 2025 (IOS Press) | DOI: 10.3233/SHTI250921 | Template v2.0 | Full text reviewed ✅*
*📍 Notable: One of the few papers using fully objective telemetry data (no surveys). Time savings are real and significant, but note inflation is an important caveat. Two tools (DAX + Abridge) pooled — no head-to-head comparison. Only 37% adoption rate among enrollees warrants attention.*
*📍 DOI correction: IOS Press DOI is 10.3233/SHTI250921 — the arXiv ID (2504.13879) is a preprint version. Use IOS Press DOI as canonical.*
