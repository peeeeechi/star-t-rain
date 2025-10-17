export const metadata = {
  title: '特定商取引法に基づく表記 | star⭐︎cone（星コネ）',
  description: 'star⭐︎cone（星コネ）の特定商取引法に基づく表記',
};

export default function CommercialTransactionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">販売事業者</h2>
            <p className="text-gray-300 leading-relaxed">
              中村 桃太朗
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">運営責任者</h2>
            <p className="text-gray-300 leading-relaxed">
              中村 桃太朗
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">所在地</h2>
            <p className="text-gray-300 leading-relaxed">
              山口県柳井市
              <br />
              <span className="text-sm text-gray-400">※詳細な住所については、お問い合わせいただいた場合に遅滞なく開示いたします</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              メール: <a href="mailto:star0cone.dev@gmail.com" className="text-blue-400 hover:text-blue-300">star0cone.dev@gmail.com</a>
              <br />
              <span className="text-sm text-gray-400">※お問い合わせは電子メールにて承ります</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">販売価格</h2>
            <div className="text-gray-300 leading-relaxed space-y-2">
              <p><strong>プレミアムサブスクリプション:</strong> 月額240円（税込）</p>
              <p className="text-sm text-gray-400 ml-4">※3日間の無料トライアル付き</p>
              <p><strong>プレミアムパック:</strong> 600円（税込・買い切り）</p>
              <p><strong>中級モードパック:</strong> 160円（税込・買い切り）</p>
              <p><strong>上級モードパック:</strong> 320円（税込・買い切り）</p>
              <p><strong>プロモードパック:</strong> 480円（税込・買い切り）</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">販売価格以外の必要料金</h2>
            <p className="text-gray-300 leading-relaxed">
              インターネット接続料金、通信料金等はお客様のご負担となります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">支払方法</h2>
            <p className="text-gray-300 leading-relaxed">
              App Store、Google Playの決済システムを通じてお支払いいただきます。各プラットフォームで利用可能な支払方法（クレジットカード、キャリア決済等）をご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">支払時期</h2>
            <div className="text-gray-300 leading-relaxed space-y-2">
              <p><strong>サブスクリプション:</strong> 無料トライアル終了後、毎月自動的に課金されます</p>
              <p><strong>買い切りパック:</strong> 購入時に即時決済されます</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">商品の引渡時期</h2>
            <p className="text-gray-300 leading-relaxed">
              決済完了後、即座にアプリ内で機能が利用可能となります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">返品・キャンセルポリシー</h2>
            <p className="text-gray-300 leading-relaxed">
              デジタルコンテンツの性質上、原則として返品・返金はできません。ただし、各プラットフォーム（App Store、Google Play）の返金ポリシーに従い、一定の条件下で返金を受けられる場合があります。返金については各プラットフォームに直接お問い合わせください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">サブスクリプションの解約</h2>
            <p className="text-gray-300 leading-relaxed">
              サブスクリプションは、App StoreまたはGoogle Playの設定画面からいつでも解約できます。解約後も現在の課金期間終了まではサービスをご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">動作環境</h2>
            <div className="text-gray-300 leading-relaxed space-y-2">
              <p><strong>iOS:</strong> iOS 13.0以上</p>
              <p><strong>Android:</strong> Android 5.0以上</p>
              <p className="text-sm text-gray-400">※推奨環境以外での動作は保証いたしかねます</p>
            </div>
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
