'use client';

import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import SkipNavigation from "@/components/SkipNavigation";
import BackToTop from "@/components/BackToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipNavigation />
      <Navigation />
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
      <ThemeToggle />
      <BackToTop />
    </>
  );
}