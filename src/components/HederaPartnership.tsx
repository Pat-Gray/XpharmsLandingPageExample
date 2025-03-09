import React from 'react';
import { motion } from 'framer-motion';

const HederaPartnership = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Powered by Hedera
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">Xpharms Xchange leverages Hedera's distributed ledger technology to revolutionize cannabis commerce. By tokenizing trade, streamlining negotiations, implementing smart contracts, and simplifying compliance, we enhance liquidity, accelerate transactions, and drive a new era of seamless and verifiable global cannabis trade
             
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '0.5s', label: 'Transaction Finality' },
                { value: '100K+', label: 'TPS' },
                { value: '$0.0001', label: 'Avg. Transaction Fee' },
                { value: '100%', label: 'Carbon Neutral' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-secondary font-bold text-2xl mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hedera Logo */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Logo container */}
              <div className="relative bg-white rounded-2xl p-8 ">
                <img
                  src="/13-BuiltOnHedera-Lockup-Dark.jpg"
                  alt="Built on Hedera"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HederaPartnership; 