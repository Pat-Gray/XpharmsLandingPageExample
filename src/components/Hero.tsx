import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate blockchain nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    connections: []
  }));

  // Create connections between nodes
  nodes.forEach(node => {
    const numConnections = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numConnections; i++) {
      const targetIndex = Math.floor(Math.random() * nodes.length);
      if (targetIndex !== node.id && !node.connections.includes(targetIndex)) {
        node.connections.push(targetIndex);
      }
    }
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary via-primary to-dark flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Nodes */}
          {nodes.map((node) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill={node.id % 3 === 0 ? "#3B82F6" : node.id % 3 === 1 ? "#64748B" : "#1E293B"}
              initial={{ opacity: 0.7 }}
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1],
                cx: [node.x, node.x + (Math.random() * 2 - 1), node.x],
                cy: [node.y, node.y + (Math.random() * 2 - 1), node.y]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Connections */}
          {nodes.map((node) => 
            node.connections.map((targetId, idx) => (
              <motion.line
                key={`connection-${node.id}-${targetId}-${idx}`}
                x1={node.x}
                y1={node.y}
                x2={nodes[targetId].x}
                y2={nodes[targetId].y}
                stroke="#3B82F6"
                strokeWidth="0.1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  strokeOpacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))
          )}
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
            <span className="block">Revolutionize Cannabis Trade</span>
            <span className="block text-secondary">with Blockchain Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-accent/80 mb-6">
            Secure, transparent, and compliant marketplace for cultivators and buyers worldwide.
          </p>
          
          {/* <p className="text-base md:text-lg text-tertiary mb-8 max-w-xl">
            Xpharms Xchange leverages Hedera's blockchain technology to connect Thai cultivators with global buyers, ensuring secure transactions, transparent supply chains, and regulatory compliance. Scale your operations with confidence.
          </p> */}
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="px-6 py-3 bg-secondary text-white rounded-md shadow-lg font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sign Up
            </motion.button>
            <motion.button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Log In
          </motion.button>
           
          </div>
          </motion.div>

        {/* Platform visualization */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Platform Dashboard Image */}
            <motion.div
              className="relative z-10 w-full rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Placeholder dashboard image - replace with actual platform image when available */}
              <div className="relative bg-dark/80 rounded-lg overflow-hidden">
                {/* Dashboard header */}
                <div className="bg-dark p-3 border-b border-tertiary/20 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/Logo.svg" alt="Xpharms Xchange Logo" className="h-6 w-auto mr-2" />
                    <span className="text-accent text-sm font-medium">Xpharms Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-tertiary/50"></div>
                    <div className="w-2 h-2 rounded-full bg-tertiary/50"></div>
                    <div className="w-2 h-2 rounded-full bg-tertiary/50"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Active Trades", value: "24", color: "bg-secondary/20 border-secondary/40" },
                      { label: "Verified Users", value: "128", color: "bg-green-500/20 border-green-500/40" },
                      { label: "Compliance", value: "100%", color: "bg-purple-500/20 border-purple-500/40" }
                    ].map((stat, i) => (
                      <motion.div 
                        key={i}
                        className={`${stat.color} border rounded-md p-2 text-center`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <div className="text-accent text-lg font-bold">{stat.value}</div>
                        <div className="text-tertiary text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Chart area */}
          <motion.div
                    className="h-32 bg-dark/50 rounded-md mb-4 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex justify-between items-center px-2 pt-1">
                      <span className="text-tertiary text-xs">Transaction Volume</span>
                      <div className="flex space-x-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-1"></div>
                          <span className="text-tertiary text-xs">Exports</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          <span className="text-tertiary text-xs">Compliance</span>
                        </div>
                      </div>
                    </div>
                    <svg width="100%" height="85%" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <motion.path
                        d="M0,35 L5,32 L10,33 L15,30 L20,31 L25,28 L30,25 L35,26 L40,23 L45,20 L50,22 L55,19 L60,17 L65,20 L70,15 L75,18 L80,13 L85,15 L90,10 L95,8 L100,5"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <motion.path
                        d="M0,38 L5,36 L10,37 L15,35 L20,36 L25,34 L30,33 L35,35 L40,32 L45,30 L50,32 L55,29 L60,31 L65,28 L70,30 L75,27 L80,29 L85,26 L90,28 L95,25 L100,27"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Platform description */}
                  <motion.div
                    className="bg-secondary/10 rounded-md p-3 mb-4 border border-secondary/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <p className="text-xs text-tertiary leading-tight">
                      <span className="text-secondary font-medium">Blockchain-Verified Trading:</span> Our platform leverages Hedera's distributed ledger to ensure tamper-proof transactions with real-time compliance verification and end-to-end supply chain visibility. Reduce fraud by 30% while meeting global regulatory standards.
                    </p>
                  </motion.div>
                  
                  {/* Recent transactions */}
                  <div className="space-y-2">
                    <div className="text-accent text-xs font-medium mb-1">RECENT TRANSACTIONS</div>
                    {[
                      { id: "TX-4829", status: "Completed", amount: "250kg", time: "2h ago" },
                      { id: "TX-4828", status: "Processing", amount: "120kg", time: "5h ago" },
                      { id: "TX-4827", status: "Verified", amount: "350kg", time: "1d ago" }
                    ].map((tx, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center justify-between text-xs p-2 border border-tertiary/20 rounded-md"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + (i * 0.1) }}
                      >
                        <div className="flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            tx.status === "Completed" ? "bg-green-500" : 
                            tx.status === "Processing" ? "bg-yellow-500" : "bg-secondary"
                          } mr-1.5`}></div>
                          <span className="text-accent">{tx.id}</span>
                        </div>
                        <div className="text-tertiary">{tx.amount}</div>
                        <div className="text-tertiary">{tx.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
          </motion.div>
            
            {/* Blockchain animation behind the dashboard */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10"
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-30">
                <circle cx="100" cy="100" r="80" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.circle
                    key={`orbit-dot-${i}`}
                    cx={100 + 80 * Math.cos(angle * Math.PI / 180)}
                    cy={100 + 80 * Math.sin(angle * Math.PI / 180)}
                    r="4"
                    fill="#3B82F6"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                ))}
              </svg>
            </motion.div>
            
            {/* Logo in the center */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/Logo.svg" alt="Xpharms Xchange Logo" className="h-24 opacity-20" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-accent/70 text-sm mb-2">Scroll to explore</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="rgba(249, 250, 251, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;