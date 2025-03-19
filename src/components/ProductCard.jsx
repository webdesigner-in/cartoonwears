import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => (
  <motion.div
    className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-[#10B981] border-opacity-20 hover:border-opacity-50 transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-lg font-body font-semibold mb-2">{product.name}</h3>
    <p className="text-lg font-body font-bold mb-4">{product.price}</p>
    <Link
      to={`/product/${product.id}`}
      className="bg-[#10B981] text-black px-4 py-2 rounded-lg hover:bg-[#047857] transition text-center block  font-body"
    >
      View Details
    </Link>
  </motion.div>
);

export default ProductCard;