
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ClosSection from './components/ClosSection';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import UserJourney from './components/UserJourney';
import Timeline from './components/Timeline';
import ChatBot from './components/ChatBot';
import ProjectCatalog from './components/ProjectCatalog';

// Detail View Components (Simulated Pages)
const ClosPage = () => (
  <div id="clos" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <h1 className="text-6xl font-bold mb-8">CLOS Research Dossier</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6 text-zinc-400">
        <p className="text-xl text-white">The Cognitive Life Operating System (CLOS) represents our flagship integration of agentic AI and biometric telemetry.</p>
        <p>Built as a neurodivergent-first architecture, CLOS functions as an external executive function. It does not replace human judgment; it mirrors it to surface patterns in cognitive drift and flow state triggers.</p>
        <h3 className="text-white font-bold mt-12">System Primitives</h3>
        <ul className="space-y-4 font-mono text-xs">
          <li>— 37 Specialized LLM Agents (Founder Series)</li>
          <li>— Real-time HRV/HealthKit Feedback Loops</li>
          <li>— Voice-First Semantic Ingestion Pipeline</li>
          <li>— Privacy-Hardened On-Device Enclave</li>
        </ul>
      </div>
      <div className="glass-card p-8 rounded-sm border-white/10">
        <h3 className="text-sm font-mono uppercase text-zinc-500 mb-6">Internal Lab Status</h3>
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-zinc-400">Current Version</span>
            <span className="text-white font-mono">v0.1.4-alpha</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-zinc-400">Active Agents</span>
            <span className="text-white font-mono">37/37</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <span className="text-zinc-400">Primary Developer</span>
            <span className="text-white font-mono">C. Celaya</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhilosophyPage = () => (
  <div id="philosophy" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <h1 className="text-6xl font-bold mb-8">Lab Philosophy</h1>
    <div className="max-w-3xl space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Think Different. Build Production.</h2>
        <p className="text-zinc-400 leading-relaxed">Most AI labs optimize for the next round of funding. We optimize for the next era of human sovereignty. Our approach is informed by industrial systems engineering: if it isn't robust enough for a factory floor, it isn't robust enough for your mind.</p>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-white/5 bg-zinc-900/50">
          <h3 className="font-bold mb-2">Systems Over Wrappers</h3>
          <p className="text-xs text-zinc-500">We reject the shallow implementation of third-party APIs. We architect full-stack environments that manage context, state, and privacy from the ground up.</p>
        </div>
        <div className="p-6 border border-white/5 bg-zinc-900/50">
          <h3 className="font-bold mb-2">Agency by Design</h3>
          <p className="text-xs text-zinc-500">Convenience is the greatest threat to privacy. We build for the power user who demands control over their data and their cognitive tools.</p>
        </div>
      </section>
    </div>
  </div>
);

const SystemsPage = () => (
  <div id="systems" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <h1 className="text-6xl font-bold mb-8">The Synthesis Stack</h1>
    <p className="text-xl text-zinc-400 mb-16 max-w-2xl">A unified technical registry of our cross-domain production environments.</p>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="space-y-8">
        <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Robotics & Simulation</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-white">— MuJoCo Physics Integration</li>
          <li className="text-white">— PyBullet Robotic Models</li>
          <li className="text-white">— Three.js Web Simulators</li>
        </ul>
      </div>
      <div className="space-y-8">
        <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Audio & Automation</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-white">— MCP Server Protocols</li>
          <li className="text-white">— 172k+ Audio Asset Registry</li>
          <li className="text-white">— gRPC Production Bridges</li>
        </ul>
      </div>
      <div className="space-y-8">
        <h3 className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Mobile Infrastructure</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-white">— SwiftUI Primary View Layer</li>
          <li className="text-white">— HealthKit Biometric Sink</li>
          <li className="text-white">— On-Device Neural Core</li>
        </ul>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'clos' | 'philosophy' | 'systems'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validViews = ['home', 'clos', 'philosophy', 'systems', 'capabilities', 'catalog'];
      
      if (validViews.includes(hash) || !hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (hash === 'capabilities') setView('systems');
        else if (hash === 'home' || hash === 'catalog' || !hash) setView('home');
        else setView(hash as any);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <div className="border-y border-white/5 bg-zinc-950 overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-6 gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Architecture</span>
                  <span className="text-xl font-bold tracking-tight">Systems Thinking</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Philosophy</span>
                  <span className="text-xl font-bold tracking-tight">Privacy First</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Stack</span>
                  <span className="text-xl font-bold tracking-tight">Apple Ecosystem</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-xl font-bold tracking-tight">El Paso, TX</span>
                </div>
              </div>
            </div>
            <Manifesto />
            <Philosophy /> {/* Principles & Boundaries sit here after the Manifesto */}
            <ClosSection />
            <UserJourney />
            <ProjectCatalog />
            <Timeline />
            <Capabilities />
            <Contact />
          </>
        )}

        {view === 'clos' && <ClosPage />}
        {view === 'philosophy' && <PhilosophyPage />}
        {view === 'systems' && <SystemsPage />}
        
        {view !== 'home' && (
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <button 
              onClick={() => { window.location.hash = 'home'; setView('home'); }}
              className="text-xs font-mono uppercase text-zinc-500 hover:text-white transition-colors flex items-center space-x-2"
            >
              <span>← Return to Lab Overview</span>
            </button>
          </div>
        )}
      </main>

      <ChatBot />

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl pointer-events-none"></div>
    </div>
  );
};

export default App;
