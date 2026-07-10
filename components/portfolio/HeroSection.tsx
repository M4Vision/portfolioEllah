import type { PortfolioData } from '../../lib/portfolio-data';

interface HeroSectionProps {
  hero: PortfolioData['hero'];
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="hero">
      <svg className="hero-bg-blobs" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="950" cy="150" rx="400" ry="350" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1050" cy="600" rx="300" ry="280" fill="#FF8646" opacity="0.06" />
        <ellipse cx="100" cy="700" rx="250" ry="200" fill="#430047" opacity="0.04" />
        <path d="M800 0 Q1100 100 1200 400 Q1100 700 900 800 Q700 850 600 600 Q500 350 800 0Z" fill="#F1B5CB" opacity="0.04" />
      </svg>

      <div className="hero-content">
        <div className="hero-tag reveal">{hero.tag}</div>
        <h1 className="hero-title reveal reveal-delay-1" dangerouslySetInnerHTML={{ __html: hero.titleHtml }} />
        <p className="hero-subtitle reveal reveal-delay-2">{hero.subtitle}</p>
        <div className="hero-buttons reveal reveal-delay-3">
          {hero.buttons.map((button) =>
            button.variant === 'primary' ? (
              <a key={button.href} href={button.href} className="btn-primary">
                {button.label}
              </a>
            ) : (
              <a key={button.href} href={button.href} className="btn-outline">
                {button.label}
              </a>
            )
          )}
        </div>
      </div>

      <div className="hero-visual">
        {hero.floats.map((card) => (
          <div className="orbit-float-card" key={card.label}>
            <div className="float-card-label">{card.label}</div>
            <div className="float-card-value">{card.value}</div>
            {card.sub ? <div className="float-card-sub">{card.sub}</div> : null}
          </div>
        ))}

        <div className="orbit-wrapper">
          <div className="orbit-ring r1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r3">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-center">
            <img src={hero.logo} alt="ellah service" width={250} />
          </div>
        </div>
      </div>
    </section>
  );
}
