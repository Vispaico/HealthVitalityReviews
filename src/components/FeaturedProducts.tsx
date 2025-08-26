import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Top Health Supplement Picks for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            After testing dozens of supplements, these five stood out for their quality, 
            effectiveness, and value. Here are my honest, detailed reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to know how i lost 10 Kg in 5 weeks without hating my life?
          </p>
          <Link to="/how-i-lost-10kg-in-5-weeks">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get My 'The Simple Way How i Lost 10 Kg in 5 Weeks' Guide
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;