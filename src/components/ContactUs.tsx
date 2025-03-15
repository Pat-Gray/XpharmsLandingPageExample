import React, { useState } from 'react';
import BackgroundEffects from './BackgroundEffects';
const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Reset form
    setFormState({
      name: '',
      email: '',
      company: '',
      role: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      className="py-24 relative" 
      id="contact"
      aria-labelledby="contact-heading"
    >
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary text-sm font-medium px-4 py-2 bg-secondary/5 rounded-full mb-4">
            Get Started
          </span>
          <h2 
            id="contact-heading"
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Transform Your Cannabis Trade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your cannabis business? Connect with our team to learn how Xpharms Xchange can streamline your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formState.role}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Cultivator">Cultivator</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Laboratory">Laboratory</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Get Started'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Contact Box */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <a
                href="mailto:enterprise@xpharmsxchange.com"
                className="flex items-center text-gray-600 hover:text-secondary transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-secondary mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                enterprise@xpharmsxchange.com
              </a>
              <p className="mt-2 text-sm text-gray-500">
                We typically respond within 24 hours
              </p>
            </div>

            {/* Phone Contact Box */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <a
                href="tel:+1-555-123-4567"
                className="flex items-center text-gray-600 hover:text-secondary transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-secondary mr-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Available Monday-Friday, 9AM-6PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 