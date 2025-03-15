import React from 'react';
import BackgroundEffects from './BackgroundEffects';

const Hero = () => {
  return (
    <section 
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight"
            >
              Revolutionize{' '}
              <span className="text-secondary relative">
                Cannabis Trade
                <span className="absolute inset-x-0 bottom-0 h-3 bg-secondary/10 -z-10 transform -rotate-1"></span>
              </span>
              {' '}with Blockchain Innovation
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Secure, transparent, and compliant marketplace for cultivators and buyers worldwide
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              role="group"
              aria-label="Call to action"
            >
              <button 
                className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-sm backdrop-blur-sm"
                aria-label="Schedule a Demo of Our Platform"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-text-primary font-semibold">Supply Chain Dashboard</h3>
                  <p className="text-sm text-text-secondary">Real-time Overview</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-text-secondary">Live</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Active Orders', value: '1,234', trend: '+12%' },
                  { label: 'Success Rate', value: '99.8%', trend: '+0.5%' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100/50 hover:border-secondary/20 transition-colors">
                    <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl font-semibold text-text-primary">{stat.value}</span>
                      <span className="text-sm text-green-600">{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Supply Chain Progress */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100/50 p-4">
                <h4 className="text-sm font-medium text-text-secondary mb-4">Supply Chain Progress</h4>
                <div className="space-y-3">
                  {[
                    { stage: 'Processing', progress: 80 },
                    { stage: 'Distribution', progress: 30 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">{item.stage}</span>
                        <span className="text-text-secondary">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;