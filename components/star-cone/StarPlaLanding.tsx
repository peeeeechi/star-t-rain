import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  CircleCheck,
  FlaskConical,
  GraduationCap,
  HelpCircle,
  Mail,
  Route,
  ShieldCheck,
  Sparkles,
  Telescope,
} from 'lucide-react';
import StarPlaNavigation from './StarPlaNavigation';

const missions = [
  {
    icon: Route,
    title: '星座をつなぐ',
    copy: '実際の星の配置を見ながら、タップまたは指でなぞって星座線を完成させます。',
  },
  {
    icon: Telescope,
    title: '星を見分ける',
    copy: 'α星・最輝星・固有名を手がかりに、星図の中から目的の星を探します。',
  },
  {
    icon: GraduationCap,
    title: '知識を確かめる',
    copy: '神話、等級、色と温度、季節などを4択クイズと検定チャレンジで復習します。',
  },
];

const learningTools = [
  '明るさと等級',
  '星の色と温度',
  '距離と光年',
  '天球座標',
  '月と潮汐',
  '季節と星座',
];

const screens = [
  { src: '/star-pla/screenshots/title.png', title: '今日の学習を続ける', tag: 'ホーム' },
  { src: '/star-pla/screenshots/quest.png', title: '天球から星座を選ぶ', tag: 'クエスト' },
  { src: '/star-pla/screenshots/orion-connect.png', title: '星をつないで形を覚える', tag: '線むすび' },
  { src: '/star-pla/screenshots/orion-quiz.png', title: '星座ごとの知識を確認', tag: '4択クイズ' },
  { src: '/star-pla/screenshots/color-lab.png', title: '色と温度を見比べる', tag: 'ラボ' },
  { src: '/star-pla/screenshots/tide-lab.png', title: '月と潮汐を動かして理解', tag: 'ラボ' },
  { src: '/star-pla/screenshots/zukan.png', title: '星のデータと物語を読む', tag: '図鑑' },
  { src: '/star-pla/screenshots/kentei.png', title: '10問のタイムに挑戦', tag: '検定' },
];

