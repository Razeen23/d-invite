// src/components/Hero.js
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay - Responsive images */}
    <div className="absolute inset-0 bg-hero-bg-mobile bg-cover bg-center bg-fixed 
                    md:bg-hero-bg-tablet lg:bg-hero-bg-desktop">
      {/* Gray Tint Overlay */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px]"></div>
      
      {/* Smooth Blending Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/35 to-transparent"></div>
    </div>

      {/* Modern background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      {/* Floating elements - Responsive sizing */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-1/4 left-1/4 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 border border-gold/30 rounded-full opacity-20"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 border border-gold/30 rounded-full opacity-20"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center w-full max-w-6xl mx-auto min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      >
        {/* Main Content Card - Responsive sizing */}
        <motion.div
          variants={itemVariants}
          className="modern-card mb-6 sm:mb-8 mx-auto w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-2xl bg-white/95 backdrop-blur-sm px-4 py-6 sm:px-8 sm:py-8"
        >
          <motion.p 
            variants={itemVariants}
            className="luxury-text text-gold font-semibold text-lg xs:text-xl sm:text-2xl mb-2 sm:mb-3"
          >
            We're Getting Married
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="luxury-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3"
          >
            Abdul Baasith <span className="text-gold">&</span> Alia Shafreen
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="w-24 xs:w-28 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-2 sm:mb-3"
          />
          
          <motion.p 
            variants={itemVariants}
            className="luxury-text text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2"
          >
            November 23, 2025
          </motion.p>
        </motion.div>

        {/* Couple Image Container - Responsive sizing */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto w-58 h-58 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl xs:rounded-3xl overflow-hidden gold-accent shadow-2xl"
        >
          {/* Couple Image */}
          <img 
            src="/img1.webp" 
            alt="Abdul Baasith & Alia Shafreen"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback if image doesn't load */}
          <div 
            className="w-full h-full bg-gradient-to-br from-gold/20 to-burgundy/20 hidden items-center justify-center"
          >
            <span className="text-2xl xs:text-3xl sm:text-4xl text-burgundy">💑</span>
          </div>
          
          {/* Decorative corners - Responsive sizing */}
          <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-gold"></div>
          <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-gold"></div>
          <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-gold"></div>
          <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 right-2 xs:right-3 sm:right-4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-gold"></div>
        </motion.div>

        {/* Scroll Indicator - Responsive positioning */}
<motion.div
  variants={itemVariants}
  className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-0 right-0 flex justify-center"
>
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="flex flex-col items-center text-gold cursor-pointer"
    onClick={() => document.getElementById('information').scrollIntoView({ behavior: 'smooth' })}
  >
    <span className="text-xs xs:text-sm mb-1 xs:mb-2">Scroll Down</span>
    <div className="w-5 h-8 xs:w-6 xs:h-10 border-2 border-gold rounded-full flex justify-center">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-1 h-2 xs:h-3 bg-gold rounded-full mt-1 xs:mt-2"
      />
    </div>
  </motion.div>
</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;