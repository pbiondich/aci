# Article Review

---

## Article Title
Benchmarking And Datasets For Ambient Clinical Documentation: A Scoping Review Of Existing Frameworks And Metrics For AI-Assisted Medical Note Generation

## Author(s)
Gebauer, Sarah

## DOI
[10.1101/2025.01.29.25320859](https://doi.org/10.1101/2025.01.29.25320859)

## Journal / Source
medRxiv preprint (not peer-reviewed) — Posted January 29, 2025. MachineLearningForMDs.

## Ambient Product(s) Evaluated
Not applicable — this is a scoping review of evaluation frameworks and datasets, not a study of a specific product.

## Clinical Setting
Not applicable (secondary review study). Included studies spanned clinical ambient scribe evaluations published 2020–2025 across PubMed, IEEE Explore, Scopus, Web of Science, and Embase. Only 7 studies met inclusion criteria.

## Evidence Level
Scoping/Systematic Review (preprint; not peer-reviewed)

## Data Source(s)
Secondary review (no primary data collection)

## Article Summary
This scoping review examines existing evaluation frameworks and metrics for AI-assisted clinical note generation. Of the studies reviewed, only 7 met inclusion criteria, revealing wide variation in evaluation approaches — ranging from NLP metrics (ROUGE, BERTScore) to domain-specific clinical accuracy measures. Critical gaps identified include: heterogeneous metrics that preclude cross-study comparison, limited integration of clinical relevance in automated metrics, no standardized approach for hallucination/error detection, minimal specialty diversity, and only 2 publicly available benchmark datasets. The paper calls for standardized evaluation frameworks combining automated and clinical quality metrics.

## Hypothesis
Not explicitly stated. Objective is descriptive: to catalog existing frameworks and identify gaps.

## Study Measures

**D&M Dimensions reference:**
- **SQ** = System Quality | **IQ** = Information Quality | **SerQ** = Service Quality
- **U** = Use / Intention to Use | **US** = User Satisfaction | **NB** = Net Benefits

| Measure | Description | D&M Dimension(s) |
|---|---|---|
| ROUGE Score | Automated NLP metric comparing AI-generated note text to reference notes using n-gram overlap. Measures surface-level textual similarity, not clinical accuracy. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| BERTScore | Semantic similarity metric using contextual embeddings to compare generated vs. reference text. More nuanced than ROUGE but still not clinically validated. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Clinical Accuracy | Domain-specific evaluation of whether AI-generated notes correctly capture clinical facts, diagnoses, and plans from the encounter. | [[IQ - Information Quality]] |
| Hallucination / Error Rate | Frequency of factually incorrect or fabricated content in AI-generated clinical notes. Identified as a critical gap — no standardized detection approach exists yet. | [[IQ - Information Quality]], [[SQ - System Quality]] |
| Benchmark Dataset Availability | Whether studies used publicly available datasets for reproducible evaluation. Only 2 datasets found to be publicly available; cited as a major field-wide limitation. | [[SQ - System Quality]] |
| Specialty Coverage | Range of clinical specialties represented in evaluation datasets. Found to be minimal — mostly primary care/general medicine, limiting generalizability. | [[IQ - Information Quality]] |

---
*Reviewed by Iris | Source: medRxiv preprint 2025 | DOI: 10.1101/2025.01.29.25320859 | Template v2.0*
*⚠️ Note: This is a preprint and has not been peer-reviewed.*

## License

This file is part of the [ACI Structured Evidence Review](https://github.com/pbiondich/aci), licensed under [CC BY-SA 4.0](../LICENSE). If you extend this work, consider contributing back via a pull request.
