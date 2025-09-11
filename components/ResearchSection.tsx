'use client';

import { useState } from 'react';

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  audience: 'researcher' | 'student' | 'general';
}

export default function ResearchSection() {
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'researcher' | 'student' | 'general'>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const researchItems: ResearchItem[] = [
    {
      id: 'massive-star-formation',
      title: '大質量星形成の研究',
      description: 'メーザー電波を用いて大質量原始星周囲の複雑な構造を解明',
      icon: '⭐',
      details: [
        'G59.783+0.065における円盤-アウトフロー構造の詳細解析',
        '6.7 GHzメタノールメーザーと22 GHz水メーザーの固有運動観測',
        '大質量原始星からの「円盤風」の発見と解析',
      ],
      audience: 'researcher',
    },
    {
      id: 'vlbi-observations',
      title: 'VLBI観測技術',
      description: '超長基線電波干渉計を用いた高分解能観測で星形成の瞬間を捉える',
      icon: '📡',
      details: [
        'ミリ秒角レベルの高分解能位置天文観測',
        '複数epoch VLBI観測による固有運動測定',
        '国際VLBI観測ネットワークを活用した共同研究',
      ],
      audience: 'researcher',
    },
    {
      id: 'maser-astronomy',
      title: 'メーザー天文学',
      description: '宇宙の天然レーザー「メーザー」で探る星形成環境',
      icon: '🌟',
      details: [
        'メタノールメーザーによる大質量星形成領域の探査',
        '水メーザーで観測する原始星周囲の降着・流出現象',
        'メーザースポットの3次元運動解析',
      ],
      audience: 'student',
    },
    {
      id: 'database-development',
      title: 'データベース・アプリ開発',
      description: '天文学研究と情報工学の融合による新しい研究手法',
      icon: '💻',
      details: [
        '天文観測データベースの構築と管理',
        'モバイルアプリを活用した教育システム開発',
        '生成AIを活用したDXアプリケーション開発',
      ],
      audience: 'student',
    },
    {
      id: 'educational-astronomy',
      title: '天文教育・普及活動',
      description: '最新の天文学研究成果を分かりやすく社会に伝える',
      icon: '🔭',
      details: [
        '高専生向けの実践的天文学教育プログラム',
        '天文教育普及研究会での活動',
        '一般向け天文講座・観望会の企画運営',
      ],
      audience: 'general',
    },
    {
      id: 'radio-astronomy-basics',
      title: '電波天文学入門',
      description: '目に見えない電波で宇宙を観る技術と発見',
      icon: '📻',
      details: [
        '電波望遠鏡の仕組みと観測原理',
        '様々な天体が発する電波の特徴',
        '電波観測が明かした宇宙の新しい姿',
      ],
      audience: 'general',
    },
  ];

  const audienceButtons = [
    { value: 'all', label: '全て', icon: '🌍' },
    { value: 'researcher', label: '研究者向け', icon: '🔬' },
    { value: 'student', label: '学生向け', icon: '📚' },
    { value: 'general', label: '一般向け', icon: '👥' },
  ];

  const filteredItems = selectedAudience === 'all' 
    ? researchItems 
    : researchItems.filter(item => item.audience === selectedAudience);

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-600 to-stellar-600 bg-clip-text text-transparent">
              研究分野
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            宇宙の謎に挑む、多角的な研究アプローチ
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {audienceButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => setSelectedAudience(button.value as 'all' | 'researcher' | 'student' | 'general')}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedAudience === button.value
                  ? 'bg-cosmic-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{button.icon}</span>
              {button.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>

                <button
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="text-cosmic-600 dark:text-cosmic-400 hover:text-cosmic-700 dark:hover:text-cosmic-300 font-semibold flex items-center"
                >
                  {expandedItem === item.id ? '詳細を閉じる' : '詳細を見る'}
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${
                      expandedItem === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedItem === item.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-2">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-stellar-500 mr-2">▸</span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="px-6 pb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  item.audience === 'researcher' 
                    ? 'bg-cosmic-100 text-cosmic-700 dark:bg-cosmic-900 dark:text-cosmic-300'
                    : item.audience === 'student'
                    ? 'bg-stellar-100 text-stellar-700 dark:bg-stellar-900 dark:text-stellar-300'
                    : 'bg-nebula-100 text-nebula-700 dark:bg-nebula-900 dark:text-nebula-300'
                }`}>
                  {item.audience === 'researcher' ? '研究者向け' : 
                   item.audience === 'student' ? '学生向け' : '一般向け'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}