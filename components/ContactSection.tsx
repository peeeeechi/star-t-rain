'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '研究に関するお問い合わせ',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: '中村桃太朗先生',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '研究に関するお問い合わせ',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cosmic-600 to-stellar-600 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            研究協力、講演依頼、その他お気軽にご連絡ください
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  連絡先情報
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">メール</p>
                      <p className="text-gray-600 dark:text-gray-400">1: nakamura.momotaro_at_oshima-k.ac.jp</p>
                      <p className="text-gray-600 dark:text-gray-400">2: nakamura.momotaroh_at_gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🏢</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">所属</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        大島商船高等専門学校<br />
                        情報工学科 助教
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">住所</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        〒742-2193<br />
                        山口県大島郡周防大島町小松1091-1
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🆔</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">ORCID ID</p>
                      <p className="text-gray-600 dark:text-gray-400">0009-0001-5054-3527</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  所属学協会
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>• 日本天文学会</p>
                  <p>• VLBI懇談会</p>
                  <p>• 天文教育普及研究会</p>
                  <p>• 日本高専学会</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                メッセージフォーム
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 dark:bg-gray-700 dark:text-white"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 dark:bg-gray-700 dark:text-white"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    件名
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option>研究に関するお問い合わせ</option>
                    <option>講演・セミナーの依頼</option>
                    <option>共同研究の提案</option>
                    <option>メディア取材</option>
                    <option>その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cosmic-500 focus:border-cosmic-500 dark:bg-gray-700 dark:text-white"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg">
                    <p className="text-green-700 dark:text-green-300">
                      ✅ メッセージを送信しました。お返事をお待ちください。
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg">
                    <p className="text-red-700 dark:text-red-300">
                      ❌ 送信に失敗しました。しばらくしてから再度お試しください。
                    </p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-cosmic-600 text-white rounded-lg hover:bg-cosmic-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="ResearchGate"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.821 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.335-.244.698-.363 1.138-.363.418 0 .756.13 1.054.39.298.26.47.604.542 1.022.031.172.031.34.031.512 0 .094.046.14.14.14h1.57c.094 0 .14-.046.14-.14 0-.261.023-.52.023-.779 0-.097-.008-.192-.024-.287a6.68 6.68 0 0 0-.151-.71 3.885 3.885 0 0 0-1.288-1.943c-.602-.454-1.34-.681-2.206-.681zM0 6.90323h1.67c.082 0 .123.035.123.105v8.03c0 .102-.039.152-.117.152H.292c-.101 0-.152-.05-.152-.152v-.31c0-.094.047-.14.14-.14h.644c.07 0 .105-.034.105-.103V8.138c0-.07-.035-.105-.105-.105H.28c-.093 0-.14-.047-.14-.14v-.883c0-.07.04-.105.123-.105h1.408v-.002z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}