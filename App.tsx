/* Celaya Solutions: Brand Guidelines v1.0.0 */
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Introduction from './components/Introduction.tsx';
import ProofArchitecture from './components/ProofArchitecture.tsx';
import ExampleTrace from './components/ExampleTrace.tsx';
import FeaturedInstruments from './components/FeaturedInstruments.tsx';
import ResearchOutputs from './components/ResearchOutputs.tsx';
import ResearchPublications from './components/ResearchPublications.tsx';
import ResearchEcosystem from './components/ResearchEcosystem.tsx';
import BehavioralStandards from './components/BehavioralStandards.tsx';
import { InstrumentRegistry } from './components/InstrumentRegistry.tsx';
import Contact from './components/Contact.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import IsoFramework from './components/IsoFramework.tsx';
import Timeline from './components/Timeline.tsx';
import Philosophy from './components/Philosophy.tsx';
import LabNotes from './components/LabNotes.tsx';
import GptRegistry from './components/GptRegistry.tsx';
import Recall from './components/Recall.tsx';
import Applied from './components/Applied.tsx';
import SelectedDeployments from './components/SelectedDeployments.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import RecallFeature from './components/RecallFeature.tsx';
import CCPPublication from './components/CCPPublication.tsx';
import { INSTRUMENTS } from './data/instruments.ts';

// Derive current "page" from both pathname (/recall) and hash (#catalog etc.)
const getPage = (): string => {
  if (window.location.pathname === '/recall') return '/recall';
  return window.location.hash || '#home';
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(getPage());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPage());
      const hash = window.location.hash || '#home';
      const subPages = [
        '#privacy', '#catalog', '#timeline', '#philosophy',
        '#lab-notes', '#gpts', '#ccp', '#applied',
      ];
      if (subPages.includes(hash)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const handlePopState = () => {
      setCurrentPage(getPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderContent = useCallback(() => {
    switch (currentPage) {
      case '/recall':
        return <Recall />;
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
      case '#ccp':
        return <CCPPublication />;
      case '#applied':
        return <Applied />;
      // legacy hash route — fallback
      case '#recall':
        return <Recall />;
      default:
        return (
          <>
            {/* ── 1. Identity: what this lab is ── */}
            <Introduction />

            {/* ── 2. Proof architecture: how coherence is measured ── */}
            <ProofArchitecture />

            {/* ── 3. Concrete evidence: one actual trace receipt ── */}
            <ExampleTrace />

            {/* ── 4. Primary instruments: the 5 flagship instruments ── */}
            <FeaturedInstruments />

            {/* ── 5. Lab output: what the lab produces ── */}
            <ResearchOutputs />

            {/* ── 6. Research publications: formal published work ── */}
            <ResearchPublications />

            {/* ── 7. Full ecosystem: all 45 instruments (links to #catalog) ── */}
            <ResearchEcosystem />

            {/* ── 8. Operating standards ── */}
            <BehavioralStandards />
            <IsoFramework />

            {/* ── 9. Field results: deployed instruments with research framing ── */}
            <CaseStudies />

            {/* ── 10. Recall as deployed instrument ── */}
            <RecallFeature />

            {/* ── 11. Selected Deployments (replaces commercial block) ── */}
            <SelectedDeployments />

            {/* ── 12. Contact ── */}
            <Contact />
          </>
        );
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-cs-black text-cs-white font-body">
      <Navbar />
      <main className="relative z-10 pt-[60px]">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-cs-gray-700 bg-cs-black">
        <div className="max-w-[1100px] mx-auto">

          {/* Top row: wordmark + nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

            {/* Wordmark */}
            <div className="col-span-2 md:col-span-1">
              <div className="font-display font-extrabold tracking-[-0.03em] text-lg leading-tight mb-3">
                Celaya
                <span className="font-mono text-[0.875rem] font-normal tracking-[0.35em] uppercase text-cs-orange block" style={{ marginTop: '2px' }}>
                  Solutions
                </span>
              </div>
              <p className="font-body text-[0.875rem] text-cs-gray-400 mb-1">
                Independent AI Research Lab
              </p>
              <p className="font-mono text-[0.75rem] text-cs-gray-600 uppercase tracking-[0.1em]">
                El Paso, Texas
              </p>
            </div>

            {/* Research */}
            <div>
              <p className="font-mono text-[0.65rem] text-cs-gray-600 uppercase tracking-[0.2em] mb-4">
                Research
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Instruments',   href: '#catalog'    },
                  { label: 'Lab Notes',     href: '#lab-notes'  },
                  { label: 'Publications',  href: '#ccp'        },
                  { label: 'Philosophy',    href: '#philosophy' },
                  { label: 'Timeline',      href: '#timeline'   },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = l.href.replace('#', '');
                      }}
                      className="font-mono text-[0.8rem] text-cs-gray-400 hover:text-cs-orange transition-colors uppercase tracking-[0.08em]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="font-mono text-[0.65rem] text-cs-gray-600 uppercase tracking-[0.2em] mb-4">
                Instruments
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Recall',         href: '/recall',    path: true },
                  { label: 'GPT Registry',   href: '#gpts'               },
                  { label: 'Applied Work',   href: '#applied'            },
                  { label: 'Standards',      href: '#standards'          },
                  { label: 'Privacy',        href: '#privacy'            },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (l.path) {
                          window.history.pushState({}, '', l.href);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          window.location.hash = l.href.replace('#', '');
                        }
                      }}
                      className="font-mono text-[0.8rem] text-cs-gray-400 hover:text-cs-orange transition-colors uppercase tracking-[0.08em]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-mono text-[0.65rem] text-cs-gray-600 uppercase tracking-[0.2em] mb-4">
                Contact
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@celayasolutions.com"
                    className="font-mono text-[0.8rem] text-cs-gray-400 hover:text-cs-orange transition-colors"
                  >
                    hello@celayasolutions.com
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); window.location.hash = 'contact'; }}
                    className="font-mono text-[0.8rem] text-cs-gray-400 hover:text-cs-orange transition-colors uppercase tracking-[0.08em]"
                  >
                    Contact Form
                  </a>
                </li>
                <li>
                  <a
                    href="#applied"
                    onClick={(e) => { e.preventDefault(); window.location.hash = 'applied'; }}
                    className="font-mono text-[0.8rem] text-cs-orange hover:brightness-110 transition-colors uppercase tracking-[0.08em]"
                  >
                    Work With the Lab →
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-cs-gray-800">
            <div className="flex items-center gap-6">
              <p className="font-mono text-[0.75rem] text-cs-gray-600">
                &copy; {new Date().getFullYear()} Celaya Solutions
              </p>
              <span className="font-mono text-[0.75rem] text-cs-gray-700">v1.0.0</span>
            </div>
            <p className="font-mono text-[0.875rem] text-cs-orange tracking-[0.1em]">
              Make Coherence Visible
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
