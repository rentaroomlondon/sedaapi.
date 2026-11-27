import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const LANES = ["Providers", "Insurance", "Gov", "Digital", "Enterprise", "AI"];

/* Hero canvas: noisy input above, cleaned signal below, with a tilt on hover. */
export default function HeroScope() {
  const scopeRef = useRef(null);
  const cvRef = useRef(null);
  const [lane, setLane] = useState(-1);

  /* tilt */
  useEffect(() => {
    const scope = scopeRef.current;
    if (prefersReducedMotion() || !window.matchMedia("(pointer:fine)").matches) return;
    const onMove = (e) => {
      const r = scope.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      scope.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => {
      scope.style.transform = "";
    };
    scope.addEventListener("pointermove", onMove);
    scope.addEventListener("pointerleave", onLeave);
    return () => {
      scope.removeEventListener("pointermove", onMove);
      scope.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  /* canvas */
  useEffect(() => {
    const cv = cvRef.current;
    const ctx = cv.getContext("2d");
    const W = cv.width, H = cv.height;
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    [[0, "#7a1d8f"], [0.35, "#e0364b"], [0.7, "#ff8a1f"], [1, "#ffe36b"]].forEach((s) => grad.addColorStop(s[0], s[1]));
    let seed = 7;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647 - 0.5;
    };
    const noise = [];
    for (let i = 0; i < W; i++) noise.push(rnd());
    const clean = (x, t) =>
      Math.sin(x * 0.025 + t) * 0.55 + Math.sin(x * 0.061 + t * 1.7) * 0.25 + (Math.abs(((x + t * 60) % 260) - 130) < 6 ? 0.9 : 0);

    function drawSig(t) {
      ctx.clearRect(0, 0, W, H);
      ctx.font = '500 12px "IBM Plex Mono", monospace';
      ctx.fillStyle = "#8f90bb";
      ctx.fillText("RAW · HEALTHCARE DATA", 14, 22);
      ctx.fillText("INTEROPERABLE · READY TO ACT ON", 14, H / 2 + 22);
      const off = Math.floor(t * 40);
      let x, y;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(170,166,212,.55)";
      ctx.lineWidth = 1.2;
      for (x = 0; x < W; x++) {
        y = H * 0.27 - clean(x, t) * 40 + noise[(x + off) % W] * 70;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      ctx.save();
      ctx.shadowColor = "rgba(255,138,31,.6)";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.8;
      for (x = 0; x < W; x++) {
        y = H * 0.77 - clean(x, t) * 55;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
      for (x = 0; x < W; x++) {
        if (Math.abs(((x + t * 60) % 260) - 130) < 0.6) {
          y = H * 0.77 - clean(x, t) * 55;
          ctx.fillStyle = "rgba(255,227,107,.25)";
          ctx.beginPath();
          ctx.arc(x, y, 12 + Math.sin(t * 6) * 3, 0, 7);
          ctx.fill();
          ctx.fillStyle = "#ffe36b";
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 7);
          ctx.fill();
          ctx.fillText("EVENT", x - 20, y - 18);
        }
      }
      ctx.strokeStyle = "#2b2663";
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(0, H / 2);
      ctx.lineTo(W, H / 2);
      ctx.stroke();
      ctx.setLineDash([]);
      const sx = (t * 90) % W;
      const sg = ctx.createLinearGradient(sx - 70, 0, sx, 0);
      sg.addColorStop(0, "rgba(25,180,245,0)");
      sg.addColorStop(1, "rgba(25,180,245,.28)");
      ctx.fillStyle = sg;
      ctx.fillRect(sx - 70, 0, 70, H);
      ctx.fillStyle = "#19b4f5";
      ctx.fillRect(sx, 0, 1.5, H);
      setLane(Math.floor(t / 1.1) % LANES.length);
    }

    if (prefersReducedMotion()) {
      drawSig(3);
      return;
    }
    const start = performance.now();
    let last = 0, raf;
    const frame = (now) => {
      if (now - last > 33) {
        last = now;
        drawSig((now - start) / 1000);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="scope" id="scope" aria-hidden="true" ref={scopeRef}>
      <canvas id="cv" width="640" height="400" ref={cvRef}></canvas>
      <div className="lanes" id="lanes">
        {LANES.map((l, i) => (
          <span key={l} className={`lane${i === lane ? " on" : ""}`}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
