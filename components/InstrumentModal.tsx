/* Brand tokens: cs-orange, cs-gray-500, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded border border-cs-gray-700 bg-cs-black p-10 md:p-14 scrollbar-hide"
        style={{ boxShadow: 'var(--cs-shadow-md)' }}
      >
        <div className="flex justify-between items-start mb-10">
          <h2 id={titleId} className="font-display text-4xl font-extrabold tracking-[-0.03em]">
            {item.title}
          </h2>
          <button onClick={onClose} className="p-2 text-cs-gray-400 hover:text-cs-orange transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Classification</h4>
            <p className="font-body text-base text-cs-gray-300">{item.classification}</p>
          </section>

          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Role</h4>
            <p className="font-body text-base text-cs-gray-400 leading-relaxed">{item.role}</p>
          </section>

          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Observed Inputs</h4>
            <p className="font-mono text-[0.875rem] text-cs-gray-400 uppercase tracking-widest leading-relaxed">
              {item.inputs.join(", ")}
            </p>
          </section>

          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Produced Artifacts</h4>
            <p className="font-body text-base text-cs-gray-400">
              {item.artifacts.join(", ")}
            </p>
          </section>

          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Failure Boundaries</h4>
            <ul className="space-y-2">
              {item.failureBoundaries.map((boundary, i) => (
                <li key={i} className="font-body text-[0.875rem] text-cs-gray-400 flex items-start gap-2">
                  <span className="text-cs-gray-600 mt-0.5">&#8226;</span>
                  <span>{boundary}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">Research Status</h4>
            <p className="font-mono text-base text-cs-gray-400 uppercase tracking-widest">{item.status}</p>
          </section>

          <div className="pt-8 border-t border-cs-gray-700">
            <p className="font-mono text-[0.875rem] text-cs-gray-500 italic leading-relaxed">
              Constraint statement: This instrument is an analytical component. It is not a service, product, or guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
