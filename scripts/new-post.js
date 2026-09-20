/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const VALID_CATEGORIES = ['astronomy', 'technology', 'education', 'research', 'general'];

function printUsageAndExit() {
  console.error(`使い方: npm run new-post -- <slug> "<タイトル>" [オプション]

  <slug>      ファイル名・URLに使う半角英数とハイフンのみ（例: vlbi-2026-report）
  <タイトル>   記事タイトル（日本語可、引用符で囲む）

オプション:
  --category=<${VALID_CATEGORIES.join('|')}>  (既定: general)
  --author="<著者名>"    (既定: peeeeechi)
  --excerpt="<要約>"     (既定: TODOプレースホルダー)
  --tags=タグ1,タグ2      (既定: なし)
  --date=YYYY-MM-DD      (既定: 今日。未来日付にすると予約投稿になる。下記参照)
  --publish              作成時点で published: true にする（既定は下書き=false）

予約投稿について:
  published: true のまま date を未来日付にすると「予約投稿」になります。
  その日時が来るまでサイトには表示されず（一覧にも出ず、URLに直接アクセスしても404）、
  日時を過ぎると毎日1回のバッチ処理で自動的に公開されます（再度のpush操作は不要）。
  時刻まで指定したい場合は date に "2026-09-27T09:00:00+09:00" のようにISO形式で書けます
  （日付だけの場合はUTC 0時＝日本時間9時に公開されます）。

例:
  npm run new-post -- vlbi-2026-report "VLBI観測レポート2026" --category=research --publish
  npm run new-post -- vlbi-2026-report-2 "続報" --category=research --publish --date=2026-10-04
`);
  process.exit(1);
}

function today() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (const arg of argv) {
    if (arg.startsWith('--')) {
      const [key, ...rest] = arg.slice(2).split('=');
      flags[key] = rest.length > 0 ? rest.join('=') : true;
    } else {
      positional.push(arg);
    }
  }
  return { positional, flags };
}

function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const [slug, title] = positional;

  if (!slug || !title) printUsageAndExit();

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    console.error(`❌ slugは半角英数字とハイフンのみで指定してください（例: vlbi-2026-report）。指定値: "${slug}"`);
    process.exit(1);
  }

  const category = flags.category || 'general';
  if (!VALID_CATEGORIES.includes(category)) {
    console.error(`❌ categoryは ${VALID_CATEGORIES.join(', ')} のいずれかを指定してください。指定値: "${category}"`);
    process.exit(1);
  }

  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const filePath = path.join(contentDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ 既に存在します: content/blog/${slug}.md`);
    process.exit(1);
  }

  const author = flags.author || 'peeeeechi';
  const excerpt = flags.excerpt || 'TODO: 100〜150文字程度で記事の要約を書く';
  const tags = flags.tags
    ? flags.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : [];
  const published = Boolean(flags.publish);

  const dateValue = typeof flags.date === 'string' ? flags.date : today();
  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    console.error(`❌ dateが正しい日付として解釈できません。指定値: "${dateValue}"`);
    process.exit(1);
  }
  const isScheduled = published && parsedDate.getTime() > Date.now();

  const tagsYaml = tags.length > 0
    ? `[${tags.map((t) => `"${t}"`).join(', ')}]`
    : '[]';

  const frontmatter = `---
title: "${title}"
date: "${dateValue}"
excerpt: "${excerpt}"
category: "${category}"
tags: ${tagsYaml}
author: "${author}"
published: ${published}
---

## はじめに

`;

  fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(filePath, frontmatter);

  console.log(`✅ 作成しました: content/blog/${slug}.md`);
  if (isScheduled) {
    console.log(`   公開状態: 予約投稿 (${dateValue} に自動公開)`);
  } else {
    console.log(`   公開状態: ${published ? '公開 (published: true)' : '下書き (published: false)'}`);
  }
  if (!published) {
    console.log('   本文を書き終えたら published: true に変更し、commit & push してください。');
  }
}

main();
