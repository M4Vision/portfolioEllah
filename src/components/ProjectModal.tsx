"use client";

import { useEffect, type ReactNode } from "react";

interface ProjectData {
  cat: string;
  title: string;
  subtitle: string;
  desc: string;
  problem: string;
  retro: string;
  tags: string[];
  link: string;
  image?: string;
}

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={`project-modal${project ? " open" : ""}`}>
      <div className="project-modal-overlay" onClick={onClose} />
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={onClose}>✕</button>
        <div className="project-modal-image" id="pm-image">
          <div className="portfolio-img-placeholder">
            <img src="/assets/code.png" alt="Project Image" width="85%" height="85%" style={{ borderRadius: 20 }} />
          </div>
        </div>
        <div className="project-modal-scroll">
          <div className="project-modal-body">
            <div className="project-modal-cat">{project.cat}</div>
            <h3 className="project-modal-title">{project.title}</h3>
            <div className="project-modal-subtitle">{project.subtitle}</div>
            <p className="project-modal-desc">{project.desc}</p>
            <div className="project-modal-section">
              <h4>Problème</h4>
              <p>{project.problem}</p>
            </div>
            <div className="project-modal-section">
              <h4>Ce que j'en ai retiré</h4>
              <p>{project.retro}</p>
            </div>
            <div className="project-modal-tags">
              {project.tags.map((tag) => (
                <span className="project-modal-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-modal-link" target="_blank" rel="noopener noreferrer">
              Voir le code →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
