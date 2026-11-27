import SectionHead from "./SectionHead";
import SkillCard from "./SkillCard";
import { IconBulb, IconPeople, IconTarget } from "./Icons";

export const VALUES = [
  { icon: IconBulb, title: "Innovation", text: "Intelligent software that raises the ceiling of what healthcare can deliver." },
  { icon: IconPeople, title: "Collaboration", text: "Meaningful partnerships across public and private healthcare ecosystems." },
  { icon: IconTarget, title: "Vision 2030", text: "Purposeful alignment with the Kingdom's long-term national ambitions." },
];

const VISION = ["Digital Transformation", "Healthcare Innovation", "Knowledge Economy", "Technology Leadership", "Sustainable Growth"];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead
          eyebrow="About SEDAAPI"
          title="A Saudi technology company with a clear purpose"
          lede="SEDAAPI advances the digital transformation of healthcare through intelligent software, enterprise capabilities, and long-horizon partnerships."
        />
        <div className="purpose rv">
          <h3>Innovation with Purpose</h3>
          <p>
            SEDAAPI is dedicated to advancing digital transformation across the healthcare ecosystem through innovative technologies and
            collaborative partnerships. We support healthcare organizations, technology providers, and strategic stakeholders with scalable
            digital solutions that improve efficiency, interoperability, and long-term sustainability — built on innovation, collaboration,
            and alignment with Saudi Arabia&apos;s Vision 2030.
          </p>
        </div>
        <div className="skills">
          {VALUES.map((v, i) => (
            <SkillCard key={v.title} num={String(i + 1).padStart(2, "0")} {...v} />
          ))}
        </div>
        <div className="caps rv">
          <p className="eyebrow">Our Vision</p>
          <h3>Aligned with Saudi Vision 2030</h3>
          <p>
            Contributing to the Kingdom&apos;s transformation through five interlocking commitments that guide every partnership and product
            decision.
          </p>
          <div className="tags">
            {VISION.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
