export const metadata = {
  title: '特定商取引法に基づく表示 | star⭐︎cone（星コネ）',
  description: 'star⭐︎cone（星コネ）の特定商取引法に基づく表示',
};

export default function CommercialTransactionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">特定商取引法に基づく表示</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">販売業者</h2>
            <p className="text-gray-300 leading-relaxed">
              star⭐︎cone開発チーム
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">運営責任者</h2>
            <p className="text-gray-300 leading-relaxed">
              star⭐︎cone開発チーム
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ※運営責任者の氏名については、ご購入者様からのご請求があった場合、遅滞なく電子メールにて開示いたします
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">所在地</h2>
            <p className="text-gray-300 leading-relaxed">
              山口県柳井市
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ※番地以降の所在地については、ご購入者様からのご請求があった場合、遅滞なく電子メールにて開示いたします
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              メールアドレス: <a href="mailto:star0cone.dev@gmail.com" className="text-blue-400 hover:text-blue-300">star0cone.dev@gmail.com</a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ※お問い合わせはメールにて受け付けております
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">販売価格</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold mb-2">【サブスクリプション】</p>
                <p className="ml-4">プレミアムサブスクリプション: 月額240円（税込）</p>
                <p className="text-gray-400 text-sm ml-4">※3日間の無料トライアル付き</p>
              </div>
              <div>
                <p className="font-semibold mb-2">【買い切り】</p>
                <ul className="ml-4 space-y-1">
                  <li>中級アンロック: 160円（税込）</li>
                  <li>上級アンロック: 320円（税込）</li>
                  <li>プロフェッショナルアンロック: 480円（税込）</li>
                  <li>プレミアムパック: 600円（税込）</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">支払方法</h2>
            <p className="text-gray-300 leading-relaxed">
              App Store（Apple）またはGoogle Play（Android）を通じたアプリ内課金
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ※各プラットフォームに登録された支払い方法が使用されます
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">支払時期</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold mb-2">【サブスクリプション】</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>無料トライアル期間（3日間）終了後、自動的に課金が開始されます</li>
                  <li>その後、毎月同日に自動更新・課金されます</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">【買い切り】</p>
                <ul className="list-disc list-inside ml-4">
                  <li>購入確定時に即時課金されます</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">サービス提供時期</h2>
            <p className="text-gray-300 leading-relaxed">
              購入完了後、即時ご利用いただけます
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">返品・キャンセルについて</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              デジタルコンテンツの性質上、購入後の返品・返金には原則として応じられません。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              ただし、以下の場合は例外的に対応いたします：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>アプリの不具合により正常にサービスをご利用いただけない場合</li>
              <li>誤って購入された場合（購入後24時間以内のお申し出に限る）</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              返金をご希望の場合は、お問い合わせ先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">サブスクリプションの解約について</h2>
            <p className="text-gray-300 leading-relaxed mb-4 font-semibold">
              【重要】サブスクリプションは自動更新されます
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              解約をご希望の場合は、次回更新日の24時間前までに以下の方法で解約手続きを行ってください：
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-200 mb-2">【iOS（iPhone/iPad）の場合】</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-4">
                  <li>設定アプリを開く</li>
                  <li>[Apple ID] → [サブスクリプション] をタップ</li>
                  <li>star⭐︎cone（すたー⭐︎こねくしょん）を選択</li>
                  <li>[サブスクリプションをキャンセルする] をタップ</li>
                </ol>
              </div>
              <div>
                <p className="font-semibold text-gray-200 mb-2">【Androidの場合】</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-4">
                  <li>Google Playストアを開く</li>
                  <li>メニュー → [定期購入] をタップ</li>
                  <li>star⭐︎cone（すたー⭐︎こねくしょん）を選択</li>
                  <li>[定期購入を解約] をタップ</li>
                </ol>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              ※アプリをアンインストールしても解約されません。必ず上記の手順で解約してください。<br />
              ※解約後も、現在の課金期間が終了するまでサービスをご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">無料トライアル期間について</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>初回登録時のみ、3日間の無料トライアルをご利用いただけます</li>
              <li>トライアル期間中に解約すれば、料金は発生しません</li>
              <li>トライアル期間終了後、自動的に有料プランに移行し課金が開始されます</li>
              <li>トライアル期間の終了24時間前までに解約手続きを行ってください</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">動作環境</h2>
            <p className="text-gray-300 leading-relaxed">
              iOS 12.0以降 / Androidについては準備中
            </p>
            <p className="text-gray-400 text-sm mt-2">
              ※一部の端末では正常に動作しない場合があります
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">表示の最終更新日</h2>
            <p className="text-gray-300 leading-relaxed">
              2025年10月19日
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-12 text-center">
            本表示内容は、特定商取引法に基づき作成されています。
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
