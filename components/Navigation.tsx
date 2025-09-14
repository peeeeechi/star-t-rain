'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Telescope, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Newspaper, 
  Mail,
  Sparkles,
  Menu,
  X,
  Zap
} from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '研究', href: '/#research', Icon: Telescope },
    { label: '業績', href: '/#publications', Icon: BookOpen },
    { label: '教育', href: '/#education', Icon: GraduationCap },
    { label: 'ブログ', href: '/blog', Icon: FileText },
    { label: 'ニュース', href: '/#news', Icon: Newspaper },
    { label: 'お問い合わせ', href: '/#contact', Icon: Mail },
  ];

  return (
    <nav 
      id="navigation"
      role="navigation"
      aria-label="メインナビゲーション"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-white/90 via-white/95 to-white/90 dark:from-gray-900/90 dark:via-gray-800/95 dark:to-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-gray-700/30' 
          : 'bg-transparent'
      }`}
    >
      {/* 背景の光効果 */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-500/5 via-stellar-500/10 to-nebula-500/5 animate-pulse-slow"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center space-x-3 relative">
            <div className="relative">
              <Sparkles className="w-7 h-7 text-cosmic-600 dark:text-cosmic-400 group-hover:animate-spin transition-all duration-300" />
              <div className="absolute inset-0 bg-cosmic-600/20 dark:bg-cosmic-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-cosmic-600 via-stellar-600 to-cosmic-700 bg-clip-text text-transparent group-hover:from-stellar-600 group-hover:via-cosmic-600 group-hover:to-stellar-700 transition-all duration-500">
              Momotaro-Lab
            </span>
            <Zap className="w-4 h-4 text-stellar-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300" />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 rounded-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/0 to-stellar-600/0 group-hover:from-cosmic-600 group-hover:to-stellar-600 transition-all duration-500 rounded-xl"></div>
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                <item.Icon className="w-4 h-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">{item.label}</span>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-stellar-400 to-cosmic-400 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden group relative p-3 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-700/60 backdrop-blur-sm border border-white/40 dark:border-gray-500/40 hover:from-cosmic-500/30 hover:to-stellar-500/30 hover:border-cosmic-400/60 transition-all duration-300 hover:scale-110 shadow-lg dark:shadow-gray-900/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/20 to-stellar-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gradient-to-r border-cosmic-200/30 dark:border-cosmic-700/30 backdrop-blur-xl bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center space-x-4 px-6 py-4 mx-2 text-gray-700 dark:text-gray-300 hover:text-white rounded-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/0 to-stellar-600/0 group-hover:from-cosmic-600/90 group-hover:to-stellar-600/90 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-gray-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 p-2 bg-gradient-to-br from-cosmic-100/20 to-stellar-100/20 dark:from-cosmic-900/20 dark:to-stellar-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <item.Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="relative z-10 font-medium text-lg group-hover:font-semibold transition-all duration-300">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {/* スクロール時の装飾線 */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-500/50 to-transparent"></div>
      )}
    </nav>
  );
}