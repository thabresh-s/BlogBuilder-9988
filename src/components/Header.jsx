import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPen } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            DevBlog
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
            <Link to="/write" className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              <FaPen />
              <span>Write</span>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}