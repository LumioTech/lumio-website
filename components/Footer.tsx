import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-void)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
      className="px-8 py-16"
    >
      <div className="content-wide mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div style={{ maxWidth: '260px' }}>
            <p
              style={{
                fontFamily: 'var(--font-syne), system-ui, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '10px',
              }}
            >
              Lumio
            </p>
            <p className="type-caption" style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
              Result as a Service. We build AI — you pay per result delivered.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="type-caption-strong mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Company
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="type-fine-print footer-link">About</Link>
                <Link href="/what-we-do" className="type-fine-print footer-link">What we do</Link>
                <Link href="/contact" className="type-fine-print footer-link">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
          <p className="type-fine-print" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Copyright &copy; {new Date().getFullYear()} Lumio. All rights reserved. Amsterdam, Netherlands.
          </p>
        </div>
      </div>
    </footer>
  );
}
