// src/components/Testimonials.jsx

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Absolutely love the quality of the hoodies! Perfect fit and super comfortable.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "The retro sneakers are amazing! They look even better in person.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Alex Johnson",
    review: "Great customer service and fast shipping. Highly recommend Cartoon Wears!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Emily Brown",
    review: "The denim jacket is my new favorite! It’s stylish and well-made.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12 lg:px-20 text-white" ref={ref}>
      <h2 className="md:text-4xl font-heading text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-[#1E1E1E] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg "
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-[#10B981]"
              />
              <h3 className="font-heading md:text-xl font-semibold ml-4">{testimonial.name}</h3>
            </div>
            <p className="text-[#E0E0E0] font-body">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;