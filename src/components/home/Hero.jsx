import { EditorialMedia } from "../editorial/EditorialMedia";

export function Hero({ content }) {
  return (
    <section className="hero editorial-grid" aria-labelledby="hero-title">
        <p className="hero__eyebrow eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title" className="hero__title">
          <span>I build thoughtfully,</span>
          <span>stay curious, and write</span>
          <span>things down.</span>
        </h1>
        <p className="hero__introduction">{content.introduction}</p>
        <EditorialMedia
          className="hero__media"
          src={content.image}
          alt={content.imageAlt}
          accent="blush"
          ratio="portrait"
          annotation={content.annotation}
        />
        <a className="hero__continuation" href="#selected-work">
          <span className="hero__continuation-line" aria-hidden="true" />
          <span>Continue through the archive</span>
        </a>
    </section>
  );
}
