import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Tag, 
  User,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { getAllPostsMetadata, getAllCategories, getCategoryInfo } from '@/lib/blog';
import { BlogCategory } from '@/types/blog';
import { BlogMetadata } from '@/types/blog';

export const metadata: Metadata = {
  title: 'ブログ | 中村桃太朗研究室',
  description: '天文学研究、AI開発、教育に関する記事やメモを公開しています。',
};

function CategoryBadge({ category }: { category: string }) {
  const categoryInfo = getCategoryInfo(category as BlogCategory);
  if (!categoryInfo) return null;

  const colorClasses = {
    cosmic: 'bg-cosmic-100 text-cosmic-800 dark:bg-cosmic-900/30 dark:text-cosmic-300',
    stellar: 'bg-stellar-100 text-stellar-800 dark:bg-stellar-900/30 dark:text-stellar-300',
    nebula: 'bg-nebula-100 text-nebula-800 dark:bg-nebula-900/30 dark:text-nebula-300',
    emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      colorClasses[categoryInfo.color as keyof typeof colorClasses] || colorClasses.gray
    }`}>
      {categoryInfo.name}
    </span>
  );
}

function BlogPostCard({ post }: { post: BlogMetadata }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:scale-105 border border-gray-100 dark:border-gray-700">
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <CategoryBadge category={post.category} />
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString('ja-JP')}
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}分
            </div>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              <span className="text-xs">
                {post.tags.slice(0, 2).join(', ')}
                {post.tags.length > 2 && '...'}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="px-6 sm:px-8 pb-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 font-medium group-hover:translate-x-1 transition-all duration-300"
        >
          続きを読む
          <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllPostsMetadata();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cosmic-50/30 dark:from-gray-900 dark:to-cosmic-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cosmic-600 to-stellar-600 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-600 to-stellar-600 bg-clip-text text-transparent">
              研究ブログ
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            天文学研究の最新動向、AI技術の活用事例、教育実践など、研究活動に関する記事や考察を発信しています。
          </p>
        </div>

        {/* カテゴリー概要 */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* 記事一覧 */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                記事はまだありません
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                新しい記事を準備中です。しばらくお待ちください。
              </p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* 統計情報 */}
        <div className="mt-16 bg-gradient-to-r from-cosmic-500/10 to-stellar-500/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ブログ統計
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-cosmic-600 dark:text-cosmic-400">
                {posts.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">記事数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stellar-600 dark:text-stellar-400">
                {categories.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">カテゴリー</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-nebula-600 dark:text-nebula-400">
                {Math.round(posts.reduce((sum, post) => sum + post.readTime, 0) / posts.length) || 0}
              </div>
              <div className="text-gray-600 dark:text-gray-400">平均読了時間（分）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}