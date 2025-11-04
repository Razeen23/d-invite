// src/components/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, X } from 'lucide-react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasUnmutedRef = useRef(false);

  // Initialize audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume and start muted
    audio.volume = 0.3;
    audio.muted = true;

    const unmuteAudio = () => {
      if (hasUnmutedRef.current) return;
      
      audio.muted = false;
      setIsMuted(false);
      hasUnmutedRef.current = true;
      setShowWelcomePopup(false);
      console.log('Audio unmuted');
    };

    const handleScroll = () => {
      if (!hasUnmutedRef.current) {
        unmuteAudio();
      }
      document.removeEventListener('scroll', handleScroll);
    };

    // Function to handle user interaction
    const handleUserInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          console.log('Playback started after user interaction');
          unmuteAudio();
        } catch (err) {
          console.log('Playback failed:', err);
        }
      }
    };

    // Try to play immediately (muted)
    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        console.log('Autoplay successful (muted)');
        
        // Unmute after 0.5 seconds
        const timeoutId = setTimeout(() => {
          unmuteAudio();
        }, 500);
        
        // Also unmute on first scroll
        document.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
          clearTimeout(timeoutId);
          document.removeEventListener('scroll', handleScroll);
        };
        
      } catch (err) {
        console.log('Autoplay blocked, showing welcome popup:', err);
        
        // Show welcome popup when autoplay is blocked
        setShowWelcomePopup(true);
        
        // Set up interaction handlers
        const interactionHandler = async () => {
          await handleUserInteraction();
          document.removeEventListener('click', interactionHandler);
          document.removeEventListener('touchstart', interactionHandler);
        };

        document.addEventListener('click', interactionHandler);
        document.addEventListener('touchstart', interactionHandler);
        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
          document.removeEventListener('click', interactionHandler);
          document.removeEventListener('touchstart', interactionHandler);
          document.removeEventListener('scroll', handleScroll);
        };
      }
    };

    tryPlay();
  }, []);

  const handleUnmuteClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      }
      audio.muted = false;
      setIsMuted(false);
      hasUnmutedRef.current = true;
      setShowWelcomePopup(false);
      console.log('Manual unmute successful');
    } catch (err) {
      console.log('Manual unmute failed:', err);
    }
  };

  const closePopup = () => {
    // Stop the audio completely when user chooses to continue without music
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
      setIsMuted(true);
      hasUnmutedRef.current = true; // Prevent any future auto-unmute attempts
    }
    setShowWelcomePopup(false);
    console.log('Music stopped - continuing without music');
  };

  const toggleMute = () => {
    if (audioRef.current) {
      // If muting and audio is playing, pause it completely
      if (!isMuted && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log('Music paused');
      } 
      // If unmuting and audio is paused, play it
      else if (isMuted && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            audioRef.current.muted = false;
            setIsMuted(false);
            console.log('Music resumed');
          })
          .catch(err => console.log('Resume failed:', err));
      }
      // Just toggle mute state if audio is playing
      else {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        console.log('Mute toggled:', !isMuted);
      }
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/music/wedding-music.mp3" type="audio/mpeg" />
        <source src="/music/wedding-music.ogg" type="audio/ogg" />
        <source src="/music/wedding-music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Welcome Popup - Only shows when autoplay is blocked */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-burgundy to-dark-burgundy rounded-3xl p-8 mx-4 max-w-md w-full border-2 border-gold/30 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gold hover:text-light-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Volume2 className="w-8 h-8 text-burgundy" />
                </motion.div>

                <h3 className="luxury-heading text-2xl text-gold mb-3">
                  Assalamu Alaikum
                </h3>
                
                <p className="luxury-text text-white/80 mb-6 leading-relaxed">
                  Welcome to our wedding celebration! Click the button below to enable background music and enhance your experience.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUnmuteClick}
                  className="luxury-btn bg-gradient-to-r from-gold to-light-gold text-burgundy px-8 py-3 rounded-2xl font-semibold text-lg flex items-center gap-3 mx-auto"
                >
                  <Volume2 className="w-5 h-5" />
                  Enable Background Music
                </motion.button>

                <button
                  onClick={closePopup}
                  className="luxury-text text-gold/70 hover:text-gold mt-4 transition-colors"
                >
                  Continue without music
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute/Unmute Button - Only show if music was enabled */}
      <AnimatePresence>
        {hasUnmutedRef.current && !isMuted && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-gradient-to-br from-burgundy to-dark-burgundy rounded-2xl flex items-center justify-center shadow-2xl border-2 border-gold/30 backdrop-blur-sm"
            title={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-gold" />
            ) : (
              <Volume2 className="w-6 h-6 text-gold" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;