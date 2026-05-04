import Link from 'next/link';

function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-mesh tile"
        style={{ paddingTop: '148px', paddingBottom: '128px', minHeight: '92vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="content-wrap mx-auto text-center">
          <div className="anim-fade-up" style={{ marginBottom: '22px' }}>
            <span className="type-tagline" style={{ color: 'rgba(165,180,252,0.85)', letterSpacing: '0.14em' }}>
              Result as a Service
            </span>
          </div>
          <h1 className="type-hero anim-fade-up-1" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
            We build AI.<br />
            <span className="gradient-text">You pay for results.</span>
          </h1>
          <p
            className="type-lead anim-fade-up-2 mx-auto"
            style={{ color: 'var(--text-white-45)', maxWidth: '520px', marginBottom: '48px' }}
          >
            No licenses. No subscriptions. No hourly fees.
            <br />Define the outcome — we deliver it.
          </p>
          <div className="flex gap-4 justify-center items-center flex-col sm:flex-row anim-fade-up-3">
            <Link href="/what-we-do" className="btn-pill">See what we do</Link>
            <Link href="/contact" className="btn-ghost-pill-dark">Talk to us</Link>
          </div>
        </div>

        {/* Floating stat chips — desktop only */}
        <div
          className="anim-float hidden lg:block"
          style={{ position: 'absolute', top: '32%', left: '7%' }}
        >
          <div className="glass-card" style={{ padding: '14px 20px' }}>
            <p className="type-fine-print" style={{ color: 'var(--text-white-45)', marginBottom: '5px' }}>Pricing model</p>
            <p className="type-body-strong gradient-text">Per result only</p>
          </div>
        </div>
        <div
          className="hidden lg:block"
          style={{ position: 'absolute', bottom: '24%', right: '7%', animation: 'float 6s ease-in-out 0.8s infinite' }}
        >
          <div className="glass-card" style={{ padding: '14px 20px' }}>
            <p className="type-fine-print" style={{ color: 'var(--text-white-45)', marginBottom: '5px' }}>Risk model</p>
            <p className="type-body-strong" style={{ color: 'var(--text-white)' }}>100% on us</p>
          </div>
        </div>
      </section>

      {/* ── RAAS DIFFERENCE ──────────────────────── */}
      <section className="tile tile-dark text-center">
        <div className="content-wrap mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'rgba(165,180,252,0.80)' }}>The RaaS Difference</p>
          <h2 className="type-display mb-4" style={{ color: 'var(--text-white)' }}>Why RaaS changes everything</h2>
          <p className="type-body mx-auto mb-14" style={{ color: 'var(--text-white-45)', maxWidth: '520px' }}>
            Traditional models put the risk on you. We put it on us.
          </p>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            <div className="glass-card-dim" style={{ padding: '28px' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: '#f87171',
              }}>
                <IconX />
              </div>
              <h3 className="type-body-strong mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>Traditional SaaS</h3>
              <p className="type-caption mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Buy a subscription. Learn the platform. Configure it. Get results — maybe. Keep paying regardless.
              </p>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(239,68,68,0.60)' }}>
                Risk on you
              </p>
            </div>

            <div className="glass-card-dim" style={{ padding: '28px' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: '#f87171',
              }}>
                <IconX />
              </div>
              <h3 className="type-body-strong mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>Traditional Consulting</h3>
              <p className="type-caption mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Pay by the hour. Months of meetings. Deliverables that may or may not move the needle.
              </p>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(239,68,68,0.60)' }}>
                Risk on you
              </p>
            </div>

            <div className="glass-card-featured" style={{ padding: '28px' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563eb, #6366f1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: '#ffffff',
                boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
              }}>
                <IconCheck />
              </div>
              <h3 className="type-body-strong mb-2" style={{ color: '#ffffff' }}>Lumio RaaS</h3>
              <p className="type-caption mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Tell us the result you need. We design, build, and run the AI solution. You pay per result delivered.
              </p>
              <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--indigo-light)' }}>
                Risk on us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────── */}
      <section className="tile tile-canvas text-center">
        <div className="content-wide mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'var(--indigo)' }}>What We&apos;ve Built</p>
          <h2 className="type-display mb-4" style={{ color: 'var(--text-ink)' }}>Live products</h2>
          <p className="type-body mx-auto mb-14" style={{ color: 'var(--text-ink-60)', maxWidth: '480px' }}>
            Each product is a result — ready to deliver.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="util-card product-card flex flex-col">
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(99,102,241,0.07))',
                border: '1px solid rgba(99,102,241,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: 'var(--blue)',
              }}>
                <IconPin />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="type-body-strong" style={{ color: 'var(--text-ink)' }}>LocationScore</h3>
                <span style={{
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.07em',
                  textTransform: 'uppercase', color: 'var(--text-ink-60)',
                  border: '1px solid var(--border-light)', borderRadius: '9999px', padding: '2px 8px',
                }}>Soon</span>
              </div>
              <p className="type-caption mb-6 flex-grow" style={{ color: 'var(--text-ink-60)' }}>
                Data-driven location analysis for entrepreneurs opening a store, restaurant, or café. Know before you sign the lease.
              </p>
              <div className="flex items-center justify-between">
                <span className="type-caption" style={{ color: 'var(--text-ink-35)' }}>Contact for pricing</span>
                <Link href="/contact" className="text-link type-caption">Enquire →</Link>
              </div>
            </div>

            <div className="util-card product-card flex flex-col">
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.10), rgba(139,92,246,0.07))',
                border: '1px solid rgba(139,92,246,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: 'var(--indigo)',
              }}>
                <IconHome />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="type-body-strong" style={{ color: 'var(--text-ink)' }}>Housing Price Tracker</h3>
                <span style={{
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.07em',
                  textTransform: 'uppercase', color: 'var(--text-ink-60)',
                  border: '1px solid var(--border-light)', borderRadius: '9999px', padding: '2px 8px',
                }}>Soon</span>
              </div>
              <p className="type-caption mb-6 flex-grow" style={{ color: 'var(--text-ink-60)' }}>
                Track Dutch house prices by neighbourhood. Built for buyers, sellers, and renters who want data — not guesswork.
              </p>
              <div className="flex items-center justify-between">
                <span className="type-caption" style={{ color: 'var(--text-ink-35)' }}>Contact for pricing</span>
                <Link href="/contact" className="text-link type-caption">Enquire →</Link>
              </div>
            </div>

            <div className="util-card product-card flex flex-col">
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.10), rgba(168,85,247,0.07))',
                border: '1px solid rgba(168,85,247,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px', color: 'var(--violet)',
              }}>
                <IconChart />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="type-body-strong" style={{ color: 'var(--text-ink)' }}>Store Traffic Analytics</h3>
                <span style={{
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.07em',
                  textTransform: 'uppercase', color: 'var(--text-ink-60)',
                  border: '1px solid var(--border-light)', borderRadius: '9999px', padding: '2px 8px',
                }}>Soon</span>
              </div>
              <p className="type-caption mb-6 flex-grow" style={{ color: 'var(--text-ink-60)' }}>
                Daily footfall statistics for physical stores, with an analytical report and strategy to improve performance.
              </p>
              <div className="flex items-center justify-between">
                <span className="type-caption" style={{ color: 'var(--text-ink-35)' }}>Contact for pricing</span>
                <Link href="/contact" className="text-link type-caption">Enquire →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="tile tile-parchment text-center">
        <div className="content-wrap mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'var(--indigo)' }}>How It Works</p>
          <h2 className="type-display mb-14" style={{ color: 'var(--text-ink)' }}>Simple by design</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="util-card">
              <p className="step-number mb-5">01</p>
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Tell us your challenge</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                Describe the business problem and the result you need. A report, a score, an insight — you define success.
              </p>
            </div>
            <div className="util-card">
              <p className="step-number mb-5">02</p>
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>We design &amp; build</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                Our team builds a custom AI-powered solution. We agree on what counts as a result before writing a line of code.
              </p>
            </div>
            <div className="util-card">
              <p className="step-number mb-5">03</p>
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Pay per result</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                No upfront cost. No monthly seat fees. You pay when — and only when — the result lands in your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="hero-mesh tile text-center">
        <div className="content-wrap mx-auto">
          <h2 className="type-display mb-5" style={{ color: 'var(--text-white)' }}>
            Have a problem<br />
            <span className="gradient-text">that needs solving?</span>
          </h2>
          <p className="type-body mx-auto mb-10" style={{ color: 'var(--text-white-45)', maxWidth: '420px' }}>
            Tell us what result you need. We&apos;ll come back with a proposal — and a price per result.
          </p>
          <Link href="/contact" className="btn-pill">Let&apos;s talk</Link>
        </div>
      </section>
    </>
  );
}
