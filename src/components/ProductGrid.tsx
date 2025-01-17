import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'montres', name: 'Montres' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'bagues', name: 'Bagues' }
  ];

  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              id={category.id}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gold text-white'
                  : 'bg-beige-200 text-gray-700 hover:bg-beige-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};