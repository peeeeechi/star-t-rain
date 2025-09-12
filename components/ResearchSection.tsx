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
    // === 星の形成過程の観測的研究 ===
    {
      id: 'massive-star-formation',
      title: '大質量星形成の観測的研究',
      description: 'メーザー電波とVLBI技術を用いて大質量原始星周囲の構造と進化を解明',
      icon: '⭐',
      details: [
        'G59.783+0.065における円盤-アウトフロー構造の詳細解析',
        '6.7 GHzメタノールメーザーと22 GHz水メーザーの固有運動観測',
        '大質量原始星からの「円盤風」の発見と解析',
        'e-MERLIN、VLBA等の国際VLBI観測ネットワークを活用',
      ],
      audience: 'researcher',
    },
    {
      id: 'vlbi-maser-observations',
      title: 'VLBI-メーザー観測技術',
      description: '超長基線電波干渉計とメーザー天文学を組み合わせた高分解能観測',
      icon: '📡',
      details: [
        'ミリ秒角レベルの高分解能位置天文観測',
        'メタノール・水メーザーによる星形成領域の探査',
        '複数epoch VLBI観測による固有運動測定',
        '星形成環境の3次元構造解析',
      ],
      audience: 'researcher',
    },
    
    // === 生成AIを使ったアプリ開発 ===
    {
      id: 'ai-driven-development',
      title: '生成AIを活用したアプリケーション開発',
      description: 'AI技術を教育現場に導入し、実践的なソフトウェア開発手法を研究',
      icon: '🤖',
      details: [
        'GitHub Copilot、ChatGPTを活用したコーディング支援',
        'AI駆動モバイルアプリ開発の教育実践',
        '学生の創造演習におけるAI活用システム開発',
        'プロンプトエンジニアリングによる開発効率向上',
      ],
      audience: 'student',
    },
    {
      id: 'educational-ai-systems',
      title: 'AI教育システムの開発',
      description: '教育現場でのAI活用と学習効果向上のためのシステム研究',
      icon: '📱',
      details: [
        'モバイルアプリによる学習支援システム',
        'DXプロジェクトでのAI技術活用',
        '高専教育におけるAI駆動開発手法の確立',
        'データベースとAIを組み合わせた教育ツール開発',
      ],
      audience: 'general',
    },

    // === 教育・普及活動 ===
    {
      id: 'educational-outreach',
      title: '天文教育・AI教育の普及活動',
      description: '最新の研究成果と技術を教育現場・社会に還元',
      icon: '🎓',
      details: [
        '高専生向けの実践的天文学・情報工学教育',
        'AI駆動開発の教育手法確立と普及',
        '天文教育普及研究会・高専学会での成果発信',
        '一般向け天文講座・技術セミナーの企画運営',
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