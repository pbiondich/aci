#!/usr/bin/env node
/**
 * Extract structured data from Obsidian vault markdown files.
 * Generates: articles.json, measures.json, dimensions.json
 *
 * Usage: node scripts/extract-data.js
 * Paths are relative to the repo root.
 */

const fs = require('fs');
const path = require('path');

// Resolve paths relative to repo root (parent of scripts/)
const REPO_ROOT = path.resolve(__dirname, '..');
const VAULT_ROOT = REPO_ROOT;
const OUTPUT_DIR = path.join(REPO_ROOT, 'docs', 'data');

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.warn(`Warning: Could not read ${filePath}: ${err.message}`);
    return '';
  }
}

function getMarkdownFiles(dirPath) {
  try {
    return fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.md'))
      .map(f => path.join(dirPath, f))
      .sort();
  } catch (err) {
    console.warn(`Warning: Could not read directory ${dirPath}: ${err.message}`);
    return [];
  }
}

function extractSection(content, sectionHeading) {
  const regex = new RegExp(`^## ${sectionHeading}[^\\n]*\\n`, 'm');
  const match = regex.exec(content);
  if (!match) return '';

  const start = match.index + match[0].length;
  const rest = content.substring(start);

  // Find next ## heading; if none, take everything to end of file
  const nextHeading = rest.match(/^## /m);
  if (nextHeading) {
    return rest.substring(0, nextHeading.index).trim();
  }
  return rest.trim();
}

function extractSingleLine(content, sectionHeading) {
  const section = extractSection(content, sectionHeading);
  if (!section) return '';
  const lines = section.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('|')) {
      return trimmed.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').trim();
    }
  }
  return '';
}

function extractTable(content, sectionHeading) {
  const section = extractSection(content, sectionHeading);
  if (!section) return [];

  const lines = section.split('\n');
  if (lines.length < 3) return [];

  let headerIdx = -1;
  let separatorIdx = -1;

  for (let i = 0; i < Math.min(lines.length - 1, 15); i++) {
    const nextLine = lines[i + 1] || '';
    if (
      lines[i].includes('|') && nextLine.includes('|') &&
      nextLine.match(/\|[\s-]*\|/) &&
      !lines[i].match(/^[\s-|]*$/)
    ) {
      headerIdx = i;
      separatorIdx = i + 1;
      break;
    }
  }

  if (headerIdx === -1) return [];

  const headerParts = lines[headerIdx]
    .split('|')
    .map(h => h.trim())
    .filter((h, idx, arr) => h && idx > 0 && idx < arr.length - 1);

  const headers = headerParts.map(h => h.toLowerCase().replace(/\s+/g, '_'));
  if (headers.length === 0) return [];

  const rows = [];
  for (let i = separatorIdx + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || !line.includes('|')) continue;
    const cells = line
      .split('|')
      .map(c => c.trim())
      .filter((_, idx) => idx > 0 && idx < line.split('|').length - 1);
    if (cells.length > 0) {
      const row = {};
      headers.forEach((header, idx) => { row[header] = cells[idx] || ''; });
      rows.push(row);
    }
  }
  return rows;
}

function extractBulletPoints(content, sectionHeading) {
  const section = extractSection(content, sectionHeading);
  if (!section) return [];
  return section
    .split('\n')
    .filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'))
    .map(line => line
      .replace(/^[\s-*]+/, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/__(.+?)__/g, '$1')
      .replace(/_(.+?)_/g, '$1')
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
      .replace(/\[\[([^\]]+)\]\]/g, '$1')
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
      .trim()
    )
    .filter(p => p.length > 0);
}

function extractYear(filename) {
  const match = filename.match(/(\d{4})/);
  return match ? match[1] : '';
}

function extractSampleSize(text) {
  if (!text) return null;
  let match = text.match(/n\s*=\s*(\d+)/i);
  if (match) return parseInt(match[1]);
  match = text.match(/(\d+)\s+(physicians?|clinicians?|providers?|participants?|doctors?|surgeons?|nurses?)/i);
  if (match) return parseInt(match[1]);
  match = text.match(/(\d+)\s+(subjects?|patients?|sites?)/i);
  if (match) return parseInt(match[1]);
  return null;
}

