import type { PortfolioData } from '../../lib/portfolio-data';

interface AboutSectionProps {
  about: PortfolioData['about'];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about">
      <svg className="about-bg" viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="100" rx="300" ry="200" fill="#B17CC4" opacity="0.06" />
        <ellipse cx="1000" cy="500" rx="350" ry="250" fill="#FF8646" opacity="0.05" />
        <path d="M0 300 Q300 150 600 300 Q900 450 1200 200 L1200 600 L0 600Z" fill="white" opacity="0.02" />
      </svg>

      <div className="about-grid">
        <div className="about-photo-frame reveal">
          <div className="about-photo-bg">
            <div className="about-photo-placeholder">
              <img
                src={about.image}
                alt={about.name}
                style={{ width: '75%', borderRadius: '40% 60% 65% 45% / 50% 40% 60% 50%' }}
              />
              <div className="about-photo-name">{about.name}</div>
              <div className="about-photo-role">{about.role}</div>
            </div>
          </div>
          <div className="about-badge b1">
            <div className="about-badge-num">{about.badges[0].value}</div>
            <div className="about-badge-txt">{about.badges[0].label}</div>
          </div>
          <div className="about-badge b2">
            <div className="about-badge-num">{about.badges[1].value}</div>
            <div className="about-badge-txt">{about.badges[1].label}</div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-tag reveal">À propos</div>
          <h2 className="section-title reveal reveal-delay-1" dangerouslySetInnerHTML={{ __html: about.titleHtml }} />
          <p className="about-desc reveal reveal-delay-2" dangerouslySetInnerHTML={{ __html: about.descriptionHtml }} />
          <div className="about-intersections reveal reveal-delay-3">
            {about.pills.map((pill) => (
              <span className="about-pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
          <a href="#contact" className="btn-primary reveal reveal-delay-4" style={{ display: 'inline-block' }}>
            Travaillons ensemble →
          </a>
        </div>
      </div>
    </section>
  );
}
