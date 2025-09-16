# SEO設定ガイド

## Google Search Console 認証設定

### 手順

1. [Google Search Console](https://search.google.com/search-console) にアクセス
2. 「プロパティを追加」をクリック
3. URLプレフィックスを選択し、`https://star-t-rain.vercel.app` を入力
4. 認証方法から「HTMLタグ」を選択
5. 表示されたメタタグから `content="..."` の値をコピー
   ```html
   <meta name="google-site-verification" content="ここの値をコピー" />
   ```

6. `/app/layout.tsx` ファイルを開き、55行目の verification を更新：
   ```typescript
   verification: {
     google: "コピーした認証コード", // 実際のコードに変更
   },
   ```

7. 変更をコミット・プッシュしてデプロイ
8. Google Search Console に戻り「確認」をクリック

### 環境変数での管理（推奨）

セキュリティを高めるため、環境変数での管理を推奨します：

1. Vercelのダッシュボードにアクセス
2. プロジェクトの Settings → Environment Variables
3. 新規変数を追加：
   - Name: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: 認証コード

4. `/app/layout.tsx` を更新：
   ```typescript
   verification: {
     google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
   },
   ```

## 実装済みのSEO対策

### ✅ 技術的SEO
- **動的サイトマップ生成** (`/app/sitemap.ts`)
  - ブログ記事を自動的に含む
  - カテゴリーページも網羅

- **robots.txt** (`/app/robots.ts`)
  - 動的生成による最新状態の維持

### ✅ メタデータ最適化
- **基本メタタグ**
  - タイトル、説明、キーワード
  - 著者情報、パブリッシャー情報

- **Open Graph タグ**
  - SNS共有時の表示最適化
  - 画像、タイトル、説明の設定

- **Twitter Card**
  - Twitter共有時の大型画像カード表示

### ✅ 構造化データ（リッチリザルト）
- **Person Schema** - 研究者情報
- **Organization Schema** - 研究室情報
- **Website Schema** - サイト情報
- **BreadcrumbList** - パンくずリスト
- **FAQPage** - よくある質問
- **Course** - 教育コース情報

### ✅ 画像最適化
- **詳細なalt属性**
  - SEOキーワードを含む説明的なalt文
  - アクセシビリティの向上

### ✅ ブログSEO
- **個別記事メタデータ**
  - 記事ごとの動的メタタグ生成
  - Article構造化データ

## パフォーマンス最適化のヒント

### Core Web Vitals
1. **画像の遅延読み込み**
   - `LazyImage` コンポーネント使用済み

2. **フォントの最適化**
   - Next.js の font optimization 活用

3. **バンドルサイズ削減**
   - 動的インポートの活用
   - 不要な依存関係の削除

## 定期的なメンテナンス

### 月次チェックリスト
- [ ] Google Search Console のエラー確認
- [ ] サイトマップの正常動作確認
- [ ] 新規コンテンツのインデックス状況
- [ ] Core Web Vitals スコアの確認

### 四半期ごと
- [ ] キーワード順位の確認
- [ ] 競合サイトの分析
- [ ] 構造化データのテスト（[リッチリザルトテスト](https://search.google.com/test/rich-results)）

## 便利なツール

- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [構造化データテストツール](https://search.google.com/test/rich-results)
- [モバイルフレンドリーテスト](https://search.google.com/test/mobile-friendly)