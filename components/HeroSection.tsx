import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="observatory-hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="signal-dot" /> RADIO ASTRONOMY & AI EDUCATION
        </p>
        <h1 id="hero-heading">
          遠い星から、
          <br />
          <span>新しい「問い」へ。</span>
        </h1>
        <p className="hero-translation" lang="en">
          From distant stars to new questions.
        </p>
        <p className="hero-description">
          電波で、星が生まれる場所を探る。
          <br />
          AIで、学びの新しい可能性をひらく。
        </p>
        <p className="hero-affiliation">
          中村桃太朗研究室 <span>／</span> 大島商船高等専門学校
        </p>
        <div className="hero-actions">
          <Link href="/#research" className="outline-link">
            研究を知る <ArrowUpRight size={17} />
          </Link>
          <Link href="/blog" className="text-link">
            研究ノートを読む <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="hero-bottom">
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
