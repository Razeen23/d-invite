// src/components/Location.js
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { MapPin, Navigation, Car, Clock, Phone, QrCode } from 'lucide-react';

import location from '../assets/location.webp';

const Location = () => {
  const [showQR, setShowQR] = useState(false);
  const sectionRef = useRef(null);
  
  const venueAddress = "Mangal Varadhar Mahal A/C, Pavithiramanikkam, Thiruvarur";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(venueAddress)}`;
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.416920381687!2d79.61012071533325!3d10.784158108119938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5547093f1c4c6d%3A0x515c3b558c62575d!2sMangal%20Varadhar%20Mahal!5e0!3m2!1sen!2sin!4v1762260227551!5m2!1sen!2sin";

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const x2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const springX1 = useSpring(x1, { stiffness: 100, damping: 30 });
  const springX2 = useSpring(x2, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const mapVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const locationDetails = [
    {
      icon: MapPin,
      title: "Venue Address",
      content: "Mangal Varadhar Mahal A/C\nPavithiramanikkam, Thiruvarur\nTraditional Wedding Hall with elegant architecture and modern amenities",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Event Timing",
      content: "Nikkah Ceremony: 11:30 AM\nLunch Reception: 12:00 PM - 2:30 PM",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Car,
      title: "Parking & Transport",
      content: "Ample parking space available\nEasy access from main road\nWell-connected location in Thiruvarur",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Phone,
      title: "Contact Info",
      content: "Contact Number: +91 72003 04926\nFor any queries or directions",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-burgundy to-dark-burgundy overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: springX1, y: springY1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: springX2, y: springY2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 text-gold/20"
        >
          <MapPin className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-20 right-20 text-white/10"
        >
          <Navigation className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-7xl mx-auto"
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
              <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h2 className="luxury-heading text-gold">
                Venue Location
              </h2>
              <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-gold" />
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
              Join us at Mangal Varadhar Mahal for our blessed Nikkah ceremony and celebration
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
            {/* Location Details Card */}
            <motion.div
              variants={cardVariants}
              className="xl:col-span-1"
            >
              <div className="modern-card bg-white/10 backdrop-blur-sm text-white h-full rounded-3xl border-2 border-gold/30 shadow-2xl">
                <div className="lg:p-8">
                  <h3 className="luxury-subheading text-gold text-center mb-8">
                    Mangal Varadhar Mahal
                  </h3>

                  {/* Location Details */}
                  <div className="space-y-6 mb-8">
                    {locationDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${detail.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <detail.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="luxury-text font-semibold text-gold mb-1">
                            {detail.title}
                          </h4>
                          <p className="luxury-text text-white/80 text-sm leading-relaxed whitespace-pre-line">
                            {detail.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              variants={mapVariants}
              className="xl:col-span-2"
            >
              <div className="modern-card bg-white/10 backdrop-blur-sm h-full rounded-3xl border-2 border-gold/30 shadow-2xl overflow-hidden">
                <div className="lg:p-6">
                  <h3 className="luxury-subheading text-gold text-center mb-6">
                    Location Map
                  </h3>
                  
                  {/* Location Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="my-8 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img 
                      src={location} 
                      alt="Mangal Varadhar Mahal"
                      loading="lazy"
                      className="w-full h-68 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-gold/20 to-burgundy/20 hidden items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="luxury-text">Mangal Varadhar Mahal</p>
                        <p className="luxury-text text-sm">Pavithiramanikkam, Thiruvarur</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Google Maps Embed */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 bg-white"
                  >
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="250"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-44 sm:h-60 lg:h-76"
                      title="Mangal Varadhar Mahal Location"
                    />
                    
                    {/* Map Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy/10 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="luxury-btn flex-1 bg-gradient-to-r from-gold to-light-gold text-burgundy flex items-center justify-center gap-3"
                      onClick={() => window.open(googleMapsUrl, '_blank')}
                    >
                      <Navigation className="w-5 h-5" />
                      Get Directions
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="luxury-btn flex-1 bg-white/20 text-white border-2 border-gold/50 flex items-center justify-center gap-3"
                      onClick={() => setShowQR(!showQR)}
                    >
                      <QrCode className="w-5 h-5" />
                      {showQR ? 'Hide QR' : 'Show QR'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* QR Code Section */}
          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                className="flex justify-center"
              >
                <div className="modern-card bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center max-w-md border-2 border-gold/50 shadow-2xl">
                  <h4 className="luxury-subheading text-burgundy mb-4 flex items-center justify-center gap-3">
                    <QrCode className="w-6 h-6" />
                    Scan for Directions
                  </h4>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="p-6 bg-white rounded-2xl border-4 border-gold shadow-lg inline-block"
                  >
                    <QRCodeSVG 
                      value={googleMapsUrl} 
                      size={180}
                      level="H"
                      includeMargin
                    />
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="luxury-text text-dark-burgundy/80 mt-4 text-sm"
                  >
                    Scan this QR code with your phone camera to open the location in Google Maps
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Continuous Flow Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
};

export default Location;