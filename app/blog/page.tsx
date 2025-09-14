import { Metadata } from 'next';
import { getAllPostsMetadata, getAllCategories } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'ブログ | 中村桃太朗研究室',
  description: '天文学研究、AI開発、教育に関する記事やメモを公開しています。',
};

export default function BlogPage() {
  const posts = getAllPostsMetadata();
  const categories = getAllCategories();

  return (
    <BlogPageClient 
      initialPosts={posts}
      categories={categories}
    />
  );
}