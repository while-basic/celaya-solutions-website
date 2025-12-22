//----------------------------------------------------------------------------
// File:       Footer.tsx
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Website footer with contact and social links
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-xs">CS</span>
            </div>
            <span className="font-mono text-sm tracking-tighter uppercase font-medium">
              Celaya Solutions
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://celayasolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
              data-test="footer-website"
            >
              <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase">Website</span>
            </a>

            <a
              href="mailto:hello@celayasolutions.com"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
              data-test="footer-email"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono">hello@celayasolutions.com</span>
            </a>

            <a
              href="https://linkedin.com/company/celaya-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
              data-test="footer-linkedin"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase">LinkedIn</span>
            </a>

            <a
              href="https://github.com/while-basic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
              data-test="footer-github"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase">GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Celaya Solutions. All rights reserved.</p>
          <p className="text-zinc-700">
            Built with 🤍 by{' '}
            <a
              href="https://celayasolutions.com"
              className="hover:text-white transition-colors"
            >
              Celaya Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

