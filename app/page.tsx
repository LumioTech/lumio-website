import Link from 'next/link';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="neural-gradient min-h-screen flex items-center justify-center px-4 pt-28 pb-16 relative overflow-hidden">
        <div className="particles absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i * 17 + 3) % 100}%`,
                top: `${(i * 13 + 7) % 100}%`,
                animationDelay: `${(i * 0.4) % 6}s`,
                animationDuration: `${6 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{ left: `${20 + i * 15}%`, animationDelay: `${i * 0.6}s` }}
          />
        ))}

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span className="text-cyan-400 text-sm font-mono tracking-wide">RESULT_AS_A_SERVICE</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">We build AI.</span>
            <br />
            <span className="neon-glow-cyan inline-block">You pay for results.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            No licenses. No subscriptions. No hourly fees.
            <br />
            <span className="text-slate-300">Define the outcome — we deliver it.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/what-we-do"
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <span className="relative z-10 text-white flex items-center space-x-2">
                <span>See what we do</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* RaaS vs Traditional */}
      <section className="py-32 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
              {'// THE_RAAS_DIFFERENCE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why RaaS changes everything
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Traditional models put the risk on you. We put it on us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="holo-card rounded-2xl p-8 opacity-60">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center mb-4">
                <span className="text-slate-400 text-xl font-bold">✕</span>
              </div>
              <h3 className="text-lg font-bold text-slate-300 mb-3">Traditional SaaS</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Buy a subscription. Learn the platform yourself. Configure it. Get results — maybe. Keep paying regardless.
              </p>
              <div className="mt-5 text-xs font-mono text-slate-600 uppercase tracking-wider">Risk on you</div>
            </div>

            <div className="holo-card rounded-2xl p-8 opacity-60">
              <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center mb-4">
                <span className="text-slate-400 text-xl font-bold">✕</span>
              </div>
              <h3 className="text-lg font-bold text-slate-300 mb-3">Traditional Consulting</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pay by the hour. Months of meetings and workshops. Deliverables that may or may not move the needle.
              </p>
              <div className="mt-5 text-xs font-mono text-slate-600 uppercase tracking-wider">Risk on you</div>
            </div>

            <div className="holo-card rounded-2xl p-8 border border-cyan-500/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Lumio RaaS</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tell us the result you need. We design, build, and run the AI solution. You pay per result delivered.
              </p>
              <div className="mt-5 text-xs font-mono text-cyan-400 uppercase tracking-wider">Risk on us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
              {'// WHAT_WE_VE_BUILT'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live products
            </h2>
            <p className="text-lg text-slate-400">
              Each product is a result — ready to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="holo-card holo-card-hover rounded-2xl p-8 group flex flex-col">
              <div className="text-3xl mb-4">📍</div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">LocationScore</h3>
                <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">SOON</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Data-driven location analysis for entrepreneurs opening a store, restaurant, or café. Know before you sign the lease.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Contact for pricing</span>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Enquire
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="holo-card holo-card-hover rounded-2xl p-8 group flex flex-col">
              <div className="text-3xl mb-4">🏠</div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Housing Price Tracker</h3>
                <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">SOON</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Track Dutch house prices by neighbourhood. Built for buyers, sellers, and renters who want data — not guesswork.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Contact for pricing</span>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Enquire
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="holo-card holo-card-hover rounded-2xl p-8 group flex flex-col">
              <div className="text-3xl mb-4">📊</div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Store Traffic Analytics</h3>
                <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">SOON</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                Daily footfall statistics for physical stores, with an analytical report and strategy to improve performance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Contact for pricing</span>
                <Link href="/contact" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Enquire
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
              {'// HOW_IT_WORKS'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple by design
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Tell us your challenge',
                desc: 'Describe the business problem and the result you need. A report, a score, an insight — you define success.',
              },
              {
                num: '02',
                title: 'We design & build the solution',
                desc: 'Our team builds a custom AI-powered solution. We agree on what counts as a delivered result before writing a line of code.',
              },
              {
                num: '03',
                title: 'Pay per result delivered',
                desc: 'No upfront cost. No monthly seat fees. You pay when — and only when — the result lands in your hands.',
              },
            ].map((step) => (
              <div key={step.num} className="holo-card rounded-2xl p-8 flex items-start space-x-6 group">
                <div className="text-4xl font-bold neon-glow-cyan font-mono flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a problem<br />
            <span className="neon-glow-cyan">that needs solving?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Tell us what result you need. We&apos;ll come back with a proposal — and a price per result.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center space-x-2 px-10 py-5 rounded-xl font-semibold text-lg cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            <span className="relative z-10 text-white">Let&apos;s talk</span>
            <svg className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <ChatbotWidget />
    </>
  );
}
