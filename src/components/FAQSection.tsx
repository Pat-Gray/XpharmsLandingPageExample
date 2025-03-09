import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  { 
    question: 'What is the cost to use Xpharms Xchange?', 
    answer: "There is a 3% platform fee for every transaction. Prices for additional services will be provided upon request." 
  },
  { 
    question: 'How are other companies on the platform verified?', 
    answer: 'Xpharms Xchange utilizes a strict KYC/AML verification process for all companies, including validating business licenses, conducting Anti-Money Laundering (AML) checks, and ensuring compliance with local and international cannabis trade regulations. Verified companies are distinguished by a badge on their profile, and users can access verification details upon request. Products will also be clearly labeled as GACP or GMP to further ensure a secure and trustworthy trading environment.' 
  },
  { 
    question: 'What type of Products are available?', 
    answer: 'The platform has 3 categories of Cannabis products which include: Bulk Raw Cannabis Flower, Bulk Cannabis Derivatives (Extracts and Concentrates), and Finished Cannabis Products (Flower, edibles, Topicals, Tinctures, capsules, vape cartridges)' 
  },
  { 
    question: 'How does Xpharms Xchange ensure data privacy?', 
    answer: "We use Hedera's enterprise-grade blockchain for secure, encrypted transactions, ensuring your data is protected under GDPR and other privacy regulations. Our platform implements role-based access controls, end-to-end encryption, and secure key management to protect sensitive business information while maintaining the transparency benefits of blockchain." 
  },
  {question: 'What types of payment are accepted?',
    answer: 'We accept fiat, crypto (e.g., BTC, ETH), and stablecoins like USDT for flexible, cost-effective transactions.  The payment method must be approved by both parties.' 
  },
  { 
    question: 'What is a smart contract, and does it enforce a legal contract?', 
    answer: 'Smart contracts are self-executing programs on the blockchain that automatically enforce the terms of an agreement when predefined conditions are met. For example, a smart contract could automatically process payments upon shipment delivery. On Xpharms Xchange, Hedera-powered smart contracts ensure secure, tamper-proof transactions.  While smart contracts enforce their coded terms with precision, they are not legal contracts themselves. However, Xpharms Xchange provides a legal contract for both parties to enter into, which holds the terms they negotiate. The smart contracts are then designed to reflect these legally binding agreements, and their immutable records can serve as evidence in legal disputes, enhancing trust and accountability.' 
  },
  { 
    question: 'How does Xpharms Xchange handle private business negotiations and details?', 
    answer: "Private business negotiations are facilitated through secure, encrypted channels within the platform. Sensitive details, including pricing agreements and contract terms, are protected by Hedera’s blockchain encryption and are only accessible to involved parties. Smart contracts ensure that negotiation outcomes are automatically enforced, maintaining confidentiality and trust." 
  },
  { 
    question: 'What support is available?', 
    answer: 'Comprehensive support is available through the platform, email (support@xpharmsxchange.com), and phone (+66-123-456-789). International cannabis trade is highly complex, so we provide support throughout the process to streamline the experience and assist with compliance, regulation, and logistics.' 
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={`path-${i}`}
              d={`M${Math.random() * 100} ${Math.random() * 100} Q${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100}`}
              stroke="#3B82F6"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-block mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            viewport={{ once: true }}
          >
            <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium">
              Knowledge Base
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-tertiary text-lg md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our blockchain-powered cannabis trading platform.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto bg-dark/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-tertiary/10">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              className={`border-b border-tertiary/10 ${index === faqData.length - 1 ? 'border-b-0' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <button
                className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-accent">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary flex-shrink-0 ml-4"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-tertiary">
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional help */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-tertiary mb-4">
            Can't find what you're looking for?
          </p>
          <motion.button
            className="px-6 py-3 bg-secondary text-white rounded-md shadow-lg font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 