import { PageIntro } from "../components/editorial/PageIntro";
import { NotePreview } from "../components/notes/NotePreview";
import { notes } from "../content/notes";

export function NotesPage() {
  return (
    <main id="main-content" className="notes-page">
      <PageIntro
        eyebrow="Notes · Ideas & observations"
        title="Things I wanted to remember."
        introduction="Longer essays, short observations, technical learning, and occasional fragments from everyday life. Not everything here needs to become a definitive argument."
        aside="Some notes are considered essays. Others are simply notes."
      />
      <section className="notes-index editorial-grid" aria-labelledby="notes-title">
        <div className="notes-index__heading">
          <h2 id="notes-title" className="eyebrow">
            All notes
          </h2>
          <p>{String(notes.length).padStart(2, "0")} entries</p>
        </div>
        <ol className="notes-index__list">
          {notes.map((note, index) => (
            <NotePreview
              key={note.slug}
              note={note}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </ol>
      </section>
      <aside className="notes-small-thought editorial-grid">
        <p className="eyebrow">A smaller thought</p>
        <blockquote>
          “The archive can hold a sentence before it knows whether it wants to
          become an essay.”
        </blockquote>
      </aside>
    </main>
  );
}
