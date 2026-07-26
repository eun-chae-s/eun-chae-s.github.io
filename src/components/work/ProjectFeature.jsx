import { EditorialMedia } from "../editorial/EditorialMedia";

export function ProjectFeature({ project }) {
  return (
    <article className="project-feature editorial-grid">
      <a className="project-feature__media-link" href={project.href}>
        <EditorialMedia
          src={project.image}
          alt={project.imageAlt}
          accent={project.accent}
          ratio="feature"
        />
      </a>
      <div className="project-feature__content">
        <div className="project-meta eyebrow">
          <span>{project.number}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <a href={project.href}>{project.title}</a>
        </h3>
        <p>{project.description}</p>
        <ul className="project-technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a className="text-link project-feature__link" href={project.href}>
          View project
        </a>
      </div>
    </article>
  );
}
