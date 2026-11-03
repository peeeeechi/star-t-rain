'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { BlogMetadata, CategoryInfo } from '@/types/blog';
import JournalCard from '@/components/JournalCard';
export default function BlogPageClient({
  initialPosts,
  categories,
}: {
  initialPosts: BlogMetadata[];
  categories: CategoryInfo[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [tags, setTags] = useState<string[]>([]);
  const allTags = Array.from(
    new Set(initialPosts.flatMap((post) => post.tags)),
  );
  const search = query.trim().toLowerCase();
  const posts = initialPosts.filter(
    (post) =>
      (category === 'all' || post.category === category) &&
      (!search ||
        [post.title, post.excerpt, ...post.tags].some((text) =>
          text.toLowerCase().includes(search),
        )) &&
      (!tags.length || tags.some((tag) => post.tags.includes(tag))),
  );
  const reset = () => {
    setQuery('');
    setCategory('all');
    setTags([]);
  };
  return (
    <div className="journal-page site-container">
      <header className="journal-header">
        <p className="eyebrow">FIELD NOTES / 研究ノート</p>
        <h1>宇宙と、学びの余白に。</h1>
        <p>
          研究のこと、教室のこと、つくること。
          <br />
          まだ答えのない問いと、その途中の記録。
        </p>
      </header>
      <div className="journal-search">
        <Search size={19} />
        <label className="sr-only" htmlFor="journal-query">
          研究ノートを検索
        </label>
        <input
          id="journal-query"
          type="search"
          placeholder="キーワードから、ノートを探す"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="mono">
          {String(posts.length).padStart(2, '0')} NOTES
        </span>
      </div>
      <div className="filter-tabs">
        <button
          aria-pressed={category === 'all'}
          onClick={() => setCategory('all')}
        >
          すべて
        </button>
        {categories.map((item) => (
          <button
            key={item.id}
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <details className="tag-filter">
        <summary>
          タグで絞り込む {tags.length > 0 && `(${tags.length})`}
        </summary>
        <div className="tag-options">
          {allTags.map((tag) => (
            <button
              key={tag}
              aria-pressed={tags.includes(tag)}
              onClick={() =>
                setTags(
                  tags.includes(tag)
                    ? tags.filter((value) => value !== tag)
                    : [...tags, tag],
                )
              }
            >
              # {tag}
            </button>
          ))}
        </div>
      </details>
      {(query || category !== 'all' || tags.length > 0) && (
        <button className="text-link reset-filter" onClick={reset}>
          絞り込みをリセット <X size={14} />
        </button>
      )}
      <p className="results-count" role="status">
        {posts.length}件の研究ノート
      </p>
      <div className="journal-grid">
        {posts.map((post) => (
          <JournalCard key={post.slug} post={post} />
        ))}
      </div>
      {!posts.length && (
        <div className="empty-state">
          <h2>ノートが見つかりませんでした。</h2>
          <p>別のキーワードを試すか、絞り込みを解除してください。</p>
          <button className="text-link" onClick={reset}>
            すべてのノートを見る
          </button>
        </div>
      )}
    </div>
  );
}
