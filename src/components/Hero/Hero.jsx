// src/components/hero/HeroSection.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarsBackground from "./StarBackground";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden font-heading">
      <StarsBackground /> {/* Animated Stars in BG */}

      {/* Left Content with Text and CTA */}
      <div
        className="max-w-2xl text-center md:text-left"
       
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tighter ">
          Elevate Your <span className="text-[#3AF36F]">Style</span> with  
          <span className="text-[#A7F3D0]"> Cartoon Wears</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover trendy and comfortable clothing inspired by your favorite characters. 
          Shop now and stand out!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/products"
            className="bg-[#10B981] text-black px-6 py-3 rounded-lg text-md font-semibold  hover:bg-[#047857] transition"
          >
            Shop Now
          </Link>
          <Link
            to="/catalog"
            className="bg-transparent border-2 border-[#10B981] text-[#10B981] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#10B981] hover:text-black transition"
          >
            View Catalog
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
