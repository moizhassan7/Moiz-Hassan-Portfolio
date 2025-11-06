import React, { useRef } from "react";
import { motion } from "framer-motion";
import VariableProximity from "../components/VariableProximity";
import "../styles/Experience.css";

function Experience() {
  const containerRef = useRef(null);

 const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      percent: 95,
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      percent: 90,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      percent: 88,
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      percent: 85,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      percent: 85,
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      percent: 82,
    },
    {
      name: "Express JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      percent: 80,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      percent: 78,
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      percent: 85,
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      percent: 80,
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="experienceMain" id="experience">
      {/* HEADER */}
      <motion.div
        className="experienceHeader"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="sectionSubtitle">My Abilities</p>
        <h1 className="sectionTitle">
          <div ref={containerRef}>
            <VariableProximity
              label={"SKILLS & EXPERIENCE"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </h1>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="skillsGrid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skillBox"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
          >
            <div className="iconWrapper">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h4>{skill.name}</h4>

            {/* Progress Bar */}
            <div className="progressBar">
              <motion.div
                className="progressFill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
