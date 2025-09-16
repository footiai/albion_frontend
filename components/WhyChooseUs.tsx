'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  LightBulbIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: LightBulbIcon,
      title: 'Constant Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and methodologies',
      image: '/albion.is/Home - Albion_files/Why-choose-us-icon-1.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Results-Driven',
      description: 'Our focus is on delivering measurable outcomes that drive business growth',
      image: '/albion.is/Home - Albion_files/Why-choose-us-icon-2.png',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ClockIcon,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support ensures your systems are always running smoothly',
      image: '/albion.is/Home - Albion_files/Why-choose-us-icon-3.png',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const additionalBenefits = [
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience',
      stats: '10+ Years Average Experience'
    },
    {
      icon: CogIcon,
      title: 'Proven Methodology',
      description: 'Battle-tested processes that ensure project success',
      stats: '98% Success Rate'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs',
      stats: '500% Average Growth Support'
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

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-primary-50 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-yellow-50 rounded-full opacity-40 blur-3xl"
        />
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
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Albion
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-6">
            What Makes Us{' '}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business acumen to deliver solutions 
            that not only work but drive real business value.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card p-8 text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Decorative Image */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Image
                      src={reason.image}
                      alt=""
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Additional Benefits
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Beyond our core strengths, we offer comprehensive value that sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-text-primary mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="text-primary-600 font-bold text-lg">
                    {benefit.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-12">
            Our Proven Process
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and current infrastructure' },
              { step: '02', title: 'Strategy', description: 'Developing a customized roadmap for your transformation' },
              { step: '03', title: 'Implementation', description: 'Executing the plan with precision and attention to detail' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and improvement for peak performance' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-500 mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-3">
                    {process.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Experience the Albion Difference
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses 
              with our proven DevOps solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/5531404233000?text=Hello! I want to experience the Albion difference. Let\'s discuss my project.', '_blank');
              }}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-primary-700 transition-all duration-300 shadow-large"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
