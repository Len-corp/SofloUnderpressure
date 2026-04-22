// Flyer + business card composition

const Flyer = () => (
  <div className="board flyer grain">
    <div className="header-rail">
      <div><span className="dot"></span>SoFlo UnderPressure</div>
      <div>Miami · Fl · Ocean Drive Deco</div>
      <div>Est. 2026</div>
    </div>

    {/* Primary badge dominates the top — it IS the brand */}
    <div className="hero-badge">
      <img data-logo="primary" alt="SoFlo UnderPressure" />
    </div>

    {/* Tagline band under the badge */}
    <div className="tagline">
      <div className="tag-dash"></div>
      <div className="tag-text">
        <em>Miami grime,</em> meet your match.
      </div>
      <div className="tag-dash"></div>
    </div>

    {/* Services: 3 cols x 2 rows */}
    <div className="services">
      {[
        ['01','Driveways','Tire marks, oil, moss — lifted. Concrete restored.'],
        ['02','Pool Decks','Pavers, travertine, Chattahoochee. Bright again.'],
        ['03','Roof Soft-Wash','Low-pressure treatment. Algae killed at the root.'],
        ['04','Facades & Stucco','Salt spray and algae gone. Storefronts, condos.'],
        ['05','Fleet & Boats','Hulls, trailers, work trucks. Marina or yard.'],
        ['06','Rust Removal','Stains gone. No etching, no ghosting, no streaks.'],
      ].map(([n, name, desc]) => (
        <div className="svc" key={n}>
          <div className="num">Service · {n}</div>
          <div className="name">{name}</div>
          <div className="desc">{desc}</div>
        </div>
      ))}
    </div>

    {/* Pitch + stamp */}
    <div className="pitch">
      <div className="quote">
        One man. <b>Every job, personally.</b> No rushed crews, no streaks, no missed corners — just Miami surfaces, brought back to bright.
      </div>
      <div className="stamp">
        <div className="inner">
          <span className="sm">Free</span>
          <span className="big">Quote</span>
          <span className="sm">in 24 hrs</span>
        </div>
      </div>
    </div>

    {/* Coral call strip */}
    <div className="call">
      <div>
        <div className="eyeb">Call or text</div>
        <div className="phone">786·498·0896</div>
      </div>
      <div className="contact">
        <div style={{ fontFamily: "'Major Mono Display', monospace", fontSize: 10, letterSpacing: '0.28em', opacity: 0.85, marginBottom: 6 }}>Email</div>
        <div>soflounderpressure<br/>@gmail.com</div>
      </div>
      <svg className="qr" viewBox="0 0 100 100" aria-hidden="true">
        <rect width="100" height="100" fill="#F5EAD2"/>
        <rect x="6" y="6" width="24" height="24" fill="#0B2A34"/>
        <rect x="10" y="10" width="16" height="16" fill="#F5EAD2"/>
        <rect x="13" y="13" width="10" height="10" fill="#0B2A34"/>
        <rect x="70" y="6" width="24" height="24" fill="#0B2A34"/>
        <rect x="74" y="10" width="16" height="16" fill="#F5EAD2"/>
        <rect x="77" y="13" width="10" height="10" fill="#0B2A34"/>
        <rect x="6" y="70" width="24" height="24" fill="#0B2A34"/>
        <rect x="10" y="74" width="16" height="16" fill="#F5EAD2"/>
        <rect x="13" y="77" width="10" height="10" fill="#0B2A34"/>
        {Array.from({length: 60}).map((_, i) => {
          const x = (i * 13) % 12;
          const y = Math.floor((i * 13) / 12) % 12;
          if ((x < 4 && y < 4) || (x > 7 && y < 4) || (x < 4 && y > 7)) return null;
          const on = ((i * 37) % 7) > 2;
          if (!on) return null;
          return <rect key={i} x={6 + x*7} y={6 + y*7} width="5" height="5" fill="#0B2A34"/>;
        })}
      </svg>
    </div>

    <div className="foot-rail">
      <span>soflounderpressure.com</span>
      <span className="dash"></span>
      <span>Licensed · Insured · Owner-operated</span>
    </div>
  </div>
);

const CardFront = () => (
  <div className="board card front grain">
    <div className="left">
      <svg className="rays" viewBox="-200 -200 400 400"><use href="#deco-rays"/></svg>
      <div className="drop"></div>
      <div className="eyebrow">Ocean Drive · Est. 2026</div>
      <div>
        <div className="soflo">SoFlo</div>
        <div className="under">UnderPressure</div>
      </div>
      <div style={{position:'relative', zIndex:2, fontFamily: "'Major Mono Display', monospace", fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--cream)', opacity: 0.7}}>
        Miami · Fl
      </div>
    </div>
    <div className="right">
      <div className="hdr">Owner · Operator</div>
      <div>
        <div className="name">Adam Saullen</div>
        <div className="title">Pressure Washing · Soft Wash</div>
      </div>
      <div className="sep"></div>
      <div className="contact">
        <div className="row"><span className="lbl">Call</span><span>786·498·0896</span></div>
        <div className="row"><span className="lbl">Email</span><span>soflounderpressure@gmail.com</span></div>
        <div className="row"><span className="lbl">Web</span><span>soflounderpressure.com</span></div>
      </div>
      <div className="foot">Licensed · Insured · 305</div>
    </div>
  </div>
);

const CardBack = () => (
  <div className="board card back grain">
    <svg className="rays" viewBox="-200 -200 400 400"><use href="#deco-rays"/></svg>
    <div className="corners"></div>
    <div className="inner">
      <div className="lim">
        One Man.
        <em>Every job, personally.</em>
      </div>
      <div className="tag">Driveways · Pool decks · Roofs · Facades · Boats</div>
    </div>
  </div>
);

// Inject logo data URIs once React is mounted
function useLogos(ref) {
  React.useEffect(() => {
    if (!window.SOFLO_LOGOS) return;
    document.querySelectorAll('img[data-logo]').forEach(img => {
      const k = img.getAttribute('data-logo');
      if (window.SOFLO_LOGOS[k]) img.src = window.SOFLO_LOGOS[k];
    });
  });
}

const App = () => {
  useLogos();
  return (
    <DesignCanvas>
      <DCSection id="flyer" title="Flyer" subtitle="Letter · 8.5 × 11 in">
        <DCArtboard id="flyer-1" label="A · Deco Badge" width={816} height={1056}>
          <Flyer />
        </DCArtboard>
      </DCSection>

      <DCSection id="card" title="Business Card" subtitle="Standard US · 3.5 × 2 in · front & back">
        <DCArtboard id="card-front" label="Front" width={672} height={384}>
          <CardFront />
        </DCArtboard>
        <DCArtboard id="card-back" label="Back" width={672} height={384}>
          <CardBack />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Also render a print-only linear layout
const printRoot = document.getElementById('print-only');
if (printRoot) {
  ReactDOM.createRoot(printRoot).render(
    <React.Fragment>
      <div className="page"><Flyer /></div>
      <div className="page card-page">
        <CardFront />
        <CardBack />
      </div>
    </React.Fragment>
  );
}
