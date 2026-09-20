import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllCategories } from '@/lib/blog';

// Vercel Cron Jobs から1日1回呼ばれ、予約投稿の日時が過ぎた記事を
// トップページ・ブログ一覧・カテゴリー一覧に反映させる（ISRのオンデマンド再検証）
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidatePath('/');
  revalidatePath('/blog');
  for (const category of getAllCategories()) {
    revalidatePath(`/blog/category/${category.id}`);
  }

  return NextResponse.json({
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}
