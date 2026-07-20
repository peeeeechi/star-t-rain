'use client';

import { Download, Star, Mail } from 'lucide-react';

export default function StarConeDownload() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-[#000428] via-[#004e92] to-[#001529] relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <Star className="w-8 md:w-12 h-8 md:h-12 text-[#FFD700] fill-[#FFD700] animate-pulse" />
            <h2 className="text-xl md:text-6xl font-bold text-white">
              今すぐ無料で始めよう
            </h2>
            <Star className="w-8 md:w-12 h-8 md:h-12 text-[#FFD700] fill-[#FFD700] animate-pulse" />
          </div>
          <p className="text-sm md:text-xl text-gray-200 mb-2 md:mb-4">
            初級は完全無料で何度でもプレイ可能 - 他のプレイモードはアプリ内課金有り
          </p>
          <p className="text-xs md:text-lg text-gray-300">
            App Store・Google Play Storeで配信予定
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <a
            href="#"
            className="group relative px-6 md:px-10 py-3 md:py-5 bg-white text-[#004e92] rounded-2xl font-bold text-base md:text-xl shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 md:gap-4 min-w-[240px] md:min-w-[280px] justify-center"
          >
            <Download className="w-5 md:w-7 h-5 md:h-7" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on the</div>
              <div className="text-sm md:text-base">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="group relative px-6 md:px-10 py-3 md:py-5 bg-[#FFD700] text-[#000428] rounded-2xl font-bold text-base md:text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 md:gap-4 min-w-[240px] md:min-w-[280px] justify-center"
          >
            <Download className="w-5 md:w-7 h-5 md:h-7" />
            <div className="text-left">
              <div className="text-xs text-[#004e92]">GET IT ON</div>
              <div className="text-sm md:text-base">Google Play</div>
            </div>
          </a>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium text-xs md:text-base">📱 iOS 13.0以降対応</span>
          </div>
          <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium text-xs md:text-base">🤖 Android 7.0以降対応</span>
          </div>
          <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium text-xs md:text-base">📦 約50MB</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="text-xl md:text-3xl mb-2 md:mb-3">🎮</div>
            <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">本格的なゲーム体験</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              タイマー制のスリリングな体験で、楽しく星座を学べます
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="text-xl md:text-3xl mb-2 md:mb-3">📚</div>
            <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">88星座順次収録</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              IAU準拠の正確なデータを収録。本物の星座を学習できます
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="text-xl md:text-3xl mb-2 md:mb-3">💰</div>
            <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">初級は完全無料</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              何度でもプレイ可能。慣れたら段階的にステップアップ
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Mail className="w-5 md:w-6 h-5 md:h-6 text-[#FFD700]" />
            <h3 className="text-base md:text-2xl font-bold text-white">お問い合わせ</h3>
          </div>
          <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-base">
            ご質問・ご要望・バグ報告などはこちらまで
          </p>
          <a
            href="mailto:star0cone.dev@gmail.com"
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-[#FFD700] text-[#000428] rounded-xl font-bold hover:bg-white transition-colors duration-300 text-sm md:text-base"
          >
            star0cone.dev@gmail.com
          </a>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
            <a href="/star-cone/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <span>•</span>
            <a href="/star-cone/terms" className="hover:text-white transition-colors">利用規約</a>
            <span>•</span>
            <a href="/star-cone/commercial-transaction" className="hover:text-white transition-colors">特定商取引法</a>
          </div>
        </div>

        {/* Developer Info */}
        <div className="mt-6 md:mt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>Developed by Momotaro Nakamura</p>
          <p className="mt-1 md:mt-2">© 2025 star⭐︎cone. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .stars, .stars2 {
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
            radial-gradient(2px 2px at 90px 10px, white, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 3s ease-in-out infinite;
        }
        .stars2 {
          animation: twinkle 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
