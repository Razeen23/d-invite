// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Information from './components/Information';
import Location from './components/Location';
import Transportation from './components/Transportation';
import Contact from './components/Contact';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

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
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;