// src/components/FeatureSection.jsx

import { motion } from 'framer-motion';
import { CheckCircle, Truck, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Premium Quality",
    description: "Made with high-quality fabric and precision stitching.",
    icon: <CheckCircle size={40} className="text-[#A7F3D0]" />,
  },
  {
    title: "Limited Edition",
    description: "Exclusive designs you won't find anywhere else!",
    icon: <Sparkles size={40} className="text-[#10B981]" />,
  },
  {
    title: "Fast Shipping",
    description: "Get your orders delivered quickly and securely.",
    icon: <Truck size={40} className="text-[#A7F3D0]" />,
  },
  {
    title: "Secure Payments",
    description: "100% safe transactions with trusted gateways.",
    icon: <ShieldCheck size={40} className="text-[#10B981]" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 font-heading">Why Choose Us?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center flex flex-col items-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-2xl font-semibold mt-4 font-heading">{feature.title}</h3>
            <p className="text-[#E0E0E0] mt-2 font-body">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;