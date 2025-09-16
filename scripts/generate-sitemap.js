const fs = require('fs');
const path = require('path');

// ブログ記事のスラッグを取得する簡易版
function getAllPostSlugs() {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(contentDir)) return [];

    return fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    console.warn('ブログディレクトリが見つかりません:', error.message);
    return [];
  }
}

function generateSitemap() {
  const baseUrl = 'https://star-t-rain.vercel.app';
  const currentDate = new Date().toISOString();

  // 静的ページ
  const staticPages = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/blog`, priority: '0.9', changefreq: 'daily' },
    { url: `${baseUrl}/#research`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/#publications`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/#education`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/#news`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/#contact`, priority: '0.6', changefreq: 'yearly' },
  ];

  // ブログ記事
  const postSlugs = getAllPostSlugs();
  const blogPages = postSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // カテゴリページ
  const categories = ['astronomy', 'ai-education', 'coding', 'daily'];
  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/blog/category/${category}`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // XML生成
  const allPages = [...staticPages, ...blogPages, ...categoryPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // public/sitemap.xmlに保存
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ 静的サイトマップを生成しました: public/sitemap.xml');
  console.log(`📄 ${allPages.length} ページを含むサイトマップを作成`);
}

// 実行
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };