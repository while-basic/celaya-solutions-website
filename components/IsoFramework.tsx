
import React from 'react';
import { ShieldCheck, Layers, Activity, FileCheck, Info } from 'lucide-react';

const IsoFramework: React.FC = () => {
  const standards = [
    {
      id: 'ISO 9001',
      title: 'Research process integrity',
      icon: <FileCheck className="w-5 h-5" />,
      items: ['Versioned experiments', 'Repeatable pipelines', 'Controlled change records', 'Traceable decisions']
    },
    {
      id: 'ISO/IEC 27001',
      title: 'Information security',
      icon: <ShieldCheck className="w-5 h-5" />,
      items: ['Local-first data handling', 'Encrypted storage', 'Explicit access boundaries', 'No passive surveillance']
    },
    {
      id: 'ISO/IEC 23894',
      title: 'AI risk management',
      icon: <Activity className="w-5 h-5" />,
      items: ['Hazard identification per system', 'Misuse and drift detection', 'Human override points', 'Safe failure modes']
    },
    {
      id: 'ISO/IEC 25010',
      title: 'System quality',
      icon: <Layers className="w-5 h-5" />,
      items: ['Reliability under iteration', 'Explainability as a metric', 'Maintainability over performance', 'Auditability by default']
    }
  ];

  return (
    <section id="iso-framework" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Governance Protocol</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">AI ISO Standards Framework</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              Defines how all research systems are constrained, audited, and made reproducible.
            </p>
            <div className="p-4 bg-zinc-950 border border-white/5 rounded-sm">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Framework Scope</p>
              <p className="text-xs text-zinc-400">Aligning research practices to international standards.</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {standards.map((s, idx) => (
            <div key={idx} className="glass-card border-white/5 p-8 rounded-sm hover:border-white/20 transition-all flex flex-col h-full group">
              <div className="flex items-center justify-between mb-8">
                <div className="text-zinc-600 group-hover:text-white transition-colors">{s.icon}</div>
                <span className="text-[10px] font-mono text-zinc-800 group-hover:text-zinc-600 transition-colors tracking-widest">{s.id}</span>
              </div>
              <h3 className="text-lg font-bold mb-6 tracking-tight">{s.title}</h3>
              <ul className="space-y-3 flex-grow">
                {s.items.map((item, i) => (
                  <li key={i} className="text-[11px] font-mono text-zinc-500 flex items-start space-x-2">
                    <span className="text-zinc-800 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center space-x-3 text-zinc-600">
             <Info className="w-4 h-4" />
             <p className="text-xs font-mono uppercase tracking-widest">
               Operational Principle: Standards act as constraints on exploration, not bureaucracy.
             </p>
           </div>
           <p className="text-xs text-zinc-500 italic">
             All artifacts are produced with the assumption they may be inspected years later.
           </p>
        </div>
      </div>
    </section>
  );
};

export default IsoFramework;
