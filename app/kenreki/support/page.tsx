import type { Metadata } from 'next';
import {
  Bell,
  CalendarDays,
  Database,
  Mail,
  RotateCcw,
  Smartphone,
  Wrench,
} from 'lucide-react';
import KenrekiLegalShell from '@/components/kenreki/KenrekiLegalShell';

export const metadata: Metadata = {
  title: 'サポート | Telra',
  description: '研究計画・進捗カレンダー「Telra」の動作環境、よくある質問、不具合報告・お問い合わせ窓口です。',
  alternates: {
    canonical: '/kenreki/support',
  },
};

const faqs = [
  {
    icon: Smartphone,
    question: '「研暦」と「Telra」は同じアプリですか？',
    answer: 'はい。研暦の名称と画面を刷新したアプリがTelra（テルラ）です。現在アップデートを準備しています。同じApp Storeページから更新できるようにし、既存の研究計画や記録を引き継ぐ構成を維持しています。更新のためにアプリを削除する必要はありません。',
  },
  {
    icon: Database,
    question: '機種変更後も研究計画を引き継げますか？',
    answer:
      '現在、研究計画、実績、成果メモ、設定は端末内に保存されます。アカウント同期や独自クラウドへの引き継ぎには対応していないため、機種変更やアプリ削除でデータが失われる場合があります。OSのバックアップ設定によっては、暗号化バックアップに含まれる場合があります。',
  },
  {
    icon: CalendarDays,
    question: '端末カレンダーの予定はすべて取り込まれますか？',
    answer:
      'いいえ。同期するカレンダー、対象期間、予定名のキーワードやタグを利用者が選び、条件に一致した予定だけを端末内へ取り込みます。Telraから端末カレンダーの予定を作成、変更、削除することはありません。',
  },
  {
    icon: Bell,
    question: '通知やLive Activityが表示されません。',
    answer:
      'iPhoneの「設定」→「通知」→「Telra」で通知が許可されているか確認してください。Live ActivityはCore Timeを開始したときに表示されます。WidgetとLive ActivityにはiOS 17.0以降が必要です。Live ActivityはiPhoneの「設定」→「アプリ」→「Telra（旧・研暦）」でも許可を確認してください。',
  },
  {
    icon: RotateCcw,
    question: 'すべてのデータを削除できますか？',
    answer:
      'アプリの「設定」→「アプリ」→「全データを初期化」から削除できます。研究計画、実績、成果メモ、同期した予定、設定が初期化され、この操作は元に戻せません。',
  },
  {
    icon: Smartphone,
    question: '画面が見切れる、Widgetが更新されない場合は？',
    answer:
      'アプリを一度終了して再起動し、iOSとTelraが最新の状態か確認してください。Widgetはホーム画面から一度削除して追加し直すと改善する場合があります。',
  },
  {
    icon: Wrench,
    question: '不具合報告には何を書けばよいですか？',
    answer:
      '端末名、iOSバージョン、アプリバージョン、問題が起きた画面、操作手順、再現頻度をお知らせください。研究内容、カレンダー予定、個人情報が写った画像は、必要な部分を隠してから送信してください。',
  },
];

export default function KenrekiSupportPage() {
  return (
    <KenrekiLegalShell
      eyebrow="SUPPORT"
      title="サポート"
      lead="Telraの動作環境、データの保存、カレンダー連携、通知に関する案内をまとめています。"
      updated="2026年9月6日"
    >
      <section className="rounded-lg border border-[#d2e5e8] bg-white p-6 sm:p-8">
        <h2>動作環境</h2>
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <dt>対応端末</dt>
            <dd>iPhone</dd>
          </div>
          <div>
            <dt>対応OS</dt>
            <dd>iOS 16.4以降</dd>
          </div>
          <div>
            <dt>Widget・Live Activity</dt>
            <dd>iOS 17.0以降（Dynamic Islandは対応機種）</dd>
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
        <div className="mt-7 divide-y divide-[#d2e5e8] border-y border-[#d2e5e8]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-transparent">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 font-semibold text-[#14343c]">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#e4f5f7] text-[#007d8c]">
                  <faq.icon className="h-4 w-4" />
                </span>
                <span className="flex-1">{faq.question}</span>
                <span className="text-xl font-normal text-[#789097] group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pl-[3.25rem] text-sm leading-7 text-[#58737a]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-14 scroll-mt-24 rounded-lg bg-[#082a33] p-6 text-white sm:p-8">
        <Mail className="h-6 w-6 text-[#56d6df]" />
        <h2 className="mt-5 !text-white">解決しない場合</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c5dde0]">
          ご質問、ご要望、不具合報告はメールで受け付けています。研究内容や個人情報を本文へ記載する必要はありません。
        </p>
        <a
          href="mailto:star0cone.dev@gmail.com?subject=Telra%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold !text-[#14343c] !no-underline hover:bg-[#dff5f7]"
        >
          <Mail className="h-4 w-4" />
          star0cone.dev@gmail.com
        </a>
        <p className="mt-4 text-xs leading-6 text-[#9fc3c8]">
          内容を確認後、必要に応じて返信します。返信を保証するものではありません。
        </p>
      </section>
    </KenrekiLegalShell>
  );
}
