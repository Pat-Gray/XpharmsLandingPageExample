import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Truck, FlaskRound as Flask, Award } from 'lucide-react';

const partners = [
  {
    icon: Shield,
    title: 'Hedera',
    description: 'Powered by enterprise-grade blockchain technology'
  },
  {
    icon: Truck,
    title: 'Logistics & Freight',
    description: 'Global shipping and supply chain partners'
  },
  {
    icon: Flask,
    title: 'Testing & Certification',
    description: 'Accredited laboratory partners worldwide'
  },
  {
    icon: Award,
    title: 'GMP Compliance',
    description: 'International quality standards and certifications'
  }
];

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-gray mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading organizations to ensure the highest standards
            of quality, security, and compliance in the cannabis trade industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <partner.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-gray-600">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;