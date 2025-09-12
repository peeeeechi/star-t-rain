'use client';

import { useState } from 'react';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  type: 'journal' | 'conference' | 'book';
  category: 'astronomy' | 'ai-education' | 'interdisciplinary';
  citations?: number;
}

export default function PublicationsSection() {
  const [selectedType, setSelectedType] = useState<'all' | 'journal' | 'conference' | 'book'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'astronomy' | 'ai-education' | 'interdisciplinary'>('all');
  const [selectedYear, setSelectedYear] = useState<'all' | number>('all');

  const publications: Publication[] = [
    // === 天文学関連論文 ===
    {
      id: '1',
      title: 'A kinematic study of the disc-outflow system around a high-mass protostar G59.783+0.065 probed by methanol and water masers',
      authors: 'M Nakamura, K Motogi, H Nakamura, Y Yonekura, K Fujisawa',
      journal: 'Monthly Notices of the Royal Astronomical Society',
      year: 2023,
      doi: '10.1093/mnras/stad2725',
      type: 'journal',
      category: 'astronomy',
      citations: 1,
    },
    {
      id: '2',
      title: 'メタノールメーザーと水メーザーで探る大質量原始星 G59.783+0.065 周囲のダイナミクス',
      authors: '中村 桃太朗, 元木 業人, 藤沢 健太, 米倉 覚則',
      journal: '日本天文学会 2025年秋季年会',
      year: 2025,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },

    // === AI・教育関連論文 ===
    {
      id: '3',
      title: '演習型授業におけるモバイルアプリのAI駆動開発の実践',
      authors: '中村 桃太朗, 地迫 優衣, 宮川 智美, CHULUUNSUKH MUNKHKHOROL',
      journal: '日本高専学会 第31回年会講演会',
      year: 2025,
      type: 'conference',
      category: 'ai-education',
      citations: 0,
    },
    // {
    //   id: '4',
    //   title: 'GitHub Copilotを活用したプログラミング教育の実践報告',
    //   authors: '中村 桃太朗',
    //   journal: '情報処理学会 コンピュータと教育研究会',
    //   year: 2024,
    //   type: 'conference',
    //   category: 'ai-education',
    //   citations: 0,
    // },

    // === 学際研究 ===
    // {
    //   id: '5',
    //   title: 'Python による天文観測データ解析システムの開発と教育応用',
    //   authors: '中村 桃太朗, 情報工学科学生',
    //   journal: '高専教育フォーラム',
    //   year: 2024,
    //   type: 'conference',
    //   category: 'interdisciplinary',
    //   citations: 0,
    // },
    {
      id: '4',
      title: 'メーザーから辿る大質量星形成領域 G59.783+0.065 の円盤 - アウトフロー構造',
      authors: '中村桃太朗',
      journal: '大質量星形成ワークショップ2024',
      year: 2024,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '5',
      title: 'メーザーで捉える大質量原始星円盤周囲の回転＋降着/膨張流',
      authors: '中村 桃太朗',
      journal: 'VLBI懇談会シンポジウム2023',
      year: 2023,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '6',
      title: 'A kinematic study of the disk-outflow system around a high-mass protostar G59 probing methanol and water masers',
      authors: 'Momotaro Nakamura, Kazuhito Motogi, Kenta Fujisawa',
      journal: '13th East Asian VLBI Workshop 2021',
      year: 2021,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '7',
      title: '6.7 GHz メタノールメーザーは大質量原始星からの「円盤風」に付随する？',
      authors: '中村桃太朗, 元木業人, 藤沢健太',
      journal: 'VLBI懇談会シンポジウム2020',
      year: 2020,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '8',
      title: 'Are 6.7-GHz methanol masers associated with protostellar outflow? 〜 A study of internal proper motion in HMSFR G 59.783+0.065 〜',
      authors: '中村桃太朗, 元木業人, 藤沢健太',
      journal: '第18回 水沢VLBI観測所ユーザーズミーティング',
      year: 2020,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
  ];

  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);

  const filteredPublications = publications.filter(pub => {
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    const categoryMatch = selectedCategory === 'all' || pub.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || pub.year === selectedYear;
    return typeMatch && categoryMatch && yearMatch;
  });

  const stats = {
    total: publications.length,
    journals: publications.filter(pub => pub.type === 'journal').length,
    conferences: publications.filter(pub => pub.type === 'conference').length,
    citations: publications.reduce((sum, pub) => sum + (pub.citations || 0), 0),
  };

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-stellar-600 to-cosmic-600 bg-clip-text text-transparent">
              研究業績
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            査読付き論文、国際会議、著書など
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-cosmic-600 dark:text-cosmic-400">{stats.journals}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">論文数</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-stellar-600 dark:text-stellar-400">{stats.conferences}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">学会発表数</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-nebula-600 dark:text-nebula-400">{stats.citations}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">総引用数</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {/* 研究分野でのフィルタ */}
          <div className="flex gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 self-center mr-2">分野:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              全て
            </button>
            <button
              onClick={() => setSelectedCategory('astronomy')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedCategory === 'astronomy'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              🔭 天文学
            </button>
            <button
              onClick={() => setSelectedCategory('ai-education')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedCategory === 'ai-education'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              🤖 AI教育
            </button>
            <button
              onClick={() => setSelectedCategory('interdisciplinary')}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedCategory === 'interdisciplinary'
                  ? 'bg-stellar-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              🔬 学際
            </button>
          </div>

          {/* 論文種別でのフィルタ */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === 'all'
                  ? 'bg-cosmic-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              全て
            </button>
            <button
              onClick={() => setSelectedType('journal')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === 'journal'
                  ? 'bg-cosmic-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              論文
            </button>
            <button
              onClick={() => setSelectedType('conference')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === 'conference'
                  ? 'bg-cosmic-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              会議
            </button>
            <button
              onClick={() => setSelectedType('book')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === 'book'
                  ? 'bg-cosmic-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              書籍
            </button>
          </div>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
          >
            <option value="all">全年度</option>
            {years.map(year => (
              <option key={year} value={year}>{year}年</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    <span className="font-medium">{pub.journal}</span>
                    {pub.doi && (
                      <>
                        {' • '}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cosmic-600 dark:text-cosmic-400 hover:underline"
                        >
                          DOI: {pub.doi}
                        </a>
                      </>
                    )}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6 flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-stellar-600 dark:text-stellar-400">
                      {pub.year}
                    </div>
                    <div className="text-xs text-gray-500">年</div>
                  </div>
                  {pub.type === 'journal' && pub.citations !== undefined && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-nebula-600 dark:text-nebula-400">
                        {pub.citations}
                      </div>
                      <div className="text-xs text-gray-500">引用</div>
                    </div>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pub.type === 'journal'
                      ? 'bg-cosmic-100 text-cosmic-700 dark:bg-cosmic-900 dark:text-cosmic-300'
                      : pub.type === 'conference'
                      ? 'bg-stellar-100 text-stellar-700 dark:bg-stellar-900 dark:text-stellar-300'
                      : 'bg-nebula-100 text-nebula-700 dark:bg-nebula-900 dark:text-nebula-300'
                  }`}>
                    {pub.type === 'journal' ? '論文' : pub.type === 'conference' ? '会議' : '書籍'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-cosmic-600 text-white rounded-full hover:bg-cosmic-700 transition-colors shadow-lg"
          >
            全ての業績を見る
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}