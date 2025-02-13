import './globals.css';
import { CartLink } from '@/components/CartLink';
import Link from 'next/link';
import  ToastContainer from 'react-hot-toast';
import { Navbar } from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main>{children}</main>

        <footer className="bg-gray-800 text-white mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">NextShop</h3>
                <p className="text-gray-400">Your favorite online store</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/returns">Returns</Link></li>
                  <li><Link href="/shipping">Shipping</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white">Facebook</Link>
                  <Link href="#" className="text-gray-400 hover:text-white">Twitter</Link>
                  <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}