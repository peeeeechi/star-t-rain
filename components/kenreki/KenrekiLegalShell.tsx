import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import KenrekiNavigation from './KenrekiNavigation';

type KenrekiLegalShellProps = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  children: React.ReactNode;
};

export default function KenrekiLegalShell({
  eyebrow,
  title,
  lead,
  updated,
  children,
}: KenrekiLegalShellProps) {
  return (
    <div className="min-h-screen bg-[#f4f9fa] text-[#14343c]">
      <KenrekiNavigation />
      <header className="border-b border-[#153f48] bg-[#082a33] px-4 pb-14 pt-28 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/kenreki"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#b9d9dd] hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            研暦公式ページ
          </Link>
          <p className="mt-10 text-sm font-bold text-[#51d0d9]">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c5dde0] sm:text-base">{lead}</p>
          <p className="mt-6 text-xs text-[#86aeb4]">最終更新日: {updated}</p>
        </div>
      </header>

      <div className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="kenreki-legal mx-auto max-w-4xl">{children}</article>
      </div>

      <footer className="border-t border-[#d2e5e8] bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/kenreki" className="flex items-center gap-3">
            <Image
              src="/kenreki/app-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 rounded-[7px]"
            />
            <span className="text-sm font-semibold text-[#14343c]">研暦</span>
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#59737a]" aria-label="法的情報">
            <Link href="/kenreki/support" className="hover:text-[#007d8c]">サポート</Link>
            <Link href="/kenreki/privacy" className="hover:text-[#007d8c]">プライバシー</Link>
            <Link href="/kenreki/terms" className="hover:text-[#007d8c]">利用規約</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
