# Article Review

---

## Article Title
Effects of Introducing Generative AI in Rehabilitation Clinical Documentation

## Author(s)
Omon, Kyohei; Sasaki, Tomohiko; Koshiro, Ryota; Fuchigami, Takeshi; Hamashima, Masahiro

## DOI
[10.7759/cureus.81313](https://doi.org/10.7759/cureus.81313)

## Journal / Source
Cureus | Vol. 17, No. 3 | March 27, 2025 | e81313. Open Access (CC-BY 4.0). Review period: March 21–25, 2025.

## Ambient Product(s) Evaluated
**medimo** (developed by Pleap Inc., Tokyo, Japan — https://pleap.jp/). Web application that transcribes voice inputs from healthcare professionals during patient consultations and summarizes content using AI. For this study, medimo was enhanced by Pleap Inc. with a newly collected speech dataset specifically designed for rehabilitation professionals. **Not conversational ambient listening** — uses non-conversational voice memos recorded by clinicians, not live encounter capture.

## Clinical Setting
Saito Rehabilitation Hospital (Osaka) and Kawanishi Rehabilitation Hospital (Hyogo), Japan. Participants: 12 rehabilitation professionals — 2 physical therapists, 2 occupational therapists, 2 speech-language-hearing therapists (from each of 2 hospitals). All had ≥6 months at institution and ≥5 years clinical experience. Mean age 33.2 ± 6.8 years; mean experience 10.1 ± 3.1 years; 4 male, 8 female. Prospective comparative AB design: Phase A = 5 days conventional documentation; Phase B = 5 days using medimo. IRB approved.

## Evidence Level
Observational / QI (prospective comparative AB design — within-subjects, pre/post)

## Data Source(s)
Direct time measurement (third-party observer) | Validated survey (NASA-TLX) | Blinded quality scoring (3 independent physical therapists, custom 6-item 10-point scale)

## Article Summary
This small Japanese study (n=12) compared conventional clinical documentation (Phase A) vs. AI-assisted documentation using "medimo" (Phase B) among rehabilitation professionals across two hospitals. The AB design used direct third-party time measurement, NASA-TLX workload assessment, and blinded quality scoring. Key findings: (1) Documentation time was NOT significantly reduced (305 ± 53.9 s in Phase A vs. 336 ± 78.0 s in Phase B; ns) — attributable to the editing burden when voice input was insufficient; (2) NASA-TLX **Temporal Demand (time pressure)** was significantly lower with medimo (p=0.037) even without time savings — suggesting reduction in perceived urgency even if total time didn't drop; (3) NASA-TLX **Frustration (dissatisfaction)** was significantly HIGHER with medimo (p=0.041) — attributed to low AI literacy and skill gaps with a novel workflow; (4) Documentation quality (SOAP sections S and P, total score) was significantly higher with medimo (p=0.045, 0.045, 0.023 respectively); (5) Strong positive correlation between number of voice memos recorded and documentation time reduction (r=0.71, p=0.006) — suggesting that tool utilization intensity drives benefit; (6) Significant positive correlation between time reduction and implementation intent/willingness to adopt (r=0.67, p=0.009). Authors conclude that user motivation and AI literacy are key moderators of benefit.

## Hypothesis
Explicit: to evaluate whether the use of generative AI reduces clinical documentation time, alleviates workload, and improves quality in a rehabilitation setting.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| **Documentation Time (seconds)** | Third-party-measured time from sitting at EMR to completed registration. Phase A: 305 ± 53.9 s; Phase B: 336 ± 78.0 s. **No significant difference** (p=ns). Editing burden from incomplete voice input offset any AI efficiency gain. | [[NB - Net Benefits]] |
| **NASA-TLX Temporal Demand (Time Pressure)** | NASA-TLX subscale on perceived time urgency during documentation (0–100 VAS). Significantly lower with medimo (AVE Phase A: 58.0, Phase B: 49.8; p=0.037). Only subscale showing significant improvement. | [[US - User Satisfaction]], [[NB - Net Benefits]] |
| **NASA-TLX Frustration/Dissatisfaction** | NASA-TLX subscale on frustration level (0–100 VAS). Significantly HIGHER with medimo (AVE Phase A: 46.4, Phase B: 55.3; p=0.041). Attributed to low AI literacy and discomfort with novel workflow. Key null/adverse finding. | [[US - User Satisfaction]] |
| **NASA-TLX Mental Demand** | Mental demand subscale. No significant difference (53.3 → 52.0). | [[US - User Satisfaction]] |
| **NASA-TLX Physical Demand** | Physical demand subscale. No significant difference (42.9 → 43.9). | [[US - User Satisfaction]] |
| **NASA-TLX Own Performance** | Self-rated task performance subscale. No significant difference (41.5 → 47.3). | [[US - User Satisfaction]] |
| **NASA-TLX Effort** | Effort subscale. No significant difference (56.1 → 53.7). | [[US - User Satisfaction]] |
| **Documentation Quality — SOAP_S (Subjective)** | Blinded score (3 independent PTs, 10-point scale) for the Subjective section of SOAP notes. Significantly higher with medimo (AVE 8.3 → 8.4; p=0.045). Real-time recording captured patient complaints more accurately. | [[IQ - Information Quality]] |
| **Documentation Quality — SOAP_P (Plan)** | Blinded score for the Plan section of SOAP notes. Significantly higher with medimo (AVE 5.4 → 6.7; p=0.045). Largest quality gain; real-time capture improved treatment plan specificity. | [[IQ - Information Quality]] |
| **Documentation Quality — Total Score** | Sum of all 6 quality subscale scores (Details, Non-use of technical jargon, Appropriate expressions, SOAP_S, SOAP_O, SOAP_P). Significantly higher with medimo (AVE 40.9 → 44.9; p=0.023). SOAP_O (Objective) did not reach significance alone. | [[IQ - Information Quality]] |
| **Voice Memo Frequency** | Count of non-conversational voice memos recorded per participant during Phase B. Strong positive correlation with documentation time reduction (r=0.71, p=0.006). Behavioral proxy for tool engagement and utilization intensity. | [[U - Use]], [[NB - Net Benefits]] |
| **Implementation Intent (Willingness to Adopt)** | Post-study 5-point scale: "If medimo were introduced, would you use it?" Significant positive correlation with time reduction (r=0.67, p=0.009). User motivation is a key predictor of achieving time benefits. | [[U - Use]], [[US - User Satisfaction]] |

---
*Reviewed by Iris | Source: Cureus 2025 | DOI: 10.7759/cureus.81313 | Template v2.0 | Full text reviewed ✅*
*📍 Notable: Only non-US study in corpus (Japan); only rehabilitation-specific study; only study using non-conversational voice memos rather than live ambient capture. Generalizability to US physician-facing ambient AI is limited — but the finding that tool utilization intensity (voice memo frequency) predicts time savings is highly relevant to any implementation context.*
*📍 Key tension: Time pressure improved significantly but actual documentation time did NOT, and frustration increased. This dissociation — subjective relief without objective efficiency gain — is a meaningful caution for implementations where AI literacy and skill acquisition are incomplete.*
*📍 Notable null: SOAP_O (Objective section) quality did not improve significantly, while S and P did. Authors' explanation: real-time recording most helps capture verbatim patient reports (S) and specific treatment plans (P), but objective physical findings may require less in-session capture.*
