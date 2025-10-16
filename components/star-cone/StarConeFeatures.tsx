'use client';

import { Gamepad2, BookOpen, Palette, Music, Coins } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: '🎮 本格的なゲーム体験',
    description: 'タイマー制限でスリリングな60秒の挑戦',
    details: [
      '3問クイズ形式で1回約3分のプレイ',
      'ヒント機能で正しい線を1本表示',
      'ズーム機能で細かい星も見やすく',
      '直感的なタッチ操作',
    ],
  },
  {
    icon: BookOpen,
    title: '📚 充実した学習コンテンツ',
    description: 'IAU準拠の88星座を収録',
    details: [
      '初級から段階的にステップアップ',
      '図鑑機能で星座の詳細説明と神話',
      'スコア管理で自己ベスト更新',
      '48星座実装済み、40星座実装予定',
    ],
  },
  {
    icon: Palette,
    title: '🎨 美しいビジュアル',
    description: '宇宙空間の臨場感あふれるグラフィック',
    details: [
      'グラデーションが美しい星空演出',
      'スムーズなアニメーション',
      '星の輝きと線のつながりを表現',
      'iPadでも快適なタブレット最適化',
    ],
  },
  // {
  //   icon: Music,
  //   title: '🎵 臨場感のあるサウンド',
  //   description: '難易度ごとに異なる雰囲気のBGM',
  //   details: [
  //     '星の選択、接続時の効果音',
  //     '正解・不正解時の音',
  //     'BGM・効果音を個別に調整可能',
  //     'バイブレーションで触覚フィードバック',
  //   ],
  // },
  // {
  //   icon: Coins,
  //   title: '💰 柔軟な課金システム',
  //   description: '初級は完全無料、段階的な買い切り型',
  //   details: [
  //     '初級は何度でも無料プレイ',
  //     '中級160円、上級320円、プロ480円',
  //     'プレミアムパック600円（37%オフ）',
  //     '一度購入すれば永続利用可能',
  //   ],
  // },
];

export default function StarConeFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            「star⭐︎cone」(星コネ) の特徴
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-[#004e92] to-[#000428] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                {feature.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2 md:space-y-3">
                {feature.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 md:gap-3 text-gray-700 dark:text-gray-400"
                  >
                    <span className="text-[#FFD700] text-base md:text-xl mt-0.5">✦</span>
                    <span className="text-xs md:text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#004e92]/10 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
            これらすべての機能を今すぐ体験
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#004e92] to-[#000428] text-white rounded-xl font-bold text-sm md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            無料で始める
          </a>
        </div>
      </div>
    </section>
  );
}
