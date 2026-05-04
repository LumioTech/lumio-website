'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
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

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-mist)',
    border: '1px solid var(--border-light)',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '15px',
    color: 'var(--text-ink)',
    width: '100%',
    outline: 'none',
    letterSpacing: '-0.01em',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="hero-mesh tile text-center"
        style={{ paddingTop: '144px', paddingBottom: '100px' }}
      >
        <div className="content-wrap mx-auto">
          <p className="type-tagline mb-4" style={{ color: 'rgba(165,180,252,0.85)' }}>Contact Us</p>
          <h1 className="type-hero anim-fade-up" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>
            Tell Us Your Problem
          </h1>
          <p className="type-lead anim-fade-up-1 mx-auto" style={{ color: 'var(--text-white-45)', maxWidth: '500px' }}>
            We&apos;ll come back with a proposal — and a price per result.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────── */}
      <section className="tile tile-canvas">
        <div className="content-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div className="util-card" style={{ padding: '40px' }}>
              <h2 className="type-body-strong mb-6" style={{ color: 'var(--text-ink)' }}>Send us a message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="type-caption-strong block mb-2" style={{ color: 'var(--text-ink)', letterSpacing: '0.03em' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--indigo)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.10)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="type-caption-strong block mb-2" style={{ color: 'var(--text-ink)', letterSpacing: '0.03em' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--indigo)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.10)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="type-caption-strong block mb-2" style={{ color: 'var(--text-ink)', letterSpacing: '0.03em' }}>
                    Your problem or question
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe the result you need..."
                    style={{ ...inputStyle, resize: 'none', borderRadius: '14px' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--indigo)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.10)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill"
                  style={{ width: '100%', opacity: isSubmitting ? 0.55 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>

                {submitted && (
                  <div style={{
                    background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.18)',
                    borderRadius: '12px', padding: '12px 16px',
                  }}>
                    <p className="type-caption" style={{ color: 'var(--indigo)' }}>
                      Message sent. We&apos;ll be in touch with a proposal soon.
                    </p>
                  </div>
                )}

                {error && (
                  <div style={{
                    background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '12px', padding: '12px 16px',
                  }}>
                    <p className="type-caption" style={{ color: '#dc2626' }}>{error}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-5">
              <div className="util-card" style={{ padding: '32px' }}>
                <h2 className="type-body-strong mb-2" style={{ color: 'var(--text-ink)' }}>Contact information</h2>
                <p className="type-body mb-8" style={{ color: 'var(--text-ink-60)' }}>
                  Reach us directly to discuss a project, ask about pricing, or explore whether your problem fits the RaaS model.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(99,102,241,0.07))',
                      border: '1px solid rgba(99,102,241,0.16)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--blue)" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="type-caption-strong mb-1" style={{ color: 'var(--text-ink)' }}>Email</p>
                      <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>sichen@quatt.io</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.10), rgba(139,92,246,0.07))',
                      border: '1px solid rgba(139,92,246,0.16)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--indigo)" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="type-caption-strong mb-1" style={{ color: 'var(--text-ink)' }}>Location</p>
                      <p className="type-caption" style={{ color: 'var(--text-ink-60)' }}>Amsterdam, Netherlands</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="util-card" style={{ padding: '32px' }}>
                <p className="type-caption-strong mb-5" style={{ color: 'var(--text-ink)', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '11px' }}>
                  What happens next
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'We read your message and assess whether it\'s a good fit for RaaS',
                    'We come back with a scoped proposal and a per-result price',
                    'If it fits, we get to work. Response within 24 hours.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="type-caption-strong flex-shrink-0" style={{ color: 'var(--indigo)', minWidth: '20px' }}>
                        0{i + 1}
                      </span>
                      <span className="type-caption" style={{ color: 'var(--text-ink-60)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
