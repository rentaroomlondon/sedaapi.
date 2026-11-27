import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const QUOTE = "Let's shape the next chapter of digital healthcare, together.";
const HOT = "together.";

const idx = QUOTE.indexOf(HOT);
const WORDS = [
  ...QUOTE.slice(0, idx).trim().split(/\s+/).map((w) => ({ w, hot: false })),
  ...HOT.split(/\s+/).map((w) => ({ w, hot: true })),
];

/* Quote whose words light up as it scrolls through the viewport. */
/* `card` renders it as a rounded CTA card inside a light section (used on sub-pages). */
export default function Statement({ card = false }) {
  const q = useRef(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const onScroll = () => {
      /* the ref is cleared before this listener is removed when navigating between pages */
      if (!q.current) return;
      const r = q.current.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      setLit(reduce ? WORDS.length : Math.round(p * WORDS.length));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const block = (
    <div className={card ? "statement cta-card rv" : "statement bleed"}>
      <div className="wrap">
        <div className="rule"></div>
        <blockquote id="quote" ref={q}>
          {WORDS.map(({ w, hot }, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className={`wd${hot ? " hot" : ""}${i < lit ? " lit" : ""}`}>{w}</span>
            </Fragment>
          ))}
        </blockquote>
        <p className="sig">— Collaborate with SEDAAPI</p>
        <p className="st-sub">
          We welcome conversations with healthcare organizations, technology partners, institutions, and strategic investors.
        </p>
        <div className="st-cta">
          <Link className="btn primary" href="/contact">
            Become a Partner <span className="ar">→</span>
          </Link>
          <Link className="btn light" href="/about">
            About SEDAAPI
          </Link>
        </div>
      </div>
    </div>
  );

  if (!card) return block;
  return (
    <section className="cta-section">
      <div className="wrap">{block}</div>
    </section>
  );
}
