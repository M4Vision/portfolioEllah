"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectModal from "./ProjectModal";
import { portfolio } from "@/data/content";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("tout");
  const [selectedProject, setSelectedProject] = useState<(typeof portfolio.projects)[number] | null>(null);

  const filtered =
    activeFilter === "tout"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <ScrollReveal>
          <div className="section-tag">{portfolio.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">
            {portfolio.titleParts.map((part, i) => (
              <span key={i}>
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={2}>
        <div className="portfolio-filters">
          {portfolio.filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? " active" : ""}`}
              data-filter={f.key}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={2}>
        <div className="portfolio-grid">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className={`portfolio-item project-${proj.id}`}
              data-filter={proj.filter}
              onClick={() => setSelectedProject(proj)}
            >
              <div className={`portfolio-mock cat-${proj.filter === "systeme" ? "systeme" : proj.filter}`}>
                <div className="portfolio-img-placeholder">
                  <span className="ph-text">{proj.schoolBadge}</span>
                  <img src={proj.image} alt={proj.name} width="100%" style={{ borderRadius: 20 }} />
                </div>
              </div>
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <div className="portfolio-cat">{proj.cat}</div>
                  <div className="portfolio-name">{proj.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ProjectModal
        project={selectedProject ? { ...selectedProject, image: selectedProject.image } : null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
