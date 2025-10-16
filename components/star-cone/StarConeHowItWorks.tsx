'use client';

import { CircleDot, Link2, TrophyIcon } from 'lucide-react';

const steps = [
  {
    icon: CircleDot,
    number: '01',
    title: '難易度を選ぶ',
    description: '初級・中級・上級・プロフェッショナルから選択',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Link2,
    number: '02',
    title: '星をつなぐ',
    description: '60秒以内に画面の星を正しくつないで星座を完成させよう',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrophyIcon,
    number: '03',
    title: 'スコア確認',
    description: '結果を見て次の星座に挑戦。自己ベストを更新しよう',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function StarConeHowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            使い方はシンプル
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            3ステップで始められる簡単プレイ
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
              )}

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#004e92]/10 to-[#FFD700]/10 dark:from-[#004e92]/20 dark:to-[#FFD700]/20 rounded-2xl p-8 border border-[#004e92]/20">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-bold text-[#004e92] dark:text-[#FFD700]">1回のプレイ時間は約3分</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              通学・通勤時間やスキマ時間に最適
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
