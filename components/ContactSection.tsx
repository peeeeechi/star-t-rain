'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '研究に関するお問い合わせ',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === 'your_service_id_here' ||
      templateId === 'your_template_id_here' ||
      publicKey === 'your_public_key_here'
    ) {
      setSubmitStatus('error');
      setErrorMessage(
        '現在フォームから送信できません。記載のメールアドレスへ直接ご連絡ください。',
      );
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
        publicKey,
      );

      console.log('EmailJS送信成功');
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '研究に関するお問い合わせ',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS送信エラー:', error);
      setSubmitStatus('error');

      const err = error as { status?: number; text?: string; message?: string };

      if (err.status === 400) {
        setErrorMessage(
          '入力内容に問題があります。フォームを確認してください。',
        );
      } else if (err.status === 401) {
        setErrorMessage('EmailJS認証エラー。設定を確認してください。');
      } else if (err.status === 404) {
        setErrorMessage('EmailJSテンプレートまたはサービスが見つかりません。');
      } else {
        setErrorMessage(
          `送信エラー: ${err.text || err.message || '不明なエラー'}`,
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="site-section">
      <SectionHeading
        number="06"
        label="ABOUT & CONTACT"
        title="問いの先で、つながる。"
      />
      <div className="contact-grid">
        <div>
          <div className="researcher-profile">
            <Image
              src="/profile.png"
              alt="中村桃太朗のプロフィール"
              width={104}
              height={104}
            />
            <div>
              <p className="eyebrow">RESEARCHER / EDUCATOR</p>
              <h3>中村 桃太朗</h3>
              <p className="mono">Momotaro Nakamura</p>
            </div>
          </div>
          <p className="profile-position">
            大島商船高等専門学校 情報工学科 助教
            <br />
            修士（理学）
          </p>
          <p className="profile-bio">
            電波天文学の研究と、生成AIを活用した教育・アプリ開発に取り組んでいます。元鉄道系IT子会社のシステムエンジニアとして、開発プロジェクトやデータ分析・機械学習の活用検討に参画しました。
          </p>
          <a
            className="text-link"
            href="https://researchmap.jp/kibidango_sun"
            target="_blank"
            rel="noopener noreferrer"
          >
            研究者プロフィール <ArrowUpRight size={16} />
          </a>
          <dl className="contact-details">
            <div>
              <dt>EMAIL</dt>
              <dd>
                nakamura.momotaro_at_oshima-k.ac.jp
                <br />
                nakamura.momotaroh_at_gmail.com
                <small>_at_ を @ に置き換えてください。</small>
              </dd>
            </div>
            <div>
              <dt>LOCATION</dt>
              <dd>〒742-2193 山口県大島郡周防大島町小松1091-1</dd>
            </div>
            <div>
              <dt>ORCID</dt>
              <dd>
                <a
                  href="https://orcid.org/0009-0001-5054-3527"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0009-0001-5054-3527 <ArrowUpRight size={13} />
                </a>
              </dd>
            </div>
            <div>
              <dt>MEMBERSHIP</dt>
              <dd>
                日本天文学会 · VLBI懇談会
                <br />
                天文教育普及研究会 · 日本高専学会
              </dd>
            </div>
          </dl>
        </div>
        <div className="contact-form-wrap">
          <p className="eyebrow">START A CONVERSATION</p>
          <h3>
            研究や教育のこと、
            <br />
            気軽にお話しください。
          </h3>
          <p>共同研究、講演のご依頼、その他のお問い合わせはこちらから。</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-pair">
              <label htmlFor="name">
                お名前 <span>必須</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                />
              </label>
              <label htmlFor="email">
                メールアドレス <span>必須</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </label>
            </div>
            <label htmlFor="subject">
              お問い合わせの内容
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                {[
                  '研究に関するお問い合わせ',
                  '講演・セミナーの依頼',
                  '共同研究の提案',
                  'メディア取材',
                  'その他',
                ].map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </label>
            <label htmlFor="message">
              メッセージ <span>必須</span>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="お問い合わせ内容をお聞かせください。"
              />
            </label>
            {submitStatus === 'success' && (
              <p role="status" className="form-success">
                メッセージを送信しました。お返事をお待ちください。
              </p>
            )}
            {submitStatus === 'error' && (
              <p role="alert" className="form-error">
                送信できませんでした。{errorMessage}
              </p>
            )}
            <button
              type="submit"
              className="outline-link"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中…' : 'メッセージを送る'}{' '}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
