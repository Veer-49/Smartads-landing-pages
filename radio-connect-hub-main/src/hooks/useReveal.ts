import { useEffect } from "react";

/**
 * Adds scroll-reveal animation to page content without touching markup.
 * Elements matching `selector` fade/slide in once as they enter the viewport.
 */
export function useReveal(
  selector = "section h2, section article, section dl, section .panel, section p, section a[href^='#']",
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    ).filter((el) => !el.closest("[data-no-reveal]"));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    nodes.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
