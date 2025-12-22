//----------------------------------------------------------------------------
// File:       App.tsx
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Main application component with routing and layout structure
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClosSection from './components/ClosSection';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import UserJourney from './components/UserJourney';
import Research from './components/Research';
import LabNotes from './components/LabNotes';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Router } from './components/Router';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.body.style.setProperty('--scroll', scrolled.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen selection:bg-white selection:text-black relative">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Hero />
            
            <ClosSection />
            <UserJourney />
            <Story />
            <Research />
            <LabNotes />
            <Philosophy />
            <ArchitectureDiagram />
            <Capabilities />
          </main>

          {/* Footer */}
          <Footer />

          {/* Subtle Bottom Glow */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl pointer-events-none z-20"></div>
          
          {/* Claude Chatbot */}
          <Chatbot />
        </div>
      </div>
    </Router>
  );
};

export default App;
