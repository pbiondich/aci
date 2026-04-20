# CM-24 Transcription and ASR Accuracy

**D&M Dimension:** [[SQ - System Quality]]

## Definition
Technical accuracy of automatic speech recognition (ASR) in transcribing clinical conversations — word error rate, speaker diarization, and medical vocabulary recognition. The upstream quality gate: if the transcript is wrong, the note will be wrong regardless of NLP quality.

## Measurement Methods
| Method | Description | Data Source |
|---|---|---|
| [Word Error Rate (WER)](https://en.wikipedia.org/wiki/Word_error_rate) | % of words incorrectly transcribed vs. reference | ASR evaluation |
| Speaker Diarization Accuracy | % of segments correctly attributed to correct speaker | ASR evaluation |
| Medical Term Recall (MTR) | % of clinical vocabulary correctly transcribed | ASR evaluation |
| Transcript error transmission rate | % of transcript errors that propagate into the final note | Simulation |

## Aliases Used in Literature
- Transcription Accuracy / WER ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- ASR Accuracy ([[Falcetta 2023 - Automatic Documentation Professional Health Interactions Systematic Review|Falcetta 2023]], [[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda|van Buchem 2021]])
- Medical Term Recall (MTR) ([[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools|Wang 2025]])
- Speaker Diarization Accuracy ([[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda|van Buchem 2021]])
- Transcript Error Transmission Rate (%) ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])
- Transcript Errors per Case ([[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation|Anderson 2025]])

## ⚠️ Key Note
**Only 3 papers formally measure ASR accuracy as an outcome.** Commercial products (DAX, Abridge, Suki, Ambience) do not publish their WER or diarization accuracy — a documented pattern of industry opacity since van Buchem 2021. This is a fundamental evidence gap: the acoustic quality of commercial products is entirely unknown in the published literature.

**⚠️ Grouping consideration:** Transcription/ASR accuracy measures the same technical quality dimension as note quality measures (CM-08, CM-09, CM-10, CM-12). ASR accuracy is the upstream technical gate for all downstream note quality; these should be presented as a grouped category in synthesis. Consider whether CM-24 should be explicitly linked to or merged with the note quality cluster.

## Papers Measuring This (3)
- [[Anderson 2025 - Quality Safety Ambient Digital Scribe Platforms Simulation]]
- [[Wang 2025 - Evaluation Framework Ambient Digital Scribing Tools]]
- [[van Buchem 2021 - Digital Scribe Scoping Review Research Agenda]]

---
*Canonical Measures | Suki Literature Review Vault | Derived 2026-03-25, updated 2026-04-15*
*Method: Bottom-up derivation from 494 raw measure rows across 54 papers*
