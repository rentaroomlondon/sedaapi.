import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { id: "top", label: "Home" },
  { id: "industry", label: "Industry Focus" },
  { id: "partners", label: "Partnerships" },
  { id: "about", label: "About" },
  { id: "start", label: "Contact" },
];

/* Links in PAGE_HREFS always open their own page. Sub-pages pass `page` (e.g. "industry"):
   other links then point back to the home page sections, and the matching link is
   highlighted instead of using scroll-spy. */
const PAGE_HREFS = { industry: "/industry-focus", partners: "/partnerships", about: "/about", start: "/contact" };

export default function Nav({ page }) {
  const hrefFor = (id) => PAGE_HREFS[id] || (page ? (id === "top" ? "/" : `/#${id}`) : `#${id}`);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(page ? LINKS.findIndex((l) => l.id === page) : -1);
  const menuBtn = useRef(null);
  const prog = useRef(null);

  /* Escape closes the mobile menu */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /* scroll progress bar + active section */
  useEffect(() => {
    /* links that open another page are not part of the home scroll-spy */
    const secs = LINKS.map((l) => (PAGE_HREFS[l.id] ? null : document.getElementById(l.id)));
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const y = h.scrollTop || document.body.scrollTop;
      if (prog.current) prog.current.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      if (page) return;
      let cur = -1;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < 140) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  const close = () => setOpen(false);

  return (
    <header className={`nav bleed${open ? " open" : ""}`}>
      <div className="wrap">
        <a className="brand" href={page ? "/" : "#top"} aria-label="SEDAAPI home">
          <img className="b-logo" src="/logo.png" alt="SEDAAPI logo" width="476" height="340" />
          <small>
            Where Intelligence
            <br /> Meets Humanity
          </small>
        </a>
        <nav className="nav-links" id="navLinks" aria-label="Sections">
          {LINKS.map((l, i) => {
            const href = hrefFor(l.id);
            /* client-side routing for other pages, plain anchors for same-page sections */
            const A = href.startsWith("/") ? Link : "a";
            return (
              <A
                key={l.id}
                href={href}
                className={i === active ? "act" : undefined}
                aria-current={page && i === active ? "page" : undefined}
                onClick={close}
              >
                {l.label}
              </A>
            );
          })}
          <Link className="btn primary nav-cta" href="/contact" onClick={close}>
            Become a Partner
          </Link>
        </nav>
        <Link className="btn primary" href="/contact">
          Become a Partner
        </Link>
        <button
          ref={menuBtn}
          className="menu-btn"
          id="menuBtn"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <span className="progress" id="prog" ref={prog}></span>
    </header>
  );
}
