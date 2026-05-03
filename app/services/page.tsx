import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Foundation Model Training',
      description: 'Custom large language models trained on your proprietary data with state-of-the-art architectures. Trillion-parameter models optimized for your domain with continuous fine-tuning and deployment.',
      features: [
        'Custom architecture design and optimization',
        'Distributed training across 10,000+ GPUs',
        'Real-time model monitoring and evaluation',
        'Continuous deployment and versioning',
      ],
      gradient: 'from-cyan-500 to-blue-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Autonomous Agent Systems',
      description: 'Self-improving AI agents that operate independently, learn from feedback, and execute complex multi-step tasks. Built for enterprise deployment with robust safety guardrails.',
      features: [
        'Multi-modal reasoning and planning',
        'Self-learning from environment feedback',
        'Tool use and API integration',
        'Enterprise-grade security and audit logs',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Inference Infrastructure',
      description: 'Sub-10ms latency serving infrastructure deployed globally. Edge-optimized models with automatic scaling and failover for mission-critical applications.',
      features: [
        'Global CDN with 100+ edge locations',
        'Auto-scaling from 0 to millions of requests',
        'Model quantization and optimization',
        '99.99% uptime SLA with monitoring',
      ],
      gradient: 'from-pink-500 to-orange-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
            {'// RESEARCH_SERVICES'}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            AI Infrastructure
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade AI systems built on cutting-edge research and deployed at scale
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="holo-card holo-card-hover rounded-3xl p-10 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient glow */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}></div>

              <div className="flex flex-col md:flex-row md:items-start md:space-x-8 relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-cyan-500 ml-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="holo-card rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join leading organizations deploying frontier AI systems at scale
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <span className="relative z-10 text-white">Schedule Consultation</span>
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
