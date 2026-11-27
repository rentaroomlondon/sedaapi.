export default function SectionHead({ eyebrow, title, lede, style, children }) {
  return (
    <div className="head rv" style={style}>
      <div className="rule"></div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="lede">{lede}</p>
      {children}
    </div>
  );
}
