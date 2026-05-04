import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
            {'// ABOUT_LUMIO'}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Built by Scientists.<br />
            <span className="neon-glow-cyan">Driven by Outcomes.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We come from worlds where the result is everything. We built Lumio on the same principle.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* Sichen Li */}
          <div className="holo-card holo-card-hover rounded-3xl p-10 group">
            <Image
              src="/founders/sichen.jpg"
              alt="Sichen Li"
              width={96}
              height={96}
              className="w-24 h-24 rounded-2xl object-cover mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Sichen Li
            </h2>
            <p className="text-cyan-400 font-mono text-sm mb-5">Co-founder</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3 text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                <span>PhD in Physics, CERN</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                <span>7 years on a NASA experiment</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sichen spent years doing fundamental physics research — environments where the data either proves the hypothesis or it doesn&apos;t. That rigour shapes how Lumio approaches every product: no hand-waving, no black boxes, just results you can verify.
            </p>
          </div>

          {/* Didier Gootjes */}
          <div className="holo-card holo-card-hover rounded-3xl p-10 group">
            <Image
              src="/founders/didier.jpg"
              alt="Didier Gootjes"
              width={96}
              height={96}
              className="w-24 h-24 rounded-2xl object-cover mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Didier Gootjes
            </h2>
            <p className="text-cyan-400 font-mono text-sm mb-5">Co-founder</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3 text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                <span>Principal Control Engineer, TU Delft</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                <span>6+ years building industrial control systems</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Didier builds systems that have to work — not probably work, not work in demos. Industrial control engineering means failure is not an option. He brings that same intolerance for vagueness to how Lumio designs and delivers its products.
            </p>
          </div>

        </div>

        {/* Story */}
        <div className="holo-card rounded-3xl p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Why we started Lumio</h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              At CERN, you don&apos;t get credit for running the experiment — you get credit for the discovery. In industrial engineering, a control system either works or it doesn&apos;t. We both built careers in domains where results are the only currency that matters.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              When we looked at how most AI companies operate — selling subscriptions, charging by the hour, building dashboards that clients have to figure out themselves — it felt backwards. The incentives are misaligned. The vendor gets paid regardless of outcome.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Lumio is our answer to that. We build the AI. We take on the risk. We charge per result delivered. If our product doesn&apos;t work, we don&apos;t get paid.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'Aligned incentives',
              desc: 'We only make money when we deliver results. That keeps us honest — and motivated.',
              gradient: 'from-cyan-500 to-blue-500',
            },
            {
              title: 'Scientific rigour',
              desc: 'Every product is built on solid methodology. No guesswork, no black boxes, no hand-waving.',
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              title: 'Results, not reports',
              desc: 'We measure success by what lands in your hands — not by hours logged or slides delivered.',
              gradient: 'from-pink-500 to-orange-500',
            },
          ].map((v) => (
            <div key={v.title} className="holo-card holo-card-hover rounded-2xl p-6 group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${v.gradient} mb-4 group-hover:scale-110 transition-transform`}></div>
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">Want to work with us or learn more?</p>
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
  );
}
