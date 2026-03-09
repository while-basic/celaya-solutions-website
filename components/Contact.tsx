/* Brand tokens: cs-orange, cs-gray-400, cs-gray-700, cs-font-mono */
import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Contact
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8">
          Direct Line
        </h2>

        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-10 max-w-xl">
          No contact form. No newsletter. No tracking. Reach out directly via email.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:hello@celayasolutions.com"
            className="inline-flex items-center gap-3 text-cs-gray-300 hover:text-cs-orange transition-colors duration-200 group"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-base tracking-[0.05em]">hello@celayasolutions.com</span>
          </a>
          <a
            href="mailto:chris@chriscelaya.com"
            className="inline-flex items-center gap-3 text-cs-gray-300 hover:text-cs-orange transition-colors duration-200 group"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-base tracking-[0.05em]">chris@chriscelaya.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
