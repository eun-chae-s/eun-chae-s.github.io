import { useParallax } from "../../hooks/useParallax";

export function EditorialMedia({
  src,
  alt,
  accent = "sage",
  ratio = "landscape",
  className = "",
  annotation,
  parallax = false,
  mediaType = "image",
  previewUrl,
  imagePosition = "center",
  loading = "lazy",
}) {
  const parallaxRef = useParallax(parallax);

  return (
    <figure
      ref={parallaxRef}
      className={`editorial-media editorial-media--${ratio} ${className}`.trim()}
      data-accent={accent}
      data-parallax={parallax}
      data-media-type={mediaType}
    >
      <div className="editorial-media__frame">
        {mediaType === "website" && previewUrl ? (
          <iframe
            className="editorial-media__website"
            src={previewUrl}
            title={`${alt} website preview`}
            loading="lazy"
            tabIndex="-1"
            aria-hidden="true"
          />
        ) : src ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={loading === "eager" ? "high" : "auto"}
            style={{ objectPosition: imagePosition }}
          />
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
