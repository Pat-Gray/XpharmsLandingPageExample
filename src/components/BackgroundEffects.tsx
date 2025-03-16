import React from 'react';
import Logo from '../../public/Artboard 1 copy.svg'
// Replace with your actual logo URL or import
const LOGO_URL = Logo;

const BackgroundEffects = () => {
  return (
    <>
      {/* Background container with bottom fade */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
        {/* Gradient effects with richer colors */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E0]/40 via-[#4DB6AC]/20 to-transparent rounded-full blur-3xl animate-pulse-gradient" />
        </div>

        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-l from-[#6D28D9]/40 via-[#FFB300]/15 to-transparent rounded-full blur-3xl animate-pulse-gradient delay-1000" />
        </div>

        {/* Central circle with gradient and static logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1D37]/30 to-[#4DB6AC]/20 rounded-full blur-3xl animate-pulse-gradient delay-2000" />
          {/* Static logo overlay */}
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${LOGO_URL})`,
              opacity: 0.1,
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
            }}
          />
        </div>

        {/* Hexagonal grid with blockchain animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hex-grid" width="40" height="69.28" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 11.55 L40 46.19 L20 57.74 L0 46.19 L0 11.55 Z" fill="none" stroke="#00A3E0" strokeWidth="1" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" begin="0s" />
                </path>
                <path d="M20 0 L40 11.55 M20 57.74 L40 46.19 M0 11.55 L20 23.1 M0 46.19 L20 34.64" fill="none" stroke="#4DB6AC" strokeWidth="1" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" mask="url(#radial-mask)" />
            <defs>
              <mask id="radial-mask">
                <rect width="100%" height="100%" fill="white" opacity="1">
                  <animate attributeName="opacity" values="0.6;0.8;0.6" dur="10s" repeatCount="indefinite" />
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
      </div>

      <style jsx>{`
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

        /* Ensure the SVG scales correctly */
        svg {
          width: 100%;
          height: 100%;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .w-[40%] { width: 30% !important; }
          .w-[30%] { width: 20% !important; }
          .animate-pulse-gradient { animation-duration: 6s; }
        }
      `}</style>
    </>
  );
};

export default BackgroundEffects;