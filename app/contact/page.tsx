'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-cyan-400 text-sm font-mono mb-4 uppercase tracking-widest">
            {'// CONTACT_US'}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Tell Us Your Problem
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We&apos;ll come back with a proposal — and a price per result.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="holo-card rounded-3xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                  Your problem or question
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200 resize-none text-white placeholder-slate-500"
                  placeholder="Describe the result you need..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative px-6 py-4 rounded-xl font-semibold text-lg cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <span className="relative z-10 text-white">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>

              {submitted && (
                <div className="holo-card border-cyan-500/50 bg-cyan-500/10 text-cyan-300 px-4 py-3 rounded-xl flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span>Message sent. We&apos;ll be in touch with a proposal soon.</span>
                </div>
              )}

              {error && (
                <div className="holo-card border-pink-500/50 bg-pink-500/10 text-pink-300 px-4 py-3 rounded-xl flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="holo-card rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Reach us directly to discuss a project, ask about pricing, or explore whether your problem is a good fit for the RaaS model.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm uppercase tracking-wider">Email</h3>
                    <p className="text-slate-400">sichen@quatt.io</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm uppercase tracking-wider">Location</h3>
                    <p className="text-slate-400">Amsterdam, Netherlands</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="holo-card rounded-3xl p-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">What happens next</h3>
              </div>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-mono font-bold flex-shrink-0">01</span>
                  <span>We read your message and assess whether it&apos;s a good fit for RaaS</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-mono font-bold flex-shrink-0">02</span>
                  <span>We come back with a scoped proposal and a per-result price</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-mono font-bold flex-shrink-0">03</span>
                  <span>If it fits, we get to work. Response within 24 hours.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
