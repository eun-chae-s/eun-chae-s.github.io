import { Route, Routes } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { AboutPage } from "../pages/AboutPage";
import { ArchivePage } from "../pages/ArchivePage";
import { EditorialHomePage } from "../pages/EditorialHomePage";
import { NotesPage } from "../pages/NotesPage";
import { PlaceholderPage } from "../pages/PlaceholderPage";
import { WorkPage } from "../pages/WorkPage";

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<EditorialHomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route
          path="*"
          element={
            <PlaceholderPage
              eyebrow="Nothing filed here"
              title="Page not found"
            />
          }
        />
      </Routes>
    </PageShell>
  );
}
