import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="observatory-hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow" data-reveal="body">
          <span className="signal-dot" /> RADIO ASTRONOMY & AI EDUCATION
        </p>
        <h1 id="hero-heading">
          <span className="hero-line" data-reveal="title" data-reveal-delay="100">遠い星から、</span>
          <br />
          <span className="hero-line hero-line-indent" data-reveal="title" data-reveal-delay="240">新しい「問い」へ。</span>
        </h1>
        <p className="hero-translation" lang="en" data-reveal="body" data-reveal-delay="380">
          From distant stars to new questions.
        </p>
        <p className="hero-description" data-reveal="body" data-reveal-delay="470">
          電波で、星が生まれる場所を探る。
          <br />
          AIで、学びの新しい可能性をひらく。
        </p>
        <p className="hero-affiliation" data-reveal="body" data-reveal-delay="550">
          中村桃太朗研究室 <span>／</span> 大島商船高等専門学校
        </p>
        <div className="hero-actions" data-reveal="body" data-reveal-delay="620">
          <Link href="/#research" className="outline-link">
            研究を知る <ArrowUpRight size={17} />
          </Link>
          <Link href="/blog" className="text-link">
            研究ノートを読む <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="hero-bottom" data-reveal="body" data-reveal-delay="680">
        <a href="#news" className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
        <span>星の誕生から、学びの未来へ。</span>
        <span className="hero-location">OSHIMA, YAMAGUCHI · JAPAN</span>
      </div>
    </section>
  );
}
