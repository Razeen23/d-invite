// src/components/Footer.js
import { motion } from 'framer-motion';
import { Heart, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/spotcard.in",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/spotcard-business-solution",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:hello@spotcard.in",
      label: "Email"
    }
  ];

  const handleLogoClick = () => {
    // Redirect to SpotCard website
    window.open('https://spotcard.in', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-dark-burgundy to-burgundy border-t border-gold/20 relative">
      {/* Top decorative border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-6"
      >
        {/* Single row for desktop - Logo, Social Links, and Copyright in one line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
<motion.div
  variants={itemVariants}
  className="flex items-center cursor-pointer flex-shrink-0"
  onClick={handleLogoClick}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <img 
    src="/logo2.png" 
    alt="SpotCard" 
    className="w-32 h-32 md:w-40 md:h-40 object-contain"
  />
</motion.div>

          {/* Social Links - Center on mobile, right on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 order-2 md:order-1"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <social.icon className="w-5 h-5 text-gold" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright - Right side on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-end order-1 md:order-2 flex-shrink-0"
          >
            <div className="flex items-center gap-2 mb-1">
              <p className="luxury-text text-white/60 text-sm">
                © {currentYear} SpotCard
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gold"
              >
                <Heart className="w-3 h-3 fill-current" />
              </motion.div>
            </div>
            <p className="luxury-text text-white/40 text-xs">
              Transforming business interactions
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;