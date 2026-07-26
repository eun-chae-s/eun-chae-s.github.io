import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { articleRegistry } from "../content/articleRegistry";
import { notes } from "../content/notes";
import { PlaceholderPage } from "./PlaceholderPage";

function removeDuplicateTitle(markdown) {
  return markdown.replace(/^#\s+.+(?:\r?\n)+/, "");
}

export function NotePage() {
  const { slug } = useParams();
  const note = notes.find((entry) => entry.slug === slug);
  const article = articleRegistry[slug];

  useEffect(() => {
    if (note) document.title = `${note.title} — Rachel`;
  }, [note]);

  if (!note || !article) {
    return (
      <PlaceholderPage
        eyebrow="Notes · Entry not found"
        title="This note is not in the archive."
      />
    );
  }

  return (
    <main id="main-content" className="article-page">
      <header className="article-header editorial-grid">
        <Link className="article-header__back text-link" to="/notes">
          ← All notes
        </Link>
        <p className="article-header__category eyebrow">{note.category}</p>
        <h1>{note.title}</h1>
        <p className="article-header__excerpt">{note.excerpt}</p>
        <div className="article-header__meta eyebrow">
          <time dateTime={note.isoDate}>{note.date}</time>
          {note.readingTime ? <span>{note.readingTime} read</span> : null}
        </div>
      </header>

      {note.image ? (
        <figure className="article-hero editorial-grid">
          <div className="article-hero__image">
            <img src={note.image} alt={note.imageAlt} fetchPriority="high" />
          </div>
          <figcaption className="article-hero__caption">
            <span aria-hidden="true">↳</span> A view from Toronto, July 2026
          </figcaption>
        </figure>
      ) : null}

      <div className="article-layout editorial-grid">
        <aside className="article-aside">
          <p className="eyebrow">Filed under</p>
          <p>{note.category}</p>
          <p className="article-aside__note">
            A thought from the ongoing archive.
          </p>
        </aside>

        <article className="article-body">
          <ReactMarkdown
            components={{
              a({ href, children, ...props }) {
                const external = href?.startsWith("http");
                return (
                  <a
                    href={href}
                    {...props}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {removeDuplicateTitle(article)}
          </ReactMarkdown>
        </article>
      </div>

      <nav className="article-footer editorial-grid" aria-label="Note navigation">
        <p>Thanks for reading.</p>
        <Link className="text-link" to="/notes">
          Return to all notes
        </Link>
      </nav>
    </main>
  );
}
