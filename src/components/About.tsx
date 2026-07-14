import ScrollReveal from "./ScrollReveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about">
      <svg className="about-bg" viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="200" cy="100" rx="300" ry="200" fill="#B17CC4" opacity="0.06" />
        <ellipse cx="1000" cy="500" rx="350" ry="250" fill="#FF8646" opacity="0.05" />
        <path d="M0 300 Q300 150 600 300 Q900 450 1200 200 L1200 600 L0 600Z" fill="white" opacity="0.02" />
      </svg>
      <div className="about-grid">
        <ScrollReveal className="about-photo-frame">
          <div className="about-photo-bg">
            <div className="about-photo-placeholder">
              <img
                src={about.imagePath}
                alt="Tsironiaina"
                width="75%"
                style={{ borderRadius: "40% 60% 65% 45% / 50% 40% 60% 50%" }}
              />
              <div className="about-photo-name">{about.name}</div>
              <div className="about-photo-role">{about.role}</div>
            </div>
          </div>
          {about.badges.map((badge) => (
            <div className={`about-badge ${badge.className}`} key={badge.className}>
              <div className="about-badge-num">{badge.num}</div>
              <div className="about-badge-txt">{badge.txt}</div>
            </div>
          ))}
        </ScrollReveal>

        <div className="about-content">
          <ScrollReveal>
            <div className="section-tag">{about.tag}</div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="section-title">
              {about.titleParts.map((part, i) => (
                <span key={i}>
                  {part.breakBefore && <br />}
                  {part.em ? <em>{part.text}</em> : part.text}
                </span>
              ))}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="about-desc">
              {about.description.split("\n\n").map((para, i) => (
                <span key={i}>{i > 0 && <><br /><br /></>}{para}</span>
              ))}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="about-intersections">
              {about.intersectionPills.map((pill) => (
                <span className="about-pill" key={pill}>{pill}</span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={4}>
            <a href={about.ctaHref} className="btn-primary" style={{ display: "inline-block" }}>
              {about.ctaText}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
