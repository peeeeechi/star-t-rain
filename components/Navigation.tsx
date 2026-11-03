'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const links = [
  { label: '研究', href: '/#research' },
  { label: '業績', href: '/#publications' },
  { label: '教育', href: '/#education' },
  { label: '研究ノート', href: '/blog' },
  { label: 'ニュース', href: '/#news' },
  { label: 'お問い合わせ', href: '/#contact' },
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <nav
      id="navigation"
      aria-label="メインナビゲーション"
      className={`observatory-nav ${scrolled || open ? 'nav-solid' : ''}`}
    >
      <Link href="/" className="wordmark" aria-label="中村桃太朗研究室 ホーム">
        <span className="wordmark-star" aria-hidden="true">
          ✦
        </span>
        <span>
          MOMOTARO NAKAMURA<small>中村桃太朗研究室</small>
        </span>
      </Link>
      <div className="desktop-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={
              link.href === '/blog' && path.startsWith('/blog')
                ? 'page'
                : undefined
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-utilities">
        <ThemeToggle />
        <button
          ref={menuRef}
          className="menu-toggle"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="mobile-navigation">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <span className="mono">0{i + 1}</span>
              {link.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
          <Link href="/star-cone" onClick={() => setOpen(false)}>
            星プラっと <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </nav>
  );
}
