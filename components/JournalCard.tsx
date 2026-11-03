import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogMetadata } from '@/types/blog';
const names: Record<string, string> = {
  astronomy: '天文学・宇宙',
  technology: '情報技術',
  education: '教育・解説',
  research: '研究ノート',
  general: '一般',
};
export default function JournalCard({
  post,
  featured = false,
}: {
  post: BlogMetadata;
  featured?: boolean;
}) {
  return (
    <article className={`journal-card ${featured ? 'journal-featured' : ''}`}>
      <div className="journal-card-meta">
        <span className="category-label">
          {names[post.category] || post.category}
        </span>
        <time className="mono" dateTime={post.date}>
          {post.date.replaceAll('-', '.')}
        </time>
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <div className="journal-card-bottom">
        <span>{post.readTime} MIN READ</span>
        <Link href={`/blog/${post.slug}`} aria-label={`${post.title}を読む`}>
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </article>
  );
}
