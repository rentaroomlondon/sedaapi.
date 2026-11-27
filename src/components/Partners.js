import Link from "next/link";
import SectionHead from "./SectionHead";

const PARTNERS = [
  "Healthcare Organizations",
  "Technology Companies",
  "Government Programs",
  "Research Institutions",
  "System Integrators",
  "Strategic Investors",
];

export default function Partners() {
  return (
    <section id="partners">
      <div className="wrap">
        <SectionHead
          eyebrow="Partnerships"
          title="Building Strategic Partnerships"
          lede="SEDAAPI believes meaningful innovation is achieved through collaboration. We welcome opportunities to work with healthcare providers, government organizations, insurers, technology companies, system integrators, research institutions, and strategic investors to support digital transformation initiatives within Saudi Arabia and the GCC."
        />
        <div className="steps partners rv">
          {PARTNERS.map((p, i) => (
            <div className="step" key={p}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <strong className="ct">{p}</strong>
            </div>
          ))}
        </div>
        <div className="center-cta rv">
          <Link className="btn primary" href="/contact">
            Become a Partner <span className="ar">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
