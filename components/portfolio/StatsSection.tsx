import type { PortfolioData } from '../../lib/portfolio-data';

interface StatsSectionProps {
  stats: PortfolioData['stats'];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section id="stats">
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="200" cy="200" rx="350" ry="300" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1000" cy="200" rx="300" ry="250" fill="#FF8646" opacity="0.06" />
      </svg>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className={`stat-card reveal${index === 0 ? '' : ` reveal-delay-${Math.min(index, 4)}`}`} key={stat.label}>
            <div className="stat-num" data-target={stat.target}>
              0
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
