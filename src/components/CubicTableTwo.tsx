export const CubicTableTwo = () => {
  return (
    <section class="space-y-6 flex flex-col">
      <div class="flex items-center gap-4">
        <h2 class="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">02 // SUMMARY</h2>
      </div>
      <div class="space-y-1 font-mono text-xs">
        <div class="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span class="text-slate-500 text-[10px] uppercase tracking-wider">f(x) expanded polynomial</span>
          <span id="equation" class="text-slate-200 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div class="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span class="text-slate-500 text-[10px] uppercase tracking-wider">f'(x) first derivative</span>
          <span id="first-derivative" class="text-cyan-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div class="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span class="text-slate-500 text-[10px] uppercase tracking-wider">f''(x) second derivative</span>
          <span id="second-derivative" class="text-purple-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div class="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span class="text-slate-500 text-[10px] uppercase tracking-wider">roots</span>
          <span id="roots" class="text-emerald-400 text-sm tracking-wide break-all">
            N/A
          </span>
        </div>
        <div class="p-4 bg-[#0b0f19]/40 border border-slate-900 rounded-lg flex flex-col gap-1">
          <span class="text-slate-500 text-[10px] uppercase tracking-wider">factored form</span>
          <span id="factored" class="text-white text-sm tracking-wide wrap-break-word text-left pt-1">
            No real factorization
          </span>
        </div>
      </div>
    </section>
  );
};
