// src/App.js
import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';

// Lazy load components below the fold for better initial load performance
const Information = lazy(() => import('./components/Information'));
const Location = lazy(() => import('./components/Location'));
const Transportation = lazy(() => import('./components/Transportation'));
const Contact = lazy(() => import('./components/Contact'));
const RSVP = lazy(() => import('./components/RSVP'));
const PhotoCollection = lazy(() => import('./components/PhotoCollection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
// const LoadingFallback = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <div className="animate-pulse text-gold text-xl">Loading...</div>
//   </div>
// );

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
        <Suspense fallback={null}>
          <Information />
        </Suspense>
        <Suspense fallback={null}>
          <Location />
        </Suspense>
        <Suspense fallback={null}>
          <Transportation />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <RSVP />
        </Suspense>
        <Suspense fallback={null}>
          <PhotoCollection />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
    </div>
  );
}

export default App;