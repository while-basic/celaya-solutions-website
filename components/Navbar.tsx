/* Brand tokens: cs-orange, cs-gray-700, cs-font-mono, cs-font-display */
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Research', href: '#research' },
    { name: 'Standards', href: '#standards' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Lab Notes', href: '#lab-notes' },
    { name: 'Instruments', href: '#catalog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const hash = href.replace('#', '');
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
    if (window.location.hash === `#${hash}`) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentHash = window.location.hash || '#home';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cs-gray-700" style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-[1100px] mx-auto px-10 h-[60px] flex items-center justify-between">
        {/* Logo lockup */}
        <div
          className="cursor-pointer group"
          onClick={(e) => handleNavClick(e as any, '#home')}
        >
          <div className="font-display font-extrabold tracking-[-0.03em] text-lg leading-tight">
            Celaya
            <span className="font-mono text-[0.875rem] font-normal tracking-[0.35em] uppercase text-cs-orange block" style={{ marginTop: '2px' }}>
              Solutions
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                currentHash === link.href ? 'text-cs-orange' : 'text-cs-gray-400 hover:text-cs-orange'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-cs-black z-50 flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-lg font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                currentHash === link.href ? 'text-cs-orange' : 'text-cs-gray-400 hover:text-cs-orange'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
