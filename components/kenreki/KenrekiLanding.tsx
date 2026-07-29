import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarClock,
  ChartNoAxesCombined,
  ChevronRight,
  CircleCheck,
  Clock3,
  Focus,
  HelpCircle,
  History,
  LockKeyhole,
  Mail,
  MessageSquareText,
  MoveRight,
  Pause,
  Radio,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Timer,
  TimerReset,
  Workflow,
} from 'lucide-react';
import KenrekiNavigation from './KenrekiNavigation';

const pillars = [
  {
    icon: Workflow,
    number: '01',
    title: '締切から逆算する',
    copy: '論文、学会、申請の期日から必要な工程と研究時間をBackcast。着手日と不足時間を見える形にします。',
  },
  {
    icon: Focus,
    number: '02',
    title: '研究時間を守る',
    copy: 'Core Timeを週の保護帯として確保。会議や講義による侵食を見つけ、未完了の時間を再配置します。',
  },
  {
    icon: History,
    number: '03',
    title: '実績を次へつなぐ',
    copy: '予定と実績の差、成果メモ、一言振り返りを蓄積。計画のずれを次週と締切予測へ反映します。',
  },
];

const screens = [
  { src: '/kenreki/screenshots/01-home.png', title: '今日やる研究と迫る締切を見る', tag: '今日' },
  { src: '/kenreki/screenshots/02-week.png', title: '保護した時間と侵食を比べる', tag: '週次' },
  { src: '/kenreki/screenshots/03-month.png', title: '月の計画と実績を俯瞰する', tag: '月次' },
  { src: '/kenreki/screenshots/04-year.png', title: '研究工程を年度でつなぐ', tag: '年次' },
  { src: '/kenreki/screenshots/05-log.png', title: '成果と判断を短く残す', tag: '振り返り' },
];

const flow = [
  ['締切を置く', '論文、学会、申請など複数の期日を登録'],
  ['必要時間を見積もる', '工程とCore Timeをカレンダー上へ配置'],
  ['研究を実行する', '予定・実行中・完了と成果メモを記録'],
  ['ずれを組み直す', '未完了と侵食を翌日以降へ再配置'],
];

function PreviewRing({ compact = false }: { compact?: boolean }) {
  const size = compact ? 'h-14 w-14' : 'h-20 w-20';

  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full ${size}`}
      style={{ background: 'conic-gradient(#008a9a 0deg 56deg, rgba(0,138,154,0.26) 56deg 297deg, #dce5e7 297deg)' }}
    >
      <div className={`grid place-items-center rounded-full bg-white ${compact ? 'h-[44px] w-[44px]' : 'h-[62px] w-[62px]'}`}>
        <div className="text-center leading-none text-[#102a35]">
          <strong className={compact ? 'text-sm' : 'text-lg'}>3.1</strong>
          <span className={`block text-[#405861] ${compact ? 'mt-0.5 text-[8px]' : 'mt-1 text-[9px]'}`}>/ 20h</span>
        </div>
      </div>
    </div>
  );
}

