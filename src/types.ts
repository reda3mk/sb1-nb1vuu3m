export interface Product {
  id: string;
  name: string;
  category: 'montres' | 'bracelets' | 'bagues';
  price: number;
  imageUrl: string;
  description: string;
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}