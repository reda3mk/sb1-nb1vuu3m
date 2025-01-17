import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return (price * 10.5).toFixed(2); // Converting to DH (approximate rate)
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-xl overflow-hidden group"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.isNewArrival && (
          <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
            Nouveau
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)} DH</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold hover:bg-gold/90"
          >
            <ShoppingCart className="w-5 h-5" />
            Ajouter
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};