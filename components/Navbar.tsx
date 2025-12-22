
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xs">CS</span>
          </div>
          <span className="font-mono text-sm tracking-tighter uppercase font-medium">Celaya Solutions</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#clos" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">CLOS</a>
          <a href="#philosophy" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Philosophy</a>
          <a href="#capabilities" className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">Systems</a>
          <a href="#contact" className="px-4 py-2 border border-white/20 text-xs font-mono uppercase hover:bg-white hover:text-black transition-all">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
