import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', city: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const res = await fetch(`${apiUrl}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head><title>Register - AutoPrice</title></Head>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50"
      >
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="mt-2 text-center text-sm text-gray-500">Join AutoPrice today</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center text-sm bg-red-50 p-3 rounded-xl border border-red-100">{error}</div>}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" required className="mt-1 appearance-none rounded-xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition shadow-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" required className="mt-1 appearance-none rounded-xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition shadow-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" required className="mt-1 appearance-none rounded-xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition shadow-sm" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input type="text" className="mt-1 appearance-none rounded-xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition shadow-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">City</label>
                <input type="text" className="mt-1 appearance-none rounded-xl block w-full px-4 py-3 border border-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition shadow-sm" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 pt-4">
          Already have an account? <Link href="/login" className="font-bold text-blue-600 hover:text-blue-700">Sign in</Link>
        </div>
      </motion.div>
    </div>
  );
}
