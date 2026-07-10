"use client";

import { useEffect, useMemo, useState } from 'react';
import type { PortfolioData } from '../../lib/portfolio-data';
import { SectionHeading } from './SectionHeading';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  portfolio: PortfolioData['portfolio'];
}

type FilterValue = string;

export function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('tout');
  const [selectedProjectId, setSelectedProjectId] = useState<keyof PortfolioData['portfolio']['projects'] | null>(null);

  const visibleItems = useMemo(
    () => portfolio.items.filter((item) => activeFilter === 'tout' || item.filter === activeFilter),
    [activeFilter, portfolio.items]
  );

  const selectedProject = selectedProjectId ? portfolio.projects[selectedProjectId] : null;

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <SectionHeading tag="Portfolio" titleHtml={portfolio.titleHtml} />
      </div>
      <div className="portfolio-filters reveal reveal-delay-2">
        {portfolio.filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
            data-filter={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="portfolio-grid reveal reveal-delay-2">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className={`portfolio-item ${item.projectClass}`}
            data-filter={item.filter}
            onClick={() => setSelectedProjectId(item.id as keyof PortfolioData['portfolio']['projects'])}
          >
            <div className={`portfolio-mock cat-${item.filter}`}>
              <div className="portfolio-img-placeholder">
                <span className="ph-text">{item.placeholderText}</span>
                <img src={item.image} alt={item.imageAlt} width="100%" style={{ borderRadius: '20px' }} />
              </div>
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <div className="portfolio-cat">{item.cardCategory}</div>
                <div className="portfolio-name">{item.cardName}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal open={Boolean(selectedProject)} project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
}
