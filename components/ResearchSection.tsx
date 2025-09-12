'use client';

import { useState } from 'react';
import { 
  Radio, 
  Satellite, 
  Bot, 
  Star, 
  Laptop, 
  Microscope,
  Globe,
  FlaskConical,
  BookOpen,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  details: string[];
  audience: 'researcher' | 'student' | 'general';
}

export default function ResearchSection() {
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'researcher' | 'student' | 'general'>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const researchItems: ResearchItem[] = [
    // === 電波天文学・大質量星形成 ===
    {
      id: 'radio-astronomy',
      title: '電波天文学による大質量星形成研究',
      description: 'メーザー電波を用いて大質量原始星の形成過程を観測的に解明',
      Icon: Radio,
      details: [
        'G59.783+0.065における円盤-アウトフロー構造の詳細解析',
        '6.7 GHzメタノールメーザーと22 GHz水メーザーの運動学的研究',
        '大質量原始星からの「円盤風」の発見と物理メカニズムの解明',
        '星形成領域の3次元構造と進化過程の研究',
      ],
      audience: 'researcher',
    },
    {
      id: 'vlbi-observations',
      title: 'VLBI観測技術の開発と応用',
      description: '超長基線電波干渉計を用いたミリ秒角分解能での天体観測',
      Icon: Satellite,
      details: [
        'e-MERLIN、VLBA等の国際VLBI観測ネットワークでの共同研究',
        '複数epoch VLBI観測による天体の固有運動測定',
        'メーザースポットの位置天文学的解析',
        'VLBI観測データの解析手法開発',
      ],
      audience: 'researcher',
    },

    // === 生成AI活用教育 ===
    {
      id: 'generative-ai-education',
      title: '生成AI活用教育の実践研究',
      description: 'GitHub Copilot、ChatGPT等を活用した新しい教育手法の開発',
      Icon: Bot,
      details: [
        'AI駆動開発を取り入れた演習授業の設計と実践',
        'プロンプトエンジニアリングの教育カリキュラム開発',
        '学生のAIリテラシー向上プログラムの構築',
        'AI活用によるプログラミング教育の効果測定',
      ],
      audience: 'student',
    },

    // === 天文教育普及 ===
    {
      id: 'astronomy-education-outreach',
      title: '天文教育普及活動',
      description: '天文学の魅力と最新研究成果を社会に伝える活動',
      Icon: Star,
      details: [
        '天文教育普及研究会での教育実践報告',
        '高専生向け天文学実習プログラムの開発',
        '一般向け天文講座・観望会の企画運営',
        '天文学研究成果の分かりやすい発信',
      ],
      audience: 'general',
    },

    // === アプリ・教材開発 ===
    {
      id: 'app-material-development',
      title: 'アプリケーション・教材開発',
      description: '教育支援システムと天文データ解析ツールの開発',
      Icon: Laptop,
      details: [
        'モバイルアプリによる学習支援システムの開発',
        'Python による天文観測データ解析システムの構築',
        'Webベースの教育用天文シミュレーター開発',
        'データベースと連携した教育ツールの設計',
      ],
      audience: 'student',
    },

    // === 学際的研究 ===
    {
      id: 'interdisciplinary-research',
      title: '天文学とAI技術の融合研究',
      description: '天文観測データへの機械学習適用など学際的アプローチ',
      Icon: Microscope,
      details: [
        '機械学習を用いた天文観測データの自動解析',
        'AIによるメーザー源の自動検出システム開発',
        '天文教育へのVR/AR技術の応用',
        'ビッグデータ解析技術の天文学への適用',
      ],
      audience: 'researcher',
    },
  ];

  const audienceButtons = [
    { value: 'all', label: '全て', Icon: Globe },
    { value: 'researcher', label: '研究者向け', Icon: FlaskConical },
    { value: 'student', label: '学生向け', Icon: BookOpen },
    { value: 'general', label: '一般向け', Icon: Users },
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
            電波天文学とAI技術を融合した多角的な研究・教育活動
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
              <button.Icon className="w-4 h-4 mr-2" />
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
                  <div className="p-3 bg-cosmic-100 dark:bg-cosmic-900/30 rounded-lg mr-4">
                    <item.Icon className="w-6 h-6 text-cosmic-600 dark:text-cosmic-400" />
                  </div>
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
                  {expandedItem === item.id ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
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