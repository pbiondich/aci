/* Shared components for ACI Evidence Review */
const { useState, useEffect, useMemo, useRef, Fragment } = React;

/* --- Dimension helpers --- */
const DIM_CODES = ['SQ','IQ','SerQ','U','US','NB'];
const DIM_LONG = {
  SQ: 'System Quality', IQ: 'Information Quality', SerQ: 'Service Quality',
  U: 'Use', US: 'User Satisfaction', NB: 'Net Benefits'
};
const DIM_BLURB = {
  SQ: 'Does the tool itself work reliably?',
  IQ: 'Is the generated note accurate and complete?',
  SerQ: 'Is the deployment experience effective?',
  U: 'Do people actually use it, and how much?',
  US: 'How do people feel about it?',
  NB: 'What downstream outcomes does it produce?'
};

// Order matters: check longer codes first so "US" is not shadowed by "U",
// and "SerQ" is not shadowed by "SQ".
const DIM_CODES_ORDERED = ['SerQ','US','SQ','IQ','NB','U'];
function parseDim(str) {
  if (!str) return [];
  return str.split(/[,\/]/).map(tok => {
    const t = tok.trim();
    // Match first token (before space/dash) OR fall back to scanning
    const head = t.split(/[\s\-]/)[0].replace(/[^A-Za-z]/g,'');
    if (DIM_CODES.indexOf(head) !== -1) return head;
    return DIM_CODES_ORDERED.find(c => t.indexOf(c) === 0) || '';
  }).filter(Boolean);
}
function primaryDim(str) { return parseDim(str)[0] || ''; }
function DimTag({ code }) {
  if (!code) return null;
  return <span className={`dim-tag dim-${code}`}>{code}</span>;
}

/* --- Markdown-lite renderer --- */
function renderMd(text) {
  if (!text) return null;
  const parts = [];
  let rem = text;
  let key = 0;
  while (rem.length) {
    const boldIdx = rem.indexOf('**');
    const wikiIdx = rem.indexOf('[[');
    const linkM = rem.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const linkIdx = linkM ? rem.indexOf(linkM[0]) : -1;
    const italM = rem.match(/(^|[^*])\*([^*\n]+)\*(?!\*)/);
    const italIdx = italM ? rem.indexOf(italM[0]) + italM[1].length : -1;
    let earliest = Infinity, type = null;
    if (boldIdx >= 0 && boldIdx < earliest) { earliest = boldIdx; type = 'b'; }
    if (wikiIdx >= 0 && wikiIdx < earliest) { earliest = wikiIdx; type = 'w'; }
    if (linkIdx >= 0 && linkIdx < earliest) { earliest = linkIdx; type = 'l'; }
    if (italIdx >= 0 && italIdx < earliest) { earliest = italIdx; type = 'i'; }
    if (type === null) { parts.push(rem); break; }
    if (earliest > 0) parts.push(rem.slice(0, earliest));
    if (type === 'b') {
      const e = rem.indexOf('**', earliest + 2);
      if (e < 0) { parts.push(rem.slice(earliest)); break; }
      parts.push(<strong key={key++}>{rem.slice(earliest+2, e)}</strong>);
      rem = rem.slice(e+2);
    } else if (type === 'w') {
      const e = rem.indexOf(']]', earliest + 2);
      if (e < 0) { parts.push(rem.slice(earliest)); break; }
      parts.push(<em key={key++}>{rem.slice(earliest+2, e)}</em>);
      rem = rem.slice(e+2);
    } else if (type === 'l') {
      parts.push(<a key={key++} href={linkM[2]} target="_blank" rel="noopener">{linkM[1]}</a>);
      rem = rem.slice(earliest + linkM[0].length);
    } else {
      parts.push(<em key={key++}>{italM[2]}</em>);
      rem = rem.slice(earliest + italM[2].length + 2);
    }
  }
  return parts;
}

