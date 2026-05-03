import Link from 'next/link';

export default function WhatWeDo() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
            {'// WHAT_WE_DO'}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            AI That Earns<br />
            <span className="neon-glow-cyan">Its Keep</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We build AI-powered products and charge per result — not per seat, not per hour.
          </p>
        </div>

        {/* RaaS model */}
        <div className="holo-card rounded-3xl p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-5">The RaaS model</h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              Most software charges for access. Most consultants charge for time. Neither model aligns incentives — they get paid whether or not you see results.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              Lumio charges per result. We define upfront what a delivered result looks like — a report, a score, a data point — and that&apos;s what you pay for. If we don&apos;t deliver, you don&apos;t pay.
            </p>
            <p className="text-cyan-400 font-semibold text-lg">
              We win when you win. That&apos;s the only model we believe in.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our products</h2>
          <div className="space-y-6">

            {/* LocationScore */}
            <div className="holo-card holo-card-hover rounded-2xl p-8 group">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="text-4xl mb-4 md:mb-0 md:pt-1 flex-shrink-0">📍</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">LocationScore</h3>
                    <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">COMING SOON</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">
                    Location intelligence for entrepreneurs opening a store, restaurant, or café in the Netherlands. Before signing a lease, get a data-driven score across 6 dimensions — foot traffic, demographics, competition, accessibility, neighbourhood trend, and an overall recommendation.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {[
                      'Foot traffic estimate',
                      'Local demographics analysis',
                      'Competition map',
                      'Accessibility score',
                      'Neighbourhood growth trend',
                      'Plain-language recommendation',
                    ].map((f) => (
                      <div key={f} className="flex items-center space-x-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Interested? Contact us to get early access →
                  </Link>
                </div>
              </div>
            </div>

            {/* Dutch Housing Price Tracker */}
            <div className="holo-card holo-card-hover rounded-2xl p-8 group">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="text-4xl mb-4 md:mb-0 md:pt-1 flex-shrink-0">🏠</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Dutch Housing Price Tracker</h3>
                    <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">COMING SOON</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">
                    Track house prices across Dutch neighbourhoods — built for buyers, sellers, and people looking to rent. Stop relying on outdated listings. Get consistent, data-driven price tracking that tells you whether to act now or wait.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {[
                      'Neighbourhood price trends',
                      'Buyer vs. seller market signals',
                      'Rental price benchmarking',
                      'Historical price tracking',
                    ].map((f) => (
                      <div key={f} className="flex items-center space-x-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Interested? Contact us to get early access →
                  </Link>
                </div>
              </div>
            </div>

            {/* Store Traffic Analytics */}
            <div className="holo-card holo-card-hover rounded-2xl p-8 group">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="text-4xl mb-4 md:mb-0 md:pt-1 flex-shrink-0">📊</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Store Traffic Analytics</h3>
                    <span className="text-xs font-mono text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">COMING SOON</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">
                    Know how many people walk into your clothing store every day — and what to do about it. We track daily footfall and deliver a periodic analytical report with a concrete strategy to improve traffic and conversion.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {[
                      'Daily visitor count',
                      'Peak hour analysis',
                      'Week-over-week trends',
                      'Actionable strategy report',
                    ].map((f) => (
                      <div key={f} className="flex items-center space-x-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Interested? Contact us to get early access →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How we work</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '1', label: 'Discovery', desc: 'You describe the problem and define what success looks like' },
              { num: '2', label: 'Design', desc: 'We map out the AI solution and agree on the per-result pricing' },
              { num: '3', label: 'Build', desc: 'We build, test, and iterate until the solution is solid' },
              { num: '4', label: 'Deploy', desc: 'The solution goes live, monitored and maintained by us' },
              { num: '5', label: 'Deliver', desc: 'Results land with you. Invoice issued per delivered result' },
            ].map((step) => (
              <div key={step.num} className="holo-card rounded-xl p-5 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {step.num}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{step.label}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="holo-card rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">Have a problem that fits the model?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Tell us what result you need. We&apos;ll scope it, price it per result, and build it.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <span className="relative z-10 text-white">Get in touch</span>
              <svg className="relative z-10 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