function extractGeography(text) {
  if (!text) return '';
  const countries = ['Ireland', 'Australia', 'Canada', 'United States', 'UK', 'United Kingdom', 'China', 'Germany', 'France', 'Spain', 'Netherlands', 'Japan', 'Brazil'];
  for (const c of countries) { if (new RegExp(c, 'i').test(text)) return c; }
  const states = ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'Wisconsin'];
  for (const s of states) { if (new RegExp(s, 'i').test(text)) return s + ', USA'; }
  return '';
}

function categorizeStudyDesign(evidenceLevel) {
  const level = (evidenceLevel || '').toLowerCase();
  if (level.includes('rct') || level.includes('randomized')) return 'RCT';
  if (level.includes('observational')) return 'Observational';
  if (level.includes('qi') || level.includes('quality improvement') || level.includes('pre-post') || level.includes('pre/post')) return 'QI/Pre-Post';
  if (level.includes('qualitative')) return 'Qualitative';
  if (level.includes('simulation')) return 'Simulation';
  if (level.includes('mixed')) return 'Mixed Methods';
  if (level.includes('review') || level.includes('systematic') || level.includes('scoping')) return 'Review';
  if (level.includes('grey') || level.includes('report') || level.includes('case') || level.includes('policy')) return 'Grey Literature';
  return 'Other';
}

// ============================================================================
// ARTICLE PARSING
// ============================================================================

function parseArticle(filePath) {
  const content = readFile(filePath);
  if (!content) return null;

  const filename = path.basename(filePath, '.md');
  const title = extractSingleLine(content, 'Article Title');
  const authors = extractSingleLine(content, 'Author\\(s\\)');
  const doi = extractSingleLine(content, 'DOI');
  const journal = extractSingleLine(content, 'Journal / Source');
  const product = extractSingleLine(content, 'Ambient Product\\(s\\) Evaluated');
  const setting = extractSingleLine(content, 'Clinical Setting');
  const evidenceLevel = extractSingleLine(content, 'Evidence Level');
  const dataSources = extractSingleLine(content, 'Data Source\\(s\\)');
  const summary = extractSingleLine(content, 'Article Summary');
  const hypothesis = extractSingleLine(content, 'Hypothesis');

  const measuresTable = extractTable(content, 'Study Measures');
  const measures = measuresTable.map(row => ({
    measure: row.measure || '',
    description: row.description || '',
    dimensions: (row['d&m_dimension(s)'] || row.d_m_dimension || row['d&m_dimensions'] || row['d&m_dimension(s)'] || '').replace(/\[\[|\]\]/g, '')
  })).filter(m => m.measure.trim());

  const keyFindings = extractBulletPoints(content, 'Key Findings');

  return {
    id: filename,
    title,
    authors,
    doi,
    journal,
    product,
    setting,
    evidenceLevel,
    dataSources,
    summary,
    hypothesis,
    measures,
    keyFindings,
    year: extractYear(filename),
    studyDesign: categorizeStudyDesign(evidenceLevel),
    geography: extractGeography(setting),
    sampleSize: extractSampleSize(summary + ' ' + setting)
  };
}

// ============================================================================
// MEASURE PARSING
// ============================================================================

