'use client';

import Navigation from "@/components/Navigation";
import CosmicBackdrop from "@/components/CosmicBackdrop";
import Footer from "@/components/Footer";
import SkipNavigation from "@/components/SkipNavigation";
import BackToTop from "@/components/BackToTop";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppPage = pathname.startsWith('/star-cone') || pathname.startsWith('/kenreki');

  return (
    <div className={isAppPage ? undefined : "observatory-site"}>
      <SkipNavigation />
      {!isAppPage && <CosmicBackdrop />}
      {!isAppPage && <Navigation />}
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
      {!isAppPage && <Footer />}
      {!isAppPage && <BackToTop />}
    </div>
  );
}
