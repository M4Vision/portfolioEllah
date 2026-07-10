import type { PortfolioData } from '../../lib/portfolio-data';

interface ProjectModalProps {
  open: boolean;
  project: PortfolioData['portfolio']['projects'][keyof PortfolioData['portfolio']['projects']] | null;
  onClose: () => void;
}

export function ProjectModal({ open, project, onClose }: ProjectModalProps) {
  return (
    <div className={`project-modal${open ? ' open' : ''}`}>
      <div className="project-modal-overlay" onClick={onClose} />
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={onClose} type="button">
          ✕
        </button>
        <div className="project-modal-image" id="pm-image">
          <div className="portfolio-img-placeholder">
            <img src="/assets/code.png" alt="Project Image" id="pm-image-src" width="85%" height="85%" style={{ borderRadius: '20px' }} />
          </div>
        </div>
        <div className="project-modal-scroll">
          <div className="project-modal-body">
            <div className="project-modal-cat" id="pm-cat">
              {project?.cat ?? ''}
            </div>
            <h3 className="project-modal-title" id="pm-title">
              {project?.title ?? ''}
            </h3>
            <div className="project-modal-subtitle" id="pm-subtitle">
              {project?.subtitle ?? ''}
            </div>
            <p className="project-modal-desc" id="pm-desc">
              {project?.desc ?? ''}
            </p>
            <div className="project-modal-section">
              <h4>Problème</h4>
              <p id="pm-problem">{project?.problem ?? ''}</p>
            </div>
            <div className="project-modal-section">
              <h4>Ce que j'en ai retiré</h4>
              <p id="pm-retro">{project?.retro ?? ''}</p>
            </div>
            <div className="project-modal-tags" id="pm-tags">
              {project?.tags.map((tag) => (
                <span className="project-modal-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a href={project?.link ?? '#'} className="project-modal-link" id="pm-link" target="_blank" rel="noopener">
              Voir le code →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
