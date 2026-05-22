import { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalCost, totalItems } = useContext(CartContext);
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    if (!user || !token) return;
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const payload = {
        total_amount: totalCost,
        shipping_address: (user as any).city || 'Default Address, AutoPrice HQ',
        items: cart.map(item => ({
          part_id: item.part_id,
          quantity: item.quantity,
          price: item.price
        }))
      };

      const res = await fetch(`${apiUrl}/orders`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to place order');
      
      clearCart();
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Order Placed!</h2>
          <p className="text-gray-600 mb-8">Your parts are being processed and will be shipped soon.</p>
          <Link href="/orders" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            View My Orders
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head><title>Cart - AutoPrice</title></Head>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
            <Link href="/price-comparison" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Find Parts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {cart.map((item, idx) => (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} key={item.part_id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.part_name}</h3>
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <p className="font-bold text-lg text-blue-600">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    <button onClick={() => removeFromCart(item.part_id)} className="text-red-400 hover:text-red-600 transition p-2 bg-red-50 rounded-full">
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h3>
                <div className="flex justify-between mb-4 text-gray-600">
                  <span>Items ({totalItems})</span>
                  <span>₹{totalCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-bold text-xl mb-8 pt-4 border-t">
                  <span>Total</span>
                  <span className="text-blue-600">₹{totalCost.toLocaleString('en-IN')}</span>
                </div>
                
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                
                {!user ? (
                  <Link href="/login" className="block text-center w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition">
                    Login to Checkout
                  </Link>
                ) : (
                  <button onClick={handleCheckout} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition shadow-lg shadow-blue-500/30">
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
