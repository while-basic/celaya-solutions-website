import React from 'react';
import { ShieldAlert, ZapOff, CheckCircle2 } from 'lucide-react';

const NotProductsBoundary: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Hard Boundary</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">This lab is not a product studio.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-16">
          <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
            <div className="flex items-center space-x-3 mb-8 text-white">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h3 className="text-xl font-bold uppercase tracking-tight">What we are</h3>
            </div>
            <ul className="space-y-6">
              {[
                "A cognitive systems research lab",
                "Industrial-grade builders of long-lived infrastructure",
                "A cross-domain synthesis hub (engineering × cognition)"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                  <span className="text-zinc-400 text-sm font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors">
            <div className="flex items-center space-x-3 mb-8 text-white">
              <ZapOff className="w-5 h-5 text-red-500/50" />
              <h3 className="text-xl font-bold uppercase tracking-tight">What we are not</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Generic AI SaaS",
                "Prototype factory",
                "Speculative hype house",
                "Replacement narratives"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                  <span className="text-zinc-500 text-sm font-light leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-10 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <ShieldAlert className="w-8 h-8 text-zinc-800" />
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Unifying Rule</p>
              <p className="text-lg font-bold tracking-tight">Local-first, audit-first, human-judgment-first.</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm italic text-right">
            "These instruments are designed to remain useful even if today’s AI paradigms collapse."
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotProductsBoundary;