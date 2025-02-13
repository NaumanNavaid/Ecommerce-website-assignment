'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/store';
import { CartLink } from '@/components/CartLink';

export function Navbar() {
  const { isLoggedIn, logout } = useAuthStore();
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">My Store</Link>
        <div className="flex items-center gap-6">
          <CartLink />
          {isLoggedIn ? (
            <button 
              onClick={logout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 