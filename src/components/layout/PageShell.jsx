import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MediaCursor } from "../motion/MediaCursor";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
