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
  Plus,
  Minus,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

interface ResearchItem {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  details: string[];
  audience: 'researcher' | 'student' | 'general';
}

export default function ResearchSection() {
  const [selectedAudience, setSelectedAudience] = useState<
    'all' | 'researcher' | 'student' | 'general'
  >('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const researchItems: ResearchItem[] = [
    // === 電波天文学・大質量星形成 ===
    {
      id: 'radio-astronomy',
      title: '大質量星の形成過程の謎に迫る',
      description:
        '「メーザー」と呼ばれる強力な電波を観測し、大質量原始星の形成過程を解明',
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

  const filteredItems =
    selectedAudience === 'all'
      ? researchItems
      : researchItems.filter((item) => item.audience === selectedAudience);

  return (
    <section id="research" className="site-section">
      <SectionHeading
        number="02"
        label="OUR RESEARCH"
        title="遠い宇宙と、身近な未来。"
        description="電波天文学と生成AI。ふたつの視点から、まだ見ぬ可能性を探究します。"
      />
      <div className="research-leads">
        <article data-reveal="body">
          <span className="eyebrow">01 / RADIO ASTRONOMY</span>
          <Radio size={28} strokeWidth={1} />
          <h3>星が生まれる、その現場へ。</h3>
          <p>
            目には見えない電波を捉え、巨大な星が育つ仕組みを読み解く。メーザーとVLBI観測から、原始星の周りに広がる円盤やアウトフローの姿に迫ります。
          </p>
          <div className="research-tags">
            VLBI <span>／</span> メーザー <span>／</span> 大質量星形成
          </div>
        </article>
        <article data-reveal="body" data-reveal-delay="100">
          <span className="eyebrow">02 / AI & EDUCATION</span>
          <Bot size={28} strokeWidth={1} />
          <h3>つくることから、学びを変える。</h3>
          <p>
            生成AIを、学生の好奇心を形にする力へ。アプリケーション開発や演習授業を通して、新しい学び方と教育の可能性を探っています。
          </p>
          <div className="research-tags">
            生成AI <span>／</span> アプリ開発 <span>／</span> 教育実践
          </div>
        </article>
      </div>
      <div className="filter-tabs" aria-label="研究分野の対象者">
        {audienceButtons.map((button) => (
          <button
            key={button.value}
            aria-pressed={selectedAudience === button.value}
            onClick={() =>
              setSelectedAudience(button.value as typeof selectedAudience)
            }
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="research-index">
        {filteredItems.map((item, index) => (
          <article className="research-item" key={item.id} data-reveal="body">
            <button
              onClick={() =>
                setExpandedItem(expandedItem === item.id ? null : item.id)
              }
              aria-expanded={expandedItem === item.id}
              aria-controls={`details-${item.id}`}
            >
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <item.Icon size={20} strokeWidth={1.3} />
              <h3>{item.title}</h3>
              {expandedItem === item.id ? (
                <Minus size={17} />
              ) : (
                <Plus size={17} />
              )}
            </button>
            {expandedItem === item.id && (
              <div id={`details-${item.id}`} className="research-details">
                <p>{item.description}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
