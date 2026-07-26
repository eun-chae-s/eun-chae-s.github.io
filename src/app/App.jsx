import { Route, Routes } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { EditorialHomePage } from "../pages/EditorialHomePage";
import { PlaceholderPage } from "../pages/PlaceholderPage";

const routes = [
  { path: "/work", eyebrow: "Selected practice", title: "Work" },
  { path: "/notes", eyebrow: "Ideas & observations", title: "Notes" },
  { path: "/about", eyebrow: "A little more", title: "About" },
  { path: "/archive", eyebrow: "Everything, in order", title: "Archive" },
];

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<EditorialHomePage />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PlaceholderPage {...route} />}
          />
        ))}
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
