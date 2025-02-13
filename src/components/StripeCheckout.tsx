'use client';

import { useCartStore } from '@/lib/store';
import {loadStripe} from '@stripe/stripe-js';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const StripeCheckout = () => {
  const { cart } = useCartStore();

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      
      const response = await fetch('/api/checkout-sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: cart.map(item => ({
            title: item.title,
            price: item.price,
            image: item.image,
            quantity: item.quantity
          }))
        }),
      });

      const session = await response.json();
      
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id
      });

      if (result?.error) {
        toast.error(result.error.message || 'Checkout failed');
      }
    } catch (error) {
      toast.error('Error initiating checkout');
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
    >
      Proceed to Stripe Checkout
    </button>
  );
};