import type { PortfolioData } from '../../lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

interface SkillsSectionProps {
  skills: PortfolioData['skills'];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills">
      <div className="skills-header">
        <SectionHeading tag="Compétences" titleHtml={skills.titleHtml} />
      </div>
      <div className="skills-grid">
        {skills.cards.map((card, index) => (
          <div className={`skill-card reveal${index === 0 ? '' : ` reveal-delay-${Math.min(index, 3)}`}`} key={card.name}>
            <div className="skill-name">{card.name}</div>
            <div className="skill-tags">
              {card.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
