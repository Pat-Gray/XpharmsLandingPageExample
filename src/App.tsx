import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HederaPartnership from './components/HederaPartnership';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [motionDisabled, setMotionDisabled] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Accessibility toggle */}
      {/* <button
        onClick={() => setMotionDisabled(!motionDisabled)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-brand-teal text-white rounded-md text-sm font-medium hover:bg-brand-teal/90 transition-colors"
        aria-label="Toggle motion effects"
      >
        {motionDisabled ? 'Enable Motion' : 'Disable Motion'}
      </button> */}

      <Navigation />
      <main className={motionDisabled ? 'motion-safe:animate-none' : ''}>
        <Hero />
        <HederaPartnership />
        {/* <Partners /> */}
        <BenefitsSection />
        <CTASection />
        <FAQSection />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;