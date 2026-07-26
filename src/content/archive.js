import { notes } from "./notes";
import { projects } from "./projects";

const projectDates = {
  "Project One": "2026-04-08",
  "Project Two": "2025-10-16",
  "Experiment One": "2025-07-03",
};

const projectEntries = projects.map((project) => ({
  id: `work-${project.number}`,
  type: project.status === "Experiment" ? "Experiment" : "Work",
  title: project.title,
  date: projectDates[project.title],
  displayDate: project.year,
  category: project.category,
  href: project.href,
}));

const noteEntries = notes.map((note) => ({
  id: `note-${note.slug}`,
  type: "Note",
  title: note.title,
  date: note.isoDate,
  displayDate: note.date,
  category: note.category,
  href: note.href,
}));

export const archiveEntries = [...projectEntries, ...noteEntries].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
