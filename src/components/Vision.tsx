import ScrollReveal from "./ScrollReveal";
import { vision } from "@/data/content";

export default function Vision() {
  const paragraphs = vision.text.split("\n\n");

  return (
    <section id="vision">
      <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="150" cy="150" rx="250" ry="200" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1050" cy="450" rx="280" ry="220" fill="#FF8646" opacity="0.05" />
        <ellipse cx="600" cy="300" rx="400" ry="200" fill="#430047" opacity="0.03" />
      </svg>
      <div className="vision-inner">
        <ScrollReveal>
          <div className="section-tag" style={{ justifyContent: "center" }}>{vision.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="vision-quote">
            {vision.quote.split("\n").map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="vision-text">
            {paragraphs.map((para, i) => (
              <span key={i}>
                {i > 0 && <><br /><br /></>}
                {para}
                {i === paragraphs.length - 1 && vision.highlight && (
                  <strong style={{ color: "var(--deep-purple)", fontWeight: 600 }}>
                    {vision.highlight}
                  </strong>
                )}
              </span>
            ))}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={3}>
          <div className="vision-values">
            {vision.values.map((val) => (
              <span className="vision-val" key={val}>{val}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
