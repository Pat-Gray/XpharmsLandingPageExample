import React, { useEffect, useRef } from 'react';

const CTASection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll-based grid opacity for background
  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        const maxOpacity = 0.2;
        const minOpacity = 0.05;
        const scrollRange = sectionBottom - sectionTop;
        const scrollProgress = Math.min(
          Math.max((scrollPosition - sectionTop) / scrollRange, 0),
          1
        );
        const opacity = maxOpacity - (maxOpacity - minOpacity) * scrollProgress;

        gridRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial opacity
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background with hero-inspired effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_top,black_70%,transparent_100%)]">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-[15%] w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#00A3E0]/40 via-[#4DB6AC]/20 to-transparent rounded-full blur-2xl animate-pulse-gradient transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#00A3E0]/20 to-transparent rounded-full blur-xl animate-pulse-gradient delay-500" />
        </div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[45%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/45 via-[#0A1D37]/25 to-transparent rounded-full blur-2xl animate-pulse-gradient delay-1000 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/20 to-transparent rounded-full blur-xl animate-pulse-gradient delay-1500" />
        </div>

        {/* Background Hexagonal Grid with scroll-based opacity */}
        <div ref={gridRef} className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hex-grid-bg" width="40" height="69.28" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 11.55 L40 46.19 L20 57.74 L0 46.19 L0 11.55 Z" fill="none" stroke="#00A3E0" strokeWidth="1" opacity="0.5">
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" begin="0s" />
                </path>
                <path d="M20 0 L40 11.55 M20 57.74 L40 46.19 M0 11.55 L20 23.1 M0 46.19 L20 34.64" fill="none" stroke="#4DB6AC" strokeWidth="1" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid-bg)" />
          </svg>
        </div>


        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://example.com/noise-texture.png')] opacity-5 bg-repeat bg-[size:200px]" />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/60 to-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm relative">
            {/* Subtle Hex Pattern Inside Component */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="hex-grid-inner" width="20" height="34.64" patternUnits="userSpaceOnUse">
                    <path d="M10 0 L20 5.77 L20 23.09 L10 28.85 L0 23.09 L0 5.77 Z" fill="none" stroke="#00A3E0" strokeWidth="0.5" opacity="0.05">
                      <animate attributeName="opacity" values="0.05;0.1;0.05" dur="6s" repeatCount="indefinite" begin="0s" />
                    </path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hex-grid-inner)" />
              </svg>
            </div>

            <div className="p-8 md:p-12 relative">
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
              <div className="flex justify-center">
                <button
                  className="w-full max-w-xs px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 bg-secondary text-white hover:bg-secondary/90 text-lg font-medium"
                  aria-label="Get Started"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

<style jsx global>{`
  /* Gradient Pulse Animation (from hero section) */
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

  /* Energy Pulse Animation */
  @keyframes energy-pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(2); opacity: 0; }
    100% { transform: scale(1); opacity: 0.5; }
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
    .md:grid-cols-3 { grid-template-columns: 1fr; }
    .max-w-xs { max-width: 100%; }
    .text-3xl { font-size: 2xl; }
    .text-4xl { font-size: 2.5rem; }
    .w-[40%] { width: 30% !important; }
    .w-[45%] { width: 35% !important; }
  }
`}</style>