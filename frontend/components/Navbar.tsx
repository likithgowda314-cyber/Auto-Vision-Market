import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { FaCar, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FaCar className="text-blue-600 text-2xl" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            AutoPrice
          </span>
        </Link>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/price-comparison" className="text-gray-600 hover:text-blue-600 transition">Parts</Link>
          <Link href="/ai-damage-detection" className="text-gray-600 hover:text-blue-600 transition">AI Damage</Link>
          
          <Link href="/cart" className="relative text-gray-600 hover:text-blue-600 transition flex items-center gap-1">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
              <Link href="/orders" className="text-gray-600 hover:text-blue-600 transition">Orders</Link>
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <FaUserCircle className="text-blue-500 text-lg" />
                <span className="text-gray-700">{user.name}</span>
              </div>
              <button onClick={logout} className="text-gray-500 hover:text-red-500 transition text-xs font-bold uppercase tracking-wider">Logout</button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition">Login</Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg font-bold">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
