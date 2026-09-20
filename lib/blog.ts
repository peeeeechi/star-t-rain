import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata, BlogCategory, CategoryInfo } from '@/types/blog';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export const categories: CategoryInfo[] = [
  {
    id: 'astronomy',
    name: '天文学・宇宙',
    description: '星の形成、観測データ解析、宇宙に関する研究',
    color: 'cosmic'
  },
  {
    id: 'technology',
    name: '情報技術',
    description: 'プログラミング、AI、機械学習、開発ツール',
    color: 'stellar'
  },
  {
    id: 'research',
    name: '研究ノート',
    description: '論文メモ、研究の進捗、学会発表',
    color: 'nebula'
  },
  {
    id: 'education',
    name: '教育・解説',
    description: '天文教育、科学解説、学習リソース',
    color: 'emerald'
  },
  {
    id: 'general',
    name: '一般',
    description: 'その他の話題、日常の出来事',
    color: 'gray'
  }
];

// published: true のまま date が未来時刻＝「予約投稿」（その日時までは一覧にもURL直アクセスにも出さない）
function isScheduledForFuture(data: { published?: boolean; date?: string }): boolean {
  if (data.published === false) return false; // 下書きは「予約」ではなく、常にURL直アクセスではプレビュー可能にする
  if (!data.date) return false;
  const publishAt = new Date(data.date).getTime();
  return !Number.isNaN(publishAt) && publishAt > Date.now();
}

// 一覧・カテゴリー一覧に出してよいか（下書き・未到来の予約投稿は除外）
function isListable(data: { published?: boolean; date?: string }): boolean {
  if (data.published === false) return false;
  return !isScheduledForFuture(data);
}

// URLへの直接アクセスを許可してよいか（未到来の予約投稿のみ404にする。下書きはプレビュー用に許可）
function isDirectlyAccessible(data: { published?: boolean; date?: string }): boolean {
  return !isScheduledForFuture(data);
}

// すべてのブログ記事のメタデータを取得
export function getAllPostsMetadata(): BlogMetadata[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        category: matterResult.data.category || 'general',
        tags: matterResult.data.tags || [],
        author: matterResult.data.author || '中村桃太朗',
        readTime: calculateReadTime(matterResult.content),
        published: isListable(matterResult.data)
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return allPostsData;
}

// 特定のブログ記事を取得（未到来の予約投稿は null を返す＝404。下書きはプレビューのため許可）
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!isDirectlyAccessible(matterResult.data)) {
      return null;
    }

    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      content: matterResult.content, // Raw markdown content
      category: matterResult.data.category || 'general',
      tags: matterResult.data.tags || [],
      author: matterResult.data.author || '中村桃太朗',
      readTime: calculateReadTime(matterResult.content),
      published: true
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

// カテゴリー別の記事を取得
export function getPostsByCategory(category: BlogCategory): BlogMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.filter(post => post.category === category);
}

// 読了時間を計算（日本語対応）
function calculateReadTime(content: string): number {
  const wordsPerMinute = 400; // 日本語の場合、分あたり約400文字
  const wordCount = content.length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// カテゴリー情報を取得
export function getCategoryInfo(categoryId: BlogCategory): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}

// 全カテゴリーを取得
export function getAllCategories(): CategoryInfo[] {
  return categories;
}

// 最近の投稿を取得
export function getRecentPosts(limit: number = 5): BlogMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.slice(0, limit);
}

// タグで検索
export function getPostsByTag(tag: string): BlogMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.filter(post => post.tags.includes(tag));
}

// すべてのタグを取得
export function getAllTags(): string[] {
  const allPosts = getAllPostsMetadata();
  const allTags = allPosts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}