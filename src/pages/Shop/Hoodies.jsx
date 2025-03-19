import React from 'react';
import CategoryHero from '../../components/CategoryHero.jsx';
import ProductCard from '../../components/ProductCard.jsx';

const Hoodies = () => {
  const products = [
    {
        id: 1,
        name: "Classic Anime T-Shirt",
        price: "$29.99",
        image: "https://m.media-amazon.com/images/I/61J80jFIkHL._AC_UL320_.jpg",
      },
      {
        id: 2,
        name: "Streetwear Graphic T-Shirt",
        price: "$34.99",
        image: "https://m.media-amazon.com/images/I/71j-FPdVmiL._AC_UL320_.jpg",
      },
      {
        id: 3,
        name: "Retro Cartoon T-Shirt",
        price: "$39.99",
        image: "https://m.media-amazon.com/images/I/61dlsBnCXtL._AC_UL320_.jpg",
      },
  ];

  return (
    <section className="bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-20">
      <CategoryHero
        title="Hoodies"
        description="Explore our exclusive collection of cartoon-themed Hoodies."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Hoodies;