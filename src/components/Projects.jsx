import React, { useRef } from "react";
import { motion } from "framer-motion";
import VariableProximity from "../components/VariableProximity";
import ProjectCards from "./ProjectCards";
import "../styles/Projects.css";
import "../styles/animations.css";

function Projects() {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites with seamless UX and performance-driven design using React, Node.js, and modern JS frameworks.",
    },
    {
      title: "UI/UX Designing",
      description:
        "Creating clean, intuitive, and user-centered interfaces through research, wireframes, and interactive prototypes.",
    },
    {
      title: "WordPress & WooCommerce",
      description:
        "Building optimized and scalable WordPress sites with secure eCommerce functionality powered by WooCommerce.",
    },
  ];

  return (
    <div className="projectsmain">
      {/* ---- WORK SECTION ---- */}
      <motion.div
        className="workSection"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="sectionSubtitle">My Work</p>

        <div ref={containerRef}>
          <VariableProximity
            label={"Working"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>

        <ProjectCards />
      </motion.div>

      {/* ---- SERVICES SECTION ---- */}
      <motion.div
        className="servicesSection"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="sectionSubtitle">My Services</p>
        <h2 className="sectionTitle">
          <div ref={containerRef}>
            <VariableProximity
              label={"What I Offer"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </h2>

        {/* ==== Hover Cards with Descriptions ==== */}
        <div className="servicesContainer">
          <div className="card">
            {services.map((service, i) => (
              <p key={i}>
                <span className="card-title">{service.title}</span>
                <span className="card-description">{service.description}</span>
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
