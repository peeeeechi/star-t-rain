import type { Metadata } from 'next';
import StarPlaLanding from '@/components/star-cone/StarPlaLanding';

export const metadata: Metadata = {
  title: '星プラっと | 星座をスマホでパッと学ぶ',
  description:
    '25星座のミッション、星探し、4択クイズ、視覚学習ラボで星座と天文学の基礎を学ぶiPhoneアプリ「星プラっと」の公式ページです。全88星座へ順次拡張予定。',
  keywords: ['星座', '天文', '星', '宇宙', '理科', '学習', 'クイズ', '図鑑', '光年', '等級'],
  alternates: {
    canonical: '/star-cone',
  },
  openGraph: {
    title: '星プラっと | 星座をスマホでパッと学ぶ',
    description: '現在25星座を収録。星をつなぎ、見つけ、確かめながら、全88星座を目指して学びを広げるiPhoneアプリ。',
    url: '/star-cone',
    type: 'website',
    images: [
      {
        url: '/star-pla/app-icon.png',
        width: 1024,
        height: 1024,
        alt: '星プラっと',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '星プラっと | 星座をスマホでパッと学ぶ',
    description: '現在25星座を収録。星をつなぎ、見つけ、確かめながら、全88星座を目指して学びを広げるiPhoneアプリ。',
    images: ['/star-pla/app-icon.png'],
  },
};

export default function StarPlaPage() {
  return <StarPlaLanding />;
}
