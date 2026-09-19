# ブログ記事への画像挿入ガイド

## 📸 画像の配置場所

画像ファイルは `public/images/blog/` 直下にフラットに配置してください（既存の公開記事も全てこの形式です。カテゴリ別サブフォルダは使っていません）：

```
public/
└── images/
    └── blog/
        ├── star-life-cycle.png
        ├── kaken_2025_submit.jpg
        └── ...
```

## 🖼️ Markdownでの画像挿入方法

> ⚠️ このブログのレンダラー（`MarkdownRenderer.tsx`）は`rehype-raw`を読み込んでいないため、本文中に`<div>`や`<img style="...">`のような生のHTMLタグを書いても**解釈されず、そのまま文字として表示されます**。装飾は以下のMarkdown記法の範囲で行ってください。

### 1. 基本的な画像挿入

```markdown
![VLBIアンテナ](/images/blog/vlbi-antenna.jpg)
```

画像は自動的に角丸・影付きで**中央寄せ**表示されます（`img`のカスタムレンダラーが全画像に適用するため、特別な記法は不要です）。

### 2. キャプションを付ける

`![alt](path "title")`のタイトル属性は現在のレンダラーでは表示されません。キャプションを付けたい場合は、画像の直後に斜体のMarkdown行を置いてください（実際に公開記事でも使われている書き方です）。

```markdown
![VERA観測網](/images/blog/vera-network.jpg)
*図1: VERA観測網の配置図*
```

### 3. 並列画像（2枚並べて比較する）

生HTMLのflex/gridは使えないため、Markdownの表（table）で代用します。

```markdown
| 観測前 | 観測後 |
|:---:|:---:|
| ![観測前](/images/blog/before.jpg) | ![観測後](/images/blog/after.jpg) |
| Epoch 1 (2024年1月) | Epoch 2 (2024年4月) |
```

### 4. サイズの指定について

現状、個別の画像に幅を指定する記法はサポートされていません。すべての画像はコンテンツ幅いっぱいまでレスポンシブに表示されます（高さは自動でアスペクト比を維持）。

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

![VERA観測網](/images/blog/vera-network.jpg)
*図1: VERA観測網の配置図*

## 観測結果

メタノールメーザーの空間分布を以下に示します：

![メーザー分布図](/images/blog/maser-distribution.png)
*図2: 6.7 GHz メタノールメーザーの空間分布（観測日：2024年10月）*

### 時系列変化

3ヶ月ごとの観測結果を比較すると、明確な変動が確認できました。

| Epoch 1 (2024年1月) | Epoch 2 (2024年4月) |
|:---:|:---:|
| ![Epoch 1](/images/blog/epoch1.jpg) | ![Epoch 2](/images/blog/epoch2.jpg) |
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

`public/images/blog/`配下のローカル画像は、記事ページ描画時（`lib/image-dimensions.ts`）に実ファイルを読んで実際の width/height を自動取得し、その値を使って`next/image`で配信されます（`components/MarkdownRenderer.tsx`）。これにより：

- 自動的な画像最適化・圧縮
- 遅延読み込み（Lazy Loading）
- レスポンシブなsrcSet生成
- 対応ブラウザ向けのフォーマット変換

寸法が取得できない画像（ファイルが存在しない・外部URLなど）は、通常の`<img>`タグに自動フォールバックし、読み込みエラー時は代替表示（📷 画像を読み込めません）が出ます。特別な設定は不要で、`public/images/blog/`に画像を置いてMarkdownで参照するだけで最適化が効きます。

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

![研究成果のグラフ](/images/blog/results-graph.png)

上図に示すように、観測により新たな知見が得られました。
```

3. コミット時に画像ファイルも含める：

```bash
git add public/images/blog/results-graph.png
git add content/blog/your-article.md
git commit -m "Add article with research results graph"
```

---

*最終更新: 2026年9月19日*