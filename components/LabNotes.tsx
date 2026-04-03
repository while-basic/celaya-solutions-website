/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React, { useState, useMemo } from 'react';
import { Microscope, Shield, Brain, FileText, AlertOctagon, Anchor } from 'lucide-react';

type EntryType = 'Observation' | 'Constraint Added' | 'Instrument Introduced' | 'Revision' | 'Failure / Boundary';

interface LabNote {
  id: string;
  date: string;
  type: EntryType;
  category: 'Cognitive' | 'Industrial' | 'Inference' | 'Privacy' | 'Biometrics' | 'Hardware';
  title: string;
  evidence: string;
  significance: string;
  hypothesis?: string;
  artifacts?: string[];
  instruments?: string[];
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
      significance: "Indicates that the presence of a 'reflection gap' (even if brief) was recorded alongside lower subjective fatigue scores.",
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
      title: "Enclave Key Rotation Logic",
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
      case 'Observation': return 'bg-cs-yellow/10 text-cs-yellow border-cs-yellow/25';
      case 'Constraint Added': return 'bg-cs-orange/10 text-cs-orange border-cs-orange/30';
      case 'Instrument Introduced': return 'bg-cs-green/10 text-cs-green border-cs-green/25';
      case 'Revision': return 'bg-cs-gray-600 text-cs-gray-300 border-cs-gray-500';
      case 'Failure / Boundary': return 'bg-red-500/10 text-red-400 border-red-500/20';
    }
  };

  return (
    <div id="lab-notes-container" className="py-24">
      <div className="max-w-[1100px] mx-auto px-10">
        {/* Framing Block */}
        <div className="mb-16 p-6 border border-cs-gray-700 bg-cs-gray-900 rounded">
          <h3 className="font-mono text-[0.875rem] uppercase tracking-[0.15em] text-cs-gray-400 mb-4">Research Log Framing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-[0.875rem] uppercase text-cs-gray-300 tracking-widest mb-2">Purpose</h4>
              <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed">Lab Notes serve as a raw research log, not marketing commentary. They record empirical observations as they occur.</p>
            </div>
            <div>
              <h4 className="font-mono text-[0.875rem] uppercase text-cs-gray-300 tracking-widest mb-2">Rule</h4>
              <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed">Entries must declare a standardized type and separate verifiable evidence from working hypotheses.</p>
            </div>
            <div>
              <h4 className="font-mono text-[0.875rem] uppercase text-cs-gray-300 tracking-widest mb-2">Scope</h4>
              <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed">Notes may be partial, unresolved, or superseded by later revisions. Transparency is prioritized over narrative.</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Research Log
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Lab Notes
          </h2>
          <p className="font-body text-lg text-cs-gray-400 italic max-w-3xl">
            Evidence-grade AI discovery and systems architecture log.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 mb-12">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-4 py-2 font-mono text-[0.875rem] uppercase tracking-[0.1em] border rounded transition-all
                ${activeType === t
                  ? 'bg-cs-orange text-cs-black border-cs-orange'
                  : 'bg-transparent text-cs-gray-400 border-cs-gray-700 hover:border-cs-orange hover:text-cs-orange'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Log List */}
        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <div key={note.id} className="border border-cs-gray-700 bg-cs-gray-900 rounded p-6 hover:bg-cs-gray-800 transition-colors grid md:grid-cols-12 gap-6">
              {/* Metadata */}
              <div className="md:col-span-3 space-y-3">
                <span className="font-mono text-[0.875rem] text-cs-gray-300 block">{note.date}</span>
                <div className={`px-2 py-1 font-mono text-[0.875rem] uppercase tracking-[0.1em] border rounded-sm inline-block ${getTypeStyles(note.type)}`}>
                  {note.type}
                </div>
                <div className="pt-3 border-t border-cs-gray-700 space-y-2">
                  <div>
                    <span className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-widest block mb-1">Entry ID</span>
                    <span className="font-mono text-[0.875rem] text-cs-gray-400">{note.id}</span>
                  </div>
                  {note.instruments && (
                    <div>
                      <span className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-widest block mb-1">Instruments</span>
                      <span className="font-mono text-[0.875rem] text-cs-gray-400">{note.instruments.join(", ")}</span>
                    </div>
                  )}
                  {note.timelineLinked && (
                    <div className="flex items-center gap-2 text-cs-orange/50">
                      <Anchor className="w-3 h-3" />
                      <span className="font-mono text-[0.875rem] uppercase tracking-widest">Timeline Anchor</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-9 space-y-6">
                <header>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-1">{note.title}</h3>
                  <span className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-widest">{note.category} Node</span>
                </header>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-cs-gray-400 font-mono text-[0.875rem] uppercase tracking-widest">
                      <Microscope className="w-3 h-3" />
                      <span>Observation (Evidence)</span>
                    </h4>
                    <p className="font-body text-base text-cs-gray-300 leading-relaxed">
                      {note.evidence}
                    </p>
                    <div className="pt-3">
                      <h4 className="flex items-center gap-2 text-cs-gray-300 font-mono text-[0.875rem] uppercase tracking-widest mb-2">
                        <Shield className="w-3 h-3" />
                        <span>Technical Significance</span>
                      </h4>
                      <p className="font-mono text-[0.875rem] text-cs-gray-400 leading-relaxed">
                        {note.significance}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 border-l border-cs-gray-700 pl-6">
                    <h4 className="flex items-center gap-2 text-cs-gray-300 font-mono text-[0.875rem] uppercase tracking-widest">
                      <Brain className="w-3 h-3" />
                      <span>Working Hypothesis</span>
                    </h4>
                    <p className="font-body text-base text-cs-gray-400 italic leading-relaxed">
                      "{note.hypothesis || 'No speculative analysis recorded for this entry.'}"
                    </p>
                    {note.artifacts && (
                      <div className="pt-3">
                        <h4 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-widest mb-2">Linked Artifacts</h4>
                        <div className="flex flex-wrap gap-2">
                          {note.artifacts.map(art => (
                            <div key={art} className="flex items-center gap-2 px-2 py-1 bg-cs-gray-800 border border-cs-gray-700 rounded-sm">
                              <FileText className="w-3 h-3 text-cs-gray-300" />
                              <span className="font-mono text-[0.875rem] text-cs-gray-400">{art}</span>
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

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-cs-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-cs-gray-300">
            <AlertOctagon className="w-4 h-4" />
            <p className="font-mono text-[0.875rem] uppercase tracking-widest">
              Log Persistence: Integrity Locked.
            </p>
          </div>
          <p className="font-mono text-[0.875rem] text-cs-gray-300 italic text-right max-w-lg leading-relaxed">
            These notes record research state at time of writing. They are not commitments, conclusions, or guarantees.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LabNotes;
