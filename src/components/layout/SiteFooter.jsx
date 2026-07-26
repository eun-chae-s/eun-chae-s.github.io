const links = [
  { label: "GitHub", href: "https://github.com/eun-chae-s" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eunchae-seong/" },
  { label: "Email", href: "mailto:sungeunchae@gmail.com" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="editorial-grid site-footer__inner">
        <p className="site-footer__message">Thanks for wandering around.</p>
        <ul className="site-footer__links" aria-label="Social links">
          {links.map((link) => (
            <li key={link.label}>
              <a className="text-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="site-footer__meta">
          © {new Date().getFullYear()} Rachel
          <span aria-hidden="true"> · </span>
          Toronto
        </p>
      </div>
    </footer>
  );
}
