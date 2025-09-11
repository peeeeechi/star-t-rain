'use client';

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
      id: '1',
      date: '2025.09.09',
      title: '日本天文学会2025年秋季年会で講演',
      description: 'メタノールメーザーと水メーザーで探る大質量原始星 G59.783+0.065 周囲のダイナミクスについて発表しました。',
      category: 'research',
    },
    {
      id: '2',
      date: '2025.09.04',
      title: '日本高専学会でAI教育実践を発表',
      description: '演習型授業におけるモバイルアプリのAI駆動開発の実践について報告しました。',
      category: 'research',
    },
    {
      id: '3',
      date: '2025.04.01',
      title: '山口大学非常勤講師に就任',
      description: '山口大学大学院創成科学研究科にて「キャリアデザインⅡ」の非常勤講師を担当しています。',
      category: 'event',
    },
    {
      id: '4',
      date: '2024.06.01',
      title: 'e-MERLIN Newsで研究成果が紹介',
      description: 'G59.783+0.065における大質量星形成研究が e-MERLIN News で紹介されました。',
      category: 'media',
      link: 'https://e-merlin.ac.uk/',
    },
    {
      id: '5',
      date: '2023.09.11',
      title: 'MNRAS誌に主著論文掲載',
      description: 'メタノールと水メーザーによる大質量原始星の運動学的研究がMNRASに掲載されました。',
      category: 'research',
      link: '#',
    },
    {
      id: '6',
      date: '2021.03.01',
      title: '山口大学大学院創成科学研究科長表彰受賞',
      description: '博士前期課程における研究成果が評価され、研究科長表彰を受賞しました。',
      category: 'award',
    },
  ];

  const getCategoryStyle = (category: NewsItem['category']) => {
    switch (category) {
      case 'research':
        return 'bg-cosmic-100 text-cosmic-700 dark:bg-cosmic-900 dark:text-cosmic-300';
      case 'award':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'event':
        return 'bg-stellar-100 text-stellar-700 dark:bg-stellar-900 dark:text-stellar-300';
      case 'media':
        return 'bg-nebula-100 text-nebula-700 dark:bg-nebula-900 dark:text-nebula-300';
    }
  };

  const getCategoryLabel = (category: NewsItem['category']) => {
    switch (category) {
      case 'research':
        return '研究';
      case 'award':
        return '受賞';
      case 'event':
        return 'イベント';
      case 'media':
        return 'メディア';
    }
  };

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-stellar-600 to-nebula-600 bg-clip-text text-transparent">
              最新情報
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            研究成果、受賞、イベントなどの最新ニュース
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </time>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 text-sm font-semibold"
                  >
                    詳細を見る
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-stellar-600 text-white rounded-full hover:bg-stellar-700 transition-colors shadow-lg"
          >
            過去のニュースを見る
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}