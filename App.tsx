import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NotProductsBoundary from './components/NotProductsBoundary';
import { InstrumentRegistry } from './components/InstrumentRegistry';
import PrinciplesAccordion from './components/PrinciplesAccordion';
import Contact from './components/Contact';
import UserJourney from './components/UserJourney';
import LabNotes from './components/LabNotes';
import ChatBot from './components/ChatBot';
import { INSTRUMENTS } from './data/instruments';

// Detail View Components
const ClosPage = () => (
  <div id="clos" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
    <div className="mb-16 border-l border-white/10 pl-8">
      <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Flagship Infrastructure</span>
      <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">CLOS <span className="text-zinc-700 italic">v0.1</span></h1>
      <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">
        The Cognitive Life Operating System (CLOS) represents our integration of agentic AI and biometric telemetry. 
        It functions as a privacy-hardened environment that observes patterns to reduce executive load.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-12">
        <section>
          <h3 className="text-[10px] font-mono uppercase text-white/40 tracking-widest mb-6">System Primitives</h3>
          <ul className="space-y-4 font-mono text-xs text-zinc-500">
            <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-white/20"></span><span>37 Specialized LLM Agents (Founder Series)</span></li>
            <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-white/20"></span><span>Real-time HRV/HealthKit Feedback Loops</span></li>
            <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-white/20"></span><span>Voice-First Semantic Ingestion Pipeline</span></li>
            <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-white/20"></span><span>Privacy-Hardened On-Device Enclave</span></li>
          </ul>
        </section>
        
        <div className="p-8 border border-white/5 bg-zinc-950 rounded-sm">
          <p className="text-sm text-zinc-500 leading-relaxed italic">
            "We optimize for the preservation of human judgment, not the automation of it. CLOS mirrors your cognition, surfacing blind spots so you can decide with clarity."
          </p>
        </div>
      </div>
      
      <div className="glass-card p-10 rounded-sm border-white/10 bg-zinc-900/20">
        <h3 className="text-[10px] font-mono uppercase text-zinc-500 mb-10 tracking-widest">Internal Lab Status</h3>
        <div className="space-y-8">
          {[
            { label: 'Current Version', value: 'v0.1.4-alpha' },
            { label: 'Active Agents', value: '37/37' },
            { label: 'Primary Developer', value: 'C. Celaya' },
            { label: 'Sync Status', value: 'Localized' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">{item.label}</span>
              <span className="text-white font-mono text-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'clos' | 'lab-notes'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validViews = ['home', 'clos', 'lab-notes', 'catalog', 'philosophy', 'contact'];
      
      if (validViews.includes(hash) || !hash) {
        if (hash === 'clos') setView('clos');
        else if (hash === 'lab-notes') setView('lab-notes');
        else setView('home');

        if (hash && hash !== 'home') {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        {view === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero />
            
            {/* Lab Snapshot Row */}
            <div className="border-y border-white/5 bg-zinc-950 overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-6 gap-8">
                {[
                  { label: 'Identity', val: 'Cognitive Research Lab' },
                  { label: 'Commitment', val: 'Local-First Architecture' },
                  { label: 'Standard', val: 'Industrial Systems Rigor' },
                  { label: 'Location', val: 'El Paso, TX' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-lg font-bold tracking-tight">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <NotProductsBoundary />
            <InstrumentRegistry instruments={INSTRUMENTS} />
            <UserJourney />
            <PrinciplesAccordion />
            <Contact />
          </div>
        )}

        {view === 'clos' && <ClosPage />}
        {view === 'lab-notes' && <LabNotes />}
        
        {view !== 'home' && (
          <div className="max-w-7xl mx-auto px-6 pb-20 border-t border-white/5 pt-10">
            <button 
              onClick={() => { window.location.hash = 'home'; setView('home'); }}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors flex items-center space-x-2"
            >
              <span>← Return to Lab Overview</span>
            </button>
          </div>
        )}
      </main>

      <ChatBot />

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl pointer-events-none"></div>
    </div>
  );
};

export default App;