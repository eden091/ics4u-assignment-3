export const CubicInputs = () => {
  return (
    <section class="bg-[#0b0f19] border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
      <div class="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
      <form id="form" class="flex flex-wrap items-center justify-between gap-6">
        <div class="flex flex-wrap gap-4 sm:gap-6 flex-1 justify-start">
          <label class="group flex flex-col gap-1.5">
            <span class="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">a-value [x³]</span>
            <input
              name="a"
              type="number"
              value="0"
              class="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
            />
          </label>
          <label class="group flex flex-col gap-1.5">
            <span class="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">b-value [x²]</span>
            <input
              name="b"
              type="number"
              value="0"
              class="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
            />
          </label>
          <label class="group flex flex-col gap-1.5">
            <span class="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">c-value [x]</span>
            <input
              name="c"
              type="number"
              value="0"
              class="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
            />
          </label>
          <label class="group flex flex-col gap-1.5">
            <span class="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">d-value [c]</span>
            <input
              name="d"
              type="number"
              value="0"
              class="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
            />
          </label>
        </div>
        <input
          type="submit"
          value="SAVE"
          class="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-mono text-xs font-bold tracking-wider transition duration-150 active:scale-95 cursor-pointer shadow-lg shadow-cyan-500/10 self-end sm:self-auto w-full sm:w-auto text-center"
        />
      </form>
    </section>
  );
};
