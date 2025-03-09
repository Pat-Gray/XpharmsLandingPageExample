import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefitsData = [
  {
    title: 'Smarter, Direct Connections',
    subtitle: 'Bypass Middlemen and Connect Directly with Verified Cultivators and Buyers',
    description: 'Xpharms Xchange eliminates intermediaries, reducing costs by 20% and accelerating deals. Our KYC/AML verification ensures only licensed participants trade, creating a secure marketplace. Connect with verified partners today.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Network hub */}
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="#3B82F6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Connected nodes */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.g key={`node-${i}`}>
              {/* Node */}
              <motion.circle
                cx={12 + 7 * Math.cos(angle * Math.PI / 180)}
                cy={12 + 7 * Math.sin(angle * Math.PI / 180)}
                r="2"
                fill={i % 2 === 0 ? "#10B981" : "#F59E0B"}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Connection line */}
              <motion.line
                x1="12"
                y1="12"
                x2={12 + 7 * Math.cos(angle * Math.PI / 180)}
                y2={12 + 7 * Math.sin(angle * Math.PI / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              
              {/* Verification checkmark */}
              <motion.path
                d={`M${12 + 7 * Math.cos(angle * Math.PI / 180) - 1} ${12 + 7 * Math.sin(angle * Math.PI / 180)}
                   l0.75 0.75 l1.25 -1.25`}
                stroke="#10B981"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            </motion.g>
          ))}
          
          {/* Data flow animation */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.circle
              key={`flow-${i}`}
              cx="12"
              cy="12"
              r="0.3"
              fill="#3B82F6"
              animate={{ 
                x: [0, 7 * Math.cos(angle * Math.PI / 180)],
                y: [0, 7 * Math.sin(angle * Math.PI / 180)],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>
    )
  },
  {
    title: 'Trustworthy & Transparent Transactions',
    subtitle: 'Smart Contracts Ensure Secure, Fraud-Proof Payments with Real-Time Tracking',
    description: 'Hedera-powered smart contracts automatically process milestone-based payments, ensuring tamper-proof records. Every transaction is immutable, reducing fraud risks and providing real-time visibility for buyers and sellers.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Smart contract document */}
          <motion.path
            d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Contract lines */}
          {[7, 9, 11, 13].map((y, i) => (
            <motion.line
              key={`line-${i}`}
              x1="8"
              y1={y}
              x2={16 - i * 2}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
          
          {/* Verification shield */}
          <motion.path
            d="M12 15l-1.5-1.5L12 12l1.5 1.5z"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          />
          
          {/* Blockchain connection */}
          {[0, 120, 240].map((angle, i) => (
            <motion.g key={`chain-${i}`}>
              <motion.circle
                cx={12 + 8 * Math.cos(angle * Math.PI / 180)}
                cy={12 + 8 * Math.sin(angle * Math.PI / 180)}
                r="1"
                fill="#3B82F6"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
              <motion.path
                d={`M12 12 L${12 + 8 * Math.cos(angle * Math.PI / 180)} ${12 + 8 * Math.sin(angle * Math.PI / 180)}`}
                stroke="#3B82F6"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            </motion.g>
          ))}
        </svg>
      </div>
    )
  },
  {
    title: 'Hassle-Free Global Compliance',
    subtitle: 'Automated Regulatory Checks Simplify Trade and Reduce Legal Costs',
    description: 'Xpharms Xchange is designed to meet stringent global standards, including GMP, EU GMP, and Class 1 Narcotics regulations. Automated compliance verification streamlines the licensing and export/import process, saving time and minimizing legal fees',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* World map base */}
          <motion.path
            d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Continent outlines */}
          <motion.path
            d="M8 8c1-1 2-1.5 3-1.5s2 0.5 3 1.5c1-1 2-1.5 3-1.5"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          
          {/* Compliance checkpoints */}
          {[
            { x: 10, y: 8 },
            { x: 14, y: 10 },
            { x: 12, y: 14 }
          ].map((point, i) => (
            <motion.g key={`check-${i}`}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="1"
                fill="#10B981"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
              <motion.path
                d={`M${point.x - 0.5} ${point.y} l0.5 0.5 l1 -1`}
                stroke="#10B981"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
              />
            </motion.g>
          ))}
          
          {/* Scanning effect */}
          <motion.rect
            x="4"
            y="12"
            width="16"
            height="0.5"
            fill="#3B82F6"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [8, 16]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        </svg>
      </div>
    )
  },
  {
    title: 'Standardized Lab Testing',
    subtitle: 'Consistent, Highest-Standard COAs Guarantee Product Quality',
    description: 'By partnering with ISO/IEC 17025-accredited labs, Xpharms Xchange guarantees every batch has a blockchain-verified Certificate of Analysis (COA). This eliminates discrepancies, enhances buyer confidence, and ensures consistent product quality.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Lab equipment setup */}
          <motion.g>
            {/* Test tube rack */}
            <motion.rect
              x="6"
              y="14"
              width="12"
              height="2"
              fill="#3B82F6"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Test tubes */}
            {[8, 12, 16].map((x, i) => (
              <motion.g key={`tube-${i}`}>
                <motion.rect
                  x={x - 1}
                  y="8"
                  width="2"
                  height="6"
                  rx="1"
                  fill="none"
                  stroke="currentColor"
                  initial={{ height: 0 }}
                  animate={{ height: 6 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                />
                <motion.rect
                  x={x - 0.8}
                  y="11"
                  width="1.6"
                  height="2.5"
                  fill="#10B981"
                  initial={{ height: 0 }}
                  animate={{ height: 2.5 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                />
                
                {/* Bubbles */}
                {[0, 1].map((j) => (
                  <motion.circle
                    key={`bubble-${i}-${j}`}
                    cx={x - 0.3 + j * 0.6}
                    cy="12"
                    r="0.2"
                    fill="#F59E0B"
                    animate={{
                      y: [-1, -2],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2 + j * 0.3,
                      repeat: Infinity
                    }}
                  />
                ))}
              </motion.g>
            ))}
            
            {/* Microscope */}
            <motion.path
              d="M18 6c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            
            {/* Analysis data */}
            <motion.path
              d="M19 4h2M19 6h2M19 8h2"
              stroke="#3B82F6"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </motion.g>
        </svg>
      </div>
    )
  },
  {
    title: 'Seamless & Cost-Effective Payments',
    subtitle: 'Flexible Fiat, Crypto, and Stablecoin Transactions Reduce Costs',
    description: 'Choose between fiat, cryptocurrencies, or stablecoins like USDT, with smart contracts handling instant payments. This cuts transaction fees by 15% and reduces processing time by 50%, making global trade smoother and more efficient.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Payment hub */}
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            stroke="#3B82F6"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Payment types */}
          {[
            { angle: 0, symbol: "$", color: "#10B981" },    // Fiat
            { angle: 120, symbol: "₿", color: "#F59E0B" },  // Crypto
            { angle: 240, symbol: "⬡", color: "#3B82F6" }   // Stablecoin
          ].map((payment, i) => (
            <motion.g key={`payment-${i}`}>
              {/* Payment circle */}
              <motion.circle
                cx={12 + 6 * Math.cos(payment.angle * Math.PI / 180)}
                cy={12 + 6 * Math.sin(payment.angle * Math.PI / 180)}
                r="2"
                fill="none"
                stroke={payment.color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              />
              
              {/* Symbol */}
              <motion.text
                x={12 + 6 * Math.cos(payment.angle * Math.PI / 180)}
                y={12 + 6 * Math.sin(payment.angle * Math.PI / 180)}
                fontSize="2"
                fill={payment.color}
                textAnchor="middle"
                dominantBaseline="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.2 + 0.2 }}
              >
                {payment.symbol}
              </motion.text>
              
              {/* Transaction flow */}
              <motion.circle
                cx={12}
                cy={12}
                r="0.3"
                fill={payment.color}
                animate={{
                  x: [0, 6 * Math.cos(payment.angle * Math.PI / 180)],
                  y: [0, 6 * Math.sin(payment.angle * Math.PI / 180)],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
            </motion.g>
          ))}
        </svg>
      </div>
    )
  },
  {
    title: 'Inventory & Supply Chain Visibility',
    subtitle: 'Real-Time Tracking of Cannabis Shipments from Seed to Sale',
    description: 'Advanced blockchain tracking ensures end-to-end visibility of every shipment. Users can verify product origin, lab results, and delivery status in real time, preventing delays and supply chain fraud.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Supply chain path */}
          <motion.path
            d="M4 12h16"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Chain nodes */}
          {[
            { x: 4, y: 12, icon: "🌱" },   // Cultivation
            { x: 8, y: 12, icon: "📦" },   // Processing
            { x: 12, y: 12, icon: "🔬" },  // Testing
            { x: 16, y: 12, icon: "🚚" },  // Transport
            { x: 20, y: 12, icon: "🏪" }   // Retail
          ].map((node, i) => (
            <motion.g key={`node-${i}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="1.5"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              />
              <motion.text
                x={node.x}
                y={node.y}
                fontSize="2"
                textAnchor="middle"
                dominantBaseline="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.2 + 0.2 }}
              >
                {node.icon}
              </motion.text>
            </motion.g>
          ))}
          
          {/* Moving package */}
          <motion.rect
            x="4"
            y="11"
            width="1"
            height="1"
            fill="#10B981"
            animate={{
              x: [4, 20],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Status indicators */}
          {[4, 8, 12, 16, 20].map((x, i) => (
            <motion.circle
              key={`status-${i}`}
              cx={x}
              cy="14"
              r="0.5"
              fill="#F59E0B"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.8,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>
    )
  },
  {
    title: 'Secure & Controlled Trade Settlement',
    subtitle: 'Escrow-Based Payments Ensure Fair, Timely Transactions',
    description: 'Funds are securely held in a smart contract controlled escrow account and released automatically based on agreed milestones. This protects both buyers and sellers, reducing risks, ensuring timely payments, and enhancing trust in every transaction.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Main vault circle */}
          <motion.circle
            cx="12"
            cy="12"
            r="8"
            stroke="#3B82F6"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Inner security layers */}
          {[6, 4, 2].map((radius, i) => (
            <motion.circle
              key={`security-${i}`}
              cx="12"
              cy="12"
              r={radius}
              stroke="#10B981"
              strokeWidth="0.5"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
          
          {/* Lock mechanism */}
          <motion.path
            d="M11 8v-1a1 1 0 0 1 2 0v1"
            stroke="#F59E0B"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          
          {/* Milestone indicators */}
          {[0, 120, 240].map((angle, i) => (
            <motion.g key={`milestone-${i}`}>
              <motion.circle
                cx={12 + 6 * Math.cos(angle * Math.PI / 180)}
                cy={12 + 6 * Math.sin(angle * Math.PI / 180)}
                r="1"
                fill={i === 2 ? "#10B981" : (i === 1 ? "#F59E0B" : "#3B82F6")}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
              
              {/* Progress line */}
              <motion.path
                d={`M12 12 L${12 + 6 * Math.cos(angle * Math.PI / 180)} ${12 + 6 * Math.sin(angle * Math.PI / 180)}`}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              />
              
              {/* Status indicator */}
              <motion.path
                d={`M${12 + 6 * Math.cos(angle * Math.PI / 180) - 0.5} ${12 + 6 * Math.sin(angle * Math.PI / 180)}
                   l0.5 0.5 l1 -1`}
                stroke="#10B981"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: i < 2 ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
              />
            </motion.g>
          ))}
          
          {/* Animated funds */}
          <motion.circle
            cx="12"
            cy="12"
            r="0.5"
            fill="#F59E0B"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </svg>
      </div>
    )
  },
  {
    title: 'Real World Tokenization',
    subtitle: 'RWT of Products for Immutable Record and Tracking',
    description: 'Xpharms Xchange transforms physical cannabis batches into digital tokens, ensuring immutable records, seamless traceability, and automated smart contract execution. This eliminates manual tracking inefficiencies & enhances supply chain transparency.',
    icon: (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          {/* Physical product representation */}
          <motion.g>
            {/* Cannabis leaf outline */}
            <motion.path
              d="M8 12c0-2 1-3 4-3s4 1 4 3c0-2-1-3-4-3s-4 1-4 3z"
              stroke="#10B981"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M11 12c0-1 0.5-1.5 1-1.5s1 0.5 1 1.5"
              stroke="#10B981"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.g>
          
          {/* Transformation effect */}
          <motion.g>
            {/* Digital conversion rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.line
                key={`ray-${i}`}
                x1={12 + 3 * Math.cos(angle * Math.PI / 180)}
                y1={12 + 3 * Math.sin(angle * Math.PI / 180)}
                x2={12 + 5 * Math.cos(angle * Math.PI / 180)}
                y2={12 + 5 * Math.sin(angle * Math.PI / 180)}
                stroke="#3B82F6"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
            
            {/* Token ring */}
            <motion.circle
              cx="12"
              cy="12"
              r="6"
              stroke="#3B82F6"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              fill="none"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.g>
          
          {/* Digital elements */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.g key={`digital-${i}`}>
              <motion.circle
                cx={12 + 6 * Math.cos(angle * Math.PI / 180)}
                cy={12 + 6 * Math.sin(angle * Math.PI / 180)}
                r="1"
                fill="#F59E0B"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
              
              {/* Binary data */}
              <motion.text
                x={12 + 6 * Math.cos(angle * Math.PI / 180)}
                y={12 + 6 * Math.sin(angle * Math.PI / 180)}
                fontSize="1"
                fill="#3B82F6"
                textAnchor="middle"
                dominantBaseline="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              >
                10
              </motion.text>
            </motion.g>
          ))}
          
          {/* NFT badge */}
          <motion.path
            d="M12 16l-1-1 1-1 1 1z"
            fill="#F59E0B"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </svg>
      </div>
    )
  }
];

const BenefitsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-dark to-primary overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-secondary"
              style={{
                width: Math.random() * 8 + 2 + 'px',
                height: Math.random() * 8 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      {/* Section header */}
      <motion.div 
        className="container mx-auto px-6 lg:px-8 mb-16 text-center"
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
            Platform Benefits
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
          Enterprise-Grade <span className="text-secondary">Blockchain Solutions</span>
        </h2>
        <p className="text-tertiary text-lg md:text-xl max-w-3xl mx-auto">
          Our platform combines cutting-edge blockchain technology with industry expertise to deliver a secure, transparent, and compliant cannabis trading ecosystem.
        </p>
      </motion.div>

      {/* Benefits list */}
      <div className="container mx-auto px-6 lg:px-8">
        {benefitsData.map((benefit, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              className="min-h-[80vh] flex items-center py-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-accent mb-4">
                    {benefit.title}
                  </h3>
                  <h4 className="text-xl text-secondary font-medium mb-6">
                    {benefit.subtitle}
                  </h4>
                  <p className="text-tertiary text-lg mb-8">
                    {benefit.description}
                  </p>
                  
                  {/* Feature list for platform preview benefits */}
                  {(index === 0 || index === 1) && (
                    <div className="space-y-4">
                      {[
                        { icon: "🔒", text: "Enterprise-grade security with Hedera consensus" },
                        { icon: "⚡", text: "Real-time transaction processing" },
                        { icon: "📊", text: "Advanced analytics and reporting" },
                        { icon: "🔍", text: "Full supply chain visibility" }
                      ].map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-2xl">{feature.icon}</span>
                          <span className="text-tertiary">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Graphic */}
                <motion.div
                  className="order-1 lg:order-2 relative h-[500px] lg:h-[600px]"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {index === 0 ? (
                    // Platform Dashboard Preview
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        {/* Dashboard Header */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="space-y-2">
                            <div className="h-4 w-32 bg-secondary/20 rounded animate-pulse"></div>
                            <div className="h-3 w-24 bg-secondary/10 rounded animate-pulse"></div>
                          </div>
                          <div className="flex space-x-3">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-8 w-8 rounded-lg bg-secondary/20 animate-pulse"></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="bg-secondary/10 rounded-lg p-4"
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="h-3 w-20 bg-secondary/20 rounded mb-2"></div>
                              <div className="h-6 w-16 bg-secondary/30 rounded"></div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Activity Chart */}
                        <div className="bg-secondary/10 rounded-lg p-4 h-48 mb-6">
                          <motion.svg
                            viewBox="0 0 100 40"
                            className="w-full h-full stroke-secondary"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <path
                              d="M0,20 Q25,5 50,20 T100,20"
                              fill="none"
                              strokeWidth="0.5"
                            />
                          </motion.svg>
                        </div>
                        
                        {/* Transaction List */}
                        <div className="space-y-3">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center justify-between bg-secondary/10 rounded-lg p-3">
                              <div className="flex items-center space-x-3">
                                <div className="h-8 w-8 rounded-full bg-secondary/20"></div>
                                <div className="space-y-1">
                                  <div className="h-3 w-24 bg-secondary/20 rounded"></div>
                                  <div className="h-2 w-16 bg-secondary/10 rounded"></div>
                                </div>
                              </div>
                              <div className="h-4 w-16 bg-secondary/20 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    // Supply Chain Visualization
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        <motion.div
                          className="relative h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          {/* Supply Chain Nodes */}
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              className="absolute flex items-center justify-center"
                              style={{
                                top: `${25 + i * 20}%`,
                                left: `${20 + i * 20}%`,
                              }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.2 }}
                            >
                              <div className="relative">
                                <motion.div
                                  className="absolute inset-0 bg-secondary/20 rounded-full"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.2, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                  }}
                                />
                                <div className="relative z-10 h-16 w-16 bg-secondary/30 rounded-full flex items-center justify-center">
                                  <div className="h-8 w-8 bg-secondary rounded-full" />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                          
                          {/* Connecting Lines */}
                          <svg className="absolute inset-0 w-full h-full">
                            <motion.path
                              d="M100,100 L200,150 L300,200 L400,250"
                              stroke="currentColor"
                              className="text-secondary"
                              strokeWidth="2"
                              strokeDasharray="4,4"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2 }}
                            />
                          </svg>
                          
                          {/* Moving Data Points */}
                          <motion.div
                            className="absolute h-4 w-4 bg-accent rounded-full"
                            animate={{
                              x: [100, 400],
                              y: [100, 250],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    // Global Compliance Platform Preview
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        <div className="h-full flex flex-col">
                          {/* Platform Header */}
                          <div className="flex justify-between items-center mb-6">
                            <div className="space-y-2">
                              <h3 className="text-accent text-xl font-semibold">Global Compliance Dashboard</h3>
                              <p className="text-tertiary text-sm">Real-time compliance monitoring</p>
                            </div>
                            <div className="flex space-x-2">
                              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Active</div>
                            </div>
                          </div>

                          {/* World Map with Compliance Points */}
                          <div className="relative flex-grow bg-secondary/5 rounded-xl p-4 mb-6">
                            <motion.div className="absolute inset-0">
                              {/* Rotating globe from the original icon, but larger */}
                              <motion.svg
                                viewBox="0 0 400 200"
                                className="w-full h-full"
                                style={{ opacity: 0.6 }}
                              >
                                <motion.path
                                  d="M40,100 Q100,80 200,100 T360,100"
                                  stroke="currentColor"
                                  className="text-secondary"
                                  strokeWidth="0.5"
                                  strokeDasharray="4,4"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                />
                                {/* Add multiple curved paths for the globe effect */}
                                {[0, 1, 2, 3].map((i) => (
                                  <motion.path
                                    key={i}
                                    d={`M40,${80 + i * 20} Q100,${60 + i * 20} 200,${80 + i * 20} T360,${80 + i * 20}`}
                                    stroke="currentColor"
                                    className="text-secondary"
                                    strokeWidth="0.5"
                                    strokeDasharray="4,4"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                  />
                                ))}
                              </motion.svg>
                              
                              {/* Compliance checkpoints */}
                              {[
                                { x: "20%", y: "30%", label: "EU GMP" },
                                { x: "40%", y: "60%", label: "FDA" },
                                { x: "60%", y: "40%", label: "Health Canada" },
                                { x: "80%", y: "50%", label: "TGA" }
                              ].map((point, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute flex flex-col items-center"
                                  style={{ left: point.x, top: point.y }}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.2 }}
                                >
                                  <motion.div
                                    className="w-4 h-4 bg-secondary rounded-full"
                                    animate={{
                                      scale: [1, 1.2, 1],
                                      opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity
                                    }}
                                  />
                                  <span className="text-xs text-tertiary mt-1">{point.label}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>

                          {/* Compliance Status Cards */}
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { title: "Active Licenses", value: "2,345", trend: "+12%" },
                              { title: "Compliance Rate", value: "99.9%", trend: "+0.5%" },
                              { title: "Verified Partners", value: "1,200+", trend: "+50" },
                              { title: "Countries", value: "25+", trend: "+3" }
                            ].map((stat, i) => (
                              <motion.div
                                key={i}
                                className="bg-secondary/10 rounded-lg p-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <h4 className="text-sm text-tertiary mb-2">{stat.title}</h4>
                                <div className="flex items-end justify-between">
                                  <span className="text-2xl text-accent font-bold">{stat.value}</span>
                                  <span className="text-green-400 text-sm">{stat.trend}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : index === 3 ? (
                    // Lab Testing Platform Preview
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        <div className="h-full flex flex-col">
                          {/* Lab Results Header */}
                          <div className="flex justify-between items-center mb-6">
                            <div className="space-y-2">
                              <h3 className="text-accent text-xl font-semibold">Certificate of Analysis</h3>
                              <p className="text-tertiary text-sm">Batch #XP-2024-03-15-001</p>
                            </div>
                            <div className="flex space-x-2">
                              <div className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Verified</div>
                            </div>
                          </div>

                          {/* Lab Analysis Visualization */}
                          <div className="relative flex-grow bg-secondary/5 rounded-xl p-4 mb-6">
                            <div className="grid grid-cols-2 gap-4 h-full">
                              {/* Chemical Composition Chart */}
                              <div className="bg-dark/30 rounded-lg p-4">
                                <h4 className="text-sm text-tertiary mb-4">Chemical Profile</h4>
                                <div className="space-y-3">
                                  {[
                                    { label: "THC", value: "18.5%", color: "bg-purple-500" },
                                    { label: "CBD", value: "0.5%", color: "bg-green-500" },
                                    { label: "CBN", value: "0.3%", color: "bg-blue-500" },
                                    { label: "Terpenes", value: "2.8%", color: "bg-yellow-500" }
                                  ].map((item, i) => (
                                    <motion.div
                                      key={i}
                                      className="relative"
                                      initial={{ width: "0%" }}
                                      animate={{ width: "100%" }}
                                      transition={{ delay: i * 0.2 }}
                                    >
                                      <div className="flex justify-between text-xs mb-1">
                                        <span className="text-tertiary">{item.label}</span>
                                        <span className="text-accent">{item.value}</span>
                                      </div>
                                      <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                                        <motion.div
                                          className={`h-full ${item.color}`}
                                          initial={{ width: "0%" }}
                                          animate={{ width: item.value }}
                                          transition={{ duration: 1, delay: i * 0.2 }}
                                        />
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Microscope View */}
                              <div className="bg-dark/30 rounded-lg p-4 relative overflow-hidden">
                                <h4 className="text-sm text-tertiary mb-4">Microscopic Analysis</h4>
                                <motion.div
                                  className="absolute inset-4 opacity-50"
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0]
                                  }}
                                  transition={{
                                    duration: 10,
                                    repeat: Infinity
                                  }}
                                >
                                  {/* Circular patterns representing microscope view */}
                                  {[...Array(5)].map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute inset-0 border-2 border-secondary rounded-full"
                                      style={{
                                        scale: 0.5 + i * 0.1,
                                        opacity: 1 - i * 0.2
                                      }}
                                    />
                                  ))}
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* Test Results Summary */}
                          <div className="grid grid-cols-4 gap-4">
                            {[
                              { label: "Pesticides", status: "Pass" },
                              { label: "Heavy Metals", status: "Pass" },
                              { label: "Microbials", status: "Pass" },
                              { label: "Residual Solvents", status: "Pass" }
                            ].map((test, i) => (
                              <motion.div
                                key={i}
                                className="bg-secondary/10 rounded-lg p-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="text-xs text-tertiary mb-2">{test.label}</div>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500" />
                                  <span className="text-accent text-sm">{test.status}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : index === 4 ? (
                    // Payment Platform Preview
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        <div className="h-full flex flex-col">
                          {/* Payment Dashboard Header */}
                          <div className="flex justify-between items-center mb-6">
                            <div className="space-y-2">
                              <h3 className="text-accent text-xl font-semibold">Payment Dashboard</h3>
                              <p className="text-tertiary text-sm">Multi-currency settlement</p>
                            </div>
                            <div className="flex space-x-2">
                              <motion.div
                                className="w-3 h-3 rounded-full bg-green-500"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity
                                }}
                              />
                              <span className="text-sm text-tertiary">Live</span>
                            </div>
                          </div>

                          {/* Payment Methods Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {[
                              { type: "Fiat", icon: "$", color: "bg-blue-500" },
                              { type: "Crypto", icon: "₿", color: "bg-yellow-500" },
                              { type: "Stablecoin", icon: "⬡", color: "bg-green-500" }
                            ].map((method, i) => (
                              <motion.div
                                key={i}
                                className="bg-secondary/10 rounded-lg p-4 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                              >
                                <div className={`absolute right-2 top-2 w-8 h-8 ${method.color} rounded-full opacity-20`} />
                                <div className="text-2xl mb-2">{method.icon}</div>
                                <div className="text-sm text-tertiary">{method.type}</div>
                                <motion.div
                                  className="absolute inset-0 border-2 border-transparent"
                                  animate={{
                                    borderColor: ["rgba(59, 130, 246, 0)", "rgba(59, 130, 246, 0.5)", "rgba(59, 130, 246, 0)"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>

                          {/* Transaction Flow Visualization */}
                          <div className="flex-grow bg-secondary/5 rounded-xl p-4 mb-6">
                            <div className="relative h-full">
                              <motion.svg
                                viewBox="0 0 400 200"
                                className="w-full h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                              >
                                {/* Transaction paths */}
                                {[0, 1, 2].map((i) => (
                                  <motion.path
                                    key={i}
                                    d={`M50,${100 + i * 30} C150,${90 + i * 30} 250,${110 + i * 30} 350,${100 + i * 30}`}
                                    stroke="currentColor"
                                    className="text-secondary"
                                    strokeWidth="2"
                                    strokeDasharray="4,4"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                  />
                                ))}
                                
                                {/* Moving transaction indicators */}
                                {[0, 1, 2].map((i) => (
                                  <motion.circle
                                    key={i}
                                    r="4"
                                    fill="#3B82F6"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 0],
                                      cx: [50, 350],
                                      cy: [100 + i * 30, 100 + i * 30]
                                    }}
                                    transition={{
                                      duration: 3,
                                      delay: i * 0.5,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  />
                                ))}
                              </motion.svg>
                            </div>
                          </div>

                          {/* Transaction Stats */}
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { label: "Processing Time", value: "< 2s", trend: "-50%" },
                              { label: "Success Rate", value: "99.99%", trend: "+0.1%" },
                              { label: "Avg Fee", value: "0.1%", trend: "-25%" }
                            ].map((stat, i) => (
                              <motion.div
                                key={i}
                                className="bg-secondary/10 rounded-lg p-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="text-xs text-tertiary mb-1">{stat.label}</div>
                                <div className="flex items-baseline space-x-2">
                                  <span className="text-lg text-accent font-semibold">{stat.value}</span>
                                  <span className="text-xs text-green-400">{stat.trend}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Supply Chain Platform Preview
                    <div className="relative w-full h-full bg-dark/50 rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
                      <div className="absolute inset-0 p-6">
                        <div className="h-full flex flex-col">
                          {/* Supply Chain Header */}
                          <div className="flex justify-between items-center mb-6">
                            <div className="space-y-2">
                              <h3 className="text-accent text-xl font-semibold">Supply Chain Tracker</h3>
                              <p className="text-tertiary text-sm">End-to-end visibility</p>
                            </div>
                            <div className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                              Live Tracking
                            </div>
                          </div>

                          {/* Supply Chain Flow */}
                          <div className="flex-grow bg-secondary/5 rounded-xl p-4 mb-6 relative">
                            {/* Stage connections */}
                            <svg className="absolute inset-0 w-full h-full">
                              <motion.path
                                d="M50,100 L150,60 L250,100 L350,60"
                                stroke="currentColor"
                                className="text-secondary"
                                strokeWidth="2"
                                strokeDasharray="4,4"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                              />
                            </svg>

                            {/* Supply chain stages */}
                            <div className="relative h-full flex items-center justify-between">
                              {[
                                { label: "Cultivation", icon: "🌱" },
                                { label: "Processing", icon: "⚗️" },
                                { label: "Testing", icon: "🔬" },
                                { label: "Distribution", icon: "🚚" }
                              ].map((stage, i) => (
                                <motion.div
                                  key={i}
                                  className="flex flex-col items-center"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.2 }}
                                >
                                  <div className="relative">
                                    <motion.div
                                      className="absolute inset-0 bg-secondary/20 rounded-full"
                                      animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.2, 0.5]
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity
                                      }}
                                    />
                                    <div className="relative z-10 w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-xl">
                                      {stage.icon}
                                    </div>
                                  </div>
                                  <span className="text-sm text-tertiary mt-2">{stage.label}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Moving package indicator */}
                            <motion.div
                              className="absolute h-4 w-4 bg-accent rounded-full"
                              animate={{
                                x: [50, 350],
                                y: [100, 60]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </div>

                            {/* Tracking Stats */}
                            <div className="grid grid-cols-4 gap-4">
                              {[
                                { label: "Active Shipments", value: "1,234" },
                                { label: "On-Time Rate", value: "98.5%" },
                                { label: "Avg Transit Time", value: "3.2 days" },
                                { label: "Compliance Rate", value: "100%" }
                              ].map((stat, i) => (
                                <motion.div
                                  key={i}
                                  className="bg-secondary/10 rounded-lg p-3"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <div className="text-xs text-tertiary mb-1">{stat.label}</div>
                                  <div className="text-lg text-accent font-semibold">{stat.value}</div>
                                </motion.div>
                              ))}
                            </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent"></div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection; 