'use client';

import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export function CartLink() {
  const { cart } = useCartStore();
  return (
    <Link href="/cart" className=" text-white flex items-center gap-2">
      🛒 Cart ({cart.length})
    </Link>
  );
}