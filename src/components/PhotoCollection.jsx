// components/PhotoCollection.jsx
import React, { useState, useEffect } from 'react';

const PhotoCollection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      id="photocollection"
      className={`
      max-w-4xl mx-auto p-8 font-cormorant
      transition-all duration-800 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Guest Upload Section */}
      <section className="text-center mb-12 relative">
        {/* Floating Icon */}
        <div className="text-6xl mb-4 animate-float">📸</div>
        
        {/* Header */}
        <h2 className={`
          text-3xl md:text-4xl font-playfair font-bold text-burgundy mb-4
          transition-all duration-700 delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}>
          Share Your Favorite Moments
        </h2>
        
        <p className={`
          text-lg text-gray-700 mb-8
          transition-all duration-700 delay-500
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          Help us capture beautiful memories by uploading your photos from the wedding
        </p>

        {/* Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { step: '1', text: 'Click the upload button' },
            { step: '2', text: 'Fill in your name' },
            { step: '3', text: 'Select up to 5 photos' },
            { step: '4', text: 'Submit the form' }
          ].map((item, index) => (
            <div
              key={item.step}
              className="
                bg-gradient-to-br from-burgundy to-dark-burgundy 
                text-cream p-6 rounded-2xl shadow-xl
                transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                hover:shadow-2xl cursor-pointer
                animate-fade-in-up
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="
                  w-12 h-12 bg-cream bg-opacity-20 
                  rounded-full flex items-center justify-center
                  border-2 border-cream border-opacity-40
                  backdrop-blur-sm text-lg font-bold mb-3 text-light-gold
                ">
                  {item.step}
                </div>
                <p className="font-semibold text-center font-cormorant">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdCle4HSmAd-O2QkOqOjRA-QeX73wrZlOdHhjWIKfzLKdMf3w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-gradient-to-r from-gold to-light-gold
              hover:from-gold hover:to-yellow-200
              text-burgundy font-playfair font-bold text-xl
              px-8 py-4 rounded-full
              transform transition-all duration-300
              hover:scale-105 hover:-translate-y-1
              shadow-lg hover:shadow-xl
              border-2 border-gold
              relative overflow-hidden group
            "
          >
            {/* Sparkle effect */}
            <span className="text-lg group-hover:scale-110 transition-transform">✨</span>
            <span className="text-2xl">📤</span>
            Upload Your Photos
            <span className="text-lg group-hover:scale-110 transition-transform">✨</span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -inset-1 bg-gradient-to-r from-transparent via-cream to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>

          {/* Note */}
          <div className={`
            mt-6 p-4
            bg-cream border-2 border-gold
            rounded-xl text-burgundy
            transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
            <p className="font-medium font-cormorant">
              <strong>Note:</strong> Photos will be directly sent to the couple's private collection
            </p>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="relative h-24 mt-12">
          {[
            { emoji: '🖼️', position: 'left-10', delay: '0s' },
            { emoji: '📷', position: 'left-1/2 -translate-x-1/2', delay: '2s' },
            { emoji: '🌟', position: 'right-10', delay: '4s' }
          ].map((item, index) => (
            <div
              key={index}
              className={`
                absolute text-3xl opacity-60 text-gold
                animate-float
                ${item.position}
              `}
              style={{ animationDelay: item.delay }}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotoCollection;