import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.dataset.revealed = "true";
      return undefined;
    }

    element.dataset.revealReady = "true";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}
