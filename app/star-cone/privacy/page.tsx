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
            <p className="text-gray-300 leading-relaxed">
              本アプリケーション「star⭐︎cone（すたー⭐︎こねくしょん）」（以下「本アプリ」といいます）の運営者（以下「当アプリ運営者」といいます）は、利用者の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第1条（個人情報）</h2>
            <p className="text-gray-300 leading-relaxed">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第2条（個人情報の収集方法）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリでは、以下の情報を収集する場合があります：
            </p>
            <div className="text-gray-300 space-y-4 ml-4">
              <div>
                <p className="font-semibold mb-2">1. ゲームプレイデータ</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>スコア、プレイ時間、星座の解放状況</li>
                  <li>ゲームの進捗状況</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">2. 端末情報</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>OS種別、OSバージョン</li>
                  <li>端末の機種名</li>
                  <li>アプリのバージョン情報</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">3. 購入情報</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>App StoreまたはGoogle Playを通じた購入履歴</li>
                  <li>サブスクリプション状況</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              ※本アプリは、氏名、メールアドレス、電話番号等の個人を直接特定できる情報は収集しません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第3条（個人情報の利用目的）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリ運営者は、収集した情報を以下の目的で利用します：
            </p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>(1) 本サービスの提供・運営のため</li>
              <li>(2) ゲームデータの保存・復元のため</li>
              <li>(3) 課金サービスの提供・管理のため</li>
              <li>(4) 本サービスの改善・新機能の開発のため</li>
              <li>(5) 利用状況の分析・統計データの作成のため</li>
              <li>(6) 不正利用の検知・防止のため</li>
              <li>(7) お問い合わせへの対応のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第4条（個人情報の第三者提供）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリ運営者は、以下の場合を除き、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません：
            </p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>(1) 法令に基づく場合</li>
              <li>(2) 人の生命、身体または財産の保護のために必要がある場合</li>
              <li>(3) 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>(4) 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第5条（第三者サービスの利用）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリは、以下の第三者サービスを利用しています：
            </p>
            <div className="text-gray-300 space-y-4 ml-4">
              <div>
                <p className="font-semibold mb-2">1. App Store（Apple Inc.）</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>アプリ内課金の処理</li>
                  <li>サブスクリプション管理</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">2. Google Play（Google LLC）</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>アプリ内課金の処理</li>
                  <li>サブスクリプション管理</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              これらのサービスは、独自のプライバシーポリシーに基づいて情報を取り扱います。詳細は各サービスのプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第6条（個人情報の開示）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当アプリ運営者は、利用者から個人情報の開示を求められたときは、利用者ご本人に対し、遅滞なくこれを開示します。ただし、開示することにより以下のいずれかに該当する場合は、その全部または一部を開示しないこともあります：
            </p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>(1) 利用者または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
              <li>(2) 当アプリ運営者の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>(3) 法令に違反することとなる場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第7条（個人情報の訂正および削除）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 利用者は、当アプリ運営者の保有する自己の個人情報が誤った情報である場合には、当アプリ運営者が定める手続きにより、当アプリ運営者に対して個人情報の訂正または削除を請求することができます。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 当アプリ運営者は、利用者から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正または削除を行います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第8条（個人情報の利用停止等）</h2>
            <p className="text-gray-300 leading-relaxed">
              当アプリ運営者は、利用者から、個人情報が利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下「利用停止等」といいます）を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第9条（プライバシーポリシーの変更）</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              1. 本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく変更することができるものとします。
            </p>
            <p className="text-gray-300 leading-relaxed">
              2. 当アプリ運営者が別途定める場合を除いて、変更後のプライバシーポリシーは、本アプリ内に掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffd700]">第10条（お問い合わせ窓口）</h2>
            <p className="text-gray-300 leading-relaxed">
              本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              メールアドレス: <a href="mailto:star0cone.dev@gmail.com" className="text-blue-400 hover:text-blue-300">star0cone.dev@gmail.com</a>
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
