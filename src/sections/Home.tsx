import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import profileImg from '../assets/profile.png';

const Home = () => {
  const fullText = 'SOFTWARE DEVELOPER';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-[#1b0b08] md:bg-transparent"
    >
      {/* Background Split */}
      <div className="hidden md:flex absolute inset-0 w-full h-full">
        <div className="w-[70%] bg-[#1b0b08]" />
        <div className="w-[30%] bg-[#ccc]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Section */}
        <motion.div
          className="space-y-6 text-white text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl">Hello Everyone.</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-[#ccc]">
            I'M REY <br /> GABRIELLE <br /> POGADO
          </h1>

          {/* Typing Button */}
          <div className="inline-flex items-center border-2 border-[#ccc] text-base sm:text-lg md:text-xl mx-auto md:mx-0 group cursor-pointer">
            <div className="bg-[#1b0b08] text-[#ccc] px-6 py-2 font-bold font-mono whitespace-nowrap min-w-[180px]">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </div>
            <div className="bg-[#ccc] px-4 py-2 text-[#1b0b08] transform transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* <motion.div
        className="flex-col items-center space-y-8 right-6 top-1/2 -translate-y-1/2 z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SiFacebook className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SiInstagram className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
      </motion.div> */}

      {/* Profile Image */}
      <div className="relative md:absolute z-10 md:bottom-0 md:right-[32%] md:translate-x-1/2 pointer-events-none mt-8 md:mt-0">
        <motion.img
          src={profileImg}
          alt="Rey Gabrielle Pogado"
          className="mx-auto w-[300px] sm:w-[400px] md:w-[500px] object-contain"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>

      {/* Social Icons on Right Edge */}
      <motion.div
        className="hidden md:flex flex-col items-center space-y-8 absolute right-6 top-1/2 -translate-y-1/2 z-10"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SiFacebook className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SiInstagram className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="w-10 h-10 text-[#1b0b08] hover:scale-125 transition-transform duration-300" />
        </a>
      </motion.div>

    </section>
  );
};

export default Home;
