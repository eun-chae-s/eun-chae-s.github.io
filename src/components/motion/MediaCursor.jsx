import { useEffect, useRef, useState } from "react";

export function MediaCursor() {
  const cursorRef = useRef(null);
  const frameRef = useRef();
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return undefined;

    const moveCursor = (event) => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = window.requestAnimationFrame(() => {
        cursorRef.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursorRef.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    const findTarget = (event) => event.target.closest("[data-cursor]");

    const handleOver = (event) => {
      const target = findTarget(event);
      if (!target) return;
      setLabel(target.dataset.cursor || "Open");
      setVisible(true);
    };

    const handleOut = (event) => {
      const target = findTarget(event);
      if (!target || target.contains(event.relatedTarget)) return;
      setVisible(false);
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerover", handleOver);
    document.addEventListener("pointerout", handleOut);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerout", handleOut);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="media-cursor"
      data-visible={visible}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
