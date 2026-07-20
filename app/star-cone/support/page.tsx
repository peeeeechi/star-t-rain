import type { Metadata } from 'next';
import {
  Bell,
  Database,
  Mail,
  Music2,
  RotateCcw,
  Smartphone,
  Wrench,
} from 'lucide-react';
import StarPlaLegalShell from '@/components/star-cone/StarPlaLegalShell';

export const metadata: Metadata = {
  title: 'サポート | 星プラっと',
  description: '星座学習アプリ「星プラっと」のよくある質問、動作環境、不具合報告・お問い合わせ窓口です。',
  alternates: {
    canonical: '/star-cone/support',
  },
};

const faqs = [
  {
    icon: Database,
    question: '機種変更後も学習データは引き継がれますか？',
    answer:
      '現在、学習進捗や星のかけら、検定記録は端末内に保存されます。アカウント同期やクラウド引き継ぎには対応していないため、機種変更やアプリ削除でデータが失われる場合があります。',
  },
  {
    icon: RotateCcw,
    question: '学習データを最初からやり直せますか？',
    answer:
      'アプリの「設定」から「学習データをリセット」を選択できます。ステージ進捗、星のかけら、検定記録、学習ログが削除されます。この操作は元に戻せません。',
  },
  {
    icon: Bell,
    question: '学習リマインダーが届きません。',
    answer:
      'アプリ内の通知設定に加えて、iPhoneの「設定」→「通知」→「星プラっと」で通知が許可されているか確認してください。通知は端末内で予約され、独自サーバーからのプッシュ配信は行いません。',
  },
  {
    icon: Music2,
    question: 'BGMや効果音が聞こえません。',
    answer:
      'アプリ内設定でBGM・効果音がオンになっているか、端末の音量と消音モードを確認してください。Bluetooth機器に音声が出力されていないかも確認してください。',
  },
  {
    icon: Smartphone,
    question: '画面が見切れる、操作できない場所があります。',
    answer:
      'アプリを一度終了して再起動し、iOSが最新の状態か確認してください。改善しない場合は、端末名・iOSバージョン・問題が起きた画面・スクリーンショットを添えてお問い合わせください。',
  },
  {
    icon: Wrench,
    question: '不具合を報告するとき、何を書けばよいですか？',
    answer:
      '端末名、iOSバージョン、アプリバージョン、発生した画面、発生までの操作手順、再現する頻度をお知らせください。個人情報やパスワードは送らないでください。',
  },
];

export default function SupportPage() {
  return (
    <StarPlaLegalShell
      eyebrow="SUPPORT"
      title="サポート"
      lead="星プラっとの動作環境、よくある質問、不具合報告の窓口をまとめています。"
      updated="2026年7月21日"
    >
      <section className="rounded-lg border border-[#dce2ed] bg-white p-6 sm:p-8">
        <h2>動作環境</h2>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <dt>対応端末</dt>
            <dd>iPhone</dd>
          </div>
          <div>
            <dt>対応OS</dt>
            <dd>iOS 15.0以降</dd>
          </div>
          <div>
            <dt>通信</dt>
            <dd>基本機能はオフラインで利用可能</dd>
          </div>
          <div>
            <dt>アカウント</dt>
            <dd>登録・ログイン不要</dd>
          </div>
        </dl>
      </section>

      <section id="faq" className="mt-14 scroll-mt-24">
        <p className="section-label">FAQ</p>
        <h2>よくある質問</h2>
        <div className="mt-7 divide-y divide-[#dce2ed] border-y border-[#dce2ed]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-transparent">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 font-semibold text-[#172035]">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#eaf0fc] text-[#365b9d]">
                  <faq.icon className="h-4 w-4" />
                </span>
                <span className="flex-1">{faq.question}</span>
                <span className="text-xl font-normal text-[#778196] group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pl-[3.25rem] text-sm leading-7 text-[#59647a]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-lg bg-[#081026] p-6 text-white sm:p-8">
        <Mail className="h-6 w-6 text-[#ffd889]" />
        <h2 className="mt-5 text-white">解決しない場合</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          ご質問、ご要望、不具合報告はメールで受け付けています。通常は内容を確認後、必要に応じて返信します。
        </p>
        <a
          href="mailto:star0cone.dev@gmail.com?subject=%E6%98%9F%E3%83%97%E3%83%A9%E3%81%A3%E3%81%A8%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ffd889] px-5 py-3 text-sm font-bold text-[#17120b] hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          star0cone.dev@gmail.com
        </a>
        <p className="mt-4 text-xs leading-6 text-slate-500">
          返信を保証するものではありません。迷惑メール設定により返信を受信できない場合があります。
        </p>
      </section>
    </StarPlaLegalShell>
  );
}
