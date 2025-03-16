import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const gridRef = useRef<HTMLDivElement>(null);

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'For Cultivators', href: '#' },
        { label: 'For Buyers', href: '#' },
        
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' }
  ];

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
    <footer className="bg-gray-900 py-16 relative" role="contentinfo">
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
                <path d="M20 0 L40 11.55 L40 46.19 L20 57.74 L0 46.19 L0 11.55 Z" fill="none" stroke="#00A3E0" strokeWidth="1" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" begin="0s" />
                </path>
                <path d="M20 0 L40 11.55 M20 57.74 L40 46.19 M0 11.55 L20 23.1 M0 46.19 L20 34.64" fill="none" stroke="#4DB6AC" strokeWidth="1" opacity="0.2">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid-bg)" />
          </svg>
        </div>

        {/* Transaction Streams */}
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[2px] animate-stream-flow">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1]/30 to-[#00A3E0]/15 rounded-full animate-stream-pulse" />
        </div>
        <div className="absolute bottom-[25%] right-[-10%] w-[120%] h-[2px] animate-stream-flow delay-2000">
          <div className="absolute inset-0 bg-gradient-to-l from-[#00A3E0]/30 to-[#FFB300]/15 rounded-full animate-stream-pulse delay-1000" />
        </div>

        {/* Energy Waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square">
          <div className="absolute inset-0 bg-[#00FFD1]/10 rounded-full animate-energy-pulse" />
          <div className="absolute inset-0 bg-[#00A3E0]/10 rounded-full animate-energy-pulse delay-2000" />
        </div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://example.com/noise-texture.png')] opacity-5 bg-repeat bg-[size:200px]" />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle Hex Pattern Inside Footer */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hex-grid-footer" width="20" height="34.64" patternUnits="userSpaceOnUse">
                <path d="M10 0 L20 5.77 L20 23.09 L10 28.85 L0 23.09 L0 5.77 Z" fill="none" stroke="#00A3E0" strokeWidth="0.5" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.25;0.15" dur="6s" repeatCount="indefinite" begin="0s" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid-footer)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/LogoWhite.svg" 
                alt="Xpharms Xchange Logo" 
                className="h-50 w-auto object-contain brightness-200"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              The blockchain-powered platform revolutionizing medicinal cannabis trade with secure, transparent, and compliant solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`Visit our ${social.label} page`}
                  className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-secondary/10 rounded-full"
                >
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={social.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-secondary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center">
              <svg 
                className="w-5 h-5 text-secondary mr-3 shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
              <a 
                href="tel:+1-555-123-4567" 
                className="text-gray-300 hover:text-secondary transition-colors text-sm"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center">
              <svg 
                className="w-5 h-5 text-secondary mr-3 shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a 
                href="mailto:enterprise@xpharmsxchange.com" 
                className="text-gray-300 hover:text-secondary transition-colors text-sm"
              >
                enterprise@xpharmsxchange.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Xpharms Xchange. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<style jsx global>{`
  /* Gradient Pulse Animation */
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
  @media (max-width: 1024px) {
    .lg:grid-cols-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .lg:col-span-1 { grid-column: span 1; }
    .h-12 { height: 2.5rem; }
  }

  @media (max-width: 640px) {
    .sm:grid-cols-2 { grid-template-columns: 1fr; }
    .sm:flex-row { flex-direction: column; }
    .sm:mb-0 { margin-bottom: 1rem; }
    .text-lg { font-size: 1rem; }
    .text-sm { font-size: 0.875rem; }
    .w-[40%] { width: 30% !important; }
    .w-[45%] { width: 35% !important; }
  }
`}</style>