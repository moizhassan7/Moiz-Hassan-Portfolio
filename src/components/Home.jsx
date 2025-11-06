import Aurora from "./Aurora";
import React, { useRef } from "react";
import "../styles/Home.css";
import "../styles/animations.css";
  import Shuffle from './Shuffle';
import TextType from "./TextType";
function Home() {
  const containerRef = useRef(null);

  return (
    <>
      <Aurora
        colorStops={["#5DD62C", "#7D7D7D", "#337418"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* ===== New Hero Section (like attached image) ===== */}
      <section className="heroSection">
        <div className="heroContent">
          <div className="heroText">
            <h4 className="heroHello">Hello</h4>
            <h1 className="heroTitle">
              I’m{" "}
              <span className="highlight">
              
                <Shuffle
                  text="ZEESHAN"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                />
              </span>{" "}
              <br /> Web Developer
            </h1>
            <div className="heroTag">FULL STACK DEVELOPER</div>
            <p className="heroDesc">
              <TextType
                text={[
                  "I design and build immersive, responsive web experiences with a focus on performance, interactivity, and aesthetics. Let’s bring ideas to life with modern front-end engineering.",
                  "I design and build immersive, responsive web experiences with a focus on performance, interactivity, and aesthetics. Let’s bring ideas to life with modern front-end engineering.",
                  "I design and build immersive, responsive web experiences with a focus on performance, interactivity, and aesthetics. Let’s bring ideas to life with modern front-end engineering.",
                ]}
                typingSpeed={10}
                pauseDuration={4000}
                showCursor={true}
                deletingSpeed={50}
                cursorCharacter="_"
              />
            </p>
          </div>

          <div className="heroImage">
            <img src="/imags/my img.png" alt="Profile" />
          </div>
        </div>

        {/* <div className="heroDecor">
          <div className="chevron chevron1"></div>
          <div className="chevron chevron2"></div>
        </div> */}
      </section>

      {/* ======= Commented old home section (kept unchanged) ======= */}
      {/* <div className="homeContainer">
        <ScrollReveal className="homeMain" direction="up">
          <ScrollRevealChild>
            <motion.div 
              className="signatureText"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              HELLO! I'm
            </motion.div>
          </ScrollRevealChild>
          ...
        </ScrollReveal>
      </div> */}
    </>
  );
}

export default Home;
