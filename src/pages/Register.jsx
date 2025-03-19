import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarsBackground from '../components/Hero/StarBackground';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle registration logic here
      console.log('Registration successful');
    }
  };

  return (
    <section className="relative bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center overflow-hidden font-heading">
    <StarsBackground />

    <motion.div
        className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#10B981] border-opacity-20 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.name ? 'border border-red-500' : ''
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.email ? 'border border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded-lg bg-[#2D2D2D] text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                errors.password ? 'border border-red-500' : ''
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#10B981] text-black py-3 rounded-lg hover:bg-[#047857] transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#10B981] hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    
  </section>
  );
};

export default Register;