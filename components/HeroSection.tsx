'use client';

import { useEffect, useState } from 'react';
import { Telescope, Bot, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string; size: number; type: 'star' | 'sparkle' | 'comet' }>>([]);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; direction: string }>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/profile.png',
    '/profile2.jpg'
  ];

  useEffect(() => {
    setIsVisible(true);
    // より豪華な星の生成
    const generatedStars = [...Array(100)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: Math.random() * 3 + 1,
      type: Math.random() > 0.8 ? 'sparkle' : Math.random() > 0.9 ? 'comet' : 'star' as 'star' | 'sparkle' | 'comet'
    }));
    setStars(generatedStars);
    
    // パーティクル効果の生成
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      direction: Math.random() > 0.5 ? 'animate-float-up' : 'animate-float-diagonal'
    }));
    setParticles(generatedParticles);
  }, []);

  // 画像スライドショーの設定
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 多層背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/20 via-stellar-800/30 to-nebula-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cosmic-500/10 to-stellar-400/15"></div>
      <div className="absolute inset-0 bg-cosmic-gradient opacity-20 animate-pulse-slow"></div>
      
      {/* 豪華な星空効果 */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`absolute ${
              star.type === 'sparkle' ? 'animate-sparkle' : 
              star.type === 'comet' ? 'animate-comet' : 'animate-twinkle'
            }`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          >
            {star.type === 'sparkle' ? (
              <Sparkles className="text-stellar-400 opacity-60" style={{ width: `${star.size * 4}px`, height: `${star.size * 4}px` }} />
            ) : star.type === 'comet' ? (
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-r from-cosmic-400 to-stellar-400 rounded-full shadow-lg shadow-cosmic-400/50"></div>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-r from-cosmic-400/30 to-stellar-400/30 rounded-full blur-sm"></div>
              </div>
            ) : (
              <div 
                className="bg-white rounded-full opacity-80 shadow-lg shadow-white/50" 
                style={{ width: `${star.size}px`, height: `${star.size}px` }}
              ></div>
            )}
          </div>
        ))}
      </div>
      
      {/* パーティクル効果 */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute opacity-30 ${particle.direction}`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-cosmic-300 to-stellar-300 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* モバイル版でのタイトルと研究説明 */}
          <div className="block md:hidden order-1 w-full text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cosmic-500 via-stellar-500 to-cosmic-700 bg-clip-text text-transparent">
                天文学×AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              星の形成過程の電波での観測的研究と、生成AIを活用した教育的アプリ開発の2つの軸で研究を展開しています。
            </p>
          </div>

          {/* モバイル版での名前と学位 */}
          <div className="block md:hidden order-3 w-full text-center mb-1">
            <div className="space-y-2 text-lg text-gray-700 dark:text-gray-200">
              <p>
                <span className="font-semibold text-cosmic-600 dark:text-cosmic-400">中村 桃太朗</span>
                <span className="ml-2">（Momotaro Nakamura）</span>
              </p>
              <p>
                <span className="ml-2">学位：修士（理学）</span>
              </p>
            </div>
          </div>

          <div className="text-center md:text-left order-4 md:order-1">
            {/* デスクトップ版のタイトルと研究説明 */}
            <div className="hidden md:block">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cosmic-500 via-stellar-500 to-cosmic-700 bg-clip-text text-transparent">
                  天文学×AI
                </span>
                <br />
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                星の形成過程の電波での観測的研究と、生成AIを活用した教育的アプリ開発の2つの軸で研究を展開しています。
              </p>
            </div>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              {/* デスクトップ版のみ表示される名前と学位 */}
              <div className="hidden md:block">
                <p>
                  <span className="font-semibold text-cosmic-600 dark:text-cosmic-400">中村 桃太朗</span>
                  <span className="ml-2">（Momotaro Nakamura）</span>
                </p>
                <p>
                  <span className="ml-2">学位：修士（理学）</span>
                </p>
              </div>              
              <p className="text-base">
                元鉄道系IT子会社にてシステムエンジニアとして開発プロジェクトに参画。データ分析や機械学習ソフトウェアの導入・活用を検討。
              </p>
              <p className="text-base">
                専門分野：電波天文学、大質量星形成、VLBI、生成AI活用教育、天文教育普及、アプリ開発
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-base leading-relaxed">
                <div className="group bg-gradient-to-br from-cosmic-50/80 via-cosmic-100/40 to-transparent dark:from-cosmic-900/30 dark:via-cosmic-800/20 dark:to-transparent p-6 rounded-2xl backdrop-blur-sm border border-cosmic-200/30 dark:border-cosmic-600/20 hover:shadow-2xl hover:shadow-cosmic-500/20 transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <p className="font-semibold text-cosmic-700 dark:text-cosmic-300 mb-3 flex items-center">
                    <Telescope className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    天文学研究
                  </p>
                  <p className="group-hover:text-cosmic-600 dark:group-hover:text-cosmic-400 transition-colors">メーザー電波とVLBI技術で大質量星形成の謎を解明</p>
                  <div className="mt-3 h-1 w-0 bg-gradient-to-r from-cosmic-500 to-stellar-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
                <div className="group bg-gradient-to-br from-stellar-50/80 via-stellar-100/40 to-transparent dark:from-stellar-900/30 dark:via-stellar-800/20 dark:to-transparent p-6 rounded-2xl backdrop-blur-sm border border-stellar-200/30 dark:border-stellar-600/20 hover:shadow-2xl hover:shadow-stellar-500/20 transition-all duration-500 hover:scale-105 hover:-rotate-1">
                  <p className="font-semibold text-stellar-700 dark:text-stellar-300 mb-3 flex items-center">
                    <Bot className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    AI開発研究
                  </p>
                  <p className="group-hover:text-stellar-600 dark:group-hover:text-stellar-400 transition-colors">生成AIを活用した教育コンテンツ・アプリケーション開発</p>
                  <div className="mt-3 h-1 w-0 bg-gradient-to-r from-stellar-500 to-nebula-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#research"
                className="group relative px-8 py-4 bg-gradient-to-r from-cosmic-600 to-stellar-600 text-white rounded-full overflow-hidden shadow-2xl hover:shadow-cosmic-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              >
                <span className="relative z-10 font-semibold">研究内容を見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-stellar-600 to-cosmic-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <Sparkles className="absolute top-1 right-1 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300" />
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-4 border-2 border-stellar-600 text-stellar-600 dark:text-stellar-400 dark:border-stellar-400 rounded-full hover:bg-stellar-600 hover:text-white dark:hover:bg-stellar-600 transition-all duration-500 hover:scale-110 hover:translate-y-1 hover:shadow-2xl hover:shadow-stellar-500/50"
              >
                <span className="relative z-10 font-semibold">お問い合わせ</span>
                <Zap className="absolute top-1 right-1 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" />
              </a>
            </div>
          </div>

          <div className="relative order-2 md:order-2">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:aspect-square md:max-w-md mx-auto">
              {/* 多層の光効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-400 to-stellar-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-stellar-300 to-nebula-400 rounded-full blur-2xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-cosmic-500 to-stellar-600 rounded-full blur-xl opacity-15 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
              
              {/* メイン円形要素 */}
              <div className="relative bg-gradient-to-br from-white/10 to-gray-200/5 dark:from-gray-800/30 dark:to-gray-900/50 rounded-full p-8 shadow-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:scale-105 transition-transform duration-700 hover:rotate-1">
                <div className="aspect-square rounded-full bg-gradient-to-br from-cosmic-100/80 to-stellar-100/80 dark:from-cosmic-900/50 dark:to-stellar-900/50 flex items-center justify-center shadow-inner hover:shadow-2xl transition-shadow duration-500 backdrop-blur-sm overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    {/* スライドショー画像 */}
                    {images.map((src, index) => (
                      <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={src}
                          alt="中村桃太朗 - 天文学研究者・技術教育者"
                          fill
                          className="object-cover object-center hover:scale-110 transition-transform duration-700"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                    {/* 画像上のオーバーレイ効果 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cosmic-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 ring-2 ring-cosmic-400/30 ring-inset rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* スライドインジケーター */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`画像${index + 1}を表示`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 回転する装飾リング */}
                <div className="absolute inset-2 border-2 border-gradient-to-r border-cosmic-300/30 dark:border-cosmic-600/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-stellar-300/20 dark:border-stellar-600/20 rounded-full animate-spin-reverse"></div>
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