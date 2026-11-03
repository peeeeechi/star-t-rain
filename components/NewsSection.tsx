'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'research' | 'award' | 'event' | 'media';
  link?: string;
}

export default function NewsSection() {
  const newsItems: NewsItem[] = [
    {
      id: '7',
      date: '2026.09.08',
      title: '日本天文学会2026年秋季年会に参加',
      description:
        '岡山理科大学で開催された日本天文学会2026年秋季年会に参加し、最新の天文学研究の動向をキャッチアップしました。',
      category: 'event',
    },
    {
      id: '1',
      date: '2025.09.09',
      title: '日本天文学会2025年秋季年会で講演',
      description:
        'メタノールメーザーと水メーザーで探る大質量原始星 G59.783+0.065 周囲のダイナミクスについて発表しました。',
      category: 'research',
      link: 'https://www.asj.or.jp/nenkai/archive/2025b/pdf/P114a.pdf',
    },
    {
      id: '2',
      date: '2025.09.04',
      title: '日本高専学会でAI教育実践を発表',
      description:
        '演習型授業におけるモバイルアプリのAI駆動開発の実践について報告しました。',
      category: 'research',
      link: 'https://jact.sakura.ne.jp/nenkai/nenkai31/jact31_program_oral_20250822.pdf',
    },
    {
      id: '3',
      date: '2025.04.01',
      title: '山口大学非常勤講師でキャリアデザインⅡを担当',
      description:
        '山口大学大学院創成科学研究科にて「キャリアデザインⅡ」の非常勤講師を担当しています。',
      category: 'event',
    },
    {
      id: '4',
      date: '2024.06.01',
      title: 'e-MERLIN Newsで研究成果が紹介',
      description:
        'G59.783+0.065におけるVLBI観測の研究が e-MERLIN News で紹介されました。',
      category: 'media',
      link: 'https://www.e-merlin.ac.uk/news.html#Nakamura',
    },
    {
      id: '5',
      date: '2023.09.11',
      title: 'MNRAS誌に主著論文掲載',
      description:
        'メタノールと水メーザーによる大質量原始星の運動学的研究がMNRASに掲載されました。',
      category: 'research',
      link: 'https://doi.org/10.1093/mnras/stad2725',
    },
    {
      id: '6',
      date: '2021.03.01',
      title: '山口大学大学院創成科学研究科長表彰受賞',
      description:
        '博士前期課程における研究成果が評価され、研究科長表彰を受賞しました。',
      category: 'award',
      link: 'https://www.yamaguchi-u.ac.jp/sci/wp-content/uploads/2022/07/sci_wonderla30.pdf',
    },
  ];

  const [all, setAll] = useState(false);
  const labels = {
    research: '研究',
    award: '受賞',
    event: 'イベント',
    media: 'メディア',
  };
  return (
    <section id="news" className="site-section news-section">
      <SectionHeading
        number="01"
        label="NEWS & UPDATES"
        title="研究室からのお知らせ"
      />
      <div className="news-list">
        {(all ? newsItems : newsItems.slice(0, 3)).map((item) => (
          <article className="news-row" key={item.id}>
            <time className="mono">{item.date}</time>
            <span className="category-label">{labels[item.category]}</span>
            <div>
              <h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        className="text-link section-end-link"
        onClick={() => setAll(!all)}
        aria-expanded={all}
      >
        {all ? '最新のお知らせに戻る' : '過去のお知らせも見る'}{' '}
        <span aria-hidden="true">{all ? '−' : '+'}</span>
      </button>
    </section>
  );
}
