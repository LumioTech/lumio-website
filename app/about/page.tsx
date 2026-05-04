import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-mesh tile text-center"
        style={{ paddingTop: '144px', paddingBottom: '100px' }}
      >
        <div className="content-wrap mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'rgba(165,180,252,0.85)' }}>About Lumio</p>
          <h1 className="type-hero anim-fade-up" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
            Built by Scientists.<br />
            <span className="gradient-text">Driven by Outcomes.</span>
          </h1>
          <p className="type-lead anim-fade-up-1 mx-auto" style={{ color: 'var(--text-white-45)', maxWidth: '580px' }}>
            We come from worlds where the result is everything. We built Lumio on the same principle.
          </p>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────── */}
      <section className="tile tile-canvas">
        <div className="content-wide mx-auto">
          <div className="text-center mb-14">
            <p className="type-tagline mb-4" style={{ color: 'var(--indigo)' }}>Our Team</p>
            <h2 className="type-display" style={{ color: 'var(--text-ink)' }}>The people behind Lumio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="util-card" style={{ padding: '40px' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '16px',
                overflow: 'hidden', border: '1px solid var(--border-light)',
                marginBottom: '24px', background: 'var(--bg-mist)',
              }}>
                <Image
                  src="/founders/sichen.jpg"
                  alt="Sichen Li"
                  width={80}
                  height={80}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="type-body-strong mb-1" style={{ color: 'var(--text-ink)' }}>Sichen Li</h3>
              <p className="type-caption mb-5" style={{ color: 'var(--blue)' }}>Co-founder</p>
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-start gap-3">
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, marginTop: '5px' }} />
                  <span className="type-caption" style={{ color: 'var(--text-ink-60)' }}>PhD in Physics, CERN</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, marginTop: '5px' }} />
                  <span className="type-caption" style={{ color: 'var(--text-ink-60)' }}>7 years on a NASA experiment</span>
                </div>
              </div>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                Sichen spent years doing fundamental physics research — environments where the data either proves the hypothesis or it doesn&apos;t. That rigour shapes how Lumio approaches every product: no hand-waving, no black boxes, just results you can verify.
              </p>
            </div>

            <div className="util-card" style={{ padding: '40px' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '16px',
                overflow: 'hidden', border: '1px solid var(--border-light)',
                marginBottom: '24px', background: 'var(--bg-mist)',
              }}>
                <Image
                  src="/founders/didier.jpg"
                  alt="Didier Gootjes"
                  width={80}
                  height={80}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="type-body-strong mb-1" style={{ color: 'var(--text-ink)' }}>Didier Gootjes</h3>
              <p className="type-caption mb-5" style={{ color: 'var(--indigo)' }}>Co-founder</p>
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-start gap-3">
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--indigo)', flexShrink: 0, marginTop: '5px' }} />
                  <span className="type-caption" style={{ color: 'var(--text-ink-60)' }}>Principal Control Engineer, TU Delft</span>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--indigo)', flexShrink: 0, marginTop: '5px' }} />
                  <span className="type-caption" style={{ color: 'var(--text-ink-60)' }}>6+ years building industrial control systems</span>
                </div>
              </div>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                Didier builds systems that have to work — not probably work, not work in demos. Industrial control engineering means failure is not an option. He brings that same intolerance for vagueness to how Lumio designs and delivers its products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WE STARTED ───────────────────────── */}
      <section className="tile tile-dark">
        <div className="content-wrap mx-auto">
          <h2 className="type-display mb-8" style={{ color: '#ffffff' }}>Why we started Lumio</h2>
          <p className="type-body mb-6" style={{ color: 'var(--text-white-70)', lineHeight: 1.75 }}>
            At CERN, you don&apos;t get credit for running the experiment — you get credit for the discovery. In industrial engineering, a control system either works or it doesn&apos;t. We both built careers in domains where results are the only currency that matters.
          </p>
          <p className="type-body mb-6" style={{ color: 'var(--text-white-70)', lineHeight: 1.75 }}>
            When we looked at how most AI companies operate — selling subscriptions, charging by the hour, building dashboards that clients have to figure out themselves — it felt backwards. The incentives are misaligned. The vendor gets paid regardless of outcome.
          </p>
          <p className="type-body" style={{ color: 'var(--text-white-70)', lineHeight: 1.75 }}>
            Lumio is our answer to that. We build the AI. We take on the risk. We charge per result delivered. If our product doesn&apos;t work, we don&apos;t get paid.
          </p>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────── */}
      <section className="tile tile-parchment">
        <div className="content-wide mx-auto">
          <div className="text-center mb-14">
            <p className="type-tagline mb-4" style={{ color: 'var(--indigo)' }}>Our Values</p>
            <h2 className="type-display" style={{ color: 'var(--text-ink)' }}>What we stand for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            <div className="util-card">
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #2563eb, #6366f1)',
                marginBottom: '18px',
                boxShadow: '0 4px 14px rgba(37,99,235,0.28)',
              }} />
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Aligned incentives</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                We only make money when we deliver results. That keeps us honest — and motivated.
              </p>
            </div>
            <div className="util-card">
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                marginBottom: '18px',
                boxShadow: '0 4px 14px rgba(99,102,241,0.28)',
              }} />
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Scientific rigour</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                Every product is built on solid methodology. No guesswork, no black boxes, no hand-waving.
              </p>
            </div>
            <div className="util-card">
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                marginBottom: '18px',
                boxShadow: '0 4px 14px rgba(139,92,246,0.28)',
              }} />
              <h3 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Results, not reports</h3>
              <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>
                We measure success by what lands in your hands — not by hours logged or slides delivered.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="type-body mb-6" style={{ color: 'var(--text-ink-60)' }}>Want to work with us or learn more?</p>
            <Link href="/contact" className="btn-pill">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
