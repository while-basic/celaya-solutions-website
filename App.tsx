
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Introduction from './components/Introduction.tsx';
import { InstrumentRegistry } from './components/InstrumentRegistry.tsx';
import Contact from './components/Contact.tsx';
import ChatBot from './components/ChatBot.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import ArchitectureDiagram from './components/ArchitectureDiagram.tsx';
import DemoVideo from './components/DemoVideo.tsx';
import IsoFramework from './components/IsoFramework.tsx';
import ResearchInstrumentsSummary from './components/ResearchInstrumentsSummary.tsx';
import Timeline from './components/Timeline.tsx';
import Philosophy from './components/Philosophy.tsx';
import LabNotes from './components/LabNotes.tsx';
import GptRegistry from './components/GptRegistry.tsx';
import { INSTRUMENTS } from './data/instruments.ts';

// Detail View Components
const ClosPage = () => (
  <div id="clos" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
    <div className="mb-16 border-l border-white/10 pl-8">
      <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Flagship Infrastructure</span>
      <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">CLOS <span className="text-zinc-700 italic">v0.1</span></h1>
      <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">
        The Cognitive Life Operating System (CLOS) represents our integration of agentic AI and biometric telemetry. 
        It functions as a privacy-hardened environment that observes patterns to reduce executive load.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="space-y-12">
        <section>
          <h3 className="text-[10px] font-mono uppercase text-white/40 tracking-widest mb-6">System Primitives</h3>
          <ul className="space-y-4 font-mono text-xs text-zinc-500">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white/20"></span>
              <span>37 Specialized LLM Agents (Founder Series)</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white/20"></span>
              <span>Local-First CoreML Inference Layer</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-white/20"></span>
              <span>Zero-Knowledge Biometric Storage</span>
            </li>
          </ul>
        </section>
      </div>
      <div className="p-8 glass-card border-white/10 rounded-sm bg-zinc-950/50">
        <h4 className="text-sm font-bold mb-4 uppercase tracking-tight">Active Nodes</h4>
        <div className="space-y-4">
           {['Turing-01', 'Lovelace-02', 'Shannon-33'].map(node => (
             <div key={node} className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] rounded-sm">
                <span className="text-[10px] font-mono text-zinc-400">{node}</span>
                <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest">Online</span>
             </div>
           ))}
        </div>
      </div>
    </div>

    <ArchitectureDiagram />
    <DemoVideo />
  </div>
);

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      
      // Scroll to top for distinct "pages"
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
