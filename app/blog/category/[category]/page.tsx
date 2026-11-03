import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JournalCard from '@/components/JournalCard';
import {
  getPostsByCategory,
  getCategoryInfo,
  getAllCategories,
} from '@/lib/blog';
import { BlogCategory } from '@/types/blog';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category as BlogCategory);
  if (!categoryInfo) notFound();
  const posts = getPostsByCategory(category as BlogCategory);
  return (
    <div className="journal-page site-container">
      <Link className="text-link" href="/blog">
        ← 研究ノート一覧へ
      </Link>
      <header className="journal-header">
        <p className="eyebrow">FIELD NOTES / CATEGORY</p>
        <h1>{categoryInfo.name}</h1>
        <p>{categoryInfo.description}</p>
      </header>
      <p className="results-count">{posts.length}件の研究ノート</p>
      <div className="journal-grid">
        {posts.map((post) => (
          <JournalCard key={post.slug} post={post} />
        ))}
      </div>
      {!posts.length && (
        <p className="empty-state">このカテゴリーの記事は準備中です。</p>
      )}
      <nav
        aria-label="その他のカテゴリー"
        className="filter-tabs category-navigation"
      >
        {getAllCategories()
          .filter((item) => item.id !== category)
          .map((item) => (
            <Link key={item.id} href={`/blog/category/${item.id}`}>
              {item.name}
            </Link>
          ))}
      </nav>
    </div>
  );
}
