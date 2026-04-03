/* Brand tokens: cs-orange, cs-green, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { CUSTOM_GPTS, CustomGpt } from '../data/gpts.ts';

const GptCard: React.FC<{ item: CustomGpt }> = ({ item }) => {
  const isExternal = item.url.startsWith('http');

  return (
    <a
      href={item.url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group text-left border border-cs-gray-700 bg-cs-gray-900 p-6 rounded hover:bg-cs-gray-800 transition-colors flex flex-col h-full"
    >
      <header className="mb-6 w-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(t => (
              <span key={t} className="px-2 py-1 font-mono text-[0.875rem] rounded-sm border border-cs-gray-600 bg-transparent text-cs-gray-400 uppercase tracking-[0.1em]">
                {t}
              </span>
            ))}
          </div>
          {isExternal ? (
            <ExternalLink className="w-4 h-4 text-cs-gray-300 group-hover:text-cs-orange transition-colors" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-cs-gray-300 group-hover:text-cs-orange transition-colors" />
          )}
        </div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-display text-xl font-bold tracking-tight group-hover:text-cs-orange transition-colors">
            {item.title}
          </h3>
          <span className="font-mono text-[0.875rem] text-cs-gray-300 border border-cs-gray-600 px-1.5 py-0.5 rounded uppercase tracking-widest">{item.platform}</span>
        </div>
        {item.subtitle && (
          <p className="font-mono text-[0.875rem] text-cs-gray-400 uppercase tracking-widest">{item.subtitle}</p>
        )}
      </header>

      <div className="space-y-4 flex-grow w-full">
        <section>
          <h4 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-2">What it is</h4>
          <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed">{item.whatItIs}</p>
        </section>
        <section>
          <h4 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-2">Operational Utility</h4>
          <p className="font-body text-[0.875rem] text-cs-gray-400 italic leading-relaxed">{item.exampleUseCase}</p>
        </section>
      </div>

      <footer className="mt-6 pt-4 border-t border-cs-gray-700 w-full">
        <h4 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-2">Stop-and-Think</h4>
        <p className="font-mono text-[0.875rem] text-cs-gray-400 leading-relaxed group-hover:text-cs-gray-300 transition-colors">
          "{item.stopAndThink}"
        </p>
      </footer>
    </a>
  );
};

const GptRegistry: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Laboratory Node Inventory
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            GPTS
          </h2>
          <p className="font-body text-lg text-cs-gray-400 max-w-3xl">
            Discrete agentic nodes deployed on the OpenAI ecosystem. These are public-facing instruments designed for specific regional and industrial reasoning tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {CUSTOM_GPTS.map((gpt) => (
            <GptCard key={gpt.slug} item={gpt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptRegistry;
