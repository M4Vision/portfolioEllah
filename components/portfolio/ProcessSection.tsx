import type { PortfolioData } from '../../lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

interface ProcessSectionProps {
  process: PortfolioData['process'];
}

function ProcessIcon({ icon }: { icon: string }) {
  if (icon === 'screen') {
    return (
      <svg width="100" height="50" viewBox="0 0 100 50" aria-hidden="true">
        <rect x="20" y="8" width="60" height="30" rx="4" fill="#000" opacity="0.85" />
        <rect x="28" y="14" width="44" height="14" rx="2" fill="#fff" opacity="0.85" />
      </svg>
    );
  }

  if (icon === 'strategy') {
    return (
      <svg width="100" height="50" viewBox="0 0 100 50" aria-hidden="true">
        <circle cx="35" cy="25" r="10" fill="#000" opacity="0.85" />
        <circle cx="65" cy="25" r="10" fill="#000" opacity="0.35" />
        <path d="M45 25h10" stroke="#000" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === 'code') {
    return (
      <svg width="100" height="50" viewBox="0 0 100 50" aria-hidden="true">
        <path d="M35 18l-8 7 8 7" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M65 18l8 7-8 7" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M53 14l-6 22" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (icon === 'automation') {
    return (
      <svg width="100" height="50" viewBox="0 0 100 50" aria-hidden="true">
        <path d="M25 25h20" stroke="#000" strokeWidth="2" />
        <path d="M55 25h20" stroke="#000" strokeWidth="2" />
        <path d="M45 18l10 7-10 7" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return (
    <svg width="100" height="50" viewBox="0 0 100 50" aria-hidden="true">
      <path d="M20 30h60" stroke="#000" strokeWidth="2" />
      <path d="M28 28l10-10 10 6 10-14 14 8" stroke="#000" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section id="process">
      <div className="process-header">
        <SectionHeading tag="Méthode" titleHtml={process.titleHtml} />
      </div>
      <div className="process-track reveal reveal-delay-2">
        <div className="process-line" />
        <div className="process-steps">
          {process.steps.map((step, index) => (
            <div className="process-step" key={step.name}>
              <div className="process-node">
                <ProcessIcon icon={step.icon} />
                <div className="process-step-num">{index + 1}</div>
              </div>
              <div className="process-step-name">{step.name}</div>
              <div className="process-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
