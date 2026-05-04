import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(3, 7, 17, 0.82)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="content-wide w-full mx-auto px-8 flex justify-between items-center">
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-syne), system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            textDecoration: 'none',
          }}
        >
          Lumio
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/what-we-do" className="nav-link hidden md:block">
            What we do
          </Link>
          <Link href="/about" className="nav-link hidden md:block">
            About
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #2563eb, #6366f1)',
              color: '#ffffff',
              padding: '7px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(37,99,235,0.35)',
              transition: 'opacity 0.15s ease',
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
