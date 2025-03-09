import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Network, 
  ShieldCheck, 
  Globe2, 
  FlaskConical, 
  Wallet, 
  BoxesIcon
} from 'lucide-react';

const benefits = [
  {
    icon: Network,
    title: 'Smarter, Direct Connections',
    subtitle: 'Bypass Middlemen and Connect Directly with Verified Cultivators and Buyers',
    description: 'Xpharms Xchange eliminates unnecessary intermediaries, reducing costs and accelerating deals. Our strict KYC/AML verification and automated compliance checks ensure only licensed participants trade, creating a secure and efficient marketplace.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy & Transparent Transactions',
    subtitle: 'Smart Contracts Ensure Secure, Fraud-Proof Payments with Real-Time Tracking',
    description: 'Hedera-powered smart contracts automatically process milestone-based payments, ensuring tamper-proof records. Every transaction is immutable, reducing fraud risks and providing real-time visibility for buyers and sellers.',
  },
  {
    icon: Globe2,
    title: 'Hassle-Free Global Compliance',
    subtitle: 'Automated Regulatory Checks Simplify Trade and Reduce Legal Costs',
    description: 'Xpharms Xchange is designed to meet stringent global standards, including GMP, EU GMP, and Class 1 Narcotics regulations. Automated compliance verification streamlines the licensing and export/import process, saving time and minimizing legal fees.',
  },
  {
    icon: FlaskConical,
    title: 'Standardized Lab Testing',
    subtitle: 'Consistent, Highest-Standard COAs Guarantee Product Quality',
    description: 'By partnering with ISO/IEC 17025-accredited labs, Xpharms Xchange guarantees every batch has a blockchain-verified Certificate of Analysis (COA). This eliminates discrepancies, enhances buyer confidence, and ensures consistent product quality.',
  },
  {
    icon: Wallet,
    title: 'Seamless & Cost-Effective Payments',
    subtitle: 'Flexible Fiat, Crypto, and Stablecoin Transactions Reduce Costs',
    description: 'Choose between fiat, cryptocurrencies, or stablecoins like USDT, with smart contracts handling instant payments. This cuts transaction fees by 15% and reduces processing time by 50%, making global trade smoother and more efficient.',
  },
  {
    icon: BoxesIcon,
    title: 'Inventory & Supply Chain Visibility',
    subtitle: 'Real-Time Tracking of Cannabis Shipments from Seed to Sale',
    description: 'Advanced blockchain tracking ensures end-to-end visibility of every shipment. Users can verify product origin, lab results, and delivery status in real time, preventing delays and supply chain fraud.',
  }
];

const Benefits = () => {
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

  const benefitVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' stroke-width='1' stroke='%232E8B57' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={benefitVariants}
            className="text-4xl font-bold text-brand-gray mb-4"
          >
            Why Choose Xpharms Exchange?
          </motion.h2>
          <motion.p 
            variants={benefitVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our platform combines enterprise-grade security with innovative blockchain 
            technology to revolutionize cannabis trade.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content Section (70%) */}
              <motion.div 
                className="w-full lg:w-[70%] space-y-6"
                variants={benefitVariants}
              >
                <div className="flex items-center gap-4 text-brand-teal">
                  <benefit.icon className="w-8 h-8" />
                  <h3 className="text-xl font-medium">{benefit.title}</h3>
                </div>
                <h4 className="text-3xl font-bold text-brand-gray">
                  {benefit.subtitle}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>

              {/* Graphic Section (30%) */}
              <motion.div 
                className="w-full lg:w-[30%] aspect-square relative"
                variants={graphicVariants}
              >
                <div className="absolute inset-0 bg-brand-teal/5 rounded-2xl overflow-hidden">
                  {/* Dynamic graphic container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Benefit-specific graphics */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <benefit.icon className="w-24 h-24 text-brand-teal/20" />
                      </motion.div>
                      
                      {/* Animated background elements */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent" />
                        <div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' stroke-width='1' stroke='%232E8B57' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '30px 30px',
                            opacity: 0.1
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;