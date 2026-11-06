export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 gap-4">
      <div>
        <span className="text-xs font-mono tracking-widest text-cyan-500 uppercase font-semibold">// AGINCOURT EDITION</span>
        <h1 className="text-3xl font-bold tracking-tight text-white mt-1">Cubic Equation Solver</h1>
      </div>
      <p className="text-xs font-mono text-slate-500 max-w-xs md:text-right">Real-time cubic equation analysis tool</p>
    </header>
  );
};
