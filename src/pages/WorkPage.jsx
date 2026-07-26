import { PageIntro } from "../components/editorial/PageIntro";
import { WorkIndexItem } from "../components/work/WorkIndexItem";
import { projects } from "../content/projects";

export function WorkPage() {
  return (
    <main id="main-content" className="work-page">
      <PageIntro
        eyebrow="Work · Projects & experiments"
        title="Useful things, made with care."
        introduction="A growing selection of professional work, collaborative projects, and smaller experiments. Full case studies can be added here when the stories are ready."
        aside="Projects are arranged as features, not ranked by importance."
      />
      <section className="work-index" aria-label="Project index">
        {projects.map((project, index) => (
          <WorkIndexItem
            key={project.number}
            project={project}
            index={index}
          />
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
