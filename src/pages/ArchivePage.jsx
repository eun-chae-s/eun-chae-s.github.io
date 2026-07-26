import { ArchiveRow } from "../components/archive/ArchiveRow";
import { PageIntro } from "../components/editorial/PageIntro";
import { archiveEntries } from "../content/archive";

const groupedEntries = archiveEntries.reduce((groups, entry) => {
  groups[entry.year] = [...(groups[entry.year] || []), entry];
  return groups;
}, {});

export function ArchivePage() {
  return (
    <main id="main-content" className="archive-page">
      <PageIntro
        eyebrow="Archive · Everything, in order"
        title="A record of making and noticing."
        introduction="Projects, notes, experiments, and small updates collected in one place — a timeline of what I’ve been making, learning, and paying attention to."
        aside={`${String(archiveEntries.length).padStart(2, "0")} entries so far`}
      />

      <section className="archive-index editorial-grid" aria-label="Archive entries">
        <div className="archive-index__legend eyebrow" aria-hidden="true">
          <span>Date</span>
          <span>Entry</span>
          <span>Kind</span>
        </div>
        {Object.entries(groupedEntries)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, entries]) => (
            <div className="archive-year" key={year}>
              <h2>{year}</h2>
              <ol>
                {entries.map((entry, index) => (
                  <ArchiveRow
                    key={entry.id}
                    entry={entry}
                    number={String(index + 1).padStart(2, "0")}
                  />
                ))}
              </ol>
            </div>
          ))}
      </section>
    </main>
  );
}
