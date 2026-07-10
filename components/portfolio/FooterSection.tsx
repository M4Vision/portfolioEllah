import type { PortfolioData } from '../../lib/portfolio-data';

interface FooterSectionProps {
  footer: PortfolioData['footer'];
}

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer>
      <div className="footer-brand">
        <img src={footer.logo} alt="logo" width={150} />
      </div>
      <div className="footer-copy">{footer.copy}</div>
      <div className="footer-tagline">{footer.tagline}</div>
    </footer>
  );
}
