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
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第1条（適用）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本規約は、本アプリケーション「star⭐︎cone（すたー⭐︎こねくしょん）」（以下「本アプリ」といいます）の利用に関する条件を、本アプリを提供する運営者（以下「当アプリ運営者」といいます）と利用者との間で定めるものです。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 利用者は、本アプリをダウンロード、インストールまたは利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第2条（定義）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本規約において使用する用語の定義は、以下のとおりとします。
            </p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>(1) 「本サービス」：当アプリ運営者が本アプリを通じて提供する星座学習ゲームサービス</li>
              <li>(2) 「利用者」：本アプリをダウンロード、インストールまたは利用する全ての個人</li>
              <li>(3) 「有料サービス」：本サービスのうち、有料で提供される機能・コンテンツ</li>
              <li>(4) 「サブスクリプション」：月額課金による継続的なサービス提供</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第3条（サービス内容）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本サービスは、星座の形を学習するための教育的ゲームアプリケーションです。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              2. 本サービスには、無料で利用できる範囲と、有料で提供される追加機能があります。
            </p>
            <p className="text-gray-300 leading-relaxed">
              3. 当アプリ運営者は、利用者への事前通知なく、本サービスの内容を変更、追加、削除することができるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第4条（利用資格）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本アプリは、4歳以上の方がご利用いただけます。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              2. 有料サービスの購入にあたっては、保護者の同意を得た上で、保護者の監督のもとで行ってしてください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第5条（料金および支払）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 有料サービスの料金は、アプリ内に表示される価格に従います。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              2. サブスクリプションサービスは、以下の条件で提供されます：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>初回登録時に3日間の無料トライアル期間が適用されます</li>
              <li>トライアル期間終了後、自動的に有料プランに移行し、月額240円（税込）が課金されます</li>
              <li>課金は毎月自動的に更新されます</li>
              <li>解約しない限り、自動更新が継続されます</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 mb-4">
              3. 支払いは、App StoreまたはGoogle Playを通じて行われます。
            </p>
            <p className="text-gray-300 leading-relaxed">
              4. 一度支払われた料金は、原則として返金されません。ただし、当アプリ運営者の責めに帰すべき事由がある場合は、この限りではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第6条（解約）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. サブスクリプションサービスは、利用者がいつでも解約できます。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              2. 解約は、次回更新日の24時間前までに、App StoreまたはGoogle Playの設定画面から行ってください。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              3. 本アプリをアンインストールしても、自動的に解約されません。必ず上記の手順で解約手続きを行ってください。
            </p>
            <p className="text-gray-300 leading-relaxed">
              4. 解約後も、現在の課金期間が終了するまでサービスをご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第7条（禁止事項）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              利用者は、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>(1) 法令または公序良俗に違反する行為</li>
              <li>(2) 本アプリを不正に改変、リバースエンジニアリングする行為</li>
              <li>(3) 本アプリのセキュリティを侵害する行為</li>
              <li>(4) 当アプリ運営者または第三者の知的財産権を侵害する行為</li>
              <li>(5) 他の利用者または第三者に迷惑をかける行為</li>
              <li>(6) 本サービスの運営を妨害する行為</li>
              <li>(7) その他、当アプリ運営者が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第8条（知的財産権）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本アプリおよび本サービスに関する知的財産権は、全て当アプリ運営者または当アプリ運営者にライセンスを許諾している者に帰属します。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 本規約に基づく本サービスの利用許諾は、本アプリまたは本サービスに関する知的財産権の譲渡を意味するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第9条（免責事項）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 当アプリ運営者は、本サービスが利用者の特定の目的に適合すること、期待する機能・価値・正確性を有すること、不具合が生じないことについて、何ら保証するものではありません。
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              2. 本サービスの利用により利用者に生じた損害について、当アプリ運営者は一切の責任を負いません。ただし、当アプリ運営者の故意または重過失による場合は、この限りではありません。
            </p>
            <p className="text-gray-300 leading-relaxed">
              3. 本サービスは教育目的で提供されており、天文学的な完全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第10条（サービスの変更・中断・終了）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 当アプリ運営者は、利用者への事前通知なく、本サービスの内容を変更、または本サービスの提供を中断・終了することができます。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 当アプリ運営者は、本サービスの変更、中断または終了により利用者に生じた損害について、一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第11条（プライバシー）</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリ運営者は、利用者の個人情報を、別途定めるプライバシーポリシーに従って適切に取り扱います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第12条（本規約の変更）</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリ運営者は、必要に応じて本規約を変更することができます。変更後の規約は、本アプリ内での掲示により効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第13条（準拠法および管轄裁判所）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本規約の準拠法は日本法とします。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 本規約に関する紛争については、山口地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-12">
            制定日: 2025年10月1日<br />
            最終更新日: 2025年10月19日
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
