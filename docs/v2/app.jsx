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
  { id:'rigor',      label:'Level of Rigor',     idx:'VIII' }
];

function App() {
  const validTabs = TABS.map(t => t.id);
  const getHash = () => {
    const h = window.location.hash.replace('#','');
    return validTabs.indexOf(h) !== -1 ? h : 'overview';
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
          <span className="dot"/>
          <a href="../" style={{color:'var(--ink-3)', textDecoration:'none', letterSpacing:'0.14em'}}>← View classic</a>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          {TABS.map(t => (
            <button key={t.id} className={'nav-item ' + (tab === t.id ? 'active' : '')} onClick={() => setTab(t.id)}>
              <span className="idx">{t.idx}</span>{t.label}
            </button>
          ))}
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
        </main>
      )}

      {selectedArticle && <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)}/>}

      <footer style={{borderTop:'1px solid var(--ink)', marginTop:80, padding:'28px 40px', background:'var(--paper)'}}>
        <div style={{maxWidth:1280, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12, color:'var(--ink-3)', fontFamily:'Inter, sans-serif', letterSpacing:'0.04em', flexWrap:'wrap', gap:12}}>
          <span>Biondich et al. · Evaluating Ambient Clinical Intelligence · v.23</span>
          <span style={{fontStyle:'italic', fontFamily:'Newsreader, serif', fontSize:13}}>54 studies · 494 measure rows · 25 canonical · 12 draft</span>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
