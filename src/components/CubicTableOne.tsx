export const CubicTableOne = () => {
  return (
    <section class="space-y-6 flex flex-col">
      <div class="flex items-center gap-4">
        <h2 class="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">01 // ANALYSIS</h2>
      </div>
      <div class="space-y-1 font-mono text-xs">
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[p] parameter</span>
          <span id="p" class="text-slate-200 font-medium">
            0.0000
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[q] parameter</span>
          <span id="q" class="text-slate-200 font-medium">
            0.0000
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[Δ] discriminant</span>
          <span id="discriminant" class="text-amber-400 font-bold tracking-wide">
            0.0000
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[r1] root alpha</span>
          <span id="root-one" class="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[r2] root beta</span>
          <span id="root-two" class="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[r3] root gamma</span>
          <span id="root-three" class="text-emerald-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[min] critical point</span>
          <span id="minimum" class="text-cyan-400">
            x: N/A | y: N/A
          </span>
        </div>
        <div class="flex justify-between items-center py-3 border-b border-slate-900 px-1 hover:bg-slate-900/30 transition">
          <span class="text-slate-500">[max] critical point</span>
          <span id="maximum" class="text-purple-400">
            x: N/A | y: N/A
          </span>
        </div>
      </div>
    </section>
  );
};
