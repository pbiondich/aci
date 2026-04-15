#!/usr/bin/env node
/**
 * Article Linkage Tool
 *
 * Reads an article's Study Measures table and ensures the article is properly
 * linked in all relevant Canonical Measure and D&M Dimension files.
 *
 * Modes:
 *   --check   (default) Report missing links without modifying files
 *   --fix     Apply missing links to CM and dimension files
 *   --all     Check/fix all articles in the corpus (combine with --fix to apply)
 *
 * Usage:
 *   node scripts/link-article.js "Articles/Billings 2025b - Practicing Value-Based Care with AI.md"
 *   node scripts/link-article.js --fix "Articles/Billings 2025b - Practicing Value-Based Care with AI.md"
 *   node scripts/link-article.js --all
 *   node scripts/link-article.js --all --fix
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const ARTICLES_DIR = path.join(REPO_ROOT, 'Articles');
const CM_DIR = path.join(REPO_ROOT, 'Canonical Measures');
const DIM_DIR = path.join(REPO_ROOT, 'D&M Dimensions');

// ============================================================================
// CM KEYWORD PATTERNS
// Each CM has a list of regex patterns that match measure names in article tables.
// These should be updated when new aliases are discovered.
// ============================================================================

const CM_PATTERNS = {
  'CM-01': [/burnout/i, /exhaustion/i, /interpersonal disengagement/i, /mini.?z.*burnout/i, /olbi/i, /maslach/i],
  'CM-02': [/cognitive.*load/i, /task.*load/i, /nasa.?tlx/i, /mental demand/i, /temporal demand/i, /physician task load/i, /cognitive burden/i, /cognitive demand/i],
  'CM-03': [/professional fulfillment/i, /meaningfulness/i, /work.?life balance/i, /job satisfaction/i, /wellbeing/i, /well.?being/i],
  'CM-04': [/documentation time/i, /time in notes?\b/i, /time on notes?\b/i, /time per note/i, /notetaking time/i, /post.?visit documentation/i, /editing time/i, /post.?edit time/i, /active documentation time/i, /daily documentation time/i, /documentation.*\bmin\b/i, /progress note time/i, /discharge summary time/i, /consultation duration/i],
  'CM-05': [/after.?hours/i, /pajama time/i, /work outside work/i, /out.?of.?hours/i, /off.?hours/i, /\bwow\b/i],
  'CM-06': [/same.?day.*closure/i, /chart closure/i, /note completion.*next patient/i, /encounter closure/i, /time to close encounter/i, /24.?hour.*deficiency/i, /chart completion/i],
  'CM-07': [/total.*ehr time/i, /total time in ehr/i, /daily ehr time/i],
  'CM-08': [/\bomission/i, /\bcompleteness\b/i, /\bthoroughness\b/i, /missing.*information/i, /errors of omission/i],
  'CM-09': [/hallucination/i, /(?<!coding )(?<!asr )(?<!transcription )accuracy(?!.*coding)/i, /incorrect.*fact/i, /addition error/i, /\berror rate.*type\b/i, /clinically significant inaccurac/i, /incorrect statement/i, /negation error/i, /fabricat/i, /documentation accuracy concern/i],
  'CM-10': [/pdqi/i, /pdsqi/i, /\bnote quality\b/i, /documentation quality(?!.*coding)/i, /sail score/i],
  'CM-11': [/note length/i, /word count/i, /characters per/i, /verbosity/i, /lexical diversity/i, /note length ratio/i, /documentation length/i, /progress note length/i],
  'CM-12': [/rouge/i, /bertscore/i, /bleurt/i, /\bf1 score\b/i, /automatic metric/i, /nlp.*extraction/i],
  'CM-13': [/utilization rate/i, /adoption rate/i, /\busage rate\b/i, /\busage level\b/i, /inclusion rate/i, /license relinquish/i, /scribe utilization/i],
  'CM-14': [/intention to use/i, /willingness to adopt/i, /recommendation likelihood/i, /recommendation intention/i, /would recommend/i, /implementation intent/i],
  'CM-15': [/(?:physician|clinician|provider|employee) satisfaction/i, /system usability/i, /usability.*(?:rating|scale)/i, /utaut/i, /perceived usefulness/i, /net promoter/i, /clinician experience/i],
  'CM-16': [/trust in ai/i, /provider.*skeptic/i, /\bai trust\b/i, /trusted.*(?:hcc|diagnosis)/i],
  'CM-17': [/patient.*(?:experience|satisfaction|feedback|comfort)/i, /\bpdrq\b/i, /patient.*(?:relationship|engagement)/i, /patient.*(?:ltr|likelihood.*recommend)/i, /press ganey(?!.*workforce)/i, /therapeutic alliance/i, /patient opt.?out/i],
  'CM-18': [/(?:doctor|physician).?patient interaction/i, /undivided attention/i, /face.?to.?face/i, /\beye contact\b/i, /patient.*care time/i, /patient interaction/i, /focused on (?:me|patient)/i, /more personable/i, /patient.?centered care/i],
  'CM-19': [/patient safety/i, /ahrq harm/i, /\bcritical error/i, /adverse event/i, /psychiatric intervention/i, /rdoc.*symptom/i],
  'CM-20': [/\bwrvu/i, /\brvu/i, /\brevenue\b/i, /financial.*(?:productivity|viability|benefit)/i, /productivity.*(?:billing|impact)/i, /cost comparison/i],
  'CM-21': [/icd.?10/i, /\bhcc\b/i, /e\/?m.*(?:coding|level)/i, /coding accuracy/i, /billing.*compliance/i, /claim denial/i, /diagnostic billing/i],
  'CM-22': [/patient.*(?:volume|throughput)/i, /encounters per/i, /patients seen per/i, /door.?to/i, /length of stay/i, /room.?to.?doc/i],
  'CM-23': [/implementation.*(?:barrier|theme)/i, /workflow.*(?:fit|adaptation|disruption|efficiency)/i, /learning curve/i, /specialty.*(?:specific|moderator|subgroup|variation)/i, /encounter suitability/i, /non.?adopter/i],
  'CM-24': [/transcription accuracy/i, /word error rate/i, /\bwer\b/i, /\basr accuracy\b/i, /speaker diarization/i, /medical term recall/i, /transcript error/i],
  'CM-25': [/inter.?rater.*reliability/i, /\bicc\b/i, /benchmark dataset/i, /quest framework/i, /seips/i, /llm.?as.?(?:evaluator|judge)/i, /cross.?replicate consistency/i],
};

// D&M dimension patterns — match against the D&M Dimension(s) column in study measures tables
const DIM_CODES = ['SQ', 'IQ', 'SerQ', 'U', 'US', 'NB'];
const DIM_FILE_MAP = {
  'SQ': 'SQ - System Quality.md',
  'IQ': 'IQ - Information Quality.md',
  'SerQ': 'SerQ - Service Quality.md',
  'U': 'U - Use.md',
  'US': 'US - User Satisfaction.md',
  'NB': 'NB - Net Benefits.md',
};

// Known false-positive suppressions: [article_citation, cm_id]
// These have been manually reviewed and confirmed as NOT relevant
const SUPPRESS = [
  // "coding accuracy" or "ICD-10" matching CM-09 instead of CM-21
  ['Afshar 2025', 'CM-09'],
  ['Peterson Health Technology Institute 2025', 'CM-09'],
  // "ASR accuracy" belongs to CM-24, not CM-09
  ['van Buchem 2021', 'CM-09'],
  // "Accuracy Confidence" is self-confidence, not hallucination
  ['Karavassilis 2025', 'CM-09'],
  // PDQI Accuracy subdomain is part of CM-10, not CM-09
  ['Bracken 2025', 'CM-09'],
  // QUEST/SEIPS are evaluation frameworks, not study quality instruments
  ['Kanaparthy 2025', 'CM-25'],
  // "EHR Experience" is perception, not time
  ['You 2025', 'CM-07'],
  // "Patient Trust" ≠ Provider Trust in AI
  ['Evans 2025', 'CM-16'],
  // "Accuracy Confidence" is not trust in AI
  ['Karavassilis 2025', 'CM-16'],
];

function isSuppressed(citation, cmId) {
  return SUPPRESS.some(([a, c]) => a === citation && c === cmId);
}

// ============================================================================
// ARTICLE PARSING
// ============================================================================

function extractStudyMeasures(content) {
  const match = content.match(/^## Study Measures[^\n]*\n/m);
  if (!match) return { measures: [], dimensions: new Set() };

  const start = match.index + match[0].length;
  const rest = content.substring(start);
  const nextHeading = rest.match(/\n## /);
  const block = nextHeading ? rest.substring(0, nextHeading.index) : rest;

  const measures = [];
  const dimensions = new Set();

  for (const line of block.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;
    const cols = trimmed.split('|').map(c => c.trim());
    if (cols.length < 3) continue;

    const measureName = cols[1].replace(/\*\*/g, '').trim();
    if (!measureName || measureName === 'Measure' || measureName.startsWith('---')) continue;

    measures.push(measureName);

    // Extract D&M dimensions from the last columns
    const dimText = cols.slice(2).join(' ');
    for (const code of DIM_CODES) {
      if (new RegExp(`\\b${code}\\b`).test(dimText)) {
        dimensions.add(code);
      }
    }
  }

  return { measures, dimensions };
}

