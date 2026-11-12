import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Analysis } from "./components/Analysis";
import { Summary } from "./components/Summary";
import { History } from "./components/History";
import { Graph } from "./components/Graph";


export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <main className="space-y-12">
          <section className="bg-[#0b0f19] border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
            <form id="form" className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-4 sm:gap-6 flex-1 justify-start">
                <label className="group flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">a-value [x³]</span>
                  <input
                    name="a"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
                  />
                </label>
                <label className="group flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">b-value [x²]</span>
                  <input
                    name="b"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
                  />
                </label>
                <label className="group flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">c-value [x]</span>
                  <input
                    name="c"
                    value={c}
                    onChange={(e) => setC(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
                  />
                </label>
                <label className="group flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-slate-500 group-focus-within:text-cyan-400 transition">d-value [c]</span>
                  <input
                    name="d"
                    value={d}
                    onChange={(e) => setD(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-md bg-[#121824] border border-slate-800 text-white font-mono focus:outline-none focus:border-cyan-500 transition text-center"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="SAVE"
                className="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-mono text-xs font-bold tracking-wider transition duration-150 active:scale-95 cursor-pointer shadow-lg shadow-cyan-500/10 self-end sm:self-auto w-full sm:w-auto text-center"
              />
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};
