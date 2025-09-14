'use client';

import { useState } from 'react';
import { Search, Filter, X, Tag, ChevronDown } from 'lucide-react';
import { BlogMetadata, BlogCategory, CategoryInfo } from '@/types/blog';

interface BlogFilterMobileProps {
  posts: BlogMetadata[];
  categories: CategoryInfo[];
  onFilteredPostsChange: (filteredPosts: BlogMetadata[]) => void;
}

export default function BlogFilterMobile({ posts, categories, onFilteredPostsChange }: BlogFilterMobileProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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
    setShowSearch(false);
    setShowFilters(false);
    onFilteredPostsChange(posts);
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchTerm !== '' || selectedTags.length > 0;

  return (
    <div className="lg:hidden">
      {/* モバイルツールバー */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6">
        {/* アイコンバー */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            {/* 検索アイコン */}
            <button
              onClick={() => {
                setShowSearch(!showSearch);
                setShowFilters(false);
              }}
              className={`p-2.5 rounded-lg transition-colors ${
                showSearch 
                  ? 'bg-cosmic-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label="検索"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* フィルターアイコン */}
            <button
              onClick={() => {
                setShowFilters(!showFilters);
                setShowSearch(false);
              }}
              className={`p-2.5 rounded-lg transition-colors ${
                showFilters 
                  ? 'bg-cosmic-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-label="フィルター"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* アクティブフィルター数とリセット */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              <span className="text-xs bg-cosmic-100 dark:bg-cosmic-900/30 text-cosmic-800 dark:text-cosmic-300 px-2 py-1 rounded-full">
                {(selectedCategory !== 'all' ? 1 : 0) + selectedTags.length + (searchTerm ? 1 : 0)} 件
              </span>
              <button
                onClick={resetFilters}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="リセット"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* 検索パネル */}
        {showSearch && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 animate-in slide-in-from-top duration-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="記事を検索..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 transition-colors"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* フィルターパネル */}
        {showFilters && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 animate-in slide-in-from-top duration-200">
            {/* カテゴリー */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center justify-between">
                カテゴリー
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center ${
                    selectedCategory === 'all'
                      ? 'bg-cosmic-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  すべて ({posts.length})
                </button>
                {categories.map((category) => {
                  const count = posts.filter(post => post.category === category.id).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id as BlogCategory)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center truncate ${
                        selectedCategory === category.id
                          ? 'bg-cosmic-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* タグ */}
            {allTags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  タグ
                </h3>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {allTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                          isSelected
                            ? 'bg-stellar-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
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
        )}
      </div>

      {/* アクティブフィルター表示 */}
      {hasActiveFilters && !showSearch && !showFilters && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap mt-1">
              絞り込み:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-2 py-0.5 bg-cosmic-100 dark:bg-cosmic-900/30 text-cosmic-800 dark:text-cosmic-300 rounded text-xs">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="ml-1 hover:text-cosmic-900 dark:hover:text-cosmic-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTags.map(tag => (
                <span key={tag} className="inline-flex items-center px-2 py-0.5 bg-stellar-100 dark:bg-stellar-900/30 text-stellar-800 dark:text-stellar-300 rounded text-xs">
                  {tag}
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="ml-1 hover:text-stellar-900 dark:hover:text-stellar-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {searchTerm && (
                <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                  &quot;{searchTerm}&quot;
                  <button
                    onClick={() => handleSearchChange('')}
                    className="ml-1 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}