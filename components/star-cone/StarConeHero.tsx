'use client';

import { Sparkles, Download, Star } from 'lucide-react';

export default function StarConeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] via-[#004e92] to-[#001529]">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Logo/Title */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-12 h-12 text-[#FFD700] fill-[#FFD700] animate-pulse" />
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              star<span className="text-[#FFD700]">⭐︎</span>cone
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-200 font-light">
            星コネ - 星をつないで、星座を完成させよう
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
            88の星座を収録した本格派星座クイズゲーム
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            IAU準拠の正確なデータで、楽しく学べる
          </p>
        </div>

        {/* Key Features Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium">🎮 タイマー制ゲーム</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium">📚 88星座完全収録</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium">💰 初級は完全無料</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="#"
            className="group relative px-8 py-4 bg-white text-[#004e92] rounded-xl font-bold text-lg shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[240px] justify-center"
          >
            <Download className="w-6 h-6" />
            App Storeからダウンロード
          </a>
          <a
            href="#"
            className="group relative px-8 py-4 bg-[#FFD700] text-[#000428] rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[240px] justify-center"
          >
            <Download className="w-6 h-6" />
            Google Playで入手
          </a>
        </div>

        {/* Free Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-[#000428] rounded-full font-bold shadow-lg mb-8">
          <Sparkles className="w-5 h-5" />
          初級は完全無料で何度でもプレイ可能
        </div>

        {/* Update Info */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🆕</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">最新アップデート情報</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">●</span>
                    <div>
                      <p className="font-semibold">バージョン 1.0.0</p>
                      <p className="text-sm text-gray-300">初回リリース - 48星座実装済み</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">●</span>
                    <div>
                      <p className="text-sm text-gray-300">図鑑機能・スコア管理機能を搭載</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">●</span>
                    <div>
                      <p className="text-sm text-gray-300">プレミアムサブスクリプション提供開始（3日間無料トライアル）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🔜</span>
                    <div>
                      <p className="text-sm text-gray-400 italic">今後のアップデート：残り40星座を順次追加予定</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 60px 70px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 50px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 10px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 120px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 180px 40px, white, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars-move 120s linear infinite, twinkle 3s ease-in-out infinite;
        }
        .stars2 {
          background-image:
            radial-gradient(1px 1px at 40px 60px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 110px 90px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 160px 20px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 10px 100px, white, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 190px 150px, white, rgba(0,0,0,0));
          background-size: 250px 250px;
          animation: stars-move 90s linear infinite reverse, twinkle 4s ease-in-out infinite;
          animation-delay: 0s, 1s;
        }
        .stars3 {
          background-image:
            radial-gradient(1px 1px at 80px 20px, #FFD700, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 140px 110px, #FFD700, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 30px 140px, #FFD700, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 170px 70px, #FFD700, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: stars-move 60s linear infinite, twinkle 5s ease-in-out infinite;
          animation-delay: 0s, 2s;
        }
        @keyframes stars-move {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-200px);
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
