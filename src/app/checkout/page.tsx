'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store';
import { useAuthStore } from '@/lib/store';
import { StripeCheckout } from '@/components/StripeCheckout';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cod'>('stripe');
  const { total, clearCart } = useCartStore();
  const { isLoggedIn } = useAuthStore();

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  const handleCODPayment = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      clearCart();
      toast.success('COD order placed successfully!');
      router.push('/');
    } catch (error) {
      toast.error('Error placing COD order');
    }
  };

  if (!isLoggedIn) {
    return null; // or loading spinner
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as 'stripe' | 'cod')}
              className="w-full p-2 border rounded"
            >
              <option value="stripe">Credit/Debit Card (Stripe)</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          {paymentMethod === 'stripe' ? (
            <StripeCheckout />
          ) : (
            <div className="space-y-4">
              <p className="text-lg">
                You will pay ${total()} when your order is delivered
              </p>
              <button
                onClick={handleCODPayment}
                className="w-full bg-green-500 text-white p-4 rounded hover:bg-green-600"
              >
                Confirm COD Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}