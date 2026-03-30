# Article Review

---

## Article Title
Ambient Artificial Intelligence Scribes and Physician Financial Productivity

## Author(s)
Holmgren, A. Jay; Fenton, S.H.; Thombley, R.; Soleimani, Hossein; Croci, Rhiannon; DeMasi, Orianna; Byron, Maria E.; Murray, Sara G.; Adler-Milstein, Julia R.; Yazdany, Jinoos

## DOI
[10.1001/jamanetworkopen.2025.53233](https://doi.org/10.1001/jamanetworkopen.2025.53233)

## Journal / Source
JAMA Network Open | Research Letter | Published January 9, 2026 | Accepted October 21, 2025

## Ambient Product(s) Evaluated
Two unnamed commercial AI scribe tools deployed at UCSF Health. Tools offered to 2018 attending physicians starting August 7, 2023, with broad rollout from March 4, 2024. No vendor names disclosed.

## Clinical Setting
Outpatient/ambulatory — all ambulatory visits completed by attending physicians at University of California San Francisco (UCSF) Health, January 2023–April 2025.

## Evidence Level
Observational (retrospective EHR + billing metadata analysis with difference-in-differences design)

## Data Source(s)
EHR data (UCSF); claims/billing (RVU data); product telemetry (adoption timing)

## Article Summary
This UCSF study examined whether ambient AI scribe adoption affected physician financial productivity (RVUs, visit volume, claim denials) using EHR metadata from 1.9M ambulatory encounters (Jan 2023–Apr 2025). 44.6% of attending physicians were AI scribe adopters. Difference-in-differences models found adopters billed **0.04 more RVUs per encounter** (p=.001), **1.81 more RVUs per week** (p<.001), and **0.80 more encounters per week** (p=.04). No increase in claim denials. This translates to ~$3,044 annually per physician at 2025 Medicare rates.

## Hypothesis
Not explicitly stated. Research question: Is ambient AI scribe adoption associated with changes in RVUs, ambulatory visit volume, and claim denials?

## Study Measures

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| RVUs per encounter | Relative value units billed per individual encounter; measure of financial productivity | NB |
| RVUs per physician per week | Total RVUs per week, controlling for encounter type, payer, complexity | NB |
| Encounters per week | Ambulatory visit volume per physician per week | NB |
| Claim denial rate | Proportion of encounters with a payer denial; proxy for coding quality | NB, IQ |
| Adoption status | Whether physician had access to and used an AI scribe at time of encounter | U |

---

## Key Findings

- **+0.04 RVUs per encounter** (95% CI, 0.02–0.07; p=.001) — statistically significant but small per-encounter effect
- **+1.81 RVUs per week** (95% CI, 0.86–2.75; p<.001) — larger aggregate effect; translates to **~$3,044 annually per physician** at 2025 Medicare rates
- **+0.80 encounters per week** (95% CI, 0.05–1.56; p=.04) — physicians saw slightly more patients
- **Claim denials: no significant change** — AI scribe adoption was not associated with increased billing denials
- Event study coefficients near zero in pre-adoption period — supports parallel trends assumption for causal interpretation
- RVUs increased *over time* post-adoption, suggesting a learning curve or intensifying use effect
- No explicit productivity requirements were placed on adopters (voluntary use)
- Sample: 698 adopters, 867 nonadopters; 182,617 adopter encounters out of 1.2M total

## D&M Analysis

- **NB (Net Benefits):** First paper in corpus to examine the financial productivity angle. The finding of increased RVUs and encounters without increased denials suggests ambient scribes may help physicians bill more completely/accurately, not just save time.
- **IQ (Information Quality):** Zero increase in claim denials is an indirect IQ finding — notes produced with AI assistance are not being rejected by payers at higher rates, suggesting billing code documentation is at least adequate.
- **U (Use/Adoption):** 44.6% adoption among eligible physicians. Physicians self-selected when to use. Usage increased over time (from companion Tierney 2025 data).

## Contextual Notes

- **Causal interpretation caveats:** Single-site study (UCSF); possible self-selection bias (early adopters may be higher-productivity physicians); EHR metadata doesn't capture all confounders.
- **Implications:** 1.81 RVUs/week × 52 weeks = 94 additional RVUs/year. At $33/RVU (approximate 2025 Medicare rate), this yields ~$3,044/year. AI scribe costs range widely but can be $3,000–10,000+/physician/year, so ROI is not automatic.
- **Unanswered question:** Do higher RVUs reflect more clinical services provided, or more accurate billing for existing services, or potential upcoding? Authors flag this as a key unknown requiring further study.
- **Policy concern:** If AI scribes systematically increase RVU billing across large physician populations, the aggregate effect on healthcare spending could be substantial.

## Companion papers (referenced in article)

- Tierney 2025 (NEJM Catalyst) — same tool (The Permanente Medical Group), learnings after 1 year
- Shah 2025 (JAMA Network Open) — physician perspectives on ambient AI scribes
- Shah/Devon-Sand 2025 (JAMIA, ocae295) — physician burnout and perspectives

---

*Reviewed by Iris | Source: JAMA Network Open 2026 | DOI: 10.1001/jamanetworkopen.2025.53233 | Template v2.0 | Full text reviewed ✅*
*📍 Unique contribution: Only paper in corpus to examine financial productivity (RVU/billing) outcomes. All other papers focus on time savings, burnout, or note quality. This opens a new dimension of D&M analysis — NB via revenue impact.*
*📍 No COI disclosed by primary author (Holmgren) other than UCSF IMPACC gift funding. Adler-Milstein (co-author) also on IMPACC. No vendor funding disclosed — this is industry-independent.*
*📍 Policy signal: The RVU increase without denial increase raises legitimate questions about whether AI scribes shift physician behavior toward more intensive coding, with downstream healthcare spending implications.*
