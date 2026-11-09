export const Graph = () => {
  return (
    <section className="space-y-6 flex flex-col">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">04 // GRAPH</h2>
      </div>
      <div className="flex-1 rounded-xl border border-slate-900 bg-[#0b0f19]/50 p-6 shadow-2xl bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px]">
        <canvas
          id="graph"
          width="400"
          height="400"
          className="w-full rounded-md border border-slate-900 bg-[#04060a] shadow-inner"
        ></canvas>
      </div>
    </section>
  );
};
