import type { Metadata } from 'next';
import KenrekiLanding from '@/components/kenreki/KenrekiLanding';

export const metadata: Metadata = {
  title: '研暦 | 研究時間を守る計画・進捗カレンダー',
  description:
    '締切から研究工程を逆算し、Core Timeの予定と実績、カレンダー、成果メモをつなぐiPhoneアプリ「研暦」の公式ページです。',
  keywords: ['研究', 'カレンダー', '進捗管理', '締切', '論文', '大学院', '時間管理', '計画', '振り返り'],
  alternates: {
    canonical: '/kenreki',
  },
  openGraph: {
    title: '研暦 | 研究時間を守る計画・進捗カレンダー',
    description: '締切から逆算し、研究のための時間を守り、実績と成果を次の計画につなげるiPhoneアプリ。',
    url: '/kenreki',
    type: 'website',
    images: [
      {
        url: '/kenreki/app-icon.png',
        width: 1024,
        height: 1024,
        alt: '研暦',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '研暦 | 研究時間を守る計画・進捗カレンダー',
    description: '締切、Core Time、実績、成果メモをひとつの暦につなぐiPhoneアプリ。',
    images: ['/kenreki/app-icon.png'],
  },
};

export default function KenrekiPage() {
  return <KenrekiLanding />;
}
