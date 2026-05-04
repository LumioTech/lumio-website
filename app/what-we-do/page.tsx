import Link from 'next/link';

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}

export default function WhatWeDo() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-mesh tile text-center"
        style={{ paddingTop: '144px', paddingBottom: '100px' }}
      >
        <div className="content-wrap mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'rgba(165,180,252,0.85)' }}>What We Do</p>
          <h1 className="type-hero anim-fade-up" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
            AI That Earns<br />
            <span className="gradient-text">Its Keep</span>
          </h1>
          <p className="type-lead anim-fade-up-1 mx-auto" style={{ color: 'var(--text-white-45)', maxWidth: '580px' }}>
            We build AI-powered products and charge per result — not per seat, not per hour.
          </p>
        </div>
      </section>

      {/* ── RAAS MODEL ───────────────────────────── */}
      <section className="tile tile-canvas">
        <div className="content-wrap mx-auto">
          <h2 className="type-display mb-8" style={{ color: 'var(--text-ink)' }}>The RaaS model</h2>
          <p className="type-body mb-5" style={{ color: 'var(--text-ink-60)' }}>
            Most software charges for access. Most consultants charge for time. Neither model aligns incentives — they get paid whether or not you see results.
          </p>
          <p className="type-body mb-5" style={{ color: 'var(--text-ink-60)' }}>
            Lumio charges per result. We define upfront what a delivered result looks like — a report, a score, a data point — and that&apos;s what you pay for. If we don&apos;t deliver, you don&apos;t pay.
          </p>
          <p className="type-body-strong" style={{ color: 'var(--indigo)' }}>
            We win when you win. That&apos;s the only model we believe in.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────── */}
      <section className="tile tile-dark">
        <div className="content-wide mx-auto">
          <div className="mb-12">
            <p className="type-tagline mb-3" style={{ color: 'rgba(165,180,252,0.80)' }}>Our Products</p>
            <h2 className="type-display" style={{ color: 'var(--text-white)' }}>Built to deliver</h2>
          </div>
          <div className="flex flex-col gap-5">
            {/* LocationScore */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(99,102,241,0.12))',
                  border: '1px solid rgba(99,102,241,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--blue-light)',
                }}>
                  <IconPin />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="type-body-strong" style={{ color: '#ffffff' }}>LocationScore</h3>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)',
                      border: '1px solid rgba(255,255,255,0.14)', borderRadius: '9999px', padding: '2px 8px',
                    }}>Coming soon</span>
                  </div>
                  <p className="type-body mb-5" style={{ color: 'var(--text-white-70)' }}>
                    Location intelligence for entrepreneurs opening a store, restaurant, or café in the Netherlands. Before signing a lease, get a data-driven score across 6 dimensions — foot traffic, demographics, competition, accessibility, neighbourhood trend, and an overall recommendation.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {[
                      'Foot traffic estimate',
                      'Local demographics analysis',
                      'Competition map',
                      'Accessibility score',
                      'Neighbourhood growth trend',
                      'Plain-language recommendation',
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue-light)', flexShrink: 0, marginTop: '5px' }} />
                        <span className="type-caption" style={{ color: 'var(--text-white-70)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-link-dark type-caption">Interested? Contact us for early access →</Link>
                </div>
              </div>
            </div>

            {/* Housing Price Tracker */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12))',
                  border: '1px solid rgba(139,92,246,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--indigo-light)',
                }}>
                  <IconHome />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="type-body-strong" style={{ color: '#ffffff' }}>Dutch Housing Price Tracker</h3>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)',
                      border: '1px solid rgba(255,255,255,0.14)', borderRadius: '9999px', padding: '2px 8px',
                    }}>Coming soon</span>
                  </div>
                  <p className="type-body mb-5" style={{ color: 'var(--text-white-70)' }}>
                    Track house prices across Dutch neighbourhoods — built for buyers, sellers, and people looking to rent. Stop relying on outdated listings. Get consistent, data-driven price tracking that tells you whether to act now or wait.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {[
                      'Neighbourhood price trends',
                      'Buyer vs. seller market signals',
                      'Rental price benchmarking',
                      'Historical price tracking',
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--indigo-light)', flexShrink: 0, marginTop: '5px' }} />
                        <span className="type-caption" style={{ color: 'var(--text-white-70)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-link-dark type-caption">Interested? Contact us for early access →</Link>
                </div>
              </div>
            </div>

            {/* Store Traffic Analytics */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(168,85,247,0.12))',
                  border: '1px solid rgba(168,85,247,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--violet-light)',
                }}>
                  <IconChart />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="type-body-strong" style={{ color: '#ffffff' }}>Store Traffic Analytics</h3>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)',
                      border: '1px solid rgba(255,255,255,0.14)', borderRadius: '9999px', padding: '2px 8px',
                    }}>Coming soon</span>
                  </div>
                  <p className="type-body mb-5" style={{ color: 'var(--text-white-70)' }}>
                    Know how many people walk into your clothing store every day — and what to do about it. We track daily footfall and deliver a periodic analytical report with a concrete strategy to improve traffic and conversion.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {[
                      'Daily visitor count',
                      'Peak hour analysis',
                      'Week-over-week trends',
                      'Actionable strategy report',
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--violet-light)', flexShrink: 0, marginTop: '5px' }} />
                        <span className="type-caption" style={{ color: 'var(--text-white-70)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-link-dark type-caption">Interested? Contact us for early access →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────── */}
      <section className="tile tile-parchment">
        <div className="content-wide mx-auto">
          <h2 className="type-display mb-14" style={{ color: 'var(--text-ink)' }}>How we work</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-14">
            {[
              { num: '1', label: 'Discovery', desc: 'You describe the problem and define what success looks like' },
              { num: '2', label: 'Design', desc: 'We map out the AI solution and agree on the per-result pricing' },
              { num: '3', label: 'Build', desc: 'We build, test, and iterate until the solution is solid' },
              { num: '4', label: 'Deploy', desc: 'The solution goes live, monitored and maintained by us' },
              { num: '5', label: 'Deliver', desc: 'Results land with you. Invoice issued per delivered result' },
            ].map((step) => (
              <div key={step.num} className="util-card text-center">
                <div style={{
                  width: '28px', height: '28px', borderRadius: '9999px',
                  background: 'var(--grad-brand)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
                  boxShadow: '0 2px 8px rgba(37,99,235,0.30)',
                }}>
                  <span className="type-caption-strong" style={{ color: '#ffffff' }}>{step.num}</span>
                </div>
                <p className="type-caption-strong mb-1" style={{ color: 'var(--text-ink)' }}>{step.label}</p>
                <p className="type-fine-print" style={{ color: 'var(--text-ink-60)' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="util-card text-center" style={{ padding: '52px', background: 'var(--bg-canvas)' }}>
            <h2 className="type-display-md mb-4" style={{ color: 'var(--text-ink)' }}>Have a problem that fits the model?</h2>
            <p className="type-body mb-8 mx-auto" style={{ color: 'var(--text-ink-60)', maxWidth: '440px' }}>
              Tell us what result you need. We&apos;ll scope it, price it per result, and build it.
            </p>
            <Link href="/contact" className="btn-pill">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
