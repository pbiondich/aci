/* Tab components */
const { useState: useStateT, useMemo: useMemoT, useEffect: useEffectT } = React;

/* ========================================================================
   OVERVIEW — hero essay + headline findings + dimension overview
   ======================================================================== */
function OverviewTab({ articles, measures, draftMeasures, setTab }) {
  const yearCounts = useMemoT(() => {
    const c = {};
    articles.forEach(a => { const y = a.year || 'Unknown'; c[y] = (c[y]||0)+1; });
    return Object.entries(c).filter(([y]) => y !== 'Unknown').sort((a,b) => a[0].localeCompare(b[0]));
  }, [articles]);

  const dimCounts = useMemoT(() => ({
    NB: 41, US: 35, IQ: 31, U: 13, SQ: 14, SerQ: 8
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
              <div className="val">v.22 · April 2026</div>
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
        <div className="stat-cell"><div className="num">6</div><div className="label">D&M dimensions</div></div>
        <div className="stat-cell"><div className="num">3</div><div className="label">Randomized trials</div></div>
      </div>

      <div className="page">
        {/* INTRO ESSAY */}
        <div className="grid-feature" style={{marginBottom:72}}>
          <div className="body-text" style={{fontSize:18, lineHeight:1.65}}>
            <p style={{fontSize:18, color:'var(--ink)'}}>
              Ambient clinical intelligence... AI that listens to a clinical conversation and writes the note, has become one of the fastest-adopted categories in modern healthcare. Yet the published evidence evaluating these tools remains <em>fragmented, heterogeneous, and methodologically uneven</em>.
            </p>
            <p>This review takes a bottom-up approach. Rather than impose an a priori taxonomy, every outcome measure was extracted verbatim from each study's methods section, clustered into conceptually distinct constructs, and mapped to one of six dimensions from the DeLone & McLean Information Systems Success Model. The result is a twenty-five-measure vocabulary for comparing results across an otherwise incoherent body of work.</p>
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
            <h3 className="sub"><em>Net Benefits and User Satisfaction dominate; the upstream quality dimensions are thin.</em></h3>
            <div style={{marginTop:24}}>
              {Object.entries(dimCounts).map(([code, n]) => (
                <div key={code} style={{display:'grid', gridTemplateColumns:'60px 1fr 40px', gap:12, alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--rule)'}}>
                  <div><DimTag code={code}/></div>
                  <div style={{height:10, background:'var(--paper-2)', position:'relative'}}>
                    <div style={{width:(n/maxDim)*100+'%', height:'100%', background:`var(--${code === 'NB' ? 'accent' : 'ink'})`}}/>
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
   MEASURES — canonical list with inline expand
   ======================================================================== */
function MeasuresTab({ measures, expanded, setExpanded, articles, onSelectArticle }) {
  const [q, setQ] = useStateT('');
  const [dim, setDim] = useStateT('');
  const [domain, setDomain] = useStateT('');

  const domains = useMemoT(() => [...new Set(measures.map(m => m.domain).filter(Boolean))], [measures]);

  const filtered = useMemoT(() => measures.filter(m => {
    if (q && !(m.name + ' ' + m.definition + ' ' + m.id).toLowerCase().includes(q.toLowerCase())) return false;
    if (dim && primaryDim(m.dimension) !== dim) return false;
    if (domain && m.domain !== domain) return false;
    return true;
  }), [measures, q, dim, domain]);

  const grouped = useMemoT(() => {
    const g = {};
    filtered.forEach(m => { const d = m.domain || 'Other'; if (!g[d]) g[d] = []; g[d].push(m); });
    return g;
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
            {DIM_CODES.map(d => <option key={d} value={d}>{d} — {DIM_LONG[d]}</option>)}
          </select>
        </div>
        <div>
          <div className="smallcaps" style={{marginBottom:4}}>Domain</div>
          <select className="select-field" value={domain} onChange={e => setDomain(e.target.value)}>
            <option value="">All domains</option>
            {domains.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* GROUPED LIST */}
      {Object.entries(grouped).map(([dom, ms]) => (
        <div key={dom} style={{marginBottom:48}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:4}}>
            <h2 className="section">{dom}</h2>
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
   DRAFT MEASURES — stakeholder-originated research agenda
   ======================================================================== */
function DraftsTab({ drafts, expanded, setExpanded }) {
  const STAKE_COLOR = { CFO:'var(--green)', CMIO:'var(--blue)', COO:'var(--accent-2)', CPO:'var(--purple)' };

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

              <div style={{marginTop:16, fontSize:11, color:'var(--ink-3)', fontFamily:'Inter', letterSpacing:'0.08em', textTransform:'uppercase'}}>{isExp ? '— Close' : '+ Full proposal'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ========================================================================
   DECISION GUIDE — stakeholder-filtered measures
   ======================================================================== */
function GuideTab({ measures, drafts, role, setRole }) {
  const ROLES = [
    { id:'CMIO', title:'Chief Medical Information Officer', sub:'Clinical systems, adoption, provider experience', dims:['US','U','IQ'] },
    { id:'CFO',  title:'Chief Financial Officer', sub:'ROI, cost of ownership, productivity', dims:['NB'] },
    { id:'COO',  title:'Chief Operating Officer', sub:'Throughput, operations, implementation', dims:['NB','SerQ'] },
    { id:'CPO',  title:'Chief Patient Officer', sub:'Patient experience and safety', dims:['NB','US'] }
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
          <h4 className="mini">Gaps the {role} would want filled <span style={{textTransform:'none', fontStyle:'italic', color:'var(--ink-3)', letterSpacing:0}}>— pending research</span></h4>
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
   ARTICLES — editorial table + modal
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
              <td className="year-cell">{a.year || '—'}</td>
              <td>
                <div className="title-cell">{a.title || a.id}
                  {a.authors && <span className="authors">{a.authors}</span>}
                </div>
              </td>
              <td className="design-cell">{a.studyDesign || '—'}</td>
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
    <Modal onClose={onClose} eyebrow={`${a.year || '—'} · ${a.studyDesign || 'Study'}`} title={a.title || a.id}>
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
   FRAMEWORK — D&M dimension detail
   ======================================================================== */
function FrameworkTab({ dimensions, measures, articles }) {
  const byDim = useMemoT(() => {
    const g = {};
    measures.forEach(m => { const d = primaryDim(m.dimension); if (!g[d]) g[d] = []; g[d].push(m); });
    return g;
  }, [measures]);

  const dimOrder = ['SQ','IQ','SerQ','U','US','NB'];

  return (
    <div className="page">
      <div style={{marginBottom:32}}>
        <div className="smallcaps">VI · D&M Framework</div>
        <h1 className="display" style={{fontSize:54, marginTop:8}}>DeLone & McLean,<br/><span className="em">applied to ambient AI</span>.</h1>
        <p className="lede" style={{marginTop:16, maxWidth:720}}>Six dimensions arranged as a causal chain: quality precedes use, use produces outcomes, outcomes feed back.</p>
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
            <div className="dm-node" style={{borderColor:'var(--accent)', background:'#faf1ea'}}>
              <div className="code" style={{color:'var(--accent)'}}>NB</div>
              <div className="name">{DIM_LONG.NB}</div>
              <div className="count">{(byDim.NB||[]).length} measures</div>
            </div>
          </div>
        </div>
        <p className="footnote" style={{textAlign:'center', marginTop:20}}>Quality dimensions → Use & Satisfaction → Net Benefits → (feedback)</p>
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
                    <div>{d.belongsHere.map((b, i) => <div key={i} style={{padding:'4px 0', fontSize:14, color:'var(--ink-2)', fontStyle:'italic'}}>— {b}</div>)}</div>
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
   CORPUS — statistics
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
   RIGOR — evidence profile cards with tier badges
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
          <div key={d.id} title={d.id + ' — ' + d.name} style={{
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

                    {/* Study designs — full width */}
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
          <p>The self-report / objective divergence is the most reproducible methodological finding across the corpus: clinicians consistently report larger improvements than objective data confirm — for documentation time (two to six times overestimated), after-hours documentation (positive self-report, null objective), patient experience (positive in open-label, null in masked), and burnout (QI estimates two to four times larger than RCT).</p>
          <p>The near-total absence of real-world patient safety data is the most critical gap. Ambient AI generates safety-critical clinical documentation without systematic post-market safety surveillance. The field is deploying tools at scale without the safety-monitoring infrastructure expected for medical devices or pharmaceuticals.</p>
        </div>
        <aside className="aside">
          Two to six times. That is the typical ratio between what clinicians say ambient AI saves them and what the EHR logs actually show.
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, {
  OverviewTab, MeasuresTab, DraftsTab, GuideTab,
  ArticlesTab, ArticleModal, FrameworkTab, CorpusTab, RigorTab
});
