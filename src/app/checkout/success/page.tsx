'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/16/solid';

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto p-4 text-center">
      <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="mb-8">Thank you for your purchase</p>
      <Link
        href="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
}