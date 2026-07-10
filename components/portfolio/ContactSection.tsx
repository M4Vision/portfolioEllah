import type { PortfolioData } from '../../lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

interface ContactSectionProps {
  contact: PortfolioData['contact'];
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact">
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="100" cy="100" rx="300" ry="250" fill="#B17CC4" opacity="0.06" />
        <ellipse cx="1100" cy="600" rx="350" ry="280" fill="#FF8646" opacity="0.05" />
      </svg>
      <div className="contact-grid">
        <div className="contact-info">
          <SectionHeading tag="Contact" titleHtml={contact.titleHtml} />
          <p className="contact-desc reveal reveal-delay-2">{contact.description}</p>
          <div className="contact-links reveal reveal-delay-3">
            {contact.links.map((link) => (
              <a key={link.label} href={link.href} className="contact-link">
                <div className="contact-link-icon">{link.icon}</div>
                {link.label}
              </a>
            ))}
          </div>
          <div className="contact-socials reveal reveal-delay-4">
            {contact.socials.map((social) => (
              <a key={social.title} href={social.href} className="social-btn" title={social.title}>
                <img width="25" src={social.image} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form reveal reveal-delay-2">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{contact.form.firstName}</label>
              <input type="text" className="form-input" placeholder={contact.form.placeholderFirstName} />
            </div>
            <div className="form-group">
              <label className="form-label">{contact.form.lastName}</label>
              <input type="text" className="form-input" placeholder={contact.form.placeholderLastName} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">{contact.form.email}</label>
            <input type="email" className="form-input" placeholder={contact.form.placeholderEmail} />
          </div>
          <div className="form-group">
            <label className="form-label">{contact.form.service}</label>
            <select className="form-input" style={{ color: 'rgba(255,255,255,0.7)' }} defaultValue="">
              {contact.form.options.map((option, index) => (
                <option key={option} value={index === 0 ? '' : option} style={{ color: '#333' }}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">{contact.form.message}</label>
            <textarea className="form-input" placeholder={contact.form.placeholderMessage} />
          </div>
          <button className="form-submit" type="button">
            {contact.form.submit}
          </button>
        </div>
      </div>
    </section>
  );
}
