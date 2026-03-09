/* Celaya Solutions: Brand Guidelines v1.0.0 */
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Introduction from './components/Introduction.tsx';
import ResearchEcosystem from './components/ResearchEcosystem.tsx';
import BehavioralStandards from './components/BehavioralStandards.tsx';
import { InstrumentRegistry } from './components/InstrumentRegistry.tsx';
import Contact from './components/Contact.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import ArchitectureDiagram from './components/ArchitectureDiagram.tsx';
import IsoFramework from './components/IsoFramework.tsx';
import ResearchInstrumentsSummary from './components/ResearchInstrumentsSummary.tsx';
import Timeline from './components/Timeline.tsx';
import Philosophy from './components/Philosophy.tsx';
import LabNotes from './components/LabNotes.tsx';
import GptRegistry from './components/GptRegistry.tsx';
import { INSTRUMENTS } from './data/instruments.ts';

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
          <>
            <Introduction />
            <ResearchEcosystem />
            <BehavioralStandards />
            <IsoFramework />
            <ResearchInstrumentsSummary />
            <Contact />
          </>
        );
    }
  }, [currentHash]);

  return (
    <div className="min-h-screen bg-cs-black text-cs-white font-body">
      <Navbar />
      <main className="relative z-10 pt-[60px]">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-cs-gray-700 bg-cs-black">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: wordmark + tagline */}
          <div>
            <div className="font-display font-extrabold tracking-[-0.03em] text-lg leading-tight mb-2">
              Celaya
              <span className="font-mono text-[0.875rem] font-normal tracking-[0.35em] uppercase text-cs-orange block" style={{ marginTop: '2px' }}>
                Solutions
              </span>
            </div>
            <p className="font-body text-[0.875rem] text-cs-gray-400">
              Independent AI Research Lab / El Paso, Texas
            </p>
          </div>

          {/* Right: version + copyright + tagline */}
          <div className="text-right">
            <p className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-1">
              v1.0.0
            </p>
            <p className="font-mono text-[0.875rem] text-cs-gray-500">
              &copy; {new Date().getFullYear()} Celaya Solutions
            </p>
            <p className="font-mono text-[0.875rem] text-cs-orange tracking-[0.1em] mt-2">
              Make Coherence Visible
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