function HomeWidgetPreview() {
  return (
    <div className="relative flex h-full min-h-[360px] flex-col bg-[#dff1f3] p-5 text-[#102a35]" aria-hidden="true">
      <div className="flex items-center justify-between text-[11px] font-semibold">
        <span>9:41</span>
        <span>5G&nbsp;&nbsp;100%</span>
      </div>
      <div className="mt-10 rounded-[22px] bg-white p-4 shadow-[0_18px_50px_rgba(16,42,53,0.15)]">
        <div className="flex gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <PreviewRing />
              <div className="pt-2">
                <p className="text-[9px] font-bold tracking-wider text-[#405861]">侵食</p>
                <p className="mt-1 text-base font-semibold text-[#9a4a00]">5h</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#08715d]" />
              <span className="text-xs font-semibold text-[#08715d]">0:42:18</span>
              <span className="truncate text-[9px] text-[#405861]">執筆・保護帯フル</span>
            </div>
            <p className="mt-3 truncate text-[9px] text-[#405861]">Paper II 査読対応</p>
            <p className="mt-0.5 text-[9px] text-[#9a4a00]">週 7h 必要</p>
          </div>
          <div className="w-[43%] min-w-0 border-l border-[#dce5e7] pl-4">
            <p className="text-[9px] font-bold tracking-widest text-[#405861]">このあと</p>
            {[
              ['Paper II 執筆', '13:00–15:00', true],
              ['共同研究 zoom', '16:00–17:00', false],
              ['解析メモ整理', '18:00–19:00', true],
            ].map(([title, time, core]) => (
              <div key={title as string} className="mt-3 flex gap-2">
                <span className={`h-6 w-[3px] rounded-full ${core ? 'bg-[#008a9a]' : 'bg-[#84949a]'}`} />
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-semibold">{title as string}</p>
                  <p className="mt-0.5 text-[8px] text-[#405861]">{time as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-4 gap-5 px-3 pb-2">
        {[Timer, CalendarClock, MessageSquareText, Focus].map((Icon, index) => (
          <div key={index} className="grid aspect-square place-items-center rounded-[14px] bg-white/70 text-[#008a9a]">
            <Icon className="h-5 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LockScreenPreview() {
  return (
    <div className="relative flex h-full min-h-[360px] flex-col items-center bg-[#b8d9dd] px-5 py-6 text-[#102a35]" aria-hidden="true">
      <LockKeyhole className="h-4 w-4" />
      <p className="mt-5 text-xs font-medium">7月30日 木曜日</p>
      <p className="mt-1 text-6xl font-light">9:41</p>
      <div className="mt-12 flex w-full max-w-[280px] items-center justify-center gap-3">
        <div className="grid h-[66px] w-[66px] place-items-center rounded-full bg-white/30 backdrop-blur-sm">
          <PreviewRing compact />
        </div>
        <div className="h-[66px] min-w-0 flex-1 rounded-[18px] bg-white/30 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-xs font-semibold">研暦 3.1/20h</p>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#102a35]" />
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#102a35]/20">
            <div className="h-full w-[16%] rounded-full bg-[#102a35]" />
          </div>
          <p className="mt-1.5 truncate text-[10px]">執筆・保護帯フル</p>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-1.5 rounded-full bg-white/25 px-4 py-2 text-[11px] backdrop-blur-sm">
        <Timer className="h-3.5 w-3.5" />
        <span>研暦 3.1/20h</span>
      </div>
    </div>
  );
}

function DynamicIslandPreview() {
  return (
    <div className="relative flex h-full min-h-[360px] flex-col bg-[#f3f7f8] px-5 py-6 text-[#102a35]" aria-hidden="true">
      <div className="mx-auto flex h-10 w-[235px] items-center justify-between rounded-full bg-black px-4 text-white shadow-lg">
        <div className="flex min-w-0 items-center gap-2 text-[#57c8ae]">
          <Timer className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate text-[11px] font-medium">執筆・保護帯フル</span>
        </div>
        <span className="ml-2 shrink-0 text-[11px] font-medium text-[#56d6df]">0:42:18</span>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[285px] rounded-[28px] bg-black px-5 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1.5 text-[#56d6df]"><Timer className="h-3 w-3" /> CORE TIME</span>
          <span className="text-[#56d6df]">0:42:18</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">執筆・保護帯フル</p>
            <p className="mt-1 text-[10px] text-white/55">予定 4h</p>
          </div>
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white">
            <Pause className="h-4 w-4 fill-current" />
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-center gap-2 text-xs text-[#405861]">
        <Radio className="h-4 w-4 text-[#08715d]" />
        <span>実行状態と経過時間をリアルタイム表示</span>
      </div>
    </div>
  );
}

export default function KenrekiLanding() {
  return (
    <div className="min-h-screen bg-white text-[#12333b]">
      <KenrekiNavigation />

      <section className="relative h-[calc(100svh-24px)] min-h-[700px] max-h-[940px] overflow-hidden border-b border-[#cde5e9] bg-[#f2fbfc] px-4 pt-24 sm:px-6 md:min-h-[760px] md:pt-28">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <Image
            src="/kenreki/app-icon.png"
            alt="研暦 アプリアイコン"
            width={88}
            height={88}
            className="mb-4 h-16 w-16 rounded-[14px] object-cover shadow-[0_18px_45px_rgba(0,143,161,0.22)] sm:h-20 sm:w-20"
            priority
          />
          <p className="text-sm font-bold text-[#007d8c]">研究時間を守る計画・進捗カレンダー</p>
          <h1 className="mt-2 text-5xl font-semibold tracking-normal text-[#0c3038] sm:text-6xl md:text-7xl">
            研暦
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#496a72] sm:text-lg sm:leading-8">
            締切から逆算し、研究の時間を先に守る。
            <br className="hidden sm:block" />
            予定・実績・成果を、ひとつの暦につなげるiPhoneアプリです。
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-[#008fa1] px-5 py-3 text-sm font-bold text-white">
              <Sparkles className="h-4 w-4" />
              App Store 公開準備中
            </span>
            <Link
              href="/kenreki/support"
              className="inline-flex items-center gap-2 rounded-md border border-[#9fcdd3] bg-white px-5 py-3 text-sm font-bold text-[#18505a] transition-colors hover:border-[#008fa1]"
            >
              <HelpCircle className="h-4 w-4" />
              サポート
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-[#69848a]">
            <span>iOS 16.4以降</span>
            <span>無料</span>
            <span>ログイン不要</span>
            <span>広告なし</span>
            <span>端末内保存</span>
          </div>

          <div className="relative mt-8 h-[360px] w-full max-w-5xl sm:h-[460px] md:mt-10 md:h-[570px]">
            <div className="absolute left-1/2 top-12 w-[178px] -translate-x-[118%] -rotate-3 opacity-75 sm:w-[225px] md:top-16 md:w-[270px]">
              <Image
                src="/kenreki/screenshots/02-week.png"
                alt="週次のCore Timeと侵食表示"
                width={1206}
                height={2622}
                className="h-auto w-full rounded-[22px] border border-[#0a6874]/20 shadow-xl"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-0 z-20 w-[195px] -translate-x-1/2 sm:w-[248px] md:w-[300px]">
              <Image
                src="/kenreki/screenshots/01-home.png"
                alt="研暦の今日画面"
                width={1206}
                height={2622}
                className="h-auto w-full rounded-[24px] border border-[#008fa1]/35 shadow-[0_28px_80px_rgba(0,96,115,0.28)]"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-12 w-[178px] translate-x-[18%] rotate-3 opacity-75 sm:w-[225px] md:top-16 md:w-[270px]">
              <Image
                src="/kenreki/screenshots/05-log.png"
                alt="研究の振り返り画面"
                width={1206}
                height={2622}
                className="h-auto w-full rounded-[22px] border border-[#0a6874]/20 shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 border-b border-[#d8e9ec] bg-white px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#008fa1]">研究計画を動かす3つの視点</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#12333b] sm:text-4xl">
              予定を並べるだけで、終わらせない
            </h2>
            <p className="mt-5 text-base leading-8 text-[#58737a]">
              研暦は一般的な予定表に、締切からの逆算、研究時間の保護、実績からの再計画を重ねます。
            </p>
          </div>

          <div className="mt-12 grid border-y border-[#d8e9ec] md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`py-8 md:px-8 ${index > 0 ? 'border-t border-[#d8e9ec] md:border-l md:border-t-0' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <pillar.icon className="h-6 w-6 text-[#008fa1]" />
                  <span className="text-sm font-bold text-[#9ab0b5]">{pillar.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold text-[#12333b]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#58737a]">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-20 border-b border-[#16414b] bg-[#06252e] px-4 py-20 text-white sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-[#56d6df]">
              <TimerReset className="h-5 w-5" />
              <p className="text-sm font-bold">Core Time</p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              研究時間が消えた理由まで、週の中に残す
            </h2>
            <p className="mt-5 text-base leading-8 text-[#bdd5d9]">
              研究に使う時間帯を固定せず、曜日ごとに柔軟に確保できます。会議や講義が重なった部分を侵食として区別し、不足分の移動先を考えられます。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['予定・実行・完了', Clock3],
                ['計画時間と実績時間', ChartNoAxesCombined],
                ['未完了の再配置', RefreshCw],
                ['日付をまたぐ予定', CalendarClock],
              ].map(([label, Icon]) => {
                const ItemIcon = Icon as typeof Clock3;
                return (
                  <div key={label as string} className="flex items-center gap-3 text-sm text-[#d9eaec]">
                    <ItemIcon className="h-4 w-4 shrink-0 text-[#56d6df]" />
                    {label as string}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute inset-x-8 bottom-0 top-10 bg-[#0b3a45]" aria-hidden="true" />
            <Image
              src="/kenreki/screenshots/02-week.png"
              alt="週次カレンダーでCore Timeと侵食を確認する画面"
              width={1206}
              height={2622}
              className="relative mx-auto h-auto w-[260px] rounded-[24px] border border-[#56d6df]/35 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[320px]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8e9ec] bg-[#f5fafb] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-[#765eb8]">
              <Workflow className="h-5 w-5" />
              <p className="text-sm font-bold">Backcast</p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-[#12333b] sm:text-4xl">
              締切を、今日の作業までほどく
            </h2>
            <p className="mt-5 text-base leading-8 text-[#58737a]">
              複数の締切と工程を年・月・週でつなぎます。予定と実績の差から完了見込みを更新し、遅れを期日の直前ではなく途中で見つけます。
            </p>
          </div>

          <ol className="border-y border-[#cfe2e5]">
            {flow.map(([title, copy], index) => (
              <li
                key={title}
                className={`grid gap-3 py-6 sm:grid-cols-[48px_180px_1fr] sm:items-center sm:gap-5 ${index < flow.length - 1 ? 'border-b border-[#cfe2e5]' : ''}`}
              >
                <span className="text-sm font-bold text-[#008fa1]">0{index + 1}</span>
                <strong className="text-base font-semibold text-[#12333b]">{title}</strong>
                <span className="text-sm leading-7 text-[#58737a]">{copy}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Image
            src="/kenreki/screenshots/04-year.png"
            alt="研究工程を年度で表示する画面"
            width={1206}
            height={2622}
            className="mx-auto h-auto w-full max-w-[360px] rounded-[24px] border border-[#008fa1]/25 shadow-xl"
          />
          <div>
            <p className="text-sm font-bold text-[#765eb8]">日・週・月・年を往復</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#12333b] sm:text-3xl">
              長期計画と、いま使う1時間を同じ暦で見る
            </h3>
            <p className="mt-5 text-base leading-8 text-[#58737a]">
              年次の研究工程、月ごとの配分、週の保護帯、今日の実行ブロックを切り離しません。成果メモも締切やBackcastステップへつながります。
            </p>
            <div className="mt-7 space-y-3">
              {['複数プロジェクトと複数期日', '計画時間と実績時間の差', '一言振り返りと研究マップ'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-[#31555d]">
                  <CircleCheck className="h-4 w-4 text-[#008fa1]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="screens" className="scroll-mt-20 overflow-hidden border-b border-[#cde5e9] bg-[#eaf7f8] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-[#008fa1]">アプリ画面</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#12333b] sm:text-4xl">
                研究の時間軸を切り替える
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#58737a]">
              今日の実行から年度計画まで、必要な粒度へ移動しながら同じ研究計画を確認できます。
            </p>
          </div>
        </div>

        <div className="kenreki-screen-scroll mt-12 flex snap-x gap-5 overflow-x-auto px-[max(1rem,calc((100vw-80rem)/2))] pb-8">
          {screens.map((screen) => (
            <figure key={screen.src} className="w-[245px] shrink-0 snap-start sm:w-[280px]">
              <div className="overflow-hidden rounded-[22px] border border-[#aacfd4] bg-white shadow-lg">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  width={1206}
                  height={2622}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="px-1 pt-4">
                <span className="text-xs font-bold text-[#008fa1]">{screen.tag}</span>
                <p className="mt-1 text-sm font-semibold text-[#12333b]">{screen.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="surfaces" className="scroll-mt-20 border-b border-[#16414b] bg-[#082a33] px-4 py-20 text-white sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-bold text-[#56d6df]">Widget・ロック画面・Dynamic Island</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl">
                アプリを開かなくても、研究時間は動いている
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#bdd5d9] lg:justify-self-end">
              今週の進捗と次の予定をひと目で確認。Core Timeの実行中は、ロック画面とDynamic Islandから経過時間を見て、一時停止・再開できます。
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                label: 'ホーム画面',
                title: '週の進捗と次の予定',
                copy: '小・中サイズのWidgetで、実績、目標、侵食、直近のCore Timeを確認できます。',
                preview: <HomeWidgetPreview />,
              },
              {
                label: 'ロック画面',
                title: '解除せずにペースを確認',
                copy: '円形・横長・インラインの各スペースに、週の実績と実行中の作業を表示します。',
                preview: <LockScreenPreview />,
              },
              {
                label: 'Dynamic Island',
                title: 'Core Timeを常に手元へ',
                copy: 'コンパクト表示では作業名と経過時間、長押し時には一時停止・再開操作を表示します。',
                preview: <DynamicIslandPreview />,
              },
            ].map((item) => (
              <figure key={item.label} className="min-w-0">
                <div className="overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                  {item.preview}
                </div>
                <figcaption className="pt-5">
                  <span className="text-xs font-bold text-[#56d6df]">{item.label}</span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#bdd5d9]">{item.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-6 text-[#8fb3b8]">
            WidgetとLive ActivityはiOS 17以降に対応。Dynamic Island表示には対応するiPhoneが必要です。表示内容は端末やiOSの設定により異なる場合があります。
          </p>
        </div>
      </section>

      <section className="border-b border-[#d8e9ec] bg-white px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-[#d8e9ec]">
            <div className="md:pr-8">
              <ShieldCheck className="h-6 w-6 text-[#008fa1]" />
              <h2 className="mt-5 text-xl font-semibold text-[#12333b]">研究内容は端末の中に</h2>
              <p className="mt-3 text-sm leading-7 text-[#58737a]">
                アカウント、広告、解析SDKはありません。計画、実績、成果メモを開発者のサーバーへ送信しません。
              </p>
              <Link href="/kenreki/privacy" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#007d8c]">
                プライバシーポリシー
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-t border-[#d8e9ec] pt-8 md:border-t-0 md:px-8 md:pt-0">
              <CalendarClock className="h-6 w-6 text-[#765eb8]" />
              <h2 className="mt-5 text-xl font-semibold text-[#12333b]">カレンダー連携は選択式</h2>
              <p className="mt-3 text-sm leading-7 text-[#58737a]">
                端末カレンダーから、選んだカレンダーと条件に一致する予定だけを読み取ります。書き換えや削除は行いません。
              </p>
            </div>

            <div className="border-t border-[#d8e9ec] pt-8 md:border-t-0 md:pl-8 md:pt-0">
              <MessageSquareText className="h-6 w-6 text-[#d29032]" />
              <h2 className="mt-5 text-xl font-semibold text-[#12333b]">困ったときの窓口</h2>
              <p className="mt-3 text-sm leading-7 text-[#58737a]">
                動作環境、データの保存、通知やWidgetについて、よくある質問と問い合わせ先を用意しています。
              </p>
              <Link href="/kenreki/support" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#007d8c]">
                サポートを見る
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#082a33] px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-[#56d6df]">研究時間を、成果につながる形で残す</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">研暦はApp Store公開準備中です</h2>
          </div>
          <Link
            href="/kenreki/support"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-[#12333b] transition-colors hover:bg-[#dff5f7]"
          >
            公開情報を確認する
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="bg-[#041d24] px-4 py-10 text-[#8fb3b8] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/kenreki/app-icon.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 rounded-[7px]"
            />
            <div>
              <p className="text-sm font-semibold text-white">研暦</p>
              <p className="mt-1 text-xs">© 2026 Momotaro Nakamura</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link href="/kenreki/support" className="hover:text-white">サポート</Link>
            <Link href="/kenreki/privacy" className="hover:text-white">プライバシー</Link>
            <Link href="/kenreki/terms" className="hover:text-white">利用規約</Link>
            <a
              href="mailto:star0cone.dev@gmail.com?subject=%E7%A0%94%E6%9A%A6%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              <Mail className="h-3 w-3" />
              お問い合わせ
            </a>
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
