export default function Footer() {
  return (
    <footer className="mt-auto border-t border-cyan-500/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span className="text-slate-500 text-sm font-mono">
              © {new Date().getFullYear()} LUMIO_AI_LAB
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-slate-500 font-mono">SYSTEMS_OPERATIONAL</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span className="text-slate-500 font-mono">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
