import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <ScrollReveal>
          <div className="section-tag">{services.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">
            {services.titleParts.map((part, i) => (
              <span key={i}>
                {part.breakBefore && <br />}
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h2>
        </ScrollReveal>
      </div>
      <div className="services-grid">
        {services.cards.map((card, i) => (
          <ScrollReveal key={card.num} delay={i === 3 ? 2 : i}>
            <div className={`service-card ${card.variant}`}>
              <div className="service-num">{card.num}</div>
              <div className="service-name">{card.name}</div>
              <div className="service-desc">{card.desc}</div>
              <div className="service-arrow">→</div>
              {card.hasBlob && (
                <svg className="service-blob" style={{ bottom: -40, right: -40, width: 160, height: 160 }} viewBox="0 0 160 160">
                  <ellipse cx="80" cy="80" rx="70" ry="55" fill="#B17CC4" />
                </svg>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
