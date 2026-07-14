"use client";

import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { contact } from "@/data/content";

const FORMSPREE = "https://formspree.io/f/3045791324738420546";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    const prenom = fd.get("prenom") as string;
    const nom = fd.get("nom") as string;
    const email = fd.get("email") as string;
    const sujet = fd.get("service") as string;
    const message = fd.get("message") as string;

    if (!prenom || !nom || !sujet) {
      alert("Merci de renseigner au moins votre prénom, votre nom et le service souhaité.");
      return;
    }

    setStatus("sending");

    const data = { prenom, nom, email, sujet, message };
    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const btnLabel = status === "idle" ? "Envoyer le message →"
    : status === "sending" ? "Envoi en cours…"
    : status === "sent" ? "Message envoyé ✓"
    : "Erreur — réessayer";

  return (
    <section id="contact">
      <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%" }} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="100" cy="100" rx="300" ry="250" fill="#B17CC4" opacity="0.06" />
        <ellipse cx="1100" cy="600" rx="350" ry="280" fill="#FF8646" opacity="0.05" />
      </svg>
      <div className="contact-grid">
        <div className="contact-info">
          <ScrollReveal>
            <div className="section-tag">{contact.tag}</div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="section-title">
              {contact.titleParts.map((part, i) => (
                <span key={i}>
                  {part.breakBefore && <br />}
                  {part.em ? <em>{part.text}</em> : part.text}
                </span>
              ))}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="contact-desc">{contact.description}</p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-link">
                <div className="contact-link-icon">✉</div>
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-link">
                <div className="contact-link-icon">☎</div>
                {contact.phone}
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={4}>
            <div className="contact-socials">
              {contact.socials.map((s) => (
                <a key={s.title} href={s.href} className="social-btn" title={s.title} target="_blank" rel="noopener noreferrer">
                  <img width={25} src={s.image} alt={s.title} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-prenom">Prénom</label>
                <input type="text" className="form-input" id="cf-prenom" name="prenom" placeholder="Marie" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-nom">Nom</label>
                <input type="text" className="form-input" id="cf-nom" name="nom" placeholder="Dupont" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-email">Email</label>
              <input type="email" className="form-input" id="cf-email" name="email" placeholder="marie@entreprise.com" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-service">Service souhaité</label>
              <select className="form-input" id="cf-service" name="service" style={{ color: "rgba(255,255,255,0.7)" }}>
                <option value="" style={{ color: "#333" }}>Choisir un service...</option>
                {contact.formFields
                  .find((f) => f.type === "select")
                  ?.options?.map((opt) => (
                    <option key={opt} style={{ color: "#333" }}>{opt}</option>
                  ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-message">Votre message</label>
              <textarea className="form-input" id="cf-message" name="message" placeholder="Décrivez votre projet ou besoin..." />
            </div>
            <button className="form-submit" id="cf-submit" type="submit" disabled={status === "sending"}>
              {btnLabel}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
