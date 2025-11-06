import React, { useEffect, useState } from "react";
import "../styles/Docker.css";

function Docker() {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < 900);

  // Listen for screen resize/orientation changes
  useEffect(() => {
    const handleResize = () => setIsPortrait(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don’t render unless on portrait / small device
  if (!isPortrait) return null;

  return (
    <div className="bottomDock" role="navigation" aria-label="Mobile Dock">
      <button type="button" className="dockItem" aria-label="Home">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" />
        </svg>
      </button>

      <button type="button" className="dockItem" aria-label="About">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
        </svg>
      </button>

      <button type="button" className="dockItem" aria-label="Experience">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v2H4zM4 10h16v8H4z" />
        </svg>
      </button>

      <button type="button" className="dockItem" aria-label="Projects">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
        </svg>
      </button>

      <button type="button" className="dockItem" aria-label="Contact">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 8V7l-3 2-2-1-6 4-6-4-4 2v9h20V8z" />
        </svg>
      </button>
    </div>
  );
}

export default Docker;
