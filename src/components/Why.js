import SectionHead from "./SectionHead";
import SkillCard from "./SkillCard";
import { IconPin, IconBulb, IconPeople, IconShieldCheck, IconChart, IconCompass } from "./Icons";

const REASONS = [
  { icon: IconPin, title: "Saudi Market Focus", text: "Deep alignment with Kingdom priorities and local ecosystem dynamics." },
  { icon: IconBulb, title: "Innovation-Driven", text: "A culture that turns emerging technology into practical outcomes." },
  { icon: IconPeople, title: "Strategic Partnerships", text: "Collaboration models designed for long-horizon value creation." },
  { icon: IconShieldCheck, title: "Enterprise Ready", text: "Standards, security, and governance suited to enterprise adoption." },
  { icon: IconChart, title: "Scalable Solutions", text: "Architectures built to grow with the ecosystems they serve." },
  { icon: IconCompass, title: "Long-Term Vision", text: "Decisions guided by sustained national and sector-wide impact." },
];

export default function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why SEDAAPI"
          title="A partner built for enterprise trust"
          lede="Six reasons partners, regulators, and investors choose to work with SEDAAPI."
        />
        <div className="skills">
          {REASONS.map((r, i) => (
            <SkillCard key={r.title} num={String(i + 1).padStart(2, "0")} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
