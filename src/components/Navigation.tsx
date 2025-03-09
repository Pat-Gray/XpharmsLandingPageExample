import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md h-16 shadow-lg' : 'bg-primary h-20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        
        
          <img src="/Logo.svg" alt="Xpharms Xchange Logo" className="h-80 " />
         
        

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group">
              {item.type === 'link' ? (
                <a
                  href={item.href}
                  className="text-accent hover:text-secondary focus:outline-none"
                >
                  {item.label}
                </a>
              ) : (
                <>
                  <button
                    className="text-accent hover:text-secondary flex items-center space-x-1 focus:outline-none"
                    onClick={() => toggleDropdown(item.id)}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.id && item.items && (
                      <motion.div
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-dark ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(item.id)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {item.items.map((subItem, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2 text-sm text-accent hover:bg-secondary hover:text-white transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
        <motion.button
            className="px-4 py-2 bg-secondary text-white rounded-md shadow-md hover:bg-secondary/90 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Request a Demo
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Log In
          </motion.button>
         
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-accent hover:text-secondary focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-primary/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    className="w-full text-left px-3 py-2 text-accent hover:bg-dark rounded-md flex justify-between items-center"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        className="pl-6 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.items.map((subItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-3 py-2 text-sm text-accent hover:bg-dark rounded-md"
                          >
                            {subItem}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                
                <button className="px-3 py-2 text-accent hover:bg-dark rounded-md text-center">
                  Log In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;