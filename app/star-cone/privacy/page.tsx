export const metadata = {
  title: 'プライバシーポリシー | star⭐︎cone（星コネ）',
  description: 'star⭐︎cone（星コネ）のプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. はじめに</h2>
            <p className="text-gray-300 leading-relaxed">
              本プライバシーポリシーは、star⭐︎cone（以下「本アプリ」）における個人情報の取扱いについて説明するものです。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. 収集する情報</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリでは、以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>ゲームのプレイ履歴</li>
              <li>アプリの使用状況データ</li>
              <li>デバイス情報（機種、OSバージョン等）</li>
              <li>購入履歴（課金アイテムの購入時）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. 情報の利用目的</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              収集した情報は以下の目的で利用します：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>アプリの機能提供およびサービスの向上</li>
              <li>ユーザーサポート</li>
              <li>不正利用の防止</li>
              <li>統計データの作成</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. 情報の第三者提供</h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. 情報の管理</h2>
            <p className="text-gray-300 leading-relaxed">
              収集した情報は、適切なセキュリティ対策を講じて管理します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              プライバシーポリシーに関するお問い合わせは、以下までご連絡ください：<br />
              メール: <a href="mailto:star0cone.dev@gmail.com" className="text-blue-400 hover:text-blue-300">star0cone.dev@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. 改定</h2>
            <p className="text-gray-300 leading-relaxed">
              本プライバシーポリシーは、必要に応じて改定することがあります。改定した場合は、本ページにて通知いたします。
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-12">
            最終更新日: 2025年10月17日
          </p>
        </div>

        <div className="mt-12 text-center">
          <a href="/star-cone" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← star⭐︎coneトップページに戻る
          </a>
        </div>
      </div>
    </div>
  );
}
