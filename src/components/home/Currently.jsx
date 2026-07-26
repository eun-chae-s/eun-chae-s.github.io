import { SectionHeading } from "../editorial/SectionHeading";

export function Currently({ items }) {
  return (
    <section className="home-section currently">
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
