'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  type: 'journal' | 'conference' | 'book' | 'media';
  category: 'astronomy' | 'ai-education' | 'interdisciplinary';
  citations?: number;
}

export default function PublicationsSection() {
  const [selectedType, setSelectedType] = useState<
    'all' | 'journal' | 'conference' | 'book' | 'media'
  >('all');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'astronomy' | 'ai-education' | 'interdisciplinary'
  >('all');
  const [selectedYear, setSelectedYear] = useState<'all' | number>('all');

  const publications: Publication[] = [
    // === 天文学関連論文 ===
    {
      id: '1',
      title:
        'A kinematic study of the disc-outflow system around a high-mass protostar G59.783+0.065 probed by methanol and water masers',
      authors: 'M Nakamura, K Motogi, H Nakamura, Y Yonekura, K Fujisawa',
      journal: 'Monthly Notices of the Royal Astronomical Society',
      year: 2023,
      doi: '10.1093/mnras/stad2725',
      type: 'journal',
      category: 'astronomy',
      citations: 2,
    },
    {
      id: '2',
      title:
        'メタノールメーザーと水メーザーで探る大質量原始星 G59.783+0.065 周囲のダイナミクス',
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
    {
      id: '4',
      title:
        'New insights on the high-mass star formation using methanol and water masers in G59.783+0.065',
      authors: ' ',
      journal: 'News from e-MERLIN & VLBI',
      year: 2024,
      type: 'media',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '5',
      title:
        'メーザーから辿る大質量星形成領域 G59.783+0.065 の円盤 - アウトフロー構造',
      authors: '中村桃太朗',
      journal: '大質量星形成ワークショップ2024',
      year: 2024,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '6',
      title: 'メーザーで捉える大質量原始星円盤周囲の回転＋降着/膨張流',
      authors: '中村 桃太朗',
      journal: 'VLBI懇談会シンポジウム2023',
      year: 2023,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '7',
      title:
        'A kinematic study of the disk-outflow system around a high-mass protostar G59 probing methanol and water masers',
      authors: 'Momotaro Nakamura, Kazuhito Motogi, Kenta Fujisawa',
      journal: '13th East Asian VLBI Workshop 2021',
      year: 2021,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '8',
      title:
        '6.7 GHz メタノールメーザーは大質量原始星からの「円盤風」に付随する？',
      authors: '中村桃太朗, 元木業人, 藤沢健太',
      journal: 'VLBI懇談会シンポジウム2020',
      year: 2020,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
    {
      id: '9',
      title:
        'Are 6.7-GHz methanol masers associated with protostellar outflow? 〜 A study of internal proper motion in HMSFR G 59.783+0.065 〜',
      authors: '中村桃太朗, 元木業人, 藤沢健太',
      journal: '第18回 水沢VLBI観測所ユーザーズミーティング',
      year: 2020,
      type: 'conference',
      category: 'astronomy',
      citations: 0,
    },
  ];

  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  const filteredPublications = publications.filter((pub) => {
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    const categoryMatch =
      selectedCategory === 'all' || pub.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || pub.year === selectedYear;
    return typeMatch && categoryMatch && yearMatch;
  });

  const typeLabels = {
    all: 'すべて',
    journal: '論文',
    conference: '学会発表',
    book: '書籍',
    media: 'メディア',
  };
  return (
    <section id="publications" className="site-section">
      <SectionHeading
        number="03"
        label="PUBLICATIONS"
        title="探究の足跡。"
        description="論文・学会発表・メディア掲載を通して、研究の成果を共有しています。"
      />
      <div className="publication-controls">
        <div className="filter-tabs">
          {(Object.keys(typeLabels) as Array<keyof typeof typeLabels>).map(
            (type) => (
              <button
                key={type}
                aria-pressed={selectedType === type}
                onClick={() => setSelectedType(type)}
              >
                {typeLabels[type]}
              </button>
            ),
          )}
        </div>
        <div className="select-filters">
          <label>
            <span className="sr-only">業績の分野</span>
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value as typeof selectedCategory)
              }
            >
              <option value="all">すべての分野</option>
              <option value="astronomy">天文学</option>
              <option value="ai-education">AI教育</option>
              <option value="interdisciplinary">学際研究</option>
            </select>
          </label>
          <label>
            <span className="sr-only">業績の年度</span>
            <select
              value={selectedYear}
              onChange={(e) =>
                setSelectedYear(
                  e.target.value === 'all' ? 'all' : Number(e.target.value),
                )
              }
            >
              <option value="all">すべての年度</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="publication-list">
        {filteredPublications.map((pub) => (
          <article key={pub.id} className="publication-row" data-reveal="body">
            <div className="publication-year mono">
              {pub.year}
              <small>{typeLabels[pub.type]}</small>
            </div>
            <div>
              <h3>
                {pub.doi ? (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                    <ArrowUpRight size={18} />
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-journal">{pub.journal}</p>
            </div>
          </article>
        ))}
        {!filteredPublications.length && (
          <p className="empty-state">この条件に該当する業績はありません。</p>
        )}
      </div>
      <a
        className="text-link section-end-link"
        href="https://researchmap.jp/kibidango_sun"
        target="_blank"
        rel="noopener noreferrer"
      >
        researchmapで研究者情報を見る <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
