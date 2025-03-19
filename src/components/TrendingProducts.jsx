// src/components/TrendingProducts.jsx

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Anime Hoodie",
    price: "499",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Streetwear T-Shirt",
    price: "299",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Retro Cartoon Sneakers",
    price: "799",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Stylish Denim Jacket",
    price: "899",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const TrendingProducts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12 lg:px-20 text-white" ref={ref}>
      <h2 className="text-4xl font-bold text-center mb-12 font-heading">Trending Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-body">{product.name}</h3>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "text-[#FFD700]" : "text-gray-500"}
                  fill={i < Math.floor(product.rating) ? "#FFD700" : "transparent"}
                />
              ))}
              <span className="ml-2 text-sm text-gray-400 font-body">({product.rating})</span>
            </div>
            <p className="text-lg font-bold mb-4 font-body">{`₹${product.price}`}</p>
            <div className="flex gap-4 font-body">
              <button
                className="bg-transparent border border-[#10B981] text-[#10B981] px-4 py-2 rounded-lg hover:bg-[#10B981] hover:text-black transition whitespace-nowrap flex items-center justify-center space-x-2 flex-1"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </button>
              <button className="bg-transparent border border-[#10B981] text-[#10B981] px-4 py-2 rounded-lg hover:bg-[#10B981] hover:text-black transition whitespace-nowrap flex-1 text-center">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;