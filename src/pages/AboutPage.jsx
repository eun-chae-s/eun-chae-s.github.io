import { EditorialMedia } from "../components/editorial/EditorialMedia";
import { siteContent } from "../content/site";

export function AboutPage() {
  const { about } = siteContent;

  return (
    <main id="main-content" className="about-page">
      <header className="about-hero editorial-grid">
        <p className="about-hero__eyebrow eyebrow">{about.eyebrow}</p>
        <h1>{about.title}</h1>
        <p className="about-hero__introduction">{about.introduction}</p>
        <EditorialMedia
          className="about-hero__media"
          src={about.image}
          alt={about.imageAlt}
          accent="blush"
          ratio="portrait"
          annotation="A photograph belongs here"
          parallax
        />
        <p className="about-hero__note" aria-hidden="true">
          Human first,
          <br />
          engineer too.
        </p>
      </header>

      <section className="about-story editorial-grid" aria-labelledby="story-title">
        <p className="about-story__label eyebrow">A working introduction</p>
        <div className="about-story__body">
          <h2 id="story-title">How I think about the work</h2>
          <p>{about.career}</p>
          <p>{about.perspective}</p>
        </div>
      </section>

      <section className="about-details editorial-grid" aria-labelledby="details-title">
        <div className="about-details__heading">
          <p className="eyebrow">At the moment</p>
          <h2 id="details-title">A few coordinates</h2>
        </div>
        <dl className="about-details__list">
          {about.details.map((detail) => (
            <div key={detail.label}>
              <dt className="eyebrow">{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-contact editorial-grid">
        <p className="eyebrow">Say hello</p>
        <p>
          If something here starts a conversation, you can always{" "}
          <a className="text-link" href="mailto:sungeunchae@gmail.com">
            send me a note
          </a>
          .
        </p>
      </section>
    </main>
  );
}
