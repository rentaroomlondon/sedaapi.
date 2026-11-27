import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/* Reveal `.rv` elements on scroll, with the same stagger as the original page. */
export default function useReveal() {
  useEffect(() => {
    const rv = document.querySelectorAll(".rv");
    document.querySelectorAll(".skills .rv, .domains .rv, .capgrid .rv, .ptypes .rv").forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
    });
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      rv.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    rv.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
