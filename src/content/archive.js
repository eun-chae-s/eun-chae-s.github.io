import { notes } from "./notes";
import { projects } from "./projects";

const projectEntries = projects.map((project, index) => ({
  id: `work-${project.number}`,
  type: "Project",
  title: project.title,
  date: String(project.archiveYear),
  year: project.archiveYear,
  sortKey: `${project.archiveYear}-00-${String(
    projects.length - index,
  ).padStart(2, "0")}`,
  displayDate: project.year,
  category: project.category,
  href: project.href,
  external: true,
}));

const noteEntries = notes.map((note) => ({
  id: `note-${note.slug}`,
  type: "Note",
  title: note.title,
  date: note.isoDate,
  year: Number(note.isoDate.slice(0, 4)),
  sortKey: note.isoDate,
  displayDate: note.date,
  category: note.category,
  href: note.href,
  external: false,
}));

export const archiveEntries = [...projectEntries, ...noteEntries].sort(
  (a, b) => b.sortKey.localeCompare(a.sortKey),
);
