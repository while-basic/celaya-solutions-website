/* Brand tokens: cs-orange, cs-gray-700, cs-font-mono, cs-font-display */
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Research',     href: '#research' },
    { name: 'Standards',    href: '#standards' },
    { name: 'Philosophy',   href: '#philosophy' },
    { name: 'Lab Notes',    href: '#lab-notes' },
    { name: 'Instruments',  href: '#catalog' },
    { name: 'Papers',       href: '#ccp' },
    { name: 'Recall',       href: '/recall', product: true },
    { name: 'Contact',      href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      // Path-based navigation (e.g. /recall) — use History API
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Hash-based navigation
    // If currently on a path page (/recall), navigate back to root first
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const hash = href.replace('#', '');
    window.location.hash = hash;
    if (window.location.hash === `#${hash}`) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRecallActive = window.location.pathname === '/recall';
  const currentHash    = window.location.hash || '#home';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-cs-gray-700"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-[1100px] mx-auto px-10 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer" onClick={(e) => handleNavClick(e as any, '#home')}>
          <div className="font-display font-extrabold tracking-[-0.03em] text-lg leading-tight">
            Celaya
            <span
              className="font-mono text-[0.875rem] font-normal tracking-[0.35em] uppercase text-cs-orange block"
              style={{ marginTop: '2px' }}
            >
              Solutions
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.product ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`inline-flex items-center gap-1.5 font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-sm border transition-colors duration-200 ${
                  isRecallActive
                    ? 'border-cs-orange text-cs-orange'
                    : 'border-cs-gray-600 text-cs-gray-400 hover:border-cs-orange hover:text-cs-orange'
                }`}
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-cs-green" />
                {link.name}
              </a>
            ) : (
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
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-cs-black z-50 flex flex-col p-10 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`inline-flex items-center gap-2 font-mono text-lg font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                (link.product ? isRecallActive : currentHash === link.href)
                  ? 'text-cs-orange'
                  : 'text-cs-gray-400 hover:text-cs-orange'
              }`}
            >
              {link.product && (
                <span className="block w-2 h-2 rounded-full bg-cs-green flex-shrink-0" />
              )}
              {link.name}
              {link.product && (
                <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-cs-green border border-cs-green/30 px-1.5 py-0.5 rounded-sm">
                  live
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
