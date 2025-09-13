import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  BookOpen
} from 'lucide-react';
import { getPostBySlug, getAllPostsMetadata, getCategoryInfo, getRecentPosts } from '@/lib/blog';
import { BlogCategory } from '@/types/blog';
import ShareButton from '@/components/ShareButton';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: '記事が見つかりません | 中村桃太朗研究室',
    };
  }

  return {
    title: `${post.title} | 中村桃太朗研究室`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
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
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
      colorClasses[categoryInfo.color as keyof typeof colorClasses] || colorClasses.gray
    }`}>
      {categoryInfo.name}
    </span>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(5).filter(p => p.slug !== slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cosmic-50/30 dark:from-gray-900 dark:to-cosmic-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 戻るリンク */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          ブログ一覧に戻る
        </Link>

        {/* 記事ヘッダー */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="p-8 sm:p-12">
            <div className="mb-6">
              <CategoryBadge category={post.category} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(post.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                約{post.readTime}分で読めます
              </div>
            </div>

            {/* タグ */}
            {post.tags.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <Tag className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">タグ</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 記事本文 */}
            <div 
              className="prose prose-xl max-w-none dark:prose-invert
                prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-lg prose-ul:my-6
                prose-ol:text-lg prose-ol:my-6
                prose-li:my-2
                prose-strong:font-bold
                prose-a:text-cosmic-600 dark:prose-a:text-cosmic-400 prose-a:underline prose-a:decoration-2
                hover:prose-a:text-cosmic-700 dark:hover:prose-a:text-cosmic-300
                prose-code:text-stellar-600 dark:prose-code:text-stellar-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
                prose-blockquote:border-l-4 prose-blockquote:border-cosmic-500 prose-blockquote:bg-cosmic-50/50 dark:prose-blockquote:bg-cosmic-900/20
                prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic
                prose-table:my-8
                prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:font-bold prose-th:p-3
                prose-td:p-3 prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-600
                prose-hr:border-gray-300 dark:prose-hr:border-gray-600 prose-hr:my-12
                prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* シェアボタン */}
          <div className="px-8 sm:px-12 pb-8 border-t border-gray-200 dark:border-gray-600 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                この記事を共有
              </h3>
              <div className="flex items-center space-x-4">
                <ShareButton
                  title={post.title}
                  excerpt={post.excerpt}
                  url=""
                />
              </div>
            </div>
          </div>
        </article>

        {/* 関連記事 */}
        {recentPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-cosmic-600 dark:text-cosmic-400" />
              その他の記事
            </h2>
            
            <div className="space-y-4">
              {recentPosts.slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(relatedPost.date).toLocaleDateString('ja-JP')}
                        <span className="mx-2">•</span>
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedPost.readTime}分
                      </div>
                    </div>
                    <CategoryBadge category={relatedPost.category} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}