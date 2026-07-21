import type { Metadata } from 'next';
import StarPlaLegalShell from '@/components/star-cone/StarPlaLegalShell';

export const metadata: Metadata = {
  title: '天文データと出典 | 星プラっと',
  description:
    '星プラっとで表示する恒星、星座、月齢・月相、天文カレンダーの表示方針と参照資料を公開します。',
  alternates: {
    canonical: '/star-cone/data-sources',
  },
};

const references = [
  {
    name: 'SIMBAD Astronomical Database',
    owner: 'CDS, Strasbourg',
    use: '恒星ごとの座標、等級、年周視差、スペクトル型などの横断確認',
    href: 'https://simbad.cds.unistra.fr/simbad/',
  },
  {
    name: 'Hipparcos Catalogue (I/239)',
    owner: 'ESA / CDS VizieR',
    use: 'HIP番号、J2000座標、年周視差、V等級などの確認',
    href: 'https://cdsarc.cds.unistra.fr/viz-bin/cat/I/239',
  },
  {
    name: 'Bright Star Catalogue, 5th Revised Ed. (V/50)',
    owner: 'Yale / CDS VizieR',
    use: '肉眼で見える恒星の等級、スペクトル型、名称などの確認',
    href: 'https://cdsarc.cds.unistra.fr/viz-bin/cat/V/50',
  },
  {
    name: 'IAU Working Group on Star Names',
    owner: 'International Astronomical Union',
    use: '国際天文学連合が承認した恒星固有名の確認',
    href: 'https://www.iau.org/WG280/WG280/Home.aspx',
  },
  {
    name: 'The Constellations',
    owner: 'International Astronomical Union',
    use: '88星座の定義と公式境界に関する確認',
    href: 'https://www.iau.org/Iau/Science/What-we-do/The-Constellations.aspx',
  },
  {
    name: '星座名・星座略符一覧',
    owner: '国立天文台',
    use: '星座の日本語名、学名、略符、見頃の目安の確認',
    href: 'https://www.nao.ac.jp/new-info/constellation.html',
  },
  {
    name: 'ほしぞら情報2026年',
    owner: '国立天文台',
    use: '天文カレンダーの現象日、日本での見頃、観察条件の確認',
    href: 'https://www.nao.ac.jp/astro/sky/2026/',
  },
  {
    name: '令和8年（2026）暦要項 朔弦望',
    owner: '国立天文台 暦計算室',
    use: '朔、上弦、望、下弦の時刻による月相計算の照合',
    href: 'https://eco.mtk.nao.ac.jp/koyomi/yoko/2026/rekiyou263.html',
  },
  {
    name: 'Astronomy Engine',
    owner: 'CosineKitty',
    use: '端末現地正午の月齢、月相角、月の明るい割合の天文計算',
    href: 'https://github.com/cosinekitty/astronomy',
  },
];

export default function DataSourcesPage() {
  return (
    <StarPlaLegalShell
      eyebrow="ASTRONOMY DATA"
      title="天文データと出典"
      lead="星プラっとで表示している恒星・星座・月相・天文行事の意味、編纂方法、参照資料を公開します。"
      updated="2026年7月22日"
    >
      <section>
        <h2>表示データの考え方</h2>
        <p>
          本アプリの恒星データと天文行事は、単一の外部APIからリアルタイムに取得したものではありません。複数の標準的な天文カタログと公開資料の値を参照し、モバイル画面での学習に適した内容へ編纂して収録しています。月齢と月相のみ、端末内で日ごとに計算します。
        </p>
        <p>
          表示内容は教育用です。観測計画、望遠鏡の自動導入、航法、研究など、高い精度や最新の観測値が必要な用途には使用せず、各カタログの原典を確認してください。
        </p>
      </section>

      <section>
        <h2>項目ごとの表示方針</h2>
        <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <dt>星の位置</dt>
            <dd>J2000.0 / ICRSの赤経・赤緯を、各画面の星図投影へ変換して表示</dd>
          </div>
          <div>
            <dt>明るさ</dt>
            <dd>主にJohnson V等級。変光星では学習用の代表値を表示</dd>
          </div>
          <div>
            <dt>スペクトル型</dt>
            <dd>MKスペクトル分類を基本とし、教材ではO・B・A・F・G・K・Mなどへ簡略化する場合あり</dd>
          </div>
          <div>
            <dt>距離</dt>
            <dd>主に年周視差から求めた距離を光年へ換算し、学習用の概数として表示</dd>
          </div>
          <div>
            <dt>月齢・月相</dt>
            <dd>端末現地正午から直前の朔までの経過日数と、太陽・月の黄経差から計算</dd>
          </div>
          <div>
            <dt>天文カレンダー</dt>
            <dd>国立天文台の年度別公開情報から、日本での見頃と観察条件を日本標準時で編纂</dd>
          </div>
        </dl>
      </section>

      <section>
        <h2>参照資料</h2>
        <p>名称を選ぶと、各機関が公開している資料を確認できます。</p>
        <dl className="mt-6 border-y border-[#dce2ed]">
          {references.map((reference) => (
            <div key={reference.href} className="border-b border-[#dce2ed] py-5 last:border-b-0">
              <dt>{reference.owner}</dt>
              <dd>
                <a href={reference.href} target="_blank" rel="noreferrer">
                  {reference.name}
                </a>
              </dd>
              <p className="!mt-2 text-sm leading-7 text-[#59647a]">{reference.use}</p>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>月齢・月相と天文カレンダー</h2>
        <p>
          タイトル画面の月齢は、端末現地正午から直前の朔までの経過日数です。月の明るい割合と欠け方は、Astronomy Engineで求めた太陽と月の黄経差から描画し、国立天文台「暦要項」の朔弦望と照合しています。
        </p>
        <p>
          天文カレンダーは国立天文台「ほしぞら情報」などの年度別公開情報をもとに、日本で見やすい主な天文現象を日本標準時で編纂しています。年度更新時に内容を手動で確認し、アプリの更新で差し替えます。
        </p>
      </section>

      <section>
        <h2>星座線と星座の範囲</h2>
        <p>
          国際天文学連合（IAU）が公式に定めているのは、全天を88星座に分ける名称と境界です。星同士を結ぶ「星座線」には世界共通の公式形状がありません。本アプリでは、西洋星座の代表的な学習図を参考に、スマートフォンで形を覚えやすい線を採用しています。
        </p>
      </section>

      <section>
        <h2>照合と更新</h2>
        <p>
          誤差や転記ミスを減らすため、収録星座の追加とアプリ更新に合わせて、恒星のカタログIDと採用値、月相、年度別の天文行事を継続して照合します。表示値に疑問がある場合は、対象の日付・星座名・恒星名・画面を添えてサポート窓口までお知らせください。
        </p>
      </section>
    </StarPlaLegalShell>
  );
}
