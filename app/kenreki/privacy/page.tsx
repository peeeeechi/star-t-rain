import type { Metadata } from 'next';
import KenrekiLegalShell from '@/components/kenreki/KenrekiLegalShell';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 研暦',
  description: '研暦における研究計画、カレンダー予定、通知、Widgetなどのデータの取り扱いを説明します。',
  alternates: {
    canonical: '/kenreki/privacy',
  },
};

export default function KenrekiPrivacyPage() {
  return (
    <KenrekiLegalShell
      eyebrow="PRIVACY POLICY"
      title="プライバシーポリシー"
      lead="研暦は、研究計画やカレンダー予定などの内容を開発者のサーバーへ送信しません。"
      updated="2026年7月29日"
    >
      <section>
        <h2>1. 取り扱うデータ</h2>
        <p>
          研暦は、利用者が入力した研究計画、予定、締切、Core Timeの実績、成果メモ、振り返り、アプリ設定を端末内に保存します。アカウント登録はなく、氏名やメールアドレスの入力を求めません。
        </p>
      </section>

      <section>
        <h2>2. 端末カレンダー</h2>
        <p>
          カレンダー同期は任意です。利用者が選んだカレンダーと期間の予定を読み取り、絞り込み条件に一致した予定だけを端末内の計画へ取り込みます。研暦から端末カレンダーへ予定を書き込んだり、変更・削除したりすることはありません。
        </p>
      </section>

      <section>
        <h2>3. 通知・Widget・Live Activity</h2>
        <p>
          通知は端末上でスケジュールされます。WidgetとLive Activityには、次のCore Timeなど表示に必要な最小限の情報だけをApp Groupの共有領域へ保存します。この情報が開発者のサーバーへ送信されることはありません。
        </p>
      </section>

      <section>
        <h2>4. 外部送信と追跡</h2>
        <p>
          研暦には広告、行動解析、トラッキングSDK、開発者が運用するデータ収集サーバーはありません。入力内容やカレンダー由来の予定を、開発者または第三者へ送信、販売、共有しません。
        </p>
      </section>

      <section>
        <h2>5. 保存と削除</h2>
        <p>
          データは端末内のアプリ領域に保存されます。端末やOSの設定によっては、OSが提供する暗号化バックアップに含まれる場合があります。アプリ内の「設定」→「アプリ」→「全データを初期化」から保存データを削除できます。アプリを削除した場合も、端末上のアプリデータは削除されます。
        </p>
      </section>

      <section>
        <h2>6. 公式サイト</h2>
        <p>
          本ページはVercel上で配信されています。サービス提供やセキュリティ確保のため、Vercelによりアクセスログ等が処理される場合があります。また、運営サイト全体のアクセス解析設定が有効な場合、ページの閲覧情報が計測される場合があります。これらの情報にアプリ内の研究計画やカレンダー予定は含まれず、アプリのデータと結び付けません。
        </p>
      </section>

      <section>
        <h2>7. 方針の変更</h2>
        <p>
          機能追加、利用サービスの変更、法令の改正などにより取り扱いが変わる場合は、本ポリシーとアプリ内の表示を更新します。重要な変更がある場合は、アプリ内または本ページでお知らせします。
        </p>
      </section>

      <section>
        <h2>8. お問い合わせ</h2>
        <p>本ポリシーに関するお問い合わせは、以下の窓口までお願いします。</p>
        <p>
          メールアドレス:{' '}
          <a href="mailto:star0cone.dev@gmail.com?subject=%E7%A0%94%E6%9A%A6%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC">
            star0cone.dev@gmail.com
          </a>
        </p>
      </section>

      <p className="document-date">
        制定日: 2026年7月29日
        <br />
        最終更新日: 2026年7月29日
      </p>
    </KenrekiLegalShell>
  );
}
