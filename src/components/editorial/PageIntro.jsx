export function PageIntro({ eyebrow, title, introduction, aside }) {
  return (
    <header className="page-intro editorial-grid">
      <p className="page-intro__eyebrow eyebrow">{eyebrow}</p>
      <h1 className="page-intro__title">{title}</h1>
      <p className="page-intro__introduction">{introduction}</p>
      {aside ? <p className="page-intro__aside">{aside}</p> : null}
    </header>
  );
}
