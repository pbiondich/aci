# Memory

## Me
Paul (claude@reachpaul.com). Building a structured literature review and interactive web tool evaluating Ambient Clinical Intelligence (ACI) tools using the DeLone & McLean IS Success Model.

## Projects
| Name | What |
|------|------|
| **ACI Evidence Review** | Obsidian vault + interactive webapp evaluating 54 ACI studies, 25 canonical measures, 494 raw measure rows. GitHub Pages site at pbiondich.github.io/aci |

## Terms
| Term | Meaning |
|------|---------|
| ACI | Ambient Clinical Intelligence — AI tools that listen to clinical encounters and generate documentation |
| D&M | DeLone & McLean IS Success Model (6 dimensions: SQ, IQ, SerQ, U, US, NB) |
| CM-XX | Canonical Measure (CM-01 through CM-25), derived bottom-up from raw measures |
| DM-XX | Draft Measure (DM-01 through DM-12), from stakeholder gap analysis, pending key informant validation |
| SQ | System Quality (D&M dimension) |
| IQ | Information Quality (D&M dimension) |
| SerQ | Service Quality (D&M dimension) |
| U | Use / Intention to Use (D&M dimension) |
| US | User Satisfaction (D&M dimension) |
| NB | Net Benefits (D&M dimension) |

## Preferences
- Markdown files in Obsidian vault are the single source of truth
- Zero-build-step architecture (no npm/webpack — single HTML + JSON)
- Track versions in index.html as: `25 canonical measures derived from 494 raw measure rows across 54 papers | March 2026 | v.XX`
- Version changelog maintained as HTML comment at top of index.html
- Bump version number with every improvement
- Rigor tiers: "Best Relative Quality", "Moderate", "Low", "Critically Low", "Meta/Methodological" (never Gold/Silver/Bronze)
- Rigor scores are placeholder mockup — formal methodology TBD
- Webapp currently at v.20, tabs shareable via URL hash (#guide, #articles, etc.)

> Details: memory/projects/aci-evidence-review.md
