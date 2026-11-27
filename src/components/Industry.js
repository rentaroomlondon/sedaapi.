import SectionHead from "./SectionHead";
import ThermalCase from "./ThermalCase";
import { CAPABILITIES } from "./Marquee";
import { IconHospital, IconShieldPlus, IconGov, IconHeartPulse, IconServer, IconChip } from "./Icons";

export const DOMAINS = [
  { icon: IconHospital, title: "Healthcare Providers", text: "Supporting hospitals, clinics, and healthcare organizations on their digital transformation journey." },
  { icon: IconShieldPlus, title: "Health Insurance", text: "Facilitating collaboration across the healthcare ecosystem through digital connectivity." },
  { icon: IconGov, title: "Government & Public Sector", text: "Supporting national initiatives focused on digital innovation and smart healthcare." },
  { icon: IconHeartPulse, title: "Digital Health", text: "Developing intelligent technologies that improve healthcare accessibility and efficiency." },
  { icon: IconServer, title: "Enterprise Technology", text: "Delivering scalable software solutions for enterprise organizations." },
  { icon: IconChip, title: "Artificial Intelligence", text: "Exploring AI-driven innovation to support future-ready healthcare services." },
];

export default function Industry() {
  return (
    <section id="industry">
      <div className="wrap">
        <SectionHead
          eyebrow="Industry Focus"
          title="Where we create measurable impact"
          lede="Six intersecting domains where SEDAAPI concentrates its expertise, partnerships, and technology investment."
        />
        <div className="built">
          <ThermalCase />
          <div className="domains">
            {DOMAINS.map(({ icon: Icon, title, text }) => (
              <div className="dom rv" key={title}>
                <span className="i">
                  <Icon />
                </span>
                <div>
                  <strong className="ct">{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="caps rv">
          <p className="eyebrow">Our Capabilities</p>
          <h3>A broad foundation of enterprise expertise</h3>
          <p>Interlocking capabilities that let us deliver end-to-end value across the healthcare technology landscape.</p>
          <div className="tags">
            {CAPABILITIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
