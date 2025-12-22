//----------------------------------------------------------------------------
// File:       Router.tsx
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Simple client-side router for page navigation
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import ResearchDetail from '../pages/ResearchDetail';
import LabNotesPage from '../pages/LabNotesPage';

export type Route = 
  | { type: 'home' }
  | { type: 'lab-notes' }
  | { type: 'research-detail'; id: string }
  | { type: 'lab-note-detail'; id: string };

interface RouterProps {
  children: React.ReactNode;
}

export const RouterContext = React.createContext<{
  currentRoute: Route;
  navigate: (route: Route) => void;
}>({
  currentRoute: { type: 'home' },
  navigate: () => {},
});

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<Route>({ type: 'home' });

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    if (route.type === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle hash-based navigation for section scrolling on home page
    const scrollToSection = (hash: string) => {
      if (!hash) return;
      
      // These are section IDs on the home page, not routes
      const sectionIds = ['clos', 'story', 'research', 'lab-notes', 'philosophy', 'capabilities', 'contact'];
      
      if (sectionIds.includes(hash)) {
        // Ensure we're on home route (hash links should show home page)
        if (currentRoute.type !== 'home') {
          setCurrentRoute({ type: 'home' });
        }
        
        // Wait for DOM to be ready, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    };

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      scrollToSection(hash);
    };

    // Handle initial hash on load
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      scrollToSection(hash);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle browser back/forward buttons
    const handlePopState = () => {
      // Could implement URL-based routing here if needed
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentRoute]);

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {currentRoute.type === 'home' ? (
        children
      ) : currentRoute.type === 'lab-notes' ? (
        <LabNotesPage
          onBack={() => navigate({ type: 'home' })}
          onSelectItem={(id) => navigate({ type: 'lab-note-detail', id })}
        />
      ) : currentRoute.type === 'research-detail' ? (
        <ResearchDetail
          id={currentRoute.id}
          onBack={() => navigate({ type: 'home' })}
        />
      ) : currentRoute.type === 'lab-note-detail' ? (
        <ResearchDetail
          id={currentRoute.id}
          onBack={() => navigate({ type: 'lab-notes' })}
        />
      ) : null}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
};

