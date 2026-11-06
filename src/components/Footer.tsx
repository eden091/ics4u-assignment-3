export const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 py-12 border-t border-slate-800 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1">
          <h3 className="text-slate-200 font-bold text-sm tracking-wide">Cubic Equation Solver</h3>
          <p className="text-slate-500 text-xs font-mono">v2.0.0 - JavaScript + Tailwind CSS</p>
        </div>
        <div className="flex gap-8 text-xs font-mono text-slate-500">
          <a href="#" className="hover:text-cyan-400 transition">
            Documentation
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
        <div className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">&copy; 2026 Agincourt CI</div>
      </div>
    </footer>
  );
};
