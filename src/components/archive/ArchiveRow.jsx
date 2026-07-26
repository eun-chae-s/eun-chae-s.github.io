export function ArchiveRow({ entry, number }) {
  return (
    <li className="archive-row">
      <a href={entry.href}>
        <span className="archive-row__number eyebrow">{number}</span>
        <time className="archive-row__date" dateTime={entry.date}>
          {entry.displayDate}
        </time>
        <span className="archive-row__title">{entry.title}</span>
        <span className="archive-row__category eyebrow">{entry.category}</span>
        <span className="archive-row__type eyebrow">{entry.type}</span>
        <span className="archive-row__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}
