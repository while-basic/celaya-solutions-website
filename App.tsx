
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Introduction from './components/Introduction.tsx';
import { InstrumentRegistry } from './components/InstrumentRegistry.tsx';
import Contact from './components/Contact.tsx';
import ChatBot from './components/ChatBot.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import ArchitectureDiagram from './components/ArchitectureDiagram.tsx';
import IsoFramework from './components/IsoFramework.tsx';
import ResearchInstrumentsSummary from './components/ResearchInstrumentsSummary.tsx';
import Timeline from './components/Timeline.tsx';
import Philosophy from './components/Philosophy.tsx';
import LabNotes from './components/LabNotes.tsx';
import GptRegistry from './components/GptRegistry.tsx';
import { INSTRUMENTS } from './data/instruments.ts';
import { Terminal, Shield, Microscope, Database, Activity, Info } from 'lucide-react';

const TerminalTrace = () => (
  <div className="w-full bg-zinc-950 border border-white/10 rounded-sm overflow-hidden font-mono text-[11px] leading-relaxed">
    <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Terminal className="w-3 h-3 text-zinc-500" />
        <span className="text-zinc-400 uppercase tracking-widest text-[10px]">Telemetry Trace: CLOS_v0.1_Core</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
        <div className="w-2 h-2 rounded-full bg-amber-500/20"></div>
        <div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
      </div>
    </div>
    <div className="p-6 space-y-4 text-zinc-400">
      <div className="space-y-1">
        <p className="text-zinc-600"># Initializing observation sequence...</p>
        <p className="text-zinc-600"># Mapping Founder Series inference nodes [Turing-01...BernersLee-37]</p>
        <p className="text-emerald-500/80">TRACE ACTIVE:</p>
      </div>
      
      <div className="space-y-1 pl-4 border-l border-white/5">
        <p>[+0.8s] cognitive_state: Neutral | emotion: Focused(5/10) | focus_capacity: 72% | context_switches_today: 6 | inferred: sleep_proxy=low</p>
        <p>[+1.6s] cognitive_state: Divergent | emotion: Excited(7/10) | focus_capacity: 65% | context_switches_today: 7 | inferred: isolation=high</p>
        <p>[+2.4s] cognitive_state: Analysis | emotion: Stable(8/10) | focus_capacity: 78% | context_switches_today: 7 | inferred: obligation_proximity=medium</p>
      </div>

      <div className="space-y-2 pt-4">
        <p className="text-white/60 uppercase tracking-widest text-[9px]">Pattern Library Update:</p>
        <p className="pl-4">— New pattern: "High isolation correlates with increased divergent state variance" (confidence: 0.82)</p>
      </div>

      <div className="space-y-2">
        <p className="text-white/60 uppercase tracking-widest text-[9px]">Proactive Intervention (Next 24h):</p>
        <p className="pl-4">— Suppress non-critical divergent prompts until rest baseline recovered.</p>
        <p className="pl-4">— Trigger check-in at T+14h if focus_capacity drops below 40%.</p>
      </div>

      <div className="space-y-2">
        <p className="text-white/60 uppercase tracking-widest text-[9px]">Reflection:</p>
        <p className="pl-4 italic">— State transition captured during synthesis block. Variable delta matches sleep deprivation baseline.</p>
      </div>
    </div>
  </div>
);

