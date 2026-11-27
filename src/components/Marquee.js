export const CAPABILITIES = [
  "Artificial Intelligence",
  "Digital Transformation",
  "Enterprise Software",
  "Cloud Technologies",
  "Healthcare Integration",
  "Cybersecurity",
  "Data Analytics",
  "API Development",
  "Interoperability",
  "Innovation Consulting",
];

export default function Marquee() {
  /* list is rendered twice so the -50% scroll loops seamlessly */
  const items = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <div className="marquee bleed" aria-hidden="true">
      <div className="track">
        {items.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
    </div>
  );
}
