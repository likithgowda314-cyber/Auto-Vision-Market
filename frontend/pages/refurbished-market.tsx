import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function RefurbishedMarket() {
  const [parts, setParts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useContext(CartContext);

  const fetchRefurbishedParts = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/parts/refurbished`);
      if (!response.ok) throw new Error('Failed to fetch refurbished market data.');
      const data = await response.json();
      setParts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRefurbishedParts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Head>
        <title>Refurbished Market - AutoPrice</title>
      </Head>
      
      <div className="bg-indigo-600 pb-24 pt-12 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-4">
            Refurbished Market
          </motion.h1>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Buy high-quality refurbished and used parts directly from other users at unbeatable prices.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {loading && <div className="p-12 text-center text-gray-500 animate-pulse">Loading marketplace...</div>}
          {error && <div className="p-12 text-center text-red-600 bg-red-50 rounded-2xl">{error}</div>}
          
          {!loading && !error && parts.length === 0 && (
            <div className="p-16 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Parts Listed Yet</h3>
              <p className="text-gray-500">Be the first to sell a refurbished part on AutoPrice!</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && !error && parts.map((part, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
                key={part.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
              >
                {part.image_url ? (
                  <img src={`http://localhost:3001${part.image_url}`} alt={part.part_name} className="w-full h-48 object-cover bg-gray-100" />
                ) : (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{part.category}</span>
                    <span className="bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">{part.condition}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{part.part_name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{part.vehicle_make} {part.vehicle_model} ({part.vehicle_year})</p>
                  
                  <p className="text-sm text-gray-700 mb-6 flex-grow">{part.description || 'No description provided.'}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">Listed by {part.seller_name || 'Anonymous'}</span>
                      <span className="font-bold text-2xl text-indigo-700">₹{parseFloat(part.oem_price).toLocaleString('en-IN')}</span>
                    </div>
                    <button 
                      onClick={() => addToCart({ part_id: part.id, part_name: part.part_name, price: parseFloat(part.oem_price), quantity: 1 })}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-full transition shadow-md hover:shadow-lg text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
