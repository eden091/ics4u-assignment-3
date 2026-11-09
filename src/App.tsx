import { useRef, useState, useEffect, useMemo } from "react"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CubicInputs } from "./components/CubicInputs";
import { Analysis } from "./components/Analysis";
import { Summary } from "./components/Summary";
import { History } from "./components/History";
import { Graph } from "./components/Graph";
import type { Coefficients } from "./types";



export const App = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <main className="space-y-12">
          <CubicInputs />
          <div className="grid grid-cols-2 gap-12">
            <Analysis />
            <Summary />
            <History />
            <Graph />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
