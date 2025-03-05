import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function PostCard({ post }) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500">
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </span>
        <h2 className="text-xl font-semibold mt-2">
          <Link to={`/post/${post.id}`} className="text-primary hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
        </div>
      </div>
    </motion.article>
  );
}