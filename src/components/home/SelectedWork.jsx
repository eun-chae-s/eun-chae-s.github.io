import { ProjectFeature } from "../work/ProjectFeature";
import { ProjectPreview } from "../work/ProjectPreview";
import { SectionHeading } from "../editorial/SectionHeading";
import { useReveal } from "../../hooks/useReveal";

export function SelectedWork({ projects }) {
  const [featured, ...supporting] = projects;
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      id="selected-work"
      className="home-section selected-work reveal-section"
    >
      <SectionHeading
        number="01"
        eyebrow="A selection"
        title="Selected Work"
        link={{ href: "/work", label: "See all work" }}
      />
      <ProjectFeature project={featured} />
      <div className="supporting-projects editorial-grid">
        {supporting.map((project) => (
          <ProjectPreview key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
