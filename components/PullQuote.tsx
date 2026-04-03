/* Brand tokens: cs-orange, cs-gray-*, cs-font-display, cs-font-mono */
import React from 'react';

const PullQuote: React.FC = () => {
  return (
    <section className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">
        <blockquote className="max-w-3xl mx-auto text-center">
          {/* Decorative mark */}
          <span className="font-display text-[4rem] leading-none text-cs-orange opacity-30 block mb-2 select-none" aria-hidden="true">
            "
          </span>
          <p className="font-display text-[1.75rem] md:text-[2.25rem] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-8">
            Most AI tools answer from the internet.
            <br className="hidden md:block" />
            Ours answer from your business.
          </p>
          <cite className="font-mono text-[0.875rem] tracking-[0.2em] uppercase text-cs-orange not-italic">
            — Celaya Solutions
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default PullQuote;
