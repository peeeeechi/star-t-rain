'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { 
  Mail, 
  Building, 
  MapPin, 
  User
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '研究に関するお問い合わせ',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    setErrorMessage('');

    // 環境変数の確認
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      setSubmitStatus('error');
      setErrorMessage('EmailJS設定が完了していません。.env.localファイルを確認してください。');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('EmailJS送信開始...');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: '中村桃太朗先生',
          reply_to: formData.email,
        },
        publicKey
      );
      
      console.log('EmailJS送信成功');
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '研究に関するお問い合わせ',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS送信エラー:', error);
      setSubmitStatus('error');
      
      const err = error as { status?: number; text?: string; message?: string };
      
      if (err.status === 400) {
        setErrorMessage('入力内容に問題があります。フォームを確認してください。');
      } else if (err.status === 401) {
        setErrorMessage('EmailJS認証エラー。設定を確認してください。');
      } else if (err.status === 404) {
        setErrorMessage('EmailJSテンプレートまたはサービスが見つかりません。');
      } else {
        setErrorMessage(`送信エラー: ${err.text || err.message || '不明なエラー'}`);
      }
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
                    <div className="p-2 bg-cosmic-100 dark:bg-cosmic-900/30 rounded-lg mr-4">
                      <Mail className="w-5 h-5 text-cosmic-600 dark:text-cosmic-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">メール</p>
                      <p className="text-gray-600 dark:text-gray-400"> mail1: nakamura.momotaro_at_oshima-k.ac.jp</p>
                      <p className="text-gray-600 dark:text-gray-400"> mail2: nakamura.momotaroh_at_gmail.com</p>
                      <p className="text-gray-600 dark:text-gray-400"> （_at_を@に変えて下さい）</p>

                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-stellar-100 dark:bg-stellar-900/30 rounded-lg mr-4">
                      <Building className="w-5 h-5 text-stellar-600 dark:text-stellar-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">所属</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        大島商船高等専門学校<br />
                        情報工学科 助教
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-nebula-100 dark:bg-nebula-900/30 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-nebula-600 dark:text-nebula-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">住所</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        〒742-2193<br />
                        山口県大島郡周防大島町小松1091-1
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-4">
                      <User className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
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
                      ❌ 送信に失敗しました
                    </p>
                    {errorMessage && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                        詳細: {errorMessage}
                      </p>
                    )}
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
            href="https://twitter.com/momomo0413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a
            href="https://github.com/peeeeechi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a
            href="https://researchmap.jp/kibidango_sun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors"
            aria-label="researchmap"
          >
            <Image 
              src="/researchmap-banner.png" 
              alt="researchmap" 
              width={120}
              height={24}
              className="h-6 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
}