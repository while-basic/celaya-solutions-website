//----------------------------------------------------------------------------
// File:       Navbar.tsx
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Main navigation bar with mobile responsive menu
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xs">CS</span>
          </div>
          <span className="font-mono text-sm tracking-tighter uppercase font-medium">Celaya Solutions</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#clos" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">CLOS</a>
          <a href="#research" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Research</a>
          <a href="#lab-notes" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Lab Notes</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            <a href="#clos" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">CLOS</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Research</a>
            <a href="#lab-notes" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Lab Notes</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
