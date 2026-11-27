/* Card with a spotlight that follows the cursor. */
export default function SkillCard({ icon: Icon, num, title, text }) {
  const onPointerMove = (e) => {
    const c = e.currentTarget;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  };
  return (
    <article className="skill rv" onPointerMove={onPointerMove}>
      <div className="top">
        <span className="ico">
          <Icon />
        </span>
        <span className="num">{num}</span>
      </div>
      <strong className="ct">{title}</strong>
      <p>{text}</p>
    </article>
  );
}
