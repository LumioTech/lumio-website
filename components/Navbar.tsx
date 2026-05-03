import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-6 right-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="holo-card holo-card-hover rounded-2xl px-8">
          <div className="flex justify-between items-center h-16 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer neon-glow-cyan"
              >
                LUMIO
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-all duration-200 font-medium cursor-pointer relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/what-we-do" className="text-slate-400 hover:text-cyan-400 transition-all duration-200 font-medium cursor-pointer relative group">
                What we do
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-all duration-200 font-medium cursor-pointer relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contact" className="relative px-6 py-2 rounded-lg font-semibold cursor-pointer overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <span className="relative z-10 text-white">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
