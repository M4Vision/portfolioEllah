import ScrollReveal from "./ScrollReveal";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero">
      <svg className="hero-bg-blobs" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="950" cy="150" rx="400" ry="350" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1050" cy="600" rx="300" ry="280" fill="#FF8646" opacity="0.06" />
        <ellipse cx="100" cy="700" rx="250" ry="200" fill="#430047" opacity="0.04" />
        <path d="M800 0 Q1100 100 1200 400 Q1100 700 900 800 Q700 850 600 600 Q500 350 800 0Z" fill="#F1B5CB" opacity="0.04" />
      </svg>

      <div className="hero-content">
        <ScrollReveal>
          <div className="hero-tag">{hero.tagline}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="hero-title">
            {hero.titleParts.map((part, i) => (
              <span key={i}>
                {part.breakBefore && <br />}
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="hero-subtitle">{hero.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <div className="hero-buttons">
            {hero.buttons.map((btn) => (
              <a
                key={btn.href}
                href={btn.href}
                className={btn.variant === "primary" ? "btn-primary" : "btn-outline"}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="hero-visual">
        {hero.floatingCards.map((card, i) => (
          <div className="orbit-float-card" key={i}>
            <div className="float-card-label">{card.label}</div>
            <div className="float-card-value">{card.value}</div>
            {card.sub && <div className="float-card-sub">{card.sub}</div>}
          </div>
        ))}

        <div className="orbit-wrapper">
          <div className="orbit-ring r1"><div className="orbit-dot" /></div>
          <div className="orbit-ring r2"><div className="orbit-dot" /></div>
          <div className="orbit-ring r3"><div className="orbit-dot" /></div>
          <div className="orbit-center">
            <img src="/assets/logo-alt-lavender-2.png" alt="ellah service" width={250} />
          </div>
        </div>
      </div>
    </section>
  );
}
