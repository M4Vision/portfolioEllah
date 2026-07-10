import type { PortfolioData } from '../../lib/portfolio-data';

interface VisionSectionProps {
  vision: PortfolioData['vision'];
}

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section id="vision">
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="150" cy="150" rx="250" ry="200" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1050" cy="450" rx="280" ry="220" fill="#FF8646" opacity="0.05" />
        <ellipse cx="600" cy="300" rx="400" ry="200" fill="#430047" opacity="0.03" />
      </svg>
      <div className="vision-inner">
        <div className="section-tag reveal" style={{ justifyContent: 'center' }}>
          Vision
        </div>
        <div className="vision-quote reveal reveal-delay-1" dangerouslySetInnerHTML={{ __html: vision.title }} />
        <p className="vision-text reveal reveal-delay-2" dangerouslySetInnerHTML={{ __html: vision.textHtml }} />
        <div className="vision-values reveal reveal-delay-3">
          {vision.values.map((value) => (
            <span className="vision-val" key={value}>
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
