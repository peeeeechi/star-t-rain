export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'astronomy' | 'ai' | 'education' | 'research' | 'general';
  tags: string[];
  imageUrl?: string;
  readTime: number; // in minutes
  featured?: boolean;
  published: boolean; // 公開フラグ（true: 公開, false: 下書き）
}

export const blogPosts: BlogPost[] = [
  {
    id: 'maser-disk-wind-discovery',
    title: 'メーザーで見つけた大質量星の「円盤風」',
    excerpt: 'G59.783+0.065の観測から、大質量原始星周囲に「円盤風」と呼ばれる特殊なアウトフロー構造を発見しました。',
    content: `
      私たちの研究チームは、超長基線電波干渉計（VLBI）を用いた観測により、大質量原始星G59.783+0.065の周囲に
      「円盤風（disk wind）」と呼ばれる特殊な構造を発見しました。
      
      ## 観測の背景
      大質量星がどのように形成されるかは、現代天文学の重要な未解決問題の一つです。
      特に、原始星周囲の降着円盤とアウトフローの関係は、星形成過程を理解する鍵となります。
      
      ## 発見の詳細
      6.7 GHzメタノールメーザーと22 GHz水メーザーの同時観測により、
      円盤から垂直ではなく斜めに噴出する「円盤風」の存在を初めて明確に示しました。
      
      ## 今後の展望
      この発見は、大質量星形成理論に新たな制約を与えるもので、
      今後さらに詳細な観測を進めていく予定です。
    `,
    date: '2024-12-15',
    category: 'astronomy',
    tags: ['VLBI', 'メーザー', '星形成', '研究成果'],
    readTime: 5,
    featured: true,
    published: false, // 下書き状態
  },
  {
    id: 'ai-driven-development-education',
    title: 'GitHub Copilotで変わるプログラミング教育',
    excerpt: '生成AIを活用した新しいプログラミング教育の実践について、高専での授業事例を紹介します。',
    content: `
      高専の創造演習科目において、GitHub CopilotやChatGPTを活用した
      AI駆動開発の教育を実践しています。
      
      ## 従来の課題
      プログラミング初学者にとって、文法エラーやデバッグは大きな壁となっていました。
      多くの学生が、エラー解決に時間を取られ、本来の創造的な活動に集中できない状況でした。
      
      ## AI活用の効果
      - コーディング速度が平均2.5倍向上
      - エラー解決時間が60%短縮
      - より高度な機能実装への挑戦が増加
      
      ## 学生の反応
      「AIと対話しながらコードを書くことで、プログラミングが楽しくなった」
      という声が多く寄せられています。
    `,
    date: '2024-11-20',
    category: 'ai',
    tags: ['AI教育', 'GitHub Copilot', 'プログラミング', '高専'],
    readTime: 4,
    featured: true,
    published: false, // 下書き状態
  },
  {
    id: 'vlbi-workshop-2024',
    title: '東アジアVLBIワークショップ参加報告',
    excerpt: '韓国で開催された第14回東アジアVLBIワークショップに参加し、最新の研究成果を発表しました。',
    content: `
      2024年11月に韓国・ソウルで開催された東アジアVLBIワークショップに参加してきました。
      
      ## 発表内容
      「Multi-epoch VLBI observations of methanol masers in G59.783+0.065」
      というタイトルで、最新の観測結果を報告しました。
      
      ## 国際交流
      中国、韓国、日本の研究者との活発な議論を通じて、
      新たな共同研究の可能性を探ることができました。
      
      ## 技術動向
      次世代VLBI技術や、AIを活用したデータ解析手法など、
      最新の技術動向についても情報収集できました。
    `,
    date: '2024-11-10',
    category: 'research',
    tags: ['VLBI', '国際会議', '研究発表'],
    readTime: 3,
    published: false, // 下書き状態
  },
  {
    id: 'astronomy-education-outreach',
    title: '高専生と楽しむ天文観測会',
    excerpt: '秋の夜空を観察する観測会を開催。土星の環や木星の衛星に学生たちも感動！',
    content: `
      先日、高専の学生向けに天文観測会を開催しました。
      
      ## 観測対象
      - 土星：環の傾きが美しく観察できました
      - 木星：4つのガリレオ衛星を確認
      - 月：クレーターの詳細を観察
      
      ## 学生の反応
      「教科書で見るのと実際に見るのは全然違う！」という感想が印象的でした。
      
      ## 今後の計画
      季節ごとの観測会を定期開催し、より多くの学生に
      天文学の魅力を伝えていきたいと考えています。
    `,
    date: '2024-10-25',
    category: 'education',
    tags: ['天文教育', '観測会', '高専'],
    readTime: 3,
    published: false, // 下書き状態
  },
  {
    id: 'python-astronomy-tools',
    title: 'Pythonで作る天文データ解析ツール',
    excerpt: '観測データの可視化から解析まで、Pythonで効率化する方法を紹介します。',
    content: `
      天文観測データの解析にPythonを活用することで、
      研究効率が大幅に向上しました。
      
      ## 開発したツール
      - FITSファイル自動処理システム
      - メーザースペクトル解析ツール
      - 3D可視化プログラム
      
      ## 使用ライブラリ
      - NumPy, SciPy：数値計算
      - Matplotlib, Plotly：可視化
      - Astropy：天文データ処理
      
      ## オープンソース化
      開発したツールの一部はGitHubで公開予定です。
    `,
    date: '2024-09-30',
    category: 'ai',
    tags: ['Python', 'データ解析', 'プログラミング', '天文学'],
    readTime: 4,
    published: false, // 下書き状態
  },
  {
    id: 'kosen-conference-2024',
    title: '日本高専学会での発表を終えて',
    excerpt: 'AI駆動開発の教育実践について発表し、多くの先生方と意見交換ができました。',
    content: `
      第31回日本高専学会年会で、「演習型授業におけるモバイルアプリのAI駆動開発の実践」
      について発表しました。
      
      ## 発表のポイント
      - 生成AIを教育に活用する具体的方法
      - 学生の学習効果測定結果
      - 今後の課題と展望
      
      ## フィードバック
      他高専の先生方から貴重なご意見をいただき、
      さらなる改善のヒントを得ることができました。
    `,
    date: '2024-09-05',
    category: 'education',
    tags: ['学会発表', 'AI教育', '高専'],
    readTime: 3,
    published: false, // 下書き状態
  },
];

// ユーティリティ関数

// 公開済み記事のみを取得
export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published);
}

// すべての記事を取得（管理画面用）
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostsByCategory(category: BlogPost['category'], includeUnpublished = false): BlogPost[] {
  const posts = includeUnpublished ? blogPosts : getPublishedPosts();
  return posts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string, includeUnpublished = false): BlogPost[] {
  const posts = includeUnpublished ? blogPosts : getPublishedPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export function getFeaturedPosts(includeUnpublished = false): BlogPost[] {
  const posts = includeUnpublished ? blogPosts : getPublishedPosts();
  return posts.filter(post => post.featured);
}

export function getRecentPosts(limit: number = 5, includeUnpublished = false): BlogPost[] {
  const posts = includeUnpublished ? blogPosts : getPublishedPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getBlogPostById(id: string, includeUnpublished = false): BlogPost | undefined {
  const posts = includeUnpublished ? blogPosts : getPublishedPosts();
  return posts.find(post => post.id === id);
}