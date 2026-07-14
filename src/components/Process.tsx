import ScrollReveal from "./ScrollReveal";
import { process } from "@/data/content";
import { getProcessIcon } from "./ProcessIcons";

export default function Process() {
  return (
    <section id="process">
      <div className="process-header">
        <ScrollReveal>
          <div className="section-tag">{process.tag}</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="section-title">
            {process.titleParts.map((part, i) => (
              <span key={i}>
                {part.breakBefore && <br />}
                {part.em ? <em>{part.text}</em> : part.text}
              </span>
            ))}
          </h2>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={2}>
        <div className="process-track">
          <div className="process-steps">
            {process.steps.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-node">
                  {getProcessIcon(step.svgId)}
                  <div className="process-step-num">{step.num}</div>
                </div>
                <div className="process-step-name">{step.name}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
