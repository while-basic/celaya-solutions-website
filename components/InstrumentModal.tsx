
import React, { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { Instrument } from "../data/instruments.ts";

interface Props {
  open: boolean;
  item: Instrument | null;
  onClose: () => void;
}

export function InstrumentModal({ open, item, onClose }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm border border-white/10 bg-black p-10 md:p-14 shadow-2xl scrollbar-hide"
      >
        <div className="flex justify-between items-start mb-12">
          <h2 id={titleId} className="text-4xl font-bold tracking-tighter">
            {item.title}
          </h2>
          <button onClick={onClose} className="p-2 text-zinc-600 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-10">
          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Classification</h4>
            <p className="text-sm text-zinc-300">{item.classification}</p>
          </section>

          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Role</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.role}</p>
          </section>

          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Observed Inputs</h4>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
              {item.inputs.join(", ")}
            </p>
          </section>

          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Produced Artifacts</h4>
            <p className="text-sm text-zinc-400">
              {item.artifacts.join(", ")}
            </p>
          </section>

          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Failure Boundaries</h4>
            <ul className="space-y-2">
              {item.failureBoundaries.map((boundary, i) => (
                <li key={i} className="text-xs text-zinc-500 flex items-start space-x-3">
                  <span className="text-zinc-800 mt-1">•</span>
                  <span>{boundary}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-3">Research Status</h4>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{item.status}</p>
          </section>

          <div className="pt-10 border-t border-white/5">
            <p className="text-[10px] font-mono text-zinc-700 uppercase leading-relaxed tracking-wider italic">
              Constraint statement: This instrument is an analytical component. It is not a service, product, or guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
