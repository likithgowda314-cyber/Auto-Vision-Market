import { useState, useContext } from 'react';
import Head from 'next/head';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function SellPart() {
  const { user, token } = useContext(AuthContext);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    part_name: '',
    category: 'Body',
    vehicle_make: 'Maruti',
    vehicle_model: 'Swift',
    vehicle_year: '2024',
    condition: 'Refurbished',
    asking_price: '',
    description: ''
  });
  const [image, setImage] = useState<File | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to sell a part.');
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, (formData as any)[key]));
      if (image) {
        data.append('image', image);
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/parts/sell`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to list part');
      
      setSuccess(true);
      setTimeout(() => router.push('/refurbished-market'), 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-6">You need to log in to sell your parts on AutoPrice.</p>
          <button onClick={() => router.push('/login')} className="w-full bg-blue-600 text-white font-bold p-3 rounded-xl">Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Head>
        <title>Sell Part - AutoPrice</title>
      </Head>
      
      <div className="bg-gray-900 pb-24 pt-12 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold mb-4">
            List Your Part for Sale
          </motion.h1>
          <p className="text-gray-400 text-lg">Turn your old or refurbished parts into cash. List them directly on the AutoPrice marketplace.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
          {success && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl font-medium">Part listed successfully! Redirecting...</div>}
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-medium">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Part Name</label>
                <input required type="text" name="part_name" value={formData.part_name} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. Front Bumper" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="Body">Body</option>
                  <option value="Engine">Engine</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Interior">Interior</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Make</label>
                <select name="vehicle_make" value={formData.vehicle_make} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="Maruti">Maruti</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata">Tata</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                <select name="vehicle_model" value={formData.vehicle_model} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="Swift">Swift</option>
                  <option value="i20">i20</option>
                  <option value="Nexon">Nexon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                <select name="vehicle_year" value={formData.vehicle_year} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
                <select name="condition" value={formData.condition} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="Refurbished">Refurbished</option>
                  <option value="Used - Good">Used - Good</option>
                  <option value="Used - Fair">Used - Fair</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Asking Price (₹)</label>
                <input required type="number" name="asking_price" value={formData.asking_price} onChange={handleChange} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 5000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Provide details about the part's condition..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Image</label>
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-gray-900 hover:bg-black text-white font-bold p-4 rounded-xl transition shadow-lg mt-8">
              {loading ? 'Listing Part...' : 'List Part for Sale'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
