import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Enhanced Traceability',
      description: 'Track products in real-time throughout the entire supply chain with immutable blockchain records.',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automatically maintain compliance with industry regulations and standards.',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade encryption and secure data storage for sensitive information.',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Smart Contracts',
      description: 'Automate processes and agreements with secure, self-executing smart contracts.',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="py-16 sm:py-24 "
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary text-sm font-medium px-4 py-2 bg-secondary/5 rounded-full mb-4">
            Platform Benefits
          </span>
          <h2 
            id="benefits-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight"
          >
            Enterprise-Grade <span className="text-secondary">Blockchain Solutions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge blockchain technology with industry expertise 
            to deliver a secure, transparent, and compliant trading ecosystem.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Platform benefits"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="Learn more about our blockchain supply chain benefits"
          >
            Explore All Benefits
            <svg 
              className="ml-2 h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 