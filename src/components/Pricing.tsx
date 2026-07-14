import ScrollReveal from "./ScrollReveal";
import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-header">
        <ScrollReveal>
          <div className="section-tag">{pricing.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">
            {pricing.titleParts.map((part, i) => (
              <span key={i}>
                {part.breakBefore && <br />}
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h2>
        </ScrollReveal>
      </div>
      <div className="pricing-grid">
        {pricing.cards.map((card, i) => (
          <ScrollReveal key={card.tag} delay={i}>
            <div className="pricing-card">
              <div className="pricing-tag">{card.tag}</div>
              <div className="pricing-role">{card.role}</div>
              <div className="pricing-from">{card.fromLabel}</div>
              <div className="pricing-amount">
                {card.amount}<span>{card.unit}</span>
              </div>
              <div className="pricing-desc">{card.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={2}>
        <p className="pricing-note">{pricing.note}</p>
      </ScrollReveal>
    </section>
  );
}
