// src/components/RSVP.js
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, BookOpen } from 'lucide-react';

const RSVP = () => {
  const quranVerses = [
    {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      translation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
      reference: "Surah Ar-Rum (30:21)",
      explanation: "This verse beautifully describes the divine purpose of marriage - to find peace, love, and mercy in one another."
    },
    {
      arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
      translation: "They are your garments and you are their garments.",
      reference: "Surah Al-Baqarah (2:187)",
      explanation: "Just as garments protect and beautify, spouses should protect, comfort, and complement each other in marriage."
    },
    {
      arabic: "وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ",
      translation: "Marry the unmarried among you and the righteous among your male and female slaves.",
      reference: "Surah An-Nur (24:32)",
      explanation: "Islam encourages marriage and considers it a virtuous act that completes half of one's faith."
    }
  ];

  const marriageBlessings = [
    {
      arabic: "بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      translation: "May Allah bless you, and shower His blessings upon you, and join you together in goodness.",
      source: "Sunan At-Tirmidhi"
    },
    {
      arabic: "جَعَلَ اللَّهُ قَرَارَكُمَا مُبَارَكًا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      translation: "May Allah make your home blessed and join you together in all that is good.",
      source: "Traditional Du'a"
    },
    {
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
      source: "Surah Al-Furqan (25:74)"
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
    <section className="section-padding bg-gradient-to-br from-burgundy to-dark-burgundy relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatVariants}
          animate="float"
          className="absolute top-20 left-20 text-gold/10"
        >
          <Heart className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-20 text-gold/10"
        >
          <Star className="w-20 h-20" />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/4 text-gold/5"
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
      </div>

      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="inline-flex items-center gap-4 mb-6"
          >
            {/* Transparent background icons */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <h2 className="luxury-heading text-4xl text-gold">
              Divine Blessings
            </h2>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full mb-6"
          />
          
          <motion.p 
            variants={itemVariants}
            className="luxury-text text-white/80 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Quranic Verses About Marriage & Blessings for the Newlyweds
          </motion.p>
        </motion.div>

        {/* Quranic Verses Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.3 
              }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Heart className="w-8 h-8 text-gold fill-current" />
              <h3 className="luxury-subheading text-3xl text-gold">
                Quranic Guidance on Marriage
              </h3>
              <Heart className="w-8 h-8 text-gold fill-current" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="w-20 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quranVerses.map((verse, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="modern-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-gold/30 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: index * 0.2 + 0.5 
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6"
                >
                  <BookOpen className="w-8 h-8 text-burgundy" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  className="space-y-4"
                >
                  <div className="text-right">
                    <p className="luxury-text text-2xl leading-loose text-gold font-arabic">
                      {verse.arabic}
                    </p>
                  </div>
                  
                  <div className="border-t border-gold/30 pt-4">
                    <p className="luxury-text text-white/90 leading-relaxed mb-3">
                      "{verse.translation}"
                    </p>
                    <p className="luxury-text text-gold text-sm font-semibold mb-2">
                      {verse.reference}
                    </p>
                    <p className="luxury-text text-white/70 text-sm italic">
                      {verse.explanation}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marriage Blessings Section */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.4 
              }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Sparkles className="w-8 h-8 text-gold" />
              <h3 className="luxury-subheading text-3xl text-gold">
                Blessings for the Couple
              </h3>
              <Sparkles className="w-8 h-8 text-gold" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-20 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marriageBlessings.map((blessing, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="modern-card bg-white/15 backdrop-blur-sm rounded-2xl p-6 border-2 border-gold/40 text-center shadow-xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  className="space-y-4"
                >
                  <div className="text-right">
                    <p className="luxury-text text-xl leading-loose text-gold font-arabic">
                      {blessing.arabic}
                    </p>
                  </div>
                  
                  <div className="border-t border-gold/30 pt-4">
                    <p className="luxury-text text-white/95 leading-relaxed mb-3 text-base">
                      "{blessing.translation}"
                    </p>
                    <p className="luxury-text text-gold text-sm font-semibold">
                      {blessing.source}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.8 
            }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Heart className="w-8 h-8 text-gold fill-current" />
            <h3 className="luxury-subheading text-2xl text-gold">
              May Allah Bless Their Union
            </h3>
            <Heart className="w-8 h-8 text-gold fill-current" />
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="luxury-text text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Your presence and prayers are the greatest gifts you can offer as we begin this blessed journey of marriage.
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="w-48 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Bottom decorative border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
};

export default RSVP;