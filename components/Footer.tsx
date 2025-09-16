'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Cloud Infrastructure',
    'DevOps Automation',
    'Security & Compliance',
    'Performance Optimization'
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      text: '+55 (31) 4042-33000',
      action: () => window.open('tel:+5531404233000', '_self')
    },
    {
      icon: EnvelopeIcon,
      text: 'contact@albion.is',
      action: () => window.open('mailto:contact@albion.is', '_self')
    },
    {
      icon: MapPinIcon,
      text: 'Belo Horizonte, MG - Brazil',
      action: () => window.open('https://maps.google.com/?q=Belo+Horizonte,+MG,+Brazil', '_blank')
    }
  ];

  return (
    <footer className="bg-text-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <Image
                  src="/images/Principal-Horizontal.png"
                  alt="Albion"
                  width={150}
                  height={50}
                  className="h-12 w-auto mb-4 filter brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed">
                  Empowering businesses with cutting-edge DevOps solutions and cloud infrastructure. 
                  Your trusted partner for digital transformation.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://wa.me/5531404233000?text=Hello! I would like to learn more about Albion&apos;s services.', '_blank');
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-glow"
              >
                Get Free Consultation
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={info.action}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {info.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest DevOps insights, industry trends, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://wa.me/5531404233000?text=Hello! I would like to subscribe to Albion&apos;s newsletter.', '_blank');
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Albion. All rights reserved. | Empowering Digital Transformation
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-large hover:shadow-glow transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
