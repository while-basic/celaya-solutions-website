
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClosSection from './components/ClosSection';
import Story from './Story';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import UserJourney from './components/UserJourney';
import Research from './Research';
import LabNotes from './LabNotes';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Router } from './components/Router';

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
    <Router>
      <div className="min-h-screen selection:bg-white selection:text-black relative">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
          <Hero />
          
          {/* Statistics Strip */}
          <div className="border-y border-white/5 bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-6 gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Type</span>
                <span className="text-xl font-bold tracking-tight">Research Lab</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Philosophy</span>
                <span className="text-xl font-bold tracking-tight">Build in Public</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Stack</span>
                <span className="text-xl font-bold tracking-tight">Apple + Local LLM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Location</span>
                <span className="text-xl font-bold tracking-tight">El Paso, TX</span>
              </div>
            </div>
          </div>

          <ClosSection />
          <UserJourney />
          <Story />
          <Research />
          <LabNotes />
          <Philosophy />
          <ArchitectureDiagram />
          <Capabilities />
          </main>

          {/* Footer */}
          <Footer />

          {/* Subtle Bottom Glow */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl pointer-events-none z-20"></div>
          
          {/* Claude Chatbot */}
          <Chatbot />
        </div>
      </div>
    </Router>
  );
};

export default App;
