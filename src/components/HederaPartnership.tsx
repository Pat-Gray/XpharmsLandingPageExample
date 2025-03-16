import React from 'react';
import { Shield, Zap, Coins, Leaf } from 'lucide-react';

const HederaPartnership = () => {
  const features = [
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with the highest level of compliance standards.',
      icon: Shield
    },
    {
      title: 'Lightning Fast',
      description: 'Process thousands of transactions per second with instant finality.',
      icon: Zap
    },
    {
      title: 'Cost Effective',
      description: 'Predictable and low transaction fees for enterprise operations.',
      icon: Coins
    },
    {
      title: 'Carbon Neutral',
      description: 'Powered by Hedera’s energy-efficient Hashgraph, ensuring a carbon-neutral blockchain solution.',
      icon: Leaf
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      aria-labelledby="partnership-heading"
    >
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="relative col-span-4">
          
            
            <h2 
              id="partnership-heading"
              className="text-4xl font-bold text-gray-900 mb-6 tracking-tight "
            >
              Powered by{' '}
              <span className="text-secondary">
                Hedera
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Xpharms Xchange leverages Hedera's distributed ledger technology to revolutionize cannabis commerce. 
              By tokenizing trade, streamlining negotiations, implementing smart contracts, and simplifying compliance, 
              we enhance liquidity, accelerate transactions, and drive a new era of seamless and verifiable global cannabis trade.
            </p>

            <div className="grid sm:grid-cols-4 gap-8" >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0  rounded-2xl " />
                  <div className="relative bg-white p-6 rounded-xl border border-gray-100 h-auto">
                    <feature.icon className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Image */}
          <div className="relative col-span-2">
            <div className="" />
            <div className="relative">
              <img
                src="/13-BuiltOnHedera-Lockup-Dark.svg"
                alt="Built on Hedera"
                className="w-full h-auto"
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HederaPartnership; 