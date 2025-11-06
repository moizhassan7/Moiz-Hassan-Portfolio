import React from "react";
import InfiniteMenu from "./InfiniteMenu";
import "../styles/ProjectCards.css";

export default function ProjectCards() {
  const projects = [
    {
      title: "SMC Portal",
      description: "A responsive college portal built using React & Node.js.",
      image: "/imags/smc.png",
      link: "https://smcsgd.edu.pk/",
    },
    {
      title: "GitHub Repo Explorer",
      description: "A React app that fetches and visualizes GitHub repositories.",
      image: "/imags/github.png",
      link: "https://github.com/yourusername/repo",
    },
    {
      title: "Harvard School Website",
      description: "An elegant educational site using WordPress and custom themes.",
      image: "/imags/harvard.png",
      link: "https://harvardschool.edu.pk/",
    },
  ];

  // Repeat the projects to make the InfiniteMenu loop seamlessly
  const items = [...projects, ...projects, ...projects];

  return (
    <section className="projectSection">
      <h2 className="projectTitle" >My Projects</h2>
      <p className="projectSubtitle">
        A few featured works I've built and contributed to.
      </p>

      <div style={{ height: "600px", position: "rela", background:"transparent" }}>
        <InfiniteMenu items={items} />
      </div>
    </section>
  );
}
