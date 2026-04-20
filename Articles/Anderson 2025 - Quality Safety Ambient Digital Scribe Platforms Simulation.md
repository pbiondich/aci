# Article Review

---

## Article Title
Evaluating the Quality and Safety of Ambient Digital Scribe Platforms Using Simulated Ambulatory Encounters

## Author(s)
Anderson, Taylor N.; Mohan, Vishnu; Dorr, David A.; Ratwani, Raj M.; Biro, Joshua M.; Gold, Jeffrey A.

## DOI
[10.1016/j.mcpdig.2025.100292](https://doi.org/10.1016/j.mcpdig.2025.100292)

## Journal / Source
Mayo Clinic Proceedings: Digital Health | Vol. 3, No. 4 | December 2025 | Article 100292. Open Access (CC BY 4.0). Oregon Health & Science University (OHSU) / MedStar Health National Center for Human Factors in Healthcare. Note: Joshua M. Biro and Raj M. Ratwani are also co-authors of Biro 2025 (Paper 24) — same MedStar/simulation testing group.

## Ambient Product(s) Evaluated
**Five anonymized ADS platforms (A–E)** — 4 commercially available (A–D) + 1 free platform (E). Products not named. Evaluated December 2024–February 2025 using most current platform version at time of evaluation. This is a methodological/comparative study; product names deliberately withheld.

## Clinical Setting
Simulation study — no real patients. 14 simulated ambulatory clinical encounters from a pre-existing medical scribe training curriculum. Audio played from MacBook Pro laptop, captured by ADS app on iPhone 14 Pro at ~1 ft distance in quiet room. Encounters cover a range of ambulatory specialties (Supplemental Table 1). Mean encounter duration: 13.4 minutes (range 7.9–22.1 min). Professional human transcription used as gold standard.

## Evidence Level
Observational (simulation testing — technical evaluation)

## Data Source(s)
Simulation data (ADS-generated transcripts vs. professional transcriptions) | Clinical note rubric scoring (key element accuracy) | PDQI-9 note quality assessment | AHRQ harm scale (adapted for potential risk)

## Article Summary
This simulation study from OHSU and MedStar evaluated 5 ambient digital scribe platforms across 14 standardized clinical scenarios, assessing transcript accuracy, clinical note quality (PDQI-9), note accuracy/completeness (rubric-based), and clinical harm potential (AHRQ scale). Key findings: transcripts from platforms A–D averaged 13.9 errors/case; 19.5% of transcript errors were transmitted to the clinical note. Mean clinical note error rate across platforms was **26.3%** of key elements — more than 1 in 4 key clinical elements omitted or incorrect. **Omissions** were the dominant error type (76.3% of all errors), significantly more common than commission errors — consistent with Biro 2025 and contradicting the "hallucination = primary concern" assumption. Mean of **3.0 errors per case had potential for moderate-to-severe harm** (AHRQ ≥2). Platform E (free) was substantially worse than commercial platforms on all metrics. Only 35.8% of correctly reported elements were consistently correct across all platforms — highlighting intra-corpus variability. PDQI-9 mean score was 36±4, with significant variation between platforms (C and B best; E worst). Authors conclude there is urgent need for standardized, objective evaluation frameworks for ADS before widespread clinical adoption.

## Hypothesis
Explicit: to evaluate and compare the quality and safety of ambient digital scribe platforms using simulated ambulatory encounters.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Transcript Errors per Case | Errors in ASR transcript vs. professional transcription. Mean 13.9 errors/case (95% CI 6.0–17.5) across platforms A–D. Platforms C and D significantly worse than A and B (p<.0020). Platform E did not produce transcripts (edited summaries only). | [[SQ - System Quality]], [[IQ - Information Quality]] |
| Transcript Error Transmission Rate (%) | Proportion of transcript errors that appeared in the clinical note. Mean 19.5% (95% CI 6.6–28.8%). No significant difference between platforms A–D. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Clinical Note Error Rate (% key elements) | Percentage of key clinical elements omitted or captured erroneously. Mean 26.3% (95% CI 17.0–31.0%) across all platforms. Platform E significantly worse (46.1% error rate vs. 16.7–23.3% for A–D). | [[IQ - Information Quality]] |
| Error Subtype — Omissions | Most common error type: 76.3% of all errors were omissions (95% CI 70.0–83.3%). Significantly more than commission errors (p=.022). Consistent with Biro 2025 finding. Platform E had higher commission rate than C. | [[IQ - Information Quality]] |
| AHRQ Harm Score (moderate-to-severe errors) | Mean 3.0 errors per case (range 0–21) had potential for moderate-to-severe harm (AHRQ ≥2). Platform E significantly worse (weighted harm score higher than A–D, p<.0082 for all). Platforms A–D not significantly different from each other. | [[IQ - Information Quality]], [[NB - Net Benefits]] |
| Cross-Platform Consistency | Only 35.8% ± 11.3% of correctly reported elements were consistently correct across all 5 platforms. High variability means a physician can't reliably predict which elements will be accurate for any given case. | [[SQ - System Quality]], [[IQ - Information Quality]] |
| PDQI-9 Note Quality Score (9–45) | Mean 36±4 across all platforms. Platform C highest (39.4), B second (38.4), E lowest (32.3). C > A, D, E (p<.028); B > E (p=.001). Significant inter-platform variation. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Note Length (words) | Mean 444±120 words across A–D. Platform E significantly shorter (271 words) than B, C, D (p<.001). Shorter + higher error rate for E. | [[IQ - Information Quality]] |

---

## Platform Summary Table (from Table 1)

| Platform | Transcript Errors | Note Error % | AHRQ ≥2 Errors | Weighted AHRQ | PDQI-9 |
|---|---|---|---|---|---|
| A | 6.5 | 16.7% | 2.6 | 0.16 | 35.0 |
| B | 6.3 | 23.2% | 1.9 | 0.17 | 38.4 |
| C | 20.9 | 22.1% | 1.4 | 0.14 | **39.4** |
| D | 22.1 | 23.3% | 3.0 | 0.20 | 35.5 |
| E (free) | N/A | **46.1%** | **6.2** | **0.45** | **32.3** |

---
*Reviewed by Iris | Source: Mayo Clinic Proceedings: Digital Health 2025 | DOI: 10.1016/j.mcpdig.2025.100292 | Template v2.0 | Full text reviewed ✅*
*📍 Direct companion to Biro 2025 (Paper 24) — same simulation methodology, same MedStar/OHSU group. Together these two papers form the field's foundational work on simulation testing as an ADS evaluation approach. Anderson 2025 scales up to 5 platforms and 14 cases.*
*📍 Most rigorous safety/quality evaluation in the corpus. Uses AHRQ harm scale, PDQI-9, error taxonomy, and professional gold-standard transcriptions — a comprehensive multi-dimensional framework.*
*📍 The "free platform is much worse" finding (Platform E) has real-world implications: healthcare systems choosing lower-cost solutions face substantially higher error rates and harm potential.*
*📍 Omissions dominate (76.3%) over hallucinations — consistent pattern across Biro 2025, Anderson 2025, and Suhail 2026. The field's focus on hallucination may be misplaced; omissions are harder to detect (recall requires more cognitive effort than recognition).*
*📍 Only 35.8% of elements consistently correct across all platforms — huge intra-corpus variability. Different platforms miss different things for different cases. Clinicians cannot build reliable mental models of what their specific tool will and won't capture.*
*📍 Directly relevant to the Regenstrief/Suki evaluation pathway roadmap (Task 3 deliverable): simulation testing + PDQI-9 + AHRQ harm scale = a ready-made framework we could adapt.*
