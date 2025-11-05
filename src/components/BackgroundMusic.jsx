// src/components/BackgroundMusic.js
import { useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        // Modern browsers require user interaction for audio
        // We'll start muted and wait for first user interaction
        if (audioRef.current) {
          audioRef.current.muted = true;
          await audioRef.current.play();
          
          const unmuteOnInteraction = () => {
            if (audioRef.current) {
              audioRef.current.muted = false;
            }
            document.removeEventListener('click', unmuteOnInteraction);
            document.removeEventListener('touchstart', unmuteOnInteraction);
          };
          
          document.addEventListener('click', unmuteOnInteraction);
          document.addEventListener('touchstart', unmuteOnInteraction);
        }
      } catch (error) {
        console.log('Autoplay with mute failed:', error);
      }
    };

    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="/music/wedding-music.mp3" type="audio/mpeg" />
      <source src="/music/wedding-music.ogg" type="audio/ogg" />
    </audio>
  );
};

export default BackgroundMusic;