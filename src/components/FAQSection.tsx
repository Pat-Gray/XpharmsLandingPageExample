import React, { useState } from 'react';
import BackgroundEffects from './BackgroundEffects';
import BackgroundEffectsBottom from './BackgroundEffectsBottom';

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
    answer: "Private business negotiations are facilitated through secure, encrypted channels within the platform. Sensitive details, including pricing agreements and contract terms, are protected by Hedera's blockchain encryption and are only accessible to involved parties. Smart contracts ensure that negotiation outcomes are automatically enforced, maintaining confidentiality and trust." 
  },
  { 
    question: 'What support is available?', 
    answer: 'Comprehensive support is available through the platform, email (support@xpharmsxchange.com), and phone (+66-123-456-789). International cannabis trade is highly complex, so we provide support throughout the process to streamline the experience and assist with compliance, regulation, and logistics.' 
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section 
      className="py-16 sm:py-24 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary text-sm font-medium px-4 py-2 bg-secondary/5 rounded-full mb-4">
            Support & Help
          </span>
          <h2 
            id="faq-heading"
            className="text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our blockchain supply chain solutions.
          </p>
        </div>

        <div 
          className="max-w-3xl mx-auto relative"
          role="region"
          aria-label="FAQ Accordion"
        >
          {/* Container with border and background */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`border-b border-gray-100 last:border-b-0 overflow-hidden transition-colors ${
                  openItem === index ? 'bg-secondary/5' : 'hover:bg-gray-50/50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 border-secondary flex items-center justify-center transition-transform ${
                    openItem === index ? 'rotate-180 bg-secondary' : ''
                  }`}>
                    <svg
                      className={`h-4 w-4 transition-colors ${
                        openItem === index ? 'text-white' : 'text-secondary'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-200 ease-in-out ${
                    openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/support"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/90 font-medium bg-secondary/5 px-6 py-3 rounded-lg hover:bg-secondary/10 transition-colors"
            aria-label="Visit our support center for more answers"
          >
            Visit our Support Center
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 