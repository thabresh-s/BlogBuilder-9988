import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-primary mb-12"
      >
        Welcome to DevBlog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}