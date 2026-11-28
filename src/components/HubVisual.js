import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const R = 37; // orbit radius, in % of the square

/* Sub-page hero visual: SEDAAPI mark at the centre, nodes on an orbit with a rotating
   thermal arc. One node lights up at a time, like the lanes under the home hero canvas. */
export default function HubVisual({ nodes }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setActive((a) => (a + 1) % nodes.length), 1600);
    return () => clearInterval(t);
  }, [nodes.length]);

  const pts = nodes.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / nodes.length;
    return { x: +(50 + R * Math.cos(a)).toFixed(3), y: +(50 + R * Math.sin(a)).toFixed(3) };
  });

  return (
    <div className="hub" aria-hidden="true">
      <svg className="hub-svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="hubThermal" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#7a1d8f" />
            <stop offset=".35" stopColor="#e0364b" />
            <stop offset=".7" stopColor="#ff8a1f" />
            <stop offset="1" stopColor="#ffe36b" />
          </linearGradient>
        </defs>
        <circle className="hub-ring" cx="50" cy="50" r="48" />
        <circle className="hub-ring orbit" cx="50" cy="50" r={R} />
        <circle className="hub-arc" cx="50" cy="50" r="48" stroke="url(#hubThermal)" />
        {pts.map((p, i) => (
          <line key={i} className={`hub-link${i === active ? " on" : ""}`} x1="50" y1="50" x2={p.x} y2={p.y} />
        ))}
        <circle className="hub-pulse" cx="50" cy="50" r="13" />
        <circle className="hub-core-ring" cx="50" cy="50" r="13" />
      </svg>
      <div className="hub-core">
        <img src="/logo.png" alt="SEDAAPI at the center of its partner network" width="476" height="340" />
      </div>
      {nodes.map(({ icon: Icon, label }, i) => (
        <div key={label} className={`hub-node${i === active ? " on" : ""}`} style={{ left: pts[i].x + "%", top: pts[i].y + "%" }}>
          <span className="hn-i">
            <Icon />
          </span>
          <span className="hn-l">{label}</span>
        </div>
      ))}
    </div>
  );
}
