import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative py-24 bg-gradient-to-b from-primary to-dark overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-secondary"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium">
              Get Started
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Transform Your <span className="text-secondary">Cannabis Trade</span>
          </h2>
          <p className="text-tertiary text-lg md:text-xl max-w-3xl mx-auto">
            Ready to revolutionize your cannabis business? Connect with our team to learn how Xpharms Xchange can streamline your operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-tertiary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-secondary/20 rounded-lg px-4 py-3 text-accent placeholder-tertiary/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tertiary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-secondary/20 rounded-lg px-4 py-3 text-accent placeholder-tertiary/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-tertiary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-secondary/20 rounded-lg px-4 py-3 text-accent placeholder-tertiary/50 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-tertiary mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formState.role}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-secondary/20 rounded-lg px-4 py-3 text-accent focus:outline-none focus:border-secondary transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark/50 border border-secondary/20 rounded-lg px-4 py-3 text-accent placeholder-tertiary/50 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-6">Why Choose Xpharms Xchange?</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "🔒",
                    title: "Enterprise Security",
                    description: "Bank-grade encryption and Hedera consensus security"
                  },
                  {
                    icon: "⚡",
                    title: "Lightning Fast",
                    description: "Real-time transaction processing and settlement"
                  },
                  {
                    icon: "🌐",
                    title: "Global Network",
                    description: "Access to verified partners worldwide"
                  },
                  {
                    icon: "💎",
                    title: "Premium Support",
                    description: "24/7 dedicated enterprise support team"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-accent font-medium">{feature.title}</h4>
                      <p className="text-tertiary text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Location",
                    info: "Toronto, Ontario, Canada"
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    info: "+1 (555) 123-4567"
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    info: "enterprise@xpharmsxchange.com"
                  }
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <h4 className="text-accent font-medium">{contact.title}</h4>
                      <p className="text-tertiary text-sm">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 