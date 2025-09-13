import { getAllPostsMetadata, getRecentPosts } from '@/lib/blog';
import BlogSection from './BlogSection';

export default function BlogSectionWrapper() {
  const publishedPosts = getAllPostsMetadata();
  const featuredPosts = getRecentPosts(2);
  
  return (
    <BlogSection 
      publishedPosts={publishedPosts}
      featuredPosts={featuredPosts}
    />
  );
}