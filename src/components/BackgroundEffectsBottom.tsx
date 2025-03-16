import React, { ReactNode, useEffect, useRef } from 'react';

interface BackgroundEffectsBottomProps {
  children: ReactNode;
}

const BackgroundEffectsBottom = ({ children }: BackgroundEffectsBottomProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const energyWaveRef = useRef<HTMLDivElement>(null);

  // Scroll-based grid opacity
  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY + window.innerHeight;
        const gridTop = rect.top + window.scrollY;
        const gridBottom = gridTop + rect.height;

        const maxOpacity = 0.3;
        const minOpacity = 0.05;
        const scrollRange = gridBottom - gridTop;
        const scrollProgress = Math.min(
          Math.max((scrollPosition - gridTop) / scrollRange, 0),
          1
        );
        const opacity = maxOpacity - (maxOpacity - minOpacity) * scrollProgress;

        gridRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse-follow effect for energy waves
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (energyWaveRef.current) {
        const rect = energyWaveRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const maxDistance = Math.sqrt(
          Math.pow(centerX, 2) + Math.pow(centerY, 2)
        );
        const intensity = 1 - Math.min(distance / maxDistance, 1);

        energyWaveRef.current.style.opacity = (0.1 + intensity * 0.2).toString();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]">
        {/* Layered gradient effects for depth */}
        <div className="absolute top-1/4 right-[15%] w-[45%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#6D28D9]/40 via-[#4DB6AC]/20 to-transparent rounded-full blur-3xl animate-pulse-gradient transition-all duration-300 hover:from-[#6D28D9]/50 hover:via-[#4DB6AC]/30 hover:scale-105 hover:filter-hue-rotate" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#6D28D9]/20 to-transparent rounded-full blur-xl animate-pulse-gradient delay-500" />
        </div>

        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/45 via-[#0A1D37]/25 to-transparent rounded-full blur-3xl animate-pulse-gradient delay-1000 transition-all duration-300 hover:from-[#00A3E0]/55 hover:via-[#0A1D37]/35 hover:scale-105 hover:filter-hue-rotate" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/20 to-transparent rounded-full blur-xl animate-pulse-gradient delay-1500" />
        </div>

        <div className="absolute top-0 right-[20%] w-[30%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4DB6AC]/20 via-[#FFB300]/15 to-transparent rounded-full blur-3xl animate-pulse-gradient delay-2000 transition-all duration-300 hover:from-[#4DB6AC]/30 hover:via-[#FFB300]/25 hover:scale-105 hover:filter-hue-rotate" />
        </div>

        <div className="absolute top-1/2 left-[10%] w-[25%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D37]/30 to-transparent rounded-full blur-3xl animate-pulse-gradient delay-1500 transition-all duration-300 hover:from-[#0A1D37]/40 hover:scale-105 hover:filter-hue-rotate" />
        </div>

        <div className="absolute top-1/3 left-1/3 w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/15 via-[#00A3E0]/10 to-transparent rounded-full blur-3xl animate-pulse-gradient delay-2500 transition-all duration-300 hover:from-[#6D28D9]/25 hover:via-[#00A3E0]/20 hover:scale-105 hover:filter-hue-rotate" />
        </div>

        {/* Expanded node network with enhanced animations */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <g>
              {/* Node 1 */}
              <circle cx="20%" cy="30%" r="5" fill="#00FFD1" opacity="0.3">
                <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
                <animate attributeName="cy" values="30%;32%;30%" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Node 2 */}
              <circle cx="70%" cy="40%" r="6" fill="#00A3E0" opacity="0.3">
                <animate attributeName="r" values="6;8;6" dur="4s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="cy" values="40%;42%;40%" dur="6s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" begin="1s" />
              </circle>
              {/* Node 3 */}
              <circle cx="40%" cy="60%" r="4" fill="#FFB300" opacity="0.3">
                <animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="cx" values="40%;42%;40%" dur="5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              {/* Node 4 */}
              <circle cx="60%" cy="20%" r="5" fill="#4DB6AC" opacity="0.3">
                <animate attributeName="r" values="5;7;5" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="cy" values="20%;22%;20%" dur="4.5s" repeatCount="indefinite" begin="1.2s" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              {/* Node 5 */}
              <circle cx="30%" cy="80%" r="6" fill="#6D28D9" opacity="0.3">
                <animate attributeName="r" values="6;8;6" dur="4.5s" repeatCount="indefinite" begin="0.8s" />
                <animate attributeName="cx" values="30%;32%;30%" dur="6s" repeatCount="indefinite" begin="0.8s" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4.5s" repeatCount="indefinite" begin="0.8s" />
              </circle>
              {/* Node 6 */}
              <circle cx="80%" cy="70%" r="4" fill="#0A1D37" opacity="0.3">
                <animate attributeName="r" values="4;6;4" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="cy" values="70%;72%;70%" dur="5.5s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              {/* Connecting lines */}
              <path d="M20 30 Q45 35 70 40" fill="none" stroke="#00FFD1" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.5s" repeatCount="indefinite" />
              </path>
              <path d="M20 30 Q30 45 40 60" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.8s" repeatCount="indefinite" />
              </path>
              <path d="M70 40 Q55 50 40 60" fill="none" stroke="#FFB300" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M60 20 Q50 30 40 60" fill="none" stroke="#4DB6AC" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.7s" repeatCount="indefinite" />
              </path>
              <path d="M30 80 Q35 70 40 60" fill="none" stroke="#6D28D9" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.6s" repeatCount="indefinite" />
              </path>
              <path d="M80 70 Q60 65 40 60" fill="none" stroke="#0A1D37" strokeWidth="1" strokeDasharray="4,4" opacity="0.2">
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.9s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>

        {/* Transaction streams with particle effect */}
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[2px] animate-stream-flow">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1]/30 to-[#00A3E0]/15 rounded-full animate-stream-pulse">
            <div className="absolute inset-0 animate-burst" />
            <div className="absolute inset-0 particle-trail" />
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[-10%] w-[120%] h-[2px] animate-stream-flow delay-2000">
          <div className="absolute inset-0 bg-gradient-to-l from-[#00A3E0]/30 to-[#FFB300]/15 rounded-full animate-stream-pulse delay-1000">
            <div className="absolute inset-0 animate-burst delay-1500" />
            <div className="absolute inset-0 particle-trail delay-1500" />
          </div>
        </div>

        {/* Pulsing energy waves with mouse-follow effect */}
        <div ref={energyWaveRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square">
          <div className="absolute inset-0 bg-[#00FFD1]/10 rounded-full animate-energy-pulse" />
          <div className="absolute inset-0 bg-[#00A3E0]/10 rounded-full animate-energy-pulse delay-2000" />
        </div>

        {/* Hexagonal grid with scroll-based opacity */}
        <div ref={gridRef} className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hex-grid" width="40" height="69.28" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 11.55 L40 46.19 L20 57.74 L0 46.19 L0 11.55 Z" fill="none" stroke="#00A3E0" strokeWidth="1" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" begin="0s" />
                </path>
                <path d="M20 0 L40 11.55 M20 57.74 L40 46.19 M0 11.55 L20 23.1 M0 46.19 L20 34.64" fill="none" stroke="#4DB6AC" strokeWidth="1" opacity="0.2">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" mask="url(#radial-mask)" />
            <defs>
              <mask id="radial-mask">
                <rect width="100%" height="100%" fill="white" opacity="1">
                  <animate attributeName="opacity" values="0.5;0.7;0.5" dur="10s" repeatCount="indefinite" />
                </rect>
                <rect width="100%" height="100%" fill="url(#radial-gradient)" />
              </mask>
              <radialGradient id="radial-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('https://example.com/noise-texture.png')] opacity-5 bg-repeat bg-[size:200px]" />

        {/* Gradient overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/50 to-white/5" />
      </div>

      {/* Render children components */}
      {children}
    </div>
  );
};

export default BackgroundEffectsBottom;

<style jsx global>{`
  /* Gradient Pulse Animation with Hue Shift */
  @keyframes pulse-gradient {
    0% {
      transform: scale(1);
      opacity: 0.8;
      filter: hue-rotate(0deg);
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
      filter: hue-rotate(20deg);
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
      filter: hue-rotate(0deg);
    }
  }
  .animate-pulse-gradient {
    animation: pulse-gradient 8s ease-in-out infinite;
    will-change: transform, opacity, filter;
  }

  /* Hover Hue Shift */
  .hover\:filter-hue-rotate:hover {
    filter: hue-rotate(30deg);
  }

  /* Stream Flow Animation */
  @keyframes stream-flow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-stream-flow {
    animation: stream-flow 15s linear infinite;
  }

  /* Stream Pulse Animation */
  @keyframes stream-pulse {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(1.15); }
    100% { transform: scaleX(1); }
  }
  .animate-stream-pulse {
    animation: stream-pulse 2s ease-in-out infinite;
  }

  /* Burst Animation for Streams */
  @keyframes burst {
    0% { box-shadow: 0 0 0 0 #00FFD1/0; }
    50% { box-shadow: 0 0 15px 3px #00FFD1/0.3; }
    100% { box-shadow: 0 0 0 0 #00FFD1/0; }
  }
  .animate-burst {
    animation: burst 5s ease-in-out infinite;
  }

  /* Particle Trail for Streams */
  .particle-trail {
    background: linear-gradient(to right, transparent, #00FFD1/0.2, transparent);
    animation: particle-trail 15s linear infinite;
  }
  @keyframes particle-trail {
    0% { background-position: -100% 0; }
    100% { background-position: 100% 0; }
  }

  /* Energy Pulse Animation */
  @keyframes energy-pulse {
    0% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(2); opacity: 0; }
    100% { transform: scale(1); opacity: 0.1; }
  }
  .animate-energy-pulse {
    animation: energy-pulse 6s ease-in-out infinite;
  }

  /* Ensure the SVG scales correctly */
  svg {
    width: 100%;
    height: 100%;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .w-[50%] { width: 40% !important; }
    .w-[45%] { width: 35% !important; }
    .w-[40%] { width: 30% !important; }
    .w-[30%] { width: 20% !important; }
    .w-[25%] { width: 15% !important; }
    .animate-pulse-gradient { animation-duration: 6s; }
    .animate-stream-flow { animation-duration: 10s; }
    .animate-energy-pulse { animation-duration: 4s; }
  }
`}</style>