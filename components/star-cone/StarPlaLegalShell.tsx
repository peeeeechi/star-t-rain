import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import StarPlaNavigation from './StarPlaNavigation';

type StarPlaLegalShellProps = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  children: React.ReactNode;
};

export default function StarPlaLegalShell({
  eyebrow,
  title,
  lead,
  updated,
  children,
}: StarPlaLegalShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#172035]">
      <StarPlaNavigation />
      <header className="border-b border-[#dce2ed] bg-[#081026] px-4 pb-14 pt-28 text-white sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/star-cone"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            星プラっと公式ページ
          </Link>
          <p className="mt-10 text-sm font-bold text-[#ffd889]">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{lead}</p>
          <p className="mt-6 text-xs text-slate-500">最終更新日: {updated}</p>
        </div>
      </header>

      <div className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="star-pla-legal mx-auto max-w-4xl">{children}</article>
      </div>

      <footer className="border-t border-[#dce2ed] bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/star-cone" className="flex items-center gap-3">
            <Image
              src="/star-pla/app-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 rounded-[8px]"
            />
            <span className="text-sm font-semibold text-[#172035]">星プラっと</span>
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#59647a]" aria-label="法的情報">
            <Link href="/star-cone/support" className="hover:text-[#172035]">サポート</Link>
            <Link href="/star-cone/data-sources" className="hover:text-[#172035]">天文データと出典</Link>
            <Link href="/star-cone/privacy" className="hover:text-[#172035]">プライバシー</Link>
            <Link href="/star-cone/terms" className="hover:text-[#172035]">利用規約</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
