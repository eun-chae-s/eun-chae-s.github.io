import { SectionHeading } from "../editorial/SectionHeading";
import { NotePreview } from "../notes/NotePreview";
import { useReveal } from "../../hooks/useReveal";

export function RecentNotes({ notes }) {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="home-section recent-notes reveal-section"
    >
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
