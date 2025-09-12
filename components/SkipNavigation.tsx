'use client';

export default function SkipNavigation() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-50 bg-cosmic-600 text-white px-4 py-2 rounded-md font-semibold 
                   focus:outline-none focus:ring-2 focus:ring-cosmic-300 focus:ring-offset-2 
                   transform -translate-y-full focus:translate-y-0 transition-transform duration-200"
      >
        メインコンテンツにスキップ
      </a>
      <a
        href="#navigation"
        className="fixed top-4 left-4 mt-12 z-50 bg-stellar-600 text-white px-4 py-2 rounded-md font-semibold 
                   focus:outline-none focus:ring-2 focus:ring-stellar-300 focus:ring-offset-2 
                   transform -translate-y-full focus:translate-y-0 transition-transform duration-200"
      >
        ナビゲーションにスキップ
      </a>
    </div>
  );
}