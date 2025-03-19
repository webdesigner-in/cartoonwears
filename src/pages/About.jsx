import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../components/Hero/StarBackground.jsx'

const About = () => {
  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16 font-heading">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Cartoon Wears
        </motion.h1>
        
        <motion.p
          className="text-lg text-[#10B981]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Where Fashion Meets Animation
        </motion.p>
      </div>

      {/* Brand Story Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="./about.svg" // Replace with your illustration
            alt="Cartoon Wears Illustration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">Our Story</h2>
          <p className="text-gray-300 mb-4 font-body">
            At <strong>Cartoon Wears</strong>, we believe that fashion should be as fun and expressive as your favorite cartoons. Founded in [Year], we started with a simple idea: to bring the magic of animation into everyday clothing.
          </p>
          <p className="text-gray-300 font-body">
            What began as a passion project among a group of cartoon enthusiasts has grown into a brand loved by fans worldwide. From iconic characters to hidden gems, our designs celebrate the art of animation in every stitch.
          </p>
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 font-body">
        <motion.div
          className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#10B981] border-opacity-20 hover:border-opacity-50 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To inspire creativity and joy through unique, high-quality cartoon-themed apparel that lets you express your love for animation.
          </p>
        </motion.div>
        <motion.div
          className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#10B981] border-opacity-20 hover:border-opacity-50 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300">
            To become the global leader in cartoon-inspired fashion, creating a community where fans can celebrate their favorite characters through style.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center font-body"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Join the Cartoon Wears Family</h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore our collection and find the perfect piece to express your love for cartoons.
        </p>
        <a
          href="/products"
          className="bg-[#10B981] text-black px-6 py-3 rounded-lg hover:bg-[#047857] transition font-semibold"
        >
          Shop Now
        </a>
      </motion.div>
      <StarBackground/>
    </section>
  );
};

export default About;