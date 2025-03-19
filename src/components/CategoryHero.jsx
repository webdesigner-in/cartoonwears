import React from 'react';

const CategoryHero = ({ title, description }) => (
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{title}</h1>
    <p className="text-sm md:text-lg text-[#10B981] font-body">{description}</p>
  </div>
);

export default CategoryHero;