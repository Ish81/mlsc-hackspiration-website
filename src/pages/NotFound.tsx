import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-6xl font-bold text-primary text-glow font-mono">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg font-medium hover:bg-primary/20 transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
