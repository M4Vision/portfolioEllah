"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("navbar");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        <img src="/assets/logo-alt-lavender-1.png" alt="ellah-services-logo" width={150} />
      </a>
      <button className="nav-toggle" onClick={() => setMenuOpen((p) => !p)} aria-label="Menu">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul className={`nav-links${menuOpen ? " nav-open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={link.isCta ? "nav-cta" : undefined} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
