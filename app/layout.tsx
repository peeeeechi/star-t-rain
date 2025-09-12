import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://star-t-rain.vercel.app'),
  title: "中村桃太朗研究室 | 電波天文学・AI教育研究 | 大島商船高専",
  description: "大島商船高等専門学校・中村桃太朗による電波天文学とAI活用教育の研究。VLBI観測、大質量星形成、生成AI教育、メーザー天文学の最新研究成果を発信。",
  keywords: [
    "中村桃太朗", "大島商船高専", "電波天文学", "VLBI", "メーザー", 
    "大質量星形成", "生成AI", "教育", "天文学", "情報工学", 
    "Python", "データ解析", "researchmap", "研究者"
  ],
  authors: [{ name: "中村桃太朗", url: "https://researchmap.jp/kibidango_sun" }],
  creator: "中村桃太朗 (Momotaro Nakamura)",
  publisher: "中村桃太朗研究室",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://star-t-rain.vercel.app",
    siteName: "中村桃太朗研究室",
    title: "中村桃太朗研究室 | 電波天文学・AI教育研究",
    description: "大島商船高専・中村桃太朗による電波天文学とAI活用教育の研究。VLBI観測、大質量星形成、生成AI教育の最新成果を発信。",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "中村桃太朗研究室 - 電波天文学・AI教育研究",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "中村桃太朗研究室 | 電波天文学・AI教育研究",
    description: "大島商船高専・中村桃太朗による電波天文学とAI活用教育の研究",
    creator: "@momomo0413",
    images: ["/profile.png"],
  },
  verification: {
    google: "your-google-verification-code", // 後で実際のコードに変更
  },
  alternates: {
    canonical: "https://star-t-rain.vercel.app",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth dark">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        )}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
