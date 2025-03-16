import React from 'react';
import { 
  Network, 
  CheckCircle2, 
  FlaskConical, 
  Wallet, 
  Award,
  Server,
  Leaf,
  ShoppingCart,
} from 'lucide-react';

const benefits = [
  {
    icon: Network,
    title: 'Direct Connections for Faster Deals',
    subtitle: 'Trade Faster with Verified Cultivators, Buyers, and Processors',
    description: 'Xpharms Xchange connects you directly with verified cultivators, buyers, and logistic operators—eliminating middlemen for faster, more efficient deals. Our strict KYC/AML checks ensure a secure, licensed-only marketplace.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Direct Connections</h3>
              <p className="text-sm text-text-secondary">Real-time Network</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Active Connections', value: '1,500', trend: '+15%' },
              { label: 'Verified Users', value: '2,300', trend: '+8%' },
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
        </div>
      </div>
    )
  },
  {
    icon: CheckCircle2,
    title: 'Secure, Fraud-Proof Transactions',
    subtitle: 'Secure, Automated Payments with Smart Contracts',
    description: 'Xpharms Xchange secures every transaction with smart contracts, ensuring fraud-proof payments. Funds are held in escrow and released automatically upon agreed milestones, giving all parties real-time visibility and trust.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Transaction Security</h3>
              <p className="text-sm text-text-secondary">Smart Contract Status</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Secure Transactions', value: '99.9%', trend: '+0.2%' },
              { label: 'Escrow Funds', value: '$5.2M', trend: '+10%' },
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
        </div>
      </div>
    )
  },
  {
    icon: FlaskConical,
    title: 'Guaranteed Quality',
    subtitle: 'Certified Quality with Standardized COAs',
    description: 'Beyond quality assurance, our COA system empowers users with detailed insights into potency, terpenes, and contaminants, meeting strict regulatory standards. Cultivators can showcase their excellence, buyers can select products with precision—making compliance a breeze while fostering long-term partnerships.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Quality Assurance</h3>
              <p className="text-sm text-text-secondary">COA Compliance</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {[
              { stage: 'Potency Testing', progress: 95 },
              { stage: 'Contaminant Check', progress: 88 },
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
    )
  },
  {
    icon: Wallet,
    title: 'Cost-Saving Payments',
    subtitle: 'Cut Fees with Stablecoin Payments',
    description: 'Xpharms Xchange uses stablecoin payments to eliminate costly international transfer fees. Enjoy fast, low-cost transactions, and carbon-neutral payments.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Payment Efficiency</h3>
              <p className="text-sm text-text-secondary">Stablecoin Transactions</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Fee Reduction', value: '90%', trend: '-5%' },
              { label: 'Transactions/Day', value: '1,800', trend: '+20%' },
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
        </div>
      </div>
    )
  },
  {
    icon: Award,
    title: 'Immutable Record and Tracking',
    subtitle: 'Real World Tokenization',
    description: 'Xpharms Xchange transforms physical cannabis batches into digital tokens, ensuring immutable records, seamless traceability, and automated smart contract execution. This eliminates manual tracking inefficiencies & enhances supply chain transparency.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Token Tracking</h3>
              <p className="text-sm text-text-secondary">Immutable Ledger</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {[
              { stage: 'Tokenization', progress: 92 },
              { stage: 'Traceability', progress: 85 },
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
    )
  },
  {
    icon: Server,
    title: 'Reduce Negotiation Times',
    subtitle: 'Streamline the process',
    description: 'Xpharms Xchange offers a uniquely intuitive interface for negotiation and contract management, designed with users in mind. Simplify deal-making with drag-and-drop terms, real-time collaboration tools, and automated contract updates—empowering cultivators to set fair prices, buyers to customize orders, and processors to align on delivery schedules with ease.',
    graphic: (
      <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <div className="bg-secondary/5 backdrop-blur-sm p-4 border-b border-gray-100/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-text-primary font-semibold">Negotiation Efficiency</h3>
              <p className="text-sm text-text-secondary">Contract Management</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Negotiations/Day', value: '450', trend: '+18%' },
              { label: 'Contracts Signed', value: '320', trend: '+12%' },
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
        </div>
      </div>
    )
  },
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
              <div className="w-full lg:w-[30%] aspect-square">
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
            <Leaf className="w-5 h-5" />
            Cultivator Solutions
          </a>
          <a 
            href="/buyer-solutions" 
            className="flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/5 transition-colors text-lg font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            Buyer Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

<style jsx global>{`
  /* Pulse Animation for Live Indicator */
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.6; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-pulse {
    animation: pulse 1.5s ease-in-out infinite;
  }

  /* Transition for Progress Bars */
  .transition-all {
    transition-property: width;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .w-[70%] { width: 100% !important; }
    .w-[30%] { width: 100% !important; }
    .aspect-square { aspect-ratio: 1 / 1; }
  }
`}</style>