# Article Review

---

## Article Title
The Great Scribe-Off: A Comparative Analysis of AI Scribes Versus Human Documentation in Simulated General Practice Consultations

## Author(s)
Foo, Darran; Tan, Janice; Hansra, Amandeep; Stevens, Sean; Wilcox, Helen

## DOI
[10.3233/SHTI251572](https://doi.org/10.3233/SHTI251572)

## Journal / Source
Studies in Health Technology and Informatics (SHTI) | Vol. 333 | pp. 34–39 | 2025. Conference proceedings: Health. Innovation. Community: Engage. Disrupt. Transform (HIC2025 — 29th Australasian Institute of Digital Health). Open Access (CC BY-NC 4.0). IOS Press.

## Ambient Product(s) Evaluated
**Four anonymized commercially available AI scribes accessible in Australia** (Scribe 1, 2, 4, 5) + one human scribe (Scribe 3 = two specialist GPs). AI scribe names withheld per commercial sensitivities and ethics conditions. Tested in default "out-of-the-box" configurations, most up-to-date paid versions. No customization beyond default templates.

## Clinical Setting
Simulation study — no real patients. Four standardised clinical scenarios from the Royal Australian College of General Practitioners (RACGP) examination repository, covering women's health, mental health, urgent care, and chronic disease. Professional or experienced amateur actors played simulated patients. Two specialist GPs (each >5 years experience) conducted 2 consultations each. AI scribes ran on dedicated laptops with omnidirectional microphones. Consultations also video recorded. 20 total clinical notes rated (4 cases × 5 scribes).

## Evidence Level
Observational (simulation study — comparative note quality evaluation)

## Data Source(s)
Modified PDQI-9 (10 domains, max 50 per note) rated by 3 blinded experienced GPs | ICC inter-rater reliability | Repeated measures ANOVA

## Article Summary
This Australian simulation study compared clinical documentation quality from 4 commercial AI scribes vs. human GP documentation across 4 RACGP exam scenarios, rated by 3 blinded GPs using a modified PDQI-9 (10 domains, max 50). Key finding: AI scribes outperformed human documentation across multiple domains, with top AI scribes scoring mean **44.08/50** vs. **37.42/50** for humans. However, repeated measures ANOVA found no statistically significant difference in overall mean scores (F(4,55)=2.33, p=0.071). Significant domain differences were found in accuracy (p=.049), thoroughness (p=.008), succinctness (p=.029), and freedom from hallucination (p=.025). Humans scored lowest in accuracy, thoroughness, usefulness, comprehensibility, synthesis, and internal consistency. Top performers: Scribe 4 and Scribe 5 (tied at 44.08); Scribe 4 excelled in accuracy/thoroughness but was verbose; Scribe 5 most succinct but slightly less accurate. Scribe 2 had highest hallucination rate. Notably, human notes were not hallucination-free — clinicians extrapolating from context (inferring BMI from weight, specifying tests beyond what was mentioned) were classified as hallucination, highlighting parallels between human cognition and LLM generative behavior. Inter-rater reliability moderate overall (ICC=0.56); good for accuracy and thoroughness; poor for subjective domains like synthesis.

## Hypothesis
Explicit: to compare documentation quality from commercially available AI scribes and human-generated notes using modified PDQI-9 in simulated general practice consultations.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Overall PDQI-9 Score (max 50) | Mean scores across 4 cases: AI Scribes 1=43.50, 2=40.00, 4=44.08, 5=44.08; Human=37.42. No significant difference overall (p=0.071). | [[IQ - Information Quality]] |
| Accuracy (PDQI domain) | Significant difference between scribes (p=.049). Scribe 4 excelled; human notes scored lowest. | [[IQ - Information Quality]] |
| Thoroughness (PDQI domain) | Most significant domain difference (p=.008). AI scribes more thorough than humans. Good ICC (0.879). Scribe 4 top. | [[IQ - Information Quality]] |
| Succinctness (PDQI domain) | Significant difference (p=.029). Scribe 5 most succinct; Scribe 4 least succinct. Trade-off between thoroughness and brevity. | [[IQ - Information Quality]] |
| Freedom from Hallucination (PDQI domain) | Significant difference (p=.025). Scribe 2 highest hallucination rate. Humans not hallucination-free — extrapolations counted (e.g., inferring BMI, specifying tests beyond what was mentioned). | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Inter-rater Reliability (ICC) | Overall ICC=0.56 (moderate, p=.023). Good for thoroughness (0.879) and accuracy (0.745). Poor for synthesis (0.082) and other subjective domains. | (methodological) |
| Human vs. AI domains | Humans lowest in accuracy, thoroughness, usefulness, comprehensibility, synthesis, internal consistency. AI not significantly better on usefulness, organisation, comprehensibility, synthesis, internal consistency, bias. | [[IQ - Information Quality]] |

---

## Platform Summary Table

| Scribe | Type | Mean Score (/50) | 95% CI | Distinguishing Feature |
|---|---|---|---|---|
| Scribe 1 | AI | 43.50 | 40.84–46.16 | Balanced performer |
| Scribe 2 | AI | 40.00 | 35.63–44.37 | Highest hallucination rate |
| Scribe 3 | **Human (GP)** | **37.42** | **31.88–42.95** | **Lowest overall; worst accuracy/thoroughness** |
| Scribe 4 | AI | 44.08 | 42.21–45.96 | Best accuracy + thoroughness; least succinct |
| Scribe 5 | AI | 44.08 | 40.34–47.74 | Most succinct; slightly less accurate |

---
*Reviewed by Iris | Source: SHTI Vol. 333 (HIC2025) | DOI: 10.3233/SHTI251572 | Template v2.0 | Full text reviewed ✅*
*📍 Only GP/general practice comparative study (AI vs. human) in the corpus. Australian primary care context — distinct from US academic health system focus of most other papers.*
*📍 Provocative finding: AI scribes beat human GPs on documentation quality in simulation. But overall difference NOT statistically significant (p=0.071). Trend toward AI superiority in thoroughness and accuracy, but small sample (4 cases, 5 scribes) limits power.*
*📍 Human hallucinations: Classifying GP clinical extrapolation as "hallucination" is a novel and contested definition. The paper argues it highlights parallels between human cognition and LLMs — both extrapolate from context. This reframes hallucination as a cognitive property, not just an AI flaw.*
*📍 Throughness vs. succinctness trade-off: Scribe 4 (most thorough) = least succinct. Scribe 5 (most succinct) = slightly less accurate. Same trade-off observed in Palm 2025 and Anderson 2025 — a recurring tension in the corpus.*
*📍 Simulation limitation: Out-of-the-box AI performance; no customization. Real-world implementations would typically involve template customization which could shift these results substantially.*
*📍 Modified PDQI-9: Added "freedom from hallucination" and "freedom from bias" domains (replacing "up-to-date"). Similar modification to Palm 2025 and Anderson 2025 — a convergent methodological approach across independent research groups.*
