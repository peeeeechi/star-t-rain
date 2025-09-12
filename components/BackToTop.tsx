'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cosmic-600 to-stellar-600 text-white rounded-full shadow-2xl hover:shadow-cosmic-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cosmic-300 focus:ring-offset-2 group"
      aria-label="ページトップに戻る"
    >
      <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      
      {/* 装飾効果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-stellar-600 to-cosmic-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
      
      {/* 光のリング効果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-400/50 to-stellar-400/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 animate-pulse"></div>
    </button>
  );
}