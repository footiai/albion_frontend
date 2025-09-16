'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531404233000?text=Hello! I would like to know more about Albion&apos;s services.', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-100/90 backdrop-blur-custom shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Secundario-Horizontal.png"
                  alt="Albion"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-all duration-300 group px-4 py-2 rounded-lg ${
                    isScrolled 
                      ? 'text-text-primary hover:text-primary-600 hover:bg-primary-200' 
                      : 'text-white hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-8 ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  }`}></span>
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="hidden lg:flex items-center space-x-2 btn-primary"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-text-primary hover:bg-primary-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-large z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Image
                    src="/images/Secundario-Horizontal.png"
                    alt="Albion"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <XMarkIcon className="w-6 h-6 text-text-primary" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left text-lg font-medium text-text-primary hover:text-primary-500 transition-all duration-200 px-4 py-3 rounded-lg hover:bg-primary-50"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-gray-200">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center space-x-2 btn-primary"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Get a Free Quote</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
