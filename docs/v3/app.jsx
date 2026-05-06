/* Root app */
const { useState: useStateA, useEffect: useEffectA } = React;

const TABS = [
  { id:'overview',   label:'Overview',           idx:'I' },
  { id:'measures',   label:'Canonical Measures', idx:'II' },
  { id:'guide',      label:'Decision Guide',     idx:'III' },
  { id:'drafts',     label:'Draft Measures',     idx:'IV' },
  { id:'articles',   label:'Article Explorer',   idx:'V' },
  { id:'framework',  label:'D&M Framework',      idx:'VI' },
  { id:'corpus',     label:'Study Corpus',       idx:'VII' },
  { id:'rigor',      label:'Level of Rigor',     idx:'VIII' },
  { id:'methods',    label:'Methods',            idx:'IX' }
];

/* Hidden routes (not in nav, but valid hashes) */
const SUBPAGES = ['mapping-guide'];

function App() {
  const validTabs = TABS.map(t => t.id);
  const valid = validTabs.concat(SUBPAGES);
  const getHash = () => {
    const h = window.location.hash.replace('#','');
    return valid.indexOf(h) !== -1 ? h : 'overview';
  };
  const [tab, setTabRaw] = useStateA(getHash);
  function setTab(id) {
    window.location.hash = id;
    setTabRaw(id);
    window.scrollTo(0, 0);
  }

  const [articles, setArticles] = useStateA([]);
  const [measures, setMeasures] = useStateA([]);
  const [dimensions, setDimensions] = useStateA([]);
  const [drafts, setDrafts] = useStateA([]);
  const [loaded, setLoaded] = useStateA(false);
  const [selectedArticle, setSelectedArticle] = useStateA(null);
  const [expandedMeasure, setExpandedMeasure] = useStateA(null);
  const [expandedDraft, setExpandedDraft] = useStateA(null);
  const [guideRole, setGuideRole] = useStateA('CMIO');

  useEffectA(() => {
    const onHash = () => setTabRaw(getHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffectA(() => {
    const tryPaths = async (file) => {
      for (const base of ['../data/', 'data/']) {
        try {
          const r = await fetch(base + file);
          if (r.ok) return r.json();
        } catch (e) {}
      }
      return [];
    };
    Promise.all([
      tryPaths('articles.json'),
      tryPaths('measures.json'),
      tryPaths('dimensions.json'),
      tryPaths('draft-measures.json')
    ]).then(([a, m, d, dm]) => {
      setArticles(a); setMeasures(m); setDimensions(d); setDrafts(dm);
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <header className="masthead">
        <div className="masthead-brand">
          <div className="masthead-mark"/>
          <div className="masthead-title">Evaluating Ambient Clinical Intelligence</div>
        </div>
        <div className="masthead-meta">
          <span>Structured Evidence Review</span>
          <span className="dot"/>
          <span>v.23 · Apr 2026</span>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          {TABS.map(t => {
            const active = tab === t.id || (t.id === 'methods' && tab === 'mapping-guide');
            return (
              <button key={t.id} className={'nav-item ' + (active ? 'active' : '')} onClick={() => setTab(t.id)}>
                <span className="idx">{t.idx}</span>{t.label}
              </button>
            );
          })}
        </div>
      </nav>

      {!loaded ? (
        <div className="loading">Loading the corpus…</div>
      ) : (
        <main data-screen-label={tab}>
          {tab === 'overview'  && <OverviewTab articles={articles} measures={measures} draftMeasures={drafts} setTab={setTab}/>}
          {tab === 'measures'  && <MeasuresTab measures={measures} expanded={expandedMeasure} setExpanded={setExpandedMeasure} articles={articles} onSelectArticle={setSelectedArticle}/>}
          {tab === 'guide'     && <GuideTab measures={measures} drafts={drafts} role={guideRole} setRole={setGuideRole}/>}
          {tab === 'drafts'    && <DraftsTab drafts={drafts} expanded={expandedDraft} setExpanded={setExpandedDraft}/>}
          {tab === 'articles'  && <ArticlesTab articles={articles} selected={selectedArticle} setSelected={setSelectedArticle}/>}
          {tab === 'framework' && <FrameworkTab dimensions={dimensions} measures={measures} articles={articles}/>}
          {tab === 'corpus'    && <CorpusTab articles={articles}/>}
          {tab === 'rigor'     && <RigorTab measures={measures} articles={articles}/>}
          {tab === 'methods'   && <MethodsTab setTab={setTab}/>}
          {tab === 'mapping-guide' && <MappingGuideTab setTab={setTab}/>}
        </main>
      )}

      {selectedArticle && <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)}/>}

      <footer style={{borderTop:'1px solid var(--ink)', marginTop:80, padding:'36px 40px 32px', background:'var(--paper)'}}>
        <div style={{maxWidth:1280, margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:48, marginBottom:24}} className="footer-grid">
            <div>
              <div style={{fontFamily:'Newsreader, serif', fontSize:18, fontWeight:500, color:'var(--ink)', marginBottom:6}}>
                Evaluating Ambient Clinical Intelligence
              </div>
              <div style={{fontFamily:'Newsreader, serif', fontStyle:'italic', fontSize:14, color:'var(--ink-2)', lineHeight:1.5, maxWidth:480}}>
                A Structured Evidence Review Using the DeLone &amp; McLean IS Success Model.
                <br/>
                Biondich, P., Vest, J., Allen, K., Amlung, J., &amp; Thomas, J. (2026).
              </div>
            </div>
            <div>
              <div className="smallcaps" style={{marginBottom:8}}>Copyright</div>
              <div style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.55}}>
                © 2026 <a href="https://www.regenstrief.org" target="_blank" rel="noopener" style={{color:'var(--ink-2)', borderBottom:'1px solid var(--rule)', textDecoration:'none'}}>Regenstrief Institute, Inc.</a>
                <br/>
                All rights reserved.
              </div>
            </div>
            <div>
              <div className="smallcaps" style={{marginBottom:8}}>License</div>
              <div style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.55}}>
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener" style={{color:'var(--accent)', borderBottom:'1px solid var(--accent)', textDecoration:'none'}}>CC BY-SA 4.0</a>
                <br/>
                Share &amp; adapt with attribution.
              </div>
            </div>
          </div>
          <div style={{borderTop:'1px solid var(--rule)', paddingTop:18, display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'var(--ink-3)', fontFamily:'Inter, sans-serif', letterSpacing:'0.04em', flexWrap:'wrap', gap:12}}>
            <span>v.23 · April 2026 · 54 studies · 494 measure rows · 25 canonical · 12 draft</span>
            <span style={{display:'flex', gap:18}}>
              <a href="https://github.com/pbiondich/aci" target="_blank" rel="noopener" style={{color:'var(--ink-3)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:600}}>GitHub</a>
              <a href="#methods" style={{color:'var(--ink-3)', textDecoration:'none', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:600}}>Methods</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
