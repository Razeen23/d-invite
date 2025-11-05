// src/components/Contact.js
import { motion } from 'framer-motion';
import { Heart, Users, Phone, Home, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-burgundy to-dark-burgundy relative overflow-hidden">
      {/* Background Elements */}
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
          <Users className="w-20 h-20" />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-1/2 left-1/4 text-gold/5"
        >
          <Home className="w-24 h-24" />
        </motion.div>
        
        {/* Gold sparkle effects */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 text-gold/20"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header Section - Transparent Icons */}
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
              <Users className="w-8 h-8 text-gold" />
            </div>
            <h2 className="luxury-heading text-gold text-4xl">
              Contact & Blessings
            </h2>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-gold" />
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full mb-6"
          />
        </motion.div>

        {/* Heartwarming Invitation Message */}
        <motion.div
          variants={itemVariants}
          className="modern-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border-2 border-gold/30 shadow-2xl"
        >
          <div className="text-center">
            <motion.div
              animate={{
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Heart className="w-8 h-8 text-gold fill-current" />
              <h3 className="luxury-subheading text-2xl text-gold">
                A Message From Our Families
              </h3>
              <Heart className="w-8 h-8 text-gold fill-current" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="luxury-text text-white/90 text-lg leading-relaxed mb-6 max-w-4xl mx-auto"
            >
              With hearts full of gratitude to Allah (SWT) and immense joy, we, the families of{' '}
              <span className="text-gold font-semibold">Mr. Imaludeen & Mrs. Fauzia Gani</span> and{' '}
              <span className="text-gold font-semibold">Mr. Ramuzudeen & Mrs. Sirajnisha</span>, 
              warmly invite you to share in the blessings of our children's union.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="luxury-text text-white/90 text-lg leading-relaxed mb-6 max-w-4xl mx-auto"
            >
              Your presence will add to the barakah of this sacred occasion as we witness the beginning of{' '}
              <span className="text-gold font-semibold">Abdul Baasith</span> and{' '}
              <span className="text-gold font-semibold">Alia Shafreen's</span> journey together in marriage, 
              In Sha Allah.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="luxury-text text-gold text-xl font-semibold italic max-w-4xl mx-auto"
            >
              "May Allah bless their union with love, mercy, and endless happiness."
            </motion.p>
          </div>
        </motion.div>

        {/* Contact Information - IMPROVED VISIBILITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Groom's Family */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="modern-card bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-gold/50 shadow-2xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.3 
                }}
                className="w-16 h-16 bg-gradient-to-r from-gold to-light-gold rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4"
              >
                <Users className="w-8 h-8 text-burgundy" />
              </motion.div>
              
              <h3 className="luxury-heading text-2xl text-gold mb-6">
                Groom's Family
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-gold/30">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="luxury-text text-white text-lg font-semibold">
                    Mr. Imaludeen & Mrs. Fauzia Gani
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-gold/30">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="luxury-text text-white text-lg font-semibold">
                    +91 72003 04926
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="modern-card bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-gold/50 shadow-2xl"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.4 
                }}
                className="w-16 h-16 bg-gradient-to-r from-light-gold to-gold rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4"
              >
                <Home className="w-8 h-8 text-burgundy" />
              </motion.div>
              
              <h3 className="luxury-heading text-2xl text-gold mb-6">
                Bride's Family
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-gold/30">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="luxury-text text-white text-lg font-semibold">
                    Mr. Ramuzudeen & Mrs. Sirajnisha
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-gold/30">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="luxury-text text-white text-lg font-semibold">
                  +91 99659 91256
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Blessing */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.6 
            }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <Heart className="w-8 h-8 text-gold fill-current" />
            <h3 className="luxury-heading text-3xl text-gold">
              Invited With Love & Blessings
            </h3>
            <Heart className="w-8 h-8 text-gold fill-current" />
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="luxury-text text-gold text-xl font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            The Families of Abdul Baasith & Alia Shafreen
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="w-48 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full mt-6"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
};

export default Contact;