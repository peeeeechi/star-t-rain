'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  ChevronUp,
  FileText
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
      title: '大質量星の形成過程の謎に迫る',
      description: '「メーザー」と呼ばれる強力な電波を観測し、大質量原始星の形成過程を解明',
      Icon: Radio,
      details: [
        'G59.783+0.065における円盤-アウトフロー構造の詳細解析',
        '6.7 GHzメタノールメーザーと22 GHz水メーザーの運動学的研究',
        '星の質量の獲得と損失の寄与、分裂やバーストのメカニズムの解明',
      ],
      audience: 'researcher',
    },
    {
      id: 'vlbi-observations',
      title: '手作りアンテナの開発・観測',
      description: '手作りアンテナを開発し、太陽の観測実験を試み中...',
      Icon: Satellite,
      details: [
        '将来的な手作りVLBIネットワークの構築',
        '大きなアンテナがなくても安価で作成可能',
        'アンテナの受信の仕組みが理解できる',
        'アンテナ開発技術の継承',
      ],
      audience: 'researcher',
    },

    // === 生成AI活用教育 ===
    {
      id: 'generative-ai-education',
      title: '生成AI活用教育の実践研究',
      description: 'ChatGPT・Claude Code等を活用した新しい教育手法の開発',
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
        '天文教育アプリの開発',
        // '高専生向け天文学実習プログラムの開発',
        // '一般向け天文講座・観望会の企画運営',
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
        // 'AIによるメーザー源の自動検出システム開発',
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

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
          {audienceButtons.map((button, index) => (
            <button
              key={button.value}
              onClick={() => setSelectedAudience(button.value as 'all' | 'researcher' | 'student' | 'general')}
              className={`group relative px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                selectedAudience === button.value
                  ? 'bg-gradient-to-r from-cosmic-600 via-stellar-600 to-cosmic-700 text-white shadow-2xl shadow-cosmic-500/40'
                  : 'bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/70 text-gray-700 dark:text-gray-300 hover:text-cosmic-600 dark:hover:text-cosmic-400 shadow-lg hover:shadow-xl hover:shadow-cosmic-500/20 backdrop-blur-sm border border-white/50 dark:border-gray-600/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 3D背景効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-500/10 via-stellar-500/15 to-nebula-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* ホログラフィック境界線 */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-400/60 to-transparent group-hover:via-cosmic-400 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-stellar-400/60 to-transparent group-hover:via-stellar-400 transition-all duration-500"></div>

              <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                <div className={`relative p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 ${
                  selectedAudience === button.value
                    ? 'bg-white/20 shadow-inner'
                    : 'bg-gradient-to-br from-cosmic-100/60 to-stellar-100/40 dark:from-cosmic-900/40 dark:to-stellar-900/30 group-hover:scale-110 group-hover:rotate-12'
                }`}>
                  <button.Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    selectedAudience === button.value
                      ? 'text-white'
                      : 'text-cosmic-600 dark:text-cosmic-400 group-hover:text-cosmic-700 dark:group-hover:text-cosmic-300'
                  }`} />

                  {/* アイコン周りの光効果 */}
                  {selectedAudience !== button.value && (
                    <>
                      <div className="absolute inset-0 bg-cosmic-500/20 dark:bg-cosmic-400/20 rounded-lg sm:rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-500/30 to-stellar-500/30 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </>
                  )}
                </div>

                <span className={`font-semibold text-sm sm:text-lg transition-all duration-300 ${
                  selectedAudience === button.value
                    ? 'text-white drop-shadow-sm'
                    : 'group-hover:text-cosmic-700 dark:group-hover:text-cosmic-300'
                }`}>
                  {button.label}
                </span>
              </div>

              {/* アクティブ時の下線効果 */}
              {selectedAudience === button.value && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-pulse"></div>
              )}

              {/* 非アクティブ時のホバー効果 */}
              {selectedAudience !== button.value && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-cosmic-500 to-stellar-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-800/95 dark:via-gray-800/90 dark:to-gray-900/85 rounded-3xl shadow-2xl hover:shadow-cosmic-500/25 dark:hover:shadow-cosmic-500/20 transition-all duration-500 overflow-hidden backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:scale-105 hover:-rotate-1 transform-gpu perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 3D背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-500/5 via-stellar-500/10 to-nebula-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-transparent dark:via-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* ホログラフィック効果 */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-400/50 to-transparent group-hover:via-cosmic-400 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-stellar-400/50 to-transparent group-hover:via-stellar-400 transition-all duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="relative mr-6">
                    {/* 3Dアイコンコンテナ */}
                    <div className="relative p-4 bg-gradient-to-br from-cosmic-100/80 to-stellar-100/60 dark:from-cosmic-900/50 dark:to-stellar-900/40 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform-gpu">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-gray-600/20 rounded-2xl"></div>
                      <item.Icon className="relative z-10 w-8 h-8 text-cosmic-600 dark:text-cosmic-400 group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* アイコン周りの光効果 */}
                      <div className="absolute inset-0 bg-cosmic-500/20 dark:bg-cosmic-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-500/30 to-stellar-500/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cosmic-700 dark:group-hover:text-cosmic-300 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <div className="mt-2 h-1 w-0 bg-gradient-to-r from-cosmic-500 to-stellar-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>

                {item.id === 'blog-activities' ? (
                  <Link
                    href="/blog"
                    className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-cosmic-600/10 to-stellar-600/10 hover:from-cosmic-600 hover:to-stellar-600 text-cosmic-600 dark:text-cosmic-400 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10">ブログを見る</span>
                    <FileText className="relative z-10 w-5 h-5 ml-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                    className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-cosmic-600/10 to-stellar-600/10 hover:from-cosmic-600 hover:to-stellar-600 text-cosmic-600 dark:text-cosmic-400 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10">{expandedItem === item.id ? '詳細を閉じる' : '詳細を見る'}</span>
                    {expandedItem === item.id ? (
                      <ChevronUp className="relative z-10 w-5 h-5 ml-2 group-hover/btn:rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="relative z-10 w-5 h-5 ml-2 group-hover/btn:rotate-180 transition-transform duration-300" />
                    )}
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                )}

                {expandedItem === item.id && item.id !== 'blog-activities' && (
                  <div className="mt-6 pt-6 border-t border-gradient-to-r from-transparent via-cosmic-200 to-transparent dark:via-cosmic-700">
                    <ul className="space-y-4">
                      {item.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="flex items-start group/item"
                          style={{ animationDelay: `${detailIndex * 100}ms` }}
                        >
                          <div className="mr-4 mt-1 relative">
                            <div className="w-2 h-2 bg-gradient-to-r from-stellar-500 to-cosmic-500 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-stellar-400 rounded-full blur-sm opacity-0 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative z-10 px-8 pb-6">
                <div className="flex items-center justify-between">
                  <span className={`relative inline-block px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm border transition-all duration-300 group-hover:scale-105 ${
                    item.audience === 'researcher' 
                      ? 'bg-gradient-to-r from-cosmic-100/80 to-cosmic-200/60 dark:from-cosmic-900/50 dark:to-cosmic-800/40 text-cosmic-700 dark:text-cosmic-300 border-cosmic-300/30 dark:border-cosmic-600/30'
                      : item.audience === 'student'
                      ? 'bg-gradient-to-r from-stellar-100/80 to-stellar-200/60 dark:from-stellar-900/50 dark:to-stellar-800/40 text-stellar-700 dark:text-stellar-300 border-stellar-300/30 dark:border-stellar-600/30'
                      : 'bg-gradient-to-r from-nebula-100/80 to-nebula-200/60 dark:from-nebula-900/50 dark:to-nebula-800/40 text-nebula-700 dark:text-nebula-300 border-nebula-300/30 dark:border-nebula-600/30'
                  }`}>
                    {item.audience === 'researcher' ? '研究者向け' : 
                     item.audience === 'student' ? '学生向け' : '一般向け'}
                  </span>
                  
                  {/* カードの装飾アイコン */}
                  <div className="opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <item.Icon className="w-6 h-6 text-cosmic-500 dark:text-cosmic-400" />
                  </div>
                </div>
              </div>
              
              {/* カードの3D底面効果 */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-stellar-400/60 to-transparent group-hover:via-stellar-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}