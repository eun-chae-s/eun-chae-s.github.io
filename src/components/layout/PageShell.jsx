import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MediaCursor } from "../motion/MediaCursor";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const titles = {
      "/": "Rachel — Editorial Archive",
      "/work": "Work — Rachel",
      "/notes": "Notes — Rachel",
      "/about": "About — Rachel",
      "/archive": "Archive — Rachel",
    };

    document.title = titles[pathname] || "Page not found — Rachel";
  }, [pathname]);

  return null;
}

export function PageShell({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <SiteHeader />
      {children}
      <SiteFooter />
      <MediaCursor />
    </>
  );
}
