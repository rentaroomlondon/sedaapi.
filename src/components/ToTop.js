import { useEffect, useState } from "react";

export default function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = document.documentElement.scrollTop || document.body.scrollTop;
      setShow(y > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a className={`to-top${show ? " show" : ""}`} id="toTop" href="#top" aria-label="Back to top">
      ↑
    </a>
  );
}
