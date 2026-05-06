# Article Review

---

## Article Title
The value of simulation testing for the evaluation of ambient digital scribes: a case report

## Author(s)
Biro, Joshua M.; Handley, Jessica L.; Mickler, James; Reddy, Sahithi; Kottamasu, Varsha; Ratwani, Raj M.; Cobb, Nathan K.

## DOI
[10.1093/jamia/ocaf052](https://doi.org/10.1093/jamia/ocaf052)

## Journal / Source
Journal of the American Medical Informatics Association (JAMIA) | Vol. 32, No. 5 | 2025 | pp. 928–931. Case Report. Published March 21, 2025. MedStar Health National Center for Human Factors in Healthcare / Georgetown University.

## Ambient Product(s) Evaluated
**Two anonymized Ambient Digital Scribe (ADS) products** (referred to as ADS Product A and ADS Product B). The study evaluates commercial ADS products without naming vendors — deliberate anonymization for the case report. Products use LLMs to capture patient-provider conversations and generate structured clinical notes.

## Clinical Setting
MedStar Health (large Mid-Atlantic healthcare system). Simulation study — not real patient encounters. 11 real outpatient encounter recordings were transcribed and edited into dialogue scripts covering 10 service lines (Otolaryngology, Cardiology, Rheumatology, Family Medicine, Pediatrics, Endocrinology, Internal Medicine, Gastroenterology, Oncology, Urgent Care). Two researcher-physician teams (2 physicians, 2 researchers) simulated reading the scripts while both ADS products listened. 44 draft notes generated (11 scripts × 2 teams × 2 products). IRB approved.

## Evidence Level
Observational (simulation testing case report — rapid evaluation methodology)

## Data Source(s)
Simulation data (editing time, Likert-scale ratings of editing effort, error classification)

## Article Summary
This case report from MedStar Health demonstrates the value of **simulation testing** as a rapid method for evaluating ambient digital scribe products. Using 11 scripted outpatient encounters read by researcher-physician teams, the study compared two commercial ADS products across 44 draft notes. Key findings: ADS Product A took significantly longer to edit (80.6 seconds longer, p<.001) but had fewer omissions and more additions/irrelevant text errors than Product B. Physicians rated ADS Product A as performing better for most encounters (12/22), despite longer editing time. Error analysis: omissions were the most common error type across both products (54.1% for A, 83.3% for B). The authors argue that simulation testing is a crucial first step in evaluating AI-enabled technologies because it can identify safety and usability issues in hours rather than months, allowing healthcare systems to efficiently screen products before pilot implementation. They position simulation testing as complementary to pilot testing — simulation for underlying technology/interface issues, pilot for workflow integration.

## Hypothesis
Explicit: to demonstrate the value of simulation testing for rapidly evaluating artificial intelligence products (specifically ADS).

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| Editing Time (seconds) | Time for physician to edit AI-generated draft note to final signed note. ADS Product A took significantly longer than Product B (+80.6 seconds, p<.001). Physician 1 faster than Physician 2. Order of use did not affect time. | [[II - Individual Impact]] |
| Perceived Editing Amount (5-point Likert) | Physician rating of how much editing was required (1=none, 5=extreme). Mean 2.89 (moderate). No significant difference between products or order of use. | [[US - User Satisfaction]], [[II - Individual Impact]] |
| Perceived Effort (5-point Likert) | Physician rating of effort required to edit note (1=none, 5=extreme). Mean 2.73 (minimal-moderate). Physician 1 reported significantly less effort than Physician 2 (p=.014). No product difference. | [[US - User Satisfaction]] |
| Error Rate & Type | 127 total errors across 44 notes (2.88 errors/note average). Omissions most common (54.1% Product A, 83.3% Product B). Product A had more additions and irrelevant/misplaced text errors. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Overall Product Preference | Physician chose which ADS performed better for each script. Product A preferred 12 times, Product B 6 times, equal 4 times. Physicians agreed on which was better in only 3 of 11 scripts. | [[US - User Satisfaction]] |
| Simulation Testing Methodology | Rapid evaluation approach using scripted encounters. 11 scripts, 2 teams, 2 products = 44 notes. Alternating order to control for learning effects. Linear mixed-effects model for editing time, ordinal logistic regression for Likert ratings. | (methodological) |

---
*Reviewed by Iris | Source: JAMIA 2025 | DOI: 10.1093/jamia/ocaf052 | Template v2.0 | Full text reviewed ✅*
*📍 Methodological contribution: First paper in corpus to explicitly advocate for and demonstrate **simulation testing** as a rapid evaluation method for ambient AI scribes. Authors argue this is faster and more controlled than pilot testing for identifying safety/usability issues.*
*📍 Key finding: Omissions are the most common error type (not hallucinations) — contradicts "common wisdom" about LLMs. Product A had fewer omissions but more additions/irrelevant text. Product A preferred overall despite taking longer to edit.*
*📍 Inter-physician variability: Physician 1 consistently faster and reported less effort than Physician 2. This reinforces the "user phenotype" concept from Ma 2025 — individual differences matter greatly.*
*📍 Safety framing: Authors position this as addressing growing concerns about AI safety (citing Obermeyer 2019, Wong 2021). Simulation testing as a proactive rather than reactive approach.*
*📍 Industry context: MedStar Health evaluating two commercial ADS products (anonymized). This is an independent academic evaluation — contrasts with Palm 2025 (Suki internal) and Olson 2025 (Abridge co-author).*
*📍 Practical impact: Authors note these findings led to deliberate modifications to provider training during rollout and a detailed review of issues with the vendor. Simulation testing informed real implementation decisions.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
