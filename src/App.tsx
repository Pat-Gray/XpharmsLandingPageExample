import React, { useState } from 'react';

import Hero from './components/Hero';
import Navigation from './components/Navigation';
import HederaPartnership from './components/HederaPartnership';

import CTASection from './components/CTASection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import FAQSection from './components/FAQSection';
import BackgroundEffects from './components/BackgroundEffects';
import BackgroundEffectsBottom from './components/BackgroundEffectsBottom';
import ProductListing from './components/ProductListing';

const App = () => {
  // You can control the background intensity here

  return (


      <div className="flex flex-col min-h-screen">
        
      

        {/* <Navigation />
        <main className="flex-grow">
          <Hero />
          <BackgroundEffectsBottom>
          <HederaPartnership /> */}
            <ProductListing />
          {/* <Benefits /> */}
    

          {/* <CTASection />
          <FAQSection />
          <ContactUs />
          </BackgroundEffectsBottom>
        </main>
        <Footer /> */}
        
      </div>
  
  );
};

export default App;