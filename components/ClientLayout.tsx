'use client';

import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import SkipNavigation from "@/components/SkipNavigation";
import BackToTop from "@/components/BackToTop";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppPage = pathname.startsWith('/star-cone') || pathname.startsWith('/kenreki');

  return (
    <>
      <SkipNavigation />
      {!isAppPage && <Navigation />}
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
      {!isAppPage && <ThemeToggle />}
      {!isAppPage && <BackToTop />}
    </>
  );
}
