import { EditorialMedia } from "../editorial/EditorialMedia";

export function WorkIndexItem({ project, index }) {
  const portrait = index % 2 !== 0;

  return (
    <article className="work-index-item editorial-grid">
      <a className="work-index-item__media" href={project.href}>
        <EditorialMedia
          src={project.image}
          alt={project.imageAlt}
          accent={project.accent}
          ratio={portrait ? "portrait" : "feature"}
        />
      </a>
      <div className="work-index-item__content">
        <div className="project-meta eyebrow">
          <span>{project.number}</span>
          <span>{project.year}</span>
        </div>
        <p className="work-index-item__category eyebrow">{project.category}</p>
        <h2>
          <a href={project.href}>{project.title}</a>
        </h2>
        <p className="work-index-item__description">{project.description}</p>
        <ul className="project-technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a className="text-link" href={project.href}>
          View project
        </a>
      </div>
    </article>
  );
}
