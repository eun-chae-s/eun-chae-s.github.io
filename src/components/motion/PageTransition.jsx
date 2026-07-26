export function PageTransition({ routeKey, children }) {
  return (
    <div className="page-transition" key={routeKey}>
      {children}
    </div>
  );
}
