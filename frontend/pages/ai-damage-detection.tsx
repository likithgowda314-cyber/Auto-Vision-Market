import { useState, useRef } from 'react';
import Head from 'next/head';
import { FaCamera, FaUpload, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIDamageDetection() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImageUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const analyzeDamage = async () => {
    if (!selectedImage) return;
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await axios.post(`${apiUrl}/ai/detect-damage`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (error) {
      alert('Failed to analyze vehicle image assets. Make sure the AI backend is running on port 5000.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head><title>AI Damage Analytics</title></Head>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-4 inline-block">Powered by YOLOv8</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">AI Accident Analysis</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Upload a photo of your damaged vehicle. Our computer vision model will detect affected panels and estimate repair costs instantly.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-8 border border-gray-100">
          <div 
            className={`border-2 border-dashed rounded-2xl p-12 transition-all cursor-pointer text-center ${imageUrl ? 'border-gray-200 bg-gray-50' : 'border-blue-300 bg-blue-50/50 hover:bg-blue-50'}`}
            onClick={() => !isAnalyzing && fileInputRef.current?.click()}
          >
            {imageUrl ? (
              <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} src={imageUrl} alt="Car state" className="max-h-96 mx-auto rounded-xl shadow-md" />
            ) : (
              <div className="py-12">
                <FaUpload className="text-5xl mx-auto mb-4 text-blue-500"/>
                <p className="text-lg font-bold text-gray-700">Click to upload vehicle photo</p>
                <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG (Max 5MB)</p>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={isAnalyzing} />
          </div>

          {imageUrl && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex justify-center">
              <button 
                onClick={analyzeDamage} 
                disabled={isAnalyzing} 
                className={`w-full max-w-md py-4 rounded-xl font-bold text-lg transition flex items-center justify-center space-x-2 ${isAnalyzing ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'}`}
              >
                {isAnalyzing ? (
                  <><FaSpinner className="animate-spin text-xl" /> <span>Running Neural Network...</span></>
                ) : (
                  <><FaCamera /> <span>Analyze Damage</span></>
                )}
              </button>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3 text-3xl"/>
                  Analysis Complete
                </h2>
                <div className="text-right">
                  <span className="text-sm text-gray-400 block">Confidence Score</span>
                  <span className="font-bold text-gray-900">{(result.confidence * 100).toFixed(1)}%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Detected Affected Parts</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.detected_parts.length > 0 ? result.detected_parts.map((part: string) => (
                      <span key={part} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm">
                        {part.replace('_', ' ').toUpperCase()}
                      </span>
                    )) : (
                      <span className="text-gray-500 italic">No significant panel damage detected.</span>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Impact Severity</span>
                    <span className={`font-bold px-3 py-1 rounded-full text-xs uppercase ${result.severity === 'Moderate' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                      {result.severity}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="block text-gray-500 text-sm mb-1">Estimated OEM Repair Cost</span>
                    <span className="text-3xl font-bold text-blue-600">₹{result.estimated_cost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
