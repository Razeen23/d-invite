// src/components/Information.js
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Heart,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Utensils,
  UserCheck,
  PartyPopper,
  Trophy,
  Bus
} from 'lucide-react';

const Information = () => {
  const [activeTab, setActiveTab] = useState('ceremony');
  const [expandedCard, setExpandedCard] = useState(null);

  // Simplified animations with better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Reduced from 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced from 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Reduced from 0.2
      }
    }
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30, // Reduced from 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8
        ease: "easeOut"
      }
    }
  };

  const timelineItemVariantsRight = {
    hidden: { 
      opacity: 0, 
      x: 30, // Reduced from 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const timelineItemVariantsMobile = {
    hidden: { 
      opacity: 0, 
      y: 20, // Reduced from 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Timeline events data
  const timelineEvents = [
    {
      time: "9:00 AM",
      title: "Bus Service Starts",
      description: "Complimentary bus service begins from Kodikkalpalayam to the marriage hall",
      icon: Bus,
      color: "from-blue-400 to-blue-600",
      duration: "Ongoing"
    },
    {
      time: "11:00 AM",
      title: "Guest Arrival",
      description: "Welcome and seating for the Nikkah ceremony",
      icon: UserCheck,
      color: "from-purple-400 to-purple-600",
      duration: "30 mins"
    },
    {
      time: "11:30 AM",
      title: "Nikkah Ceremony",
      description: "Islamic marriage ceremony and exchange of vows",
      icon: Heart,
      color: "from-red-400 to-red-600",
      duration: "1 hour"
    },
    {
      time: "12:30 PM",
      title: "Wedding Lunch",
      description: "Traditional wedding feast and celebrations",
      icon: Utensils,
      color: "from-green-400 to-green-600",
      duration: "2 hours"
    },
    {
      time: "2:30 PM",
      title: "Family Photos & Departure",
      description: "Capture memories with family and friends. Return bus service available",
      icon: PartyPopper,
      color: "from-orange-400 to-orange-600",
      duration: "1 hour"
    }
  ];

  const eventDetails = {
    ceremony: {
      icon: '🕌',
      title: 'Nikkah',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-200/50',
      details: [
        {
          icon: Calendar,
          title: 'November 23, 2025',
          subtitle: 'Sunday Morning',
          description: 'Join us as we exchange our sacred vows in a traditional Islamic Nikkah ceremony filled with blessings and love.'
        },
        {
          icon: Clock,
          title: '11:30 AM',
          subtitle: 'Nikkah Ceremony',
          description: 'The Nikkah ceremony will begin promptly at 11:30 AM. Please arrive by 11:00 AM for seating and welcome.'
        },
        {
          icon: MapPin,
          title: 'Mangal Varadhar Mahal A/C',
          subtitle: 'Pavithiramanikkam, Thiruvarur',
          description: 'A beautiful traditional wedding hall with modern amenities, perfect for our sacred ceremony and celebrations.'
        },
        {
          icon: Users,
          title: 'Guest Attire',
          subtitle: 'Traditional Islamic Wear',
          description: 'Traditional Islamic attire preferred. Modest and elegant clothing to honor the sanctity of the occasion.'
        }
      ]
    },
    valima: {
      icon: '🎊',
      title: 'Valima',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-200/50',
      details: [
        {
          icon: Calendar,
          title: 'December 3, 2025',
          subtitle: 'Wednesday Afternoon',
          description: 'Join us for the Valima Virundhu, a post-nuptial feast in Islamic tradition (Walima) to celebrate our marriage.'
        },
        {
          icon: Clock,
          title: '12:00 PM onwards',
          subtitle: 'Valima Reception',
          description: 'The Valima feast will begin at 12:00 PM. Join us for an afternoon of celebration and blessings.'
        },
        {
          icon: MapPin,
          title: 'Kodikkalpalayam Big Mosque',
          subtitle: 'Kodikkalpalayam',
          description: 'The Valima celebration will be held at the Kodikkalpalayam Big Mosque premises for this blessed occasion.'
        },
        {
          icon: Users,
          title: 'Guest Attire',
          subtitle: 'Casual & Comfortable',
          description: 'Casual and comfortable attire is recommended for the Valima celebration. Come as you are to share in our joy.'
        }
      ]
    }
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section 
      id="information" 
      className="relative bg-gradient-to-b from-white to-cream/30 overflow-hidden"
    >
      {/* Simplified Background Elements - Removed scroll-based animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 150, // Reduced stiffness
                damping: 20,
                delay: 0.1 
              }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gold" />
              <h2 className="luxury-heading text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-burgundy to-gold bg-clip-text text-transparent">
                Our Wedding Celebrations
              </h2>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gold" />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }} // Reduced duration
              className="w-20 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full mb-4 sm:mb-6"
            />
            
            <motion.p 
              variants={itemVariants}
              className="luxury-text text-base sm:text-lg lg:text-xl text-dark-burgundy/80 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Join us for blessed celebrations of love, commitment, and new beginnings in the presence of Allah
            </motion.p>
          </motion.div>

          {/* Interactive Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1 sm:p-2 border border-gold/20 shadow-lg w-full max-w-md sm:max-w-lg mx-4">
              <div className="flex">
                {Object.entries(eventDetails).map(([key, event]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-playfair font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-gold to-light-gold text-burgundy shadow-md sm:shadow-lg'
                        : 'text-dark-burgundy/70 hover:text-burgundy hover:bg-white/50'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{event.icon}</span>
                    <span>{event.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Event Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }} // Reduced duration
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20"
            >
              {eventDetails[activeTab].details.map((detail, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariantsMobile}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.01, y: -2 }} // Reduced scale
                  className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${eventDetails[activeTab].borderColor} shadow-lg sm:shadow-xl cursor-pointer overflow-hidden`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 2 }} // Reduced rotation
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gold to-light-gold rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg"
                    >
                      <detail.icon className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="luxury-subheading text-base sm:text-lg mb-1 text-burgundy">
                        {detail.title}
                      </h3>
                      <p className="luxury-text text-gold font-semibold text-xs sm:text-sm mb-2">
                        {detail.subtitle}
                      </p>
                      
                      <AnimatePresence>
                        {expandedCard === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }} // Reduced duration
                            className="luxury-text text-dark-burgundy/80 text-xs sm:text-sm leading-relaxed mt-2"
                          >
                            {detail.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }} // Reduced duration
                      className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gold/10 rounded-full flex items-center justify-center"
                    >
                      {expandedCard === index ? (
                        <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                      ) : (
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Schedule of Events Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-20"
          >
            {/* Timeline Header */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 150,
                damping: 20,
                delay: 0.1 
              }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="luxury-heading text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-burgundy to-gold bg-clip-text text-transparent mb-3 sm:mb-4">
                Schedule of Events - Nikkah Day
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full mb-3 sm:mb-4"
              />
              <p className="luxury-text text-base sm:text-lg text-dark-burgundy/80 px-4">
                Here's what we have planned for our blessed Nikkah day
              </p>
            </motion.div>

            {/* Mobile Timeline */}
            <div className="sm:hidden">
              <motion.div
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6"
              >
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={timelineItemVariantsMobile}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gold/20 shadow-xl"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <event.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-light-gold rounded-full"
                        >
                          <Clock className="w-4 h-4 text-burgundy" />
                          <span className="luxury-text text-burgundy font-semibold text-sm">
                            {event.time}
                          </span>
                          <span className="luxury-text text-burgundy/80 text-xs">
                            ({event.duration})
                          </span>
                        </motion.div>
                      </div>

                      <motion.h3
                        initial={{ y: 5, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
                        className="luxury-subheading text-lg text-burgundy mb-2"
                      >
                        {event.title}
                      </motion.h3>

                      <motion.p
                        initial={{ y: 5, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 + 0.4 }}
                        className="luxury-text text-dark-burgundy/80 text-sm leading-relaxed"
                      >
                        {event.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden sm:block relative">
              {/* Vertical Timeline Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gold to-burgundy h-full"
              />

              {/* Timeline Events */}
              <motion.div
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-12"
              >
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? timelineItemVariants : timelineItemVariantsRight}
                    className={`relative flex items-center  ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${event.color} rounded-full border-4 border-white shadow-lg z-10`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <event.icon className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                      }}
                      className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gold/20 shadow-xl">
                        {/* Time Badge */}
                        <motion.div
                          initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-light-gold rounded-full mb-4"
                        >
                          <Clock className="w-5 h-5 text-burgundy" />
                          <span className="luxury-text text-burgundy font-semibold text-sm">
                            {event.time}
                          </span>
                          <span className="luxury-text text-burgundy/80 text-xs">
                            ({event.duration})
                          </span>
                        </motion.div>

                        {/* Event Title */}
                        <motion.h3
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
                          className="luxury-subheading text-lg text-burgundy mb-2"
                        >
                          {event.title}
                        </motion.h3>

                        {/* Event Description */}
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.08 + 0.4 }}
                          className="luxury-text text-dark-burgundy/80 leading-relaxed"
                        >
                          {event.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Timeline End Decoration */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150,
                  damping: 20,
                  delay: 0.5 
                }}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-10 h-10 bg-gold rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              >
                <Trophy className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Special Note Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.005,
            }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gold/10 border-2 border-gold/30 shadow-xl sm:shadow-2xl"
          >
            <div className="relative z-10 p-6 sm:p-8 text-center">
              <motion.div
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6, // Increased duration for smoother loop
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-burgundy fill-current" />
                <h3 className="luxury-subheading text-lg sm:text-xl lg:text-2xl text-burgundy">
                  A Heartfelt Note
                </h3>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-burgundy fill-current" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="luxury-text text-sm sm:text-base leading-relaxed text-dark-burgundy/90 max-w-3xl mx-auto mb-4 sm:mb-6"
              >
                In the name of Allah, the Most Gracious, the Most Merciful. Your presence and prayers are the greatest blessings as we begin our journey together in marriage. Come join us in these sacred celebrations filled with love, joy, and divine blessings.
              </motion.p>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-20 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Information;