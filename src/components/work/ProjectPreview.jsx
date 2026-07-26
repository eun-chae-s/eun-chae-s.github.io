import { EditorialMedia } from "../editorial/EditorialMedia";

export function ProjectPreview({ project }) {
  return (
    <article className="project-preview">
      <a
        href={project.href}
        data-cursor="View"
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} in a new tab`}
      >
        <EditorialMedia
          src={project.image}
          alt={project.imageAlt}
          accent={project.accent}
          ratio="portrait"
          mediaType={project.mediaType}
          previewUrl={project.previewUrl}
          imagePosition={project.imagePosition}
        />
      </a>
      <div className="project-meta eyebrow">
        <span>{project.number}</span>
        <span>{project.year}</span>
      </div>
      <h3>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h3>
      <p>{project.description}</p>
      <p className="project-preview__category eyebrow">{project.category}</p>
    </article>
  );
}
