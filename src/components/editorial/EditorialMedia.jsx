import { useParallax } from "../../hooks/useParallax";

export function EditorialMedia({
  src,
  alt,
  accent = "sage",
  ratio = "landscape",
  className = "",
  annotation,
  parallax = false,
}) {
  const parallaxRef = useParallax(parallax);

  return (
    <figure
      ref={parallaxRef}
      className={`editorial-media editorial-media--${ratio} ${className}`.trim()}
      data-accent={accent}
      data-parallax={parallax}
    >
      <div className="editorial-media__frame">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="editorial-media__placeholder" role="img" aria-label={alt}>
            <span className="editorial-media__shape" aria-hidden="true" />
            <span className="editorial-media__placeholder-label">
              Image forthcoming
            </span>
          </div>
        )}
      </div>
      {annotation ? (
        <figcaption className="editorial-media__annotation">
          <span aria-hidden="true">↳</span> {annotation}
        </figcaption>
      ) : null}
    </figure>
  );
}
