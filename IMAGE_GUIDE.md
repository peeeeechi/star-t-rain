# ブログ記事への画像挿入ガイド

## 📸 画像の配置場所

画像ファイルは以下のディレクトリに配置してください：

```
public/
└── images/
    └── blog/
        ├── astronomy/      # 天文学カテゴリの画像
        ├── technology/     # 技術カテゴリの画像
        ├── research/       # 研究カテゴリの画像
        └── general/        # 一般記事の画像
```

## 🖼️ Markdownでの画像挿入方法

### 1. 基本的な画像挿入

```markdown
![VLBIアンテナ](/images/blog/astronomy/vlbi-antenna.jpg)
```

### 2. キャプション付き画像

```markdown
![野辺山45m電波望遠鏡](/images/blog/astronomy/nobeyama-45m.jpg "野辺山宇宙電波観測所の45m電波望遠鏡")
```

### 3. 中央寄せの画像

```markdown
<div align="center">

![ALMAアンテナ群](/images/blog/astronomy/alma-array.jpg)

*図1: アタカマ大型ミリ波サブミリ波干渉計（ALMA）のアンテナ群*

</div>
```

### 4. 並列画像（2枚並べる）

```markdown
<div style="display: flex; gap: 10px; margin: 20px 0;">
  <img src="/images/blog/research/before.jpg" alt="観測前" style="width: 50%;" />
  <img src="/images/blog/research/after.jpg" alt="観測後" style="width: 50%;" />
</div>
```

### 5. サイズを指定した画像

```markdown
<img src="/images/blog/technology/diagram.png" alt="システム構成図" style="width: 100%; max-width: 600px; height: auto;" />
```

## 📝 実際の記事での使用例

```markdown
---
title: "VLBIによる大質量星形成領域の観測"
date: "2025-01-15"
excerpt: "最新のVLBI観測結果を画像付きで解説"
category: "astronomy"
---

## 観測装置の紹介

今回使用したVERA（VLBI Exploration of Radio Astrometry）は、日本国内に4局の電波望遠鏡を配置した観測網です。

![VERA観測網](/images/blog/astronomy/vera-network.jpg)
*図1: VERA観測網の配置図*

## 観測結果

メタノールメーザーの空間分布を以下に示します：

<div align="center">

![メーザー分布図](/images/blog/research/maser-distribution.png)

*図2: 6.7 GHz メタノールメーザーの空間分布（観測日：2024年10月）*

</div>

### 時系列変化

3ヶ月ごとの観測結果を比較すると、明確な変動が確認できました。

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div>
    <img src="/images/blog/research/epoch1.jpg" alt="Epoch 1" style="width: 100%;" />
    <p style="text-align: center; font-size: 0.9em; color: #666;">Epoch 1 (2024年1月)</p>
  </div>
  <div>
    <img src="/images/blog/research/epoch2.jpg" alt="Epoch 2" style="width: 100%;" />
    <p style="text-align: center; font-size: 0.9em; color: #666;">Epoch 2 (2024年4月)</p>
  </div>
</div>
```

## 🎨 画像の最適化

### 推奨フォーマット
- **写真**: JPEG (.jpg, .jpeg) - 圧縮率70-80%
- **図表・グラフ**: PNG (.png) - 透過が必要な場合
- **アニメーション**: GIF (.gif) - 簡単な動画
- **高品質画像**: WebP (.webp) - 最新ブラウザ対応

### 推奨サイズ
- **記事内画像**: 最大幅 1200px
- **サムネイル**: 600x400px
- **ファイルサイズ**: 500KB以下を推奨

### ファイル名の規則
```
良い例:
- vlbi-antenna-nobeyama.jpg
- maser-spectrum-2024-10.png
- stellar-formation-diagram.svg

避けるべき例:
- IMG_1234.jpg
- スクリーンショット 2024-01-15.png
- image(1).png
```

## 🔧 Next.js Image コンポーネントの活用

MarkdownRendererでは、画像は自動的にNext.jsのImageコンポーネントで処理されます：

```jsx
// components/MarkdownRenderer.tsx での処理
img: ({ src, alt }) => {
  return (
    <div className="my-8 flex justify-center">
      <Image
        src={src}
        alt={alt || ''}
        width={800}
        height={600}
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
}
```

これにより：
- 自動的な画像最適化
- 遅延読み込み（Lazy Loading）
- レスポンシブ対応
- WebP変換（対応ブラウザ）

## 📌 注意事項

1. **著作権**: 使用する画像の著作権を確認
2. **アクセシビリティ**: 必ず代替テキスト（alt属性）を設定
3. **パス**: 画像パスは必ず `/images/` から始まる絶対パスを使用
4. **バックアップ**: オリジナル画像は別途保管しておく

## 🚀 実装例

新しい記事に画像を追加する場合：

1. 画像を `public/images/blog/` に配置
2. Markdown記事内で参照：

```markdown
## 研究成果

![研究成果のグラフ](/images/blog/research/results-graph.png)

上図に示すように、観測により新たな知見が得られました。
```

3. コミット時に画像ファイルも含める：

```bash
git add public/images/blog/research/results-graph.png
git add content/blog/your-article.md
git commit -m "Add article with research results graph"
```

---

*最終更新: 2025年1月14日*