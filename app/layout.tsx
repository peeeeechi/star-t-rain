import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: " 中村桃太朗研究室 | 研究者ポートフォリオ | 天文学・アプリ開発研究",
  description: "高等専門学校における天文学・宇宙物理学研究。研究内容、論文、教育活動について紹介します。",
  keywords: "高専, 研究, 天文学, 宇宙物理学, 教育, アプリ開発",
  openGraph: {
    title: "中村桃太朗研究室 | 研究者ポートフォリオ | 天文学・アプリ開発研究",
    description: "天文学研究と教育活動、アプリ開発",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
