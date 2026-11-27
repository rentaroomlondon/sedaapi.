import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Lockup from "./Lockup";
import HeroScope from "./HeroScope";
import { prefersReducedMotion } from "@/lib/motion";

const WORDS = [
  { text: "Meaningful" },
  { text: "innovation" },
  { text: "is" },
  { text: "built together.", heat: true },
];

const STATS = [
  { to: 6, label: "Industry domains" },
  { to: 10, label: "Core capabilities" },
  { to: 6, label: "Partner types" },
];

export function CountUp({ to }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let iv;
    const t = setTimeout(() => {
      if (prefersReducedMotion()) {
        setN(to);
        return;
      }
      let c = 0;
      iv = setInterval(() => {
        c++;
        setN(c);
        if (c >= to) clearInterval(iv);
      }, 900 / Math.max(to, 1) / 1.5);
    }, 1100);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, [to]);
  return <b>{n}</b>;
}

export default function Hero() {
  return (
    <div className="hero bleed">
      <span className="orb a"></span>
      <span className="orb b"></span>
      <span className="orb c"></span>
      <span className="gridbg"></span>
      <div className="wrap hero-grid">
        <div>
          <Lockup />
          <span className="pill-live">Partnerships · Riyadh</span>
          <h1 id="h1">
            {WORDS.map((w, i) => (
              <Fragment key={w.text}>
                {i > 0 && " "}
                <span className={`w${w.heat ? " heat" : ""}`} style={{ animationDelay: 0.08 + i * 0.09 + "s" }}>
                  {w.text}
                </span>
              </Fragment>
            ))}
          </h1>
          <p className="lede">
            We welcome opportunities to collaborate with organizations advancing digital transformation in Saudi Arabia and the wider GCC.
          </p>
          <div className="cta-row">
            <Link className="btn primary" href="/contact">
              Become a Partner <span className="ar">→</span>
            </Link>
            <Link className="btn light" href="/about">
              About SEDAAPI
            </Link>
          </div>
          <div className="stats" aria-label="At a glance">
            {STATS.map((s) => (
              <div key={s.label}>
                <CountUp to={s.to} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroScope />
      </div>
    </div>
  );
}
