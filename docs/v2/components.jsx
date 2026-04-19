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

function parseDim(str) {
  if (!str) return [];
  return str.split(/[,\/]/).map(s => s.trim().replace(/[^A-Za-z]/g,'')).filter(d => DIM_CODES.indexOf(d) !== -1);
}
function primaryDim(str) {
  const parsed = parseDim(str);
  return parsed[0] || '';
}
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
function TierBadge({ id }) {
  const r = RIGOR[id]; if (!r) return null;
  return <span className={`tier-badge tier-${r.t}`}>{r.l}</span>;
}
function rigorColor(s) {
  if (s >= 80) return 'var(--green)';
  if (s >= 50) return 'var(--gold)';
  if (s >= 30) return 'var(--accent-2)';
  return 'var(--accent)';
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
  RIGOR, TierBadge, rigorColor,
  HBar, DotGrid, Modal
});
