import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`h-line-${i}`}
              x1="0"
              y1={20 + i * 15}
              x2="100"
              y2={20 + i * 15}
              stroke="#3B82F6"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3, 
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5
              }}
            />
          ))}
          
          {/* Vertical lines */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`v-line-${i}`}
              x1={10 + i * 12}
              y1="0"
              x2={10 + i * 12}
              y2="100"
              stroke="#3B82F6"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3, 
                delay: i * 0.15,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5
              }}
            />
          ))}
          
          {/* Animated dots */}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-tertiary/10">
            <div className="p-8 md:p-12">
              {/* Content */}
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Ready to Transform Your Business?
                  </span>
                </motion.div>
                
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-accent mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Transform Your Cannabis Supply Chain with Blockchain Technology
                </motion.h2>
                
                <motion.p
                  className="text-tertiary text-lg mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join Xpharms Xchange today and take control of your cannabis trade. With blockchain-backed security, real-time visibility, and global connections, we make transactions seamless and efficient for both Cultivators and Buyers.
                </motion.p>
              </div>
              
              {/* Stats */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold mb-2">99%</div>
                  <div className="text-tertiary">Reduction in Fraud Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold mb-2">70%</div>
                  <div className="text-tertiary">Faster Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-secondary text-3xl font-bold mb-2">80%</div>
                  <div className="text-tertiary">Lower Transaction Fees</div>
                </div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="px-8 py-4 bg-secondary text-white rounded-md shadow-lg font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border border-tertiary text-tertiary rounded-md font-medium hover:text-accent hover:border-accent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Contact Sales
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 