import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/* SmartCare thermal canvas (walk, then fall) */
const STOPS = [
  [0, [18, 6, 60]],
  [0.25, [110, 25, 140]],
  [0.5, [224, 54, 75]],
  [0.75, [255, 138, 31]],
  [1, [255, 240, 130]],
];

function col(v) {
  v = Math.max(0, Math.min(1, v));
  for (let i = 1; i < STOPS.length; i++) {
    if (v <= STOPS[i][0]) {
      const a = STOPS[i - 1], b = STOPS[i], k = (v - a[0]) / (b[0] - a[0]);
      return (
        "rgb(" +
        Math.round(a[1][0] + (b[1][0] - a[1][0]) * k) + "," +
        Math.round(a[1][1] + (b[1][1] - a[1][1]) * k) + "," +
        Math.round(a[1][2] + (b[1][2] - a[1][2]) * k) + ")"
      );
    }
  }
  return "rgb(255,240,130)";
}

function sd(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy;
  let t = l ? ((px - ax) * dx + (py - ay) * dy) / l : 0;
  t = Math.max(0, Math.min(1, t));
  const x = ax + t * dx, y = ay + t * dy;
  return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y));
}

function pose(t) {
  const s = t % 11;
  if (s < 4) {
    const x = 8 + (s / 4) * 30;
    return { hx: x, hy: 9 + Math.sin(s * 6) * 0.5, fx: x + Math.sin(s * 6) * 1.2, fy: 24, st: "walk" };
  }
  if (s < 4.6) {
    const k = (s - 4) / 0.6;
    return { hx: 38 - k * 8, hy: 9 + k * 12, fx: 38 + k * 6, fy: 24 - k * 1.5, st: "fall" };
  }
  return { hx: 30, hy: 21, fx: 44, fy: 22.5, st: "down" };
}

const TW = 64, TH = 36;

export default function ThermalCase() {
  const thRef = useRef(null);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const th = thRef.current;
    const tctx = th.getContext("2d");

    function drawTh(t) {
      const p = pose(t), cw = th.width / TW, ch = th.height / TH;
      for (let j = 0; j < TH; j++)
        for (let i = 0; i < TW; i++) {
          const x = i + 0.5, y = j + 0.5;
          const d = sd(x, y, p.hx, p.hy, p.fx, p.fy), dh = Math.hypot(x - p.hx, y - p.hy);
          const v = Math.exp(-(d * d) / 8) * 0.78 + Math.exp(-(dh * dh) / 6.5) * 0.28 + 0.1 + ((i * 7 + j * 13 + Math.floor(t * 9)) % 17) / 400;
          tctx.fillStyle = col(v);
          tctx.fillRect(Math.floor(i * cw), Math.floor(j * ch), Math.ceil(cw), Math.ceil(ch));
        }
      setAlert(p.st !== "walk");
    }

    if (prefersReducedMotion()) {
      drawTh(5);
      return;
    }
    const start = performance.now();
    let last = 0, raf;
    const frame = (now) => {
      if (now - last > 110) {
        last = now;
        drawTh((now - start) / 1000);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="case rv">
      <div className="row">
        <span className="eyebrow" style={{ color: "#4cc8ff" }}>
          In house · SmartCare
        </span>
        <span className={alert ? "chip alert" : "chip"} id="chip">
          {alert ? "FALL DETECTED · ALERT SENT" : "NORMAL · WALKING"}
        </span>
      </div>
      <canvas
        id="th"
        width="480"
        height="270"
        ref={thRef}
        aria-label="Simulated low-resolution thermal view of a person walking, then falling"
        role="img"
      ></canvas>
      <h3>Monitoring that sees the risk, not the person.</h3>
      <p>
        A ceiling unit reads body heat and sound, runs AI on the device, and alerts nurses and families the moment someone falls. No camera
        pictures and no wearables.
      </p>
      <div className="uses">
        <span>Artificial Intelligence</span>
        <span>Digital Health</span>
        <span>Healthcare Integration</span>
        <span>Data Analytics</span>
      </div>
      <p className="note">In pilot development. Thermal view is a simulation.</p>
    </article>
  );
}
