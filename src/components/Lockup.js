/* Brand logo + slogan, used in the footer. */
export default function Lockup({ className = "" }) {
  return (
    <div className={`lockup${className ? " " + className : ""}`}>
      <img className="lk-logo" src="/logo.png" alt="SEDAAPI logo" width="476" height="340" />
      <p className="slogan">Where Intelligence Meets Humanity</p>
    </div>
  );
}
