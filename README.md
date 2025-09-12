# Star-T-Rain - 研究者向けポートフォリオサイト

高専技術者・研究者 中村桃太朗のポートフォリオサイト。電波天文学とAI技術を融合した二軸研究活動を紹介するWebサイトです。

## ✨ デュアルスタイルシステム

このプロジェクトは**2つのスタイルバージョン**を提供し、用途に応じて簡単に切り替えることができます：

### 🌟 リッチスタイル（現在）
- 豪華な星空効果とパーティクルアニメーション
- 3Dカード効果と立体的なホバーエフェクト
- ガラスモーフィズムとブラー効果
- 複雑なグラデーションと光の効果

### 🎯 シンプルスタイル
- クリーンで読みやすいデザイン
- 高速な読み込みとパフォーマンス
- アクセシビリティ重視
- 幅広いデバイスで安定動作

### スタイル切り替え方法
詳細な切り替え方法は **[STYLE_SWITCHER.md](./STYLE_SWITCHER.md)** をご覧ください。

```bash
# シンプルスタイルに切り替え
git checkout simple-style-backup

# リッチスタイルに戻す
git checkout main
```

## 🚀 技術スタック

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v3 with Custom Animations
- **Icons**: Lucide React
- **Typography**: Inter, Merriweather, JetBrains Mono
- **Contact Form**: EmailJS
- **Deployment**: Vercel
- **Language**: TypeScript

## 🎨 特徴的な機能

- **二軸研究紹介**: 電波天文学とAI技術の専門分野を視覚的に表現
- **インタラクティブ星空**: リアルタイム星空アニメーション
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **ダークモード対応**: システム設定に連動
- **ブログシステム**: 拡張可能な記事管理システム
- **連絡フォーム**: EmailJSによる直接メール送信

## 🛠️ セットアップ

### 必要な環境
- Node.js 18以上
- npm, yarn, pnpm, bun のいずれか

### インストールと起動

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトにアクセスできます。

### 環境変数設定（オプション）

連絡フォーム機能を使用する場合は、EmailJSの設定が必要です：

```bash
# .env.localに以下を設定
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 プロジェクト構成

```
star-t-rain/
├── app/                    # Next.js App Router
├── components/             # Reactコンポーネント
│   ├── HeroSection.tsx     # ヒーローセクション
│   ├── Navigation.tsx      # ナビゲーション
│   ├── ResearchSection.tsx # 研究分野紹介
│   ├── BlogSection.tsx     # ブログシステム
│   └── ContactSection.tsx  # 連絡フォーム
├── lib/                    # ユーティリティ関数
│   └── blog-data.ts        # ブログデータ管理
├── public/                 # 静的ファイル
├── tailwind.config.ts      # Tailwind設定
└── STYLE_SWITCHER.md       # スタイル切り替えガイド
```

## 🎯 ブランチ構成

- `main`: リッチスタイル（メイン本番環境）
- `simple-style-backup`: シンプルスタイル（代替バージョン）

## 📝 開発ガイド

### カスタムアニメーションの追加

新しいアニメーションは `tailwind.config.ts` で定義：

```typescript
animation: {
  'custom-animation': 'custom-animation 3s ease-in-out infinite',
},
keyframes: {
  'custom-animation': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  }
}
```

### ブログ記事の追加

`lib/blog-data.ts` で記事を管理：

```typescript
{
  id: 'unique-id',
  title: '記事タイトル',
  published: true, // 公開フラグ
  category: 'research',
  // ... その他の設定
}
```

### パフォーマンス最適化

- リッチスタイル使用時は `reduce-motion` 設定の確認
- 画像最適化のため Next.js Image コンポーネントを使用
- バンドルサイズ監視のため `npm run build` での確認

## 🚀 デプロイ

### Vercelへのデプロイ

1. **リッチスタイルをデプロイ**:
```bash
git push origin main
```

2. **シンプルスタイルをデプロイ**:
```bash
git checkout simple-style-backup
git push origin main --force
```

### 継続的デプロイ

メインブランチへのプッシュで自動的にVercelにデプロイされます。

## 📊 パフォーマンス

### リッチスタイル
- ファーストコンテントフルペイント: ~2s
- 豊富なアニメーション効果
- 高性能デバイス推奨

### シンプルスタイル
- ファーストコンテントフルペイント: ~1s
- 軽量でパフォーマンス重視
- 全デバイス対応

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを開く

## 📄 ライセンス

このプロジェクトは個人ポートフォリオサイトです。商用利用を除き、学習・参考目的での使用は自由です。

## 📧 連絡先

- **サイト**: [star-t-rain.vercel.app](https://star-t-rain.vercel.app)
- **GitHub**: [peeeeechi/star-t-rain](https://github.com/peeeeechi/star-t-rain)
- **お問い合わせ**: サイトの連絡フォームをご利用ください

---

**Made with ❤️ using Next.js & Tailwind CSS**

> 「星になりたい雨」の名前の通り、研究活動を通じて輝く星を目指すポートフォリオサイトです。