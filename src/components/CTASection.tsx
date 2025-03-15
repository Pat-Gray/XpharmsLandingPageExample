import React from 'react';

const CTASection = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Pattern */}
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              {/* Content */}
              <div className="text-center mb-12">
                <span className="inline-block text-secondary text-sm font-medium px-4 py-2 bg-secondary/5 rounded-full mb-4">
                  Ready to Transform Your Business?
                </span>
                
                <h2
                  id="cta-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                  Transform Your Cannabis Supply Chain with{' '}
                  <span className="text-secondary">
                    Blockchain Technology
                  </span>
                </h2>
                
                <p
                  className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Join Xpharms Xchange today and take control of your cannabis trade. With blockchain-backed security, 
                  real-time visibility, and global connections, we make transactions seamless and efficient for both 
                  Cultivators and Buyers.
                </p>
              </div>
              
              {/* Stats */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                aria-label="Platform Statistics"
              >
                {[
                  { value: '99%', label: 'Reduction in Fraud Risk' },
                  { value: '70%', label: 'Faster Processing Time' },
                  { value: '80%', label: 'Lower Transaction Fees' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-secondary/5 rounded-xl"
                  >
                    <div className="text-secondary text-3xl font-bold mb-2" aria-hidden="true">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      <span className="sr-only">Statistic: </span>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Role-specific CTAs */}
            
                    <button
                      className={`w-full px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 bg-secondary text-white hover:bg-secondary/90`}
                      aria-label={`Get Started`}
                    >
                      Get Started
                    </button>
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 