import ScrollReveal from "./ScrollReveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <ScrollReveal>
          <div className="section-tag">{skills.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">
            {skills.titleParts.map((part, i) => (
              <span key={i}>
                {part.breakBefore && <br />}
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h2>
        </ScrollReveal>
      </div>
      <div className="skills-grid">
        {skills.cards.map((card, i) => (
          <ScrollReveal key={card.name} delay={i >= 2 ? (i % 2 === 0 ? 0 : 1) : i}>
            <div className="skill-card">
              <div className="skill-name">{card.name}</div>
              <div className="skill-tags">
                {card.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
