export const Summary = () => {
  return (
    <section className="space-y-6 flex flex-col">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">02 // SUMMARY</h2>
      </div>
      <div className="space-y-1 font-mono text-xs">
        <div className="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">f(x) expanded polynomial</span>
          <span id="equation" className="text-slate-200 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div className="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">f'(x) first derivative</span>
          <span id="first-derivative" className="text-cyan-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div className="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">f''(x) second derivative</span>
          <span id="second-derivative" className="text-purple-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div className="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">roots</span>
          <span id="roots" className="text-emerald-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div className="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span className="text-slate-500 text-[10px] uppercase tracking-wider">factored form</span>
          <span id="factored" className="text-white text-sm tracking-wide wrap-break-word text-left pt-1">
            No real factorization
          </span>
        </div>
      </div>
    </section>
  );
};