function MdText({ text }) {
  if (!text) return null;
  const lines = text.split('\n').filter(l => l.trim());
  if (lines.length <= 1) return <span>{renderMd(text)}</span>;
  return <div>{lines.map((l, i) => {
    const t = l.trim();
    if (t.startsWith('- ') || t.startsWith('* ')) {
      return <div key={i} style={{paddingLeft:16, marginBottom:4}}>• {renderMd(t.slice(2))}</div>;
    }
    return <p key={i} style={{marginBottom:8}}>{renderMd(t)}</p>;
  })}</div>;
}

/* --- Product cleaner --- */
function cleanProduct(raw) {
  let p = (raw || '').replace(/\*\*/g,'').replace(/\[\[|\]\]/g,'');
  if (/dax copilot/i.test(p)) return 'DAX Copilot (Nuance)';
  if (/dragon ambient|nuance dax|\bDAX\b/i.test(p)) return 'DAX (Nuance)';
  if (/abridge/i.test(p) && /dax|nuance/i.test(p)) return 'DAX + Abridge';
  if (/abridge/i.test(p)) return 'Abridge';
  if (/suki/i.test(p)) return 'Suki AI';
  if (/heidi/i.test(p)) return 'Heidi Health';
  if (/ambience healthcare/i.test(p)) return 'Ambience Healthcare';
  if (/lyrebird/i.test(p)) return 'Lyrebird Health';
  if (/autoscriber/i.test(p)) return 'Autoscriber';
  if (/nabla/i.test(p)) return 'Nabla';
  if (/medimo/i.test(p)) return 'medimo';
  if (/navina/i.test(p)) return 'Navina AI';
  if (/chatgpt|gpt-4/i.test(p)) return 'ChatGPT / GPT-4';
  if (/n\/a|systematic review|scoping review|not applicable|rapid review/i.test(p)) return 'Review (n/a)';
  if (/anonymized|unnamed|not named/i.test(p)) return 'Unnamed';
  if (/human.*scribe/i.test(p)) return 'Human Scribes';
  if (/BART|neural/i.test(p)) return 'Research NLP';
  return p.length > 30 ? p.slice(0, 28) + '…' : p || 'Not specified';
}

/* --- Rigor map --- */
const RIGOR = {
  'CM-01':{t:'HIGH',s:90,l:'Best relative'}, 'CM-02':{t:'MODERATE',s:65,l:'Moderate'},
  'CM-03':{t:'LOW',s:30,l:'Critical gap'},   'CM-04':{t:'MODERATE',s:65,l:'Moderate'},
  'CM-05':{t:'LOW',s:25,l:'Needs work'},     'CM-06':{t:'MODERATE',s:55,l:'Low'},
  'CM-07':{t:'LOW',s:30,l:'Emerging'},       'CM-08':{t:'HIGH',s:90,l:'Best relative'},
  'CM-09':{t:'MODERATE',s:65,l:'Moderate'},  'CM-10':{t:'HIGH',s:85,l:'Best relative'},
  'CM-11':{t:'LOW',s:25,l:'Needs work'},     'CM-12':{t:'META',s:50,l:'Methodological'},
  'CM-13':{t:'MODERATE',s:65,l:'Moderate'},  'CM-14':{t:'LOW',s:25,l:'Needs work'},
  'CM-15':{t:'LOW',s:35,l:'Needs work'},     'CM-16':{t:'LOW',s:20,l:'Critical gap'},
  'CM-17':{t:'LOW',s:15,l:'Critical'},       'CM-18':{t:'LOW',s:25,l:'Needs work'},
  'CM-19':{t:'LOW',s:15,l:'Critical'},       'CM-20':{t:'MODERATE',s:55,l:'Low'},
  'CM-21':{t:'HIGH',s:85,l:'Best relative'}, 'CM-22':{t:'LOW',s:25,l:'Needs work'},
  'CM-23':{t:'MODERATE',s:45,l:'Needs work'},'CM-24':{t:'LOW',s:10,l:'Critical'},
  'CM-25':{t:'META',s:50,l:'Meta'}
};

/* --- Convergence map --- */
/* converge = findings broadly agree, mixed = self-report/objective diverge or heterogeneous,
   diverge = key findings contradict, emerging = too few studies to assess */
