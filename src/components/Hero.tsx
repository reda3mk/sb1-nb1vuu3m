import { motion } from 'framer-motion';
import { Watch } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-beige-50 to-beige-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584285418504-045785c9c9bd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Watch className="w-24 h-24 text-gold animate-spin-slow" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          DAMY-W
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl"
        >
          Bijoux et montres en acier inoxydable de haute qualité
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir la Collection
        </motion.button>
      </div>
    </div>
  );
};