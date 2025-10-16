'use client';

import { Check, Sparkles, Star, Crown, Zap } from 'lucide-react';

const plans = [
  {
    name: '初級',
    price: '無料',
    priceDetail: '0円',
    description: '何度でも挑戦可能',
    features: [
      '基本的な星座をプレイ',
      '図鑑機能',
      'スコア記録',
      'ヒント機能',
      '広告なし',
    ],
    icon: Star,
    color: 'from-lime-400 to-green-500',
    borderColor: 'border-lime-500',
    badgeColor: 'bg-lime-500',
    popular: false,
    type: 'free',
  },
  {
    name: '中級',
    price: '¥160',
    priceDetail: '買い切り',
    description: '12星座を含む中級レベル',
    features: [
      '初級の全機能',
      '中級レベルの星座',
      '12星座を含む',
      '難易度アップ',
      '詳細な図鑑情報',
    ],
    icon: Sparkles,
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-500',
    badgeColor: 'bg-orange-500',
    popular: false,
    type: 'onetime',
  },
  {
    name: '上級',
    price: '¥320',
    priceDetail: '買い切り',
    description: '難易度の高い星座に挑戦',
    features: [
      '中級までの全機能',
      '上級レベルの星座',
      'より複雑な星座',
      'タイマー短縮',
      '達成バッジ',
    ],
    icon: Crown,
    color: 'from-red-500 to-red-700',
    borderColor: 'border-red-600',
    badgeColor: 'bg-red-600',
    popular: false,
    type: 'onetime',
  },
  {
    name: 'プロフェッショナル',
    price: '¥480',
    priceDetail: '買い切り',
    description: '最難関の星座をマスター',
    features: [
      '上級までの全機能',
      'プロレベルの星座',
      '最高難度の挑戦',
      '全88星座制覇可能',
      'マスターバッジ',
    ],
    icon: Crown,
    color: 'from-purple-500 to-purple-700',
    borderColor: 'border-purple-600',
    badgeColor: 'bg-purple-600',
    popular: false,
    type: 'onetime',
  },
];

const subscriptionPlan = {
  name: 'プレミアムサブスクリプション',
  price: '¥240',
  priceDetail: '月額制',
  description: '全モード無制限プレイ',
  features: [
    '全モード（中級・上級・プロ）無制限',
    '初級も含む全88星座プレイ可能',
    '図鑑・スコア機能フル活用',
    'いつでもキャンセル可能',
    '3日間無料トライアル',
  ],
  icon: Zap,
  color: 'from-blue-500 to-cyan-500',
  borderColor: 'border-blue-500',
  badgeColor: 'bg-blue-500',
  popular: true,
  type: 'subscription',
};

const bundlePlan = {
  name: 'プレミアムパック',
  price: '¥600',
  priceDetail: '買い切り（37% OFF）',
  description: '中級〜プロを一括購入',
  features: [
    '中級・上級・プロ全て含む',
    '全88星座プレイ可能（48星座実装済み）',
    '図鑑・スコア機能フル活用',
    '一度購入すれば永続利用',
    '個別購入より¥360お得',
  ],
  icon: Crown,
  color: 'from-[#FFD700] to-[#FFA500]',
  borderColor: 'border-[#FFA500]',
  badgeColor: 'bg-[#FFA500]',
  popular: false,
  type: 'bundle',
};

export default function StarConePricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            初級は完全無料。自分のペースでステップアップ
          </p>
        </div>

        {/* Featured Plans */}
        <div className="mb-12 space-y-6">
          {/* Subscription Plan - Featured */}
          <div className="max-w-4xl mx-auto">
          <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border-4 ${subscriptionPlan.borderColor} transform hover:scale-105 transition-all duration-300`}>
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <span className={`${subscriptionPlan.badgeColor} text-white px-6 py-2 rounded-full text-base font-bold shadow-xl flex items-center gap-2`}>
                <Sparkles className="w-5 h-5" />
                おすすめ
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon & Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${subscriptionPlan.color} rounded-2xl flex items-center justify-center`}>
                    <subscriptionPlan.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {subscriptionPlan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{subscriptionPlan.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {subscriptionPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex-shrink-0 text-center">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white block">
                    {subscriptionPlan.price}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">{subscriptionPlan.priceDetail}</span>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-bold mt-2">
                    ⚡ 3日間無料トライアル
                  </p>
                </div>
                <a
                  href="#download"
                  className={`inline-block px-10 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r ${subscriptionPlan.color} hover:shadow-2xl transition-all duration-300 hover:scale-110 min-w-[240px]`}
                >
                  アプリで試してみる
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                  App Store / Google Playから
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* Bundle Plan - Featured */}
          <div className="max-w-4xl mx-auto">
          <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border-4 ${bundlePlan.borderColor} transform hover:scale-105 transition-all duration-300`}>
            {/* Sale Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <span className={`${bundlePlan.badgeColor} text-white px-6 py-2 rounded-full text-base font-bold shadow-xl flex items-center gap-2`}>
                🎉 37% OFF
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon & Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${bundlePlan.color} rounded-2xl flex items-center justify-center`}>
                    <bundlePlan.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {bundlePlan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{bundlePlan.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {bundlePlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex-shrink-0 text-center">
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-2xl text-gray-400 line-through">¥960</span>
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {bundlePlan.price}
                    </span>
                  </div>
                  <span className="text-lg text-gray-500 dark:text-gray-400">{bundlePlan.priceDetail}</span>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-bold mt-2">
                    💰 ¥360お得
                  </p>
                </div>
                <a
                  href="#download"
                  className={`inline-block px-10 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r ${bundlePlan.color} hover:shadow-2xl transition-all duration-300 hover:scale-110 min-w-[240px]`}
                >
                  アプリで購入する
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                  App Store / Google Playから
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            買い切りプラン
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${plan.borderColor}`}
            >
              {/* Free Badge */}
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    完全無料
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                {plan.priceDetail}
              </p>

              {/* Description */}
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6 min-h-[48px]">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#download"
                className={`block w-full py-3 rounded-xl font-bold text-white text-center bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                {plan.type === 'free' ? 'アプリをダウンロード' : 'アプリで購入'}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 inline-block">
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              💡 どれを選べばいいか迷ったら？
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>まずは無料トライアル</strong>でプレミアムサブスクリプションを試してみましょう！<br />
              全モードを体験してから、買い切りプランに変更することも可能です。
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            買い切りプランは一度購入すれば永続的に利用可能
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            ※ 価格は予告なく変更される場合があります
          </p>
        </div>
      </div>
    </section>
  );
}
