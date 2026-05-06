# Article Review

---

## Article Title
Impact of a scribe program on patient throughput, physician productivity, and patient satisfaction in a community-based emergency department

## Author(s)
Shuaib, Waqas; Hilmi, John; Caballero, Joshua; Rashid, Ijaz; Stanazai, Hashim; Ajanovic, Alan; Moshtaghi, Alex; Amari, Ahmed; Tawfeek, Kerolos; Khurana, Anjit; Hasabo, Hesham; Baqais, Abdulrehman; Mattar, Ahmed A.; Gaeta, Theodore J.

## DOI
[10.1177/1460458217692930](https://doi.org/10.1177/1460458217692930)

## Journal / Source
Health Informatics Journal | Vol. 27, No. 1 | 2021. Published 2018 online (received 2017). SAGE Publications.

## Ambient Product(s) Evaluated
**Human medical scribes** (not AI/ambient technology). Scribe program implemented by a private-sector scribe company; scribes are college students/recent graduates trained on-the-job (proficient after 20 shifts, skilled after 40 shifts). One scribe assigned per physician. All scribe-generated charts forwarded to physician for review, amendment, and signature. ⚠️ This paper is a **human scribe baseline** — not an ambient AI study. Included in the corpus as a pre-AI comparator.

## Clinical Setting
Suburban non-academic community emergency department, ~80,000 visits/year, Level II Trauma Center (American College of Surgeons), treating adults and pediatrics. Study period: July 2015–February 2016. Pre-implementation baseline: 90 days (July 1–Sept 30, 2015); 2-month washout/phase-in; post-implementation: 90 days (Dec 1, 2015–Feb 28, 2016). Physicians only (NPs/PAs excluded). 3–4 scribes available at all times. No staff changes during study.

## Evidence Level
Observational (uncontrolled before-and-after / quasi-experimental)

## Data Source(s)
EHR data (quality assurance reports from EHR system) | Survey (Press Ganey patient satisfaction) | Time-motion analysis (direct observation)

## Article Summary
This prospective before-and-after study at a community ED (n=12,721 pre-scribe, n=13,598 post-scribe patient encounters) evaluated the impact of a human medical scribe program on throughput, physician productivity, and patient satisfaction. All five throughput metrics improved significantly (all p<0.0001): door-to-doc time improved from 61 to 56 min; LOS for discharged patients improved from 303 to 287 min. Physician productivity metrics improved substantially: patients per hour increased from 2.3 to 3.2 (p<0.001), total wRVUs per hour from 3.1 to 5.2 (p<0.001). Time-motion analysis showed post-visit documentation time halved (14→7 min, p<0.01), while doctor-patient interaction time nearly doubled (4→7.8 min, p<0.01). Patient satisfaction was already high and remained high; the only statistically significant satisfaction item was "clinician providing satisfactory feedback" (3.9→4.7, p<0.01). Physician ED satisfaction percentile improved from 66% to 81% (15-point gain). Authors conclude human scribes are feasible and effective in community EDs (most prior evidence was from academic institutions).

## Hypothesis
Explicit: to evaluate the impact of medical scribes on patient throughput, physician productivity, and patient satisfaction in a community ED setting.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Door-to-Room Time (min) | Time from patient arrival in ED to patient placed in a room. Improved 41→37 min (p<0.0001). | [[OI - Organizational Impact]] |
| Room-to-Doc Time (min) | Time from patient in room to physician sign-up. Improved 26→24 min (p<0.0001). | [[OI - Organizational Impact]] |
| Door-to-Doc Time (min) | Time from arrival to physician sign-up. Improved 61→56 min (p<0.0001). | [[OI - Organizational Impact]] |
| Doc-to-Admit Disposition Time (min) | Time from physician sign-up to patient admitted. Improved 237→228 min (p<0.0001). | [[OI - Organizational Impact]] |
| Length of Stay — Discharged Patients (min) | Total ED time for discharged patients. Improved 303→287 min (p<0.0001). | [[OI - Organizational Impact]] |
| Length of Stay — Admitted Patients (min) | Total ED time for admitted patients. Improved 507→473 min (p<0.0001). | [[OI - Organizational Impact]] |
| Patients Seen per Hour | Physician throughput measure. Increased from 2.3 ± 0.3 to 3.2 ± 0.6 (p<0.001). | [[OI - Organizational Impact]] |
| Work Relative Value Units (wRVUs) per Hour | Medicare productivity measure weighted for service complexity. Total wRVUs increased from 241 (3.1/hr) to 336 (5.2/hr) (p<0.001). wRVUs per patient similar (2.57→2.74, p=0.88) — productivity gain was volume not coding intensity. | [[OI - Organizational Impact]] |
| Post-Visit Documentation Time (min) | Time-motion: time to complete patient chart after examination. Halved from 14 ± 3.1 to 7 ± 0.43 min (p<0.01). | [[II - Individual Impact]] |
| Doctor-Patient Interaction Time (min) | Time-motion: direct face time with patient. Nearly doubled from 4 ± 0.57 to 7.8 ± 1.2 min (p<0.01). | [[OI - Organizational Impact]], [[US - User Satisfaction]] |
| Chart Preparation Time (min) | Time-motion: chart prep before encounter. Eliminated (1.2→0 min, p<0.01) — scribes prepped charts. | [[II - Individual Impact]] |
| Chart Review Time (min) | Time-motion: time reviewing chart. Increased from 5→7 min (p<0.01) — physicians spent more time reviewing, less doing. | [[II - Individual Impact]] |
| Patient Satisfaction (Press Ganey, 6 items) | 5-point Likert scale. Pre-scribe satisfaction already high; most items unchanged. Significant increase only in "clinician providing satisfactory feedback" (3.9→4.7, p<0.01). | [[OI - Organizational Impact]] |
| Physician Satisfaction Percentile (ED) | ED physician satisfaction percentile improved from 66% to 81% post-scribe (+15pp). | [[US - User Satisfaction]] |

---
*Reviewed by Iris | Source: Health Informatics Journal 2021 | DOI: 10.1177/1460458217692930 | Template v2.0 | Full text reviewed ✅*
*📍 Notable: Human scribe baseline paper — NOT ambient AI. Included in corpus as a pre-AI comparator establishing what human scribes achieve. Key benchmarks for ambient AI comparisons: post-visit documentation halved, patient interaction doubled, patients/hr +39%, wRVUs/hr +68%.*
*📍 Community ED setting is distinct from all other papers in corpus (primarily ambulatory/outpatient). Throughput metrics (door-to-room, LOS) are ED-specific and don't translate directly to ambulatory AI scribe studies.*
*📍 2015-16 data — pre-dates modern ambient AI by ~7 years. Technology context: human scribes, no AI component.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
