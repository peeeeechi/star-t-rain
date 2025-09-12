'use client';

import { useEffect, useState } from 'react';
import { Telescope, Bot } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    setIsVisible(true);
    // クライアントサイドでのみ星の位置を生成
    const generatedStars = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-10"></div>
      
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full opacity-70"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cosmic-500 via-stellar-500 to-cosmic-700 bg-clip-text text-transparent">
                天文学×AI
              </span>
              <br />
              {/* <span className="bg-gradient-to-r from-stellar-600 to-cosmic-600 bg-clip-text text-transparent">
                二軸研究
              </span> */}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              電波天文学による星の形成過程の観測的研究と、生成AIを活用したアプリケーション開発の2つの軸で研究を展開しています。
            </p>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-semibold text-cosmic-600 dark:text-cosmic-400">中村 桃太朗</span>
                <span className="ml-2">（Momotaro Nakamura）　修士（理学）</span>
              </p>
              <p className="text-base">
                専門分野：電波天文学、大質量星形成、VLBI観測、生成AI活用教育、天文教育普及、アプリ・教材開発
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-base leading-relaxed">
                <div className="bg-cosmic-50 dark:bg-cosmic-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-cosmic-700 dark:text-cosmic-300 mb-2 flex items-center">
                    <Telescope className="w-5 h-5 mr-2" />
                    天文学研究
                  </p>
                  <p>メーザー電波とVLBI技術で大質量星形成の謎を解明</p>
                </div>
                <div className="bg-stellar-50 dark:bg-stellar-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-stellar-700 dark:text-stellar-300 mb-2 flex items-center">
                    <Bot className="w-5 h-5 mr-2" />
                    AI開発研究
                  </p>
                  <p>生成AIを活用した教育・アプリケーション開発</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#research"
                className="px-6 py-3 bg-cosmic-600 text-white rounded-full hover:bg-cosmic-700 transition-colors shadow-lg hover:shadow-xl"
              >
                研究内容を見る
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-stellar-600 text-stellar-600 dark:text-stellar-400 dark:border-stellar-400 rounded-full hover:bg-stellar-600 hover:text-white dark:hover:bg-stellar-600 transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-400 to-stellar-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full p-8 shadow-2xl">
                <div className="aspect-square rounded-full bg-gradient-to-br from-cosmic-100 to-stellar-100 dark:from-cosmic-900 dark:to-stellar-900 flex items-center justify-center">
                  <Telescope className="w-24 h-24 text-cosmic-600 dark:text-cosmic-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-cosmic-600">7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">天文学発表</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-stellar-600">AI</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">教育実践</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-nebula-600">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">研究軸</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <span>詳細を見る</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}