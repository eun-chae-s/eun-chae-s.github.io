export function PlaceholderPage({ eyebrow, title }) {
  return (
    <main id="main-content" className="page-placeholder">
      <div className="editorial-grid">
        <p className="eyebrow page-placeholder__eyebrow">{eyebrow}</p>
        <h1 className="display-title page-placeholder__title">{title}</h1>
        <p className="page-placeholder__note">
          This section is being carefully arranged.
        </p>
      </div>
    </main>
  );
}
