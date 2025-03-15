import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'For Cultivators', href: '#' },
        { label: 'For Buyers', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Enterprise', href: '#' }
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

  return (
    <footer className="bg-gray-900 py-16 relative" role="contentinfo">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] aspect-square opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] aspect-square opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-500 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/LogoWhite.svg" 
                alt="Xpharms Xchange Logo" 
                className="h-60 w-auto brightness-200"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The blockchain-powered platform revolutionizing medicinal cannabis trade with secure, transparent, and compliant solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`Visit our ${social.label} page`}
                  className="text-gray-400 hover:text-secondary transition-colors p-2 hover:bg-secondary/10 rounded-full"
                >
                  <svg 
                    width="20" 
                    height="20" 
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
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-secondary mr-3"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
              <a 
                href="tel:+1-555-123-4567" 
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-secondary mr-3"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a 
                href="mailto:enterprise@xpharmsxchange.com" 
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                enterprise@xpharmsxchange.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Xpharms Xchange. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 