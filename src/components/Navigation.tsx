import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 'solutions',
      label: 'Solutions',
      items: ['Cultivator Solutions', 'Buyer Solutions']
    },
    {
      id: 'services',
      label: 'Additional Services',
      type: 'link',
      href: '/services'
    },
    {
      id: 'resources',
      label: 'Resources',
      items: ['Compliance Guides', 'Educational & Industry Insights', 'FAQ\'s']
    },
    {
      id: 'company',
      label: 'Company',
      items: ['About Us', 'Contact Us']
    }
  ];

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors ${
        isScrolled ? 'bg-white shadow-md' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" aria-label="Home">
            <img src="/Logo.svg" alt="Xpharms Xchange Logo" className="h-60" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              {item.type === 'link' ? (
                <a
                  href={item.href}
                  className="text-text-secondary hover:text-secondary font-medium"
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ) : (
                <div>
                  <button
                    className="text-text-secondary hover:text-secondary font-medium flex items-center space-x-1"
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={activeDropdown === item.id}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                  
                  {activeDropdown === item.id && item.items && (
                    <div 
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`${item.id}-menu`}
                    >
                      <div className="py-1">
                        {item.items.map((subItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-4 py-2 text-sm text-text-secondary hover:bg-accent hover:text-secondary"
                            role="menuitem"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="px-4 py-2 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90"
            aria-label="Request a Demo"
          >
            Request a Demo
          </button>
          <button 
            className="px-4 py-2 bg-white text-secondary border border-secondary font-medium rounded-md hover:bg-accent"
            aria-label="Log In to Your Account"
          >
            Log In
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-secondary hover:text-secondary"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-white border-t border-gray-200"
          role="menu"
          aria-orientation="vertical"
          aria-label="Mobile menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  className="w-full text-left px-3 py-2 text-text-secondary hover:bg-accent rounded-md flex justify-between items-center"
                  onClick={() => toggleDropdown(item.id)}
                  aria-expanded={activeDropdown === item.id}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                
                {activeDropdown === item.id && item.items && (
                  <div 
                    className="pl-6 space-y-1"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.items.map((subItem, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-3 py-2 text-sm text-text-secondary hover:bg-accent rounded-md"
                        role="menuitem"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <button 
                className="px-3 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 font-medium"
                aria-label="Request a Demo"
              >
                Request a Demo
              </button>
              <button 
                className="px-3 py-2 bg-white text-secondary border border-secondary rounded-md hover:bg-accent font-medium"
                aria-label="Log In to Your Account"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;