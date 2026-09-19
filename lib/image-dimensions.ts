import fs from 'fs';
import path from 'path';
import { imageSize } from 'image-size';

export interface ImageDimensions {
  width: number;
  height: number;
}

// Markdown の `![alt](/path)` と生HTMLの `<img src="/path">` から
// ローカル画像 (public/ 配下) のパスを抜き出す
const MARKDOWN_IMAGE_RE = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const HTML_IMAGE_RE = /<img[^>]*\ssrc=["']([^"']+)["'][^>]*>/g;

function extractLocalImagePaths(content: string): string[] {
  const paths = new Set<string>();

  for (const re of [MARKDOWN_IMAGE_RE, HTML_IMAGE_RE]) {
    for (const match of content.matchAll(re)) {
      const src = match[1];
      // ローカルの public/ 配下の絶対パスのみ対象（外部URLは対象外）
      if (src && src.startsWith('/')) {
        paths.add(src);
      }
    }
  }

  return Array.from(paths);
}

// 記事本文中のローカル画像について、実ファイルから width/height を読み取る
// (next/image に正しいアスペクト比を渡すため)
export function getLocalImageDimensions(content: string): Record<string, ImageDimensions> {
  const dimensions: Record<string, ImageDimensions> = {};

  for (const src of extractLocalImagePaths(content)) {
    try {
      const filePath = path.join(process.cwd(), 'public', src);
      const buffer = fs.readFileSync(filePath);
      const size = imageSize(buffer);
      if (size.width && size.height) {
        dimensions[src] = { width: size.width, height: size.height };
      }
    } catch {
      // ファイルが無い/読めない場合はスキップ（描画側でプレーンな img にフォールバック）
    }
  }

  return dimensions;
}
