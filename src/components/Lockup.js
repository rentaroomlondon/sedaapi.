/* Brand mark + wordmark + slogan, used in the hero and the footer. */
export default function Lockup({ className = "" }) {
  return (
    <div className={`lockup${className ? " " + className : ""}`}>
      <img className="lk-mark" src="/sedaapi-mark.png" alt="SEDAAPI logo mark" width="259" height="256" />
      <div className="lk-text">
        <img className="lk-word" src="/sedaapi-wordmark.png" alt="SEDAAPI wordmark" width="1059" height="120" />
        <p className="slogan">Where Intelligence Meets Humanity</p>
      </div>
    </div>
  );
}
