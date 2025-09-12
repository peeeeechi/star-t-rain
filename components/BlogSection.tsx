'use client';

import { useState } from 'react';
import { getPublishedPosts, BlogPost, getFeaturedPosts, getRecentPosts } from '@/lib/blog-data';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | BlogPost['category']>('all');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { value: 'all', label: '全て', icon: '📝' },
    { value: 'astronomy', label: '天文学', icon: '🔭' },
    { value: 'ai', label: 'AI・技術', icon: '🤖' },
    { value: 'education', label: '教育', icon: '🎓' },
    { value: 'research', label: '研究', icon: '🔬' },
    { value: 'general', label: '一般', icon: '📖' },
  ];

  const publishedPosts = getPublishedPosts();
  
  const filteredPosts = selectedCategory === 'all' 
    ? publishedPosts 
    : publishedPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = getFeaturedPosts();

  const getCategoryColor = (category: BlogPost['category']) => {
    switch (category) {
      case 'astronomy':
        return 'bg-cosmic-100 text-cosmic-700 dark:bg-cosmic-900 dark:text-cosmic-300';
      case 'ai':
        return 'bg-stellar-100 text-stellar-700 dark:bg-stellar-900 dark:text-stellar-300';
      case 'education':
        return 'bg-nebula-100 text-nebula-700 dark:bg-nebula-900 dark:text-nebula-300';
      case 'research':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'general':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-nebula-600 to-stellar-600 bg-clip-text text-transparent">
              ブログ・活動記録
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            研究活動、教育実践、技術解説など最新の情報を発信
          </p>
        </div>

        {/* 記事がない場合のメッセージ */}
        {publishedPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              準備中
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ブログ記事を準備しています。もうしばらくお待ちください。
            </p>
          </div>
        ) : (
          <>
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-2">⭐</span>
              注目の記事
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-cosmic-50 to-stellar-50 dark:from-cosmic-900/20 dark:to-stellar-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.value === post.category)?.label}
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/50 dark:bg-gray-800/50 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}分で読めます
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter and View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as 'all' | BlogPost['category'])}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.value
                    ? 'bg-stellar-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              aria-label="Grid view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              aria-label="List view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Posts */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
        }`}>
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
            >
              {viewMode === 'list' && post.imageUrl && (
                <div className="md:w-48 h-48 bg-gradient-to-br from-cosmic-100 to-stellar-100 dark:from-cosmic-900 dark:to-stellar-900 flex-shrink-0" />
              )}
              
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {categories.find(c => c.value === post.category)?.label}
                  </span>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(post.date)}
                  </time>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors cursor-pointer"
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}>
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                {expandedPost === post.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="prose dark:prose-invert max-w-none text-sm">
                      {post.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="mb-2 text-gray-700 dark:text-gray-300">
                            {paragraph.trim()}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, viewMode === 'grid' ? 2 : 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className="text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 text-sm font-semibold flex items-center"
                  >
                    {expandedPost === post.id ? '閉じる' : '続きを読む'}
                    <svg className={`w-4 h-4 ml-1 transform transition-transform ${expandedPost === post.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-stellar-600 text-white rounded-full hover:bg-stellar-700 transition-colors shadow-lg">
            さらに記事を読む
          </button>
        </div>
        </>
        )}
      </div>
    </section>
  );
}