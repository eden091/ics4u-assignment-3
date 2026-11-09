export const History = () => {
  return (
    <section className="space-y-6 flex flex-col max-h-140">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">03 // HISTORY</h2>
      </div>
      <div id="history" className="space-y-2 overflow-y-auto custom-scrollbar flex-1 pr-2 font-mono text-xs text-slate-400"></div>
    </section>
  );
};
