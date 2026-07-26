import { SectionHeading } from "../editorial/SectionHeading";
import { useReveal } from "../../hooks/useReveal";

export function Currently({ items }) {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="home-section currently reveal-section"
    >
      <SectionHeading
        number="03"
        eyebrow="A small life update"
        title="Currently / Lately"
      />
      <div className="currently__body editorial-grid">
        <p className="currently__annotation">
          A quiet record of what has my attention right now.
          <span aria-hidden="true"> ↘</span>
        </p>
        <dl className="currently__list">
          {items.map((item) => (
            <div className="currently__item" key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
