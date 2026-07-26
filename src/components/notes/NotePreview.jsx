export function NotePreview({ note, number }) {
  return (
    <li className="note-preview">
      <a href={note.href} className="note-preview__link">
        <span className="note-preview__number eyebrow">{number}</span>
        <div className="note-preview__title">
          <h3>{note.title}</h3>
          <p>{note.excerpt}</p>
        </div>
        <div className="note-preview__meta eyebrow">
          <span>{note.category}</span>
          <time dateTime={note.isoDate}>{note.date}</time>
          {note.readingTime ? <span>{note.readingTime} read</span> : null}
        </div>
        <span className="note-preview__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}