function parseMeasure(filePath) {
  const content = readFile(filePath);
  if (!content) return null;

  const filename = path.basename(filePath, '.md');
  const idMatch = filename.match(/^(CM-\d{2})/);
  const id = idMatch ? idMatch[1] : filename;

  const nameMatch = content.match(/^#+ (.+)$/m);
  const name = nameMatch ? nameMatch[1].replace(/^CM-\d{2}\s*/, '').trim() : filename;

  let dimension = '';
  const dimMatch = content.match(/\*\*D&M Dimension:\*\*\s*\[\[([^\]]+)\]\]/);
  if (dimMatch) dimension = dimMatch[1];

  const definition = extractSingleLine(content, 'Definition');

  const methodsTable = extractTable(content, 'Measurement Methods');
  const instruments = methodsTable.map(row => row.method || row.description || '').filter(i => i);

  // Extract paper count from heading: "## Papers Measuring This (14)"
  let paperCount = 0;
  const pcMatch = content.match(/## Papers Measuring This\s*\((\d+)\)/);
  if (pcMatch) paperCount = parseInt(pcMatch[1]);

  // Extract paper references from wiki links in that section
  const papersSection = extractSection(content, 'Papers Measuring This');
  const papers = [];
  const paperMatches = papersSection.match(/\[\[([^\]]+)\]\]/g) || [];
  for (const m of paperMatches) {
    papers.push(m.replace(/\[\[|\]\]/g, '').trim());
  }
  // Use heading count if wiki-link count doesn't match
  if (paperCount === 0) paperCount = papers.length;

  let concerns = '';
  const concernMatch = content.match(/## ⚠️.*?\n([\s\S]*?)(?=^##|$)/m);
  if (concernMatch) concerns = concernMatch[1].trim();

  let typicalFindings = '';
  const findingsMatch = content.match(/## Key Finding.*?\n([\s\S]*?)(?=^##|$)/m);
  if (findingsMatch) typicalFindings = findingsMatch[1].trim().substring(0, 500);

  const aliases = extractBulletPoints(content, 'Aliases Used in Literature');

  return { id, name, dimension, domain: '', paperCount, definition, instruments, aliases, typicalFindings, rigorRating: '', concerns, papers };
}

function mapMeasuresToDomains(measures) {
  const domainMap = {
    'Clinician Well-Being': ['CM-01', 'CM-02', 'CM-03'],
    'Documentation Efficiency': ['CM-04', 'CM-05', 'CM-06', 'CM-07'],
    'Note Information Quality': ['CM-08', 'CM-09', 'CM-10', 'CM-11', 'CM-12'],
    'Adoption & Use':            ['CM-13', 'CM-14', 'CM-16'],
    'User Satisfaction':         ['CM-15'],
    'Patient Outcomes': ['CM-17', 'CM-18', 'CM-19'],
    'Financial & Organizational': ['CM-20', 'CM-21', 'CM-22'],
    'Implementation': ['CM-23'],
    'System Quality': ['CM-24', 'CM-25']
  };
  return measures.map(measure => {
    for (const [domain, ids] of Object.entries(domainMap)) {
      if (ids.includes(measure.id)) { measure.domain = domain; break; }
    }
    return measure;
  });
}

// ============================================================================
// DIMENSIONS PARSING
// ============================================================================

function parseDimensions() {
  const dimensionsDir = path.join(VAULT_ROOT, 'D&M Dimensions');
  const files = getMarkdownFiles(dimensionsDir);
  const dimensions = [];

  for (const filePath of files) {
    const filename = path.basename(filePath, '.md');
    if (filename === 'DeLone and McLean IS Success Model') continue;
    if (filename === 'NB - Net Benefits') continue; // historical; split into II and OI

    const content = readFile(filePath);
    if (!content) continue;

    let code = '';
    const codeMatch = filename.match(/^([A-Za-z]+)\s*-/);
    if (codeMatch) code = codeMatch[1];

    const nameMatch = content.match(/^#+ ([^#\n]+)/m);
    const name = nameMatch ? nameMatch[1].replace(/^[A-Z]+\s*[—-]\s*/, '').trim() : filename;

    dimensions.push({
      code,
      name,
      filename,
      definition: extractSingleLine(content, 'Definition'),
      keyFinding: '',
      belongsHere: extractBulletPoints(content, 'What Belongs Here'),
      paperCount: 0
    });
  }
  return dimensions;
}

// ============================================================================
// DRAFT MEASURE PARSING
// ============================================================================

function parseDraftMeasure(filePath) {
  const content = readFile(filePath);
  if (!content) return null;

  const filename = path.basename(filePath, '.md');
  const idMatch = filename.match(/^(DM-\d{2})/);
  const id = idMatch ? idMatch[1] : filename;

  const nameMatch = content.match(/^#+ (.+)$/m);
  const name = nameMatch ? nameMatch[1].replace(/^DM-\d{2}\s*/, '').trim() : filename;

  let dimension = '';
  const dimMatch = content.match(/\*\*D&M Dimension:\*\*\s*\[\[([^\]]+)\]\]/);
  if (dimMatch) dimension = dimMatch[1];

  const definition = extractSingleLine(content, 'Definition');

  // Extract stakeholders as bullet points with role and rationale
  const stakeholderSection = extractSection(content, 'Hypothesized Stakeholder\\(s\\)');
  const stakeholders = [];
  if (stakeholderSection) {
    const lines = stakeholderSection.split('\n').filter(l => l.trim().startsWith('-'));
    for (const line of lines) {
      const roleMatch = line.match(/\*\*(\w+)\*\*\s*[—\-]\s*(.*)/);
      if (roleMatch) {
        stakeholders.push({ role: roleMatch[1], rationale: roleMatch[2].trim() });
      }
    }
  }

  const rationale = extractSection(content, 'Rationale');

  // Extract related canonical measures
  const relSection = extractSection(content, 'Relationship to Existing Canonical Measures');
  const relatedMeasures = [];
  if (relSection) {
    const lines = relSection.split('\n').filter(l => l.trim().startsWith('-'));
    for (const line of lines) {
      const cleaned = line.replace(/^[\s-*]+/, '')
        .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
        .replace(/\[\[([^\]]+)\]\]/g, '$1')
        .trim();
      if (cleaned) relatedMeasures.push(cleaned);
    }
  }

  // Extract suggested methods table
  const methods = extractTable(content, 'Suggested Measurement Methods');

  // Extract validation questions
  const validationQuestions = [];
  const vqSection = extractSection(content, 'Key Questions for Validation');
  if (vqSection) {
    const lines = vqSection.split('\n').filter(l => l.trim().startsWith('-'));
    for (const line of lines) {
      const q = line.replace(/^[\s-*]+/, '').trim();
      if (q) validationQuestions.push(q);
    }
  }

  return {
    id, name, dimension, definition, stakeholders, rationale,
    relatedMeasures, methods, validationQuestions,
    status: 'Draft — pending key informant validation'
  };
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log('Extracting data from vault markdown files...\n');
  console.log(`Vault root: ${VAULT_ROOT}`);
  console.log(`Output dir: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Articles
  const articleFiles = getMarkdownFiles(path.join(VAULT_ROOT, 'Articles'));
  const articles = articleFiles.map(parseArticle).filter(a => a && a.title);
  console.log(`Articles parsed: ${articles.length}`);

  // Measures
  const measureFiles = getMarkdownFiles(path.join(VAULT_ROOT, 'Canonical Measures'));
  let measures = measureFiles
    .filter(f => !path.basename(f).startsWith('README'))
    .map(parseMeasure)
    .filter(m => m && m.id && m.id.startsWith('CM-'));
  measures = mapMeasuresToDomains(measures);
  console.log(`Measures parsed: ${measures.length}`);

  // Dimensions
  const dimensions = parseDimensions();
  dimensions.forEach(dim => {
    let count = 0;
    for (const a of articles) {
      for (const m of a.measures) {
        if (m.dimensions && m.dimensions.includes(dim.code)) { count++; break; }
      }
    }
    dim.paperCount = count;
  });
  console.log(`Dimensions parsed: ${dimensions.length}`);

  // Draft Measures
  const draftMeasureFiles = getMarkdownFiles(path.join(VAULT_ROOT, 'Draft Measures'));
  const draftMeasures = draftMeasureFiles
    .filter(f => !path.basename(f).startsWith('README') && !path.basename(f).startsWith('Draft Measure Template'))
    .map(parseDraftMeasure)
    .filter(m => m && m.id && m.id.startsWith('DM-'));
  console.log(`Draft Measures parsed: ${draftMeasures.length}`);

  // Write JSON
  fs.writeFileSync(path.join(OUTPUT_DIR, 'articles.json'), JSON.stringify(articles, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'measures.json'), JSON.stringify(measures, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'dimensions.json'), JSON.stringify(dimensions, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'draft-measures.json'), JSON.stringify(draftMeasures, null, 2));

  console.log(`\nJSON files written to ${OUTPUT_DIR}`);

  // Linkage validation hint
  try {
    const { execSync } = require('child_process');
    const linkScript = path.join(__dirname, 'link-article.js');
    if (fs.existsSync(linkScript)) {
      const result = execSync(`node "${linkScript}" --all`, { encoding: 'utf-8', timeout: 30000 });
      const summaryMatch = result.match(/Total gaps:\s*(\d+)/);
      const gaps = summaryMatch ? parseInt(summaryMatch[1]) : 0;
      if (gaps > 0) {
        console.log(`\n⚠️  LINKAGE WARNING: ${gaps} missing article-to-measure/dimension links detected.`);
        console.log(`   Run: node scripts/link-article.js --all       (to review)`);
        console.log(`   Run: node scripts/link-article.js --all --fix (to fix)\n`);
      } else {
        console.log(`\n✅ Linkage check passed: all articles correctly linked to CMs and dimensions.`);
      }
    }
  } catch (e) {
    // Linkage check is optional; don't fail the build
  }

  console.log('Done.');
}

main();