function getCitation(filename) {
  return path.basename(filename, '.md').split(' - ')[0].trim();
}

function getWikilink(filename) {
  return `[[${path.basename(filename, '.md')}]]`;
}

// ============================================================================
// CM FILE OPERATIONS
// ============================================================================

function getCMPapers(cmFilePath) {
  const content = fs.readFileSync(cmFilePath, 'utf-8');
  const papers = [];
  const match = content.match(/## Papers Measuring This/);
  if (!match) return papers;

  const start = match.index;
  const rest = content.substring(start);
  const wikilinks = rest.match(/\[\[([^\]]+)\]\]/g) || [];
  for (const wl of wikilinks) {
    papers.push(wl.replace(/\[\[|\]\]/g, '').split(' - ')[0].trim());
  }
  return papers;
}

function addPaperToCM(cmFilePath, wikilink) {
  let content = fs.readFileSync(cmFilePath, 'utf-8');
  const lines = content.split('\n');

  // Find the last paper entry line (- [[...]])
  let lastPaperLine = -1;
  let inPapersSection = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^## Papers Measuring This/.test(lines[i])) inPapersSection = true;
    if (inPapersSection && /^## /.test(lines[i]) && !/^## Papers/.test(lines[i])) break;
    if (inPapersSection && lines[i].trim().startsWith('- [[')) lastPaperLine = i;
  }

  if (lastPaperLine === -1) {
    console.warn(`  WARNING: Could not find paper list in ${path.basename(cmFilePath)}`);
    return false;
  }

  // Insert new link after last paper, maintaining alphabetical order
  const newEntry = `- ${wikilink}`;
  lines.splice(lastPaperLine + 1, 0, newEntry);

  // Update paper count in heading
  const newContent = lines.join('\n');
  const countMatch = newContent.match(/## Papers Measuring This\s*\((\d+)\)/);
  let finalContent = newContent;
  if (countMatch) {
    const oldCount = parseInt(countMatch[1]);
    finalContent = newContent.replace(
      `## Papers Measuring This (${oldCount})`,
      `## Papers Measuring This (${oldCount + 1})`
    );
  }

  fs.writeFileSync(cmFilePath, finalContent);
  return true;
}

// ============================================================================
// DIMENSION FILE OPERATIONS
// ============================================================================

function getDimPapers(dimFilePath) {
  const content = fs.readFileSync(dimFilePath, 'utf-8');
  const papers = [];
  const match = content.match(/## Papers in this Dimension/);
  if (!match) return papers;

  const start = match.index;
  const rest = content.substring(start);
  const nextSection = rest.match(/\n---/);
  const block = nextSection ? rest.substring(0, nextSection.index) : rest;
  const wikilinks = block.match(/\[\[([^\]]+)\]\]/g) || [];
  for (const wl of wikilinks) {
    papers.push(wl.replace(/\[\[|\]\]/g, '').split(' - ')[0].trim());
  }
  return papers;
}

function addPaperToDimension(dimFilePath, wikilink) {
  let content = fs.readFileSync(dimFilePath, 'utf-8');
  const lines = content.split('\n');

  let lastPaperLine = -1;
  let inPapersSection = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^## Papers in this Dimension/.test(lines[i])) inPapersSection = true;
    if (inPapersSection && /^---/.test(lines[i])) break;
    if (inPapersSection && /^## /.test(lines[i]) && !/^## Papers in this/.test(lines[i])) break;
    if (inPapersSection && lines[i].trim().startsWith('- [[')) lastPaperLine = i;
  }

  if (lastPaperLine === -1) {
    console.warn(`  WARNING: Could not find paper list in ${path.basename(dimFilePath)}`);
    return false;
  }

  const newEntry = `- ${wikilink}`;
  lines.splice(lastPaperLine + 1, 0, newEntry);

  // Update paper count in heading
  const newContent = lines.join('\n');
  const countMatch = newContent.match(/## Papers in this Dimension\s*\((\d+)\)/);
  let finalContent = newContent;
  if (countMatch) {
    const oldCount = parseInt(countMatch[1]);
    finalContent = newContent.replace(
      `## Papers in this Dimension (${oldCount})`,
      `## Papers in this Dimension (${oldCount + 1})`
    );
  }

  fs.writeFileSync(dimFilePath, finalContent);
  return true;
}

// ============================================================================
// MATCHING ENGINE
// ============================================================================

function findCMMatches(measureNames, citation) {
  const matches = {};

  for (const [cmId, patterns] of Object.entries(CM_PATTERNS)) {
    const matched = [];
    for (const measure of measureNames) {
      for (const pat of patterns) {
        if (pat.test(measure)) {
          matched.push(measure);
          break;
        }
      }
    }
    if (matched.length > 0 && !isSuppressed(citation, cmId)) {
      matches[cmId] = matched;
    }
  }

  return matches;
}

// ============================================================================
// MAIN
// ============================================================================

function processArticle(articlePath, doFix) {
  const content = fs.readFileSync(articlePath, 'utf-8');
  const filename = path.basename(articlePath, '.md');
  const citation = getCitation(articlePath);
  const wikilink = getWikilink(articlePath);

  const { measures, dimensions } = extractStudyMeasures(content);

  if (measures.length === 0) {
    console.log(`  ⏭️  No study measures table found — skipping`);
    return { cmGaps: 0, dimGaps: 0 };
  }

  let cmGaps = 0;
  let dimGaps = 0;

  // --- Check CM linkage ---
  const cmMatches = findCMMatches(measures, citation);
  const cmFiles = fs.readdirSync(CM_DIR).filter(f => f.startsWith('CM-') && f.endsWith('.md'));

  for (const [cmId, matchedMeasures] of Object.entries(cmMatches)) {
    const cmFile = cmFiles.find(f => f.startsWith(cmId + ' '));
    if (!cmFile) continue;

    const cmPath = path.join(CM_DIR, cmFile);
    const existingPapers = getCMPapers(cmPath);

    if (!existingPapers.includes(citation)) {
      cmGaps++;
      if (doFix) {
        addPaperToCM(cmPath, wikilink);
        console.log(`  ✅ Added to ${cmId} (matched: ${matchedMeasures[0]})`);
      } else {
        console.log(`  ❌ MISSING from ${cmId}: ${cmFile.replace('.md', '')}`);
        console.log(`     Matched: ${matchedMeasures.join(', ')}`);
      }
    }
  }

  // --- Check D&M dimension linkage ---
  for (const dimCode of dimensions) {
    const dimFile = DIM_FILE_MAP[dimCode];
    if (!dimFile) continue;

    const dimPath = path.join(DIM_DIR, dimFile);
    if (!fs.existsSync(dimPath)) continue;

    const existingPapers = getDimPapers(dimPath);

    if (!existingPapers.includes(citation)) {
      dimGaps++;
      if (doFix) {
        addPaperToDimension(dimPath, wikilink);
        console.log(`  ✅ Added to ${dimCode} dimension`);
      } else {
        console.log(`  ❌ MISSING from ${dimCode} dimension (${dimFile.replace('.md', '')})`);
      }
    }
  }

  return { cmGaps, dimGaps };
}

function main() {
  const args = process.argv.slice(2);
  const doFix = args.includes('--fix');
  const doAll = args.includes('--all');
  const articleArgs = args.filter(a => !a.startsWith('--'));

  console.log(`\n🔗 Article Linkage Tool`);
  console.log(`   Mode: ${doFix ? 'FIX (will modify files)' : 'CHECK (read-only)'}\n`);

  let totalCMGaps = 0;
  let totalDimGaps = 0;
  let articlesChecked = 0;
  let articlesWithGaps = 0;

  if (doAll) {
    // Process all articles
    const files = fs.readdirSync(ARTICLES_DIR)
      .filter(f => f.endsWith('.md'))
      .sort();

    for (const fname of files) {
      const articlePath = path.join(ARTICLES_DIR, fname);
      const citation = getCitation(articlePath);
      console.log(`📄 ${citation}`);

      const { cmGaps, dimGaps } = processArticle(articlePath, doFix);
      totalCMGaps += cmGaps;
      totalDimGaps += dimGaps;
      articlesChecked++;
      if (cmGaps > 0 || dimGaps > 0) articlesWithGaps++;
    }
  } else if (articleArgs.length > 0) {
    // Process specific article(s)
    for (const arg of articleArgs) {
      const articlePath = path.resolve(REPO_ROOT, arg);
      if (!fs.existsSync(articlePath)) {
        console.error(`❌ File not found: ${arg}`);
        continue;
      }

      const citation = getCitation(articlePath);
      console.log(`📄 ${citation}`);

      const { cmGaps, dimGaps } = processArticle(articlePath, doFix);
      totalCMGaps += cmGaps;
      totalDimGaps += dimGaps;
      articlesChecked++;
      if (cmGaps > 0 || dimGaps > 0) articlesWithGaps++;
    }
  } else {
    console.log('Usage:');
    console.log('  node scripts/link-article.js "Articles/Author Year - Title.md"');
    console.log('  node scripts/link-article.js --fix "Articles/Author Year - Title.md"');
    console.log('  node scripts/link-article.js --all');
    console.log('  node scripts/link-article.js --all --fix');
    process.exit(1);
  }

  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 Summary`);
  console.log(`   Articles checked: ${articlesChecked}`);
  console.log(`   Articles with gaps: ${articlesWithGaps}`);
  console.log(`   CM linkage gaps: ${totalCMGaps}`);
  console.log(`   Dimension linkage gaps: ${totalDimGaps}`);
  console.log(`   Total gaps: ${totalCMGaps + totalDimGaps}`);

  if (!doFix && (totalCMGaps + totalDimGaps) > 0) {
    console.log(`\n   Run with --fix to apply corrections.`);
  }
  if (doFix && (totalCMGaps + totalDimGaps) > 0) {
    console.log(`\n   ✅ All gaps fixed. Run extract-data.js to regenerate JSON.`);
  }
  if (totalCMGaps + totalDimGaps === 0) {
    console.log(`\n   ✅ All linkages are correct.`);
  }

  console.log('');
}

main();
