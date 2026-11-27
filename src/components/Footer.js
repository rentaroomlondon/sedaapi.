import Link from "next/link";
import Lockup from "./Lockup";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bleed">
      <div className="wrap">
        <div className="foot">
          <div>
            <Lockup className="f" />
            <p className="t">
              A Saudi-focused technology startup advancing digital healthcare innovation through intelligent software, strategic partnerships,
              and enterprise-grade solutions aligned with Vision 2030.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <nav className="flinks" aria-label="Company">
              <Link href="/about">About</Link>
              <Link href="/industry-focus">Industry Focus</Link>
              <Link href="/partnerships">Partnerships</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="flinks">
              <a href="mailto:info@sedaapi.ai" style={{ fontFamily: "var(--font-mono)", fontSize: ".88rem" }}>
                info@sedaapi.ai
              </a>
              <a href="https://www.sedaapi.ai" rel="noopener">
                www.sedaapi.ai
              </a>
              <span style={{ color: "var(--hero-muted)", fontSize: ".92rem" }}>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>
        </div>
        <div className="copyline">
          <span>
            Copyright © <span id="yr" suppressHydrationWarning>{year}</span> SEDAAPI. All rights reserved.
          </span>
          <span>Riyadh, Kingdom of Saudi Arabia</span>
        </div>
      </div>
    </footer>
  );
}
