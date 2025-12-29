
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ClosSection from './components/ClosSection';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import UserJourney from './components/UserJourney';
import DemoVideo from './components/DemoVideo';
import Timeline from './components/Timeline';
import ChatBot from './components/ChatBot';
import ProjectCatalog from './components/ProjectCatalog';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.body.style.setProperty('--scroll', scrolled.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Statistics Strip */}
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
        <ClosSection />
        <UserJourney />
        <ProjectCatalog />
        <DemoVideo />
        <Timeline />
        <Philosophy />
        <ArchitectureDiagram />
        <Capabilities />
        <Contact />
      </main>

      <ChatBot />

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl pointer-events-none"></div>
    </div>
  );
};

export default App;
