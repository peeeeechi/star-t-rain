import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Sparkles
} from 'lucide-react';
import { getPostsByCategory, getCategoryInfo, getAllCategories } from '@/lib/blog';
import { BlogMetadata, BlogCategory } from '@/types/blog';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category as BlogCategory);

  if (!categoryInfo) {
    return {
      title: 'カテゴリーが見つかりません | 中村桃太朗研究室',
    };
  }

  return {
    title: `${categoryInfo.name} | 中村桃太朗研究室`,
    description: `${categoryInfo.description}に関する記事一覧`,
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.id,
  }));
}

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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category as BlogCategory);

  if (!categoryInfo) {
    notFound();
  }

  const posts = getPostsByCategory(category as BlogCategory);

  const colorClasses = {
    cosmic: 'from-cosmic-600 to-stellar-600',
    stellar: 'from-stellar-600 to-nebula-600',
    nebula: 'from-nebula-600 to-cosmic-600',
    emerald: 'from-emerald-600 to-cosmic-600',
    gray: 'from-gray-600 to-cosmic-600'
  };

  const gradientClass = colorClasses[categoryInfo.color as keyof typeof colorClasses] || colorClasses.cosmic;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cosmic-50/30 dark:from-gray-900 dark:to-cosmic-900/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 戻るリンク */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          ブログ一覧に戻る
        </Link>

        {/* カテゴリーヘッダー */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${gradientClass} rounded-2xl mb-6`}>
            <Tag className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
              {categoryInfo.name}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {categoryInfo.description}
          </p>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            {posts.length}件の記事があります
          </div>
        </div>

        {/* 記事一覧 */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                このカテゴリーにはまだ記事がありません
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

        {/* その他のカテゴリー */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            その他のカテゴリー
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {getAllCategories()
              .filter(cat => cat.id !== category)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog/category/${cat.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {cat.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}