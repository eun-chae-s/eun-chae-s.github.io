import { ArchiveRow } from "../components/archive/ArchiveRow";
import { PageIntro } from "../components/editorial/PageIntro";
import { archiveEntries } from "../content/archive";

const groupedEntries = archiveEntries.reduce((groups, entry) => {
  const year = new Date(`${entry.date}T00:00:00`).getFullYear();
  groups[year] = [...(groups[year] || []), entry];
  return groups;
}, {});

export function ArchivePage() {
  return (
    <main id="main-content" className="archive-page">
      <PageIntro
        eyebrow="Archive · Everything, in order"
        title="A record of making and noticing."
        introduction="Projects, experiments, essays, and small updates share one chronological home. The archive is allowed to be eclectic; time supplies the organizing principle."
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
