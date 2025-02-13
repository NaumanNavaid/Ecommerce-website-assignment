'use client';

import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCartStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Your cart is empty</p>
          <Link href="/products" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1 mx-4">
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-20 p-2 border rounded"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-bold mt-8">Total: ${total()}</div>
          <div className="mt-8 space-y-4">
            <Link
              href="/checkout"
              className="bg-blue-500 text-white p-4 rounded block text-center hover:bg-blue-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}