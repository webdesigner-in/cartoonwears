import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to backend)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-20">

    <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-heading md:text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-md font-body md:text-lg text-center mb-8">
          Have a question or feedback? We'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 font-body">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.name ? 'border border-red-500' : ''
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.email ? 'border border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.message ? 'border border-red-500' : ''
              }`}
              rows="5"
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#10B981] text-black py-3 rounded-lg hover:bg-[#047857] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    
  </section>
  );
};

export default Contact;