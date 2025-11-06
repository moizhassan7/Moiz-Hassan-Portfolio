import React, { useState } from "react";
import { X } from "lucide-react";
import FlowingMenu from "./FlowingMenu";
import DecryptedText from "../components/DecryptedText";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { link: "#home", text: "Home", image: "https://picsum.photos/600/400?random=1" },
    { link: "#about", text: "About", image: "https://picsum.photos/600/400?random=2" },
    { link: "#experiance", text: "Experience", image: "https://picsum.photos/600/400?random=3" },
    { link: "#projects", text: "Projects", image: "https://picsum.photos/600/400?random=4" },
    { link: "#contact", text: "Contact", image: "https://picsum.photos/600/400?random=5" },
  ];

  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <a href="#home">
          <DecryptedText
            text="Z."
            speed={200}
            maxIterations={40}
            characters="KIRANsjad#@#^6125"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </a>
      </div>

      {/* 🔹 Toggle Button */}
      <button
        className="menuToggleBtn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <X size={28} />
        ) : (
          <span className="codeIcon">&lt;/&gt;</span> // custom icon
        )}
      </button>

      {/* 🔹 Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="menuOverlay">
          <FlowingMenu
            items={menuItems}
            onItemClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
