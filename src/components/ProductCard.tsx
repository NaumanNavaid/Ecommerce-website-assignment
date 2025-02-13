'use client';

import { Product } from '@/lib/api';
import { AddToCart } from './AddToCart';
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title} 
        className="h-48 object-contain w-full mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">${product.price}</p>
        <AddToCart product={product} />
      </div>
    </div>
  );
};