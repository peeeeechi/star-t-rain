export const metadata = {
  title: '利用規約 | star⭐︎cone（星コネ）',
  description: 'star⭐︎cone（星コネ）の利用規約',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">利用規約</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は、star⭐︎cone（以下「本アプリ」）の利用に関する条件を定めるものです。ユーザーは、本アプリを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第2条（利用許諾）</h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリの開発者は、ユーザーに対し、本規約に従った本アプリの非独占的な利用を許諾します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第3条（禁止事項）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ユーザーは、以下の行為を行ってはなりません：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>本アプリの不正利用</li>
              <li>本アプリの改変、リバースエンジニアリング</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>法令または公序良俗に違反する行為</li>
              <li>本アプリの運営を妨害する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第4条（課金サービス）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリでは、以下の課金サービスを提供しています：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>プレミアムサブスクリプション（月額240円、3日間無料トライアル付き）</li>
              <li>プレミアムパック（買い切り600円）</li>
              <li>各種モードパック（中級・上級・プロ）</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              課金サービスの購入は、各プラットフォーム（App Store、Google Play）の規約に従います。返金については各プラットフォームのポリシーに準じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第5条（免責事項）</h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリの開発者は、本アプリの利用によって生じた損害について、法令上許される限り一切の責任を負いません。本アプリは現状有姿で提供され、その品質、性能について保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第6条（サービスの変更・終了）</h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリの開発者は、ユーザーへの事前の通知なく、本アプリの内容を変更し、または提供を終了することができます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第7条（規約の変更）</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は、必要に応じて変更することがあります。変更後の規約は、本ページに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第8条（準拠法・管轄裁判所）</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は日本法に準拠します。本アプリに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">第9条（お問い合わせ）</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約に関するお問い合わせは、以下までご連絡ください：<br />
              メール: <a href="mailto:star0cone.dev@gmail.com" className="text-blue-400 hover:text-blue-300">star0cone.dev@gmail.com</a>
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-12">
            制定日: 2025年10月17日
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
