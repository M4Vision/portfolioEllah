import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <img src={footer.logo} alt="logo" width={150} />
      </div>
      <div className="footer-copy">{footer.copyright}</div>
      <div className="footer-tagline">{footer.tagline}</div>
    </footer>
  );
}