const ClosPage = () => (
  <div id="clos" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
    {/* Intro */}
    <div className="mb-24 border-l border-white/10 pl-8">
      <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Research Environment</span>
      <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">CLOS</h1>
      <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">
        CLOS is a research environment for observing cognitive patterns and decision traces under real conditions.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-16 mb-32">
      {/* Role */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 text-zinc-600">
          <Microscope className="w-5 h-5" />
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Role</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          CLOS records and surfaces correlations in executive state. It constrains interaction pathways to discover systemic boundaries and logs decision-point fragments for subsequent audit. The environment provides the structural means to measure pattern drift across temporal and physiological variables.
        </p>
      </section>

      {/* Composition */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 text-zinc-600">
          <Database className="w-5 h-5" />
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Composition</h2>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          CLOS functions as a coordination context for multiple research instruments. It hosts multiple probe series, including the 37 Founder Nodes, to provide a unified environment for multi-modal telemetry ingestion and verifiable agentic coordination.
        </p>
      </section>
    </div>

    {/* Artifacts and Traces */}
    <section className="mb-32">
      <div className="flex items-center space-x-3 text-zinc-600 mb-12">
        <Activity className="w-5 h-5" />
        <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Artifacts and Traces</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Decision Traces', desc: 'Signed logs of inference paths.' },
          { label: 'Telemetry Logs', desc: 'Raw physiological/behavioral streams.' },
          { label: 'Observations', desc: 'Structured snapshots of system state.' },
          { label: 'Constraint Records', desc: 'Documentation of logic boundaries.' }
        ].map((item, i) => (
          <div key={i} className="p-6 border border-white/5 bg-zinc-950/20 rounded-sm">
            <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-tight">{item.label}</h4>
            <p className="text-[11px] text-zinc-600 font-mono leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Terminal Research Demo */}
    <section className="mb-32">
      <div className="flex items-center space-x-3 text-zinc-600 mb-12">
        <Terminal className="w-5 h-5" />
        <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Research Demo: Cognitive Telemetry</h2>
      </div>
      <TerminalTrace />
    </section>

    <ArchitectureDiagram />

    {/* Boundaries */}
    <section className="mt-32 p-10 border border-white/10 bg-zinc-950/50 rounded-sm">
      <div className="flex items-center space-x-3 text-zinc-500 mb-6">
        <Shield className="w-5 h-5" />
        <h2 className="text-[10px] font-mono uppercase tracking-[0.3em]">Boundaries</h2>
      </div>
      <p className="text-sm text-zinc-500 font-mono italic leading-relaxed">
        CLOS does not claim to solve executive dysfunction or guarantee cognitive outcomes. It records and surfaces evidence for human-in-the-loop inspection. Any observed correlations are provisionary and subject to falsification through iterative measurement.
      </p>
    </section>

    <footer className="mt-20 pt-8 border-t border-white/5">
      <div className="flex items-center space-x-2 text-zinc-700">
        <Info className="w-3 h-3" />
        <p className="text-[9px] font-mono uppercase tracking-widest">
          This page reflects research state at time of writing and is subject to revision.
        </p>
      </div>
    </footer>
  </div>
);

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      
      const subPages = ['#clos', '#privacy', '#catalog', '#timeline', '#philosophy', '#lab-notes', '#gpts'];
      if (subPages.includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = useCallback(() => {
    switch (currentHash) {
      case '#clos':
        return <ClosPage />;
      case '#privacy':
        return <PrivacyPolicy />;
      case '#catalog':
        return <InstrumentRegistry instruments={INSTRUMENTS} />;
      case '#timeline':
        return <Timeline />;
      case '#philosophy':
        return <Philosophy />;
      case '#lab-notes':
        return <LabNotes />;
      case '#gpts':
        return <GptRegistry />;
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Introduction />
            <div className="h-px w-full bg-white/10 mt-0 mb-20"></div>
            <IsoFramework />
            <ResearchInstrumentsSummary />
            <Contact />
          </div>
        );
    }
  }, [currentHash]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="relative z-10">
        {renderContent()}
      </main>
      <ChatBot />
      
      <footer className="pt-24 pb-16 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-12">
            Inspect artifacts. Read lab notes. Run systems locally.
          </p>

          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mb-6">
            <span className="text-black font-bold text-[10px]">CS</span>
          </div>
          
          <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
            CELAYA SOLUTIONS • COGNITIVE RESEARCH LAB • EST. 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
