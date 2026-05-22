import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm flex items-center justify-center">
          Built with <FaHeart className="text-red-500 mx-2" /> by AutoPrice Team
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
