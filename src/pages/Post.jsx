import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import { format } from 'date-fns';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12 max-w-3xl"
    >
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-500 mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
        </div>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </motion.article>
  );
}