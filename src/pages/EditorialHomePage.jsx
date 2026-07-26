import { AboutPreview } from "../components/home/AboutPreview";
import { Currently } from "../components/home/Currently";
import { Hero } from "../components/home/Hero";
import { RecentNotes } from "../components/home/RecentNotes";
import { SelectedWork } from "../components/home/SelectedWork";
import { currently } from "../content/currently";
import { notes } from "../content/notes";
import { projects } from "../content/projects";
import { siteContent } from "../content/site";

export function EditorialHomePage() {
  return (
    <main id="main-content">
      <Hero content={siteContent.hero} />
      <SelectedWork projects={projects} />
      <RecentNotes notes={notes} />
      <Currently items={currently} />
      <AboutPreview content={siteContent.aboutPreview} />
    </main>
  );
}
