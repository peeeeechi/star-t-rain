'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    src: '/star-cone/screenshots/01_title.png',
    alt: 'タイトル画面 - 美しい星空アニメーション',
    title: 'タイトル画面',
    description: '美しい星空アニメーションでゲームをスタート',
  },
  {
    src: '/star-cone/screenshots/02_mode_select.png',
    alt: 'モード選択画面 - 4段階の難易度',
    title: 'モード選択',
    description: '初級・中級・上級・プロから難易度を選択',
  },
  {
    src: '/star-cone/screenshots/03_game_play.png',
    alt: 'ゲームプレイ画面 - 星をつないでいる最中',
    title: 'ゲームプレイ',
    description: '60秒以内に星を正しくつないで星座を完成',
  },
  {
    src: '/star-cone/screenshots/04_game_answer_judge.png',
    alt: '正解チェック画面',
    title: '正誤判定画面',
    description: '１００点を目指そう',
  },
  {
    src: '/star-cone/screenshots/05_game_answer_preview.png',
    alt: '正解プレビュー画面 - 星座の完成形',
    title: '正解チェック',
    description: '正しくつなげたか確認できる',
  },
  {
    src: '/star-cone/screenshots/06_result.png',
    alt: 'リザルト画面 - スコア表示',
    title: 'リザルト',
    description: 'プレイ結果とスコアを表示',
  },
  {
    src: '/star-cone/screenshots/07_score_dashboard.png',
    alt: 'スコアダッシュボード - 統計データ',
    title: 'スコアダッシュボード',
    description: 'プレイ履歴と統計データを確認',
  },
  {
    src: '/star-cone/screenshots/08_catalog_list.png',
    alt: '図鑑リスト - クリアした星座一覧',
    title: '図鑑リスト',
    description: 'クリアした星座を一覧で確認',
  },
  {
    src: '/star-cone/screenshots/09_catalog_detail.png',
    alt: '図鑑詳細 - 星座の詳細情報',
    title: '図鑑詳細',
    description: '星座の詳細説明と神話を閲覧',
  },
  {
    src: '/star-cone/screenshots/10_game_pro_mode.png',
    alt: 'プロフェッショナルモード - 最高難度の挑戦',
    title: 'プロフェッショナルモード',
    description: 'プロフェッショナルモードで最高難度の星座に挑戦してみよう（有料）',
  },
];

export default function StarConeScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#000428] via-[#004e92] to-[#001529]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            アプリの画面
          </h2>
          <p className="text-base md:text-xl text-sm md:text-base text-gray-200">
            美しいビジュアルと直感的なUIをご覧ください
          </p>
        </div>

        {/* Main Screenshot Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Main Image */}
          <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
            <Image
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
            aria-label="前の画像"
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
            aria-label="次の画像"
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-sm md:text-base text-gray-200">
              {screenshots[currentIndex].description}
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#FFD700]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`画像${index + 1}を表示`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative aspect-[9/19.5] rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-[#FFD700] scale-105'
                  : 'ring-2 ring-white/20 hover:ring-white/40 hover:scale-105'
              }`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end p-3">
                <p className="text-white text-xs font-bold drop-shadow-lg">
                  {screenshot.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-base md:text-xl font-bold text-white mb-2">美しいUI</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              宇宙空間の臨場感あふれるグラデーションデザイン
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-base md:text-xl font-bold text-white mb-2">直感的な操作</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              タッチ操作で簡単に星をつなぐシンプルなインターフェース
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-base md:text-xl font-bold text-white mb-2">アニメーション</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              スムーズなアニメーションで星の輝きと線のつながりを表現
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
