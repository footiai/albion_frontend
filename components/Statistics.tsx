'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useCounterAnimation } from '../hooks/useScrollAnimation';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    {
      number: 98,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      number: 973,
      suffix: 'x',
      label: 'Faster Deployments',
      description: 'Average improvement in deployment frequency'
    },
    {
      number: 99.9,
      suffix: '%',
      label: 'Uptime Achieved',
      description: 'System reliability and availability guarantee'
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock monitoring and assistance'
    }
  ];

  const counter1 = useCounterAnimation(98, 2000, isVisible);
  const counter2 = useCounterAnimation(973, 2500, isVisible);
  const counter3 = useCounterAnimation(99.9, 2200, isVisible);
  const counter4 = useCounterAnimation(24, 1800, isVisible);

  const counters = [counter1, counter2, counter3, counter4];

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

    const section = document.getElementById('statistics');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="statistics" className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Our Impact
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Numbers That Speak for{' '}
            <span className="text-yellow-300">Themselves</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our proven track record demonstrates the tangible value we bring to every project, 
            transforming businesses through innovative DevOps solutions.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Counter */}
                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <motion.span
                      ref={counters[index]}
                      className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white counter-animate"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      0
                    </motion.span>
                    <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-300 ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-blue-100 text-sm leading-relaxed"
                >
                  {stat.description}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mt-6 mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to achieve remarkable results for your business. 
              Our proven methodologies ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/5531404233000?text=Hello! I would like to discuss how Albion can help my business achieve similar results.', '_blank');
              }}
                className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-primary-700 transition-all duration-300 shadow-large"
              >
                Get Your Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white font-semibold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
