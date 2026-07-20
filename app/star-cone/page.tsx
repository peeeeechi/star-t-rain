import type { Metadata } from 'next';
import StarPlaLanding from '@/components/star-cone/StarPlaLanding';

export const metadata: Metadata = {
  title: '星プラっと | 星座をスマホでパッと学ぶ',
  description:
    '星をつなぐミッション、星探し、4択クイズ、視覚学習ラボで星座と天文学の基礎を学ぶiPhoneアプリ「星プラっと」の公式ページです。',
  keywords: ['星座', '天文', '星', '宇宙', '理科', '学習', 'クイズ', '図鑑', '光年', '等級'],
  alternates: {
    canonical: '/star-cone',
  },
  openGraph: {
    title: '星プラっと | 星座をスマホでパッと学ぶ',
    description: '星をつなぎ、見つけ、確かめる。星座と天文学の基礎を体験から学ぶiPhoneアプリ。',
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
    description: '星をつなぎ、見つけ、確かめる。星座と天文学の基礎を体験から学ぶiPhoneアプリ。',
    images: ['/star-pla/app-icon.png'],
  },
};

export default function StarPlaPage() {
  return <StarPlaLanding />;
}
