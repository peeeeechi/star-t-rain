import type { Metadata } from 'next';
import Link from 'next/link';
import StarPlaLegalShell from '@/components/star-cone/StarPlaLegalShell';

export const metadata: Metadata = {
  title: '販売に関する表示 | 星プラっと',
  description: '星プラっとの販売状況に関する案内です。',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CommercialTransactionPage() {
  return (
    <StarPlaLegalShell
      eyebrow="SALES INFORMATION"
      title="販売に関する表示"
      lead="星プラっとの現在の販売状況をご案内します。"
      updated="2026年7月21日"
    >
      <section>
        <h2>現在、有料販売はありません</h2>
        <p>
          星プラっとは無料で提供しており、アプリ内課金、サブスクリプション、有料コンテンツの販売は行っていません。
        </p>
        <p>
          将来、有料機能を追加する場合は、販売価格、支払方法、提供条件、解約・返金条件など、法令上必要な情報を本ページで明示します。
        </p>
        <p>
          アプリの利用条件は
          <Link href="/star-cone/terms">利用規約</Link>
          をご確認ください。
        </p>
      </section>

      <section>
        <h2>お問い合わせ</h2>
        <p>
          メールアドレス:{' '}
          <a href="mailto:star0cone.dev@gmail.com?subject=%E6%98%9F%E3%83%97%E3%83%A9%E3%81%A3%E3%81%A8%E8%B2%A9%E5%A3%B2%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B">
            star0cone.dev@gmail.com
          </a>
        </p>
      </section>
    </StarPlaLegalShell>
  );
}
