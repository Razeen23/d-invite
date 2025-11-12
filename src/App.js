// src/App.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Information from './components/Information';
import Location from './components/Location';
import Transportation from './components/Transportation';
import Contact from './components/Contact';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import PhotoCollection from './components/PhotoCollection';

function App() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  // Handle hash-based navigation (e.g., #photocollection)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          // Small delay to ensure page is rendered
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 500);
        }
      }
    };

    // Scroll on initial load if hash exists
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="App bg-gradient-to-br from-cream to-white">
      {/* MusicPlayer outside of animated content */}
      <MusicPlayer />
      
      <motion.div
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Hero />
        <Information />
        <Location />
        <Transportation />
        <Contact />                         
        <RSVP />
        <PhotoCollection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;