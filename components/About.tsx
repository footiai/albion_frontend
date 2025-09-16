'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScrollAnimation, useCounterAnimation } from '../hooks/useScrollAnimation';
import { CheckCircleIcon, ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline';

const About = () => {
  const aboutRef = useScrollAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useCounterAnimation(98, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [aboutRef]);

  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Accelerated Growth',
      description: 'DevOps practices enable faster deployment cycles and improved time-to-market'
    },
    {
      icon: CheckCircleIcon,
      title: 'Enhanced Reliability',
      description: 'Automated testing and monitoring ensure higher quality and system stability'
    },
    {
      icon: ClockIcon,
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and rapid response minimize service interruptions'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Counter */}
          <motion.div
            ref={aboutRef as any}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <Image
                src="/albion.is/Home - Albion_files/WhatsApp-Image-2024-10-04-at-14.50.18.jpeg"
                alt="Albion Team"
                width={600}
                height={384}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Counter Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-large p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span
                    ref={counterRef}
                    className="text-4xl font-bold text-primary-500 counter-animate"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-primary-500 ml-1">+</span>
                </div>
                <p className="text-sm font-medium text-text-secondary">
                  Projects Completed
                </p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary-100 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [5, -5, 5],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute top-1/2 -right-6 w-12 h-12 bg-yellow-200 rounded-full opacity-40"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4"
              >
                About Albion
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-text-primary mb-6"
              >
                Transforming Businesses Through{' '}
                <span className="text-gradient">DevOps Excellence</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                Our DevOps consulting services help organizations streamline their development 
                and operations processes, enabling them to deliver software{' '}
                <span className="font-semibold text-primary-600">
                  973 times more frequently
                </span>{' '}
                than traditional approaches while maintaining the highest quality standards.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary group"
              >
                <span>Discover Our Services</span>
                <ArrowTrendingUpIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
