/* Tab components */
const { useState: useStateT, useMemo: useMemoT, useEffect: useEffectT } = React;

/* ========================================================================
   OVERVIEW, hero essay + headline findings + dimension overview
   ======================================================================== */
function OverviewTab({ articles, measures, draftMeasures, setTab }) {
  const yearCounts = useMemoT(() => {
    const c = {};
    articles.forEach(a => { const y = a.year || 'Unknown'; c[y] = (c[y]||0)+1; });
    return Object.entries(c).filter(([y]) => y !== 'Unknown').sort((a,b) => a[0].localeCompare(b[0]));
  }, [articles]);

  // Causal-chain order: quality → use → outcomes
  const dimCounts = useMemoT(() => ({
    SQ: 3, IQ: 31, SerQ: 12, U: 14, US: 26, II: 40, OI: 33
  }), []);

  const findings = [
    { kicker: 'n = 3 / 54', headline: <>Only <em>three</em> randomized trials anchor a literature the size of a regulated drug class.</>, source: 'Afshar 2025b, Lukac 2025, Baker 2023' },
    { kicker: '71–86%', headline: <>Across every simulation study, <em>omissions</em> dominate the error profile... not hallucinations.</>, source: 'Anderson 2025, Biro 2025, Foo 2025' },
    { kicker: '2–6×', headline: <>Clinicians self-report <em>two to six times</em> more time saved than EHR logs confirm.</>, source: 'Haberle 2024, Ma 2025, Tierney 2025' },
    { kicker: 'n ≈ 0', headline: <>Real-world <em>patient safety</em> data on ambient AI tools is effectively absent.</>, source: 'CM-19 · 9 papers, all simulated' },
    { kicker: 'CM-21', headline: <>Coding accuracy and HCC capture improvements are <em>consistent and validated</em>.</>, source: '6 papers converge' },
    { kicker: 'SerQ', headline: <>Implementation evidence is <em>almost entirely qualitative</em>... no validated instruments.</>, source: 'Afshar 2025a, PHTI 2025' }
  ];

  const maxYear = Math.max(...yearCounts.map(([,c]) => c));
  const maxDim = Math.max(...Object.values(dimCounts));

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-kicker"><span className="line"/>A Structured Evidence Review<span className="line"/></div>
            <h1 className="display">
              Evaluating <span className="em">ambient</span><br/>
              clinical <span className="em accent">intelligence</span>.
            </h1>
            <p className="lede" style={{marginTop:24}}>
              <span className="drop">T</span>wenty-five canonical measures, twelve draft measures pending key-informant validation, and four hundred and ninety-four raw measure rows, distilled from a full-text review of fifty-four studies on the ambient AI scribes now documenting millions of clinical encounters a month.
            </p>
          </div>
          <div className="hero-byline">
            <div>
              <div className="label">Version · Date</div>
              <div className="val">v.31 · May 2026</div>
            </div>
            <div>
              <div className="label">Framework</div>
              <div className="val">DeLone & McLean IS Success Model (2003)</div>
            </div>
            <div>
              <div className="label">Corpus</div>
              <div className="val">54 full-text studies, 2021–2026</div>
            </div>
            <div>
              <div className="label">Citation</div>
              <div className="val" style={{fontSize:13}}>Biondich et al. (2026). Evaluating Ambient Clinical Intelligence: A Structured Evidence Review.</div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-cell"><div className="num">{articles.length}</div><div className="label">Studies reviewed</div></div>
        <div className="stat-cell"><div className="num">494</div><div className="label">Raw measures extracted</div></div>
        <div className="stat-cell"><div className="num">{measures.length}</div><div className="label">Canonical measures</div></div>
        <div className="stat-cell"><div className="num">{draftMeasures.length}</div><div className="label">Draft measures</div></div>
        <div className="stat-cell"><div className="num">7</div><div className="label">D&M dimensions</div></div>
        <div className="stat-cell"><div className="num">3</div><div className="label">Randomized trials</div></div>
      </div>

      <div className="page">
        {/* INTRO ESSAY */}
        <div className="grid-feature" style={{marginBottom:72}}>
          <div className="body-text" style={{fontSize:18, lineHeight:1.65}}>
            <p style={{fontSize:18, color:'var(--ink)'}}>
              Ambient clinical intelligence... AI that listens to a clinical conversation and writes the note, has become one of the fastest-adopted categories in modern healthcare. Yet the published evidence evaluating these tools remains <em>fragmented, heterogeneous, and methodologically uneven</em>.
            </p>
            <p>This review takes a bottom-up approach. Rather than impose an a priori taxonomy, every outcome measure was extracted verbatim from each study's methods section, clustered into conceptually distinct constructs, and mapped to one of seven dimensions from the DeLone & McLean Information Systems Success Model. The result is a twenty-five-measure vocabulary for comparing results across an otherwise incoherent body of work.</p>
            <p>The <em>draft measures</em>, the second product of this review, emerge from a different source. Through key-informant interviews with health-system decision-makers, twelve additional constructs surfaced as important to CFO, CMIO, COO, and CPO audiences but are effectively absent from the published literature. They are named here not as validated measures but as a research agenda.</p>
          </div>
          <aside className="aside">
            This emerging new digital health product category would benefit from increased evaluation rigor and standardization. Regenstrief seeks to contribute as a neutral ally familiar with digital health evaluation.
          </aside>
        </div>

        {/* CALLS TO ACTION */}
        <div style={{marginBottom:72}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:20, borderBottom:'1px solid var(--ink)', paddingBottom:10}}>
            <h2 className="section">Begin <span className="em">here</span>.</h2>
            <span className="smallcaps">Three entry points</span>
          </div>
          <div className="grid-3" style={{marginTop:24}}>
            <div className="cta-card" onClick={() => setTab('measures')}>
              <div className="cta-num">01</div>
              <div className="smallcaps" style={{color:'var(--accent)'}}>Start here</div>
              <h3 className="sub" style={{marginTop:10, fontSize:26}}>The 25 canonical measures</h3>
              <p style={{fontSize:14, color:'var(--ink-3)', marginTop:10, lineHeight:1.5}}>Browse each measure with definitions, instruments, findings, and source papers.</p>
              <div className="cta-arrow">Explore measures →</div>
            </div>
            <div className="cta-card" onClick={() => setTab('drafts')}>
              <div className="cta-num">02</div>
              <div className="smallcaps" style={{color:'var(--accent)'}}>Research agenda</div>
              <h3 className="sub" style={{marginTop:10, fontSize:26}}>The 12 draft measures</h3>
              <p style={{fontSize:14, color:'var(--ink-3)', marginTop:10, lineHeight:1.5}}>Constructs health-system leaders care about that the literature does not yet cover.</p>
              <div className="cta-arrow">See the gaps →</div>
            </div>
            <div className="cta-card" onClick={() => setTab('guide')}>
              <div className="cta-num">03</div>
              <div className="smallcaps" style={{color:'var(--accent)'}}>By stakeholder</div>
              <h3 className="sub" style={{marginTop:10, fontSize:26}}>Decision guide</h3>
              <p style={{fontSize:14, color:'var(--ink-3)', marginTop:10, lineHeight:1.5}}>What evidence each executive role should weigh, ie: CFO, CMIO, COO, CPO.</p>
              <div className="cta-arrow">Read by role →</div>
            </div>
          </div>

          {/* Use & Contribution Guide */}
          <div style={{marginTop:32, padding:'24px 28px', border:'1px solid var(--rule)', background:'#faf6ea', display:'grid', gridTemplateColumns:'140px 1fr auto', gap:24, alignItems:'center'}} className="use-note">
            <div>
              <div className="smallcaps" style={{marginBottom:6}}>Use &amp; Contribution</div>
              <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:11, fontWeight:500, color:'var(--accent)', letterSpacing:'0.06em'}}>CC BY-SA 4.0</div>
            </div>
            <div style={{fontFamily:'Newsreader, serif', fontSize:16, lineHeight:1.55, color:'var(--ink-2)'}}>
              This work is openly licensed for sharing and adaptation, including commercially, with attribution and shared-alike terms. The framework is intended to grow, if you extend it with new article reviews, refined measure definitions, or additional dimensions, we ask that you contribute those additions back.
            </div>
            <button onClick={() => setTab('methods')}
              style={{background:'var(--ink)', color:'var(--paper)', border:'none', padding:'12px 18px', fontFamily:'Inter, sans-serif', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', cursor:'pointer', whiteSpace:'nowrap'}}>
              Read methods →
            </button>
          </div>
        </div>

        {/* TWO-UP: publications by year + dimension density */}
        <div className="grid-2" style={{marginBottom:64}}>
          <div>
            <h4 className="mini">Figure 1 · Publication volume</h4>
            <h3 className="sub"><em>A literature that barely existed three years ago.</em></h3>
            <div style={{marginTop:24, display:'flex', alignItems:'flex-end', gap:6, height:200, borderBottom:'1px solid var(--ink)', paddingBottom:2}}>
              {yearCounts.map(([y, c], i) => (
                <div key={y} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:6}}>
                  <span className="mono" style={{fontSize:12, color:'var(--ink-2)'}}>{c}</span>
                  <div style={{width:'100%', height: (c/maxYear) * 160, background: y === '2025' ? 'var(--accent)' : 'var(--ink)', transition:'height 0.6s'}}/>
                </div>
              ))}
            </div>
            <div style={{display:'flex', gap:6, marginTop:6}}>
              {yearCounts.map(([y]) => <div key={y} style={{flex:1, textAlign:'center'}} className="mono" > <span style={{fontSize:11, color:'var(--ink-3)'}}>{y}</span></div>)}
            </div>
            <p className="footnote" style={{marginTop:16}}>The spike in 2025 reflects both commercial rollout and academic catch-up. Reviewers should anticipate continued volume as adoption matures.</p>
          </div>
          <div>
            <h4 className="mini">Figure 2 · Evidence density by dimension</h4>
            <h3 className="sub"><em>Individual and Organizational Impact dominate; the upstream quality dimensions are thin.</em></h3>
            <div style={{marginTop:24}}>
              {Object.entries(dimCounts).map(([code, n]) => (
                <div key={code} style={{display:'grid', gridTemplateColumns:'60px 1fr 40px', gap:12, alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--rule)'}}>
                  <div><DimTag code={code}/></div>
                  <div style={{height:10, background:'var(--paper-2)', position:'relative'}}>
                    <div style={{width:(n/maxDim)*100+'%', height:'100%', background:`var(--${(code === 'II' || code === 'OI') ? 'accent' : 'ink'})`}}/>
                  </div>
                  <div className="mono" style={{fontSize:13, textAlign:'right', color:'var(--ink-2)'}}>{n}</div>
                </div>
              ))}
            </div>
            <p className="footnote" style={{marginTop:16}}>Counts reflect number of papers contributing at least one measure to each dimension; papers commonly span multiple dimensions.</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ========================================================================
   MEASURES, canonical list with inline expand
   ======================================================================== */
function MeasuresTab({ measures, expanded, setExpanded, articles, onSelectArticle }) {
  const [q, setQ] = useStateT('');
  const [dim, setDim] = useStateT('');

  const filtered = useMemoT(() => measures.filter(m => {
    if (q && !(m.name + ' ' + m.definition + ' ' + m.id).toLowerCase().includes(q.toLowerCase())) return false;
    if (dim && primaryDim(m.dimension) !== dim) return false;
    return true;
  }), [measures, q, dim]);

  // Group by D&M dimension in causal-chain order
  const DIM_ORDER = ['SQ','IQ','SerQ','U','US','II','OI'];
  const grouped = useMemoT(() => {
    const g = {};
    DIM_ORDER.forEach(c => { g[c] = []; });
    filtered.forEach(m => { const d = primaryDim(m.dimension) || 'Other'; if (!g[d]) g[d] = []; g[d].push(m); });
    // Drop empty groups
    const out = {};
    DIM_ORDER.forEach(c => { if (g[c] && g[c].length) out[c] = g[c]; });
    if (g.Other && g.Other.length) out.Other = g.Other;
    return out;
  }, [filtered]);

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">II · Canonical Measures</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>Twenty-five constructs,<br/><span className="em">derived from the data</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Clustered bottom-up from 494 raw measure rows across 54 papers. Each measure is grounded in the instruments and findings that researchers actually used.</p>
      </div>

      {/* FILTERS */}
      <div style={{display:'grid', gridTemplateColumns:'1fr auto auto', gap:24, marginBottom:32, alignItems:'end', paddingBottom:16, borderBottom:'1px solid var(--ink)'}}>
        <div>
          <div className="smallcaps" style={{marginBottom:4}}>Search measures</div>
          <input className="input-field" placeholder="e.g. burnout, documentation, PDQI…" value={q} onChange={e => setQ(e.target.value)}/>
        </div>
        <div>
          <div className="smallcaps" style={{marginBottom:4}}>Dimension</div>
          <select className="select-field" value={dim} onChange={e => setDim(e.target.value)}>
            <option value="">All dimensions</option>
            {DIM_CODES.map(d => <option key={d} value={d}>{d}, {DIM_LONG[d]}</option>)}
          </select>
        </div>

      </div>

      {/* GROUPED LIST, by D&M dimension, causal-chain order */}
      {Object.entries(grouped).map(([dimCode, ms]) => (
        <div key={dimCode} style={{marginBottom:48}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4, gap:16}}>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <DimTag code={dimCode}/>
              <h2 className="section" style={{margin:0}}>{DIM_LONG[dimCode] || dimCode}</h2>
            </div>
            <span className="smallcaps">{ms.length} measure{ms.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="rule thin" style={{margin:'8px 0 0'}}/>

          {ms.map(m => {
            const dc = primaryDim(m.dimension);
            const isExp = expanded === m.id;
            const rigor = RIGOR[m.id];
            return (
              <div key={m.id}>
                <div className="measure-row" onClick={() => setExpanded(isExp ? null : m.id)}>
                  <div className="m-id">{m.id}</div>
                  <div>
                    <div className="m-name">{m.name}</div>
                    <div className="m-def">{(m.definition || '').split(/(?<=\.)\s/)[0]}</div>
                  </div>
                  <div className="m-dim">
                    <DimTag code={dc}/>
                    {rigor && <div style={{marginTop:6}}><TierBadge id={m.id}/></div>}
                  </div>
                  <div className="m-papers">
                    <span className="lg">{m.paperCount ?? (m.papers||[]).length}</span><span style={{color:'var(--ink-3)'}}> papers</span>
                    {rigor && <div className="ev-bar" style={{marginTop:8, maxWidth:100}}>
                      {[0,1,2,3,4].map(i => <div key={i} className={'seg-cell ' + (i < Math.round(rigor.s/20) ? (rigor.t === 'HIGH' ? 'fill' : 'accent') : '')}/>)}
                    </div>}
                  </div>
                  <div className="m-caret">{isExp ? '−' : '+'}</div>
                </div>

                {isExp && (
                  <div className="measure-expanded">
                    <div className="grid-feature" style={{gap:40}}>
                      <div>
                        {m.definition && <div style={{marginBottom:20}}>
                          <h4 className="mini">Definition</h4>
                          <div className="body-text" style={{fontSize:16}}><MdText text={m.definition}/></div>
                        </div>}
                        {m.concerns && <div style={{marginBottom:20}}>
                          <h4 className="mini">Methodological concerns</h4>
                          <div className="body-text" style={{fontSize:15, color:'var(--ink-2)'}}><MdText text={m.concerns}/></div>
                        </div>}
                        {m.typicalFindings && <div style={{marginBottom:20}}>
                          <h4 className="mini">Typical findings</h4>
                          <div className="body-text" style={{fontSize:15}}><MdText text={m.typicalFindings}/></div>
                        </div>}
                        {m.aliases && m.aliases.length > 0 && <div style={{marginBottom:20}}>
                          <h4 className="mini">Aliases in the literature</h4>
                          <div style={{fontSize:14, color:'var(--ink-2)'}}>
                            {m.aliases.map((a, i) => <div key={i} style={{padding:'4px 0', borderBottom: i < m.aliases.length-1 ? '1px solid var(--rule)' : 'none', fontStyle:'italic'}}>{renderMd(a)}</div>)}
                          </div>
                        </div>}
                      </div>
                      <div>
                        {m.instruments && m.instruments.length > 0 && <div style={{marginBottom:24}}>
                          <h4 className="mini">Instruments</h4>
                          {m.instruments.map((inst, i) => <div key={i} className="inst-row" style={{fontSize:13, padding:'6px 10px', marginBottom:4, background:'var(--paper-2)', borderLeft:'2px solid var(--ink)', fontFamily:'Inter'}}>{renderMd(inst)}</div>)}
                        </div>}
                        {m.papers && m.papers.length > 0 && <div>
                          <h4 className="mini">{m.papers.length} source paper{m.papers.length > 1 ? 's' : ''}</h4>
                          <div style={{maxHeight:240, overflowY:'auto', fontSize:13, lineHeight:1.5, paddingRight:8}}>
                            {m.papers.map((p, i) => {
                              const art = articles && articles.find(a => a.id === p);
                              return <div key={i} style={{padding:'6px 0', borderBottom:'1px solid var(--rule)', fontStyle:'italic', color: art ? 'var(--accent)' : 'var(--ink-2)', cursor: art ? 'pointer' : 'default', transition:'color 0.15s'}}
                                onClick={() => art && onSelectArticle(art)}
                                onMouseEnter={e => { if (art) e.currentTarget.style.color = 'var(--ink)'; }}
                                onMouseLeave={e => { if (art) e.currentTarget.style.color = 'var(--accent)'; }}>
                                {p}{art && <span style={{fontSize:10, marginLeft:4, opacity:0.5}}>↗</span>}
                              </div>;
                            })}
                          </div>
                        </div>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {filtered.length === 0 && <div className="loading">No measures match.</div>}
    </div>
  );
}

/* ========================================================================
   DRAFT MEASURES, stakeholder-originated research agenda
   ======================================================================== */
function DraftsTab({ drafts, expanded, setExpanded }) {
  const STAKE_COLOR = { CFO:'var(--green)', CMIO:'var(--brand-deep)', COO:'var(--accent-2)', CPO:'var(--purple)' };

  return (
    <div className="page">
      <div style={{marginBottom:40}}>
        <div className="smallcaps">IV · Draft Measures</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>The research agenda<br/>that <span className="em accent">the literature is missing</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Twelve constructs surfaced through key-informant interviews with health-system leaders... all absent or effectively unmeasured in the 54-paper corpus. Pending validation.</p>
      </div>

      <div className="aside" style={{marginBottom:40}}>
        Draft measures are <em>not</em> canonical. They are hypotheses about what decision-makers need the literature to answer: named, defined, and left open for future research to validate.
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        {drafts.map(d => {
          const isExp = expanded === d.id;
          const stakes = (d.stakeholders || []).map(s => s.role);
          return (
            <div key={d.id} className="card card-hoverable" onClick={() => setExpanded(isExp ? null : d.id)} style={{gridColumn: isExp ? '1 / -1' : 'auto'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:12, marginBottom:8}}>
                <div className="mono" style={{fontSize:13, color:'var(--ink-3)'}}>{d.id}</div>
                <div style={{display:'flex', gap:6}}>
                  {stakes.map(r => <span key={r} className="chip" style={{background:'transparent', borderColor: STAKE_COLOR[r] || 'var(--rule)', color: STAKE_COLOR[r] || 'var(--ink-2)'}}>{r}</span>)}
                </div>
              </div>
              <h3 className="sub" style={{marginBottom:10}}>{d.name}</h3>
              <div className="body-text" style={{fontSize:14, color:'var(--ink-2)'}}>
                {(d.definition || '').split(/(?<=\.)\s/).slice(0, isExp ? 99 : 2).join(' ')}
              </div>

              {isExp && (
                <div style={{marginTop:24, paddingTop:24, borderTop:'1px solid var(--rule)'}}>
                  {d.rationale && <div style={{marginBottom:20}}>
                    <h4 className="mini">Why it matters</h4>
                    <div className="body-text" style={{fontSize:15}}><MdText text={d.rationale}/></div>
                  </div>}
                  {(d.stakeholders||[]).length > 0 && <div style={{marginBottom:20}}>
                    <h4 className="mini">Stakeholder rationale</h4>
                    <div>{d.stakeholders.map((s, i) => (
                      <div key={i} style={{padding:'10px 0', borderBottom: i < d.stakeholders.length-1 ? '1px solid var(--rule)' : 'none', display:'grid', gridTemplateColumns:'60px 1fr', gap:16}}>
                        <div className="mono" style={{fontSize:13, color: STAKE_COLOR[s.role] || 'var(--ink)', fontWeight:500}}>{s.role}</div>
                        <div style={{fontSize:14, color:'var(--ink-2)', fontStyle:'italic'}}>{s.rationale}</div>
                      </div>
                    ))}</div>
                  </div>}
                  {(d.methods||[]).length > 0 && <div style={{marginBottom:20}}>
                    <h4 className="mini">Proposed methods</h4>
                    <div>{d.methods.map((mt, i) => (
                      <div key={i} style={{padding:'8px 0', borderBottom: i < d.methods.length-1 ? '1px solid var(--rule)' : 'none'}}>
                        <div style={{fontSize:14, fontWeight:500}}>{mt.method}</div>
                        <div style={{fontSize:13, color:'var(--ink-3)', marginTop:2}}>{mt.description}</div>
                      </div>
                    ))}</div>
                  </div>}
                  {(d.relatedMeasures||[]).length > 0 && <div>
                    <h4 className="mini">Related canonical measures</h4>
                    <div style={{fontSize:14, color:'var(--ink-2)'}}>{d.relatedMeasures.map((r, i) => <div key={i} style={{padding:'4px 0'}}>{r}</div>)}</div>
                  </div>}
                </div>
              )}

              <div style={{marginTop:16, fontSize:11, color:'var(--ink-3)', fontFamily:'Inter', letterSpacing:'0.08em', textTransform:'uppercase'}}>{isExp ? ', Close' : '+ Full proposal'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   DECISION GUIDE, stakeholder-filtered measures
   ======================================================================== */
function GuideTab({ measures, drafts, role, setRole }) {
  const ROLES = [
    { id:'CMIO', title:'Chief Medical Information Officer', sub:'Clinical systems, adoption, provider experience', dims:['US','U','IQ','II'] },
    { id:'CFO',  title:'Chief Financial Officer', sub:'ROI, cost of ownership, productivity', dims:['OI'] },
    { id:'COO',  title:'Chief Operating Officer', sub:'Throughput, operations, implementation', dims:['OI','SerQ'] },
    { id:'CPO',  title:'Chief Patient Officer', sub:'Patient experience and safety', dims:['OI','US'] }
  ];
  const ROLE_MEASURES = {
    CMIO: ['CM-01','CM-02','CM-03','CM-15','CM-16','CM-13','CM-14','CM-08','CM-09','CM-10','CM-23'],
    CFO:  ['CM-04','CM-05','CM-20','CM-21','CM-22','CM-07'],
    COO:  ['CM-04','CM-06','CM-07','CM-22','CM-23','CM-13'],
    CPO:  ['CM-17','CM-18','CM-19','CM-15']
  };
  const cur = ROLES.find(r => r.id === role);
  const list = (ROLE_MEASURES[role] || []).map(id => measures.find(m => m.id === id)).filter(Boolean);
  const relDrafts = drafts.filter(d => (d.stakeholders||[]).some(s => s.role === role));

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">III · Decision Guide</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>Read by <span className="em">role</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>The evidence that matters most depends on the question you're asking. Choose a perspective.</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginBottom:40}}>
        {ROLES.map(r => (
          <div key={r.id} className={'stake-card ' + (r.id === role ? 'active' : '')} onClick={() => setRole(r.id)}>
            <div className="role">{r.id}</div>
            <div className="title">{r.title}</div>
            <div className="count">{(ROLE_MEASURES[r.id]||[]).length} measures · {drafts.filter(d => (d.stakeholders||[]).some(s => s.role === r.id)).length} draft</div>
          </div>
        ))}
      </div>

      <div className="rule double"/>

      <div style={{marginTop:40, marginBottom:24}}>
        <div className="smallcaps">For the {role}</div>
        <h2 className="section" style={{marginTop:4}}>{cur.title}</h2>
        <p className="body-text" style={{fontSize:17, color:'var(--ink-2)', maxWidth:680, marginTop:8}}>{cur.sub}. Primary dimensions: {cur.dims.map(d => DIM_LONG[d]).join(', ')}.</p>
      </div>

      <h4 className="mini" style={{marginTop:32}}>Measures with direct bearing</h4>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:48}}>
        {list.map(m => {
          const dc = primaryDim(m.dimension);
          const r = RIGOR[m.id];
          return (
            <div key={m.id} className="card">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
                <div className="mono" style={{fontSize:12, color:'var(--ink-3)'}}>{m.id}</div>
                <div style={{display:'flex', gap:6}}>
                  <DimTag code={dc}/>
                  {r && <TierBadge id={m.id}/>}
                </div>
              </div>
              <h3 style={{fontFamily:'Newsreader', fontSize:19, fontWeight:500, marginBottom:6}}>{m.name}</h3>
              <p style={{fontSize:13, color:'var(--ink-3)', lineHeight:1.5}}>{(m.definition||'').split(/(?<=\.)\s/)[0]}</p>
              <div style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12}}>
                <span className="mono" style={{color:'var(--ink-2)'}}>{m.paperCount ?? 0} papers</span>
                {r && <div style={{display:'flex', gap:2, width:80}}>
                  {[0,1,2,3,4].map(i => <div key={i} style={{flex:1, height:4, background: i < Math.round(r.s/20) ? rigorColor(r.s) : 'var(--rule)'}}/>)}
                </div>}
              </div>
            </div>
          );
        })}
      </div>

      {relDrafts.length > 0 && (
        <div>
          <h4 className="mini">Gaps the {role} would want filled <span style={{textTransform:'none', fontStyle:'italic', color:'var(--ink-3)', letterSpacing:0}}>, pending research</span></h4>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
            {relDrafts.map(d => (
              <div key={d.id} className="card" style={{borderLeft:'3px solid var(--accent)'}}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
                  <div className="mono" style={{fontSize:12, color:'var(--accent)'}}>{d.id} · Draft</div>
                </div>
                <h3 style={{fontFamily:'Newsreader', fontSize:18, fontWeight:500, fontStyle:'italic', marginBottom:6}}>{d.name}</h3>
                <p style={{fontSize:13, color:'var(--ink-3)', lineHeight:1.5}}>{(d.stakeholders||[]).find(s => s.role === role)?.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================================================================
   ARTICLES, editorial table + modal
   ======================================================================== */
function ArticlesTab({ articles, selected, setSelected }) {
  const [q, setQ] = useStateT('');
  const [design, setDesign] = useStateT('');
  const [year, setYear] = useStateT('');
  const [product, setProduct] = useStateT('');

  const designs = useMemoT(() => [...new Set(articles.map(a => a.studyDesign).filter(Boolean))].sort(), [articles]);
  const years = useMemoT(() => [...new Set(articles.map(a => a.year).filter(Boolean))].sort().reverse(), [articles]);
  const products = useMemoT(() => [...new Set(articles.map(a => cleanProduct(a.product)))].sort(), [articles]);

  const filtered = useMemoT(() => articles.filter(a => {
    if (q && !JSON.stringify(a).toLowerCase().includes(q.toLowerCase())) return false;
    if (design && a.studyDesign !== design) return false;
    if (year && String(a.year) !== year) return false;
    if (product && cleanProduct(a.product) !== product) return false;
    return true;
  }).sort((a,b) => (b.year||0) - (a.year||0)), [articles, q, design, year, product]);

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">V · Article Explorer</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>The corpus, <span className="em">fifty-four strong</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Every study, its design, product under evaluation, and the measures it contributed.</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:16, marginBottom:24, alignItems:'end'}}>
        <div>
          <div className="smallcaps" style={{marginBottom:4}}>Search</div>
          <input className="input-field" placeholder="Title, author, measure…" value={q} onChange={e => setQ(e.target.value)}/>
        </div>
        <select className="select-field" value={design} onChange={e => setDesign(e.target.value)}>
          <option value="">All designs</option>
          {designs.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select className="select-field" value={year} onChange={e => setYear(e.target.value)}>
          <option value="">All years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select className="select-field" value={product} onChange={e => setProduct(e.target.value)}>
          <option value="">All products</option>
          {products.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div style={{fontSize:13, color:'var(--ink-3)', marginBottom:16, fontStyle:'italic'}}>
        {filtered.length} of {articles.length} studies
      </div>

      <table className="editorial">
        <colgroup>
          <col style={{width:70}}/>
          <col/>
          <col style={{width:160}}/>
          <col style={{width:160}}/>
          <col style={{width:80}}/>
        </colgroup>
        <thead>
          <tr>
            <th>Year</th>
            <th>Study</th>
            <th>Design</th>
            <th>Product</th>
            <th style={{textAlign:'right'}}>Measures</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((a, i) => (
            <tr key={a.id || i} onClick={() => setSelected(a)}>
              <td className="year-cell">{a.year || ', '}</td>
              <td>
                <div className="title-cell">{a.title || a.id}
                  {a.authors && <span className="authors">{a.authors}</span>}
                </div>
              </td>
              <td className="design-cell">{a.studyDesign || ', '}</td>
              <td style={{fontSize:13, color:'var(--ink-2)'}}>{cleanProduct(a.product)}</td>
              <td className="n-cell">{(a.measures||[]).length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleModal({ article: a, onClose }) {
  return (
    <Modal onClose={onClose} eyebrow={`${a.year || ', '} · ${a.studyDesign || 'Study'}`} title={a.title || a.id}>
      {a.authors && <p style={{fontStyle:'italic', color:'var(--ink-3)', marginBottom:6}}>{a.authors}</p>}
      {a.journal && <p style={{fontSize:13, color:'var(--ink-3)', marginBottom:20}}>{a.journal}</p>}

      {a.summary && <div style={{marginBottom:20}}>
        <h4 className="mini">Summary</h4>
        <div className="body-text" style={{fontSize:16}}><MdText text={a.summary}/></div>
      </div>}

      {a.product && <div style={{marginBottom:16}}>
        <h4 className="mini">Product evaluated</h4>
        <div className="body-text" style={{fontSize:15}}><MdText text={a.product}/></div>
      </div>}

      {a.setting && <div style={{marginBottom:16}}>
        <h4 className="mini">Setting</h4>
        <div className="body-text" style={{fontSize:15}}><MdText text={a.setting}/></div>
      </div>}

      {a.hypothesis && <div style={{marginBottom:16}}>
        <h4 className="mini">Hypothesis</h4>
        <div className="body-text" style={{fontSize:15}}><MdText text={a.hypothesis}/></div>
      </div>}

      {a.measures && a.measures.length > 0 && <div style={{marginTop:24}}>
        <h4 className="mini">{a.measures.length} Measure{a.measures.length > 1 ? 's' : ''}</h4>
        <div>{a.measures.map((m, i) => (
          <div key={i} style={{padding:'12px 0', borderBottom: i < a.measures.length-1 ? '1px solid var(--rule)' : 'none'}}>
            <div style={{display:'flex', justifyContent:'space-between', gap:12, marginBottom:4}}>
              <strong style={{fontSize:15}}>{m.measure}</strong>
              <div style={{display:'flex', gap:4, flexShrink:0}}>
                {parseDim(m.dimensions).map(d => <DimTag key={d} code={d}/>)}
              </div>
            </div>
            {m.description && <div style={{fontSize:14, color:'var(--ink-3)', lineHeight:1.5}}>{renderMd(m.description)}</div>}
          </div>
        ))}</div>
      </div>}

      {a.doi && <div style={{marginTop:24, fontSize:12, color:'var(--ink-3)', fontFamily:'JetBrains Mono, monospace'}}>
        DOI: {a.doi}
      </div>}
    </Modal>
  );
}

/* ========================================================================
   FRAMEWORK, D&M dimension detail
   ======================================================================== */
function FrameworkTab({ dimensions, measures, articles }) {
  const byDim = useMemoT(() => {
    const g = {};
    measures.forEach(m => { const d = primaryDim(m.dimension); if (!g[d]) g[d] = []; g[d].push(m); });
    return g;
  }, [measures]);

  const dimOrder = ['SQ','IQ','SerQ','U','US','II','OI'];

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">VI · D&M Framework</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>DeLone & McLean,<br/><span className="em">applied to ambient AI</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Seven dimensions arranged as a causal chain: quality precedes use, use produces outcomes, outcomes feed back.</p>
      </div>

      {/* CAUSAL FLOW */}
      <div className="card" style={{padding:32, marginBottom:40}}>
        <h4 className="mini" style={{marginBottom:20}}>The causal chain</h4>
        <div className="dm-diagram" style={{padding:'20px 0'}}>
          <div className="dm-col">
            {['SQ','IQ','SerQ'].map(c => (
              <div key={c} className="dm-node">
                <div className="code">{c}</div>
                <div className="name">{DIM_LONG[c]}</div>
                <div className="count">{(byDim[c]||[]).length} measures</div>
              </div>
            ))}
          </div>
          <div className="dm-arrow">→</div>
          <div className="dm-col">
            {['U','US'].map(c => (
              <div key={c} className="dm-node">
                <div className="code">{c}</div>
                <div className="name">{DIM_LONG[c]}</div>
                <div className="count">{(byDim[c]||[]).length} measures</div>
              </div>
            ))}
          </div>
          <div className="dm-arrow">→</div>
          <div className="dm-col">
            {['II','OI'].map(c => (
              <div key={c} className="dm-node" style={{borderColor:'var(--accent)', background:'#faf1ea'}}>
                <div className="code" style={{color:'var(--accent)'}}>{c}</div>
                <div className="name">{DIM_LONG[c]}</div>
                <div className="count">{(byDim[c]||[]).length} measures</div>
              </div>
            ))}
          </div>
        </div>
        <p className="footnote" style={{textAlign:'center', marginTop:20}}>Quality dimensions → Use & Satisfaction → Individual + Organizational Impact → (feedback)</p>
      </div>

      {/* PER-DIMENSION DEEP DIVES */}
      {dimOrder.map(code => {
        const d = dimensions.find(x => x.code === code);
        const ms = byDim[code] || [];
        if (!d) return null;
        return (
          <div key={code} style={{marginBottom:48}}>
            <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:24, alignItems:'start', borderTop:'1px solid var(--ink)', paddingTop:24}}>
              <div>
                <DimTag code={code}/>
                <div className="mono" style={{fontSize:11, color:'var(--ink-3)', marginTop:10}}>{d.paperCount || 0} papers</div>
                <div className="mono" style={{fontSize:11, color:'var(--ink-3)'}}>{ms.length} measures</div>
              </div>
              <div>
                <h2 className="section" style={{marginBottom:8}}>{DIM_LONG[code]}</h2>
                <p className="body-text" style={{fontSize:17, maxWidth:720}}><MdText text={d.definition}/></p>

                {d.belongsHere && d.belongsHere.length > 0 && (
                  <div style={{marginTop:16}}>
                    <h4 className="mini">What belongs here</h4>
                    <div>{d.belongsHere.map((b, i) => <div key={i} style={{padding:'4px 0', fontSize:14, color:'var(--ink-2)', fontStyle:'italic'}}>, {b}</div>)}</div>
                  </div>
                )}

                {ms.length > 0 && (
                  <div style={{marginTop:20, display:'flex', flexWrap:'wrap', gap:8}}>
                    {ms.map(m => <span key={m.id} className="chip"><span className="mono" style={{color:'var(--ink-3)', marginRight:6}}>{m.id}</span>{m.name}</span>)}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================================================
   CORPUS, statistics
   ======================================================================== */
function CorpusTab({ articles }) {
  const designData = useMemoT(() => {
    const c = {};
    articles.forEach(a => { const d = a.studyDesign || 'Unknown'; c[d] = (c[d]||0)+1; });
    return Object.entries(c).sort((a,b) => b[1]-a[1]);
  }, [articles]);

  const productData = useMemoT(() => {
    const c = {};
    articles.forEach(a => { const p = cleanProduct(a.product); c[p] = (c[p]||0)+1; });
    return Object.entries(c).sort((a,b) => b[1]-a[1]).slice(0, 10);
  }, [articles]);

  const maxDesign = Math.max(...designData.map(([,c]) => c));
  const maxProduct = Math.max(...productData.map(([,c]) => c));

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">VII · Study Corpus</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>The <span className="em">shape</span> of the evidence.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Two thousand and twenty-one to today. North-America-dominant. Three randomized trials.</p>
      </div>

      <div className="grid-2" style={{marginBottom:48}}>
        <div>
          <h4 className="mini">Figure 3 · Study designs</h4>
          <h3 className="sub" style={{marginBottom:20}}><em>Where the evidence comes from.</em></h3>
          {designData.map(([name, c]) => (
            <HBar key={name} label={name} value={c} max={maxDesign} color={name.toLowerCase().includes('rct') || name.toLowerCase().includes('random') ? 'var(--accent)' : 'var(--ink)'} width={220}/>
          ))}
          <p className="footnote" style={{marginTop:16}}>Only a handful of randomized trials. The bulk is observational pre/post and qualitative work.</p>
        </div>
        <div>
          <h4 className="mini">Figure 4 · Products evaluated</h4>
          <h3 className="sub" style={{marginBottom:20}}><em>A market still consolidating around a few vendors.</em></h3>
          {productData.map(([name, c]) => (
            <HBar key={name} label={name} value={c} max={maxProduct} color="var(--ink)" width={180}/>
          ))}
        </div>
      </div>

      <div className="rule double"/>

      <div className="grid-feature" style={{marginTop:48}}>
        <div className="body-text" style={{fontSize:17}}>
          <h3 className="sub">Structural limitations</h3>
          <p>The evidence base is overwhelmingly North American. It concentrates at a handful of academic health systems: Stanford, UCSF, Kaiser, Penn, UCLA, Mass General Brigham, and is dominated by primary care and ambulatory settings.</p>
          <p>Pediatrics is entirely absent. Inpatient settings appear in only one study. Most studies follow participants for one to three months with sample sizes of fifty to one hundred clinicians.</p>
          <p>Vendor-funded or vendor-adjacent studies tend to report larger effects than independent work... an important bias to carry through any reading of these results.</p>
        </div>
        <aside className="aside">
          Pediatrics is absent. Inpatient is nearly absent. The evidence is a snapshot of ambulatory primary care at large academic systems.
        </aside>
      </div>
    </div>
  );
}

/* ========================================================================
   RIGOR, evidence profile cards with tier badges
   ======================================================================== */
function RigorTab({ measures, articles }) {
  const [openRationale, setOpenRationale] = useStateT(null);

  const data = useMemoT(() => measures.filter(m => RIGOR[m.id]).map(m => {
    const r = RIGOR[m.id];
    const convObj = CONVERGENCE[m.id] || {c:'emerging', r:''};
    const breakdown = getDesignBreakdown(m.papers, articles || []);
    return {
      id: m.id, name: m.name, tier: r.t, label: r.l,
      papers: m.paperCount || 0, dim: primaryDim(m.dimension),
      conv: convObj.c, rationale: convObj.r, breakdown
    };
  }), [measures, articles]);

  /* Sort within each tier by paper count descending */
  const tierDefs = [
    { key:'HIGH',     title:'Best relative quality',  desc:'Multiple study designs, validated instruments, reproducible findings.' },
    { key:'MODERATE', title:'Moderate',                desc:'Some methodological strength but gaps in design, sample, or convergence.' },
    { key:'LOW',      title:'Needs work',              desc:'Few studies, weak designs, or findings that diverge across methods.' },
    { key:'META',     title:'Methodological / Meta',   desc:'Measures that assess research quality rather than clinical outcomes.' }
  ];

  const tierData = {};
  tierDefs.forEach(t => {
    tierData[t.key] = data.filter(d => d.tier === t.key).sort((a,b) => b.papers - a.papers);
  });

  /* Summary stats */
  const totalPapers = 54;
  const highCount = tierData['HIGH'].length;
  const lowCount = tierData['LOW'].length;
  const convergeCount = data.filter(d => d.conv === 'converge').length;
  const divergeCount = data.filter(d => d.conv === 'diverge').length;

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">VIII · Level of Rigor</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>Not all evidence<br/>is <span className="em accent">created equal</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>
          Each canonical measure draws on a different slice of the {totalPapers}-study corpus.
          {' '}{highCount} measures have the strongest evidence base; {lowCount} need substantially more work.
          {' '}Findings converge for {convergeCount} measures and actively diverge for {divergeCount}.
        </p>
      </div>

      <div className="aside" style={{marginBottom:40}}>
        <strong style={{fontStyle:'normal', color:'var(--accent)'}}>Work in progress.</strong> Tier assignments reflect editorial judgment based on study design mix, sample sizes, instrument validation, and finding convergence. A formal multi-criteria rubric is in development.
      </div>

      {/* OVERVIEW STRIP */}
      <div style={{display:'flex', gap:1, marginBottom:48, height:8}}>
        {data.slice().sort((a,b) => {
          const order = {HIGH:0, MODERATE:1, LOW:2, META:3};
          return (order[a.tier]||9) - (order[b.tier]||9);
        }).map(d => (
          <div key={d.id} title={d.id + ', ' + d.name} style={{
            flex:1, background:tierColor(d.tier), opacity:0.85
          }}/>
        ))}
      </div>

      {/* TIER GROUPS */}
      {tierDefs.map(t => tierData[t.key].length > 0 && (
        <div key={t.key} style={{marginBottom:56}}>
          <div style={{borderBottom:'2px solid var(--ink)', paddingBottom:10, marginBottom:8}}>
            <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
              <h2 className="section" style={{fontSize:28}}>{t.title}</h2>
              <span className="smallcaps">{tierData[t.key].length} measure{tierData[t.key].length > 1 ? 's' : ''}</span>
            </div>
            <p style={{fontSize:14, color:'var(--ink-3)', fontFamily:'Newsreader, serif', fontStyle:'italic', marginTop:4}}>{t.desc}</p>
          </div>

          <div className="grid-2" style={{marginTop:20}}>
            {tierData[t.key].map(item => {
              const convLabel = CONV_LABEL[item.conv] || '';
              const convIcon = CONV_ICON[item.conv] || '';
              const hasRCT = item.breakdown.some(([d]) => d === 'RCT');

              return (
                <div key={item.id} className="card" style={{padding:24}}>
                  {/* Header row */}
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8}}>
                    <div>
                      <span className="mono" style={{fontSize:12, color:'var(--ink-3)'}}>{item.id}</span>
                      {' '}
                      <DimTag code={item.dim}/>
                    </div>
                    <TierBadge id={item.id}/>
                  </div>

                  {/* Measure name */}
                  <h3 style={{fontFamily:'Newsreader, serif', fontSize:20, fontWeight:500, marginBottom:16, lineHeight:1.3}}>{item.name}</h3>

                  {/* Evidence profile */}
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px 24px', fontSize:13}}>
                    {/* Papers */}
                    <div>
                      <div className="smallcaps" style={{fontSize:10, marginBottom:4, letterSpacing:'0.12em'}}>Papers</div>
                      <div style={{fontFamily:'Newsreader, serif', fontSize:28, fontWeight:400, lineHeight:1}}>{item.papers}</div>
                    </div>

                    {/* Convergence */}
                    <div>
                      <div className="smallcaps" style={{fontSize:10, marginBottom:4, letterSpacing:'0.12em'}}>Convergence</div>
                      <div style={{display:'flex', alignItems:'center', gap:6, cursor: item.rationale ? 'pointer' : 'default'}}
                           onClick={() => item.rationale && setOpenRationale(openRationale === item.id ? null : item.id)}>
                        <span style={{color:convColor(item.conv), fontSize:16}}>{convIcon}</span>
                        <span style={{fontFamily:'Inter, sans-serif', fontSize:13, color:'var(--ink-2)'}}>{convLabel}</span>
                        {item.rationale && <span style={{fontSize:10, color:'var(--ink-4)', marginLeft:2}}>{openRationale === item.id ? '▾' : '▸'}</span>}
                      </div>
                      {openRationale === item.id && item.rationale && (
                        <div style={{marginTop:8, padding:'10px 12px', background:'var(--paper-2)', borderLeft:'2px solid ' + convColor(item.conv),
                          fontFamily:'Newsreader, serif', fontSize:14, lineHeight:1.5, color:'var(--ink-2)', fontStyle:'italic'}}>
                          {item.rationale}
                        </div>
                      )}
                    </div>

                    {/* Study designs, full width */}
                    <div style={{gridColumn:'1 / -1'}}>
                      <div className="smallcaps" style={{fontSize:10, marginBottom:4, letterSpacing:'0.12em'}}>Study designs</div>
                      <div style={{fontFamily:'Inter, sans-serif', fontSize:12, color:'var(--ink-2)', lineHeight:1.5}}>
                        {item.breakdown.map(([d, c], i) => (
                          <span key={d}>
                            {i > 0 && <span style={{color:'var(--rule)', margin:'0 6px'}}>·</span>}
                            <span style={{fontWeight: d === 'RCT' ? 600 : 400, color: d === 'RCT' ? 'var(--ink)' : 'var(--ink-2)'}}>
                              {c} {d}
                            </span>
                          </span>
                        ))}
                        {!hasRCT && <span style={{color:'var(--accent)', fontStyle:'italic', marginLeft:8, fontSize:11}}>no RCTs</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* CROSS-CUTTING */}
      <div className="rule double" style={{marginTop:48}}/>
      <div className="grid-feature" style={{marginTop:40}}>
        <div className="body-text" style={{fontSize:17}}>
          <h3 className="sub">Cross-cutting findings</h3>
          <p>The self-report / objective divergence is the most reproducible methodological finding across the corpus: clinicians consistently report larger improvements than objective data confirm, for documentation time (two to six times overestimated), after-hours documentation (positive self-report, null objective), patient experience (positive in open-label, null in masked), and burnout (QI estimates two to four times larger than RCT).</p>
          <p>The near-total absence of real-world patient safety data is the most critical gap. Ambient AI generates safety-critical clinical documentation without systematic post-market safety surveillance. The field is deploying tools at scale without the safety-monitoring infrastructure expected for medical devices or pharmaceuticals.</p>
        </div>
        <aside className="aside">
          Two to six times. That is the typical ratio between what clinicians say ambient AI saves them and what the EHR logs actually show.
        </aside>
      </div>
    </div>
  );
}

/* ========================================================================
   METHODS, sectioned methodology page (accordion)
   ======================================================================== */

const REPO_BASE = 'https://github.com/pbiondich/aci/blob/main';

function AccordionSection({ num, title, sub, defaultOpen, children }) {
  const [open, setOpen] = useStateT(!!defaultOpen);
  return (
    <div className={'accordion ' + (open ? 'open' : '')}>
      <div className="accordion-head" onClick={() => setOpen(!open)} role="button" aria-expanded={open}>
        <div className="num">{num}</div>
        <div>
          <div className="title">{title}</div>
          {sub && <div className="sub">{sub}</div>}
        </div>
        <div className="toggle">{open ? '−' : '+'}</div>
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

function MethodsTab({ setTab }) {
  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">IX · Methods</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>How this <span className="em accent">review</span><br/>was built.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:760}}>
          A note on procedure. The taxonomy on this site did not arrive fully formed; it was assembled from fifty-four full-text reviews, four hundred ninety-four extracted measures, and a series of editorial judgments documented here for the reader who wants to inspect the seams.
        </p>
      </div>

      <div className="grid-feature" style={{marginBottom:48}}>
        <div className="body-text">
          <p>The sections below describe, in order, the <em>corpus</em> we read, the <em>template</em> we used to abstract each paper, the <em>framework</em> we mapped measures into, the <em>derivation</em> that produced the twenty-five canonical measures, and the <em>tooling</em> that keeps it all reproducible.</p>
          <p>Where a procedure required a judgment call, we have tried to name it. Where a methodology document lives in the source repository, it is linked.</p>
        </div>
        <aside className="aside">
          The vault is the source of truth. The website is a derivative artifact, regenerated from markdown on every commit.
        </aside>
      </div>

      {/* SECTION 1, CORPUS */}
      <AccordionSection
        num="1"
        title="The corpus"
        sub="Fifty-four full-text studies, full-text rule, and a rolling inclusion process."
        defaultOpen={true}
      >
        <p>The review is built on a corpus of <strong>54 articles</strong> evaluating ambient clinical intelligence tools, drawn from peer-reviewed journals, preprint servers, professional society reports, and grey literature published between 2021 and 2026. Each article was reviewed in full text by a member of the team using a structured abstraction template.</p>

        <h4>Inclusion rule: full text only</h4>
        <p>The hard rule of the project is that no article enters the corpus on the basis of its abstract alone. If the full text is inaccessible, the paper is flagged for procurement and held outside the corpus until obtained. This rule exists because the abstract of an ambient AI study almost never reports the constructs we are trying to extract, measure operationalization, instrument choice, and dimension mapping all live in the methods section.</p>

        <h4>Evidence levels we tag</h4>
        <p>Every article is classified into one of seven evidence levels at the time of review:</p>
        <div className="pill-row" style={{margin:'12px 0 14px'}}>
          <span className="pill">RCT</span>
          <span className="pill">Observational</span>
          <span className="pill">Quality Improvement</span>
          <span className="pill">Qualitative</span>
          <span className="pill">Simulation</span>
          <span className="pill">Scoping / Systematic Review</span>
          <span className="pill">Grey Literature</span>
        </div>

        <h4>Data sources we tag</h4>
        <p>Each article also gets one or more data-source tags, which let us downstream-distinguish between studies grounded in objective system telemetry and those relying on self-report:</p>
        <div className="pill-row" style={{margin:'12px 0 14px'}}>
          <span className="pill">Product telemetry</span>
          <span className="pill">EHR data</span>
          <span className="pill">Survey / self-report</span>
          <span className="pill">Claims / billing</span>
          <span className="pill">Simulation</span>
          <span className="pill">Mixed</span>
        </div>

        <h4>The corpus is living</h4>
        <p>New articles are added on a rolling basis through pull request to the source repository. When an article is added, the article-to-measure linkage tool is run automatically to update the canonical-measure paper lists, and the website is regenerated. The corpus reflected on this site corresponds to a specific commit of the vault, see the version stamp in the masthead.</p>

        <p style={{marginTop:18, fontSize:14}}>
          <a href={`${REPO_BASE}/Articles`} target="_blank" rel="noopener" className="ext">Browse the article files on GitHub →</a>
        </p>
      </AccordionSection>

      {/* SECTION 2, ABSTRACTION TEMPLATE */}
      <AccordionSection
        num="2"
        title="How each article gets coded"
        sub="The Article Review Template, what we extract from every paper."
        defaultOpen={true}
      >
        <p>Every article in the corpus is abstracted using a single template that captures its bibliographic identity, its design, the specific ambient product evaluated, and, most critically, its full Study Measures table. The template is the contract between reviewers; consistency here is what makes the downstream taxonomy possible.</p>

        <h4>Required fields</h4>
        <div style={{margin:'14px 0'}}>
          <div className="field-row"><div className="k">Title · Authors · DOI</div><div className="v">Bibliographic identity, including journal or grey-literature source.</div></div>
          <div className="field-row"><div className="k">Product evaluated</div><div className="v">The specific ACI tool studied, Nuance DAX, Suki, Abridge, Ambience, others, or "not specified" if the paper is product-agnostic.</div></div>
          <div className="field-row"><div className="k">Clinical setting</div><div className="v">The care environment: outpatient primary care, ED, inpatient, multi-specialty, rehab, etc.</div></div>
          <div className="field-row"><div className="k">Evidence level</div><div className="v">One of the seven levels listed above.</div></div>
          <div className="field-row"><div className="k">Data source(s)</div><div className="v">All that apply, from the six tags above.</div></div>
          <div className="field-row"><div className="k">Summary · Hypothesis</div><div className="v">A 2–4 sentence narrative; the explicit hypothesis where stated, "Not explicitly stated" where it is not.</div></div>
          <div className="field-row"><div className="k">Study Measures table</div><div className="v">A row for every outcome measure reported in the paper, with a short description and one or more D&M dimension tags. This is the load-bearing artifact of the review.</div></div>
        </div>

        <h4>The Study Measures table</h4>
        <p>For each measure a paper reports, we capture three columns: the <em>name</em> as it appears in the paper, a <em>description</em> of ≤50 words, and the <em>D&M dimension(s)</em> we believe it belongs to. A measure may be tagged with more than one dimension when its construct legitimately spans them, see the mapping guide for dual-coding rules.</p>
        <p>Across all 54 articles, this process produced <strong>494 raw measure rows</strong>, which became the input to the canonical-measure derivation described in §4.</p>

        <p style={{marginTop:18, fontSize:14}}>
          <a href={`${REPO_BASE}/Templates/Article Review Template.md`} target="_blank" rel="noopener" className="ext">Read the full Article Review Template on GitHub →</a>
        </p>
      </AccordionSection>

      {/* SECTION 3, D&M FRAMEWORK */}
      <AccordionSection
        num="3"
        title="Mapping to DeLone & McLean"
        sub="Why this framework, why seven dimensions, and how decisions are made."
      >
        <p>Every measure extracted from the corpus is mapped to one or more dimensions of the DeLone & McLean Information Systems Success Model. Two editorial choices warrant explanation: <em>why this framework</em>, and <em>why seven dimensions rather than the canonical six</em>.</p>

        <h4>Why DeLone & McLean</h4>
        <p>The D&M model has been a standard for evaluating information systems for over thirty years. Its 2003 update is widely cited and well understood by the health informatics community. It is also <em>structurally appropriate</em> for ambient AI: the model distinguishes upstream technical quality from downstream value, with use and satisfaction mediating between them. That structure mirrors how clinicians, IT leaders, and operators actually reason about these tools.</p>
        <p>Reference: <em>DeLone, W.H., and McLean, E.R. (2003). "The DeLone and McLean Model of Information Systems Success: A Ten-Year Update," Journal of Management Information Systems 19(4), 9–30.</em></p>

        <h4>Why seven dimensions, not six</h4>
        <p>The 2003 update consolidated <em>Individual Impact</em> and <em>Organizational Impact</em> into a single <em>Net Benefits</em> dimension. That consolidation was motivated by e-commerce contexts where the two were difficult to disentangle. In healthcare, they are not. Clinician-level outcomes (time savings, burnout, fulfillment) accrue to the individual provider; organizational outcomes (financial performance, patient safety, throughput) accrue to the system. Conflating them obscures the most important finding of this corpus: <em>patient outcomes are almost entirely unmeasured.</em></p>
        <p>For this reason, we use the original 1992 dual-dimension form, yielding seven dimensions in total:</p>

        <div className="pill-row" style={{margin:'12px 0 14px'}}>
          <span className="pill">SQ · System Quality</span>
          <span className="pill">IQ · Information Quality</span>
          <span className="pill">SerQ · Service Quality</span>
          <span className="pill">U · Use</span>
          <span className="pill">US · User Satisfaction</span>
          <span className="pill">II · Individual Impact</span>
          <span className="pill">OI · Organizational Impact</span>
        </div>

        <h4>How measures get mapped</h4>
        <p>Each dimension has a written decision rule, what qualifies, what does not, and how to handle measures that legitimately span two dimensions. The full guide includes the rules for all seven dimensions and a dual-coding section for measures that belong to more than one.</p>

        <p style={{marginTop:18, display:'flex', gap:18, flexWrap:'wrap', alignItems:'center'}}>
          <button onClick={() => { window.location.hash = 'mapping-guide'; }}
            style={{background:'var(--ink)', color:'var(--paper)', border:'none', padding:'14px 22px', fontFamily:'Inter, sans-serif', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', cursor:'pointer'}}>
            See the full mapping guide →
          </button>
          <a href={`${REPO_BASE}/Templates/D%26M Mapping Guide.md`} target="_blank" rel="noopener" className="ext" style={{fontSize:14}}>
            Source on GitHub
          </a>
        </p>
      </AccordionSection>

      {/* SECTION 4, DERIVATION */}
      <AccordionSection
        num="4"
        title="Deriving the canonical measures"
        sub="Four hundred ninety-four raw rows, twenty-five canonical constructs, bottom-up."
      >
        <p>The most distinctive aspect of this review is that the canonical-measure taxonomy was <em>derived from the data, not imposed on it</em>. Earlier in the project, we worked with eleven seeded measures inherited from prior literature reviews. Those were discarded in March 2026 in favor of an evidence-grounded set built bottom-up from the 494 raw measure rows in the corpus.</p>

        <div className="flow-diagram">
          <div className="flow-cell"><div className="lbl">Step 1 · Extract</div><div className="val">494 raw rows</div></div>
          <div className="flow-cell"><div className="lbl">Step 2 · Cluster</div><div className="val">25 constructs</div></div>
          <div className="flow-cell"><div className="lbl">Step 3 · Document</div><div className="val">25 CM files</div></div>
          <div className="flow-cell"><div className="lbl">Step 4 · Validate</div><div className="val">Linkage check</div></div>
        </div>

        <h4>Step 1, Raw measure extraction</h4>
        <p>Each article's Study Measures table contributed one row per outcome measure to a master list. A row carries the measure's name as it appeared in the paper, its operationalization, and the D&M tags assigned during abstraction. Measures with synonymous names but different operationalizations are kept as distinct rows, not collapsed at this stage.</p>

        <h4>Step 2, Bottom-up clustering</h4>
        <p>Raw rows were grouped into canonical constructs by conceptual similarity. For example, "Time in Notes per Appointment," "Documentation Time (seconds)," "Post-Edit Time," and "Notetaking Time Reduction" all describe the same underlying construct, the clock time spent producing clinical documentation, and were clustered into <code>CM-04 Documentation Time</code>. Clustering was iterative: initial groups were reviewed for overlap, split where constructs were too broad, and named with descriptive titles.</p>

        <h4>Step 3, Documentation of each canonical measure</h4>
        <p>Every canonical measure received a dedicated markdown file with five sections: <em>Definition</em>, <em>Measurement Methods</em>, <em>Aliases Used in Literature</em>, <em>Key Note</em> (interpretive commentary), and <em>Papers Measuring This</em>.</p>

        <h4>Step 4, Linkage validation</h4>
        <p>An automated tool verifies that each article's measures are correctly linked to the canonical-measure files that subsume them. The tool uses regex pattern matching against a curated alias index for each CM, and flags articles where a measure's alias appears but the article is missing from the CM's paper list. False positives are managed through an explicit suppress list. The tool runs in CI on every commit.</p>

        <h4>Key splits the derivation produced</h4>
        <p>The bottom-up process surfaced five places where what looked like a single measure in the literature is in fact several distinct constructs with different evidence patterns:</p>

        <div style={{margin:'14px 0 8px'}}>
          <div className="split-row">
            <div className="from">Burnout</div>
            <div className="arrow">→</div>
            <div className="to">
              <ul>
                <li>CM-01 Clinician Burnout and Exhaustion</li>
                <li>CM-02 Cognitive and Task Load</li>
                <li>CM-03 Professional Fulfillment and Meaningfulness</li>
              </ul>
              <div className="note">The Afshar 2025b RCT proved these are dissociable.</div>
            </div>
          </div>

          <div className="split-row">
            <div className="from">Documentation time</div>
            <div className="arrow">→</div>
            <div className="to">
              <ul>
                <li>CM-04 Documentation Time</li>
                <li>CM-05 After-Hours Documentation</li>
                <li>CM-06 Chart Closure Timeliness</li>
                <li>CM-07 Total EHR Time</li>
              </ul>
              <div className="note">Each has a distinct null/significance pattern across the corpus.</div>
            </div>
          </div>

          <div className="split-row">
            <div className="from">Note quality</div>
            <div className="arrow">→</div>
            <div className="to">
              <ul>
                <li>CM-08 Note Completeness and Omission Rate</li>
                <li>CM-09 Note Inaccuracy Rate</li>
                <li>CM-10 Note Quality Overall</li>
                <li>CM-11 Note Length and Verbosity</li>
                <li>CM-12 Automated NLP Evaluation Metrics</li>
              </ul>
              <div className="note">Omissions and inaccuracies behave differently and warrant separate tracking.</div>
            </div>
          </div>

          <div className="split-row">
            <div className="from">Financial outcomes</div>
            <div className="arrow">→</div>
            <div className="to">
              <ul>
                <li>CM-20 Financial Productivity and Revenue Impact</li>
                <li>CM-21 Coding Accuracy ICD-10 HCC and EM</li>
                <li>CM-22 Patient Volume and Throughput</li>
              </ul>
              <div className="note">Coding accuracy converges; productivity and throughput do not.</div>
            </div>
          </div>

          <div className="split-row">
            <div className="from">Patient outcomes</div>
            <div className="arrow">→</div>
            <div className="to">
              <ul>
                <li>CM-17 Patient Experience and Relationship Quality</li>
                <li>CM-18 Physician-Patient Interaction Quality</li>
                <li>CM-19 Clinical Patient Safety</li>
              </ul>
              <div className="note">All three are evidentially weak; separating them clarifies which gap is which.</div>
            </div>
          </div>
        </div>

        <h4>Honest limitations</h4>
        <ul>
          <li><em>Clustering subjectivity.</em> Boundary decisions involved judgment. A different team might have placed "Job Satisfaction" in CM-03 (Professional Fulfillment) rather than CM-15 (Provider Satisfaction); both placements are defensible.</li>
          <li><em>Alias completeness.</em> The pattern matching used in linkage validation depends on the alias indexes being comprehensive. New terminology in future articles may not match existing patterns and will require manual addition.</li>
          <li><em>Qualitative vs. quantitative.</em> Some links involve qualitative mentions of a construct (a clinician describing accuracy concerns in an interview) rather than quantitative measurement. These are included as evidence but represent a weaker signal than instrumented measurement.</li>
          <li><em>One-directional validation.</em> The linkage tool checks whether articles measuring a construct are listed in the corresponding CM. It does not check the reverse, whether every article listed in a CM actually measures that construct. A future reverse pass would strengthen confidence.</li>
          <li><em>Single-reviewer extraction.</em> Most articles were abstracted by a single reviewer. Inter-rater reliability is not formally established for this corpus.</li>
        </ul>

        <p style={{marginTop:18, fontSize:14}}>
          <a href={`${REPO_BASE}/Templates/Canonical Measure Derivation Methodology.md`} target="_blank" rel="noopener" className="ext">Read the full derivation methodology on GitHub →</a>
        </p>
      </AccordionSection>

      {/* SECTION 5, REPRODUCIBILITY */}
      <AccordionSection
        num="5"
        title="Reproducibility & maintenance"
        sub="The vault, the scripts, and how to contribute."
      >
        <p>Everything on this site is generated from a single source of truth: an <strong>Obsidian vault of markdown files</strong> hosted in a public GitHub repository. The site itself is a derivative artifact, regenerated automatically when the vault changes.</p>

        <h4>Source of truth</h4>
        <p>The vault contains four directories, each of which contributes to the site:</p>
        <ul>
          <li><code>Articles/</code>, one markdown file per reviewed article</li>
          <li><code>Canonical Measures/</code>, one file per canonical measure (CM-01 through CM-25)</li>
          <li><code>Draft Measures/</code>, one file per draft measure (DM-01 through DM-12)</li>
          <li><code>D&M Dimensions/</code>, one file per dimension</li>
        </ul>

        <h4>The two scripts that maintain it</h4>
        <p>Two Node.js scripts in the repository keep the vault internally consistent and produce the JSON consumed by the site:</p>
        <ul>
          <li><code>scripts/link-article.js</code>, reads an article's Study Measures table and ensures the article is correctly listed in every CM and dimension file whose patterns its measures match. Has read-only and <code>--fix</code> modes.</li>
          <li><code>scripts/extract-data.js</code>, walks the vault and produces the four JSON files in <code>docs/data/</code> that the site reads at load time. Includes a post-build linkage validation pass.</li>
        </ul>

        <h4>Continuous integration</h4>
        <p>A GitHub Actions workflow runs on every push to <code>main</code>: it executes <code>link-article.js --all --fix</code>, regenerates JSON via <code>extract-data.js</code>, and commits the result. The site is served from <code>/docs</code> via GitHub Pages. The version stamp on the masthead corresponds to a specific commit.</p>

        <h4>Contributing</h4>
        <p>The framework is intended to grow. Contributions are welcome via pull request to the repository:</p>
        <ul>
          <li>New article reviews following the Article Review Template (full text required)</li>
          <li>Refinements to canonical measure definitions or alias indexes</li>
          <li>Additional draft measures with rationale and validation questions</li>
          <li>Methodological improvements to the derivation or linkage process</li>
        </ul>

        <h4>License & community norm</h4>
        <p>This work is licensed under <strong>Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</strong>. You are free to share and adapt the work, including for commercial purposes, under two conditions: attribution and ShareAlike. Beyond the legal terms, there is a community norm, if you extend this work (new reviews, refined measures, new dimensions), contribute those additions back. The framework gets better when its users keep it current.</p>

        <h4>Citation</h4>
        <div style={{padding:'14px 18px', borderLeft:'3px solid var(--accent)', background:'#faf6ea', margin:'10px 0 14px', fontFamily:'Newsreader, serif', fontSize:15, fontStyle:'italic', color:'var(--ink-2)', lineHeight:1.55}}>
          Biondich, P., Vest, J., Allen, K., Amlung, J., &amp; Thomas, J. (2026). <em>Evaluating Ambient Clinical Intelligence: A Structured Evidence Review Using the DeLone &amp; McLean IS Success Model.</em> Available at: https://pbiondich.github.io/aci/v3/
        </div>

        <h4>Authors</h4>
        <div className="pill-row" style={{margin:'10px 0 14px'}}>
          <span className="pill">Paul Biondich</span>
          <span className="pill">Josh Vest</span>
          <span className="pill">Katie Allen</span>
          <span className="pill">Joe Amlung</span>
          <span className="pill">Jamie Thomas</span>
        </div>

        <p style={{marginTop:18, fontSize:14, display:'flex', gap:18, flexWrap:'wrap'}}>
          <a href="https://github.com/pbiondich/aci" target="_blank" rel="noopener" className="ext">Repository on GitHub →</a>
          <a href={`${REPO_BASE}/README.md`} target="_blank" rel="noopener" className="ext">README</a>
          <a href={`${REPO_BASE}/LICENSE`} target="_blank" rel="noopener" className="ext">License (CC BY-SA 4.0)</a>
        </p>
      </AccordionSection>
    </div>
  );
}

/* ========================================================================
   MAPPING GUIDE, sub-page detailing each D&M dimension's decision rules
   ======================================================================== */

function MappingGuideTab({ setTab }) {
  const dims = [
    {
      code:'SQ', name:'System Quality',
      q:'Does the tool itself work reliably and accurately?',
      yes: [
        'Transcription accuracy (e.g., Word Error Rate)',
        'Speaker diarization accuracy (who said what)',
        'System reliability, uptime, latency',
        'Medical Term Recall, clinical vocabulary capture in transcription',
        'Automated pipeline evaluation (LLM-as-evaluator agreement, benchmark availability)',
        'Specialty coverage in evaluation datasets, as a proxy for breadth of technical validity'
      ],
      no: [
        'Note quality (IQ, the output rather than the machine',
        'Provider experience with the system (US or SerQ'
      ]
    },
    {
      code:'IQ', name:'Information Quality',
      q:'Is the output, the note, accurate, complete, and useful?',
      yes: [
        'Note accuracy and factual correctness',
        'Hallucination rate or fabricated content',
        'Note completeness, whether all clinically relevant elements are captured',
        'ICD-10 and coding accuracy (quality of diagnostic coding in the note)',
        'Documentation quality instruments (PDQI-9, SAIL, etc.)',
        'ROUGE / BERTScore, automated note similarity to reference',
        'Fluency, clarity, readability, human-rated',
        'Word count and lexical diversity, as note structure proxies',
        'Medication capture accuracy (e.g., new medication documentation)'
      ],
      no: [
        'Time to create the note (II)',
        'Provider satisfaction with the note (US, the feeling rather than the artifact'
      ]
    },
    {
      code:'SerQ', name:'Service Quality',
      q:'Is the vendor and deployment experience effective and supportive?',
      yes: [
        'Patient consent compliance (governance/regulatory implementation responsibility)',
        'Onboarding and training quality',
        'EHR integration experience (FHIR, API, technical support responsiveness)',
        'Learning curve and workflow adaptation support',
        'Implementation barriers related to access, training, rollout',
        'Governance model effectiveness'
      ],
      no: [
        'Provider satisfaction with the product itself (US)',
        'Adoption rates (U'
      ]
    },
    {
      code:'U', name:'Use / Intention to Use',
      q:'Do people actually use it, and how much?',
      yes: [
        'Utilization rate (% of eligible encounters using ambient AI)',
        'Voice memo / recording frequency',
        'Adoption stratification (high/medium/low user groups)',
        'Implementation intent and willingness to continue using',
        'Adoption behavior over time, uptake trends, attrition'
      ],
      no: [
        'Satisfaction with the tool (US)',
        'Why people don\'t use it, those are SerQ or US depending on nature'
      ]
    },
    {
      code:'US', name:'User Satisfaction',
      q:'How do people subjectively experience the tool?',
      yes: [
        'Burnout measures (validated instruments like MBI, single-item burnout)',
        'Provider well-being surveys',
        'Perceived documentation burden (self-reported, not clock time)',
        'NASA-TLX and other subjective workload instruments',
        'Provider satisfaction scores and Likert ratings',
        'Sentiment analysis of provider feedback',
        'Trust in AI and skepticism',
        'Specialty-specific satisfaction variation',
        'Patient engagement perceived from the provider\'s perspective'
      ],
      no: [
        'Objective time savings (II)',
        'Note quality ratings (IQ, unless it is the provider\'s perception of quality'
      ]
    },
    {
      code:'II', name:'Individual Impact',
      q:'What downstream outcomes accrue to the individual clinician?',
      yes: [
        'Objective documentation time (clock-measured)',
        'Work Outside Work / after-hours EHR time',
        'Documentation efficiency (time from encounter end to signed note)',
        'Note length, as an output efficiency proxy',
        'Cognitive load reduction measured objectively',
        'Time savings translated to clinical activity'
      ],
      no: [
        'Provider feelings about time savings (US, perception',
        'Note quality (IQ)',
        'Organization-level financial outcomes (OI'
      ]
    },
    {
      code:'OI', name:'Organizational Impact',
      q:'What downstream outcomes accrue to the system, organization, or patient?',
      yes: [
        'Revenue per encounter, RVU productivity',
        'Coding accuracy as financial / compliance impact (also IQ)',
        'Patient throughput and visit volume',
        'Clinical quality indicators (HEDIS capture, HCC documentation)',
        'Patient care outcomes and patient safety, when present',
        'Patient experience and patient-facing quality measures'
      ],
      no: [
        'Clinician-level time savings (II)',
        'Note quality (IQ)',
        'Provider satisfaction (US'
      ]
    }
  ];

  const dual = [
    { measure:'ICD-10 Coding Accuracy', tags:'IQ + OI', why:'Note quality plus compliance / revenue impact' },
    { measure:'Work Outside Work (WOW)', tags:'II + US', why:'Efficiency outcome plus well-being proxy' },
    { measure:'NASA-TLX', tags:'US + II', why:'Subjective perception plus workload reduction outcome' },
    { measure:'Documentation Quality (provider-rated)', tags:'IQ + US', why:'Note quality plus a satisfaction signal' },
    { measure:'Patient Engagement', tags:'US + OI', why:"Provider's felt experience plus care quality outcome" },
    { measure:'Willingness to Adopt', tags:'U + US', why:'Adoption intent plus satisfaction signal' }
  ];

  return (
    <div className="page narrow">
      <div style={{marginBottom:24}}>
        <button onClick={() => { window.location.hash = 'methods'; }}
          style={{background:'none', border:'none', cursor:'pointer', fontFamily:'Inter, sans-serif', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--ink-3)', padding:0, marginBottom:18}}>
          ← Back to Methods
        </button>
        <div className="smallcaps">IX · Methods · Mapping Guide</div>
        <h1 className="display" style={{fontSize:48, marginTop:8}}>The D&M <span className="em accent">mapping</span> guide.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>
          The decision rules used when tagging study measures to D&M dimensions, written so the mapping logic is consistent across every paper in the corpus and auditable by any reader.
        </p>
      </div>

      <div className="grid-feature" style={{marginBottom:40}}>
        <div className="body-text">
          <p>This guide exists because measures rarely arrive in the literature with their dimension neatly labeled. "Documentation burden" can be a stopwatch (II) or a survey item (US); "ICD-10 accuracy" is both an artifact-quality measure (IQ) and a financial outcome (OI). What follows is the rule set we use to make those calls consistently.</p>
          <p>For each of the seven dimensions: the <em>core question</em>, what gets <em>assigned</em> to it, and what <em>does not</em>. Dual-coding rules close out the document.</p>
        </div>
        <aside className="aside">
          When in doubt, ask: is this measuring the thing, or the person's feeling about the thing? That distinction does most of the work.
        </aside>
      </div>

      {dims.map(d => (
        <div key={d.code} style={{marginBottom:36, paddingBottom:32, borderBottom:'1px solid var(--rule)'}}>
          <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:8}}>
            <DimTag code={d.code}/>
            <h2 className="section" style={{margin:0}}>{d.name}</h2>
          </div>
          <p style={{fontFamily:'Newsreader, serif', fontStyle:'italic', fontSize:18, color:'var(--ink-2)', margin:'4px 0 18px', lineHeight:1.4}}>
            {d.q}
          </p>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}} className="dim-rules-grid">
            <div>
              <h4 className="mini" style={{color:'var(--green, #2d6a4f)', marginBottom:10}}>✓ Assign when</h4>
              <ul style={{margin:0, paddingLeft:20, fontSize:14, lineHeight:1.55, color:'var(--ink-2)'}}>
                {d.yes.map((y, i) => <li key={i} style={{marginBottom:6}}>{y}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="mini" style={{color:'#a85a3a', marginBottom:10}}>✗ Do not assign for</h4>
              <ul style={{margin:0, paddingLeft:20, fontSize:14, lineHeight:1.55, color:'var(--ink-2)'}}>
                {d.no.map((n, i) => <li key={i} style={{marginBottom:6}}>{n}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div style={{marginTop:24}}>
        <h2 className="section" style={{marginBottom:6}}>Dual-coding rules</h2>
        <p style={{fontSize:16, color:'var(--ink-2)', lineHeight:1.6, marginBottom:18, maxWidth:720}}>
          Some measures legitimately span two dimensions. When dual-coding, list both. Common pairs encountered in this corpus:
        </p>
        <div style={{border:'1px solid var(--ink)', background:'var(--paper)'}}>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 3fr', gap:16, padding:'12px 18px', borderBottom:'1px solid var(--ink)', background:'#faf6ea'}}>
            <div className="smallcaps">Measure</div>
            <div className="smallcaps">Dimensions</div>
            <div className="smallcaps">Why</div>
          </div>
          {dual.map((r, i) => (
            <div key={i} style={{display:'grid', gridTemplateColumns:'2fr 1fr 3fr', gap:16, padding:'14px 18px', borderBottom: i < dual.length-1 ? '1px dotted var(--rule)' : 'none', alignItems:'center'}}>
              <div style={{fontFamily:'Newsreader, serif', fontSize:16, color:'var(--ink)'}}>{r.measure}</div>
              <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:13, color:'var(--accent)', fontWeight:500}}>{r.tags}</div>
              <div style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.5}}>{r.why}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{marginTop:40, padding:'24px 28px', border:'1px solid var(--ink)', background:'var(--paper)'}}>
        <h4 className="mini" style={{marginBottom:10}}>When to flag uncertainty</h4>
        <p style={{fontSize:15, color:'var(--ink-2)', lineHeight:1.6, marginBottom:0}}>
          Add a note in the article review when (a) the paper does not define how a measure was operationalized, (b) the same label is used for both subjective and objective data in the study (e.g., "documentation burden"), or (c) a vendor-provided metric lacks external validation.
        </p>
      </div>

      <p style={{marginTop:32, fontSize:14, display:'flex', gap:18, flexWrap:'wrap'}}>
        <a href={`${REPO_BASE}/Templates/D%26M Mapping Guide.md`} target="_blank" rel="noopener" className="ext">Source on GitHub →</a>
        <button onClick={() => { window.location.hash = 'methods'; }}
          style={{background:'none', border:'none', cursor:'pointer', fontFamily:'Inter, sans-serif', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.14em', color:'var(--ink-3)', padding:0}}>
          ← Back to Methods
        </button>
      </p>
    </div>
  );
}

Object.assign(window, {
  OverviewTab, MeasuresTab, DraftsTab, GuideTab,
  ArticlesTab, ArticleModal, FrameworkTab, CorpusTab, RigorTab,
  MethodsTab, MappingGuideTab
});
