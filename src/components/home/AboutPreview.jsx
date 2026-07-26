import { EditorialMedia } from "../editorial/EditorialMedia";
import { useReveal } from "../../hooks/useReveal";

export function AboutPreview({ content }) {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="home-section about-preview editorial-grid reveal-section"
    >
      <EditorialMedia
        className="about-preview__media"
        src={content.image}
        alt={content.imageAlt}
        accent="blue"
        ratio="portrait"
        annotation="Portrait, eventually"
      />
      <div className="about-preview__content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
        <a className="text-link" href="/about">
          A little more about me
        </a>
      </div>
      <p className="about-preview__margin-note" aria-hidden="true">
        Building · Learning
        <br />
        Noticing · Writing
      </p>
    </section>
  );
}
