"use client";

import { useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { stats } from "@/data/content";

function StatCard({ target, label, delay }: { target: number; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const suffix = target >= 1000 ? "+" : "+";
        let start = 0;
        const dur = 1800;
        const step = (ts: number) => {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (prog < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <ScrollReveal delay={delay}>
      <div className="stat-card">
        <div className="stat-num" ref={ref}>0</div>
        <div className="stat-label">{label}</div>
      </div>
    </ScrollReveal>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <svg style={{ position: "absolute", inset: 0, pointerEvents: "none" }} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="200" cy="200" rx="350" ry="300" fill="#B17CC4" opacity="0.05" />
        <ellipse cx="1000" cy="200" rx="300" ry="250" fill="#FF8646" opacity="0.06" />
      </svg>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} target={stat.target} label={stat.label} delay={i} />
        ))}
      </div>
    </section>
  );
}
