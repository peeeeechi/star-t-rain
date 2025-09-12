import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  GitBranch, 
  BookOpen, 
  Telescope,
  Bot,
  Star,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-cosmic-900/30 to-stellar-900/20 text-gray-300 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cosmic-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* メインコンテンツ */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* プロフィール・研究室情報 */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-cosmic-600 to-stellar-600 rounded-lg">
                <Telescope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">中村桃太朗研究室</h3>
                <p className="text-cosmic-400 text-sm">Momotaro Nakamura Laboratory</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              電波天文による大質量星形成研究と生成AI活用教育の二軸で、
              次世代の科学技術発展に貢献する研究・教育活動を展開しています。
            </p>
            
            {/* 研究分野 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Star className="w-4 h-4 text-cosmic-400" />
                <span>電波天文学・VLBI観測</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Bot className="w-4 h-4 text-stellar-400" />
                <span>生成AI教育・アプリ開発</span>
              </div>
            </div>
          </div>

          {/* 連絡先情報 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-cosmic-400" />
              連絡先
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-stellar-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">山口県大島郡周防大島町</p>
                  <p className="text-gray-400">大島商船高等専門学校</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="flex items-center space-x-3 text-cosmic-400 hover:text-cosmic-300 transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">お問い合わせフォーム</span>
              </a>
            </div>
          </div>

          {/* 関連リンク */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-stellar-400" />
              関連リンク
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href="https://researchmap.jp/kibidango_sun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-stellar-400 transition-colors group"
              >
                <BookOpen className="w-4 h-4" />
                <span className="group-hover:underline">researchmap</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://github.com/peeeeechi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-stellar-400 transition-colors group"
              >
                <GitBranch className="w-4 h-4" />
                <span className="group-hover:underline">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="https://www.oshima-k.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-stellar-400 transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="group-hover:underline">大島商船高等専門学校</span>
              </a>
            </div>
          </div>
        </div>

        {/* セパレーター */}
        <div className="border-t border-gradient-to-r from-transparent via-cosmic-500/30 to-transparent mb-8"></div>

        {/* ボトム部分 */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 mb-1">
              © 2025 中村桃太朗 (Momotaro Nakamura). All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Built with Next.js, Tailwind CSS & Claude Code
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-xs">
            <span className="flex items-center space-x-1 text-gray-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>for science & education</span>
            </span>
          </div>
        </div>

        {/* 学術・教育目的の注記 */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            このサイトは教育・研究目的で作成されています。掲載内容は研究活動の一環として公開しており、
            天文学・情報工学分野の学術交流と教育普及活動を推進することを目的としています。
          </p>
        </div>
      </div>
    </footer>
  );
}