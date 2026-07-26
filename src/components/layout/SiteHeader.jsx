import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { to: "/work", label: "Work" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "About" },
  { to: "/archive", label: "Archive" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="wordmark" to="/" aria-label="Rachel, home">
          <span>Rachel</span>
          <span className="wordmark__mark" aria-hidden="true">
            ✦
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-toggle__line" aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className="primary-navigation"
          data-open={menuOpen}
          aria-label="Primary navigation"
        >
          <ul>
            {navigation.map((item, index) => (
              <li key={item.to}>
                <span className="nav-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link--active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
