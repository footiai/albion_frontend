'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: 'Belmoney',
      logo: '/images/Belmoney-logo.png',
      description: 'Financial Technology Solutions'
    },
    {
      name: 'Diffe',
      logo: '/images/Diffe-logo.png',
      description: 'Digital Innovation Platform'
    },
    {
      name: 'Hora',
      logo: '/images/Hora-logo-1.png',
      description: 'Time Management Solutions'
    },
    {
      name: 'Jinga',
      logo: '/images/Jinga-logo.png',
      description: 'Entertainment Technology'
    },
    {
      name: 'MGT',
      logo: '/images/MGT-logo.png',
      description: 'Management Consulting'
    },
    {
      name: 'Morro Telecon',
      logo: '/images/Morro-Telecon-logo.png',
      description: 'Telecommunications Infrastructure'
    },
    {
      name: 'Plena Vita',
      logo: '/images/Plena-Vita-Logo.png',
      description: 'Healthcare Solutions'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const testimonials = [
    {
      quote: "Albion transformed our infrastructure completely. Their DevOps expertise helped us achieve 99.9% uptime and reduced our deployment time by 80%.",
      author: "Tech Director",
      company: "Belmoney",
      rating: 5
    },
    {
      quote: "The team's professionalism and technical knowledge are outstanding. They delivered exactly what we needed, on time and within budget.",
      author: "CTO",
      company: "Diffe",
      rating: 5
    },
    {
      quote: "Working with Albion was a game-changer for our business. Their cloud solutions scaled perfectly with our growth.",
      author: "Operations Manager",
      company: "MGT",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-gray-50">
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
            Trusted Partners
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-6">
            Companies That{' '}
            <span className="text-gradient">Trust Albion</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to partner with innovative companies across various industries, 
            helping them achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-soft p-8">
            <div className="flex items-center justify-center">
              <motion.div
                className="flex space-x-12 lg:space-x-16"
                animate={{
                  x: `-${currentIndex * (100 / Math.min(clients.length, 4))}%`,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                style={{
                  width: `${Math.max(clients.length * 25, 100)}%`,
                }}
              >
                {clients.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="flex-shrink-0 text-center group"
                    style={{ width: `${100 / Math.min(clients.length, 4)}%` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-medium transition-all duration-300">
                      <div className="h-16 flex items-center justify-center mb-4">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={120}
                          height={64}
                          className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {client.name}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {client.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 4) === index
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-12">
            What Our Clients Say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-soft p-8 lg:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-text-primary font-medium mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <p className="font-semibold text-text-primary">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-text-secondary">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Our Growing Family of Success Stories
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with proven DevOps solutions? 
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/5531404233000?text=Hello! I would like to become an Albion success story. Let\'s discuss how you can help my business.', '_blank');
              }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-primary-700 transition-all duration-300 shadow-large"
            >
              Start Your Success Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
