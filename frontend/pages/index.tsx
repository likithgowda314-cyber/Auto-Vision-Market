import Head from 'next/head';
import Link from 'next/link';
import { FaCar, FaSearch, FaCamera, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AutoPrice - Transparent Vehicle Parts</title>
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="bg-blue-500/30 text-blue-100 border border-blue-400/30 text-sm font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase">The Future of Auto Repair</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Fair pricing, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">transparent parts.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We cut out the middlemen. Compare local market markups against fixed OEM prices. Detect damage with AI and buy directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/price-comparison" className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg shadow-white/10 flex items-center justify-center">
                <FaSearch className="mr-2" /> Explore Parts Catalog
              </Link>
              <Link href="/ai-damage-detection" className="w-full sm:w-auto bg-blue-700/50 border border-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600/50 transition backdrop-blur-sm flex items-center justify-center">
                <FaCamera className="mr-2" /> AI Damage Scan
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose AutoPrice?</h2>
          <p className="text-gray-500">The most advanced platform for vehicle repair and maintenance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center transition">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">100% Transparency</h3>
            <p className="text-gray-500 leading-relaxed">We show you the real OEM fixed price next to the inflated local market price. No hidden fees.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center transition">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 text-2xl">
              <FaCamera />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">AI Damage Detection</h3>
            <p className="text-gray-500 leading-relaxed">Upload a photo of your damaged car. Our AI identifies broken parts and estimates repair costs instantly.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center transition">
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 text-2xl">
              <FaCar />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Direct Delivery</h3>
            <p className="text-gray-500 leading-relaxed">Order authentic OEM parts directly through our platform and get them shipped straight to your garage.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
