import { Route, Routes, useLocation } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { PageTransition } from "../components/motion/PageTransition";
import { AboutPage } from "../pages/AboutPage";
import { ArchivePage } from "../pages/ArchivePage";
import { EditorialHomePage } from "../pages/EditorialHomePage";
import { NotesPage } from "../pages/NotesPage";
import { PlaceholderPage } from "../pages/PlaceholderPage";
import { WorkPage } from "../pages/WorkPage";

export default function App() {
  const location = useLocation();

  return (
    <PageShell>
      <PageTransition routeKey={location.pathname}>
        <Routes location={location}>
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
      </PageTransition>
    </PageShell>
  );
}
