import { useRef, useState } from "react";
import { IconCheck, IconSend } from "./Icons";

const EMPTY = { n: "", o: "", e: "", q: "General Inquiry", m: "" };

/* Builds a copyable inquiry text (no backend), same as the original page.
   variant="page" (/contact): no heading, placeholders, message required, send icon,
   and an "Open in email" button on the result. */
export default function ContactForm({ variant }) {
  const page = variant === "page";
  const ph = (text) => (page ? text : undefined);
  const [v, setV] = useState(EMPTY);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const [out, setOut] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy inquiry");
  const nRef = useRef(null);
  const eRef = useRef(null);
  const mRef = useRef(null);
  const outRef = useRef(null);

  const set = (k) => (ev) => setV((s) => ({ ...s, [k]: ev.target.value }));

  const onSubmit = (ev) => {
    ev.preventDefault();
    const g = (k) => (v[k] || "").trim();
    if (!g("n")) {
      setErr("Please add your name.");
      nRef.current.focus();
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(g("e"))) {
      setErr("Please add a valid email.");
      eRef.current.focus();
      return;
    }
    if (page && !g("m")) {
      setErr("Please add a short message.");
      mRef.current.focus();
      return;
    }
    setErr("");
    setOut(
      "SEDAAPI inquiry\nType: " + g("q") + "\nName: " + g("n") + "\nOrganization: " + (g("o") || "-") + "\nEmail: " + g("e") + "\nMessage: " + (g("m") || "-")
    );
    setDone(true);
  };

  const onCopy = () => {
    const ok = () => {
      setCopyLabel("Copied ✓");
      setTimeout(() => setCopyLabel("Copy inquiry"), 1600);
    };
    const fb = () => {
      const r = document.createRange();
      r.selectNodeContents(outRef.current);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      setCopyLabel("Selected");
    };
    try {
      navigator.clipboard.writeText(out).then(ok, fb);
    } catch {
      fb();
    }
  };

  return (
    <div className={`formcard rv${page ? " page" : ""}`} id={page ? "inquiry" : undefined}>
      <div id="formwrap" style={done ? { display: "none" } : undefined}>
        {!page && (
          <>
            <h3>Reach the SEDAAPI team</h3>
            <p className="sub">We respond to strategic and partnership inquiries within a few business days.</p>
          </>
        )}
        <form id="f" noValidate onSubmit={onSubmit}>
          <div className="row2">
            <label htmlFor="n">
              Name
              <input id="n" ref={nRef} name="name" type="text" autoComplete="name" placeholder={ph("Full name")} required value={v.n} onChange={set("n")} />
            </label>
            <label htmlFor="o">
              Organization
              <input id="o" name="organization" type="text" autoComplete="organization" placeholder={ph("Company or institution")} value={v.o} onChange={set("o")} />
            </label>
          </div>
          <div className="row2">
            <label htmlFor="e">
              Email
              <input id="e" ref={eRef} name="email" type="email" autoComplete="email" placeholder={ph("you@company.com")} required value={v.e} onChange={set("e")} />
            </label>
            <label htmlFor="q">
              Inquiry Type
              <select id="q" name="type" value={v.q} onChange={set("q")}>
                <option>General Inquiry</option>
                <option>Partnership Inquiry</option>
                <option>Investor Inquiry</option>
              </select>
            </label>
          </div>
          <label htmlFor="m">
            Message
            <textarea id="m" ref={mRef} name="message" placeholder={ph("Tell us briefly about your interest in collaboration.")} required={page} value={v.m} onChange={set("m")}></textarea>
          </label>
          <p className="err" id="err" aria-live="polite">
            {err}
          </p>
          <button className="btn primary" type="submit" style={{ justifyContent: "center" }}>
            Submit Inquiry <span className="ar">{page ? <IconSend /> : "→"}</span>
          </button>
          <p className="small">Your information is used only to respond to your inquiry.</p>
        </form>
      </div>
      <div className={`done${done ? " show" : ""}`} id="done" aria-live="polite">
        <div className="check">
          <IconCheck sw={2.4} />
        </div>
        <h3>Your inquiry is ready</h3>
        <p className="small">
          Copy it and send it to <b>info@sedaapi.ai</b>. We respond within a few business days.
        </p>
        <div className="out" id="out" ref={outRef}>
          {out}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {page && (
            <a
              className="copy"
              href={`mailto:info@sedaapi.ai?subject=${encodeURIComponent("SEDAAPI inquiry · " + v.q)}&body=${encodeURIComponent(out)}`}
            >
              Open in email
            </a>
          )}
          <button className="copy" id="copy" type="button" onClick={onCopy}>
            {copyLabel}
          </button>
          <button className="copy" id="again" type="button" onClick={() => setDone(false)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
