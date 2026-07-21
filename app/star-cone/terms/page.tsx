import type { Metadata } from 'next';
import Link from 'next/link';
import StarPlaLegalShell from '@/components/star-cone/StarPlaLegalShell';

export const metadata: Metadata = {
  title: '利用規約 | 星プラっと',
  description: '星座学習アプリ「星プラっと」の利用条件を定めます。',
  alternates: {
    canonical: '/star-cone/terms',
  },
};

export default function TermsPage() {
  return (
    <StarPlaLegalShell
      eyebrow="TERMS OF USE"
      title="利用規約"
      lead="本利用規約は、星プラっとの利用条件を定めるものです。アプリを利用する前にご確認ください。"
      updated="2026年7月21日"
    >
      <section>
        <h2>1. 目的</h2>
        <p>
          本アプリは、星・星座・天文学の基礎学習を目的とした学習アプリです。掲載している天文データや解説は、学習用途の参考情報として提供します。
        </p>
      </section>

      <section>
        <h2>2. 利用条件</h2>
        <p>
          利用者は、本規約および適用される法令を守って本アプリを利用するものとします。未成年の方は、必要に応じて保護者の同意を得て利用してください。
        </p>
      </section>

      <section>
        <h2>3. 学習内容</h2>
        <p>
          クイズ、検定チャレンジ、ラボ、星座図鑑の内容は、理解を助けるために一部を簡略化しています。実際の観測、進学、資格試験、専門的判断には、公式資料や最新の専門資料も確認してください。
        </p>
        <p>
          恒星の位置、明るさ、スペクトル型、距離の表示方針と参照資料は、
          <Link href="/star-cone/data-sources">天文データと出典</Link>
          に掲載しています。
        </p>
      </section>

      <section>
        <h2>4. 保存データ</h2>
        <p>
          アプリ内の進捗や設定は、同じ端末内で利用する前提です。端末変更、アプリデータの削除、OS環境の変更により、保存データが失われることがあります。開発者は保存データの復旧を保証しません。
        </p>
      </section>

      <section>
        <h2>5. 料金</h2>
        <p>
          現在の本アプリは無料で提供し、アプリ内課金やサブスクリプションはありません。将来、有料機能を追加する場合は、価格と条件をアプリ内および必要な公開ページで明示します。
        </p>
      </section>

      <section>
        <h2>6. 禁止事項</h2>
        <p>利用者は、本アプリを利用して以下の行為を行わないものとします。</p>
        <ul>
          <li>法令または公序良俗に反する行為</li>
          <li>第三者の権利を侵害する行為</li>
          <li>アプリを不正に改変し、運営や提供を妨げる行為</li>
          <li>学習用途を超えた高精度の観測、航法、医療、業務判断への利用</li>
        </ul>
      </section>

      <section>
        <h2>7. 知的財産権</h2>
        <p>
          本アプリのプログラム、文章、画像、デザインその他のコンテンツに関する権利は、開発者または正当な権利者に帰属します。法令で認められる範囲を超えて、無断で複製、転載、配布、改変することはできません。
        </p>
      </section>

      <section>
        <h2>8. 免責</h2>
        <p>
          開発者は、本アプリの内容について可能な範囲で正確性の確保に努めますが、完全性、正確性、最新性、特定目的への適合性を保証するものではありません。本アプリの利用により生じた損害について、法令上認められる範囲で責任を負いません。
        </p>
      </section>

      <section>
        <h2>9. 提供内容の変更・終了</h2>
        <p>
          開発者は、保守、改善、その他必要な理由により、本アプリの内容を変更し、または提供を一時停止・終了することがあります。
        </p>
      </section>

      <section>
        <h2>10. 規約の変更</h2>
        <p>
          本規約は必要に応じて変更することがあります。重要な変更がある場合は、アプリ内または本ページでお知らせします。
        </p>
      </section>

      <section>
        <h2>11. お問い合わせ</h2>
        <p>
          本規約に関するお問い合わせは、
          <a href="mailto:star0cone.dev@gmail.com?subject=%E6%98%9F%E3%83%97%E3%83%A9%E3%81%A3%E3%81%A8%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84">
            star0cone.dev@gmail.com
          </a>
          までお願いします。
        </p>
      </section>

      <p className="document-date">制定日: 2026年7月8日</p>
    </StarPlaLegalShell>
  );
}