const CONVERGENCE = {
  'CM-01':{c:'mixed',    r:'RCT effect sizes are roughly 4× smaller than QI studies on the same scale — selection bias inflates non-randomized results.'},
  'CM-02':{c:'converge', r:'Consistent cognitive load reduction across NASA-TLX, PTL, and survey instruments in multiple settings.'},
  'CM-03':{c:'mixed',    r:'The only RCT (Afshar 2025b) missed its pre-specified significance threshold for professional fulfillment (p=0.04 vs. α=0.025).'},
  'CM-04':{c:'mixed',    r:'Self-reported time savings are 2–6× larger than EHR telemetry confirms. The gap is the most reproduced finding in the corpus.'},
  'CM-05':{c:'diverge',  r:'Clinicians report after-hours improvement, but EHR logs show no significant change in most studies (Pearlman 2025, Stults 2025).'},
  'CM-06':{c:'converge', r:'Chart closure timeliness improves consistently across studies — one of the cleaner operational signals.'},
  'CM-07':{c:'emerging', r:'Only 5 papers measure total EHR time explicitly. Ma 2025 found the largest effect (−20 min/day), but replication is thin.'},
  'CM-08':{c:'converge', r:'Omissions dominate errors (71–86%) across all 5 simulation studies — the most consistent information quality finding.'},
  'CM-09':{c:'mixed',    r:'Hallucination rates range from 3% to 36% depending on study methodology, specialty, and how "inaccuracy" is defined.'},
  'CM-10':{c:'converge', r:'PDQI-9 scores are consistently high (3.97–4.99 / 5.0) across studies using validated note quality instruments.'},
  'CM-11':{c:'mixed',    r:'Longer notes can signal thoroughness or over-generation. Clinicians flag verbosity as a concern even when quality scores are high.'},
  'CM-12':{c:'converge', r:'NLP evaluation metrics (ROUGE, BERTScore) correlate with each other but not always with clinical judgment — a known limitation.'},
  'CM-13':{c:'converge', r:'Every large deployment reports the same bimodal pattern: heavy users who use it for nearly all encounters, and light/non-users.'},
  'CM-14':{c:'emerging', r:'Only 6 papers formally measure adoption intention. Tierney 2025 found age and experience are NOT predictive — challenging assumptions.'},
  'CM-15':{c:'mixed',    r:'Satisfaction is almost universally positive, but most studies recruited volunteers — inflating results. Prasad 2025 is the counter-signal.'},
  'CM-16':{c:'emerging', r:'Only 6 papers formally measure trust. Bundy 2024 found physicians fear increased patient volume from AI efficiency gains.'},
  'CM-17':{c:'diverge',  r:'Patient experience is positive in open-label studies but null when patients are masked to whether AI was used (Owens 2024, PDRQ-9).'},
  'CM-18':{c:'mixed',    r:'The strongest interaction quality data comes from human scribe studies (Shuaib 2021). Ambient AI-specific evidence is sparse.'},
  'CM-19':{c:'diverge',  r:'Castro 2025 found more psychiatric documentation but significantly less psychiatric intervention with ambient scribes — a safety concern.'},
  'CM-20':{c:'converge', r:'Three independent papers show financial productivity improvement: Holmgren (+$3K/yr RVU), Boyter/KLAS (+$13K/yr HCC), Afshar (coding uplift).'},
  'CM-21':{c:'converge', r:'Coding accuracy improvement is consistent across RCT (Afshar 2025b, p<0.001), QI (Boyter/KLAS), and observational (Holmgren) designs.'},
  'CM-22':{c:'emerging', r:'The strongest throughput data is from human scribes (Shuaib 2021, +39% patients/hr). Ambient AI evidence shows modest gains at best.'},
  'CM-23':{c:'converge', r:'Heterogeneous adoption with heavy/moderate/non-user cohorts is a universal finding. PHTI 2025 formalizes the three-cohort pattern.'},
  'CM-24':{c:'emerging', r:'Only 3 papers formally measure ASR accuracy. Commercial vendors do not publish word error rates — an industry opacity problem.'},
  'CM-25':{c:'converge', r:'Methodological weaknesses (no randomization, no control, self-report reliance) are consistently identified across reviews.'}
};
const CONV_LABEL = {
  converge: 'Findings converge', mixed: 'Mixed signals',
  diverge: 'Findings diverge', emerging: 'Too early to tell'
};
const CONV_ICON = { converge: '●', mixed: '◐', diverge: '○', emerging: '◌' };

