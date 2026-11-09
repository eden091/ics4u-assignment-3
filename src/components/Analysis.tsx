export const Analysis = () => {
  return (
    <section className="space-y-6 flex flex-col">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">01 // ANALYSIS</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[p] parameter</span>
          <span id="p" className="text-slate-200 font-medium">
            0.0000
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[q] parameter</span>
          <span id="q" className="text-slate-200 font-medium">
            0.0000
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[Δ] discriminant</span>
          <span id="discriminant" className="text-amber-400 font-bold tracking-wide">
            0.0000
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[r1] root alpha</span>
          <span id="root-one" className="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[r2] root beta</span>
          <span id="root-two" className="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[r3] root gamma</span>
          <span id="root-three" className="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[min] critical point</span>
          <span id="minimum" className="text-cyan-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span className="text-slate-500">[max] critical point</span>
          <span id="maximum" className="text-purple-400">
            x: N/A | y: N/A
          </span>
        </div>
      </div>
    </section>
  );
};
