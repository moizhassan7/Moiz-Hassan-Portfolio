import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "./components/Home";
import Wellcome from "./components/Wellcome";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import ThankYou from "./components/Contact";
import Navbar from "./components/Navbar";
import Docker from "./components/Docker"; // 👈 add this
import "./styles/app.css";
import "./styles/animations.css";
import "./styles/scroll-progress.css";

function App() {
  const [showWellcome, setShowWellcome] = useState(true);
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Detect screen size (live updates on resize)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-hide splash after 30s or on click
  useEffect(() => {
    const timer = setTimeout(() => handleHide(), 30000);
    const handleClick = () => handleHide();

    if (showWellcome) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleClick);
    };
  }, [showWellcome]);

  const handleHide = () => {
    setFade(true);
    setTimeout(() => setShowWellcome(false), 1000);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--color-brand-primary)",
          transformOrigin: "0%",
          zIndex: 1000,
        }}
      />

      {showWellcome ? (
        <div className={`splashWrapper ${fade ? "fadeOut" : ""}`}>
          <Wellcome />
        </div>
      ) : (
        <div className="mainContent">
          {/* 👇 Conditionally render Navbar or Docker */}
          {isMobile ? <Docker /> : <Navbar />}

          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experiance">
            <Experiance />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <ThankYou />
          </section>
        </div>
      )}
    </>
  );
}

export default App
