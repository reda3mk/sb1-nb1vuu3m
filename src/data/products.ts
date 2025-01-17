export const products = [
  {
    id: '1',
    name: 'Montre Élégance',
    category: 'montres',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
    description: 'Une montre sophistiquée en acier inoxydable avec un design intemporel.',
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Bracelet Harmonie',
    category: 'bracelets',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80',
    description: 'Bracelet élégant en acier inoxydable avec finition polie.',
    inStock: true,
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Bague Éternité',
    category: 'bagues',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
    description: 'Bague sophistiquée avec un design moderne et intemporel.',
    inStock: true,
    isNewArrival: true
  }
] as const;