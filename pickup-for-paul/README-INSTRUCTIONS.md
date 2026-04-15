# Pickup Instructions — April 15, 2026

These files contain all changes from today's session. Copy them into your local repo (after pulling the latest with your team's PR changes).

## Files to copy (preserving directory structure)

```
pickup-for-paul/
  scripts/link-article.js          ← NEW: article linkage tool
  scripts/extract-data.js          ← UPDATED: added linkage validation
  docs/index.html                  ← UPDATED: v.20 (hash routing, rigor warning, key findings)
  .github/workflows/build-site.yml ← UPDATED: added linkage fix step to CI
  Templates/Article Review Template.md              ← UPDATED: v3.0, added linkage checklist
  Templates/Canonical Measure Derivation Methodology.md ← NEW: full methodology doc
  CLAUDE.md                        ← UPDATED: working memory
  memory/projects/aci-evidence-review.md            ← UPDATED: project memory
```

## After copying, run these commands from the repo root:

```bash
# 1. Rename CM-10 file (remove "PDQI" from filename)
mv "Canonical Measures/CM-10 Note Quality Overall PDQI.md" "Canonical Measures/CM-10 Note Quality Overall.md"

# 2. Update CM-10 content (the file in pickup already has the updated content,
#    but since the rename needs to happen on your end, you may need to manually
#    update the heading and definition — see notes below)

# 3. Run the linkage tool to add missing paper links
node scripts/link-article.js --all --fix

# 4. Regenerate JSON
node scripts/extract-data.js

# 5. Push everything
git add -A
git commit -m "v.20: hash routing, rigor warning, linkage tooling, paper link fixes"
git push
```

## CM-10 rename notes

The file needs to be renamed from "CM-10 Note Quality Overall PDQI.md" to "CM-10 Note Quality Overall.md". Inside the file:
- Change heading: `# CM-10 Note Quality Overall PDQI` → `# CM-10 Note Quality Overall`
- Update definition to mention SAIL Score alongside PDQI-9/PDSQI-9
- Add SAIL Score row to Measurement Methods table

## CM-09 rename (your team's PR)

Your team renamed CM-09 from "Note Accuracy and Hallucination Rate" to "Note Inaccuracy Rate". The linkage script's keyword patterns (in `CM_PATTERNS['CM-09']`) will still work since they match on measure content, not filenames. However, you'll want to update references in:
- `D&M Dimensions/IQ - Information Quality.md`
- `Canonical Measures/A Few Words About Canonical Measures.md`
- Any other vault files that link to the old name

## What the linkage tool will do

When you run `node scripts/link-article.js --all --fix`, it will:
- Add ~26 missing paper links to canonical measure files
- Add ~54 missing paper links to D&M dimension files
- These are articles that measure constructs relevant to a CM/dimension but were missing from the paper lists
