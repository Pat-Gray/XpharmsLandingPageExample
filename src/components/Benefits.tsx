import React from 'react';
import { 
  Network, 
  FlaskConical, 
  Wallet, 
  Award,
  Server,
  CheckCircle2,
} from 'lucide-react';

const benefits = [
  {
    icon: Network,
    title: 'Smarter, Direct Connections',
    subtitle: 'Bypass Middlemen and Connect Directly',
    description: 'Xpharms Xchange eliminates unnecessary intermediaries, reducing costs and accelerating deals. Our strict KYC/AML verification and automated compliance checks ensure only licensed participants trade, creating a secure and efficient marketplace.',
    graphic: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-secondary/5 rounded-lg p-4 flex items-center justify-center">
                <Network className="w-6 h-6 text-secondary/40" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
      </div>
    )
  },
  {
    icon: FlaskConical,
    title: 'Standardized Lab Testing',
    subtitle: 'Consistent, Highest-Standard COAs Guarantee Product Quality',
    description: 'Funds are securely held in a smart contract controlled escrow account and released automatically based on agreed milestones. This protects both buyers and sellers, reducing risks, ensuring timely payments, and enhancing trust in every transaction.',
    graphic: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square bg-secondary/5 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-secondary/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Wallet,
    title: 'Seamless & Cost-Efficient Payments',
    subtitle: 'Leverage stablecoin payments',
    description: 'Save thousands in international transfers fees or get paid instantly.',
    graphic: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-4">
            {['$', '₿', '⬡'].map((symbol, i) => (
              <div key={i} className="bg-secondary/5 rounded-full p-4 text-2xl text-secondary/40 text-center">
                {symbol}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Award,
    title: 'Real World Tokenization',
    subtitle: 'Immutable Record and Tracking',
    description: 'Xpharms Xchange transforms physical cannabis batches into digital tokens, ensuring immutable records, seamless traceability, and automated smart contract execution. This eliminates manual tracking inefficiencies & enhances supply chain transparency.',
    graphic: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-secondary/5 rounded-lg p-4 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Server,
    title: 'Reduce Negotiation Times',
    subtitle: 'Streamlined Legal Processes',
    description: 'The platform is custom built to facilitate cannabis trade and streamline the process. The platform takes a unique user-friendly approach to help cultivators and buyers reach negotiation quickly and buy securely.',
    graphic: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-secondary/5 rounded-lg p-4 flex items-center justify-center">
                <Server className="w-6 h-6 text-secondary/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary text-sm font-medium px-4 py-2 bg-secondary/5 rounded-full mb-4">
            Platform Benefits
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Xpharms Exchange?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines enterprise-grade security with innovative blockchain 
            technology to revolutionize cannabis trade.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
            >
              {/* Content Section (70%) */}
              <div className="w-full lg:w-[70%] space-y-6">
                <div className="flex items-center gap-4 text-secondary">
                  <benefit.icon className="w-8 h-8" />
                  <h3 className="text-xl font-medium text-gray-900">{benefit.title}</h3>
                </div>
                <h4 className="text-3xl font-bold text-gray-900">
                  {benefit.subtitle}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Graphic Section (30%) */}
              <div className="w-full lg:w-[30%] aspect-square bg-white rounded-2xl shadow-sm border border-gray-100">
                {benefit.graphic}
              </div>
            </div>
          ))}
        </div>

        <p className='pt-10 text-center text-lg text-gray-600 leading-relaxed'>Find Out More About Our Solutions</p>
        {/* Solution Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/cultivator-solutions" 
            className="flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/5 transition-colors text-lg font-medium"
          >
            Cultivator Solutions
          </a>
          <a 
            href="/buyer-solutions" 
            className="flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/5 transition-colors text-lg font-medium"
          >
            Buyer Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;