function TierBadge({ id }) {
  const r = RIGOR[id]; if (!r) return null;
  return <span className={`tier-badge tier-${r.t}`}>{r.l}</span>;
}
function tierColor(tier) {
  if (tier === 'HIGH') return 'var(--green)';
  if (tier === 'MODERATE') return 'var(--gold)';
  if (tier === 'META') return 'var(--ink-3)';
  return 'var(--accent)';
}
function rigorColor(s) {
  if (s >= 80) return 'var(--green)';
  if (s >= 50) return 'var(--gold)';
  if (s >= 30) return 'var(--accent-2)';
  return 'var(--accent)';
}
function convColor(conv) {
  if (conv === 'converge') return 'var(--green)';
  if (conv === 'mixed') return 'var(--gold)';
  if (conv === 'diverge') return 'var(--accent)';
  return 'var(--ink-3)';
}

/* --- Study design breakdown helper --- */
function getDesignBreakdown(measurePapers, articles) {
  const counts = {};
  const articleMap = {};
  articles.forEach(a => { articleMap[a.id] = a; });
  (measurePapers || []).forEach(pid => {
    const a = articleMap[pid];
    const d = a ? (a.studyDesign || 'Unknown') : 'Unknown';
    counts[d] = (counts[d] || 0) + 1;
  });
  // Sort: RCT first, then by count descending
  const order = ['RCT','Observational','QI/Pre-Post','Review','Qualitative','Simulation','Unknown'];
  return Object.entries(counts)
    .sort((a, b) => {
      const ai = order.indexOf(a[0]), bi = order.indexOf(b[0]);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return b[1] - a[1];
    });
}
function formatDesignBreakdown(breakdown) {
  return breakdown.map(([d, c]) => c + ' ' + d).join(', ');
}

/* --- Bar chart (editorial style) --- */
function HBar({ label, value, max, color, suffix, width = 180 }) {
  const pct = (value / max) * 100;
  return (
    <div style={{display:'flex', alignItems:'center', gap:12, padding:'6px 0'}}>
      <div style={{width, fontSize:13, color:'var(--ink-2)', textAlign:'right', flexShrink:0, fontFamily:'Newsreader, serif'}}>{label}</div>
      <div style={{flex:1, height:18, background:'var(--paper-2)', position:'relative', borderLeft:'1px solid var(--rule)'}}>
        <div style={{width:pct+'%', height:'100%', background: color || 'var(--ink)', transition:'width 0.6s ease'}}></div>
      </div>
      <div style={{width:56, fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'var(--ink-2)'}}>{value}{suffix||''}</div>
    </div>
  );
}

/* --- Evidence strength dot grid --- */
function DotGrid({ filled, total, color }) {
  const dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(<span key={i} style={{
      width:7, height:7, borderRadius:'50%',
      background: i < filled ? (color || 'var(--ink)') : 'var(--rule)',
      display:'inline-block', marginRight:3
    }} />);
  }
  return <div style={{display:'inline-flex', alignItems:'center'}}>{dots}</div>;
}

/* --- Modal --- */
function Modal({ onClose, children, eyebrow, title }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {eyebrow && <div className="modal-eyebrow">{eyebrow}</div>}
        {title && <h2 className="section" style={{marginBottom:20}}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  DIM_CODES, DIM_LONG, DIM_BLURB,
  parseDim, primaryDim, DimTag,
  renderMd, MdText, cleanProduct,
  RIGOR, CONVERGENCE, CONV_LABEL, CONV_ICON,
  TierBadge, tierColor, rigorColor, convColor,
  getDesignBreakdown, formatDesignBreakdown,
  HBar, DotGrid, Modal
});
