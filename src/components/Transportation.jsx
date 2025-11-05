// src/components/Transportation.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Train, Bus, MapPin, Download } from 'lucide-react';

const Transportation = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [transportData, setTransportData] = useState(null);
  const [activeTab, setActiveTab] = useState('trains');
  const [timeLeft, setTimeLeft] = useState({});
  const [showReminderOptions, setShowReminderOptions] = useState(false);

  const weddingDate = new Date('2025-11-23T11:30:00');

  const popularLocations = [
    { value: 'chennai', label: 'Chennai' },
    { value: 'bangalore', label: 'Bengaluru' },
    { value: 'kerala', label: 'Kerala (Kochi)' }
  ];

  const transportDataMap = {
    chennai: {
      trains: [
        { 
          number: '16103', 
          name: 'TBM RMM Express', 
          departure: '18:10 (from TBM)', 
          arrival: '23:30 (TVR)', 
          duration: '5h 20m',
          days: 'Daily',
          type: 'Express'
        },
        { 
          number: '16175', 
          name: 'MS KIK Express', 
          departure: '21:30 (from TBM/MS)', 
          arrival: '03:00 (TVR)', 
          duration: '5h 30m',
          days: 'Daily',
          type: 'Express'
        },
        { 
          number: '16179', 
          name: 'MS MQ Express', 
          departure: '22:55 (from MS)', 
          arrival: '04:50 (TVR)', 
          duration: '5h 55m',
          days: 'Daily',
          type: 'Express'
        }
      ],
      buses: [
        {
          operator: 'TNSTC (Government)',
          type: 'Government Bus',
          departure: '21:30 from CMBT',
          duration: '6-8 hours',
          features: 'Bus No. 2130'
        },
        {
          operator: 'VPS Transport',
          type: 'Private (Non-AC Seater/Sleeper)',
          departure: '20:30',
          duration: '7h 30m',
          features: 'Comfortable seating'
        },
        {
          operator: 'Rathimeena Travels',
          type: 'Private (Non-AC Sleeper)',
          departure: '22:20',
          duration: '6h 40m',
          features: 'Sleeper option'
        }
      ]
    },
    bangalore: {
      trains: [
        {
          number: 'No Direct Train',
          name: 'Connect via Chennai/Tiruchirappalli',
          departure: 'Multiple options',
          arrival: 'Via connection',
          duration: '12-14h',
          days: 'Daily',
          type: 'Connecting'
        }
      ],
      buses: [
        {
          operator: 'Sree Adithi Travels',
          type: 'AC Seater/Sleeper 2+1',
          departure: '22:20 from Bengaluru',
          duration: '8h 10m',
          features: 'Luxury service'
        },
        {
          operator: 'A1 Travels',
          type: 'Non-AC Seater/Sleeper 2+1',
          departure: '20:30',
          duration: '8h 50m',
          features: 'Economy option'
        },
        {
          operator: 'SHARMA TRANSPORTS',
          type: 'AC Sleeper (2+1)',
          departure: '20:15',
          duration: '9h 45m',
          features: 'Premium service'
        },
        {
          operator: 'FlixBus',
          type: 'Premium',
          departure: '20:45',
          duration: '11h 15m',
          features: 'International standard'
        }
      ]
    },
    kerala: {
      trains: [
        {
          number: 'Multiple',
          name: 'Connect via Tiruchirappalli/Thanjavur',
          departure: 'Various times',
          arrival: 'Via connection',
          duration: '8-10h',
          days: 'Daily',
          type: 'Connecting'
        }
      ],
      buses: [
        {
          operator: 'Universal Travels',
          type: 'Luxury AC',
          departure: '17:51 from Kochi',
          duration: '11h 9m',
          features: 'Comfortable journey'
        },
        {
          operator: 'Skanda Travels',
          type: 'Premium Service',
          departure: '19:30',
          duration: '10h 20m',
          features: 'Reliable service'
        }
      ]
    }
  };

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (fromLocation && transportDataMap[fromLocation]) {
      setTransportData(transportDataMap[fromLocation]);
      setActiveTab('trains');
    }
  }, [fromLocation]);

  const addToCalendar = () => {
    const startTime = weddingDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endTime = new Date(weddingDate.getTime() + 3 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Abdul+Baasith+%26+Alia+Shafreen+Wedding&dates=${startTime}/${endTime}&details=Join+us+for+the+wedding+celebration+of+Abdul+Baasith+and+Alia+Shafreen+at+Mangal+Varadhar+Mahal,+Thiruvarur&location=Mangal+Varadhar+Mahal,+Pavithiramanikkam,+Thiruvarur`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Abdul Baasith & Alia Shafreen Wedding
DTSTART:20251123T113000
DTEND:20251123T143000
DESCRIPTION:Join us for the wedding celebration of Abdul Baasith and Alia Shafreen at Mangal Varadhar Mahal, Thiruvarur
LOCATION:Mangal Varadhar Mahal, Pavithiramanikkam, Thiruvarur
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wedding-invitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const countdownVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-cream to-white px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Countdown Timer Section - Mobile Optimized */}
        <motion.div
          variants={countdownVariants}
          className="modern-card bg-gradient-to-br from-burgundy to-dark-burgundy text-white rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 text-center border-2 border-gold/30 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            <h2 className="luxury-heading text-2xl sm:text-3xl text-gold text-center">
              Counting Down to Our Special Day
            </h2>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
          </div>

          {/* Countdown Grid - Mobile Optimized */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {Object.keys(timeLeft).length > 0 ? (
              Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-gold/20"
                >
                  <div className="text-xl sm:text-3xl md:text-4xl font-bold text-gold mb-1">
                    {value}
                  </div>
                  <div className="luxury-text text-gold/80 text-xs sm:text-sm uppercase">
                    {unit}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-4">
                <p className="luxury-text text-gold text-lg sm:text-xl">The wedding day has arrived!</p>
              </div>
            )}
          </div>

          {/* Reminder Buttons - Mobile Optimized */}
          <div className="flex flex-col gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReminderOptions(!showReminderOptions)}
              className="luxury-btn bg-gradient-to-r from-gold to-light-gold text-burgundy flex items-center justify-center gap-2 sm:gap-3 py-3 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Set Reminder
            </motion.button>

            <AnimatePresence>
              {showReminderOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addToCalendar}
                    className="luxury-btn bg-white/20 text-white border-2 border-gold/50 flex items-center justify-center gap-2 sm:gap-3 py-3 text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    Google Calendar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadICS}
                    className="luxury-btn bg-white/20 text-white border-2 border-gold/50 flex items-center justify-center gap-2 sm:gap-3 py-3 text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download .ics
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="luxury-text text-gold mt-4 text-sm sm:text-base"
          >
            November 23, 2025 • 11:30 AM • Mangal Varadhar Mahal, Thiruvarur
          </motion.p>
        </motion.div>

        {/* Transportation Guide - Mobile Optimized */}
        <motion.div
          variants={cardVariants}
          className="modern-card bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold/20 shadow-xl"
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-burgundy" />
              <h2 className="luxury-heading text-2xl sm:text-3xl text-burgundy text-center">
                Transportation Guide
              </h2>
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-burgundy" />
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              className="w-32 h-1 bg-gradient-to-r from-gold to-light-gold mx-auto rounded-full"
            />
          </div>

          {/* Location Selector - Mobile Optimized */}
          <div className="mb-6 sm:mb-8">
            <label className="luxury-text text-lg sm:text-xl block mb-3 sm:mb-4 text-center text-dark-burgundy">
              Select your starting location:
            </label>
            <select
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full p-3 sm:p-4 text-base sm:text-lg border-2 border-gold rounded-2xl font-cormorant block bg-white shadow-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Choose your city</option>
              {popularLocations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          <AnimatePresence>
            {fromLocation && transportData && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 sm:mt-8"
              >
                {/* Tab Buttons - Mobile Optimized */}
                <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center flex-wrap">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('trains')}
                    className={`luxury-btn flex items-center gap-2 px-4 py-3 text-sm sm:text-base ${
                      activeTab === 'trains' 
                        ? 'bg-gradient-to-r from-burgundy to-dark-burgundy text-white' 
                        : 'bg-white text-burgundy border-2 border-burgundy'
                    }`}
                  >
                    <Train className="w-4 h-4 sm:w-5 sm:h-5" />
                    Trains
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('buses')}
                    className={`luxury-btn flex items-center gap-2 px-4 py-3 text-sm sm:text-base ${
                      activeTab === 'buses' 
                        ? 'bg-gradient-to-r from-burgundy to-dark-burgundy text-white' 
                        : 'bg-white text-burgundy border-2 border-burgundy'
                    }`}
                  >
                    <Bus className="w-4 h-4 sm:w-5 sm:h-5" />
                    Buses
                  </motion.button>
                </div>

                {/* Transport List - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4">
                  {transportData[activeTab]?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="gold-accent p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-light-gold/20 to-gold/10 border-2 border-gold/30"
                    >
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex flex-col gap-1 mb-2">
                              <h4 className="luxury-heading text-lg sm:text-xl text-burgundy">
                                {activeTab === 'trains' ? item.name : item.operator}
                              </h4>
                              {activeTab === 'trains' && (
                                <span className="luxury-text text-gold bg-burgundy/10 px-2 py-1 rounded-full text-xs sm:text-sm">
                                  {item.number}
                                </span>
                              )}
                            </div>
                            
                            {/* Transport Details - Mobile Stacked */}
                            <div className="space-y-2 luxury-text text-dark-burgundy/80 text-sm sm:text-base">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                                <span><strong>Departure:</strong> {item.departure}</span>
                              </div>
                              {activeTab === 'trains' && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold flex-shrink-0" />
                                  <span><strong>Arrival:</strong> {item.arrival}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <span>⏱️ <strong>Duration:</strong> {item.duration}</span>
                              </div>
                            </div>
                            
                            {item.features && (
                              <p className="luxury-text text-gold mt-2 text-sm">
                                {item.features}
                              </p>
                            )}
                          </div>
                          
                          {/* Type Badge - Mobile Position */}
                          <div className="flex flex-col items-start sm:items-end gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                              item.type === 'Express' || item.type === 'Premium' 
                                ? 'bg-gold text-burgundy' 
                                : 'bg-burgundy/20 text-burgundy'
                            }`}>
                              {item.type}
                            </span>
                            {activeTab === 'trains' && (
                              <span className="luxury-text text-dark-burgundy/70 text-xs sm:text-sm">
                                {item.days}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Transportation;