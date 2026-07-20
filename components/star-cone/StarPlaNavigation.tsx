'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, HelpCircle, Menu, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { label: 'できること', href: '/star-cone#features' },
  { label: 'アプリ画面', href: '/star-cone#screens' },
  { label: 'よくある質問', href: '/star-cone/support#faq' },
];

export default function StarPlaNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050917]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/star-cone" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/star-pla/app-icon.png"
            alt=""
            width={38}
            height={38}
            className="h-9 w-9 rounded-[9px] object-cover"
            priority
          />
          <span className="truncate text-lg font-semibold tracking-normal">星プラっと</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="星プラっと">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/star-cone/privacy"
            className="ml-1 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <ShieldCheck className="h-4 w-4" />
            プライバシー
          </Link>
          <Link
            href="/star-cone/support"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#ffd889] px-4 py-2 text-sm font-bold text-[#17120b] transition-colors hover:bg-white"
          >
            <HelpCircle className="h-4 w-4" />
            サポート
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-200 md:hidden"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#070c1d] px-4 py-4 md:hidden" aria-label="モバイルメニュー">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/star-cone/privacy"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              <ShieldCheck className="h-4 w-4" />
              プライバシーポリシー
            </Link>
            <Link
              href="/star-cone/support"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-md bg-[#ffd889] px-4 py-3 text-sm font-bold text-[#17120b]"
            >
              サポートを見る
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
