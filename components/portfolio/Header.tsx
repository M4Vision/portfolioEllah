import type { PortfolioData } from '../../lib/portfolio-data';

interface HeaderProps {
  nav: PortfolioData['nav'];
}

export function Header({ nav }: HeaderProps) {
  return (
    <nav id="navbar">
      <a href="#" className="nav-logo" aria-label="Retour en haut">
        <img src={nav.logo} alt="ellah-services-logo" width={150} />
      </a>
      <ul className="nav-links">
        {nav.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={nav.cta.href} className="nav-cta">
            {nav.cta.label}
          </a>
        </li>
      </ul>
    </nav>
  );
}
