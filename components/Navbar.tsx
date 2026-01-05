
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'CLOS', href: '#clos' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Lab Notes', href: '#lab-notes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instruments', href: '#catalog' },
    { name: 'GPTS', href: '#gpts' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const hash = href.replace('#', '');
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
    
    // Fallback: if we're already on that hash, manually trigger scroll
    if (window.location.hash === `#${hash}`) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={(e) => handleNavClick(e as any, '#home')}
        >
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
            <span className="text-black font-bold text-xs">CS</span>
          </div>
          <span className="font-mono text-sm tracking-tighter uppercase font-medium">Celaya Solutions</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 border border-white/20 text-xs font-mono uppercase hover:bg-white hover:text-black transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-mono uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center px-4 py-3 border border-white/20 text-sm font-mono uppercase hover:bg-white hover:text-black transition-all"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
