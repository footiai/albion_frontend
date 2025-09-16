'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { 
  CloudIcon, 
  CogIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs',
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling Configuration', 'Cost Optimization', 'Security Implementation'],
      color: 'from-blue-500 to-cyan-500',
      image: '/albion.is/Home - Albion_files/feature-hosting-icon1.png'
    },
    {
      icon: CogIcon,
      title: 'DevOps Automation',
      description: 'Streamline your development pipeline with cutting-edge automation',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      color: 'from-purple-500 to-pink-500',
      image: '/albion.is/Home - Albion_files/feature-hosting-icon2.png'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audits', 'Compliance Management', 'Vulnerability Assessment', 'Identity Management'],
      color: 'from-green-500 to-emerald-500',
      image: '/albion.is/Home - Albion_files/feature-hosting-icon3.png'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance Optimization',
      description: 'Maximize your system performance and user experience',
      features: ['Load Balancing', 'Database Optimization', 'Caching Strategies', 'Monitoring & Alerts'],
      color: 'from-orange-500 to-red-500',
      image: '/albion.is/Home - Albion_files/feature-hosting-icon4.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-6">
            Comprehensive{' '}
            <span className="text-gradient">DevOps Solutions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From cloud infrastructure to security compliance, we provide end-to-end 
            DevOps services that accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="card p-8 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Service Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-text-secondary">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={service.image}
                    alt=""
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br group-hover:${service.color.replace('from-', 'border-').replace('to-', 'border-')} rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our DevOps expertise can accelerate your digital transformation 
              and drive unprecedented growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/5531404233000?text=Hello! I would like to discuss DevOps services with Albion.', '_blank');
              }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-primary-700 transition-all duration-300 shadow-large"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
