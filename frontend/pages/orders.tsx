import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Orders() {
  const { user, token } = useContext(AuthContext);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || !token) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        const res = await fetch(`${apiUrl}/orders/user/${user.id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user, token]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Please login to view your orders.</h2>
        <Link href="/login" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow hover:shadow-lg transition">Login</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head><title>My Orders - AutoPrice</title></Head>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Order History</h1>
        
        {loading ? (
          <div className="text-center p-12 text-gray-500 animate-pulse">Loading orders...</div>
        ) : error ? (
          <div className="text-center p-12 text-red-500 bg-red-50 rounded-2xl">{error}</div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg mb-6">You haven't placed any orders yet.</p>
            <Link href="/price-comparison" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">Start Shopping</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Order #{order.id}</p>
                  <p className="font-bold text-gray-900">{new Date(order.created_at).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600 mt-2">Ship to: {order.shipping_address}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">{order.status}</span>
                  <p className="font-bold text-xl text-blue-600">₹{parseFloat(order.total_amount).toLocaleString('en-IN')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
