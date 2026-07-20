'use client';

import { Train, Moon, Tent } from 'lucide-react';

const useCases = [
  {
    icon: Train,
    title: '通学・通勤時間に',
    description: '短時間（1プレイ約3分）で楽しめるから、移動中のスキマ時間に最適',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Moon,
    title: '就寝前のリラックス',
    description: '美しい星空を眺めながら、落ち着いた時間を過ごせます',
    gradient: 'from-indigo-500 to-purple-500',
  },
  // {
  //   icon: Users,
  //   title: '親子で星座の勉強',
  //   description: '子どもと一緒に楽しみながら、星座の名前と形を覚えられます',
  //   gradient: 'from-pink-500 to-rose-500',
  // },
  {
    icon: Tent,
    title: 'キャンプ・星空観察の準備',
    description: '実際の夜空で星座を探す前に、アプリで予習しておこう',
    gradient: 'from-green-500 to-emerald-500',
  },
  // {
  //   icon: BookOpen,
  //   title: '理科の自由研究に',
  //   description: '天文学や星座の学習教材として、宿題や自由研究のテーマに',
  //   gradient: 'from-yellow-500 to-orange-500',
  // },
];

export default function StarConeUseCases() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            こんなシーンで活躍
          </h2>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300">
            star⭐︎coneの活用シーン
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className="relative mb-4 md:mb-6">
                <div className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-base md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
                {useCase.title}
              </h3>
              <p className="relative text-xs md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Users Section */}
        <div className="mt-12 md:mt-20">
          <div className="bg-gradient-to-r from-[#004e92]/10 to-[#FFD700]/10 dark:from-[#004e92]/20 dark:to-[#FFD700]/20 rounded-3xl p-6 md:p-10 border border-[#004e92]/20">
            <h3 className="text-lg md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6 md:mb-8">
              こんな人におすすめ
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">👦</div>
                <h4 className="font-bold text-sm md:text-base text-gray-900 dark:text-white mb-1 md:mb-2">
                  小中学生
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  理科の学習や自由研究に
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎓</div>
                <h4 className="font-bold text-sm md:text-base text-gray-900 dark:text-white mb-1 md:mb-2">
                  高校・大学生
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  天文学に興味がある学生
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">⭐️</div>
                <h4 className="font-bold text-sm md:text-base text-gray-900 dark:text-white mb-1 md:mb-2">
                  星座好きの大人
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  趣味で星座を覚えたい
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="font-bold text-sm md:text-base text-gray-900 dark:text-white mb-1 md:mb-2">
                  親子
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  一緒に楽しめる教育的なゲーム
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
