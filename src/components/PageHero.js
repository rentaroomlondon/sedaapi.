import { Fragment } from "react";
import { CountUp } from "./Hero";

/* Hero for sub-pages, built from the home hero's parts: orbs, grid, pill, word-stagger
   headline, CTA row and count-up stats. `heat` is the trailing phrase in the thermal
   gradient; `aside` (e.g. <HubVisual/>) fills the right column. */
export default function PageHero({ pill, title, heat, lede, ctas, stats, aside }) {
  const words = [...title.split(/\s+/).map((text) => ({ text })), ...(heat ? [{ text: heat, heat: true }] : [])];
  return (
    <div className="hero page-hero bleed">
      <span className="orb a"></span>
      <span className="orb b"></span>
      <span className="orb c"></span>
      <span className="gridbg"></span>
      <div className={`wrap${aside ? " hero-grid" : ""}`}>
        <div>
          <span className="pill-live">{pill}</span>
          <h1>
            {words.map((w, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className={`w${w.heat ? " heat" : ""}`} style={{ animationDelay: 0.08 + i * 0.09 + "s" }}>
                  {w.text}
                </span>
              </Fragment>
            ))}
          </h1>
          <p className="lede">{lede}</p>
          {ctas && <div className="cta-row">{ctas}</div>}
          {stats && (
            <div className="stats" aria-label="At a glance">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp to={s.to} />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {aside}
      </div>
    </div>
  );
}
