// src/components/Newsletter.jsx

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true }); // Trigger animations only once

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12 lg:px-20 text-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          Stay in the Loop!
        </motion.h2>
        <motion.p
          className="text-md text-[#E0E0E0] mb-8 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Subscribe to our newsletter for exclusive updates, discounts, and early access to new collections.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg border border-[#10B981] border-opacity-20 rounded-lg px-6 py-3 text-white placeholder-[#E0E0E0] focus:outline-none focus:border-[#10B981] focus:border-opacity-50 flex-1"
          />
          <button
            className="bg-[#10B981] text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#047857] transition"
          >
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;