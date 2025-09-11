export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2025 中村桃太朗研究室. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-cosmic-400 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-cosmic-400 transition-colors">
              サイトマップ
            </a>
            <a href="#" className="hover:text-cosmic-400 transition-colors">
              アクセシビリティ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}