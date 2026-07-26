export function SectionHeading({ number, eyebrow, title, link }) {
  return (
    <header className="section-heading editorial-grid">
      <p className="section-heading__number eyebrow">{number}</p>
      <div className="section-heading__main">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {link ? (
        <a className="text-link section-heading__link" href={link.href}>
          {link.label}
        </a>
      ) : null}
    </header>
  );
}
