import { PortfolioApp } from '../components/portfolio/PortfolioApp';
import { portfolioData } from '../lib/portfolio-data';

export default function Page() {
  return <PortfolioApp data={portfolioData} />;
}
