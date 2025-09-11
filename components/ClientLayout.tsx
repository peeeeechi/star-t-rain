'use client';

import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <ThemeToggle />
    </>
  );
}