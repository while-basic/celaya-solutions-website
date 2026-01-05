
import React, { useState, useMemo } from 'react';
import { Microscope, Activity, Cpu, Shield, Brain, Terminal, Zap, Info, FileText, AlertOctagon, History, Anchor } from 'lucide-react';

type EntryType = 'Observation' | 'Constraint Added' | 'Instrument Introduced' | 'Revision' | 'Failure / Boundary';

interface LabNote {
  id: string;
  date: string;
  type: EntryType;
  category: 'Cognitive' | 'Industrial' | 'Inference' | 'Privacy' | 'Biometrics' | 'Hardware';
  title: string;
  evidence: string; // The raw observation
  significance: string; // Why it matters for inspection/audit
  hypothesis?: string; // Working theory/speculation (Thinking)
  artifacts?: string[];
  instruments?: string[]; // Primary instrument(s) involved
  timelineLinked?: boolean;
}

const LabNotes: React.FC = () => {
  const [activeType, setActiveType] = useState<EntryType | 'All'>('All');

  const notes: LabNote[] = [
    {
      id: "LOG-2025.01.05-01",
      date: "2025.01.05",
      type: "Constraint Added",
      category: "Hardware",
      title: "ISO-Standard Audit Logging Protocol",
      evidence: "Defined mandatory logging schema for all prompt-instrument interactions. System now enforces immutable trace recording at the gRPC layer.",
      significance: "Establishes the minimum evidence required for independent verification and reproducibility of system behaviors.",
      hypothesis: "Standardized logging will likely reveal hidden state transitions between modular agents that were previously opaque.",
      instruments: ["Synapse", "Artifacts"],
      timelineLinked: true,
      artifacts: ["ISO-23894-L1"]
    },
    {
      id: "LOG-2024.12.15-01",
      date: "2024.12.15",
      type: "Observation",
      category: "Cognitive",
      title: "Voice Fragment Capture Latency",
      evidence: "A 22% delta in reported cognitive load was recorded during N=1 trials. HRV-derived features were logged as exploratory proxies; no correlation was claimed.",
      significance: "Indicates that the presence of a 'reflection gap'—even if brief—was recorded alongside lower subjective fatigue scores.",
      hypothesis: "The act of verbalization itself may be the load-reducer, independent of the AI's subsequent processing.",
      instruments: ["CLOS", "Volt"],
      timelineLinked: true
    },
    {
      id: "LOG-2024.11.30-02",
      date: "2024.11.30",
      type: "Failure / Boundary",
      category: "Inference",
      title: "Real-time HRV Flow Alerts",
      evidence: "Alerting mechanism was found to interrupt deep work cycles. User interaction logs showed a decrease in sustained focus markers following notification triggers.",
      significance: "Determined that proactive interruption for 'flow protection' is counter-productive; state change must be passive and user-queried.",
      hypothesis: "Internal states are too fragile for external feedback loops; the 'Mirror' must remain silent until invoked.",
      instruments: ["Volt", "CLOS"],
      timelineLinked: false
    },
    {
      id: "LOG-2024.11.12-01",
      date: "2024.11.12",
      type: "Revision",
      category: "Privacy",
      title: "Enclave Key Rotation logic",
      evidence: "Transitioned from session-based keys to hardware-bound secure enclave identities for local RAG storage.",
      significance: "Removes dependencies on software-level key management, ensuring privacy is anchored in physical silicon.",
      hypothesis: "This migration should reduce the attack surface for local-first context snapshots.",
      instruments: ["LMU", "Synapse"],
      timelineLinked: true,
      artifacts: ["PRIV-v1.2"]
    },
    {
      id: "LOG-2024.10.05-03",
      date: "2024.10.05",
      type: "Instrument Introduced",
      category: "Hardware",
      title: "LMU (Language Module Unit)",
      evidence: "The LMU was introduced to partition compute resources for edge-based inference. First execution traces were successfully captured.",
      significance: "Allows for the isolation of cognitive telemetry from general-purpose OS processes.",
      instruments: ["LMU"],
      timelineLinked: true
    }
  ];

  const types: (EntryType | 'All')[] = ['All', 'Observation', 'Constraint Added', 'Instrument Introduced', 'Revision', 'Failure / Boundary'];

  const filteredNotes = useMemo(() => {
    return notes.filter(n => activeType === 'All' || n.type === activeType);
  }, [activeType]);

  const getTypeStyles = (type: EntryType) => {
    switch (type) {
      case 'Observation': return 'border-zinc-500/20 text-zinc-400 bg-zinc-500/5';
      case 'Constraint Added': return 'border-blue-500/20 text-blue-500/80 bg-blue-500/5';
      case 'Instrument Introduced': return 'border-emerald-500/20 text-emerald-500/80 bg-emerald-500/5';
      case 'Revision': return 'border-amber-500/20 text-amber-500/80 bg-amber-500/5';
      case 'Failure / Boundary': return 'border-red-500/20 text-red-500/80 bg-red-500/5';
    }
  };

  return (
    <div id="lab-notes-container" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Framing Block */}
      <div className="mb-20 p-8 border border-white/10 bg-zinc-950/50 rounded-sm">
        <div className="flex items-center space-x-3 mb-6">
          <Terminal className="w-5 h-5 text-white/40" />
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">Research Log Framing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Purpose</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Lab Notes serve as a raw research log, not marketing commentary. They record empirical observations as they occur.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Rule</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Entries must declare a standardized type and separate verifiable evidence from working hypotheses.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Scope</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">Notes may be partial, unresolved, or superseded by later revisions. Transparency is prioritized over narrative.</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-16 border-l border-white/10 pl-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Lab Notes</h1>
        <p className="text-xl text-zinc-500 font-light max-w-3xl italic">
          Evidence-grade AI discovery and systems architecture log.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 mb-12">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest border transition-all rounded-sm
              ${activeType === t 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Log List */}
      <div className="space-y-8">
        {filteredNotes.map((note) => (
          <div key={note.id} className="group grid md:grid-cols-12 gap-8 p-8 border border-white/5 hover:border-white/10 bg-zinc-950/20 transition-all rounded-sm">
            {/* Metadata Sidebar */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] font-mono text-zinc-600 tracking-widest">{note.date}</span>
                <div className={`px-2 py-1 text-[9px] font-mono uppercase tracking-widest border rounded-sm inline-block w-fit ${getTypeStyles(note.type)}`}>
                  {note.type}
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div>
                  <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-widest block mb-1">Entry ID</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">{note.id}</span>
                </div>

                {note.instruments && (
                  <div>
                    <span className="text-[9px] font-mono text-zinc-800 uppercase tracking-widest block mb-1">Instruments</span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">
                      {note.instruments.join(", ")}
                    </span>
                  </div>
                )}

                {note.timelineLinked && (
                  <div className="flex items-center space-x-2 text-blue-500/40 group-hover:text-blue-500/70 transition-colors">
                    <Anchor className="w-3 h-3" />
                    <span className="text-[9px] font-mono uppercase tracking-widest">Timeline Anchor</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="md:col-span-9 space-y-8">
              <header>
                <h3 className="text-2xl font-bold tracking-tight mb-2">{note.title}</h3>
                <div className="flex items-center space-x-2 text-zinc-600">
                  <span className="text-[10px] font-mono uppercase tracking-widest">{note.category} Node</span>
                </div>
              </header>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Evidence Section */}
                <div className="space-y-4">
                  <h4 className="flex items-center space-x-2 text-zinc-400 text-[10px] font-mono uppercase tracking-widest">
                    <Microscope className="w-3 h-3" />
                    <span>Observation (Evidence)</span>
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {note.evidence}
                  </p>
                  
                  <div className="pt-4 space-y-3">
                    <h4 className="flex items-center space-x-2 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                      <Shield className="w-3 h-3" />
                      <span>Technical Significance</span>
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">
                      {note.significance}
                    </p>
                  </div>
                </div>

                {/* Thinking Section */}
                <div className="space-y-4 border-l border-white/5 pl-8 lg:pl-12">
                  <h4 className="flex items-center space-x-2 text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                    <Brain className="w-3 h-3" />
                    <span>Working Hypothesis (Thinking)</span>
                  </h4>
                  <p className="text-sm text-zinc-500 italic leading-relaxed font-light">
                    "{note.hypothesis || 'No speculative analysis recorded for this entry.'}"
                  </p>
                  
                  {note.artifacts && (
                    <div className="pt-4">
                      <h4 className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest mb-3">Linked Artifacts</h4>
                      <div className="flex flex-wrap gap-2">
                        {note.artifacts.map(art => (
                          <div key={art} className="flex items-center space-x-2 px-2 py-1 bg-white/5 border border-white/5 rounded-sm">
                            <FileText className="w-3 h-3 text-zinc-600" />
                            <span className="text-[9px] font-mono text-zinc-400">{art}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Rule */}
      <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3 text-zinc-700">
          <AlertOctagon className="w-4 h-4" />
          <p className="text-[10px] font-mono uppercase tracking-widest">
            Log Persistence: Integrity Locked. 
          </p>
        </div>
        <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em] italic text-right max-w-lg leading-relaxed">
          These notes record research state at time of writing. They are not commitments, conclusions, or guarantees.
        </p>
      </footer>
    </div>
  );
};

export default LabNotes;
