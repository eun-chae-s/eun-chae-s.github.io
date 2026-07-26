import { SectionHeading } from "../editorial/SectionHeading";
import { NotePreview } from "../notes/NotePreview";

export function RecentNotes({ notes }) {
  return (
    <section className="home-section recent-notes">
      <SectionHeading
        number="02"
        eyebrow="From the notebook"
        title="Recent Notes"
        link={{ href: "/notes", label: "Browse all notes" }}
      />
      <ol className="notes-list editorial-grid">
        {notes.map((note, index) => (
          <NotePreview
            key={note.slug}
            note={note}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </ol>
    </section>
  );
}
