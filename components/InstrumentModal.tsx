
import React, { useEffect, useId, useMemo, useRef } from "react";
import { X } from "lucide-react";
import type { Instrument } from "../data/instruments";

// Helper component for detail sections
// Defined at the top to ensure availability and using optional children to satisfy strict TSX checks in some environments
function DetailSection({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">{title}</h3>
      <div className="text-zinc-300">{children}</div>
    </section>
  );
}

// Helper component for list sections
function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section>
      <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((x, i) => (
          <li key={`${title}-${i}`} className="flex items-start space-x-3 group">
            <div className="mt-1.5 w-1 h-1 bg-zinc-800 rounded-full flex-shrink-0"></div>
            <span className="text-[11px] text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
              {x}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

type Props = {
  open: boolean;
  item: Instrument | null;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement>;
};

export function InstrumentModal({ open, item, onClose, returnFocusRef }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // basic focus trap (Tab cycles within modal)
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        const active = document.activeElement as HTMLElement | null;
        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Autofocus first focusable on open; return focus on close
  useEffect(() => {
    if (!open) {
      returnFocusRef?.current?.focus?.();
      return;
    }
    const t = window.setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus?.();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open, returnFocusRef]);

  const TagChips = useMemo(() => {
    if (!item) return null;
    return (
      <div className="flex gap-2 flex-wrap">
        {item.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-2 py-0.5 rounded-sm border border-white/10 bg-white/[0.04] text-zinc-500 uppercase tracking-widest"
          >
            {t}
          </span>
        ))}
      </div>
    );
  }, [item]);

  if (!open || !item) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        // click outside closes
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-sm border border-white/10 bg-zinc-950/80 p-8 md:p-12 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-300 scrollbar-hide"
      >
        {/* Header */}
        <div className="flex justify-between gap-12 items-start mb-12">
          <div className="flex-grow">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block mb-2">Research Instrument</span>
            <h2 id={titleId} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {item.title}
              {item.subtitle ? <span className="text-zinc-500 italic"> — {item.subtitle}</span> : null}
            </h2>
            {TagChips}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-3 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Core details */}
        <div className="space-y-10">
          <DetailSection title="What it is">
            <p className="text-zinc-300 leading-relaxed">{item.whatItIs}</p>
          </DetailSection>

          <DetailSection title="Example use case">
            <p className="text-sm text-zinc-400 leading-relaxed italic">{item.exampleUseCase}</p>
          </DetailSection>

          <DetailSection title="Stop-and-think">
            <p className="text-xs font-mono text-zinc-500 leading-relaxed border-l border-zinc-800 pl-4">
              "{item.stopAndThink}"
            </p>
          </DetailSection>

          {item.longForm && (
            <DetailSection title="Technical Narrative">
              <p className="text-sm text-zinc-400 leading-relaxed font-light">{item.longForm}</p>
            </DetailSection>
          )}

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <ListSection title="Inputs" items={item.inputs} />
            <ListSection title="Outputs" items={item.outputs} />
            <ListSection title="Guardrails" items={item.guardrails} />
            <ListSection title="Evidence Required" items={item.evidenceRequired} />
            <ListSection title="Failure Modes" items={item.failureModes} />
            <ListSection title="Provenance Notes" items={item.provenanceNotes} />
          </div>

          {item.links?.length ? (
            <DetailSection title="Associated Artifacts">
              <ul className="space-y-2">
                {item.links.map((l) => (
                  <li key={l.href}>
                    <a 
                      href={l.href} 
                      className="text-xs font-mono text-zinc-500 hover:text-white underline decoration-zinc-800 underline-offset-4 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
            <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">Celaya Solutions Lab Record</span>
            <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">{item.slug.toUpperCase()} / {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