export default function StarPlaLanding() {
  return (
    <div className="min-h-screen bg-[#050917] text-white">
      <StarPlaNavigation />

      <section className="star-pla-hero relative flex h-[calc(100svh-20px)] min-h-[640px] items-start overflow-hidden border-b border-white/10 px-4 pb-0 pt-28 sm:px-6 md:h-[calc(100svh-32px)] md:min-h-[760px]">
        <div className="star-pla-stars absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <Image
            src="/star-pla/app-icon.png"
            alt="星プラっと アプリアイコン"
            width={96}
            height={96}
            className="mb-5 h-20 w-20 rounded-[18px] object-cover shadow-[0_20px_60px_rgba(69,119,255,0.24)] sm:h-24 sm:w-24"
            priority
          />
          <p className="mb-3 text-sm font-bold text-[#ffd889]">星座をスマホでパッと学ぶ</p>
          <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl md:text-7xl">
            星プラっと
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            星をつなぎ、見つけ、確かめる。
            <br className="hidden sm:block" />
            実際の天文データをもとに、星座と天文学の基礎を体験から学ぶiPhoneアプリです。
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-[#ffd889] px-5 py-3 text-sm font-bold text-[#17120b]">
              <Sparkles className="h-4 w-4" />
              App Store 公開準備中
            </span>
            <Link
              href="/star-cone/support"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <HelpCircle className="h-4 w-4" />
              サポート
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <span>iOS 15.0以降</span>
            <span>無料</span>
            <span>ログイン不要</span>
            <span>広告なし</span>
          </div>

          <div className="relative mt-12 h-[370px] w-full max-w-5xl sm:h-[470px] md:mt-14 md:h-[570px]">
            <div className="absolute left-1/2 top-16 w-[190px] -translate-x-[112%] -rotate-6 opacity-65 sm:w-[235px] md:top-20 md:w-[285px]">
              <Image
                src="/star-pla/screenshots/orion-connect.png"
                alt="オリオン座の線むすび画面"
                width={1242}
                height={2688}
                className="h-auto w-full rounded-[22px] border border-white/15 shadow-2xl"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-0 z-20 w-[205px] -translate-x-1/2 sm:w-[255px] md:w-[315px]">
              <Image
                src="/star-pla/screenshots/title.png"
                alt="星プラっとのホーム画面"
                width={1242}
                height={2688}
                className="h-auto w-full rounded-[24px] border border-[#ffd889]/35 shadow-[0_30px_90px_rgba(25,69,172,0.45)]"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-16 w-[190px] translate-x-[12%] rotate-6 opacity-65 sm:w-[235px] md:top-20 md:w-[285px]">
              <Image
                src="/star-pla/screenshots/color-lab.png"
                alt="星の色と温度ラボ画面"
                width={1242}
                height={2688}
                className="h-auto w-full rounded-[22px] border border-white/15 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-white/10 bg-[#081026] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#ffd889]">3つのミッション</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              覚える前に、まず星空を触ってみる
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              クエストは線むすび、星探し、4択クイズの順に進みます。形・名前・知識を分けて体験するため、星座を丸暗記だけで終わらせません。
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {missions.map((mission, index) => (
              <article key={mission.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#ffd889]/10 text-[#ffd889]">
                    <mission.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{mission.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{mission.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050917] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 text-[#ffd889]">
              <FlaskConical className="h-5 w-5" />
              <p className="text-sm font-bold">視覚学習ラボ</p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              動かして比べるから、天文の関係が見える
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              数字や用語だけではつかみにくい内容を、星図・図解・セレクターで確かめられます。中高理科の復習や、天文系の検定対策の入口にも使えます。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
              {learningTools.map((tool) => (
                <div key={tool} className="flex items-center gap-3 text-sm text-slate-200">
                  <CircleCheck className="h-4 w-4 shrink-0 text-[#73d4c3]" />
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <Image
              src="/star-pla/screenshots/color-lab.png"
              alt="星の色と温度ラボ"
              width={1242}
              height={2688}
              className="mt-10 h-auto w-full rounded-[20px] border border-white/10"
            />
            <Image
              src="/star-pla/screenshots/tide-lab.png"
              alt="月と潮汐ラボ"
              width={1242}
              height={2688}
              className="h-auto w-full rounded-[20px] border border-white/10"
            />
          </div>
        </div>
      </section>

      <section id="screens" className="overflow-hidden border-b border-white/10 bg-[#0a1124] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-[#ffd889]">アプリ画面</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                学ぶ流れを、ひとつの星空につなぐ
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              クエスト、ラボ、図鑑、検定を行き来しながら、気になった星座や知識を何度でも見直せます。
            </p>
          </div>
        </div>

        <div className="star-pla-screen-scroll mt-12 flex snap-x gap-5 overflow-x-auto px-[max(1rem,calc((100vw-80rem)/2))] pb-8">
          {screens.map((screen) => (
            <figure key={screen.src} className="w-[245px] shrink-0 snap-start sm:w-[280px]">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#050917]">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  width={1242}
                  height={2688}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="px-1 pt-4">
                <span className="text-xs font-bold text-[#ffd889]">{screen.tag}</span>
                <p className="mt-1 text-sm font-semibold text-slate-100">{screen.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050917] px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <Link
            href="/star-cone/support"
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#ffd889]/40"
          >
            <HelpCircle className="h-6 w-6 text-[#ffd889]" />
            <h2 className="mt-5 text-xl font-semibold">困ったときは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              よくある質問、動作環境、不具合を報告するときに必要な情報をまとめています。
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#ffd889]">
              サポートを見る
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/star-cone/privacy"
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#73d4c3]/40"
          >
            <ShieldCheck className="h-6 w-6 text-[#73d4c3]" />
            <h2 className="mt-5 text-xl font-semibold">データの取り扱い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              学習進捗は端末内に保存します。広告・解析・位置情報・アカウント認証のSDKは使用していません。
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#73d4c3]">
              プライバシーポリシー
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <a
            href="mailto:star0cone.dev@gmail.com?subject=%E6%98%9F%E3%83%97%E3%83%A9%E3%81%A3%E3%81%A8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-[#8eb7ff]/40"
          >
            <Mail className="h-6 w-6 text-[#8eb7ff]" />
            <h2 className="mt-5 text-xl font-semibold">お問い合わせ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              ご質問、ご要望、不具合報告はメールで受け付けています。
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#8eb7ff]">
              メールを開く
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>

      <footer className="bg-[#030611] px-4 py-10 text-slate-400 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/star-pla/app-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 rounded-[8px]"
            />
            <div>
              <p className="text-sm font-semibold text-white">星プラっと</p>
              <p className="mt-1 text-xs">© 2026 Momotaro Nakamura</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link href="/star-cone/support" className="hover:text-white">サポート</Link>
            <Link href="/star-cone/privacy" className="hover:text-white">プライバシー</Link>
            <Link href="/star-cone/terms" className="hover:text-white">利用規約</Link>
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white">
              開発者サイト
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
