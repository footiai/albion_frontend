'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRightIcon, CheckIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const heroRef = useScrollAnimation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531404233000?text=Hello! I would like to know more about Albion\'s services.', '_blank');
  };

  const features = [
    'Constant Innovation',
    'Results-Driven',
    '24/7 Customer Support'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  };

  return (
    <section
      id="home"
      ref={heroRef as any}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-transparent to-primary-800/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-700/20 to-primary-900/40"></div>
        
        {/* Background Images */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-40">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="floating-element"
          >
            <Image
              src="/images/Bg-left.png"
              alt=""
              width={487}
              height={522}
              className="w-auto h-96"
            />
          </motion.div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="floating-element"
            style={{ animationDelay: '1.5s' }}
          >
            <Image
              src="/images/bg-right.png"
              alt=""
              width={487}
              height={522}
              className="w-auto h-96"
            />
          </motion.div>
        </div>
        
        {/* Additional Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="block">Empowering Businesses with</span>
            <span className="block text-gradient bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
              Cutting-Edge Technology Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed"
          >
            Unlock Your Potential with Albion&apos;s{' '}
            <span className="font-semibold text-yellow-200">Cloud and DevOps</span>{' '}
            Expertise
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <CheckIcon className="w-5 h-5 text-green-300" />
                <span className="text-sm md:text-base font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="group bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-yellow-300 hover:text-primary-700 shadow-large"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 text-white font-semibold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto cursor-pointer hover:border-white/80 transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
