import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VariableProximity from "../components/VariableProximity";
import ScrollReveal, { ScrollRevealChild } from "./ScrollReveal";
import "../styles/About.css";
import "../styles/animations.css";
import PixelTransition from "./PixelTransition";
import TextType from "./TextType";
function About() {
  const containerRef = useRef(null);

  return (
    <div className="aboutMain">
      <ScrollReveal className="aboutContent" direction="up">
        {/* LEFT IMAGE */}
        <ScrollReveal direction="right" delay={0.2}>
          <motion.div
            className="aboutImage"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* <motion.img
              src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/503602046_122212331852162023_1195050744545413_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=03AKnZ6N4DwQ7kNvwHrGiZ2&_nc_oc=Adk3BKWzxvEX_-QSGISPu_lxzmj34MWbXfE7Y6AfZ0ZjsV0MZpU_Ohl4f4p6cR3ITr5V4iC-KIKdOC5y8m15pNp0&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=OOsDHWK3fi-MD1PpwM9o8Q&oh=00_Aff4in4mSv0JxFd4K3wL3oPAXcQTcKuiGmFLntrOOYHu2A&oe=690BA1D8"
              alt="Profile"
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 1 }}
            />*/}
            <PixelTransition
              firstContent={
                <img
                  src="/imags/abc.png"
                  alt="default pixel transition"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "3rem",
                      color: "#ffffffff",
                      justifySelf: "center",
                      textAlign: "center",
                    }}
                  >
                    Hi! Here's <br />a bit <br /> about me
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </motion.div>
        </ScrollReveal>

        {/* RIGHT CONTENT */}
        <ScrollReveal direction="left" className="aboutInfo">
          <ScrollRevealChild>
            <motion.span
              className="introText"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Intro
            </motion.span>
          </ScrollRevealChild>

          <ScrollRevealChild delay={0.2}>
            <div ref={containerRef}>
              <VariableProximity
                label={"About Me"}
                className={"variable-proximity-demo"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </ScrollRevealChild>

          {/* Info cards */}
          {/* <ScrollReveal direction="up" className="aboutStats" delay={0.3}>
            <ScrollRevealChild>
              <motion.div
                className="statCard"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-lightbulb-line"></i>
                <h4>Experience</h4>
                <p>2 Months Working</p>
              </motion.div>
            </ScrollRevealChild>

            <ScrollRevealChild delay={0.1}>
              <motion.div
                className="statCard"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-briefcase-line"></i>
                <h4>Completed</h4>
                <p>20+ Projects</p>
              </motion.div>
            </ScrollRevealChild>

            <ScrollRevealChild delay={0.2}>
              <motion.div
                className="statCard"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-headphone-line"></i>
                <h4>Support</h4>
                <p>Online 24/7</p>
              </motion.div>
            </ScrollRevealChild>
          </ScrollReveal> */}
          <div className="aboutCards">
            <div className="card">
              <i className="ri-lightbulb-line"></i>
              <div className="card__content">
                <p className="card__title">Experience</p>
                <p className="card__description">4 Years Working</p>
              </div>
            </div>

            <div className="card">
              <i className="ri-briefcase-line"></i>
              <div className="card__content">
                <p className="card__title">Completed</p>
                <p className="card__description">100+ Projects</p>
              </div>
            </div>

            <div className="card">
              <i className="ri-headphone-line"></i>
              <div className="card__content">
                <p className="card__title">Satisfied Clients</p>
                <p className="card__description">50+</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <ScrollRevealChild delay={0.4}>
            <motion.p
              className="aboutDescription"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TextType
                text={[
                  " Frontend Developer. I create web pages with UI / UX user interfaces. I have years of experience and many clients are happy with the work I do.",
                  " Frontend Developer. I create web pages with UI / UX user interfaces. I have years of experience and many clients are happy with the work I do.",
                  " Frontend Developer. I create web pages with UI / UX user interfaces. I have years of experience and many clients are happy with the work I do.",
                ]}
                 typingSpeed={10}
                pauseDuration={4000}
                showCursor={true}
                deletingSpeed={50}
                cursorCharacter="_"
              />
            </motion.p>
          </ScrollRevealChild>

          {/* Button */}
          <ScrollRevealChild delay={0.5}>
            <motion.button
              className="ui-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span>Contact Me!</span>
              </a>
            </motion.button>
          </ScrollRevealChild>
        </ScrollReveal>
      </ScrollReveal>
    </div>
  );
}

export default About;
