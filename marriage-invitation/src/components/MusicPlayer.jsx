// src/components/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, X } from 'lucide-react';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUnmuted, setHasUnmuted] = useState(false);
  const audioRef = useRef(null);

  // Debug: Log device info
  useEffect(() => {
    console.log('Device info:', {
      userAgent: navigator.userAgent,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      autoplaySupported: 'autoplay' in document.createElement('audio')
    });
  }, []);

  // Initialize audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log('Initializing audio...');

    // Set initial volume and start muted
    audio.volume = 0.3;
    audio.muted = true;

    const unmuteAudio = () => {
      if (hasUnmuted) return;
      
      audio.muted = false;
      setIsMuted(false);
      setHasUnmuted(true);
      setShowWelcomePopup(false);
      console.log('Audio unmuted successfully');
    };

    const handleScroll = () => {
      console.log('Scroll detected, attempting to unmute...');
      if (!hasUnmuted) {
        unmuteAudio();
      }
      document.removeEventListener('scroll', handleScroll);
    };

    // Function to handle user interaction
    const handleUserInteraction = async () => {
      console.log('User interaction detected');
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          console.log('Playback started after user interaction');
          unmuteAudio();
        } catch (err) {
          console.log('Playback failed after interaction:', err);
        }
      }
    };

    // Try to play immediately (muted)
    const tryPlay = async () => {
      try {
        console.log('Attempting autoplay...');
        await audio.play();
        setIsPlaying(true);
        console.log('Autoplay successful (muted)');
        
        // Unmute after 0.5 seconds
        const timeoutId = setTimeout(() => {
          console.log('Auto-unmuting after delay...');
          unmuteAudio();
        }, 500);
        
        // Also unmute on first scroll
        document.addEventListener('scroll', handleScroll, { passive: true });
        console.log('Scroll listener added');
        
        return () => {
          clearTimeout(timeoutId);
          document.removeEventListener('scroll', handleScroll);
        };
        
      } catch (err) {
        console.log('Autoplay BLOCKED, showing welcome popup:', err);
        
        // Show welcome popup when autoplay is blocked
        setShowWelcomePopup(true);
        console.log('Welcome popup should be visible now');
        
        // Set up interaction handlers
        const interactionHandler = async () => {
          console.log('Popup interaction handler triggered');
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

    // Add a small delay to ensure DOM is ready, especially on mobile
    const initTimer = setTimeout(() => {
      tryPlay();
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasUnmuted]);

  const handleUnmuteClick = async () => {
    console.log('Enable music button clicked');
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      }
      audio.muted = false;
      setIsMuted(false);
      setHasUnmuted(true);
      setShowWelcomePopup(false);
      console.log('Manual unmute successful');
    } catch (err) {
      console.log('Manual unmute failed:', err);
    }
  };

  const closePopup = () => {
    console.log('Closing popup, continuing without music');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsMuted(true);
      setHasUnmuted(true);
    }
    setShowWelcomePopup(false);
  };

  const toggleMute = () => {
    console.log('Toggle mute clicked - isMuted:', isMuted, 'isPlaying:', isPlaying);
    if (audioRef.current) {
      if (!isMuted && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log('Music paused');
      } else if (isMuted && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            audioRef.current.muted = false;
            setIsMuted(false);
            console.log('Music resumed');
          })
          .catch(err => console.log('Resume failed:', err));
      } else {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        console.log('Mute toggled:', !isMuted);
      }
    }
  };

  // Force show popup on mobile after a delay if it doesn't show automatically
  useEffect(() => {
    const mobilePopupTimer = setTimeout(() => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile && !showWelcomePopup && !hasUnmuted) {
        console.log('Force showing popup on mobile');
        setShowWelcomePopup(true);
      }
    }, 2000);

    return () => clearTimeout(mobilePopupTimer);
  }, [showWelcomePopup, hasUnmuted]);

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

      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-burgundy to-dark-burgundy rounded-3xl p-6 md:p-8 mx-auto max-w-md w-full border-2 border-gold/30 shadow-2xl"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gold hover:text-light-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

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
                
                <p className="luxury-text text-white/80 mb-6 leading-relaxed text-sm md:text-base">
                  Welcome to our wedding celebration! Click the button below to enable background music and enhance your experience.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUnmuteClick}
                  className="luxury-btn bg-gradient-to-r from-gold to-light-gold text-burgundy px-6 py-3 md:px-8 md:py-3 rounded-2xl font-semibold text-base md:text-lg flex items-center gap-3 mx-auto w-full justify-center"
                >
                  <Volume2 className="w-5 h-5" />
                  Enable Background Music
                </motion.button>

                <button
                  onClick={closePopup}
                  className="luxury-text text-gold/70 hover:text-gold mt-4 transition-colors text-sm md:text-base"
                >
                  Continue without music
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute/Unmute Button */}
      <AnimatePresence>
        {hasUnmuted && (
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