import { PageIntro } from "../components/editorial/PageIntro";
import { WorkIndexItem } from "../components/work/WorkIndexItem";
import { projects } from "../content/projects";

export function WorkPage() {
  return (
    <main id="main-content" className="work-page">
      <PageIntro
        eyebrow="Work · Projects & experiments"
        title="From idea to something real"
        introduction="A mix of team projects, personal projects, and things I’ve built to learn something new."
        aside="Some are more polished than others, but each one taught me something."
      />
      <section className="work-index" aria-label="Project index">
        {projects.map((project, index) => (
          <WorkIndexItem key={project.number} project={project} index={index} />
        ))}
      </section>
      <aside className="work-invitation editorial-grid">
        <p className="eyebrow">More to come</p>
        <p>
          This archive will keep changing as new work is finished and older work
          finds its proper story.
        </p>
      </aside>
    </main>
  );
}
