import SectionHead from "./SectionHead";
import {
  IconBrain,
  IconRefresh,
  IconBoxes,
  IconCloud,
  IconNetwork,
  IconShieldCheck,
  IconChart,
  IconPlug,
  IconRoute,
  IconBulb,
} from "./Icons";

export const CAPABILITY_ITEMS = [
  { icon: IconBrain, title: "Artificial Intelligence" },
  { icon: IconRefresh, title: "Digital Transformation" },
  { icon: IconBoxes, title: "Enterprise Software" },
  { icon: IconCloud, title: "Cloud Technologies" },
  { icon: IconNetwork, title: "Healthcare Integration" },
  { icon: IconShieldCheck, title: "Cybersecurity" },
  { icon: IconChart, title: "Data Analytics" },
  { icon: IconPlug, title: "API Development" },
  { icon: IconRoute, title: "Interoperability" },
  { icon: IconBulb, title: "Innovation Consulting" },
];

/* Dark band with icon tiles. Defaults to the ten capabilities; other pages pass their own content. */
export default function CapabilityGrid({
  id = "capabilities",
  eyebrow = "Our Capabilities",
  title = "A broad foundation of enterprise expertise",
  lede = "Interlocking capabilities that let us deliver end-to-end value across the healthcare technology landscape.",
  items = CAPABILITY_ITEMS,
  variant, // "timeline": numbered tiles joined by a thermal line
}) {
  return (
    <section className="band bleed" id={id}>
      <span className="orb a"></span>
      <span className="orb b"></span>
      <span className="gridbg"></span>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className={`capgrid${variant ? " " + variant : ""}`}>
          {items.map(({ icon: Icon, title }, i) => (
            <div className="cap rv" key={title}>
              {variant === "timeline" && <span className="cap-no">{String(i + 1).padStart(2, "0")}</span>}
              <span className="i">
                <Icon />
              </span>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
