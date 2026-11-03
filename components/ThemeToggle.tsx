'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
      }
    } catch {
      /* Optional storage. */
    }
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* Optional storage. */
    }
  };
  return (
    <button
      className="theme-control"
      onClick={toggle}
      aria-label={
        theme === 'dark' ? '明るい表示に切り替える' : '星空の表示に切り替える'
      }
      title={theme === 'dark' ? '明るい表示' : '星空の表示'}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
