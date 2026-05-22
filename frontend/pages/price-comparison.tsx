import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function PriceComparison() {
  const [make, setMake] = useState('Maruti');
  const [model, setModel] = useState('Swift');
  const [year, setYear] = useState('2024');
  const [parts, setParts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useContext(require('../context/CartContext').CartContext);

  const fetchVehicleParts = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/parts/vehicle/${make}/${model}/${year}`);
      if (!response.ok) throw new Error('Failed to fetch pricing data.');
      const data = await response.json();
      setParts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicleParts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Head>
        <title>OEM Parts Explorer - AutoPrice</title>
      </Head>
      
      <div className="bg-blue-600 pb-24 pt-12 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mb-4">
            OEM Price Transparency
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Compare local market markups directly with verified OEM fixed prices and save money by buying transparently.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Make</label>
            <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" value={make} onChange={(e) => setMake(e.target.value)}>
              <option value="Maruti">Maruti Suzuki</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Tata">Tata</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Model</label>
            <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="Swift">Swift</option>
              <option value="i20">i20</option>
              <option value="Nexon">Nexon</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Model Year</label>
            <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition" value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <button onClick={fetchVehicleParts} className="w-full bg-gray-900 hover:bg-black text-white font-bold p-3.5 rounded-xl transition shadow-lg">
            Search Parts
          </button>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {loading && <div className="p-12 text-center text-gray-500 animate-pulse">Scanning manufacturer databases...</div>}
          {error && <div className="p-12 text-center text-red-600 bg-red-50 rounded-2xl">{error}</div>}
          
          {!loading && !error && parts.length === 0 && (
            <div className="p-16 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Parts Found</h3>
              <p className="text-gray-500">We couldn't find any catalog entries matching this exact vehicle.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && !error && parts.map((part, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
                key={part.id} 
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
              >
                <div className="mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{part.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{part.part_name}</h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-sm text-gray-500">Market Price</span>
                    <span className="text-gray-400 line-through font-medium">₹{parseFloat(part.market_price).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50/50 p-3 rounded-xl border border-green-100">
                    <span className="text-sm font-bold text-gray-900">AutoPrice (OEM)</span>
                    <span className="font-bold text-xl text-green-700">₹{parseFloat(part.oem_price).toLocaleString('en-IN')}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                  <div className="text-sm">
                    <span className="block text-gray-500">You save</span>
                    <span className="font-bold text-green-600">₹{parseFloat(part.savings).toLocaleString('en-IN')}</span>
                  </div>
                  <button 
                    onClick={() => addToCart({ part_id: part.id, part_name: part.part_name, price: parseFloat(part.oem_price), quantity: 1 })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full transition shadow-md hover:shadow-lg text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
