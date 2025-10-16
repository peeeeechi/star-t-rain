import StarConeHero from '@/components/star-cone/StarConeHero';
import StarConeFeatures from '@/components/star-cone/StarConeFeatures';
import StarConeScreenshots from '@/components/star-cone/StarConeScreenshots';
import StarConeHowItWorks from '@/components/star-cone/StarConeHowItWorks';
import StarConePricing from '@/components/star-cone/StarConePricing';
import StarConeUseCases from '@/components/star-cone/StarConeUseCases';
import StarConeDownload from '@/components/star-cone/StarConeDownload';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'star⭐︎cone（星コネ）| 星座クイズゲームアプリ',
  description: '星をつないで星座を完成させよう！88の星座を収録した本格派星座クイズゲーム。IAU準拠の正確なデータで、楽しく学べる教育アプリ。初級は完全無料。',
  keywords: ['星座ゲーム', '星座アプリ', '星座クイズ', '天文学アプリ', '教育アプリ', '子ども学習', '理科'],
  openGraph: {
    title: 'star⭐︎cone（星コネ）| 星座クイズゲームアプリ',
    description: '星をつないで星座を完成させよう！88の星座を収録した本格派星座クイズゲーム。',
    type: 'website',
  },
};

export default function StarConePage() {
  return (
    <>
      <StarConeHero />
      <StarConeFeatures />
      <StarConeScreenshots />
      <StarConeHowItWorks />
      {/* <StarConePricing /> */}
      <StarConeUseCases />
      <StarConeDownload />
      <Footer />
    </>
  );
}
