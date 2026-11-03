import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="observatory-footer site-container">
      <div className="footer-top">
        <div>
          <span className="footer-star" aria-hidden="true">
            ✦
          </span>
          <p>
            星の誕生から、
            <br />
            学びの未来へ。
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://researchmap.jp/kibidango_sun"
            target="_blank"
            rel="noopener noreferrer"
          >
            researchmap <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/peeeeechi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href="https://twitter.com/peach_sun84"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter <ArrowUpRight size={13} />
          </a>
          <a
            href="https://www.oshima-k.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            大島商船高等専門学校 <ArrowUpRight size={13} />
          </a>
          <Link href="/star-cone">
            星プラっと <ArrowUpRight size={13} />
          </Link>
          <Link href="/kenreki">
            研暦 <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <Link href="/">中村桃太朗研究室</Link>
        <span>© {new Date().getFullYear()} Momotaro Nakamura</span>
        <span className="mono">LOOK UP. KEEP WONDERING.</span>
      </div>
    </footer>
  );
}
