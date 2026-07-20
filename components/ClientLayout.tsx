'use client';

import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import SkipNavigation from "@/components/SkipNavigation";
import BackToTop from "@/components/BackToTop";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStarPlaPage = pathname.startsWith('/star-cone');

  return (
    <>
      <SkipNavigation />
      {!isStarPlaPage && <Navigation />}
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
      {!isStarPlaPage && <ThemeToggle />}
      {!isStarPlaPage && <BackToTop />}
    </>
  );
}
