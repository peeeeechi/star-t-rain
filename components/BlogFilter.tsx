'use client';

import { useState } from 'react';
import { Search, Filter, X, Tag } from 'lucide-react';
import { BlogMetadata, BlogCategory, CategoryInfo } from '@/types/blog';

interface BlogFilterProps {
  posts: BlogMetadata[];
  categories: CategoryInfo[];
  onFilteredPostsChange: (filteredPosts: BlogMetadata[]) => void;
}

export default function BlogFilter({ posts, categories, onFilteredPostsChange }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  // 全タグを取得
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  // フィルタリング処理
  const filterPosts = (category: BlogCategory | 'all', search: string, tags: string[]) => {
    let filtered = [...posts];

    // カテゴリーフィルター
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category);
    }

    // 検索フィルター
    if (search.trim() !== '') {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // タグフィルター
    if (tags.length > 0) {
      filtered = filtered.filter(post => 
        tags.some(tag => post.tags.includes(tag))
      );
    }

    return filtered;
  };


  // カテゴリー変更
  const handleCategoryChange = (category: BlogCategory | 'all') => {
    setSelectedCategory(category);
    const filteredPosts = filterPosts(category, searchTerm, selectedTags);
    onFilteredPostsChange(filteredPosts);
  };

  // 検索変更
  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    const filteredPosts = filterPosts(selectedCategory, search, selectedTags);
    onFilteredPostsChange(filteredPosts);
  };

  // タグ選択変更
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    const filteredPosts = filterPosts(selectedCategory, searchTerm, newTags);
    onFilteredPostsChange(filteredPosts);
  };

  // フィルターリセット
  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSelectedTags([]);
    onFilteredPostsChange(posts);
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchTerm !== '' || selectedTags.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
      {/* 検索バー */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="記事を検索..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 transition-colors"
        />
      </div>

      {/* フィルターボタンとリセット */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <Filter className="w-4 h-4 mr-2" />
          フィルター {showFilters ? '閉じる' : '開く'}
        </button>
        
        <div className="hidden lg:block text-sm font-medium text-gray-900 dark:text-white">
          フィルター
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-4 h-4 mr-1" />
            リセット
          </button>
        )}
      </div>

      {/* フィルターパネル */}
      <div className={`space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700 lg:block ${showFilters ? 'block' : 'hidden'}`}>
          {/* カテゴリーフィルター */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">カテゴリー</h3>
            <div className="flex flex-col lg:flex-col gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                  selectedCategory === 'all'
                    ? 'bg-cosmic-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                すべて ({posts.length})
              </button>
              {categories.map((category) => {
                const count = posts.filter(post => post.category === category.id).length;
                const categoryInfo = category;
                
                const colorClasses = {
                  cosmic: selectedCategory === category.id ? 'bg-cosmic-600 text-white' : 'bg-cosmic-100 text-cosmic-800 dark:bg-cosmic-900/30 dark:text-cosmic-300 hover:bg-cosmic-200 dark:hover:bg-cosmic-900/50',
                  stellar: selectedCategory === category.id ? 'bg-stellar-600 text-white' : 'bg-stellar-100 text-stellar-800 dark:bg-stellar-900/30 dark:text-stellar-300 hover:bg-stellar-200 dark:hover:bg-stellar-900/50',
                  nebula: selectedCategory === category.id ? 'bg-nebula-600 text-white' : 'bg-nebula-100 text-nebula-800 dark:bg-nebula-900/30 dark:text-nebula-300 hover:bg-nebula-200 dark:hover:bg-nebula-900/50',
                  emerald: selectedCategory === category.id ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50',
                  gray: selectedCategory === category.id ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900/50'
                };

                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id as BlogCategory)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                      colorClasses[categoryInfo?.color as keyof typeof colorClasses] || colorClasses.gray
                    }`}
                  >
                    {category.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* タグフィルター */}
          {allTags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">タグ</h3>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {allTags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-stellar-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
      </div>

      {/* アクティブなフィルター表示 */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="mr-2">アクティブなフィルター:</span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="px-2 py-1 bg-cosmic-100 dark:bg-cosmic-900/30 text-cosmic-800 dark:text-cosmic-300 rounded text-xs">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
              {selectedTags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-stellar-100 dark:bg-stellar-900/30 text-stellar-800 dark:text-stellar-300 rounded text-xs">
                  {tag}
                </span>
              ))}
              {searchTerm && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                  &quot;{searchTerm}&quot;
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}