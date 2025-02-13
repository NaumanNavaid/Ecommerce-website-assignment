'use client';

import { useCartStore } from '@/lib/store';
import { Product } from '@/lib/api';
import toast from 'react-hot-toast';

export const AddToCart = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success('Added to cart!');
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};