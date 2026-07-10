import type { PortfolioData } from '../../lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

interface ServicesSectionProps {
  services: PortfolioData['services'];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services">
      <div className="services-header">
        <SectionHeading tag="Services" titleHtml={services.titleHtml} />
      </div>
      <div className="services-grid">
        {services.cards.map((card, index) => (
          <div key={card.num} className={`service-card ${card.tone} reveal${index === 0 ? '' : ` reveal-delay-${Math.min(index, 3)}`}`}>
            <div className="service-num">{card.num}</div>
            <div className="service-name">{card.name}</div>
            <div className="service-desc">{card.desc}</div>
            <div className="service-arrow">→</div>
            {index === 0 ? (
              <svg className="service-blob" style={{ bottom: '-40px', right: '-40px', width: '160px', height: '160px' }} viewBox="0 0 160 160">
                <ellipse cx="80" cy="80" rx="70" ry="55" fill="#B17CC4" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
