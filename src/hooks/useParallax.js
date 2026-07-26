import { useEffect, useRef } from "react";

export function useParallax(enabled = false) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !enabled ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    let frame;

    const update = () => {
      const bounds = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = bounds.top + bounds.height / 2;
      const distance = (elementCenter - viewportCenter) / window.innerHeight;
      const offset = Math.max(-12, Math.min(12, distance * -18));
      element.style.setProperty("--parallax-offset", `${offset}px`);
      frame = undefined;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return ref;
}
