'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, LayoutGrid, List } from 'lucide-react';
import { BlogMetadata } from '@/types/blog';
import SectionHeading from './SectionHeading';
import JournalCard from './JournalCard';
const categories = [
  { value: 'all', label: 'すべて' },
  { value: 'astronomy', label: '天文学・宇宙' },
  { value: 'technology', label: '情報技術' },
  { value: 'education', label: '教育・解説' },
  { value: 'research', label: '研究ノート' },
  { value: 'general', label: '一般' },
];
export default function BlogSection({
  publishedPosts,
  featuredPosts,
}: {
  publishedPosts: BlogMetadata[];
  featuredPosts: BlogMetadata[];
}) {
  const [category, setCategory] = useState('all');
  const [list, setList] = useState(false);
  const posts = publishedPosts.filter(
    (post) => category === 'all' || post.category === category,
  );
  return (
    <section id="blog" className="site-section">
      <SectionHeading
        number="05"
        label="FIELD NOTES"
        title="宇宙と、学びの余白に。"
        description="読んだ論文、観測のこと、教室での発見。探究の途中にある思考を綴ります。"
      />
      <div className="journal-controls">
        <div className="filter-tabs">
          {categories.map((item) => (
            <button
              key={item.value}
              aria-pressed={category === item.value}
              onClick={() => setCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="view-controls">
          <button
            aria-label="グリッド表示"
            aria-pressed={!list}
            onClick={() => setList(false)}
          >
            <LayoutGrid size={17} />
          </button>
          <button
            aria-label="リスト表示"
            aria-pressed={list}
            onClick={() => setList(true)}
          >
            <List size={17} />
          </button>
        </div>
      </div>
      <div className={`journal-grid ${list ? 'journal-list' : ''}`}>
        {posts.slice(0, 6).map((post, index) => (
          <JournalCard
            key={post.slug}
            post={post}
            revealDelay={(index % 3) * 80}
            featured={featuredPosts.some((item) => item.slug === post.slug)}
          />
        ))}
      </div>
      {!posts.length && (
        <p className="empty-state">このカテゴリーの記事は準備中です。</p>
      )}
      <Link className="text-link section-end-link" href="/blog">
        すべての研究ノートを読む <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
